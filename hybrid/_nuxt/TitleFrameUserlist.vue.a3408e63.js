import{d as b,g as l,h as r,i as d,w as f,q as a,z as n,B as m,y as x,j as I,p as L,_ as C,a0 as F,n as N,c,F as T,r as V,A as j,k as D,T as S,E as z,D as A}from"./entry.b873eff6.js";const E={class:"flex h-[2.2em] w-[2.2em]"},U=["src"],q={class:"flex flex-row flex-nowrap items-center gap-2 px-2"},P={key:0},W={key:1,class:"text-fonts-200 text-xs"},R=b({__name:"BaseScore",props:{background:{},type:{},noVotes:{type:Boolean},data:{}},setup(p){return(t,o)=>{const u=C;return l(),r("li",null,[d(u,{to:t.data.link,class:n(["flex flex-row flex-nowrap items-center rounded-full font-bold",t.background]),dir:"ltr",external:"",target:"_blank"},{default:f(()=>[a("div",E,[a("span",{class:n(["flex h-[2.2em] w-[2.2em] shrink-0 overflow-hidden rounded-full",{"shadow-primary-500 shadow-[0_0_0_2px]":t.type==="30nama"}])},[a("img",{src:`/images/scores/${t.type}.png`},null,8,U)],2)]),a("div",q,[t.data.score?(l(),r("span",P,m(t.data.score),1)):x("",!0),t.data.votes&&!t.noVotes?(l(),r("span",W," ("+m(I(L.core).nFormatter(t.data.votes,1))+")",1)):x("",!0)])]),_:1},8,["to","class"])])}}}),G={class:"flex w-[calc(100%)] h-[16.125rem] bg-bg-13/50 backdrop-blur-sm rounded-xl transition-all will-change-transform absolute z-[10000]"},H=["onClick"],J={class:"w-[1.25rem] h-[1.25rem] relative flex justify-center items-center"},K={key:0,class:"flex items-center justify-center relative"},X=b({__name:"TitleFrameUserlist",props:{titleId:{},listClass:{},listClassLi:{},single:{type:Boolean}},setup(p){const t=p,o=F(),u=["favorite","watchlist","downloadlist","notify"],i=N(!1),h=c(()=>{var e;return(e=o.library)==null?void 0:e.favorite.post.includes(t.titleId)}),y=c(()=>{var e;return(e=o.library)==null?void 0:e.watchlist.post.includes(t.titleId)}),_=c(()=>{var e;return(e=o.library)==null?void 0:e.downloadlist.post.includes(t.titleId)}),w=c(()=>{var e;return(e=o.library)==null?void 0:e.notify.post.includes(t.titleId)});async function $(e){i.value||(i.value=!0,g(e)?o.removeFromLibrary(t.titleId,e):o.addToLibrary(t.titleId,e),await L.API.actions.user_list_toggle(e,t.titleId),i.value=!1)}function v(e){switch(e){case"favorite":return h.value?"ph:heart-fill":"ph:heart";case"watchlist":return y.value?"ph:eye-fill":"ph:eye";case"downloadlist":return _.value?"ph:plus-circle-fill":"ph:plus-circle";case"notify":return w.value?"ph:bell-fill":"ph:bell"}}function g(e){switch(e){case"favorite":return h.value;case"watchlist":return y.value;case"downloadlist":return _.value;case"notify":return w.value}}return(e,M)=>{const B=z,k=A;return l(),r("aside",G,[a("ul",{class:n(["w-full h-full flex-col items-center flex justify-around text-[1.7rem]",e.listClass])},[(l(),r(T,null,V(u,s=>a("li",{key:s,class:n(["w-full py-2 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer",[{"disable-block":I(i)},e.listClassLi]]),onClick:O=>$(s)},[d(B,{placement:e.single?"bottom":"right"},{default:f(()=>[j(m(e.$t(`list.${s}`)),1)]),_:2},1032,["placement"]),a("span",J,[d(S,{name:"fade-preset"},{default:f(()=>[g(s)?(l(),r("span",K,[d(k,{name:v(s),class:n(["transition-all bg-gradient-to-tl p-3 text-transparent bg-clip-text absolute will-change-transform active:scale-125 active:opacity-80 test bg-red-500",[{"from-rose-400 to-rose-700":s==="favorite"},{"from-emerald-400 to-emerald-700":s==="watchlist"},{"from-yellow-400 to-yellow-700":s==="notify"},{"from-sky-400 to-sky-700":s==="downloadlist"}]])},null,8,["name","class"]),a("span",{class:n(["absolute w-3 h-3 blur-md rounded-full bg-gradient-to-tl pointer-events-none",[{"from-rose-400 to-rose-700":s==="favorite"},{"from-emerald-400 to-emerald-700":s==="watchlist"},{"from-yellow-400 to-yellow-700":s==="notify"},{"from-sky-400 to-sky-700":s==="downloadlist"}]])},null,2)])):(l(),D(k,{key:1,name:v(s),class:"transition-all absolute p-3 will-change-transform active:scale-125 active:opacity-80"},null,8,["name"]))]),_:2},1024)])],10,H)),64))],2)])}}});export{R as _,X as a};
