import{d as L,g as e,h as a,k as s,i as u,j as l,W as Q,t as o,v as N,ap as J,aS as T,l as c,z as n,F as g,A as y,N as p,m as d,P as U,s as q,b as K,a as Y,Q as Z,ac as ee,c as E,r as V,e as te,o as le,ae,L as se,f as oe,O as ie}from"./entry.YzqeuuI7.js";import{a as ne,_ as re}from"./TitleFrameUserlist.vue.OaQHULFw.js";import{_ as de}from"./BaseChip.vue.vLwYFfLU.js";import{u as M}from"./useBackground.Vsoe6y1X.js";const ce={"aria-label":"character-X",class:"group"},ue={class:"relative flex flex-col items-center justify-center gap-4 rounded-3xl p-4"},fe={key:0,class:"bg-bg-10 __skeleton relative aspect-[2/3] w-[5em] rounded-2xl transition-transform duration-500 will-change-transform"},pe={key:1,class:"bg-bg-10 relative aspect-[2/3] w-[5em] overflow-hidden rounded-2xl transition-transform duration-500 will-change-transform group-hover:scale-105"},_e={key:2,class:"bg-bg-10 relative flex aspect-[2/3] w-[5em] items-center justify-center overflow-hidden rounded-2xl transition-transform duration-500 will-change-transform group-hover:scale-105"},me={key:3,class:"relative max-w-[9em] items-center rounded-2xl p-2 transition-transform duration-500 will-change-transform",dir:"ltr"},he=s("p",{class:"line-clamp-1 w-full text-center text-sm blur-sm"},"this is the name and the others",-1),ge=s("p",{class:"text-fonts-200 line-clamp-1 w-full text-center text-sm blur-sm"},"this is the role",-1),ye=[he,ge],we={key:4,class:"relative max-w-[9em] items-center rounded-2xl p-2 transition-transform duration-500 will-change-transform group-hover:scale-105",dir:"ltr"},be={class:"text line-clamp-1 w-full text-center text-sm"},ve={class:"text-fonts-200 line-clamp-1 w-full text-center text-sm"},ke=L({__name:"BaseCharacterFrame",props:{data:{},isLoading:{type:Boolean}},setup(S){return(m,t)=>{const B=N;return e(),a("article",ce,[s("figure",ue,[m.isLoading?(e(),a("div",fe)):m.data.image?(e(),a("div",pe,[u(l(Q),{src:m.data.image.poster.webp.medium,punch:1,hash:m.data.image.poster.preview,class:"h-full","res-x":4,"res-y":6,"remove-canvas":"",duration:1e3,"height-size":120,"width-size":80},null,8,["src","hash"])])):(e(),a("div",_e,[u(B,{name:"ph:user",class:"text-fonts-300 text-5xl"})])),m.isLoading?(e(),a("figcaption",me,ye)):(e(),a("figcaption",we,[s("p",be,o(m.data.name),1),s("p",ve,o(m.data.as),1)]))])])}}}),xe={class:"relative flex flex-col items-start rounded-3xl"},$e={key:0,class:"bg-bg-11 __skeleton-2 group relative flex h-24 w-44 flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl rounded-tl-none"},De={key:1,class:"bg-bg-11 group relative flex h-24 w-44 flex-col items-center gap-1 overflow-hidden rounded-2xl rounded-tl-none"},Be=s("span",{class:"bg-primary-500 group-hover:bg-primary-500 absolute left-2 top-2 h-[0.38rem] w-[0.38rem] rounded-full"},null,-1),je=s("span",{class:"bg-primary-500 absolute left-2 top-2 h-6 w-6 scale-0 rounded-full blur-2xl transition-transform group-hover:scale-100"},null,-1),Le={class:"text-fonts-200 relative mt-4 whitespace-nowrap text-base capitalize transition-transform duration-500 will-change-transform"},Se={class:"relative flex flex-row flex-wrap justify-center gap-1 overflow-auto px-1 py-1 text-sm"},A=L({__name:"SinglePageDetailsBar",props:{title:{},icon:{},isLoading:{type:Boolean}},setup(S){return(m,t)=>{const B=N;return e(),a("section",xe,[m.isLoading?(e(),a("div",$e)):(e(),a("div",De,[u(B,{name:m.icon,class:"text-bg-9/30 group-hover:text-bg-9/50 absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl transition-all will-change-transform group-hover:scale-110"},null,8,["name"]),Be,je,s("h6",Le,o(m.title),1),s("div",Se,[J(m.$slots,"default")])]))])}}}),Ne={class:"relative flex flex-row flex-wrap justify-center gap-4"},Ie={class:"local-numbers"},ze={dir:"rtl",class:"local-numbers"},Ce={key:0},Pe={class:"local-numbers"},Fe={class:"local-numbers"},v="#",Re=L({__name:"SinglePageDetails",props:{data:{},isLoading:{type:Boolean}},setup(S){const{localizedDate:m}=T();return(t,B)=>{var x,b;const w=U,_=A;return e(),a("section",Ne,[t.data.country?(e(),c(_,{key:0,title:t.$t("singleDetails.countries"),icon:"ph:globe-fill"},{default:n(()=>[(e(!0),a(g,null,y(t.data.country,r=>(e(),c(w,{key:r.code,class:"links",to:`${v}?country=${r.code}`},{default:n(()=>[p(o(r.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):d("",!0),t.data.language.primary?(e(),c(_,{key:1,title:t.$t("singleDetails.primaryLanguage"),icon:"ph:translate-fill"},{default:n(()=>[u(w,{class:"links",to:`${v}?language=${t.data.language.primary.code}`},{default:n(()=>[p(o(t.data.language.primary.name),1)]),_:1},8,["to"])]),_:1},8,["title"])):d("",!0),t.data.language.others?(e(),c(_,{key:2,title:t.$t("singleDetails.otherLanguages"),icon:"ph:flag-fill"},{default:n(()=>[(e(!0),a(g,null,y(t.data.language.others,r=>(e(),c(w,{key:r.code,class:"links",to:`${v}?language=${r.code}`},{default:n(()=>[p(o(r.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):d("",!0),t.data.info.time.default?(e(),c(_,{key:3,title:t.$t("singleDetails.time"),icon:"ph:clock-fill"},{default:n(()=>[s("p",Ie,[p(o(t.data.info.time.default)+" ",1),s("span",null,o(t.$t("singleDetails.minutes")),1)])]),_:1},8,["title"])):d("",!0),t.data.air.air_status?(e(),c(_,{key:4,title:t.$t("singleDetails.airstatus"),icon:"ph:broadcast-fill"},{default:n(()=>[s("p",null,o(t.data.air.air_status)+" "+o(t.data.air.air_data),1)]),_:1},8,["title"])):d("",!0),t.data.air.next_episode_caption||t.data.air.next_episode_date?(e(),c(_,{key:5,title:t.data.air.next_episode_caption,icon:"ph:megaphone-fill"},{default:n(()=>[s("p",ze,o(l(m)(t.data.air.next_episode_date)),1)]),_:1},8,["title"])):d("",!0),t.data.info.age?(e(),c(_,{key:6,dir:"ltr",title:t.$t("singleDetails.age"),icon:"ph:person-fill"},{default:n(()=>[u(w,{class:"links",to:`${v}?age=${t.data.info.age}`},{default:n(()=>[p(o(t.data.info.age),1)]),_:1},8,["to"])]),_:1},8,["title"])):d("",!0),t.data.info.year||t.data.info.year_end?(e(),c(_,{key:7,dir:"ltr",title:t.$t("singleDetails.year"),icon:"ph:calendar-blank-fill"},{default:n(()=>[u(w,{class:"links",to:`${v}?min_year=${t.data.info.year}&max_year=${t.data.info.year}`},{default:n(()=>[p(o(t.data.info.year),1)]),_:1},8,["to"]),t.data.info.year_end?(e(),a("span",Ce,"-")):d("",!0),u(w,{class:"links",to:`${v}?min_year=${t.data.info.year_end}&max_year=${t.data.info.year_end}`},{default:n(()=>[p(o(t.data.info.year_end),1)]),_:1},8,["to"])]),_:1},8,["title"])):d("",!0),t.data.network?(e(),c(_,{key:8,dir:"ltr",title:t.$t("singleDetails.network"),icon:"ph:television-simple-fill"},{default:n(()=>[(e(!0),a(g,null,y(t.data.network,r=>(e(),c(w,{key:r,class:"links",to:`${v}?channel=${r}`},{default:n(()=>[p(o(r),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):d("",!0),t.data.crew.director?(e(),c(_,{key:9,dir:"ltr",title:t.$t("singleDetails.director"),icon:"ph:video-camera-fill"},{default:n(()=>[(e(!0),a(g,null,y(t.data.crew.director,r=>(e(),c(w,{key:r.imdb,class:"links",to:`${v}?director=${r.imdb}`},{default:n(()=>[p(o(r.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):d("",!0),t.data.crew.creator?(e(),c(_,{key:10,dir:"ltr",title:t.$t("singleDetails.creator"),icon:"ph:video-camera-fill"},{default:n(()=>[(e(!0),a(g,null,y(t.data.crew.creator,r=>(e(),c(w,{key:r.imdb,class:"links",to:`${v}?director=${r.imdb}`},{default:n(()=>[p(o(r.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):d("",!0),t.data.crew.writer?(e(),c(_,{key:11,dir:"ltr",title:t.$t("singleDetails.writer"),icon:"ph:pencil-line-fill"},{default:n(()=>[(e(!0),a(g,null,y(t.data.crew.writer,r=>(e(),c(w,{key:r.imdb,class:"links",to:`${v}?writer=${r.imdb}`},{default:n(()=>[p(o(r.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):d("",!0),t.data.info.budget?(e(),c(_,{key:12,title:t.$t("singleDetails.budget"),icon:"ph:currency-dollar-simple-fill"},{default:n(()=>[s("p",null,o(t.data.info.budget),1)]),_:1},8,["title"])):d("",!0),(b=(x=t.data.score)==null?void 0:x.imdb)!=null&&b.top_250?(e(),c(_,{key:13,title:t.$t("singleDetails.IMDb250"),icon:"ph:list-numbers-fill"},{default:n(()=>{var r;return[s("p",null,o((r=t.data.score.imdb)==null?void 0:r.top_250),1)]}),_:1},8,["title"])):d("",!0),t.data.list.watchlist?(e(),c(_,{key:14,dir:"ltr",title:t.$t("singleDetails.totalWatchList"),icon:"ph:eye-fill"},{default:n(()=>[s("p",Pe,o(t.data.list.watchlist),1)]),_:1},8,["title"])):d("",!0),t.data.list.favorite?(e(),c(_,{key:15,title:t.$t("singleDetails.totalFavoriteList"),icon:"ph:heart-fill"},{default:n(()=>[s("p",Fe,o(t.data.list.favorite),1)]),_:1},8,["title"])):d("",!0)])}}}),Ee=q(Re,[["__scopeId","data-v-6548d4b8"]]),Ve={"aria-label":"single page X",class:"flex justify-center"},Me={class:"top flex aspect-video w-full max-w-[80em] flex-col justify-center gap-24 px-12"},Te={key:0,class:"relative flex aspect-video w-full max-w-[80em] rounded-2xl bg-bg-11"},Ue={class:"flex h-full w-[32em] rounded-xl p-8"},qe={class:"__skeleton flex h-full w-[32em] flex-row items-end justify-center gap-4 rounded-xl p-8"},Ae={key:1,class:"cover relative h-full"},Oe={key:0,class:"cover-child absolute h-full w-full"},We=["src"],Xe=["src"],Ge={key:1,class:"absolute h-full w-full"},He={class:"absolute h-full w-full overflow-hidden rounded-2xl"},Qe=["src"],Je={class:"flex h-full w-full items-center justify-center"},Ke=["src"],Ye={"aria-label":"article",class:"h-full w-[32em] p-8"},Ze={class:"flex h-full w-full flex-col items-center justify-center rounded-xl bg-bg-13/50 backdrop-blur-[16px] relative"},et={class:"flex h-full flex-col items-center justify-center gap-6 p-8"},tt={class:"line-clamp-3 shrink-0 break-all text-xl font-semibold text-fonts-50",dir:"ltr"},lt={key:0,class:"relative line-clamp-2 flex max-w-[90%] shrink-0 flex-col break-all text-2xl font-bold"},at={class:"flex flex-row flex-wrap gap-5 text-fonts-100"},st={key:0},ot={key:1},it={key:2,class:"local-numbers"},nt={key:3},rt={class:"flex flex-row flex-wrap gap-2 text-xs"},dt={key:1,class:"flex flex-row flex-wrap gap-2"},ct={class:"relative w-full"},ut={class:"line-clamp-[5] flex w-full shrink-0 text-center text-sm text-fonts-100"},ft={key:2,class:"flex h-full items-end justify-end gap-4"},pt={key:3,class:"flex h-full items-end justify-end gap-4"},_t={class:"flex text-xl"},mt={key:2,class:"local-numbers flex flex-col gap-2"},ht={key:3,class:"flex h-[9em] w-full shrink-0 flex-col gap-2 overflow-y-auto px-2"},gt={key:0,class:"flex h-full w-full flex-col gap-2"},yt={class:"inline-block text-fonts-300 ltr:float-right rtl:float-left"},wt={class:"flex flex-row flex-wrap gap-2"},bt={class:"font-bold text-fonts-200"},vt={class:"flex rounded-2xl p-4"},kt={key:0,class:"flex w-full flex-row flex-wrap justify-around gap-4"},xt={key:1,class:"flex w-full flex-row flex-wrap justify-around gap-4"},$t={class:"flex flex-wrap rounded-2xl p-4"},Dt={key:0,class:"flex flex-wrap justify-center gap-8"},Bt={key:1,class:"flex flex-wrap items-center justify-center gap-8"},jt=L({__name:"info",setup(S){const{t:m}=K(),{localizedDate:t}=T(),B=Y(),w=Z(),_=ee(),x=E(()=>B.params.id);typeof x.value!="string"&&w.replace("/");const b=V(),r=V(!0),i=E(()=>{var h;return(h=b.value)==null?void 0:h.result});return te({title:()=>{var h,j;return`${m("seo.30nama")} | ${(h=b.value)!=null&&h.result.title.english?(j=b.value)==null?void 0:j.result.title.english:""}`}}),le(async()=>{var h,j,$,D,k;typeof x.value=="string"&&(b.value=await ae("SINGLE::"+x.value,()=>se.API.actions.single(Number(x.value))),r.value=!1,(h=b.value)!=null&&h.error&&_(b.value.msg,"ERROR"),(k=(D=($=(j=b.value)==null?void 0:j.result)==null?void 0:$.image)==null?void 0:D.cover)!=null&&k.webp&&M(b.value.result.image.cover.webp))}),oe(()=>M("")),(h,j)=>{var z,C,P,F;const $=N,D=ie,k=U,O=re,W=de,X=ne,I=ke,G=A,H=Ee;return e(),a("section",Ve,[s("div",Me,[l(r)?(e(),a("div",Te,[s("span",Ue,[s("div",qe,[u(D,{class:"btn-primary-outline skeleton"},{default:n(()=>[u($,{name:"ph:download-simple-fill"}),p(" "+o(h.$t("download")),1)]),_:1}),u(D,{class:"btn-primary skeleton"},{default:n(()=>[u($,{name:"ph:play-fill"}),p(" "+o(h.$t("watchNow")),1)]),_:1})])])])):l(i)?(e(),a("div",Ae,[l(i).image.cover?(e(),a("div",Oe,[s("img",{draggable:"false",src:l(i).image.cover.webp,class:"absolute inset-0 h-full object-cover blur-md",alt:""},null,8,We),s("img",{draggable:"false",src:l(i).image.cover.webp,class:"absolute inset-0 h-full rounded-2xl object-cover",alt:""},null,8,Xe)])):(e(),a("div",Ge,[s("div",He,[s("img",{draggable:"false",src:(z=l(i))==null?void 0:z.image.poster.webp.big,class:"absolute h-full w-full rounded-2xl blur-xl invert",alt:""},null,8,Qe)]),s("div",Je,[s("img",{draggable:"false",src:(C=l(i))==null?void 0:C.image.poster.webp.large,class:"absolute rounded-2xl ltr:right-72 rtl:left-72",alt:""},null,8,Ke)])])),s("section",Ye,[s("div",Ze,[s("div",et,[s("p",tt,o(l(i).title.english),1),l(i).title.local?(e(),a("p",lt,o(l(i).title.local),1)):d("",!0),s("ul",at,[l(i).crew.director?(e(),a("li",st,[u(k,{class:"transition-colors hover:text-primary-500",to:`#?director=${l(i).crew.director[0].imdb}`},{default:n(()=>[p(o(l(i).crew.director[0].name),1)]),_:1},8,["to"])])):d("",!0),l(i).crew.creator?(e(),a("li",ot,[u(k,{class:"transition-colors hover:text-primary-500",to:`#?director=${l(i).crew.creator[0].imdb}`},{default:n(()=>[p(o(l(i).crew.creator[0].name),1)]),_:1},8,["to"])])):d("",!0),l(i).info.time.default?(e(),a("li",it,[p(o(l(i).info.time.default)+" ",1),s("span",null,o(h.$t("singleDetails.minutes")),1)])):d("",!0),l(i).info.age?(e(),a("li",nt,[u(k,{class:"transition-colors hover:text-primary-500",to:`#?age=${l(i).info.age}`},{default:n(()=>[p(o(l(i).info.age),1)]),_:1},8,["to"])])):d("",!0)]),s("ul",rt,[(e(!0),a(g,null,y(l(i).score,(f,R)=>(e(),c(O,{key:R,type:R,background:"bg-bg-9",data:f},null,8,["type","data"]))),128))]),l(i).genre?(e(),a("ul",dt,[(e(!0),a(g,null,y(l(i).genre,f=>(e(),c(W,{key:f.slug,background:"bg-bg-9",to:`/genre/${f.slug}`},{default:n(()=>[p(o(f.name),1)]),_:2},1032,["to"]))),128))])):d("",!0),s("div",ct,[u(X,{ref:"userListEl",single:"",class:"relative flex flex-row h-auto py-2 !bg-transparent !backdrop-blur-0","title-id":l(i).id,"list-class":"flex !flex-row items-center","list-class-li":"rounded-xl"},null,8,["title-id"])]),s("div",ut,o(l(i).plot.local),1),l(i).options.coming_soon?(e(),a("div",pt,[s("h5",_t,o(h.$t("commingSoon")),1)])):(e(),a("div",ft,[u(k,{to:{path:`/single/${l(i).id}/download`,query:{free:l(i).options.free_download?"true":void 0}}},{default:n(()=>[u(D,{class:"btn-primary-outline"},{default:n(()=>[u($,{name:"ph:download-simple-fill"}),p(" "+o(h.$t("download")),1)]),_:1})]),_:1},8,["to"]),u(k,{to:{path:`/play/${l(i).id}`,query:{free:l(i).options.free_stream?"true":void 0}}},{default:n(()=>[l(i).options.stream?(e(),c(D,{key:0,class:"btn-primary"},{default:n(()=>[u($,{name:"ph:play-fill"}),p(" "+o(h.$t("watchNow")),1)]),_:1})):d("",!0)]),_:1},8,["to"])]))])])])])):d("",!0),(P=l(i))!=null&&P.note.main?(e(),a("div",mt,[(e(!0),a(g,null,y(l(i).note.main.split(`
`),f=>(e(),a("p",{key:f,class:"rounded-xl bg-bg-11 p-2 px-4 text-sm"},o(f),1))),128))])):d("",!0),l(i)?(e(),a("div",ht,[l(i).note.update?(e(),a("div",gt,[(e(!0),a(g,null,y(l(i).note.update,f=>(e(),a("div",{key:f.content,class:"local-numbers inline-block rounded-xl bg-bg-11 p-2 px-4 text-sm"},[s("p",yt,o(l(t)(f.date)),1),s("div",wt,[s("p",bt,o(f.title),1),s("p",null,o(f.content),1)])]))),128))])):d("",!0)])):d("",!0),s("div",vt,[l(r)?(e(),a("div",kt,[(e(),a(g,null,y(11,f=>u(I,{key:f,data:{},"is-loading":l(r)},null,8,["is-loading"])),64))])):(e(),a("div",xt,[(e(!0),a(g,null,y((F=l(i))==null?void 0:F.cast,f=>(e(),c(I,{key:f.id,data:f},null,8,["data"]))),128))]))]),s("div",$t,[l(r)?(e(),a("div",Dt,[(e(),a(g,null,y(12,f=>u(G,{key:f,"is-loading":l(r),"data-":{},icon:"",title:""},null,8,["is-loading"])),64))])):l(i)?(e(),a("div",Bt,[u(H,{data:l(i)},null,8,["data"])])):d("",!0)])])])}}}),zt=q(jt,[["__scopeId","data-v-d85accf2"]]);export{zt as default};