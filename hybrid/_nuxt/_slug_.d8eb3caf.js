import{_ as c}from"./ArchiveList.vue.f86dc73a.js";import{d as i,u as p,a as f,b as _,c as d,e as g,o as h,f as B,g as v,h as x,i as k,j as w}from"./entry.771bd3e6.js";import{u}from"./useBackground.9ab5ec82.js";import"./SortByDropdown.vue.e9e24824.js";import"./FormDropdown.vue.169fb3ef.js";import"./TitleList.vue.eba8ef81.js";import"./TitleFrame.73ac63a9.js";import"./TitleFrameUserlist.vue.1f21d05c.js";import"./ContentPop-v2.vue.bc9c9605.js";import"./useArchiveIcon.18656aa1.js";const $={class:"flex min-h-full w-full flex-col"},R=i({__name:"[slug]",setup(b){var n;const o=p(),r=f(),{t:l}=_(),s=d(()=>r.params.slug);g({title:()=>{var e;return`${l("seo.30nama")} | ${(e=o.genres.find(a=>a.slug===s.value))==null?void 0:e.name}`}});const t=(n=o.genres.find(e=>e.slug===s.value))==null?void 0:n.image.webp.full;return h(()=>{t&&u(t)}),B(()=>u("")),(e,a)=>{const m=c;return v(),x("div",$,[k(m,{slug:w(s)},null,8,["slug"])])}}});export{R as default};
