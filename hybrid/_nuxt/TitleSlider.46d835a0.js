import{_ as v}from"./TitleFrame.3ce59314.js";import{d as x,a3 as y,n as r,v as w,c as k,o as P,f as h,g as n,h as i,j as a,i as _,w as u,F as B,r as S,k as b,y as I,I as T}from"./entry.8b93e9fc.js";import{S as C,G as m,a as E}from"./splide-extension-grid.esm.cf228309.js";const F={key:0,class:"w-full"},G=x({__name:"TitleSlider",props:{isLoading:{type:Boolean},data:{}},setup(L){const l=y("globalDirection"),d=r(!1),c=r(),t=r();w(l,async()=>{var e;await new Promise(o=>setTimeout(o,300)),console.log((e=t.value)==null?void 0:e.splide),t.value&&t.value.splide.refresh()});const f=k(()=>({grid:{rows:2},direction:l.value,mediaQuery:"min",arrows:!0,pagination:!1,extetntions:{Grid:m},breakpoints:{4e3:{perPage:16},2560:{perPage:10},2220:{perPage:7},1850:{perPage:6},1500:{perPage:4},1150:{perPage:3},950:{perPage:2}}}));let s=null;return P(()=>{const e=document.getElementById("main-scroller");s=new IntersectionObserver(o=>d.value=o[0].isIntersecting,{root:e,rootMargin:"100% 0px 0px 0px"}),s.observe(c.value)}),h(()=>s==null?void 0:s.disconnect()),(e,o)=>{const g=v;return n(),i("div",{ref_key:"slider",ref:c,class:"slider h-[45.75em] w-full p-4"},[a(d)?(n(),i("div",F,[_(a(E),{ref_key:"splide",ref:t,class:"slider-wrapper",options:a(f),extensions:{Grid:a(m)}},{default:u(()=>[(n(!0),i(B,null,S(e.data,p=>(n(),b(a(C),{key:p.id,class:"flex justify-center"},{default:u(()=>[_(g,{data:p,"is-loading":e.isLoading,size:"medium",class:"text-xs"},null,8,["data","is-loading"])]),_:2},1024))),128))]),_:1},8,["options","extensions"])])):I("",!0)],512)}}});const M=T(G,[["__scopeId","data-v-420f0717"]]);export{M as _};
