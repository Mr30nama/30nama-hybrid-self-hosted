import{_ as c}from"./ArchiveList.vue.987cf0cf.js";import{d as i,u as p,a as f,b as _,c as d,e as g,o as h,f as B,g as v,h as x,i as k,j as w}from"./entry.cda885f0.js";import{u}from"./useBackground.13d6bf20.js";import"./SortByDropdown.vue.dae75c8d.js";import"./FormDropdown.vue.ee2bede2.js";import"./TitleList.vue.87caed13.js";import"./TitleFrame.2e2a9405.js";import"./TitleFrameUserlist.vue.221610cd.js";import"./ContentPop-v2.vue.afd2f156.js";import"./useArchiveIcon.18656aa1.js";const $={class:"flex min-h-full w-full flex-col"},R=i({__name:"[slug]",setup(b){var a;const o=p(),r=f(),{t:l}=_(),s=d(()=>r.params.slug);g({title:()=>{var e;return`${l("seo.30nama")} | ${(e=o.categories.find(n=>n.slug===s.value))==null?void 0:e.name}`}});const t=(a=o.categories.find(e=>e.slug===s.value))==null?void 0:a.image.webp.full;return h(()=>{t&&u(t)}),B(()=>u("")),(e,n)=>{const m=c;return v(),x("div",$,[k(m,{slug:w(s)},null,8,["slug"])])}}});export{R as default};
