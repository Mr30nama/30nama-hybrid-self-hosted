import{d as S,g as t,h as a,k as C,w as g,q as e,B as l,y as c,i as h,A as N,z as R,E as j,_ as M,G as P,H as T,I as V,a as q,l as A,Y as E,b as z,e as U,c as y,n as v,o as Z,$ as F,p as G,f as H,j as k,F as $,r as B}from"./entry.8b93e9fc.js";import{_ as D}from"./ContentPop-v2.vue.ac6743b8.js";import{u as L}from"./useBackground.c11a2457.js";const O=""+globalThis.__publicAssetsURL("images/scores/subscene.png"),Y=""+globalThis.__publicAssetsURL("images/scores/30nama.png"),w=u=>(P("data-v-ea21afb0"),u=u(),T(),u),J={key:0,class:"__skeleton-2 bg-bg-10 h-[3.5em] w-full rounded-xl"},K=w(()=>e("div",{class:"absolute top-1/2 flex h-full -translate-y-1/2 items-center justify-center gap-2"},[e("svg",{class:"fill-bg-11 h-[70%] max-h-[12em] ltr:left-0 ltr:rotate-180 rtl:right-0",viewBox:"0 0 4 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M4 4.34215C-3.15591 9.50124 0.854026 15.3132 4 17.3685L4 4.34215Z"}),e("path",{d:"M1.745 15.3421C2.49667 16.0175 4 18.2947 4 22L4 17.3684L1.745 15.3421Z"}),e("path",{d:"M1.745 6.36853C2.49666 5.69309 4 3.47378 4 7.77245e-05L4 4.3422L1.745 6.36853Z"})]),e("span",{class:"bg-secondary-500 shadow-secondary-500 group-hover:!shadow-secondary-500 h-[50%] max-h-[6em] w-1 rounded-full shadow-[0_0_8px_0] transition-all ltr:group-hover:shadow-[4px_0_20px_2px] rtl:group-hover:shadow-[-4px_0_20px_2px]"})],-1)),Q={class:"flex w-full gap-4 ltr:pl-8 rtl:pr-8"},W={class:"flex flex-1 flex-row flex-wrap gap-8 text-sm"},X={key:0,class:"flex flex-row items-center gap-2"},ee={class:"text-primary-500 font-semibold"},se={key:1,class:"flex flex-row items-center gap-2"},te={class:"text-primary-500 font-semibold"},ae={key:2,class:"flex flex-row items-center gap-2"},le={class:"text-primary-500 font-semibold"},oe={key:3,class:"flex flex-row items-center gap-2"},ne={class:"text-primary-500 font-semibold"},re={class:"flex flex-row items-center gap-2 px-4"},ie=w(()=>e("li",null,[e("div",{class:"w-6 overflow-hidden rounded-lg border-2 border-transparent"},[e("img",{src:O,alt:"30nama"})])],-1)),ce={key:0},ue=w(()=>e("div",{class:"border-primary-500/50 w-6 overflow-hidden rounded-lg border-2"},[e("img",{src:Y,alt:"30nama"})],-1)),de=S({__name:"SinglePageSubtitleBar",props:{data:{},isLoading:{type:Boolean}},setup(u){return(s,b)=>{var o;const f=j,p=M;return t(),a("li",{class:R(["link flex min-w-[48%] flex-row items-center gap-2",{"w-full":(o=s.data)==null?void 0:o.single}])},[s.isLoading?(t(),a("div",J)):s.data?(t(),C(p,{key:1,external:!0,class:"bg-bg-12/50 hover:bg-bg-12 just group relative flex w-full min-w-[16em] max-w-full rounded-xl py-4 transition-all",target:"_blank",to:s.data.link},{default:g(()=>[K,e("div",Q,[e("ul",W,[s.data.season?(t(),a("li",X,[e("p",ee,l(s.$t("season"))+":",1),e("p",null,l(s.data.season),1)])):c("",!0),s.data.language?(t(),a("li",se,[e("p",te,l(s.$t("language"))+":",1),e("p",null,l(s.data.language),1)])):c("",!0),s.data.quality?(t(),a("li",ae,[e("p",le,l(s.$t("quality"))+":",1),e("p",null,l(s.data.quality),1)])):c("",!0),s.data.type?(t(),a("li",oe,[e("p",ne,l(s.data.type==="sync"?s.$t("sync"):s.data.type==="exclusive"?s.$t("exclusive"):""),1)])):c("",!0)]),e("ul",re,[ie,s.data.single?(t(),a("li",ce,[ue,h(f,{class:"z-10",placement:"top"},{default:g(()=>[N(l(s.$t("exclusive")),1)]),_:1})])):c("",!0)])])]),_:1},8,["to"])):c("",!0)],2)}}});const pe=V(de,[["__scopeId","data-v-ea21afb0"]]),_e={"aria-label":"subtitle links",class:"flex min-h-full w-full flex-col"},fe={class:"mt-[-3.25rem] h-full"},me={class:"min-h-full w-full"},ge={class:"flex min-h-full w-full flex-col py-12"},he={key:0,class:"flex flex-row flex-wrap justify-center gap-4 px-6"},we={key:1,class:"flex flex-row flex-wrap justify-center gap-4 px-6"},ve=S({__name:"subtitles",setup(u){const s=q(),b=A(),f=E(),{t:p}=z();U({title:()=>`${p("seo.30nama")} | ${p("seo.subtitleLinks")}`});const o=y(()=>s.params.id);typeof o.value!="string"&&b.replace("/");const i=v(),x=v(!0),I=y(()=>{var n;return(n=i.value)==null?void 0:n.result.subtitle});return Z(async()=>{var n,m,d,_,r;typeof o.value=="string"&&(i.value=await F("SINGLE::"+o.value,()=>G.API.actions.single(Number(o.value))),x.value=!1,(n=i.value)!=null&&n.error&&f(i.value.msg,"ERROR"),(r=(_=(d=(m=i.value)==null?void 0:m.result)==null?void 0:d.image)==null?void 0:_.cover)!=null&&r.webp&&L(i.value.result.image.cover.webp))}),H(()=>L("")),(n,m)=>{const d=pe,_=D;return t(),a("section",_e,[e("div",fe,[h(_,{icon:"ph:download-simple-fill",title:n.$t("sidebar.tree.single.panel.subtitles"),"shadow-background":"shadow-bg-11",foreground:"bg-bg-11","wide-background":"",class:"h-[calc(100%_+_3.1rem)]"},{content:g(()=>[e("div",me,[e("section",ge,[k(x)?(t(),a("ul",he,[(t(),a($,null,B(12,r=>h(d,{key:r,"is-loading":""})),64))])):(t(),a("ul",we,[(t(!0),a($,null,B(k(I),r=>(t(),C(d,{key:r.link,data:r},null,8,["data"]))),128))]))])])]),_:1},8,["title"])])])}}});export{ve as default};
