import{_ as K}from"./FormDropdown.vue.57846dbd.js";import{d as Q,b as W,aC as Z,e as ee,m as te,a1 as le,Y as ne,n as j,v as se,c as B,g as r,h as u,q as l,i as n,w as p,j as e,B as a,O as g,y as d,A as U,k as oe,C as ae,aD as ie,p as D,$ as re,aE as ue,J as F,av as de,D as ce,X as fe,aF as ge}from"./entry.8b93e9fc.js";const me={class:"flex h-full items-center justify-center"},pe={"aria-label":"App settings",class:"flex w-full flex-col justify-center gap-8 xl:max-w-[48em]"},he={class:"relative flex w-full flex-col justify-center gap-12"},ve={class:"flex flex-row items-center justify-around gap-4 ltr:flex-row-reverse"},we={class:"flex flex-row justify-between"},_e={class:"flex flex-row justify-between"},be={key:0,class:"flex flex-row justify-between"},ye={key:1,class:"flex flex-row justify-between"},xe={key:2,class:"flex flex-row justify-between"},Ce={class:"flex flex-col items-center justify-center gap-4"},ke={class:"flex flex-row items-center gap-4 ltr:flex-row-reverse"},Ve={key:0,class:"flex w-full flex-col items-center gap-4"},$e={class:"flex w-full items-center justify-between gap-4"},Se={key:0,class:"relative mt-4 w-full"},je={class:"local-numbers absolute bottom-full ltr:right-0 rtl:left-0"},Be={class:"relative flex h-2 w-full overflow-hidden rounded-full bg-bg-1/10"},Te=Q({__name:"index",setup(Ue){const{t:i}=W(),{checkForUpdate:O,currentStatus:m,isElectron:c,progress:h}=Z();ee({title:()=>`${i("seo.30nama")} | ${i("seo.settings")}`});const{infiniteScrolling:A,theme:z,language:N,disableAnimations:v,disableBackdrop:w,internalDownloadManager:_,minimizeToTray:b,optimizedDownloadlist:y}=te(),{loadApplicationData:I}=le(),{toggleLoader:T}=F(),E=ne();function L(t){ie(t[0])}function M(t){A.value=t[0]==="infiniteScrolling"}async function R(t){T(!0),N.value=t[0],await D.core.delay(100),await Promise.all([I(),D.core.delay(750)]),T(!1)}const x=j(!1);async function H(){x.value=!0,re("CLEAR_CACHE"),await D.core.delay(1e3),E(i("clearCacheSuccess"),"SUCCESS"),x.value=!1}m&&se(m,t=>{t==="update-not-available"&&E(i("noUpdateAvailable"),"INFO")});const P=B(()=>[{title:i("themes.dark"),value:"dark"},{title:i("themes.light"),value:"light"}]),q=B(()=>[{title:"English",value:"en"},{title:"فارسی",value:"fa"}]),J=B(()=>[{title:i("settings.infiniteScrolling"),value:"infiniteScrolling"},{title:i("settings.pagination"),value:"pagination"}]),X=j(ue().public.version),C=j(!1);async function Y(){C.value=!0,await O(),C.value=!1}const k=F();return(t,s)=>{const V=K,f=de,$=ce,S=fe,G=ge;return r(),u("div",me,[l("section",pe,[n(G,{title:t.$t("settings.settings"),background:"bg-bg-12",foreground:"bg-bg-11",icon:"ph:gear-fill",class:"relative"},{default:p(()=>[l("span",{class:"absolute top-4 cursor-pointer px-4 py-1 font-bold text-bg-9 transition-colors hover:text-primary-500 ltr:right-1 rtl:left-1",onClick:s[0]||(s[0]=(...o)=>e(k).toggleChangelog&&e(k).toggleChangelog(...o))},a("v"+e(X)),1),l("div",he,[l("div",ve,[n(V,{"selected-option":e(z),title:t.$t("settings.theme"),list:e(P),style:{foreground:"bg-bg-10"},onOnChange:L},null,8,["selected-option","title","list"]),n(V,{"selected-option":e(A)?"infiniteScrolling":"pagination",title:t.$t("settings.pageNavigation"),list:e(J),style:{foreground:"bg-bg-10"},onOnChange:M},null,8,["selected-option","title","list"]),n(V,{"selected-option":e(N),title:t.$t("settings.language"),list:e(q),style:{foreground:"bg-bg-10"},onOnChange:R},null,8,["selected-option","title","list"])]),l("div",we,[l("h5",null,a(t.$t("disableAnimations"))+":",1),n(f,{modelValue:e(v),"onUpdate:modelValue":s[1]||(s[1]=o=>g(v)?v.value=o:null)},null,8,["modelValue"])]),l("div",_e,[l("h5",null,a(t.$t("disableAcrylic"))+":",1),n(f,{modelValue:e(w),"onUpdate:modelValue":s[2]||(s[2]=o=>g(w)?w.value=o:null)},null,8,["modelValue"])]),e(c)?(r(),u("div",be,[l("h5",null,a(t.$t("internalDownloadManager"))+":",1),n(f,{modelValue:e(_),"onUpdate:modelValue":s[3]||(s[3]=o=>g(_)?_.value=o:null)},null,8,["modelValue"])])):d("",!0),e(c)?(r(),u("div",ye,[l("h5",null,a(t.$t("minimizeToTray"))+":",1),n(f,{modelValue:e(b),"onUpdate:modelValue":s[4]||(s[4]=o=>g(b)?b.value=o:null)},null,8,["modelValue"])])):d("",!0),e(c)?(r(),u("div",xe,[l("h5",null,a(t.$t("optimizedDownloadList"))+":",1),n(f,{modelValue:e(y),"onUpdate:modelValue":s[5]||(s[5]=o=>g(y)?y.value=o:null)},null,8,["modelValue"])])):d("",!0),l("div",Ce,[l("div",ke,[n(S,{class:"btn-primary-outline text-sm",onClick:e(k).toggleNetworkSettings},{default:p(()=>[n($,{name:"ph:share-network-fill"}),U(" "+a(t.$t("network.networkSettings")),1)]),_:1},8,["onClick"]),n(S,{class:"btn-primary-outline text-sm",loading:e(x),onClick:H},{default:p(()=>[n($,{name:"ph:broom-fill"}),U(" "+a(t.$t("clearCache")),1)]),_:1},8,["loading"]),e(c)?(r(),oe(S,{key:0,class:"btn-primary-outline text-sm",loading:e(C),disable:e(m)==="downloading",onClick:Y},{default:p(()=>[n($,{name:"ph:cloud-arrow-down-fill"}),U(" "+a(t.$t("checkUpdate")),1)]),_:1},8,["loading","disable"])):d("",!0)]),e(m)==="downloading"&&e(c)?(r(),u("div",Ve,[l("div",$e,[e(h)?(r(),u("span",Se,[l("span",je,a(Math.round(e(h).percent*100)/100)+"%",1),l("div",Be,[l("span",{class:"full !ltr:rounded-l-0 absolute h-full w-full rounded-full bg-primary-500 ltr:right-0 ltr:rounded-l-none rtl:left-0 rtl:rounded-r-none",style:ae(`width: ${e(h).percent}%`)},null,4)])])):d("",!0)])])):d("",!0)])])]),_:1},8,["title"])])])}}});export{Te as default};
