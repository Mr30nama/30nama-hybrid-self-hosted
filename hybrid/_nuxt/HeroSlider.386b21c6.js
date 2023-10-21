import{d as L,m as S,g as a,h as r,q as t,y as d,z as g,j as n,B as l,A as h,i,w as c,F as $,r as C,k as w,_ as N,D as I,X as V,G as j,H as F,I as H,n as x,o as T,p as D,f as E,T as M}from"./entry.b873eff6.js";import{_ as q}from"./TitleFrameUserlist.vue.a3408e63.js";import{_ as z}from"./BaseChip.vue.6aad99b7.js";const Z=u=>(j("data-v-7ec6376f"),u=u(),F(),u),A={key:0,class:"flex w-full items-center justify-center rounded-2xl"},G={class:"img-box absolute flex aspect-video h-full ltr:right-0 rtl:left-0"},P=["src"],R={key:1,class:"bg-primary-500 absolute bottom-8 px-2 py-2 ltr:right-0 rtl:left-0"},U=Z(()=>t("svg",{class:"fill-primary-500 absolute top-0 h-full rounded-r-xl transition-colors ltr:right-full ltr:translate-x-[1px] ltr:rotate-180 rtl:left-full rtl:translate-x-[-1px]",viewBox:"0 0 8 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0H0V30H8L8 8.34204L8 0ZM8 8.34204L7.99611 8.34485L7.99914 8.34212L7.99914 4C7.99914 6.92963 6.92984 8.96704 6.14398 9.93857C6.02543 10.063 5.91246 10.1875 5.80492 10.312C5.78418 10.3319 5.76392 10.3507 5.74418 10.3684L5.7979 10.3201C2.85283 13.7386 3.99163 17.1976 5.90023 19.4823L5.74423 19.3421C6.49593 20.0176 7.99914 22.2948 7.99914 25.9999L7.99914 21.3683L7.99706 21.3665L8 21.3684L8 8.34204Z"})],-1)),W={class:"title relative flex min-h-[38em] w-[32rem] flex-shrink-0 flex-col self-stretch p-8"},X={class:"bg-bg-11/20 flex h-full w-full flex-shrink-0 flex-col relative rounded-2xl backdrop-blur-md xl:bg-transparent xl:backdrop-blur-0"},J={class:"flex h-full flex-col gap-6 p-8"},K={class:"relative flex max-w-[90%] flex-col items-start self-start text-2xl font-bold"},O={class:"text-fonts-200 text-xl font-semibold"},Q={class:"text-fonts-100 flex flex-row flex-wrap gap-5"},Y={key:0,class:"local-numbers"},ee={key:1},te={key:0,class:"flex flex-row flex-wrap gap-2 text-xs"},oe={class:"flex flex-row flex-wrap gap-2"},ae={class:"text-fonts-100 text-sm"},se={class:"flex h-full items-end"},le=L({__name:"BaseHero",props:{data:{}},setup(u){const{theme:f}=S();return(e,b)=>{var s;const p=N,y=q,k=z,_=I,m=V;return e.data?(a(),r("article",A,[t("figure",{class:g(["bg-bg-13 relative flex w-full flex-row flex-nowrap gap-12 overflow-hidden rounded-3xl",{"!bg-bg-10":n(f)==="light"}])},[t("div",G,[e.data.image.cover.webp?(a(),r("img",{key:0,src:e.data.image.cover.webp,class:"hero-img absolute aspect-video h-full object-cover object-center",alt:"hero section banner"},null,8,P)):d("",!0),t("span",{class:g(["from-bg-13 gradient absolute right-[-1px] h-full w-[45em] bg-gradient-to-l",{"!from-bg-10":n(f)==="light"}])},null,2),t("span",{class:g(["from-bg-13 via-bg-13/0 absolute bottom-0 h-full w-full bg-gradient-to-t",{"!from-bg-10 !via-bg-10/0":n(f)==="light"}])},null,2),t("span",{class:g(["from-bg-13 via-bg-13/0 absolute bottom-0 h-full w-full bg-gradient-to-r",{"!from-bg-10 !via-bg-10/0":n(f)==="light"}])},null,2),e.data.options.free_download||e.data.options.free_stream?(a(),r("span",R,[U,t("p",null,l(e.data.options.free_stream?e.$t("watchFree"):"")+" "+l(e.data.options.free_stream&&e.data.options.free_download?" / ":"")+" "+l(e.data.options.free_download?e.$t("downloadFree"):""),1)])):d("",!0)]),t("figcaption",W,[t("div",X,[t("div",J,[t("h5",K,l(e.data.title.english),1),t("p",O,l(e.data.title.local),1),t("ul",Q,[e.data.info.time.default?(a(),r("li",Y,[h(l(e.data.info.time.default)+" ",1),t("span",null,l(e.$t("singleDetails.minutes")),1)])):d("",!0),e.data.info.age?(a(),r("li",ee,[i(p,{class:"hover:text-primary-500 transition-colors",to:`#?age=${e.data.info.age}`},{default:c(()=>[h(l(e.data.info.age),1)]),_:1},8,["to"])])):d("",!0)]),e.data.score?(a(),r("ul",te,[(a(!0),r($,null,C(e.data.score,(o,v)=>(a(),w(y,{key:v,type:v,background:"bg-bg-9",data:o},null,8,["type","data"]))),128))])):d("",!0),t("ul",oe,[(a(!0),r($,null,C(e.data.genre,o=>(a(),w(k,{key:o.slug,background:"bg-bg-9",to:`/genre/${o.slug}`},{default:c(()=>[h(l(o.name),1)]),_:2},1032,["to"]))),128))]),t("div",ae,l(e.data.plot.local),1),t("div",se,[e.data.options.stream?(a(),w(p,{key:0,to:{path:`/play/${e.data.id}`,query:{free:(s=e.data)!=null&&s.options.free_stream?"true":void 0}}},{default:c(()=>[i(m,{class:"btn-primary"},{default:c(()=>[i(_,{name:"ph:play-fill"}),h(" "+l(e.$t("watchNow")),1)]),_:1})]),_:1},8,["to"])):d("",!0),i(p,{to:{path:"/single/"+e.data.id}},{default:c(()=>[i(m,{class:"btn-side"},{default:c(()=>[h(l(e.$t("details")),1)]),_:1})]),_:1},8,["to"])])])])])],2)])):d("",!0)}}});const ne=H(le,[["__scopeId","data-v-7ec6376f"]]),re={class:"flex flex-row items-center gap-2 absolute rtl:left-8 ltr:right-8 top-8 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"},ie=L({__name:"HeroSlider",props:{posts:{}},setup(u){const f=u,e=x(0),b=x(!0),p=x();function y(){const s=f.posts.length-1;e.value=e.value===s?0:e.value+1}function k(){const s=p.value,o=s==null?void 0:s.getBoundingClientRect();return o?!(o.bottom<0||o.right<0||o.left>window.innerWidth||o.top>window.innerHeight):!1}const _=x(0);function m(){_.value=0}return T(async()=>{for(;b.value&&(await D.core.delay(100),!!b.value);)_.value+=100,_.value>=8e3&&(_.value=0,k()&&y())}),E(()=>b.value=!1),(s,o)=>{const v=ne,B=I;return a(),r("div",{ref_key:"heroHeaderEl",ref:p,class:"relative group"},[i(M,{name:"slide-content",mode:"out-in",appear:""},{default:c(()=>[(a(),w(v,{key:n(e),data:s.posts[n(e)]},null,8,["data"]))]),_:1}),t("div",re,[t("div",{class:g(["bg-bg-12 hover:bg-bg-11 flex shrink-0 cursor-pointer rounded-xl p-2 text-2xl transition-colors ltr:rotate-180",{"disable-block":n(e)===0}]),onClick:o[0]||(o[0]=()=>{n(e)!==0&&(e.value-=1,m())})},[i(B,{name:"ph:caret-right"})],2),t("div",{class:g(["bg-bg-12 hover:bg-bg-11 flex shrink-0 cursor-pointer rounded-xl p-2 text-2xl transition-colors ltr:rotate-180",{"disable-block":n(e)===s.posts.length-1}]),onClick:o[1]||(o[1]=()=>{n(e)!==s.posts.length-1&&(e.value+=1,m())})},[i(B,{name:"ph:caret-left"})],2)])],512)}}});const fe=H(ie,[["__scopeId","data-v-ba31d8da"]]);export{fe as _};
