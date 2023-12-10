import{d as x,g as l,h as r,i as d,z as u,k as o,E as n,t as f,m as b,j as I,K as L,P as B,ab as N,r as F,c,F as V,A as j,N as T,l as D,Y as S,Z as z,v as A}from"./entry.cda885f0.js";const E={class:"flex h-[2.2em] w-[2.2em]"},P=["src"],U={class:"flex flex-row flex-nowrap items-center gap-2 px-2"},K={key:0},W={key:1,class:"text-fonts-200 text-xs"},O=x({__name:"BaseScore",props:{background:{},type:{},noVotes:{type:Boolean},data:{}},setup(m){return(t,p)=>{const a=B;return l(),r("li",null,[d(a,{to:t.data.link,class:n(["flex flex-row flex-nowrap items-center rounded-full font-bold",t.background]),dir:"ltr",external:"",target:"_blank"},{default:u(()=>[o("div",E,[o("span",{class:n(["flex h-[2.2em] w-[2.2em] shrink-0 overflow-hidden rounded-full",{"shadow-primary-500 shadow-[0_0_0_2px]":t.type==="30nama"}])},[o("img",{src:`/images/scores/${t.type}.png`},null,8,P)],2)]),o("div",U,[t.data.score?(l(),r("span",K,f(t.data.score),1)):b("",!0),t.data.votes&&!t.noVotes?(l(),r("span",W," ("+f(I(L.core).nFormatter(t.data.votes,1))+")",1)):b("",!0)])]),_:1},8,["to","class"])])}}}),Y={class:"flex w-[calc(100%)] h-[16.125rem] bg-bg-13/50 backdrop-blur-sm rounded-xl transition-all will-change-transform absolute z-[10000]"},Z=["onClick"],q={class:"w-[1.25rem] h-[1.25rem] relative flex justify-center items-center"},G={key:0,class:"flex items-center justify-center relative"},Q=x({__name:"TitleFrameUserlist",props:{titleId:{},listClass:{},listClassLi:{},single:{type:Boolean}},setup(m){const t=N(),p=["favorite","watchlist","downloadlist","notify"],a=m,i=F(!1),h=c(()=>{var e;return(e=t.library)==null?void 0:e.favorite.post.includes(a.titleId)}),y=c(()=>{var e;return(e=t.library)==null?void 0:e.watchlist.post.includes(a.titleId)}),_=c(()=>{var e;return(e=t.library)==null?void 0:e.downloadlist.post.includes(a.titleId)}),w=c(()=>{var e;return(e=t.library)==null?void 0:e.notify.post.includes(a.titleId)});async function $(e){i.value||(i.value=!0,g(e)?t.removeFromLibrary(a.titleId,e):t.addToLibrary(a.titleId,e),await L.API.actions.user_list_toggle(e,a.titleId),i.value=!1)}function v(e){switch(e){case"favorite":return h.value?"ph:heart-fill":"ph:heart";case"watchlist":return y.value?"ph:eye-fill":"ph:eye";case"downloadlist":return _.value?"ph:plus-circle-fill":"ph:plus-circle";case"notify":return w.value?"ph:bell-fill":"ph:bell"}}function g(e){switch(e){case"favorite":return h.value;case"watchlist":return y.value;case"downloadlist":return _.value;case"notify":return w.value}}return(e,H)=>{const C=z,k=A;return l(),r("aside",Y,[o("ul",{class:n(["w-full h-full flex-col items-center flex justify-around text-[1.7rem]",e.listClass])},[(l(),r(V,null,j(p,s=>o("li",{key:s,class:n(["w-full py-2 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer",[{"disable-block":I(i)},e.listClassLi]]),onClick:J=>$(s)},[d(C,{placement:e.single?"bottom":"right"},{default:u(()=>[T(f(e.$t(`list.${s}`)),1)]),_:2},1032,["placement"]),o("span",q,[d(S,{name:"fade-preset"},{default:u(()=>[g(s)?(l(),r("span",G,[d(k,{name:v(s),class:n(["transition-all bg-gradient-to-tl p-3 text-transparent bg-clip-text absolute will-change-transform active:scale-125 active:opacity-80 test bg-red-500",[{"from-rose-400 to-rose-700":s==="favorite"},{"from-emerald-400 to-emerald-700":s==="watchlist"},{"from-yellow-400 to-yellow-700":s==="notify"},{"from-sky-400 to-sky-700":s==="downloadlist"}]])},null,8,["name","class"]),o("span",{class:n(["absolute w-3 h-3 blur-md rounded-full bg-gradient-to-tl pointer-events-none",[{"from-rose-400 to-rose-700":s==="favorite"},{"from-emerald-400 to-emerald-700":s==="watchlist"},{"from-yellow-400 to-yellow-700":s==="notify"},{"from-sky-400 to-sky-700":s==="downloadlist"}]])},null,2)])):(l(),D(k,{key:1,name:v(s),class:"transition-all absolute p-3 will-change-transform active:scale-125 active:opacity-80"},null,8,["name"]))]),_:2},1024)])],10,Z)),64))],2)])}}});export{O as _,Q as a};
