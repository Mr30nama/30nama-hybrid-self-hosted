import{_ as x}from"./TitleFrame.73ac63a9.js";import{d as v,ae as y,r,V as w,c as b,o as k,f as P,g as n,h as i,j as a,i as _,z as u,F as h,A as B,l as S,m as I,s as T}from"./entry.771bd3e6.js";import{S as V,G as m,a as C}from"./splide-extension-grid.esm.dea9f5ec.js";const E={key:0,class:"w-full"},F=v({__name:"TitleSlider",props:{isLoading:{type:Boolean},data:{}},setup(G){const l=y("globalDirection"),d=r(!1),c=r(),t=r();w(l,async()=>{var e;await new Promise(o=>setTimeout(o,300)),console.log((e=t.value)==null?void 0:e.splide),t.value&&t.value.splide.refresh()});const f=b(()=>({grid:{rows:2},direction:l.value,mediaQuery:"min",arrows:!0,pagination:!1,extetntions:{Grid:m},breakpoints:{4e3:{perPage:16},2560:{perPage:10},2220:{perPage:7},1850:{perPage:6},1500:{perPage:4},1150:{perPage:3},950:{perPage:2}}}));let s=null;return k(()=>{const e=document.getElementById("main-scroller");s=new IntersectionObserver(o=>d.value=o[0].isIntersecting,{root:e,rootMargin:"100% 0px 0px 0px"}),s.observe(c.value)}),P(()=>s==null?void 0:s.disconnect()),(e,o)=>{const g=x;return n(),i("div",{ref_key:"slider",ref:c,class:"slider h-[45.75em] w-full p-4"},[a(d)?(n(),i("div",E,[_(a(C),{ref_key:"splide",ref:t,class:"slider-wrapper",options:a(f),extensions:{Grid:a(m)}},{default:u(()=>[(n(!0),i(h,null,B(e.data,p=>(n(),S(a(V),{key:p.id,class:"flex justify-center"},{default:u(()=>[_(g,{data:p,"is-loading":e.isLoading,size:"medium",class:"text-xs"},null,8,["data","is-loading"])]),_:2},1024))),128))]),_:1},8,["options","extensions"])])):I("",!0)],512)}}});const D=T(F,[["__scopeId","data-v-7770084b"]]);export{D as _};
