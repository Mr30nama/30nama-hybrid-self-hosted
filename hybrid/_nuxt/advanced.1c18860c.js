import{_ as T}from"./FormDropdown.vue.ee2bede2.js";import{d as A,b as L,a8 as N,a as P,Q as I,r as g,V as j,o as H,aa as U,K as F,B as z,g as f,h as x,k as o,j as s,i,z as K,N as Q,t as y,E as O,L as q,aD as V,v as Y,O as Z,at as G,aE as J,p as W,q as X,ad as ee,s as te,ap as se,R as le,e as oe,f as ne,l as ae}from"./entry.cda885f0.js";import{_ as re}from"./SortByDropdown.vue.dae75c8d.js";import{_ as ie}from"./TitleList.vue.87caed13.js";import"./TitleFrame.2e2a9405.js";import"./TitleFrameUserlist.vue.221610cd.js";import"./ContentPop-v2.vue.afd2f156.js";const E=_=>(W("data-v-929feed2"),_=_(),X(),_),de={class:"bg-bg-11 relative -my-2 mb-24 flex flex-col items-center justify-center gap-4 rounded-xl p-4"},ue={key:0,class:"search-options flex h-[9.375rem] flex-col gap-2"},me=ee('<div class="row h-[4.125rem]" data-v-929feed2><div class="__skeleton-2 h-[3.125rem] w-[12.5rem] rounded-xl" data-v-929feed2></div><div class="__skeleton-2 h-[3.125rem] w-[12.5rem] rounded-xl" data-v-929feed2></div><div class="__skeleton-2 h-[3.125rem] w-[12.5rem] rounded-xl" data-v-929feed2></div></div><div class="row h-[4.125rem]" data-v-929feed2><div class="__skeleton-2 h-[3.125rem] w-[12.5rem] rounded-xl" data-v-929feed2></div><div class="__skeleton-2 h-[3.125rem] w-[12.5rem] rounded-xl" data-v-929feed2></div><div class="__skeleton-2 h-[3.125rem] w-[12.5rem] rounded-xl" data-v-929feed2></div></div>',2),ce=[me],ge={key:1,class:"search-options z-30 flex flex-col gap-2"},pe={class:"row"},fe={class:"row"},be={class:"row"},ve={class:"row"},ye={class:"row mt-[1rem] justify-around"},xe=E(()=>o("p",{class:"font-bold"}," 3D ",-1)),_e={class:"flex items-center"},he=E(()=>o("p",{class:"font-bold"}," x265 ",-1)),we={class:"flex items-center"},Ce={class:"font-bold"},$e={class:"flex items-center"},De={class:"row"},ke={class:"flex w-[12.5rem] items-center gap-2"},Se={class:"border-fonts-300 text-fonts-50 input outline-fonts-[50] flex w-full translate-y-1 flex-row items-center justify-center gap-2 rounded-xl border-2 p-2 px-4 py-2 text-sm outline-offset-2 transition-colors"},Re={class:"flex items-center gap-2"},Be={class:"whitespace-nowrap text-xs"},Oe={class:"whitespace-nowrap text-xs"},qe=["placeholder"],Ee=E(()=>o("svg",{class:"fill-bg-11 w-[14rem]",viewBox:"0 0 38 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.5 3C27.6667 2 31.6 -2.79753e-07 38 0L30 -3.49691e-07L7.5 -1.3332e-06L0 -1.66103e-06C5.0511 -1.44024e-06 8.56663 1.41742 10.2483 2.46238C10.4687 2.62436 10.6892 2.77852 10.9099 2.92509C10.9415 2.95063 10.9715 2.97561 11 3L10.9219 2.9331C16.8223 6.84511 22.792 5.33316 26.7372 2.79671L26.5 3Z"})],-1)),Ve={class:"absolute mb-4"},Ae=A({__name:"AdvancedSearchParams",emits:["submit"],setup(_,{emit:w}){const{t:C}=L(),$=N(),c=P(),b=I(),p=g(!1);j(p,t=>t===!0&&setTimeout(()=>{var e;return(e=document.querySelector('[aria-label="more options"]'))==null?void 0:e.classList.remove("overflow-hidden")},500));const m=g(!0),u=g(),D={...c.query},a=t=>D[t];function n(t,e){const r=e==="ALL"||e[0]==="ALL"||e==="false";b.replace({query:{...c.query,[t]:r?void 0:e}})}const d=g({"3D":a("3D")==="true",x265:a("x265")==="true",stream:a("stream")==="true"});H(async()=>{const t=await U("SEARCH_PARAMETERS",()=>F.API.actions.advanced_search_parameters());if(t.error)return $(t.msg,"ERROR");if(!t.success||!t.result)return $(C("errorMessage"),"ERROR");u.value=t.result,m.value=!1,await z(),document.getElementById("min-year-input").value=a("min_year")||"",document.getElementById("max-year-input").value=a("max_year")||""});const h=w;function R(){h("submit",c.query)}return(t,e)=>{const r=T,k=Y,S=Z,v=G,B=J,M=re;return f(),x("div",null,[o("section",de,[s(m)?(f(),x("div",ue,ce)):(f(),x("div",ge,[o("div",pe,[i(r,{title:t.$t("singleDetails.type"),list:s(u).type,"has-default-all":"",searchable:"","selected-option":a("type"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[0]||(e[0]=l=>n("type",l))},null,8,["title","list","selected-option"]),i(r,{title:t.$t("singleDetails.genre"),list:s(u).genre,"has-default-all":"",searchable:"","multi-selection":"","selected-option-array":s(c).query.genre?Array.isArray(s(c).query.genre)?s(c).query.genre:[s(c).query.genre]:void 0,style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[1]||(e[1]=l=>n("genre",l))},null,8,["title","list","selected-option-array"]),i(S,{class:"btn-primary-outline w-[12.5rem] translate-y-3",onClick:R},{default:K(()=>[i(k,{name:"ph:magnifying-glass-fill"}),Q(" "+y(t.$t("search")),1)]),_:1})]),o("div",fe,[i(v,{"initial-value":a("actor"),label:t.$t("singleDetails.actor"),name:"actor",dimmed:"","label-bg":"bg-bg-11",class:"min-w-[12.5rem]","onUpdate:modelValue":e[2]||(e[2]=l=>n("actor",l))},null,8,["initial-value","label"]),i(v,{"initial-value":a("director"),label:t.$t("singleDetails.director"),name:"director",dimmed:"","label-bg":"bg-bg-11",class:"min-w-[12.5rem]","onUpdate:modelValue":e[3]||(e[3]=l=>n("director",l))},null,8,["initial-value","label"]),i(v,{"initial-value":a("writer"),label:t.$t("singleDetails.writer"),name:"writer",dimmed:"","label-bg":"bg-bg-11",class:"min-w-[12.5rem]","onUpdate:modelValue":e[4]||(e[4]=l=>n("writer",l))},null,8,["initial-value","label"])]),o("section",{"aria-label":"more options",class:O(["flex max-h-0 transform-gpu flex-col gap-2 overflow-hidden pb-2 transition-all duration-500",{"max-h-[20rem] ":s(p)}])},[o("div",be,[i(r,{title:t.$t("singleDetails.encoder"),list:s(u).encoder,"has-default-all":"",searchable:"","selected-option":a("encoder"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[5]||(e[5]=l=>n("encoder",l[0]))},null,8,["title","list","selected-option"]),i(r,{title:t.$t("singleDetails.quality"),list:s(u).quality,"has-default-all":"",searchable:"","selected-option":a("quality"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[6]||(e[6]=l=>n("quality",l[0]))},null,8,["title","list","selected-option"]),i(r,{title:t.$t("singleDetails.countries"),list:s(u).country,"has-default-all":"",searchable:"","selected-option":a("country"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[7]||(e[7]=l=>n("country",l[0]))},null,8,["title","list","selected-option"])]),o("div",ve,[i(r,{title:t.$t("singleDetails.primaryLanguage"),list:s(u).language,"has-default-all":"",searchable:"","selected-option":a("language"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[8]||(e[8]=l=>n("language",l[0]))},null,8,["title","list","selected-option"]),i(r,{title:t.$t("singleDetails.age"),list:s(u).age,"has-default-all":"",searchable:"","selected-option":a("age"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[9]||(e[9]=l=>n("age",l[0]))},null,8,["title","list","selected-option"]),i(r,{title:t.$t("singleDetails.score"),list:s(u).imdb_rate,"has-default-all":"",searchable:"","selected-option":a("imdb_rate"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[10]||(e[10]=l=>n("imdb_rate",l[0]))},null,8,["title","list","selected-option"])]),o("div",ye,[o("div",{class:"bg-bg-9/50 flex w-[12.5em] cursor-pointer justify-between gap-2 rounded-xl px-2 py-3 text-base",onClick:e[14]||(e[14]=l=>{s(d)["3D"]=!s(d)["3D"],n("3D",s(d)["3D"].toString())})},[xe,o("div",_e,[i(B,{modelValue:s(d)["3D"],"onUpdate:modelValue":[e[11]||(e[11]=l=>s(d)["3D"]=l),e[12]||(e[12]=l=>n("3D",l))],onClick:e[13]||(e[13]=q(()=>{},["exact","stop"]))},null,8,["modelValue"])])]),o("div",{class:"bg-bg-9/50 flex w-[12.5em] cursor-pointer justify-between gap-2 rounded-xl px-2 py-3 text-base",onClick:e[18]||(e[18]=l=>{s(d).x265=!s(d).x265,n("x265",s(d).x265.toString())})},[he,o("div",we,[i(B,{modelValue:s(d).x265,"onUpdate:modelValue":[e[15]||(e[15]=l=>s(d).x265=l),e[16]||(e[16]=l=>n("x265",l))],onClick:e[17]||(e[17]=q(()=>{},["exact","stop"]))},null,8,["modelValue"])])]),o("div",{class:"bg-bg-9/50 flex w-[12.5em] cursor-pointer justify-between gap-2 rounded-xl px-2 py-3 text-base",onClick:e[22]||(e[22]=l=>{s(d).stream=!s(d).stream,n("stream",s(d).stream.toString())})},[o("p",Ce,y(s(C)("streamOnly")),1),o("div",$e,[i(B,{modelValue:s(d).stream,"onUpdate:modelValue":[e[19]||(e[19]=l=>s(d).stream=l),e[20]||(e[20]=l=>n("stream",l))],onClick:e[21]||(e[21]=q(()=>{},["exact","stop"]))},null,8,["modelValue"])])])]),o("div",De,[i(r,{title:t.$t("singleDetails.network"),list:s(u).channel,"has-default-all":"",searchable:"","selected-option":a("channel"),style:{foreground:"bg-bg-10",dimmed:!0},onOnChange:e[23]||(e[23]=l=>n("channel",l[0]))},null,8,["title","list","selected-option"]),i(M,{dimmed:""}),o("div",ke,[o("fieldset",Se,[o("div",Re,[o("p",Be,y(t.$t("formYear")),1),o("input",{id:"min-year-input",dir:"auto",type:"text",class:"bg-bg-9 placeholder:text-fonts-300 flex w-[4em] rounded-lg py-1 text-center text-xs font-semibold",placeholder:"1890",maxlength:"4",onInput:e[24]||(e[24]=l=>(("useEnforcedNumbers"in t?t.useEnforcedNumbers:s(V)).bind(l.target)(),n("min_year",l.target.value)))},null,32),o("p",Oe,y(t.$t("till")),1),o("input",{id:"max-year-input",dir:"auto",type:"text",class:"bg-bg-9 placeholder:text-fonts-300 flex w-[4em] rounded-lg py-1 text-center text-xs font-semibold",placeholder:new Date().getFullYear().toString(),maxlength:"4",onInput:e[25]||(e[25]=l=>(("useEnforcedNumbers"in t?t.useEnforcedNumbers:s(V)).bind(l.target)(),n("max_year",l.target.value)))},null,40,qe)])])])])],2)])),o("span",{class:O(["group absolute left-1/2 top-full flex -translate-x-1/2 cursor-pointer items-center justify-center",{"pointer-events-none":s(m)}]),onClick:e[26]||(e[26]=l=>p.value=!s(p))},[Ee,o("div",Ve,[i(k,{name:"ph:caret-down-bold",class:O(["fill-bg-11 text-2xl transition-transform will-change-transform group-hover:translate-y-[2px]",{"rotate-180 group-hover:!-translate-y-[2px]":s(p),"disable-block":s(m)}])},null,8,["class"])])],2)])])}}});const Le=te(Ae,[["__scopeId","data-v-929feed2"]]),Ne={class:"flex"},Pe={key:0,class:"flex h-full w-full items-center justify-center"},Ie={class:"text-fonts-700 text-5xl font-bold"},je={key:1,class:"flex h-full w-full items-center justify-center"},Ue={class:"text-fonts-700 text-5xl font-bold"},Ye=A({__name:"advanced",setup(_){const{t:w}=L(),C=N(),$=se(),{infiniteScrolling:c}=le();oe({title:()=>`${w("seo.30nama")} | ${w("seo.advancedSearch")}`});const b=P(),p=I(),m=g({}),u=g(!1),D=g(),a=g({}),n=g(Number(b.query.page||"1"));function d(t){m.value={},a.value=t,p.replace({query:{...b.query,page:void 0}}),n.value=1,h(1)}async function h(t){u.value=!0;const e=`ADVANCED_SEARCH::${Object.entries(a.value).toString()}::${t}`,r=await U(e,()=>F.API.actions.advanced_search(a.value,a.value.sortBy,"ASC",t));if(u.value=!1,!!r){if(r.error)return C(r.msg,"ERROR");m.value[t]=r.result.posts,D.value={pages:r.result.pages,page:r.result.page,total:r.result.total}}}function R(t){c.value&&h(t)}return j(()=>b.query.page,t=>{c.value||!t||(n.value=t?Number(t):1,h(n.value))}),ne(()=>{const{replaceLastRoute:t}=$;t(b.fullPath)}),(t,e)=>{var S,v;const r=Le,k=ie;return f(),x("div",null,[i(r,{onSubmit:d}),o("section",Ne,[!((S=s(m)[s(n)])!=null&&S.length)&&!Object.keys(s(a)).length&&!s(u)?(f(),x("span",Pe,[o("h4",Ie,y(t.$t("searchNow")),1)])):!((v=s(m)[s(n)])!=null&&v.length)&&!s(u)?(f(),x("span",je,[o("h4",Ue,y(s(m)[s(n)]?t.$t("noResult"):t.$t("searchNow")),1)])):(f(),ae(k,{key:2,id:"title-list-result",title:t.$t("searchResults"),aligned:"",icon:"ph:magnifying-glass-fill",style:{background:"bg-bg-12",foreground:"bg-bg-11",shadowBack:"shadow-bg-12",shadowFore:"shadow-bg-11"},"is-loading":s(u),data:s(m),"result-info":s(D),onPageChanged:R},null,8,["title","is-loading","data","result-info"]))])])}}});export{Ye as default};
