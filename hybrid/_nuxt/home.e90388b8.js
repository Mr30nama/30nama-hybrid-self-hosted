import{d as b,ae as v,r as h,c as k,o as y,g as s,h as _,j as e,i as r,z as d,F as $,A as x,l as i,m as l,s as B,ai as S,b as T,e as C,k as p,t as I,v as H}from"./entry.771bd3e6.js";import{_ as V}from"./HeroSlider.162d2ab6.js";import{_ as E}from"./TitleSlider.da9f1127.js";import{_ as P}from"./ContentPop-v2.vue.bc9c9605.js";import{_ as D}from"./TitleFrame.73ac63a9.js";import{S as F,a as L}from"./splide-extension-grid.esm.dea9f5ec.js";import"./TitleFrameUserlist.vue.1f21d05c.js";import"./BaseChip.vue.f1f21bd7.js";const N={key:0,class:"w-full"},R=b({__name:"Top10TitleSlider",props:{isLoading:{type:Boolean},data:{}},setup(w){const t=v("globalDirection"),u=h(!1),o=h(),f=k(()=>({arrows:!0,direction:t.value,autoWidth:!0,focus:0,omitEnd:!0,classes:{arrows:"splide__arrows top10-arrows",arrow:"splide__arrow top10-arrow",prev:"splide__arrow--prev top10-prev",next:"splide__arrow--next top10-next"},gap:"1em",pagination:!1}));return y(()=>{const c=document.getElementById("main-scroller");new IntersectionObserver(a=>u.value=a[0].isIntersecting,{root:c,rootMargin:"100% 0px 0px 0px"}).observe(o.value)}),(c,g)=>{const a=D;return s(),_("div",{ref_key:"sliderTop10",ref:o,class:"slider h-[23.875em] w-full p-4 px-10"},[e(u)?(s(),_("div",N,[r(e(L),{class:"slider-wrapper",options:e(f)},{default:d(()=>[(s(!0),_($,null,x(c.data,(n,m)=>(s(),i(e(F),{key:n.id},{default:d(()=>[r(a,{data:n,"is-loading":c.isLoading,number:m+1,size:"medium",class:"text-xs"},null,8,["data","is-loading","number"])]),_:2},1024))),128))]),_:1},8,["options"])])):l("",!0)],512)}}});const z=B(R,[["__scopeId","data-v-9377f8ce"]]),M={class:"mt-[-4.8rem] flex w-full flex-col gap-20"},j={"aria-label":"continue watching ",class:"flex flex-col gap-8"},A={class:"te flex flex-row items-center gap-4 text-3xl font-semibold"},O={class:"text-fonts-50"},W={class:"relative flex text-fonts-50"},q=p("span",{class:"absolute top-1/3 h-4 w-4 rounded-full bg-bg-1 blur-lg ltr:left-1/2 rtl:right-1/2"},null,-1),ee=b({__name:"home",setup(w){const t=S(),{t:u}=T();return C({title:()=>u("seo.30nama")}),(o,f)=>{const c=H,g=V,a=E,n=P,m=z;return s(),_("div",M,[p("section",j,[p("header",A,[p("h3",O,I(o.$t("welcome")),1),p("span",W,[r(c,{name:"ph:hand-waving-fill"}),q])]),e(t).heroHeader?(s(),i(g,{key:0,posts:e(t).heroHeader.posts},null,8,["posts"])):l("",!0)]),e(t).suggested?(s(),i(n,{key:0,to:{title:o.$t("archives.all"),href:"/category/suggested"},icon:"ph:star-fill",title:o.$t("archives.suggested"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).suggested.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).top10?(s(),i(n,{key:1,icon:"ph:fire-fill",title:o.$t("archives.top10"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(m,{data:e(t).top10.posts},null,8,["data"])]),_:1},8,["title"])):l("",!0),e(t).newReleases?(s(),i(n,{key:2,to:{title:o.$t("archives.all"),href:"/category/new-releases"},icon:"ph:broadcast-fill",title:o.$t("archives.newReleases"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).newReleases.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).movies?(s(),i(n,{key:3,to:{title:o.$t("archives.all"),href:"/category/movies"},icon:"ph:film-strip",title:o.$t("archives.movies"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).movies.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).series?(s(),i(n,{key:4,to:{title:o.$t("archives.all"),href:"/category/series"},icon:"ph:film-slate",title:o.$t("archives.series"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).series.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).anime?(s(),i(n,{key:5,to:{title:o.$t("archives.all"),href:"/category/anime"},icon:"ph:flower-lotus",title:o.$t("archives.anime"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).anime.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0)])}}});export{ee as default};
