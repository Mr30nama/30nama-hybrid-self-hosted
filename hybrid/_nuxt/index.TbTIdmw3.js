import{_ as W}from"./FormDropdown.vue.6pOzCI0i.js";import{d as Y,b as Z,aL as ee,e as te,R as le,ag as ne,ac as se,r as j,V as oe,c as U,g as r,h as u,k as l,i as n,z as p,j as e,t as a,I as g,m as d,N as B,l as ae,X as ie,aM as re,L as N,ae as ue,aN as de,$ as z,aH as ce,v as fe,O as ge,aO as me}from"./entry.YzqeuuI7.js";const pe={class:"flex h-full items-center justify-center"},he={"aria-label":"App settings",class:"flex w-full flex-col justify-center gap-8 xl:max-w-[48em]"},ve={class:"relative flex w-full flex-col justify-center gap-12"},_e={class:"flex flex-row items-center justify-around gap-4 ltr:flex-row-reverse"},we={class:"flex flex-row justify-between"},be={class:"flex flex-row justify-between"},ye={key:0,class:"flex flex-row justify-between"},xe={key:1,class:"flex flex-row justify-between"},ke={key:2,class:"flex flex-row justify-between"},Ce={class:"flex flex-col items-center justify-center gap-4"},Ve={class:"flex flex-row items-center gap-4 ltr:flex-row-reverse"},$e={key:0,class:"flex w-full flex-col items-center gap-4"},Se={class:"flex w-full items-center justify-between gap-4"},je={key:0,class:"relative mt-4 w-full"},Ue={class:"local-numbers absolute bottom-full ltr:right-0 rtl:left-0"},Be={class:"relative flex h-2 w-full overflow-hidden rounded-full bg-bg-1/10"},Te=Y({__name:"index",setup(Ne){const{t:i}=Z(),{checkForUpdate:E,currentStatus:m,isElectron:c,progress:h}=ee();te({title:()=>`${i("seo.30nama")} | ${i("seo.settings")}`});const{infiniteScrolling:A,theme:F,language:D,disableAnimations:v,disableBackdrop:_,internalDownloadManager:w,minimizeToTray:b,optimizedDownloadlist:y}=le(),{loadApplicationData:L}=ne(),{toggleLoader:T}=z(),O=se();function I(t){re(t[0])}function M(t){A.value=t[0]==="infiniteScrolling"}async function R(t){T(!0),D.value=t[0],await N.core.delay(100),await Promise.all([L(),N.core.delay(750)]),T(!1)}const x=j(!1);async function H(){x.value=!0,ue("CLEAR_CACHE"),await N.core.delay(1e3),O(i("clearCacheSuccess"),"SUCCESS"),x.value=!1}m&&oe(m,t=>{t==="update-not-available"&&O(i("noUpdateAvailable"),"INFO")});const P=U(()=>[{title:i("themes.dark"),value:"dark"},{title:i("themes.light"),value:"light"}]),X=U(()=>[{title:"English",value:"en"},{title:"فارسی",value:"fa"}]),q=U(()=>[{title:i("settings.infiniteScrolling"),value:"infiniteScrolling"},{title:i("settings.pagination"),value:"pagination"}]),G=de(),J=j(G.public.version),k=j(!1);async function K(){k.value=!0,await E(),k.value=!1}const C=z();return(t,s)=>{const V=W,f=ce,$=fe,S=ge,Q=me;return r(),u("div",pe,[l("section",he,[n(Q,{title:t.$t("settings.settings"),background:"bg-bg-12",foreground:"bg-bg-11",icon:"ph:gear-fill",class:"relative"},{default:p(()=>[l("span",{class:"absolute top-4 cursor-pointer px-4 py-1 font-bold text-bg-9 transition-colors hover:text-primary-500 ltr:right-1 rtl:left-1",onClick:s[0]||(s[0]=(...o)=>e(C).toggleChangelog&&e(C).toggleChangelog(...o))},a("v"+e(J)),1),l("div",ve,[l("div",_e,[n(V,{"selected-option":e(F),title:t.$t("settings.theme"),list:e(P),style:{foreground:"bg-bg-10"},onOnChange:I},null,8,["selected-option","title","list"]),n(V,{"selected-option":e(A)?"infiniteScrolling":"pagination",title:t.$t("settings.pageNavigation"),list:e(q),style:{foreground:"bg-bg-10"},onOnChange:M},null,8,["selected-option","title","list"]),n(V,{"selected-option":e(D),title:t.$t("settings.language"),list:e(X),style:{foreground:"bg-bg-10"},onOnChange:R},null,8,["selected-option","title","list"])]),l("div",we,[l("h5",null,a(t.$t("disableAnimations"))+":",1),n(f,{modelValue:e(v),"onUpdate:modelValue":s[1]||(s[1]=o=>g(v)?v.value=o:null)},null,8,["modelValue"])]),l("div",be,[l("h5",null,a(t.$t("disableAcrylic"))+":",1),n(f,{modelValue:e(_),"onUpdate:modelValue":s[2]||(s[2]=o=>g(_)?_.value=o:null)},null,8,["modelValue"])]),e(c)?(r(),u("div",ye,[l("h5",null,a(t.$t("internalDownloadManager"))+":",1),n(f,{modelValue:e(w),"onUpdate:modelValue":s[3]||(s[3]=o=>g(w)?w.value=o:null)},null,8,["modelValue"])])):d("",!0),e(c)?(r(),u("div",xe,[l("h5",null,a(t.$t("minimizeToTray"))+":",1),n(f,{modelValue:e(b),"onUpdate:modelValue":s[4]||(s[4]=o=>g(b)?b.value=o:null)},null,8,["modelValue"])])):d("",!0),e(c)?(r(),u("div",ke,[l("h5",null,a(t.$t("optimizedDownloadList"))+":",1),n(f,{modelValue:e(y),"onUpdate:modelValue":s[5]||(s[5]=o=>g(y)?y.value=o:null)},null,8,["modelValue"])])):d("",!0),l("div",Ce,[l("div",Ve,[n(S,{class:"btn-primary-outline text-sm",onClick:e(C).toggleNetworkSettings},{default:p(()=>[n($,{name:"ph:share-network-fill"}),B(" "+a(t.$t("network.networkSettings")),1)]),_:1},8,["onClick"]),n(S,{class:"btn-primary-outline text-sm",loading:e(x),onClick:H},{default:p(()=>[n($,{name:"ph:broom-fill"}),B(" "+a(t.$t("clearCache")),1)]),_:1},8,["loading"]),e(c)?(r(),ae(S,{key:0,class:"btn-primary-outline text-sm",loading:e(k),disable:e(m)==="downloading",onClick:K},{default:p(()=>[n($,{name:"ph:cloud-arrow-down-fill"}),B(" "+a(t.$t("checkUpdate")),1)]),_:1},8,["loading","disable"])):d("",!0)]),e(m)==="downloading"&&e(c)?(r(),u("div",$e,[l("div",Se,[e(h)?(r(),u("span",je,[l("span",Ue,a(Math.round(e(h).percent*100)/100)+"%",1),l("div",Be,[l("span",{class:"full !ltr:rounded-l-0 absolute h-full w-full rounded-full bg-primary-500 ltr:right-0 ltr:rounded-l-none rtl:left-0 rtl:rounded-r-none",style:ie(`width: ${e(h).percent}%`)},null,4)])])):d("",!0)])])):d("",!0)])])]),_:1},8,["title"])])])}}});export{Te as default};
