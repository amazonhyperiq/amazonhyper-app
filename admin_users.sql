-- =========================================================
-- أمازون هايبر ماركت — مستخدمو لوحة الإدارة
-- شغّل هذا الملف مرة واحدة في Supabase SQL Editor.
-- =========================================================

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  display_name text not null default '',
  password_hash text not null,
  permissions jsonb not null default '["dashboard"]'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_sessions (
  token uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.admin_users(id) on delete cascade,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '12 hours')
);

alter table public.admin_users enable row level security;
alter table public.admin_sessions enable row level security;

-- لا تسمح للواجهة بقراءة الجداول مباشرة؛ التعامل يكون عبر الدوال أدناه.
drop policy if exists admin_users_no_direct_access on public.admin_users;
drop policy if exists admin_sessions_no_direct_access on public.admin_sessions;
create policy admin_users_no_direct_access on public.admin_users for all to anon using (false) with check (false);
create policy admin_sessions_no_direct_access on public.admin_sessions for all to anon using (false) with check (false);

create or replace function public.admin_login(p_username text, p_password text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  u public.admin_users%rowtype;
  t uuid;
begin
  select * into u
  from public.admin_users
  where lower(username)=lower(trim(p_username))
  limit 1;

  if u.id is null or not u.active or crypt(p_password, u.password_hash) <> u.password_hash then
    return jsonb_build_object('ok',false,'message','اسم المستخدم أو كلمة المرور غير صحيحة.');
  end if;

  delete from public.admin_sessions where expires_at < now();
  insert into public.admin_sessions(user_id) values (u.id) returning token into t;

  return jsonb_build_object(
    'ok',true,
    'token',t,
    'user_id',u.id,
    'username',u.username,
    'display_name',u.display_name,
    'permissions',u.permissions
  );
end;
$$;

grant execute on function public.admin_login(text,text) to anon, authenticated;

create or replace function public.admin_session_user(p_token uuid)
returns public.admin_users
language sql
security definer
set search_path = public, extensions
as $$
  select u.*
  from public.admin_sessions s
  join public.admin_users u on u.id=s.user_id
  where s.token=p_token and s.expires_at > now() and u.active=true
  limit 1;
$$;
grant execute on function public.admin_session_user(uuid) to anon, authenticated;

create or replace function public.admin_list_users(p_token uuid)
returns table(id uuid, username text, display_name text, permissions jsonb, active boolean, created_at timestamptz)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare me public.admin_users%rowtype;
begin
  me := public.admin_session_user(p_token);
  if me.id is null or not (me.permissions ? 'users') then
    raise exception 'غير مصرح لك بإدارة المستخدمين';
  end if;
  return query select u.id,u.username,u.display_name,u.permissions,u.active,u.created_at
  from public.admin_users u order by u.created_at asc;
end;
$$;
grant execute on function public.admin_list_users(uuid) to anon, authenticated;

create or replace function public.admin_create_user(
  p_token uuid,
  p_username text,
  p_password text,
  p_display_name text,
  p_permissions jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare me public.admin_users%rowtype; new_id uuid; clean_username text;
begin
  me := public.admin_session_user(p_token);
  if me.id is null or not (me.permissions ? 'users') then raise exception 'غير مصرح لك بإضافة المستخدمين'; end if;
  clean_username := lower(trim(p_username));
  if length(clean_username) < 3 then raise exception 'اسم المستخدم قصير جداً'; end if;
  if length(p_password) < 6 then raise exception 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'; end if;
  if exists(select 1 from public.admin_users where username=clean_username) then raise exception 'اسم المستخدم مستخدم مسبقاً'; end if;
  insert into public.admin_users(username,display_name,password_hash,permissions)
  values(clean_username,coalesce(trim(p_display_name),''),crypt(p_password,gen_salt('bf')),coalesce(p_permissions,'["dashboard"]'::jsonb))
  returning id into new_id;
  return jsonb_build_object('ok',true,'id',new_id);
end;
$$;
grant execute on function public.admin_create_user(uuid,text,text,text,jsonb) to anon, authenticated;

create or replace function public.admin_toggle_user(p_token uuid, p_user_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare me public.admin_users%rowtype; target public.admin_users%rowtype;
begin
  me := public.admin_session_user(p_token);
  if me.id is null or not (me.permissions ? 'users') then raise exception 'غير مصرح لك'; end if;
  select * into target from public.admin_users where id=p_user_id;
  if target.id is null then raise exception 'المستخدم غير موجود'; end if;
  if target.id=me.id then raise exception 'لا يمكن إيقاف حسابك الحالي'; end if;
  update public.admin_users set active=not active where id=target.id;
  return jsonb_build_object('ok',true);
end;
$$;
grant execute on function public.admin_toggle_user(uuid,uuid) to anon, authenticated;

-- إنشاء الحساب الرئيسي الحالي إذا لم يكن موجوداً.
insert into public.admin_users(username,display_name,password_hash,permissions)
select 'omar','المدير العام',crypt('200516',gen_salt('bf')),
       '["dashboard","sections","products","offers","delivery","orders","reports","users","siteContent","heroBanner","ticker"]'::jsonb
where not exists(select 1 from public.admin_users where lower(username)='omar');
