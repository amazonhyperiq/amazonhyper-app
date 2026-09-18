const SUPABASE_URL = "https://vvexorzjkpwduykinwsw.supabase.co";
const SUPABASE_KEY = "sb_publishable_RoMHq19grLJWNu95uPSwug_XwiKt2bB";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


/* =====================================================
   الأقسام
===================================================== */

const CATEGORY_IMAGE_MAP = {
  meat: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80",
  chicken: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80",
  vegetables: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
  "canned-veg": "https://images.unsplash.com/photo-1621939514649-280e2aa8a736?auto=format&fit=crop&w=600&q=80",
  food: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  "deli-pickles": "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80",
  "legumes-packaging": "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80",
  drinks: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80",
  dairy: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80",
  cleaning: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80",
  laundry: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80",
  cosmetic: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
  "tissues-paper": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
  "cleaning-tools": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
};


function resolveStoreImage(src){
  const value=String(src||"").trim();
  if(!value) return "";
  if(value.startsWith("icons/categories/")){
    const file=value.split("/").pop().split("?")[0].replace(/\.(jpg|jpeg|png|webp)$/i,"");
    const alias={
      vegetables:"vegetables", meat:"meat", chicken:"chicken", food:"food", dairy:"dairy",
      canned:"canned-veg", grains:"legumes-packaging", drinks:"drinks", cleaning:"cleaning",
      "personal-care":"cosmetic", household:"cleaning-tools"
    };
    return CATEGORY_IMAGE_MAP[alias[file]] || value;
  }
  return value;
}

function getCategoryImage(category){
  if(category && category.image){
    return resolveStoreImage(category.image);
  }
  return CATEGORY_IMAGE_MAP[String(category?.id || "")] || "";
}

let categories = [
  {id:"meat",name:"اللحوم الطازجة",icon:"🥩"},
  {id:"chicken",name:"الدجاج فريش",icon:"🍗"},
  {id:"vegetables",name:"الفواكه والخضار",icon:"🥬"},
  {id:"canned-veg",name:"الخضراوات المعلبة (فريش)",icon:"🥫"},
  {id:"food",name:"الرز والزيت والمعجون (المواد الغذائية)",icon:"🛒"},
  {id:"deli-pickles",name:"الأجبان والألبان والمخللات (الدلي)",icon:"🧀"},
  {id:"legumes-packaging",name:"البقوليات ومواد التعبئة (الوزن)",icon:"⚖️"},
  {id:"drinks",name:"العصائر والمشروبات",icon:"🥤"},
  {id:"dairy",name:"الأجبان والألبان",icon:"🥛"},
  {id:"cleaning",name:"مواد التنظيف المنزلية",icon:"🧴"},
  {id:"laundry",name:"مساحيق غسيل الملابس",icon:"🧺"},
  {id:"cosmetic",name:"مواد العناية بالشعر والبشرة والجسم",icon:"💄"},
  {id:"tissues-paper",name:"الكلينس والورقيات",icon:"🧻"},
  {id:"cleaning-tools",name:"أدوات التنظيف المنزلية",icon:"🧽"}
];


/* =====================================================
   المنتجات الافتراضية
===================================================== */

let products = [
  {
    id:1,
    cat:"food",
    name:"رز عنبر",
    price:3000,
    unit:"قطعة",
    icon:"🍚"
  },

  {
    id:2,
    cat:"food",
    name:"زيت طبخ",
    price:4500,
    unit:"قطعة",
    icon:"🫗"
  },

  {
    id:3,
    cat:"food",
    name:"سكر",
    price:1500,
    unit:"قطعة",
    icon:"🍬"
  },

  {
    id:4,
    cat:"food",
    name:"معجون طماطم",
    price:1000,
    unit:"قطعة",
    icon:"🥫"
  },

  {
    id:5,
    cat:"cleaning",
    name:"مسحوق غسيل",
    price:7500,
    unit:"قطعة",
    icon:"🧺"
  },

  {
    id:6,
    cat:"cleaning",
    name:"سائل جلي",
    price:3000,
    unit:"قطعة",
    icon:"🧽"
  },

  {
    id:7,
    cat:"cosmetic",
    name:"شامبو",
    price:6500,
    unit:"قطعة",
    icon:"🧴"
  },

  {
    id:8,
    cat:"cosmetic",
    name:"كريم مرطب",
    price:8500,
    unit:"قطعة",
    icon:"🧴"
  },

  {
    id:9,
    cat:"meat",
    name:"لحم غنم بالعظم",
    price:22000,
    unit:"كغم",
    icon:"🥩"
  },

  {
    id:10,
    cat:"meat",
    name:"لحم غنم شرح",
    price:27000,
    unit:"كغم",
    icon:"🥩"
  },

  {
    id:11,
    cat:"chicken",
    name:"دجاج ذبح عراقي",
    price:5750,
    unit:"قطعة",
    icon:"🍗"
  },

  {
    id:12,
    cat:"vegetables",
    name:"طماطم",
    price:2000,
    unit:"كغم",
    icon:"🍅"
  }
];


/* =====================================================
   تحميل الأقسام والمنتجات والعروض ومناطق التوصيل
===================================================== */

async function loadProductsFromSupabase(){

  try{

    const { data, error } =
      await supabaseClient
        .from("products")
        .select("data")
        .eq("id",1)
        .single();


    if(error){

      console.error(
        "Supabase products error:",
        error
      );

      return;
    }


    if(!data || !data.data){

      console.error(
        "لم يتم العثور على بيانات المتجر"
      );

      return;
    }


    const saved =
      data.data;

    /* ==============================================
       تحميل محتوى الصفحة الرئيسية
    ============================================== */
    if(saved.siteContent){
      siteContent = {
        ...siteContent,
        ...saved.siteContent
      };
    }

    if(saved.heroBanner){
      heroBanner = { ...heroBanner, ...saved.heroBanner };
    }
    if(Array.isArray(saved.heroBanners)){
      heroBanners = saved.heroBanners;
    }else if(heroBanner && Object.keys(heroBanner).length){
      heroBanners = [heroBanner];
    }



    /* ==============================================
       تحميل العروض
    ============================================== */

    if(
      Array.isArray(saved.offers)
    ){

      offers =
        saved.offers;

    }else{

      offers = [];

    }


    /* ==============================================
       تحميل مناطق التوصيل
    ============================================== */

    if(
      Array.isArray(saved.deliveryGroups)
    ){

      deliveryGroups =
        saved.deliveryGroups;

    }else{

      deliveryGroups = [];

    }


      /* ==============================================
       تحميل الأقسام التي أنشأها المدير
    ============================================== */

    if(
      Array.isArray(saved.categories) &&
      saved.categories.length
    ){

      categories =
        saved.categories.map(c => ({

          id:
            String(c.id),

          name:
            String(
              c.name || "قسم"
            ),

          icon:
            String(
              c.icon || "🛒"
            ),

          image:
            c.image ? String(c.image) : "",

          unit:
            c.unit === "وزن (كغ)"
              ? "وزن (كغ)"
              : "قطعة",

          step:
            Number(c.step) > 0
              ? Number(c.step)
              : 1,
          parentId:
            c.parentId ?? c.parent_id ?? c.parent ?? null

        }));

      // العلاقة الوحيدة المعتمدة بين القسم الرئيسي والفرعي هي parentId.
      // لا نعيد بناء subcategories من بيانات قديمة حتى لا يظهر الفرع كقسم رئيسي بالخطأ.

    }


    /* ==============================================
       تحميل المنتجات
    ============================================== */

    const dbProducts = [];


    if(
      Array.isArray(saved.products)
    ){

      saved.products.forEach(
        product => {

          if(
            product.active === false
          ){

            return;

          }


          dbProducts.push({

            id:product.id,

            cat:product.cat,

            name:product.name,

            price:
              Number(product.price) || 0,

            unit:
              product.unit || "قطعة",

            step:
              Number(product.step) > 0
                ? Number(product.step)
                : 1,

            image:
              product.image ? String(product.image) : "",
            subcategory:
              product.subcategory || product.subCategory || product.subcat || "",
            manufacturer:
              product.manufacturer || product.company || product.brand || "",
            icon:
              product.icon || "🛒"

          });

        }
      );

    }


    /* ==============================================
       دعم البيانات القديمة
    ============================================== */

    else if(
      Array.isArray(saved.store)
    ){

      saved.store.forEach(
        category => {

          if(!category.products){

            return;

          }


          category.products.forEach(
            product => {

              if(
                product.active === false
              ){

                return;

              }


              const rawCat =
                category.category ||
                "food";


              const matched =
                categories.find(
                  c =>
                    c.id === rawCat ||
                    c.name === rawCat
                );


              dbProducts.push({

                id:
                  dbProducts.length + 1,

                cat:
                  matched
                    ? matched.id
                    : rawCat,

                name:
                  product.name,

                price:
                  Number(product.price) || 0,

                unit:
                  product.unit || "قطعة",

                step:
                  Number(product.step) > 0
                    ? Number(product.step)
                    : 1,

                icon:
                  product.icon || "🛒"

              });

            }
          );

        }
      );

    }


    // منع تكرار نفس المادة في واجهة الزبون إذا وصلت البيانات مكررة
    // من أي مصدر/نسخة قديمة. نعتمد ID المادة فقط ولا ندمج مواد مختلفة.
    const seenProductIds = new Set();
    products = dbProducts.filter(product => {
      const key = String(product?.id ?? "").trim();
      if(!key) return true;
      if(seenProductIds.has(key)) return false;
      seenProductIds.add(key);
      return true;
    });


    /* ==============================================
       التأكد من وجود القسم المحدد
    ============================================== */

    if(!categories.some(c=>String(c.id)===String(selectedCategory))){
      selectedCategory = "";
      activeCategoryRoot = "";
    }


    renderHeroBanner();
    renderCategories();

    renderOffers();

    renderDeliveryGroups();

    renderProducts();

    updateCart();


    console.log(
      "تم تحميل الأقسام والمنتجات والعروض ومناطق التوصيل:",
      categories.length,
      products.length,
      offers.length,
      deliveryGroups.length
    );


  }catch(err){

    console.error(
      "Supabase connection error:",
      err
    );

  }

}


/* =====================================================
   العروض
===================================================== */

let offers = [];


/* =====================================================
   مناطق التوصيل
===================================================== */

let deliveryGroups = [];


/* =====================================================
   السلة والقسم المحدد
===================================================== */

let selectedCategory = "";
let activeCategoryRoot = "";

/* البحث عن المواد للزبون */
let productSearchQuery = "";

const cart = new Map();
let isSubmittingOrder = false;


/* =====================================================
   تنسيق العملة
===================================================== */

const money = n =>
  new Intl.NumberFormat("ar-IQ")
    .format(n) +
  " د.ع";


/* =====================================================
   عرض الأقسام
===================================================== */

function getCategorySubcategories(categoryId){
  const result = [];
  categories.filter(c => {
    const p = c.parentId ?? c.parent_id ?? c.parent;
    return p != null && String(p) === String(categoryId);
  }).forEach(c => {
    result.push({id:String(c.id),name:String(c.name||"قسم"),image:c.image?String(c.image):"",icon:c.icon||"▦"});
  });
  return result;
}

function getCategoryChildrenIds(categoryId){
  const ids=[String(categoryId)];
  const seen=new Set(ids);
  let changed=true;
  while(changed){
    changed=false;
    categories.forEach(c=>{
      const p=c.parentId ?? c.parent_id ?? c.parent;
      if(p!=null && seen.has(String(p)) && !seen.has(String(c.id))){
        seen.add(String(c.id)); ids.push(String(c.id)); changed=true;
      }
    });
  }
  return ids;
}

function getActiveCategoryRoot(){
  const selected=categories.find(c=>String(c.id)===String(selectedCategory));
  const rootId=activeCategoryRoot || (selected && !(selected.parentId??selected.parent_id??selected.parent) ? selected.id : (selected ? (selected.parentId??selected.parent_id??selected.parent) : ""));
  return categories.find(c=>String(c.id)===String(rootId)) || null;
}

function renderCategorySubnav(){
  const root=getActiveCategoryRoot();
  if(!root){
    document.getElementById("categorySubnav")?.classList.remove("show");
    return;
  }
  let nav=document.getElementById("categorySubnav");
  if(!nav){
    nav=document.createElement("div"); nav.id="categorySubnav"; nav.className="category-subnav";
    document.getElementById("categoriesSection")?.appendChild(nav);
  }
  const subs=categories.filter(c=>String(c.parentId??c.parent_id??c.parent??"")===String(root.id)&&c.visible!==false&&c.hidden!==true&&c.active!==false);
  const title=root.name||"القسم";
  nav.innerHTML=`<div class="category-detail-head"><div><span class="category-detail-kicker">تفاصيل القسم</span><h3>${escapeHtml(title)}</h3></div><button type="button" class="category-back" id="categoryBackBtn">‹ الأقسام</button></div><div class="category-subnav-track" role="tablist" aria-label="التصنيفات الفرعية"><button type="button" class="category-subtab ${String(selectedCategory)===String(root.id)?"active":""}" data-subcat=""><span class="category-subtab-icon">▦</span><span>الكل</span></button>${subs.map(sub=>`<button type="button" class="category-subtab ${String(selectedCategory)===String(sub.id)?"active":""}" data-subcat="${escapeHtml(sub.id)}"><span class="category-subtab-icon">${sub.image?`<img src="${escapeHtml(resolveStoreImage(sub.image))}" alt="" loading="lazy">`:escapeHtml(sub.icon||"▦")}</span><span>${escapeHtml(sub.name)}</span></button>`).join("")}</div>`;
  nav.classList.add("show");
  nav.querySelector("#categoryBackBtn")?.addEventListener("click",()=>{
    selectedCategory=""; activeCategoryRoot=""; nav.classList.remove("show"); renderCategories(); renderProducts(); updateCart();
    document.getElementById("productsTitle")?.replaceChildren(document.createTextNode("المواد"));
  });
  nav.querySelectorAll(".category-subtab").forEach(btn=>btn.addEventListener("click",()=>{
    selectedCategory=btn.dataset.subcat?String(btn.dataset.subcat):String(root.id);
    setProductSearchQuery(""); renderCategories(); renderCategorySubnav(); renderProducts(btn.dataset.subcat||"");
    document.getElementById("productsTitle")?.replaceChildren(document.createTextNode(btn.dataset.subcat?getCategoryName(btn.dataset.subcat):title));
    document.getElementById("productsSection")?.scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

function renderCategories(){
  const el=document.getElementById("categories"); if(!el) return;
  const visibleMain=categories.filter(c=>!(c.parentId??c.parent_id??c.parent)&&c.visible!==false&&c.hidden!==true&&c.active!==false);
  const root=getActiveCategoryRoot();
  const subs=root?categories.filter(c=>String(c.parentId??c.parent_id??c.parent??"")===String(root.id)&&c.visible!==false&&c.hidden!==true&&c.active!==false):[];
  const shown=root&&subs.length?[root,...subs]:visibleMain;
  el.innerHTML=shown.map((c,i)=>`<button class="category ${String(c.id)===String(selectedCategory)?"active":""} ${root&&i>0?"subcategory-card":""}" data-cat="${escapeHtml(c.id)}" data-root="${escapeHtml(root?.id||"")}" type="button"><div class="category-icon">${getCategoryImage(c)?`<img src="${escapeHtml(getCategoryImage(c))}" alt="${escapeHtml(c.name||"")}" loading="lazy">`:escapeHtml(c.icon||"🛒")}</div><strong>${escapeHtml(c.name||"قسم")}</strong>${root&&i>0?`<small>فرعي من ${escapeHtml(root.name||"")}</small>`:""}</button>`).join("");
  el.querySelectorAll(".category").forEach(btn=>btn.addEventListener("click",()=>{
    const clicked=categories.find(c=>String(c.id)===String(btn.dataset.cat)); if(!clicked)return;
    const parent=clicked.parentId??clicked.parent_id??clicked.parent;
    if(parent){ activeCategoryRoot=String(parent); selectedCategory=String(clicked.id); }
    else { activeCategoryRoot=String(clicked.id); selectedCategory=String(clicked.id); }
    setProductSearchQuery(""); renderCategories(); renderCategorySubnav(); renderProducts(parent?String(clicked.id):"");
    document.getElementById("productsTitle")?.replaceChildren(document.createTextNode(getCategoryName(selectedCategory)||"المواد"));
    document.getElementById("productsSection")?.scrollIntoView({behavior:"smooth",block:"start"});
  }));
}


/* =====================================================
   عرض العروض
===================================================== */

let offerBannerIndex=0,offerBannerTimer=null;
function getActiveOffers(){
 const now=new Date();
 return (Array.isArray(offers)?offers:[]).filter(o=>{
  if(!o||o.enabled===false||o.active===false)return false;
  const from=o.from??o.startDate??o.start_date; const to=o.to??o.endDate??o.end_date;
  if(from && now < new Date(String(from)+'T00:00:00')) return false;
  if(to && now > new Date(String(to)+'T23:59:59')) return false;
  return true;
 });
}
function showOfferDetails(o){
 const items=Array.isArray(o?.items)?o.items:[];
 let box=document.getElementById('offerDetailsModal');
 if(!box){box=document.createElement('div');box.id='offerDetailsModal';box.className='offer-details-modal';box.innerHTML='<div class="offer-details-box"><button type="button" class="offer-details-close">×</button><div id="offerDetailsBody"></div></div>';document.body.appendChild(box);box.querySelector('.offer-details-close').onclick=()=>box.classList.remove('show');box.addEventListener('click',e=>{if(e.target===box)box.classList.remove('show')});}
 const body=box.querySelector('#offerDetailsBody');
 body.innerHTML=`<span class="offer-details-kicker">عرض خاص</span><h2>${escapeHtml(o?.title||o?.name||'عرض خاص')}</h2><p>${escapeHtml(o?.description||'')}</p><div class="offer-details-items">${items.map(it=>{const img=resolveStoreImage(it.image||'');return `<div class="offer-details-item">${img?`<img src="${escapeHtml(img)}" alt="" loading="lazy">`:''}<div><b>${escapeHtml(it.name||'مادة')}</b><div>${Number(it.oldPrice)>0&&Number(it.oldPrice)!==Number(it.newPrice)?`<del>${money(it.oldPrice)}</del> `:''}<strong>${money(it.newPrice||it.offerPrice||0)} د.ع</strong></div></div></div>`}).join('')}</div>`;
 box.classList.add('show');
}
function renderOffers(){
 const el=document.getElementById('offerCards'); if(!el)return;
 const list=getActiveOffers(); if(offerBannerTimer){clearInterval(offerBannerTimer);offerBannerTimer=null;}
 if(!list.length){el.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:30px;color:#6b756f">لا توجد عروض خاصة حالياً.</div>';return;}
 offerBannerIndex=Math.min(offerBannerIndex,list.length-1);
 el.className='offer-banner-carousel';
 el.innerHTML=`<div class="offer-banner-viewport"><div class="offer-banner-track">${list.map((o,i)=>{
   const img=resolveStoreImage(o.image||o.bannerImage||o.photo||'');
   const items=Array.isArray(o.items)?o.items:[];
   return `<article class="offer-banner-slide" data-index="${i}" data-duration="${Math.max(1,Number(o.duration??o.displaySeconds??7)||7)}"><div class="offer-banner-image">${img?`<img src="${escapeHtml(img)}" alt="${escapeHtml(o.title||o.name||'عرض')}" loading="lazy">`:'<div class="offer-banner-placeholder">عرض خاص</div>'}</div><div class="offer-banner-copy"><span>عرض خاص</span><h3>${escapeHtml(o.title||o.name||'عرض خاص')}</h3><p>${escapeHtml(o.description||'')}</p><button type="button" class="offer-banner-btn" data-offer-index="${i}">تسوق الآن ←</button></div></article>`;
 }).join('')}</div></div><button type="button" class="offer-banner-arrow prev" aria-label="السابق">‹</button><button type="button" class="offer-banner-arrow next" aria-label="التالي">›</button><div class="offer-banner-dots">${list.map((_,i)=>`<button type="button" class="offer-banner-dot ${i===offerBannerIndex?'active':''}" data-i="${i}"></button>`).join('')}</div>`;
 const track=el.querySelector('.offer-banner-track');
 const show=()=>{track.style.transform=`translateX(${offerBannerIndex*100}%)`;el.querySelectorAll('.offer-banner-dot').forEach((d,i)=>d.classList.toggle('active',i===offerBannerIndex));};
 const go=(i)=>{offerBannerIndex=(i+list.length)%list.length;show();schedule();};
 const schedule=()=>{if(offerBannerTimer)clearTimeout(offerBannerTimer);const ms=Math.max(1000,Number(list[offerBannerIndex].duration??list[offerBannerIndex].displaySeconds??7)*1000);offerBannerTimer=setTimeout(()=>go(offerBannerIndex+1),ms);};
 el.querySelector('.prev').onclick=()=>go(offerBannerIndex-1);el.querySelector('.next').onclick=()=>go(offerBannerIndex+1);
 el.querySelectorAll('.offer-banner-dot').forEach(d=>d.onclick=()=>go(Number(d.dataset.i)));
 el.querySelectorAll('[data-offer-index]').forEach(b=>b.onclick=()=>showOfferDetails(list[Number(b.dataset.offerIndex)]));
 show();schedule();
}

/* =====================================================
   تنسيق تاريخ العرض
===================================================== */

function formatOfferDate(
  date
){

  if(!date){

    return "";

  }


  const parts =
    String(date).split("-");


  if(parts.length === 3){

    return `${parts[2]}/${parts[1]}`;

  }


  return date;

}


/* =====================================================
   عرض مناطق التوصيل
===================================================== */

function renderDeliveryGroups(){

  const groupSelect =
    document.getElementById(
      "deliveryGroup"
    );


  const areaSelect =
    document.getElementById(
      "deliveryArea"
    );


  if(
    !groupSelect ||
    !areaSelect
  ){

    return;

  }


  groupSelect.innerHTML =
    `
      <option value="">
        اختر المنطقة الرئيسية
      </option>
    `;


  areaSelect.innerHTML =
    `
      <option value="">
        اختر المنطقة
      </option>
    `;


  areaSelect.disabled =
    true;


  if(
    !Array.isArray(
      deliveryGroups
    )
  ){

    deliveryGroups = [];

  }


  deliveryGroups.forEach(
    (
      group,
      index
    ) => {

      if(
        !group ||
        !group.name ||
        group.active === false
      ){

        return;

      }


      const option =
        document.createElement(
          "option"
        );


      option.value =
        String(index);


      option.textContent =
        group.name;


      groupSelect.appendChild(
        option
      );

    }
  );


  groupSelect.onchange =
  function(){

    const index =
      Number(
        this.value
      );


    areaSelect.innerHTML =
      `
        <option value="">
          اختر المنطقة
        </option>
      `;


    areaSelect.disabled =
      true;


    hideDeliverySummary();


    if(
      Number.isNaN(index) ||
      !deliveryGroups[index]
    ){

      updateCart();
      return;

    }


    const group =
      deliveryGroups[index];


    if(
      !Array.isArray(
        group.areas
      ) ||
      group.areas.length === 0
    ){

      return;

    }


    group.areas.forEach(
      (
        area,
        areaIndex
      ) => {

        if(
          !area ||
          !area.name ||
          area.active === false ||
          group.active === false
        ){

          return;

        }


        const option =
          document.createElement(
            "option"
          );


        option.value =
          String(areaIndex);


        option.textContent =
          `${area.name} — ${money(
            Number(area.fee) || 0
          )}`;


        areaSelect.appendChild(
          option
        );

      }
    );


    areaSelect.disabled =
      false;

    updateCart();

  };


  areaSelect.onchange =
  function(){

    const groupIndex =
      Number(
        groupSelect.value
      );


    const areaIndex =
      Number(
        this.value
      );


    if(
      Number.isNaN(
        groupIndex
      ) ||
      Number.isNaN(
        areaIndex
      ) ||
      !deliveryGroups[
        groupIndex
      ] ||
      !deliveryGroups[
        groupIndex
      ].areas ||
      !deliveryGroups[
        groupIndex
      ].areas[
        areaIndex
      ]
    ){

      hideDeliverySummary();

      return;

    }


    const group =
      deliveryGroups[
        groupIndex
      ];


    const area =
      group.areas[
        areaIndex
      ];


    const fee =
      Number(
        area.fee
      ) || 0;


    showDeliverySummary(
      group.name,
      area.name,
      fee
    );

    // تحديث إجمالي السلة فور تغيير منطقة التوصيل.
    updateCart();

  };

}


/* =====================================================
   إظهار أجور التوصيل
===================================================== */

function showDeliverySummary(
  groupName,
  areaName,
  fee
){

  const summary =
    document.getElementById(
      "deliverySummary"
    );


  const feeElement =
    document.getElementById(
      "deliveryFee"
    );


  const areaText =
    document.getElementById(
      "deliveryAreaText"
    );


  if(!summary){

    return;

  }


  if(feeElement){

    feeElement.textContent =
      money(fee);

  }


  if(areaText){

    areaText.textContent =
      `${groupName} — ${areaName}`;

  }


  summary.style.display =
    "flex";

}


/* =====================================================
   إخفاء أجور التوصيل
===================================================== */

function hideDeliverySummary(){

  const summary =
    document.getElementById(
      "deliverySummary"
    );


  if(summary){

    summary.style.display =
      "none";

  }

}


/* =====================================================
   عرض المنتجات
===================================================== */

function escapeHtml(value){return String(value ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}
function productImageMarkup(product,cls="product-image"){
  const src=String(product?.image||"").trim();
  return src?`<img class="${cls}" src="${escapeHtml(src)}" alt="${escapeHtml(product?.name||"مادة")}" loading="lazy">`:`<div class="product-placeholder">${escapeHtml(product?.icon||"🛒")}</div>`;
}
function renderProducts(subcategoryFilter=""){
  const el=document.getElementById("productsGrid"); if(!el) return;
  if(!el.dataset.bound){
    el.addEventListener("click",event=>{
      const qty=event.target.closest("button[data-product-id]");
      if(qty&&el.contains(qty)){
        const id=qty.dataset.productId;
        if(qty.classList.contains("product-qty-plus")||qty.classList.contains("product-quick")) changeQty(id,1);
        else if(qty.classList.contains("product-qty-minus")) changeQty(id,-1);
        return;
      }
      const target=event.target.closest(".product-image-wrap[data-product-id],.product-info[data-product-id]");
      if(target&&el.contains(target)) openProductModal(target.dataset.productId);
    });
    el.dataset.bound="1";
  }
  let list=getFilteredProducts();
  if(subcategoryFilter){
    const isRealCategory = categories.some(c => String(c.id) === String(subcategoryFilter));
    if(isRealCategory){
      // اختيار قسم رئيسي يعرض مواده المباشرة فقط؛ المواد التابعة للأقسام الفرعية
      // لا تُنسب للرئيسي ولا تتكرر معه. تظهر عند اختيار الفرع نفسه.
      list = products.filter(p => String(p.cat) === String(subcategoryFilter));
      if(normalizeArabicSearch(productSearchQuery)){
        const q=normalizeArabicSearch(productSearchQuery);
        list=list.filter(p=>getSearchableProductText(p).includes(q));
      }
    }else{
      list=list.filter(p=>String(p.subcategory||"")===String(subcategoryFilter));
    }
  }
  el.innerHTML=list.map(p=>{
    const q=Number(cart.get(p.id)||0), pid=escapeHtml(p.id), qtyText=Number.isInteger(q)?String(q):q.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
    return `<article class="product" data-product-id="${pid}"><div class="product-image-wrap" data-product-id="${pid}">${productImageMarkup(p)}<button class="product-quick" type="button" data-product-id="${pid}">+</button></div><div class="product-info" data-product-id="${pid}"><h3>${escapeHtml(p.name||"مادة")}</h3><div class="product-meta">${escapeHtml(p.unit||"قطعة")}</div><div class="product-price">${money(Number(p.price||0))} <small>/ ${escapeHtml(p.unit||"قطعة")}</small></div></div><div class="qty"><button class="product-qty-plus" type="button" data-product-id="${pid}">+</button><span>${qtyText}</span><button class="product-qty-minus" type="button" data-product-id="${pid}">−</button></div></article>`;
  }).join("")||`<div style="grid-column:1/-1;text-align:center;padding:30px;color:#6b756f;font-weight:800">${normalizeArabicSearch(productSearchQuery)?"لا توجد مواد مطابقة للبحث حالياً.":"لا توجد مواد في هذا القسم حالياً."}</div>`;
}
let selectedProductForModal=null;
function openProductModal(id){
  const product=products.find(p=>String(p.id)===String(id)); if(!product) return; selectedProductForModal=product;
  const modal=document.getElementById("productModal"); if(!modal) return;
  document.getElementById("productModalImage").innerHTML=productImageMarkup(product);
  document.getElementById("productModalName").textContent=product.name||"مادة";
  document.getElementById("productModalPrice").textContent=`${money(Number(product.price||0))} / ${product.unit||"قطعة"}`;
  document.getElementById("productModalUnit").textContent=product.unit||"قطعة";
  const q=Number(cart.get(product.id)||0); document.getElementById("productModalQty").textContent=Number.isInteger(q)?String(q):q.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
  document.getElementById("productModalAddPrice").textContent=money(Number(product.price||0)*Math.max(q,1));
  modal.classList.add("show"); modal.setAttribute("aria-hidden","false"); document.body.classList.add("cart-modal-open");
}
function closeProductModal(){const m=document.getElementById("productModal");if(!m)return;m.classList.remove("show");m.setAttribute("aria-hidden","true");document.body.classList.remove("cart-modal-open");selectedProductForModal=null;}
function initProductModal(){
  const m=document.getElementById("productModal");
  document.getElementById("productModalClose")?.addEventListener("click",closeProductModal);
  m?.addEventListener("click",e=>{if(e.target===m||e.target.classList.contains("product-modal-backdrop"))closeProductModal();});
  document.getElementById("productModalPlus")?.addEventListener("click",()=>{if(selectedProductForModal){changeQty(selectedProductForModal.id,1);openProductModal(selectedProductForModal.id);}});
  document.getElementById("productModalMinus")?.addEventListener("click",()=>{if(selectedProductForModal){changeQty(selectedProductForModal.id,-1);openProductModal(selectedProductForModal.id);}});
  document.getElementById("productModalAdd")?.addEventListener("click",()=>{if(selectedProductForModal&&!(Number(cart.get(selectedProductForModal.id)||0)>0))changeQty(selectedProductForModal.id,1);openProductModal(selectedProductForModal.id);});
}


/* =====================================================
   تغيير الكمية
===================================================== */

function showCartToast(message){
  let el=document.getElementById("cartAddToast");
  if(!el){el=document.createElement("div");el.id="cartAddToast";el.className="cart-add-toast";el.style.cssText="position:fixed;right:50%;bottom:24px;transform:translate(50%,20px);opacity:0;pointer-events:none;z-index:99999;background:#123d2b;color:#fff;padding:11px 18px;border-radius:999px;font-weight:800;font-size:13px;box-shadow:0 8px 25px rgba(0,0,0,.18);transition:all .22s ease";document.body.appendChild(el);}
  el.textContent=message;el.style.opacity="1";el.style.transform="translate(50%,0)";clearTimeout(window.__cartToastTimer);window.__cartToastTimer=setTimeout(()=>{el.style.opacity="0";el.style.transform="translate(50%,20px)"},1800);
}

function changeQty(
  id,
  delta
){

  const product =
    products.find(
      p => String(p.id) === String(id)
    );

  if(!product){
    return;
  }


 const unit =
  String(
    product.unit || ""
  )
    .trim()
    .toLowerCase();


const isWeight =
  unit.includes("كغم") ||
  unit.includes("كغ") ||
  unit.includes("كيلو") ||
  unit.includes("kg");


const category =
  categories.find(
    c => c.id === product.cat
  );


const step =
  isWeight
    ? (
        Number(product.step) > 0
          ? Number(product.step)
          : (
              Number(category?.step) > 0
                ? Number(category.step)
                : 1
            )
      )
    : 1;


const currentQty = Number(cart.get(product.id) || 0);

const q =
  Math.max(
    0,
    Number(
      (
        currentQty +
        (delta * step)
      ).toFixed(2)
    )
  );


  // استخدم معرّف المنتج الفعلي الذي وجدناه أعلاه.
  // كان الكود السابق يستخدم cartId غير معرّف، مما يوقف السلة عند الضغط على + أو −.
  const productId = product.id;

  if(q){
    cart.set(productId, q);
  }else{
    cart.delete(productId);
  }


  renderProducts();

  if(delta>0 && q>currentQty){
    const label=product.name||"المادة";
    showCartToast(`✓ تمت إضافة ${label} إلى السلة`);
  }

  updateCart();
  if(document.getElementById("cartModal")?.classList.contains("show")) renderCartModal();

}
/* =====================================================
   تحديث السلة
===================================================== */

function getCurrentDeliveryInfo(){

  let deliveryGroupName = "";
  let deliveryAreaName = "";
  let deliveryFee = 0;

  const groupSelect =
    document.getElementById("deliveryGroup");

  const areaSelect =
    document.getElementById("deliveryArea");

  if(
    groupSelect &&
    groupSelect.value !== ""
  ){
    const groupIndex = Number(groupSelect.value);
    const group = deliveryGroups[groupIndex];

    if(group){
      deliveryGroupName = group.name || "";

      if(
        areaSelect &&
        areaSelect.value !== ""
      ){
        const areaIndex = Number(areaSelect.value);
        const area = group.areas?.[areaIndex];

        if(area){
          deliveryAreaName = area.name || "";
          deliveryFee = Number(area.fee) || 0;
        }
      }
    }
  }

  // بيانات المنطقة المحفوظة للزبون هي المرجع الاحتياطي.
  if(
    currentCustomer &&
    (!deliveryGroupName || !deliveryAreaName || deliveryFee <= 0)
  ){
    const savedGroup = String(
      currentCustomer.city ||
      currentCustomer.delivery_group ||
      ""
    ).trim();

    const savedArea = String(
      currentCustomer.region ||
      currentCustomer.delivery_area ||
      ""
    ).trim();

    const group = deliveryGroups.find(
      item => String(item?.name || "").trim() === savedGroup
    );

    const area = group && Array.isArray(group.areas)
      ? group.areas.find(
          item => String(item?.name || "").trim() === savedArea
        )
      : null;

    if(group && area){
      deliveryGroupName = group.name || "";
      deliveryAreaName = area.name || "";
      deliveryFee = Number(area.fee) || 0;
    }
  }

  return {
    deliveryGroupName,
    deliveryAreaName,
    deliveryFee
  };
}

function updateCart(){
  let productsTotal = 0;
  let count = 0;
  let itemKinds = 0;

  // تنظيف أي عناصر غير موجودة في قائمة المنتجات قبل الحساب.
  for(const [id,q] of [...cart]){
    const p = products.find(x => String(x.id) === String(id));
    const qty = Number(q) || 0;
    if(!p || qty <= 0){
      cart.delete(id);
      continue;
    }
    productsTotal += (Number(p.price) || 0) * qty;
    count += qty;
    itemKinds += 1;
  }

  const {deliveryFee} = getCurrentDeliveryInfo();
  const total = productsTotal + deliveryFee;
  const countText = Number.isInteger(count)
    ? String(count)
    : count.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');

  // في ملخص الدفع: cartTotal هو إجمالي المواد، و cartTotalCheckout هو الإجمالي النهائي بعد التوصيل.
  document.getElementById("cartTotal")?.replaceChildren(document.createTextNode(money(productsTotal)));
  document.getElementById("cartProductsTotal")?.replaceChildren(document.createTextNode(money(productsTotal)));
  document.getElementById("cartDeliveryFee")?.replaceChildren(document.createTextNode(money(deliveryFee)));
  document.getElementById("cartTotalCheckout")?.replaceChildren(document.createTextNode(money(total)));
  document.getElementById("cartCount")?.replaceChildren(document.createTextNode(countText));
  document.getElementById("cartCountTop")?.replaceChildren(document.createTextNode(countText));
  document.getElementById("mobileCartCount")?.replaceChildren(document.createTextNode(countText));

  // الحالة البصرية للزر: لا تسمح ببدء الطلب إذا كانت السلة فارغة.
  const checkoutBtn = document.getElementById("cartCheckoutBtn");
  if(checkoutBtn){
    checkoutBtn.disabled = count <= 0 || isSubmittingOrder;
    checkoutBtn.setAttribute("aria-disabled", checkoutBtn.disabled ? "true" : "false");
  }

  return {productsTotal, deliveryFee, total, count, itemKinds};
}


/* =====================================================
   نافذة السلة — وظائف العرض والتحكم
===================================================== */

function renderCartModal(){
  const itemsEl = document.getElementById("cartModalItems");
  const productsTotalEl = document.getElementById("cartModalProductsTotal");
  const deliveryFeeEl = document.getElementById("cartModalDeliveryFee");
  const totalEl = document.getElementById("cartModalTotal");

  let productsTotal = 0;
  let count = 0;
  let html = "";

  for(const [id, q] of cart){
    const p = products.find(x => String(x.id) === String(id));
    const qty = Number(q) || 0;
    if(!p || qty <= 0) continue;

    const subtotal = (Number(p.price) || 0) * qty;
    productsTotal += subtotal;
    count += qty;

    const qtyText = Number.isInteger(qty)
      ? String(qty)
      : qty.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
    const unit = p.unit || "قطعة";
    const safeId = String(p.id)
      .replace(/&/g,"&amp;").replace(/"/g,"&quot;")
      .replace(/</g,"&lt;").replace(/>/g,"&gt;");

    html += `
      <div class="cart-modal-item">
        <div class="cart-modal-item-info">
          <strong>${escapeHtml(p.name || "مادة")}</strong>
          <span>${money(Number(p.price || 0))} / ${escapeHtml(unit)}</span>
          <b>${money(subtotal)}</b>
        </div>
        <div class="cart-modal-item-controls">
          <button type="button" class="cart-modal-plus" data-cart-id="${safeId}" aria-label="زيادة الكمية">+</button>
          <span aria-label="الكمية">${qtyText}</span>
          <button type="button" class="cart-modal-minus" data-cart-id="${safeId}" aria-label="نقصان الكمية">−</button>
          <button type="button" class="cart-modal-remove" data-cart-id="${safeId}" aria-label="حذف المادة">حذف</button>
        </div>
      </div>`;
  }

  const deliveryInfo = getCurrentDeliveryInfo();
  const deliveryFee = Number(deliveryInfo.deliveryFee) || 0;
  const total = productsTotal + deliveryFee;

  if(itemsEl){
    itemsEl.innerHTML = html || `<div class="cart-modal-empty">السلة فارغة حالياً.<br><small>أضف المواد التي تريدها ثم افتح السلة للتأكد من الطلب.</small></div>`;

    if(!itemsEl.dataset.cartEventsBound){
      itemsEl.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-cart-id]");
        if(!button) return;
        const id = button.dataset.cartId;
        if(!id || isSubmittingOrder) return;

        if(button.classList.contains("cart-modal-plus")){
          changeQty(id, 1);
        }else if(button.classList.contains("cart-modal-minus")){
          changeQty(id, -1);
        }else if(button.classList.contains("cart-modal-remove")){
          removeCartItem(id);
          return;
        }
        renderCartModal();
      });
      itemsEl.dataset.cartEventsBound = "1";
    }
  }

  if(productsTotalEl) productsTotalEl.textContent = money(productsTotal);
  if(deliveryFeeEl) deliveryFeeEl.textContent = money(deliveryFee);
  if(totalEl) totalEl.textContent = money(total);

  // عرض معلومات التوصيل داخل السلة إن وُجدت عناصر مخصصة لها في HTML.
  const deliveryNameEl = document.getElementById("cartDeliveryName");
  if(deliveryNameEl){
    const place = [deliveryInfo.deliveryGroupName, deliveryInfo.deliveryAreaName].filter(Boolean).join(" / ");
    deliveryNameEl.textContent = place || "لم يتم تحديد منطقة التوصيل";
  }

  updateCart();
  return {productsTotal, deliveryFee, total, count};
}

function openCartModal(){
  const modal = document.getElementById("cartModal");
  if(!modal) return;
  updateCart();
  renderCartModal();
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-modal-open");
}

function closeCartModal(){
  const modal = document.getElementById("cartModal");
  if(!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-modal-open");
}

function removeCartItem(id){
  const product = products.find(p => String(p.id) === String(id));
  cart.delete(product ? product.id : id);
  renderProducts();
  updateCart();
  renderCartModal();
}

function bindPointerClick(el, handler){
  if(!el) return;
  let lastTouch=0;
  el.addEventListener("pointerup", event=>{
    if(event.pointerType === "touch"){ lastTouch=Date.now(); handler(event); }
  });
  el.addEventListener("click", event=>{
    if(Date.now()-lastTouch < 500) return;
    handler(event);
  });
}

function initCartModal(){
  const openBtn = document.getElementById("cartOpenBtn");
  const closeBtn = document.getElementById("cartCloseBtn");
  const continueBtn = document.getElementById("cartContinueBtn");
  const checkoutBtn = document.getElementById("cartCheckoutBtn");
  const modal = document.getElementById("cartModal");

  bindPointerClick(openBtn, openCartModal);
  bindPointerClick(closeBtn, closeCartModal);
  bindPointerClick(continueBtn, closeCartModal);

  if(checkoutBtn){
    checkoutBtn.addEventListener("click", () => {
      if(isSubmittingOrder) return;
      if(cart.size === 0){
        alert("السلة فارغة. أضف مادة واحدة على الأقل.");
        return;
      }
      closeCartModal();
      const target = document.getElementById("whatsappSection") || document.getElementById("orderSection") || document.getElementById("whatsapp");
      if(target) target.scrollIntoView({behavior:"smooth", block:"start"});
    });
  }

  if(modal){
    modal.addEventListener("click", event => {
      if(event.target === modal && !isSubmittingOrder) closeCartModal();
    });
  }

  document.addEventListener("keydown", event => {
    if(event.key === "Escape" && modal?.classList.contains("show") && !isSubmittingOrder){
      closeCartModal();
    }
  });

  updateCart();
}

/* =====================================================
   حساب الزبون
===================================================== */

let currentCustomer = null;
const CUSTOMER_STORAGE_KEY = "amazon_hyper_customer_id";


function normalizePhone(value){
  let phone = String(value || "").trim();
  phone = phone.replace(/[\s\-()]/g, "");

  if(phone.startsWith("+964")){
    phone = "0" + phone.slice(4);
  }else if(phone.startsWith("964")){
    phone = "0" + phone.slice(3);
  }

  return phone;
}

function isValidCustomerName(name){
  const words = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return words.length >= 2 && words.length <= 3;
}

function fillCustomerOrderFields(customer){
  if(!customer) return;

  const name = document.getElementById("customerName");
  const phone = document.getElementById("customerPhone");
  const address = document.getElementById("customerAddress");

  if(name) name.value = customer.name || "";
  if(phone) phone.value = customer.phone || "";
  if(address) address.value = customer.address || "";

  const groupSelect = document.getElementById("deliveryGroup");
  const areaSelect = document.getElementById("deliveryArea");

  if(!groupSelect || !areaSelect) return;

  const savedGroup = String(
    customer.city || customer.delivery_group || ""
  ).trim();

  const savedArea = String(
    customer.region || customer.area || customer.delivery_area || ""
  ).trim();

  const groupIndex = deliveryGroups.findIndex(
    group => String(group?.name || "").trim() === savedGroup
  );

  if(groupIndex < 0){
    updateCart();
    return;
  }

  // اختيار المنطقة الرئيسية تلقائياً من بيانات حساب الزبون.
  groupSelect.value = String(groupIndex);
  groupSelect.dispatchEvent(new Event("change"));

  if(savedArea){
    const group = deliveryGroups[groupIndex];
    const areaIndex = Array.isArray(group?.areas)
      ? group.areas.findIndex(
          area => String(area?.name || "").trim() === savedArea
        )
      : -1;

    if(areaIndex >= 0){
      // اختيار المنطقة الفرعية تلقائياً.
      areaSelect.value = String(areaIndex);
      areaSelect.dispatchEvent(new Event("change"));
    }
  }

  // تحديث السلة بعد اختيار المنطقة حتى تدخل أجرة التوصيل بالإجمالي.
  updateCart();
}

function updateCustomerAccountUI(){
  const btn = document.getElementById("customerAccountBtn");
  const display = document.getElementById("customerNameDisplay");
  const logout = document.getElementById("customerLogoutBtn");

  if(!btn) return;

  if(currentCustomer){
    btn.textContent = "👤 حسابي";

    if(display){
      display.textContent = currentCustomer.name || "الزبون";
      display.style.display = "inline";
    }

    if(logout){
      logout.style.display = "block";
    }
  }else{
    btn.textContent = "👤 تسجيل / دخول";

    if(display){
      display.textContent = "";
      display.style.display = "none";
    }

    if(logout){
      logout.style.display = "none";
    }
  }
}

function setCustomerStatus(message, isError = false){
  const status = document.getElementById("customerStatus");
  if(!status) return;

  status.textContent = message || "";
  status.style.display = message ? "block" : "none";
  status.style.background = isError ? "#fff1f1" : "#f1f5f3";
  status.style.color = isError ? "#b42318" : "#333";
}

function openCustomerModal(){
  const modal = document.getElementById("customerModal");
  if(!modal) return;

  const name = document.getElementById("registerName");
  const phone = document.getElementById("registerPhone");
  const city = document.getElementById("registerCity");
  const region = document.getElementById("registerRegion");
  const address = document.getElementById("registerAddress");

  if(currentCustomer){
    if(name) name.value = currentCustomer.name || "";
    if(phone) phone.value = currentCustomer.phone || "";
    if(city) city.value = currentCustomer.city || "بغداد";
    if(region) region.value = currentCustomer.region || "";
    if(address) address.value = currentCustomer.address || "";

    setCustomerStatus("بيانات حسابك محفوظة. يمكنك تعديلها ثم الضغط على حفظ بياناتي.");
  }else{
    setCustomerStatus("");
  }

  modal.classList.add("show");
}

function closeCustomerModal(){
  const modal = document.getElementById("customerModal");
  if(modal) modal.classList.remove("show");
}
async function saveCustomer(){

  const saveBtn =
    document.getElementById(
      "customerSaveBtn"
    );

  const name =
    document
      .getElementById("registerName")
      ?.value
      .trim();

  const phone =
    normalizePhone(
      document.getElementById(
        "registerPhone"
      )?.value
    );

  const city =
    document
      .getElementById("registerCity")
      ?.value
      .trim() || "بغداد";

  const area =
    document
      .getElementById("registerRegion")
      ?.value
      .trim();

  const address =
    document
      .getElementById("registerAddress")
      ?.value
      .trim();


  if(!isValidCustomerName(name)){

    setCustomerStatus(
      "اكتب الاسم الثنائي أو الثلاثي فقط.",
      true
    );

    return;
  }


  if(!/^07\d{9}$/.test(phone)){

    setCustomerStatus(
      "رقم الهاتف يجب أن يكون 11 رقمًا ويبدأ بـ 07.",
      true
    );

    return;
  }


  if(!city || !area || !address){

    setCustomerStatus(
      "يرجى إكمال المدينة والمنطقة والعنوان.",
      true
    );

    return;
  }


  if(saveBtn){

    saveBtn.disabled = true;

    saveBtn.textContent =
      "جاري الحفظ...";

  }


  try{

    const {
      data: existing,
      error: findError
    } =
      await supabaseClient
        .from("customers")
        .select(
          "id,name,phone,delivery_group,delivery_area,address,created_at"
        )
        .eq(
          "phone",
          phone
        )
        .maybeSingle();


    if(findError){

      console.error(
        "Customer lookup error:",
        findError
      );

      setCustomerStatus(
        "تعذر الاتصال بقاعدة بيانات الزبائن. حاول مرة أخرى.",
        true
      );

      return;
    }


    let savedCustomer = null;


    if(existing){

      const {
        data: updated,
        error: updateError
      } =
        await supabaseClient
          .from("customers")
          .update({

            name:
              name,

            phone:
              phone,

            delivery_group:
              city,

            delivery_area:
              area,

            address:
              address

          })
          .eq(
            "id",
            existing.id
          )
          .select(
            "id,name,phone,delivery_group,delivery_area,address,created_at"
          )
          .single();


      if(updateError){

        console.error(
          "Customer update error:",
          updateError
        );

        setCustomerStatus(
          "تعذر تحديث بيانات الحساب.",
          true
        );

        return;
      }


      savedCustomer =
        updated;

    }else{

      const {
        data: created,
        error: insertError
      } =
        await supabaseClient
          .from("customers")
          .insert({

            name:
              name,

            phone:
              phone,

            delivery_group:
              city,

            delivery_area:
              area,

            address:
              address

          })
          .select(
            "id,name,phone,delivery_group,delivery_area,address,created_at"
          )
          .single();


      if(insertError){

        console.error(
          "Customer insert error:",
          insertError
        );

        setCustomerStatus(
          "تعذر إنشاء حساب الزبون. حاول مرة أخرى.",
          true
        );

        return;
      }


      savedCustomer =
        created;

    }


    currentCustomer = {

      id:
        savedCustomer.id,

      name:
        savedCustomer.name || "",

      phone:
        savedCustomer.phone || "",

      city:
        savedCustomer.delivery_group || city,

      region:
        savedCustomer.delivery_area || area,

      address:
        savedCustomer.address || address,

      created_at:
        savedCustomer.created_at

    };


    localStorage.setItem(
      CUSTOMER_STORAGE_KEY,
      currentCustomer.id
    );


    fillCustomerOrderFields(
      currentCustomer
    );


    updateCustomerAccountUI();


    setCustomerStatus(
      "تم حفظ بياناتك بنجاح. يمكنك الآن إرسال الطلب."
    );


    setTimeout(
      () => {
        closeCustomerModal();
      },
      700
    );


  }catch(error){

    console.error(
      "Customer save error:",
      error
    );

    setCustomerStatus(
      "حدث خطأ غير متوقع. حاول مرة أخرى.",
      true
    );

  }finally{

    if(saveBtn){

      saveBtn.disabled =
        false;

      saveBtn.textContent =
        "حفظ بياناتي";

    }

  }

}
async function loadSavedCustomer(){

  const customerId =
    localStorage.getItem(
      CUSTOMER_STORAGE_KEY
    );

  if(!customerId){
    return;
  }

  try{

    const {
      data,
      error
    } =
      await supabaseClient
        .from("customers")
        .select(
          "id,name,phone,delivery_group,delivery_area,address,created_at"
        )
        .eq(
          "id",
          customerId
        )
        .maybeSingle();

    if(error){

      console.error(
        "Saved customer error:",
        error
      );

      return;
    }

    if(!data){

      localStorage.removeItem(
        CUSTOMER_STORAGE_KEY
      );

      currentCustomer = null;

      updateCustomerAccountUI();

      return;
    }

    currentCustomer = {

      id:
        data.id,

      name:
        data.name || "",

      phone:
        data.phone || "",

      city:
        data.delivery_group || "بغداد",

      region:
        data.delivery_area || "",

      address:
        data.address || "",

      created_at:
        data.created_at

    };

    updateCustomerAccountUI();

    fillCustomerOrderFields(
      currentCustomer
    );

  }catch(error){

    console.error(
      "Load saved customer error:",
      error
    );

  }

}

function logoutCustomer(){

  localStorage.removeItem(
    CUSTOMER_STORAGE_KEY
  );

  currentCustomer = null;

  updateCustomerAccountUI();

  closeCustomerModal();

  alert(
    "تم تسجيل الخروج من حساب الزبون."
  );

}
function setupCustomerAccount(){

  const accountBtn =
    document.getElementById("customerAccountBtn");

  const closeBtn =
    document.getElementById("customerCloseBtn");

  const saveBtn =
    document.getElementById("customerSaveBtn");

  const logoutBtn =
    document.getElementById("customerLogoutBtn");

  const modal =
    document.getElementById("customerModal");

  if(accountBtn){
    accountBtn.addEventListener(
      "click",
      openCustomerModal
    );
  }

  if(closeBtn){
    closeBtn.addEventListener(
      "click",
      closeCustomerModal
    );
  }

  if(saveBtn){
    saveBtn.addEventListener(
      "click",
      saveCustomer
    );
  }

  if(logoutBtn){
    logoutBtn.addEventListener(
      "click",
      logoutCustomer
    );
  }

  if(modal){
    modal.addEventListener(
      "click",
      event => {

        if(event.target === modal){
          closeCustomerModal();
        }

      }
    );
  }

  updateCustomerAccountUI();
}
setupCustomerAccount();
loadSavedCustomer();


/* =====================================================
   جدولة موعد التوصيل
===================================================== */

function pad2(value){
  return String(value).padStart(2,"0");
}

function localDateKey(date = new Date()){
  return `${date.getFullYear()}-${pad2(date.getMonth()+1)}-${pad2(date.getDate())}`;
}

function formatScheduledDateTime(dateValue,timeValue){
  if(!dateValue || !timeValue) return "";

  const date = new Date(`${dateValue}T${timeValue}:00`);
  if(Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("ar-IQ",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"numeric",
    minute:"2-digit",
    hour12:true
  }).format(date);
}

function populateScheduleTimes(){
  const select = document.getElementById("scheduledTime");
  const dateInput = document.getElementById("scheduledDate");
  if(!select || !dateInput) return;

  const selected = select.value;
  const dateValue = dateInput.value;
  const now = new Date();
  const selectedDate = dateValue ? new Date(`${dateValue}T00:00:00`) : null;
  const todayKey = localDateKey(now);

  select.innerHTML = `<option value="">اختر وقت التوصيل</option>`;

  // مواعيد كل 30 دقيقة من 08:30 إلى 23:30.
  for(let minutes = 8 * 60 + 30; minutes <= 23 * 60 + 30; minutes += 30){
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const value = `${pad2(hour)}:${pad2(minute)}`;

    // لا نسمح بموعد مضى في اليوم الحالي.
    if(dateValue === todayKey){
      const slot = new Date();
      slot.setHours(hour,minute,0,0);
      if(slot <= now) continue;
    }

    const option = document.createElement("option");
    option.value = value;
    option.textContent = formatScheduledDateTime(dateValue || todayKey,value)
      .replace(/^.*?،\s*/,"");
    option.textContent = new Intl.DateTimeFormat("ar-IQ",{
      hour:"numeric",
      minute:"2-digit",
      hour12:true
    }).format(new Date(`2000-01-01T${value}:00`));

    select.appendChild(option);
  }

  if([...select.options].some(option => option.value === selected)){
    select.value = selected;
  }
}

function updateScheduleSummary(){
  const dateInput = document.getElementById("scheduledDate");
  const timeSelect = document.getElementById("scheduledTime");
  const summary = document.getElementById("scheduleSummary");
  const summaryText = document.getElementById("scheduleSummaryText");

  if(!dateInput || !timeSelect || !summary || !summaryText) return;

  const text = formatScheduledDateTime(dateInput.value,timeSelect.value);

  if(text){
    summaryText.textContent = text;
    summary.style.display = "flex";
  }else{
    summary.style.display = "none";
    summaryText.textContent = "";
  }
}

function initOrderSchedule(){
  const toggle=document.getElementById("scheduleEnabled"),date=document.getElementById("scheduledDate"),time=document.getElementById("scheduledTime"),fields=document.getElementById("scheduleFields"); if(!date||!time)return;
  const now=new Date(),today=localDateKey(now),max=new Date(now);max.setDate(max.getDate()+7);date.min=today;date.max=localDateKey(max);date.value=today;populateScheduleTimes();if(fields)fields.hidden=!(toggle?.checked);
  date.addEventListener("change",()=>{populateScheduleTimes();updateScheduleSummary();});time.addEventListener("change",updateScheduleSummary);toggle?.addEventListener("change",()=>{if(fields)fields.hidden=!toggle.checked;updateScheduleSummary();});
}


function getScheduledOrderInfo(){
  const enabled=Boolean(document.getElementById("scheduleEnabled")?.checked); if(!enabled)return{valid:true,dateValue:"",timeValue:"",scheduledAt:null,display:"أقرب وقت متاح"};
  const dateValue=document.getElementById("scheduledDate")?.value||"",timeValue=document.getElementById("scheduledTime")?.value||""; if(!dateValue||!timeValue)return{valid:false,dateValue,timeValue,scheduledAt:null,display:""};
  const d=new Date(`${dateValue}T${timeValue}:00`);if(Number.isNaN(d.getTime())||d<=new Date())return{valid:false,dateValue,timeValue,scheduledAt:null,display:""};return{valid:true,dateValue,timeValue,scheduledAt:d.toISOString(),display:formatScheduledDateTime(dateValue,timeValue)};
}


initOrderSchedule();


/* =====================================================
   إرسال الطلب إلى واتساب
===================================================== */

const whatsappBtn = document.getElementById("whatsappBtn");

if(whatsappBtn){
  whatsappBtn.addEventListener("click", async () => {
    if(isSubmittingOrder) return;

    /* الزائر لا يستطيع إرسال الطلب */
    if(!currentCustomer){
      alert("لإرسال الطلب، يرجى تسجيل بياناتك أولاً من زر 👤 تسجيل / دخول.");
      openCustomerModal();
      return;
    }

    const cartState = updateCart();
    if(cartState.count <= 0){
      alert("السلة فارغة. أضف مادة واحدة على الأقل.");
      return;
    }

    const name = document.getElementById("customerName")?.value.trim() || currentCustomer.name || "";
    const phone = normalizePhone(document.getElementById("customerPhone")?.value || currentCustomer.phone || "");
    const address = document.getElementById("customerAddress")?.value.trim() || currentCustomer.address || "";
    const notes = document.getElementById("notes")?.value.trim() || "";

    if(!name || !phone || !address){
      alert("بيانات حسابك غير مكتملة. افتح حسابي وأكمل البيانات.");
      openCustomerModal();
      return;
    }

    const schedule = getScheduledOrderInfo();
    if(!schedule.valid){
      alert("أكمل تاريخ ووقت التوصيل أو ألغِ خيار الجدولة.");
      document.getElementById("scheduledDate")?.focus();
      return;
    }

    const deliveryInfo = getCurrentDeliveryInfo();
    if(!deliveryInfo.deliveryGroupName || !deliveryInfo.deliveryAreaName){
      alert("يرجى تحديد منطقة وعنوان التوصيل أولاً حتى يتم احتساب أجور التوصيل بشكل صحيح.");
      document.getElementById("deliveryGroup")?.focus();
      return;
    }

    /* إنشاء لقطة ثابتة للسلة قبل الحفظ والإرسال */
    const orderItems = [];
    let productsTotal = 0;

    for(const [id,q] of cart){
      const qty = Number(q) || 0;
      if(qty <= 0) continue;

      // مقارنة المعرّف كسلسلة تمنع ضياع العناصر بين أرقام و UUIDs.
      const p = products.find(x => String(x.id) === String(id));
      if(!p) continue;

      const price = Number(p.price) || 0;
      const itemTotal = price * qty;
      productsTotal += itemTotal;

      orderItems.push({
        id: p.id,
        name: p.name,
        quantity: qty,
        unit: p.unit || "قطعة",
        price,
        total: itemTotal
      });
    }

    if(!orderItems.length){
      alert("لم يتم العثور على مواد صالحة داخل السلة. أعد إضافة المواد ثم حاول مرة أخرى.");
      updateCart();
      return;
    }

    const deliveryFee = Number(deliveryInfo.deliveryFee) || 0;
    const total = productsTotal + deliveryFee;
    const lines = [
      "🛒 طلب جديد — أمازون هايبر ماركت",
      "",
      ...orderItems.map(item => `- ${item.name}: ${item.quantity} ${item.unit} — ${money(item.total)}`),
      "",
      `عدد المواد: ${orderItems.length}`,
      `الكمية الإجمالية: ${Number.isInteger(cartState.count) ? cartState.count : cartState.count.toFixed(2).replace(/0+$/,'').replace(/\.$/,'')}`,
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      `المدينة: ${currentCustomer.city || "بغداد"}`,
      `منطقة التوصيل الرئيسية: ${deliveryInfo.deliveryGroupName}`,
      `منطقة التوصيل: ${deliveryInfo.deliveryAreaName}`,
      `أجور التوصيل: ${money(deliveryFee)}`,
      `العنوان: ${address}`,
      `موعد التوصيل: ${schedule.display}`,
      `الملاحظات: ${notes || "لا توجد"}`,
      `المجموع التقريبي للمواد: ${money(productsTotal)}`,
      `الإجمالي التقريبي: ${money(total)}`,
      "",
      "تنويه: المواد التي تباع بالوزن قد يختلف وزنها وسعرها النهائي قليلاً بعد التجهيز، وسيتم تأكيد السعر النهائي قبل التسليم."
    ];

    const originalText = whatsappBtn.textContent;
    isSubmittingOrder = true;
    whatsappBtn.disabled = true;
    whatsappBtn.setAttribute("aria-busy", "true");
    whatsappBtn.textContent = "جاري تجهيز الطلب...";
    updateCart();

    try{
      const { error: orderError } = await supabaseClient
        .from("orders")
        .insert({
          customer_id: currentCustomer.id,
          customer_name: name,
          customer_phone: phone,
          delivery_group: deliveryInfo.deliveryGroupName,
          delivery_area: deliveryInfo.deliveryAreaName,
          address,
          items: orderItems,
          products_total: productsTotal,
          delivery_fee: deliveryFee,
          total,
          notes: notes || null,
          scheduled_at: schedule.scheduledAt,
          status: "new"
        });

      if(orderError){
        console.error("Order save error:", orderError);
        alert("تعذر حفظ الطلب في قاعدة البيانات، لذلك لم يتم فتح واتساب. حاول مرة أخرى.");
        return;
      }

      const whatsappNumber = "9647842000516";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;

      // فتح الرابط بعد اكتمال حفظ الطلب، وهو أكثر موثوقية على iPhone/Safari.
      window.location.href = whatsappUrl;

    }catch(error){
      console.error("Order save exception:", error);
      alert("حدث خطأ أثناء حفظ الطلب. لم يتم إرسال الطلب إلى واتساب.");
    }finally{
      isSubmittingOrder = false;
      whatsappBtn.disabled = false;
      whatsappBtn.removeAttribute("aria-busy");
      whatsappBtn.textContent = originalText || "إرسال الطلب عبر WhatsApp";
      updateCart();
    }
  });
}



/* =====================================================
   البنر الرئيسي
===================================================== */

let heroBanner={enabled:true,kicker:"🛒 أمازون هايبر ماركت",title:"كل احتياجات بيتك",strongTitle:"بخطوات أسهل وأسرع",text:"اختَر القسم، أضف احتياجاتك إلى السلة، ونحن نهتم بالباقي 🚚",buttonText:"ابدأ التسوق الآن ←",buttonAction:"#categories",heroImage:CATEGORY_IMAGE_MAP.vegetables,art:"🛒"};
let heroBanners=[];let heroIndex=0;let heroTimer=null;
function getHeroSlides(){
  const fallback=[
    {enabled:true,kicker:"🥬 طازج يوميًا",title:"خضار وفواكه طازجة",strongTitle:"بجودة تليق ببيتك",text:"تسوّق احتياجاتك بسهولة ونوصلها لك داخل بغداد.",buttonText:"تسوّق الآن ←",buttonAction:"#categories",heroImage:CATEGORY_IMAGE_MAP.vegetables},
    {enabled:true,kicker:"🥩 اختيارات يومية",title:"لحوم طازجة",strongTitle:"مختارة بعناية",text:"اختَر ما تحتاجه من الأقسام ووفر وقتك مع التسوق أونلاين.",buttonText:"تصفح اللحوم ←",buttonAction:"#categories",heroImage:CATEGORY_IMAGE_MAP.meat},
    {enabled:true,kicker:"🛒 مواد أساسية",title:"كل احتياجات البيت",strongTitle:"في مكان واحد",text:"مواد غذائية ومشروبات ومنتجات منزلية بأسعار مناسبة.",buttonText:"ابدأ التسوق ←",buttonAction:"#categories",heroImage:CATEGORY_IMAGE_MAP.food}
  ];
  if(Array.isArray(heroBanners)&&heroBanners.length){return heroBanners.filter(x=>x&&x.enabled!==false);}
  if(heroBanner&&Object.keys(heroBanner).length&&heroBanner.enabled!==false){return [heroBanner];}
  return fallback;
}
function renderHeroBanner(){
 const banner=document.getElementById("heroBanner"),track=document.getElementById("heroTrack"),dots=document.getElementById("heroDots"),prev=document.getElementById("heroPrev"),next=document.getElementById("heroNext");if(!banner||!track)return;const slides=getHeroSlides();if(!slides.length){banner.style.display="none";return;}banner.style.display="block";heroIndex=Math.min(heroIndex,slides.length-1);
 track.innerHTML=slides.map(h=>{const img=resolveStoreImage(h.heroImage||h.image||"");return`<div class="hero-slide">${img?`<div class="hero-media"><img src="${escapeHtml(img)}" alt="${escapeHtml(h.title||"")}" loading="lazy"></div>`:`<div class="hero-media"><div class="hero-art">${escapeHtml(h.art||"🛒")}</div></div>`}<div class="hero-copy"><span class="hero-kicker">${escapeHtml(h.kicker||"🛒 أمازون هايبر ماركت")}</span><h1>${escapeHtml(h.title||"")}${h.strongTitle?`<br><strong>${escapeHtml(h.strongTitle)}</strong>`:""}</h1><p>${escapeHtml(h.text||"")}</p><div class="hero-features"><span>🚚 توصيل سريع</span><span>⭐ جودة عالية</span><span>💚 أسعار مناسبة</span></div><button type="button" class="hero-cta" data-hero-action="${escapeHtml(h.buttonAction||"#categories")}">${escapeHtml(h.buttonText||"تسوّق الآن ←")}</button></div></div>`;}).join("");
 dots.innerHTML=slides.length>1?slides.map((_,i)=>`<button class="hero-dot ${i===heroIndex?"active":""}" data-hero-index="${i}" type="button"></button>`).join(""):"";prev.style.display=next.style.display=slides.length>1?"grid":"none";
 track.querySelectorAll("[data-hero-action]").forEach(b=>b.onclick=()=>{const t=b.dataset.heroAction||"#categories";if(t.startsWith("#"))document.getElementById(t.slice(1))?.scrollIntoView({behavior:"smooth"});else if(t)location.href=t;});dots.querySelectorAll("[data-hero-index]").forEach(b=>b.onclick=()=>{heroIndex=Number(b.dataset.heroIndex)||0;updateHeroSlider(slides.length);restartHeroTimer(slides.length);});updateHeroSlider(slides.length);restartHeroTimer(slides.length);
}
function updateHeroSlider(total){const t=document.getElementById("heroTrack");if(t)t.style.transform=`translateX(${heroIndex*100}%)`;document.querySelectorAll(".hero-dot").forEach((d,i)=>d.classList.toggle("active",i===heroIndex));}
function restartHeroTimer(total){clearInterval(heroTimer);if(total>1)heroTimer=setInterval(()=>{heroIndex=(heroIndex+1)%total;updateHeroSlider(total);},5000);}
function initHeroSlider(){document.getElementById("heroPrev")?.addEventListener("click",()=>{const n=getHeroSlides().length;if(n<2)return;heroIndex=(heroIndex-1+n)%n;updateHeroSlider(n);restartHeroTimer(n);});document.getElementById("heroNext")?.addEventListener("click",()=>{const n=getHeroSlides().length;if(n<2)return;heroIndex=(heroIndex+1)%n;updateHeroSlider(n);restartHeroTimer(n);});}


/* =====================================================
   الشريط المتحرك
===================================================== */


/* =====================================================
   محتوى الصفحة الرئيسية
===================================================== */

let siteContent = {
  enabled:true,

  welcomeTitle:
    "👋 أهلاً وسهلاً بكم في أمازون هايبر ماركت 🛒",

  welcomeText:
    "نرحب بكم في متجرنا الإلكتروني، ونسعد بخدمتكم وتوفير احتياجاتكم بسهولة، مع توصيل طلباتكم إلى العنوان المحدد.",

  howToUse:
    "1. اختر القسم الذي تريد.\n" +
    "2. اختر المادة وحدد الكمية أو الوزن.\n" +
    "3. أضف المواد إلى السلة من علامة +.\n" +
    "4. سجّل بالموقع بالبيانات الصحيحة.\n" +
    "5. تأكد من منطقة وعنوان التوصيل.\n" +
    "6. أضف الاحتياجات التي لم تجدها أو الملاحظات قبل إرسال الطلب.\n" +
    "7. قبل الإرسال عبر WhatsApp، تأكد من اختيار المنطقة والعنوان لبيان مبلغ التوصيل.\n" +
    "8. اضغط إرسال الطلب عبر WhatsApp بعد التأكد من جميع التفاصيل.",

  notesInfo:
    "أضف الاحتياجات التي لم تجدها أو أي ملاحظات خاصة بالطلب في خانة الملاحظات قبل الإرسال.",

  deliveryPhone:
    "07842000516",

  storeAddress:
    "بغداد / المنصور / شارع أبو جعفر المنصور",

  deliveryNote:
    "قبل الإرسال عبر WhatsApp تأكد من اختيار المنطقة والعنوان بشكل صحيح ليتم احتساب مبلغ التوصيل."
};


function renderSiteContent(){

  const mount =
    document.getElementById(
      "siteWelcomeMount"
    );

  if(!mount)
    return;

  const c = {
    ...siteContent
  };

  if(c.enabled === false){
    mount.innerHTML = "";
    return;
  }

  mount.innerHTML = "";

  const section =
    document.createElement("section");

  section.className = "section";
  section.style.cssText =
    "background:linear-gradient(135deg,#f7fff8,#eef8f1);" +
    "border:1px solid #d7e9dc;" +
    "margin-bottom:12px;";

  const heading =
    document.createElement("div");

  heading.className = "section-heading";

  const h2 =
    document.createElement("h2");

  h2.textContent =
    c.welcomeTitle ||
    "أهلاً وسهلاً بكم";

  heading.appendChild(h2);

  const p =
    document.createElement("p");

  p.textContent =
    c.welcomeText || "";

  heading.appendChild(p);

  section.appendChild(heading);

  const grid =
    document.createElement("div");

  grid.className = "site-info-grid";
  grid.style.cssText =
    "display:grid;" +
    "grid-template-columns:repeat(2,minmax(0,1fr));" +
    "gap:12px;";

  const howBox =
    document.createElement("div");

  howBox.className = "site-info-box";
  howBox.style.cssText =
    "background:#fff;" +
    "border:1px solid #e0ebe3;" +
    "border-radius:14px;" +
    "padding:14px;";

  const howTitle =
    document.createElement("strong");

  howTitle.textContent =
    "📌 طريقة استخدام الموقع";

  howBox.appendChild(howTitle);

  const how =
    document.createElement("div");

  how.style.cssText =
    "margin-top:10px;" +
    "white-space:pre-line;" +
    "line-height:1.9;" +
    "color:#37413b;";

  how.textContent =
    c.howToUse || "";

  howBox.appendChild(how);

  grid.appendChild(howBox);

  const infoBox =
    document.createElement("div");

  infoBox.className = "site-info-box";
  infoBox.style.cssText =
    "background:#fff;" +
    "border:1px solid #e0ebe3;" +
    "border-radius:14px;" +
    "padding:14px;";

  const infoTitle =
    document.createElement("strong");

  infoTitle.textContent =
    "🚚 معلومات مهمة";

  infoBox.appendChild(infoTitle);

  const phone =
    document.createElement("p");

  phone.style.margin =
    "10px 0 6px";

  phone.textContent =
    "📞 هاتف التوصيل: " +
    (c.deliveryPhone || "");

  infoBox.appendChild(phone);

  const address =
    document.createElement("p");

  address.style.margin =
    "6px 0";

  address.textContent =
    "📍 العنوان: " +
    (c.storeAddress || "");

  infoBox.appendChild(address);

  const notes =
    document.createElement("p");

  notes.style.margin =
    "6px 0";

  notes.textContent =
    "📝 الملاحظات: " +
    (c.notesInfo || "");

  infoBox.appendChild(notes);

  const delivery =
    document.createElement("p");

  delivery.style.margin =
    "6px 0";

  delivery.style.fontWeight =
    "800";

  delivery.textContent =
    "⚠️ " +
    (c.deliveryNote || "");

  infoBox.appendChild(delivery);

  grid.appendChild(infoBox);

  section.appendChild(grid);

  mount.appendChild(section);

}


const tickerText =
  document.getElementById(
    "tickerText"
  );


if(tickerText){

  tickerText.textContent =
    "عروض خاصة • خصومات مميزة • توصيل داخل بغداد • الكمية والأسعار حسب توفر المخزون";

}


/* =====================================================
   تحميل الشريط من Supabase
===================================================== */

async function loadTicker(){

  try{

    const {
      data,
      error
    } =
      await supabaseClient

        .from("products")

        .select("data")

        .eq("id",1)

        .single();


    if(error){

      console.error(
        "Ticker error:",
        error
      );

      return;

    }


    const saved =
      data?.data || {};


    if(
      saved.ticker &&
      tickerText
    ){

      tickerText.textContent =
        saved.ticker;

    }


  }catch(error){

    console.error(
      "Ticker loading error:",
      error
    );

  }

}



/* =====================================================
   البحث عن المواد للزبون
   تحسين شامل للبحث دون تغيير السلة أو بيانات المنتجات:
   - بحث عربي أكثر تسامحًا مع اختلافات الكتابة.
   - بحث في اسم المادة واسم القسم.
   - تحديث عداد النتائج بشكل مباشر.
   - مزامنة بحث سطح المكتب والهاتف.
   - زر مسح موحد وإرجاع عنوان القسم الصحيح.
===================================================== */

function normalizeArabicSearch(value){
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\u064B-\u065F\u0670]/g, "")   // التشكيل
    .replace(/[إأآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ـ/g, "")                         // التطويل
    .replace(/[ًٌٍَُِّْ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getCategoryName(categoryId){
  return categories.find(
    c => String(c.id) === String(categoryId)
  )?.name || "";
}

function getSearchableProductText(product){
  return normalizeArabicSearch(
    `${product?.name || ""} ${getCategoryName(product?.cat)}`
  );
}

function getFilteredProducts(){
  const query = normalizeArabicSearch(productSearchQuery);

  if(!query){
    if(!selectedCategory) return products.filter(p=>p.visible!==false&&p.hidden!==true&&p.active!==false);
    const ids = getCategoryChildrenIds(selectedCategory);
    return products.filter(p => ids.includes(String(p.cat)) && p.visible!==false && p.hidden!==true && p.active!==false);
  }

  return products.filter(product =>
    getSearchableProductText(product).includes(query)
  );
}

function setProductSearchQuery(value, options = {}){
  productSearchQuery = String(value ?? "").trim();

  const input = document.getElementById("productSearchInput");
  const mobileInput = document.getElementById("mobileProductSearchInput");

  if(options.syncInputs !== false){
    if(input && input.value !== productSearchQuery){
      input.value = productSearchQuery;
    }
    if(mobileInput && mobileInput.value !== productSearchQuery){
      mobileInput.value = productSearchQuery;
    }
  }

  const title = document.getElementById("productsTitle");
  if(title){
    title.textContent = productSearchQuery
      ? "نتائج البحث"
      : (getCategoryName(selectedCategory) || "المواد");
  }

  updateProductSearchUI();
  renderProducts();
}

function updateProductSearchUI(){
  const clearBtn = document.getElementById("clearProductSearch");
  const mobileClear = document.getElementById("mobileClearProductSearch");
  const hint = document.getElementById("productSearchHint");
  const query = normalizeArabicSearch(productSearchQuery);

  if(clearBtn){
    clearBtn.classList.toggle("show", Boolean(query));
  }

  if(mobileClear){
    mobileClear.classList.toggle("show", Boolean(query));
  }

  if(hint){
    if(query){
      const count = getFilteredProducts().length;
      hint.textContent = count
        ? `نتائج البحث: ${count} مادة`
        : "لا توجد مواد مطابقة للبحث";
    }else{
      hint.textContent =
        "ابحث في جميع المواد المتاحة في المتجر";
    }
  }
}

function initProductSearch(){
  const input = document.getElementById("productSearchInput");
  const mobileInput = document.getElementById("mobileProductSearchInput");
  const mobileClear = document.getElementById("mobileClearProductSearch");
  const clearBtn = document.getElementById("clearProductSearch");

  const applySearch = value => setProductSearchQuery(value);

  if(input){
    input.addEventListener("input", () => {
      applySearch(input.value);
    });
  }

  if(clearBtn){
    clearBtn.addEventListener("click", () => {
      setProductSearchQuery("");
      input?.focus();
    });
  }

  if(mobileInput){
    mobileInput.addEventListener("input", () => {
      applySearch(mobileInput.value);
    });
  }

  if(mobileClear){
    mobileClear.addEventListener("click", () => {
      setProductSearchQuery("");
      mobileInput?.focus();
    });
  }

  updateProductSearchUI();
}

/* =====================================================
   تنقل الهاتف
===================================================== */
function initMobileBottomNav(){
  const nav=document.querySelector(".mobile-bottom-nav");
  if(!nav) return;
  nav.querySelectorAll("[data-mobile-nav]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const target=btn.dataset.mobileNav;
      if(target==="cart"){ document.getElementById("cartOpenBtn")?.click(); return; }
      document.getElementById(target)?.scrollIntoView({behavior:"smooth",block:"start"});
      nav.querySelectorAll("button").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}
function syncMobileCartCount(){
  const el=document.getElementById("mobileCartCount");
  const top=document.getElementById("cartCountTop");
  if(el && top) el.textContent=top.textContent||"0";
}


/* =====================================================
   SEO ديناميكي من بيانات Supabase
   لا يغيّر واجهة الموقع أو السلة أو بيانات المتجر.
===================================================== */
function updateDynamicSEO(){
  try{
    const cleanText = value => String(value ?? "").replace(/\s+/g," ").trim();
    const siteUrl = window.location.origin + window.location.pathname;
    const productList = Array.isArray(products) ? products.filter(p => p && cleanText(p.name)) : [];
    const categoryList = Array.isArray(categories) ? categories.filter(c => c && cleanText(c.name)) : [];

    const names = productList.map(p => cleanText(p.name));
    const categoryNames = categoryList.map(c => cleanText(c.name));

    const title = "امزون | أمازون هايبر ماركت | Amazon Hypermarket";
    const description = "امزون - أمازون هايبر ماركت في بغداد. تسوق المواد الغذائية واللحوم والدجاج والخضروات والألبان والمشروبات ومواد التنظيف وغيرها من احتياجاتك اليومية.";

    document.title = title;

    const setMeta = (name, content) => {
      let el = document.head.querySelector(`meta[name="${name}"]`);
      if(!el){
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if(!canonical){
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl;

    const jsonLd = {
      "@context":"https://schema.org",
      "@graph":[
        {
          "@type":"WebSite",
          "@id":siteUrl+"#website",
          "url":siteUrl,
          "name":"امزون | أمازون هايبر ماركت",
          "alternateName":["امزون","أمازون هايبر ماركت","Amazon Hypermarket","Amazon Hyper Iraq"],
          "inLanguage":["ar","en"]
        },
        {
          "@type":"ItemList",
          "@id":siteUrl+"#products",
          "name":"منتجات أمازون هايبر ماركت",
          "itemListElement":productList.slice(0,1000).map((p,index)=>({
            "@type":"ListItem",
            "position":index+1,
            "name":cleanText(p.name),
            "url":siteUrl+"#product-"+encodeURIComponent(String(p.id ?? index+1))
          }))
        }
      ]
    };

    const productStructuredData = productList.slice(0,1000).map(p => {
      const item = {
        "@type":"Product",
        "name":cleanText(p.name),
        "sku":cleanText(p.id),
        "category":cleanText(getCategoryName(p.cat) || p.cat || "")
      };
      const image = cleanText(p.image || p.img || p.photo || "");
      if(image) item.image = [image];
      const price = Number(p.price);
      if(Number.isFinite(price) && price >= 0){
        item.offers = {
          "@type":"Offer",
          "priceCurrency": cleanText(p.currency || p.currencyCode || "IQD") || "IQD",
          "price": price,
          "availability":"https://schema.org/InStock",
          "url":siteUrl+"#product-"+encodeURIComponent(String(p.id))
        };
      }
      return item;
    });

    jsonLd["@graph"].push(...productStructuredData);

    let script = document.head.querySelector('script[data-dynamic-seo="amazonhyper"]');
    if(!script){
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.dynamicSeo = "amazonhyper";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    // هذه العناصر ليست واجهة إضافية؛ فقط تساعد محركات البحث على فهم المحتوى الحالي.
    document.documentElement.lang = "ar";

    // نحتفظ بالقائمة في data attributes فقط لأغراض الفحص والتوافق، دون عرضها للزبون.
    document.documentElement.dataset.seoProductsCount = String(productList.length);
    document.documentElement.dataset.seoCategoriesCount = String(categoryNames.length);
    document.documentElement.dataset.seoProductNames = names.slice(0,200).join(" | ");
  }catch(error){
    console.error("Dynamic SEO error:", error);
  }
}

/* =====================================================
   تشغيل الموقع
===================================================== */

initProductSearch();
initCartModal();
initProductModal();
initHeroSlider();
initMobileBottomNav();

renderSiteContent();
(function injectOfferBannerStyles(){
 const st=document.createElement('style');st.textContent=`
 .offer-banner-carousel{position:relative;grid-column:1/-1;padding:0;min-height:260px;overflow:hidden;border-radius:22px;background:#fff;border:1px solid #dfe9e3;box-shadow:0 10px 28px rgba(5,67,34,.07)}
 .offer-banner-viewport{overflow:hidden;width:100%}.offer-banner-track{display:flex;direction:ltr;transition:transform .65s cubic-bezier(.22,.61,.36,1)}
 .offer-banner-slide{direction:rtl;min-width:100%;display:grid;grid-template-columns:1.25fr .75fr;min-height:260px;background:linear-gradient(90deg,#f8fbf9,#fff)}
 .offer-banner-image{min-height:260px;overflow:hidden}.offer-banner-image img{width:100%;height:100%;object-fit:cover;display:block}.offer-banner-placeholder{height:100%;display:grid;place-items:center;font-size:42px;font-weight:900;color:#8254c8;background:#f2eaff}
 .offer-banner-copy{padding:30px 34px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.offer-banner-copy>span{background:#f1e9ff;color:#6b3cb1;padding:7px 12px;border-radius:999px;font-size:11px;font-weight:900}.offer-banner-copy h3{margin:12px 0 7px;font-size:27px;color:#15231e}.offer-banner-copy p{margin:0;color:#63716a;line-height:1.8}.offer-banner-btn{margin-top:16px;border:0;border-radius:13px;padding:11px 18px;background:#8254c8;color:#fff;font-weight:900;cursor:pointer}.offer-banner-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:3;width:38px;height:38px;border:0;border-radius:50%;background:#fff;color:#333;box-shadow:0 5px 15px #0002;font-size:25px}.offer-banner-arrow.prev{right:12px}.offer-banner-arrow.next{left:12px}.offer-banner-dots{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px}.offer-banner-dot{width:8px;height:8px;border:0;border-radius:50%;background:#c9d0cc;padding:0}.offer-banner-dot.active{width:22px;border-radius:99px;background:#8254c8}
 @media(max-width:700px){.offer-banner-slide{grid-template-columns:1fr;min-height:430px}.offer-banner-image{height:220px;min-height:220px}.offer-banner-copy{padding:18px 20px 35px}.offer-banner-copy h3{font-size:21px}.offer-banner-arrow{width:34px;height:34px}}
 `;document.head.appendChild(st);
})();

renderHeroBanner();

renderSiteContent();

renderCategories();

renderOffers();

renderDeliveryGroups();

renderProducts();

updateCart();

loadTicker();
syncMobileCartCount();
setInterval(syncMobileCartCount, 800);

Promise.all([
  loadProductsFromSupabase(),
  loadSavedCustomer()
]).then(() => {
  if(currentCustomer){
    fillCustomerOrderFields(currentCustomer);
  }

  updateCart();
  updateDynamicSEO();
});
