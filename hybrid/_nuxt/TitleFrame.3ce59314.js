import{_ as I,a as S}from"./TitleFrameUserlist.vue.ea70c7b3.js";import{d as T,n as z,am as M,c as j,aB as E,g as t,h as o,q as s,z as m,at as c,i as f,j as i,x as N,B as d,k as b,y as a,A as V,w as L,T as q,D,G as U,H as A,I as G}from"./entry.8b93e9fc.js";const B=p=>(U("data-v-3b2f636f"),p=p(),A(),p),H={key:0,class:"flex w-full flex-col gap-2"},O=B(()=>s("div",{key:"sekleton-2",class:"flex w-full flex-col gap-2"},[s("div",{class:"flex",dir:"ltr"},[s("span",{class:"__skeleton-2 w-[100px] self-end rounded-full text-[1.4em] leading-5"}," ")]),s("div",{class:"flex flex-row flex-nowrap justify-between"},[s("span",{class:"__skeleton-2 w-[4.5em] rounded-md text-[1em]"}),s("span",{class:"__skeleton-2 rounded-md px-3 py-1 text-[1em] font-semibold"},[s("div",{class:"invisible opacity-0"},"0000")])])],-1)),J=["onMousedown"],K={class:"local-numbers number absolute -left-4 bottom-16 z-30 text-[14em]"},P={class:"absolute left-2 top-2 flex flex-col gap-2"},Q={class:"absolute bottom-2 right-2 flex flex-col gap-1"},R={key:0,class:"text-secondary-500 bg-bg-13/50 rounded-full p-2 text-[1.6em] backdrop-blur-sm"},W=B(()=>s("span",{class:"bg-primary-500 absolute inset-0 flex h-full w-full scale-50 rounded-full opacity-0 blur-[12px] transition-opacity group-hover/icon:opacity-100"},null,-1)),X={class:"absolute bottom-[0.8rem] left-0 flex flex-col gap-2"},Y={key:0,class:"bg-primary-500 rounded-r-lg p-1 px-2 text-xs"},Z={key:1,class:"bg-primary-500 rounded-r-lg p-1 px-2 text-xs"},ee={dir:"ltr",class:"line-clamp-1 text-left text-[1.4em] leading-5"},se={class:"flex w-full",dir:"ltr"},te={class:"flex min-h-[1.5rem] items-center"},ae={key:0,class:"bg-bg-10/80 text-fonts-200 flex rounded-md px-3 py-1 text-[1em] font-semibold"},oe={key:0,class:"flex flex-1 items-center justify-end gap-1"},le={dir:"auto"},ne={key:0,class:"text-primary-500 text-[1.4em] font-semibold"},re=T({__name:"TitleFrame",props:{size:{},isLoading:{type:Boolean},data:{},number:{}},setup(p){const C=p,v=z(),n=z(!1);M(v,()=>n.value=!1);const y=j(()=>E.size.poster(C.size));return(e,l)=>{var k,_,w,x;const g=I,h=D,F=S;return t(),o("section",{class:m(["group relative mx-4 mt-8 flex flex-col flex-nowrap items-center gap-2",[`w-poster-${e.size}`,{"text-xs":e.size==="medium"}]])},[e.isLoading?(t(),o("section",H,[s("span",{key:"skeleton-1",class:m([[`w-poster-${e.size}`,`h-poster-${e.size}`],"__skeleton rounded-xl"])},null,2),O])):e.data?(t(),o("section",{key:1,ref_key:"titleFrameMainEl",ref:v,class:"flex w-full cursor-pointer flex-col gap-2 relative",onContextmenu:l[4]||(l[4]=c(u=>n.value=!0,["prevent"]))},[s("div",{key:"poster",class:m([[`w-poster-${e.size}`,`h-poster-${e.size}`,{"group-hover:-translate-y-1":!i(n)}],"relative rounded-xl transition-transform duration-300 will-change-transform"]),onClick:l[2]||(l[2]=u=>{var r;return e.$router.push({path:"/single/"+((r=e.data)==null?void 0:r.id)})})},[s("span",{class:m(["absolute inset-0 overflow-hidden rounded-xl",[`w-poster-${e.size}`,`h-poster-${e.size}`]]),draggable:"false",onMousedown:c(u=>"",["prevent"])},[f(i(N),{ref:"img","style-suffix":"30nama-title-frame",src:e.data.image.poster.webp[e.size],punch:1,hash:e.data.image.poster.preview,"res-x":4,"remove-canvas":"","res-y":6,duration:1e3,"height-size":i(y).height,"width-size":i(y).width},null,8,["src","hash","height-size","width-size"])],42,J),s("h4",K,d(e.number),1),s("ul",P,[(k=e.data.score)!=null&&k.myanimelist?(t(),b(g,{key:0,type:"myanimelist",data:e.data.score.myanimelist,"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):(_=e.data.score)!=null&&_.imdb&&((w=e.data.score)!=null&&w.imdb.votes)?(t(),b(g,{key:1,type:"imdb",data:e.data.score.imdb,"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):a("",!0),(x=e.data.score)!=null&&x["30nama"]?(t(),b(g,{key:2,type:"30nama",data:e.data.score["30nama"],"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):a("",!0)]),i(n)?a("",!0):(t(),o("div",{key:0,class:"absolute z-10 top-2 right-2 bg-bg-13/50 backdrop-blur-sm text-base opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:scale-90 will-change-transform p-2 rounded-full isolate",onClick:l[0]||(l[0]=c(u=>n.value=!i(n),["stop","prevent"]))},[f(h,{name:"ph:dots-three-outline-vertical-fill",class:"relative"})])),s("div",Q,[e.data.options.exclusive_subtitle?(t(),o("span",R,[f(h,{name:"ph:closed-captioning-fill"})])):a("",!0),e.data.options.stream?(t(),o("span",{key:1,class:"group/icon text-primary-500 bg-bg-13/50 hover:bg-bg-13/70 relative rounded-full p-2 text-[1.6em] backdrop-blur-sm transition-all",onClick:l[1]||(l[1]=c(u=>{var r,$;return e.$router.push({path:`/play/${(r=e.data)==null?void 0:r.id}`,query:{free:($=e.data)!=null&&$.options.free_stream?"true":void 0}})},["stop","prevent"]))},[W,f(h,{name:"ph:play-fill",class:"relative"})])):a("",!0)]),s("div",X,[e.data.options.free_stream?(t(),o("span",Y,d(e.$t("watchFree")),1)):a("",!0),e.data.options.free_download?(t(),o("span",Z,d(e.$t("downloadFree")),1)):a("",!0)])],2),s("footer",{key:"footer",class:m(["flex w-full flex-col gap-2 transition-all duration-500 will-change-transform",{"group-hover:-translate-y-1":!i(n)}]),onClick:l[3]||(l[3]=u=>{var r;return e.$router.push({path:"/single/"+((r=e.data)==null?void 0:r.id)})})},[s("h6",ee,d(e.data.title.english.split(" ").slice(0,-1).join(" ")),1),s("div",se,[s("div",te,[e.data.info.year?(t(),o("span",ae,d(e.data.info.year),1)):a("",!0)]),e.data.options.is_series?(t(),o("span",oe,[s("div",le,[V(d(e.$t("season"))+" ",1),e.data.info.seasons?(t(),o("span",ne,d(e.data.info.seasons),1)):a("",!0)])])):a("",!0)])],2),f(q,{name:"user-list",appear:""},{default:L(()=>[i(n)?(t(),b(F,{key:0,ref:"userListEl","title-id":e.data.id,class:"top-0 duration-500"},null,8,["title-id"])):a("",!0)]),_:1})],544)):a("",!0)],2)}}});const pe=G(re,[["__scopeId","data-v-3b2f636f"]]);export{pe as _};
