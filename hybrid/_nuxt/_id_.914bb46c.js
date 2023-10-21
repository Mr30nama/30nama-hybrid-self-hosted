import{d as W,b as U,c as N,n as $,g as p,h as _,q as r,i as h,j as c,F as M,r as F,B as y,A as Z,z as D,G as Q,H as ee,I as te,S as oe,ae as se,l as ne,a as le,Y as ie,af as ae,U as re,e as ue,v as ce,o as de,p as C,$ as fe,a3 as pe,f as _e,Z as ve,w as V,k as me,y as ge,J as he,D as ye,X as be,_ as xe,R as we}from"./entry.b873eff6.js";import{_ as ke}from"./PlayerMain.vue.472709e3.js";import{_ as $e}from"./FormDropdown.vue.75cde40d.js";import{u as z}from"./useBackground.d678504f.js";const j=b=>(Q("data-v-f49de26d"),b=b(),ee(),b),Le={id:"episode-section",class:"local-numbers my-12 flex min-h-full w-full cursor-default flex-col overflow-visible rounded-xl pb-32",tabindex:"-1"},Se={class:"relative z-10 -mb-20 flex w-full justify-end"},Ee={class:"flex w-full flex-col flex-nowrap gap-12 overflow-y-auto px-2"},Ie={class:"items- relative flex w-full flex-col flex-nowrap overflow-visible p-4"},Ce={class:"relative mx-4 flex items-center"},Ne={class:"text-fonts-50 whitespace-nowrap rounded-xl rounded-b-none p-2 px-4 text-3xl font-semibold"},He={class:"text-fonts-50 relative flex text-3xl font-bold"},Pe=j(()=>r("span",{class:"bg-bg-1 absolute top-1/3 h-3 w-3 rounded-full blur-lg ltr:left-1/2 rtl:right-1/2"},null,-1)),Be={class:"flex flex-row flex-wrap items-center gap-8 px-8 !text-base"},De=["onClick"],je=j(()=>r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0H0V30H8L8 8.34204L8 0ZM8 8.34204L7.99611 8.34485L7.99914 8.34212L7.99914 4C7.99914 6.92963 6.92984 8.96704 6.14398 9.93857C6.02543 10.063 5.91246 10.1875 5.80492 10.312C5.78418 10.3319 5.76392 10.3507 5.74418 10.3684L5.7979 10.3201C2.85283 13.7386 3.99163 17.1976 5.90023 19.4823L5.74423 19.3421C6.49593 20.0176 7.99914 22.2948 7.99914 25.9999L7.99914 21.3683L7.99706 21.3665L8 21.3684L8 8.34204Z"},null,-1)),Re=[je],Ae=j(()=>r("span",{class:"bg-primary-500 shadow-primary-500 absolute top-1/2 h-[60%] w-[2px] -translate-y-1/2 rounded-full opacity-100 shadow-[0_0_8px_1px] ltr:left-1 rtl:right-1"},null,-1)),Oe=W({__name:"PlayerEpisode",props:{selectedEpisode:{},data:{}},emits:["selected"],setup(b,{emit:g}){const E=b,{t:H}=U(),L=N(()=>{const i={};for(const f of E.data)f.season&&(i[f.season.toString()]||(i[f.season.toString()]=[]),i[f.season.toString()].push(f));return i}),I=N(()=>Object.keys(L.value).map(i=>({value:i,title:`${H("season")} ${i}`}))),x=$("ALL");return(i,f)=>{const v=$e;return p(),_("div",Le,[r("div",Se,[h(v,{title:i.$t("season"),list:c(I),searchable:"","has-default-all":"",style:{foreground:"bg-bg-11"},onOnChange:f[0]||(f[0]=m=>x.value=m[0])},null,8,["title","list"])]),r("div",Ee,[(p(!0),_(M,null,F(c(x)!="ALL"?{[c(x)]:c(L)[c(x)]}:c(L),(m,w)=>(p(),_("section",{key:w,"aria-label":"item",class:"flex w-full flex-col gap-8 text-base"},[r("header",Ie,[r("div",Ce,[r("h6",Ne,y(i.$t("season")),1),r("span",He,[Z(y(w)+" ",1),Pe])])]),r("ul",Be,[(p(!0),_(M,null,F(m,n=>(p(),_("li",{key:n.file_id,class:D(["bg-bg-11 hover:bg-bg-10 group relative flex min-w-[12em] !cursor-pointer justify-center rounded-xl py-3 opacity-90 transition-colors hover:opacity-100 ltr:rounded-l-none rtl:rounded-r-none",{"!bg-bg-9 selected-episode !cursor-default !opacity-100":n.file_id===i.selectedEpisode}]),onClick:k=>g("selected",n.file_id)},[(p(),_("svg",{class:D(["fill-bg-11 group-hover:fill-bg-10 absolute top-0 h-full rounded-r-xl transition-colors ltr:right-full ltr:translate-x-[1px] ltr:rotate-180 rtl:left-full rtl:translate-x-[-1px]",{"!fill-bg-9 ":n.file_id===i.selectedEpisode}]),viewBox:"0 0 8 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re,2)),Ae,r("p",{class:D(["opacity-80",{"!opacity-100":n.file_id===i.selectedEpisode}])},y(i.$t("episode"))+" "+y(n.episode),3)],10,De))),128))])]))),128))])])}}});const Te=te(Oe,[["__scopeId","data-v-f49de26d"]]),Me={class:"relative flex h-full w-full items-center justify-center"},Fe={key:0,class:"flex w-full flex-col items-center justify-center gap-4"},Ve={key:1,class:"absolute flex flex-col items-center gap-2 text-2xl"},ze=r("span",{class:"cover-2 absolute inset-0 z-40 bg-bg-12 opacity-0"},null,-1),We={key:2,class:"h-full w-full"},Je=W({__name:"[id]",setup(b){const g=oe(),E=$(!1),H=se(),L=ne(),I=le(),{t:x}=U(),i=ie(),f=he(),v=ae(),{isInactive:m}=re(),w=N(()=>I.params.id),n=$(),k=$(!0),u=$(),S=$();let q;ue({title:()=>{var s,e,t;return`${x("seo.30nama")} | ${(s=n.value)!=null&&s.result.info.title?((e=n.value)==null?void 0:e.result.info.title.local)??((t=n.value)==null?void 0:t.result.info.title.english):""}`}});function G(s){var t;const e=(t=n.value)==null?void 0:t.result;if(e!=null&&e.continue_watching)if(s){let o=e.hls.find(a=>{var d;return a.info.file_id===((d=e.continue_watching)==null?void 0:d.file_id)});o||(o=e.hls[0]);const l=o.info.file_id===e.hls[e.hls.length-1].info.file_id;return{vast2:e.vast2,image:{cover:e.image.cover.jpg,cover_webp:e.image.cover.webp},info:{displayName:o.info.episode_name||"",title:e.info.title.local||e.info.title.english,file_id:o.info.file_id,post_id:e.info.post_id,isSeries:s,time:e.continue_watching.time},options:{isLastEpisode:l,intro_end:o.options.intro_end,intro_start:o.options.intro_start,previously_start:o.options.previously_start,previously_end:o.options.previously_end,end:o.options.end,token:o.options.token},subtitle:{...o.file.subtitle},file:{m3u8:o.file.m3u8}}}else{const o=e.hls[0];return{vast2:e.vast2,image:{cover:e.image.cover.jpg,cover_webp:e.image.cover.webp},info:{displayName:e.info.title.local||e.info.title.english,title:"",file_id:o.info.file_id,post_id:e.info.post_id,isSeries:s,time:e.continue_watching.time},options:{intro_end:o.options.intro_end,intro_start:o.options.intro_start,previously_start:o.options.previously_start,previously_end:o.options.previously_end,end:o.options.end,token:o.options.token},subtitle:{...o.file.subtitle},file:{m3u8:o.file.m3u8}}}}function J(s){var o,l,a;const e=(o=n.value)==null?void 0:o.result;if(!e)return;const t=e.hls[0];return{vast2:e.vast2,image:{cover:((l=e.image.cover)==null?void 0:l.jpg)??"",cover_webp:((a=e.image.cover)==null?void 0:a.webp)??""},info:{displayName:t.info.episode_name||"",title:e.info.title.local||e.info.title.english,file_id:t.info.file_id,post_id:e.info.post_id,isSeries:s,time:0},options:{intro_end:t.options.intro_end,intro_start:t.options.intro_start,previously_start:t.options.previously_start,previously_end:t.options.previously_end,end:t.options.end,token:t.options.token},subtitle:{...t.file.subtitle},file:{m3u8:t.file.m3u8}}}function R(s){var l,a,d;(l=document.getElementById("main-scroller"))==null||l.scrollTo({top:0,behavior:"smooth"});const e=(a=n.value)==null?void 0:a.result;if(!e)return;const t=e.hls.find(B=>B.info.file_id===s);if(!t)return;const o=e.hls[e.hls.length-1].info.file_id===t.info.file_id;u.value={vast2:e.vast2,image:{cover:e.image.cover.jpg,cover_webp:e.image.cover.webp},info:{displayName:t.info.episode_name||"",title:e.info.title.local||e.info.title.english,file_id:t.info.file_id,post_id:e.info.post_id,isSeries:!0,time:0},options:{isLastEpisode:o,intro_end:t.options.intro_end,intro_start:t.options.intro_start,previously_start:t.options.previously_start,previously_end:t.options.previously_end,end:t.options.end,token:t.options.token},subtitle:{...t.file.subtitle},file:{m3u8:t.file.m3u8}},(d=S.value)==null||d.updatePlayerData.bind(S.value.playerInstance)(u.value,{episodeChanged:!0,position:0})}function X(s){var l;if(!u.value||!S)return;const e=u.value.info.file_id,t=u.value.info.post_id,o=(l=u.value)==null?void 0:l.options.token;s.duration&&K(t,e,Math.floor(s.currentTime),Math.floor(s.duration),o)}function A(){var l,a;const s=(l=u.value)==null?void 0:l.info.file_id,e=(a=n.value)==null?void 0:a.result;if(!e)return;const t=e.hls.find(d=>d.info.file_id===s);if(!t)return;const o=e.hls[e.hls.indexOf(t)+1];o&&R(o.info.file_id)}async function Y(){k.value=!0,await C.core.delay(750),k.value=!1}let P=!1,O=0;function K(s,e,t,o,l){P||t===O||!g.user||t%30===0&&t>0&&(O=t,P=!0,C.API.actions.observer(s,e,g.user.user_id,t,o,l),P=!1)}(m==null?void 0:m.value)!==void 0&&ce(m,s=>{var e;s&&((e=S.value)==null||e.pause())}),de(async()=>{var t,o,l,a,d;const s=I.query.free==="true";if(!s&&!g.user){for(f.toggleAuth(!0);f.auth.value;)await C.core.delay(300);if(!g.user){H.ignoreNextRoute(),L.push("/menu/home");return}}if(!s&&!((t=g.user)!=null&&t.user_allowed_to_stream)){k.value=!1;return}if(E.value=!0,n.value=await fe("STREAM::"+w.value,()=>C.API.actions.stream(Number(w.value),s)),k.value=!1,(o=n.value)!=null&&o.error&&i(n.value.msg,"ERROR"),!((l=n.value)!=null&&l.result))return;(a=n.value.result.image.cover)!=null&&a.webp&&z((d=n.value.result.image.cover)==null?void 0:d.webp);const e=n.value.result.hls.length>1;n.value.result.continue_watching?u.value=G(e):u.value=J(e),pe("lastWatchedTitle").value=Number(w.value)}),_e(()=>{var s;z(""),(s=v.setDefaultStatus)==null||s.call(v),clearInterval(q)}),ve(()=>{var s,e,t;u.value&&((s=n.value)!=null&&s.result.info.title.english)&&((t=v.setWatchingStatus)==null||t.call(v,(e=n.value)==null?void 0:e.result.info.title.english))});const T=N(()=>{var s;return(s=n.value)==null?void 0:s.result.hls.map(e=>({file_id:e.info.file_id,season:e.info.season,episode:e.info.episode,episode_number:e.info.episode_number}))});return(s,e)=>{const t=ye,o=be,l=xe,a=we,d=ke,B=Te;return p(),_("div",Me,[c(E)?c(k)||!c(u)?(p(),_("div",Ve,[ze,r("span",null,[h(a,{class:"flex",type:"triangle"})]),r("p",null,y(s.$t("loading")),1)])):(p(),_("div",We,[h(d,{ref_key:"player",ref:S,"player-data":c(u),onOnProgress:X,onReloadPlayer:Y,onPlayNextEpisode:A,onOnVideoEnded:A},null,8,["player-data"]),c(u).info.isSeries&&c(T)?(p(),me(B,{key:0,data:c(T),"selected-episode":Number(c(u).info.file_id),onSelected:R},null,8,["data","selected-episode"])):ge("",!0)])):(p(),_("div",Fe,[h(t,{name:"ph:warning-fill",class:"text-[7em] text-bg-10"}),r("h4",null,y(s.$t("notAllowedToWatchStream")),1),h(l,{to:"/pricing",class:"min-w-[12em]"},{default:V(()=>[h(o,{class:"btn-primary-outline w-full text-sm"},{default:V(()=>[h(t,{name:"ph:shopping-cart-fill"}),Z(" "+y(s.$t("pricing.buyNow")),1)]),_:1})]),_:1})]))])}}});export{Je as default};
