import{_ as c}from"./ArchiveList.vue.64206a69.js";import{d as i,u as p,a as f,b as _,c as d,e as g,o as h,f as B,g as v,h as x,i as k,j as w}from"./entry.8b93e9fc.js";import{u}from"./useBackground.c11a2457.js";import"./SortByDropdown.vue.f89ad25c.js";import"./FormDropdown.vue.57846dbd.js";import"./TitleList.vue.1126aa36.js";import"./TitleFrame.3ce59314.js";import"./TitleFrameUserlist.vue.ea70c7b3.js";import"./ContentPop-v2.vue.ac6743b8.js";import"./useArchiveIcon.18656aa1.js";const $={class:"flex min-h-full w-full flex-col"},R=i({__name:"[slug]",setup(b){var n;const o=p(),r=f(),{t:l}=_(),s=d(()=>r.params.slug);g({title:()=>{var e;return`${l("seo.30nama")} | ${(e=o.genres.find(a=>a.slug===s.value))==null?void 0:e.name}`}});const t=(n=o.genres.find(e=>e.slug===s.value))==null?void 0:n.image.webp.full;return h(()=>{t&&u(t)}),B(()=>u("")),(e,a)=>{const m=c;return v(),x("div",$,[k(m,{slug:w(s)},null,8,["slug"])])}}});export{R as default};
