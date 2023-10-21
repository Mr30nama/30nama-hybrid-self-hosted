import{d as h,g as o,h as s,q as t,B as a,i as n,z as l,y as f,A as p,w as m,aa as c,D as x,_ as g}from"./entry.8b93e9fc.js";const w={class:"flex min-w-[20rem] flex-col items-start rounded-3xl"},_={class:"flex min-h-[4.125em] w-full flex-row flex-nowrap items-end justify-between"},b={key:0,class:"te flex flex-row items-center gap-4 pb-4 text-3xl font-semibold"},v={class:"text-fonts-50"},y={class:"text-fonts-50 relative flex"},B=t("span",{class:"bg-bg-1 absolute top-1/3 h-4 w-4 rounded-full blur-lg ltr:left-1/2 rtl:right-1/2"},null,-1),k={key:1,class:"flex flex-row flex-nowrap text-xl ltr:rounded-tr-2xl rtl:rounded-tl-2xl"},C={key:0,class:"relative flex flex-col items-start bg-transparent px-4 py-4 font-bold"},N={key:0,class:"flex flex-row flex-nowrap items-center gap-4 self-stretch text-base"},T=t("span",{class:"bg-fonts-500 h-[60%] w-[2px] rounded-full"},null,-1),D=h({__name:"ContentPop-v2",props:{title:{},icon:{},foreground:{},shadowBackground:{},wideBackground:{type:Boolean},transparent:{type:Boolean},to:{},secondaryTitleType:{type:Boolean}},setup(V){return(e,z)=>{var d;const r=x,u=g;return o(),s("section",w,[t("header",_,[e.secondaryTitleType?(o(),s("div",b,[t("h3",v,a(e.title),1),t("span",y,[n(r,{name:e.icon},null,8,["name"]),B])])):(o(),s("div",k,[e.icon?(o(),s("h5",C,[t("span",{class:l([{hidden:e.transparent},"absolute bottom-0 h-[1em] w-[1em] overflow-hidden ltr:right-0 rtl:left-0"])},[t("span",{class:l(["absolute bottom-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:right-0 rtl:left-0",e.shadowBackground])},null,2)],2),n(r,{name:e.icon},null,8,["name"])])):f("",!0),t("div",{class:l(["relative flex w-full items-center gap-4 rounded-t-2xl px-8 py-2",e.foreground])},[t("span",{class:l([{hidden:e.transparent},"absolute bottom-0 h-[1em] w-[1em] overflow-hidden ltr:left-full rtl:right-full"])},[t("span",{class:l(["absolute bottom-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:left-0 rtl:right-0",e.shadowBackground])},null,2)],2),p(" "+a(e.title)+" ",1),e.to?(o(),s("div",N,[T,n(u,{to:(d=e.to)==null?void 0:d.href,class:"text-fonts-300 hover:text-fonts-50 group flex flex-row flex-nowrap items-center gap-2 transition-colors"},{default:m(()=>{var i;return[p(a((i=e.to)==null?void 0:i.title)+" ",1),n(r,{name:"ph:caret-left",class:"transition-all ltr:!hidden ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1"}),n(r,{name:"ph:caret-right",class:"transition-all ltr:group-hover:translate-x-1 rtl:!hidden rtl:group-hover:-translate-x-1"})]}),_:1},8,["to"])])):f("",!0)],2)])),c(e.$slots,"header")]),t("div",{class:l(["relative flex w-full flex-1 rounded-2xl",e.foreground])},[t("span",{class:l(["absolute top-0 -z-10 h-full w-[calc(100%_-_15rem)] rounded-2xl ltr:left-0 rtl:right-0",e.foreground])},null,2),c(e.$slots,"content")],2)])}}});export{D as _};
