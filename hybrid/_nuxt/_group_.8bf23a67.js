import{_ as S}from"./SortByDropdown.vue.d69e4b28.js";import{_ as C}from"./TitleList.vue.a5880939.js";import{d as R,Y as B,n as o,a as $,m as x,c as _,Z as E,g as P,h as b,i as g,w as I,j as a,$ as L,p as k}from"./entry.b873eff6.js";import"./FormDropdown.vue.75cde40d.js";import"./TitleFrame.4df9bd91.js";import"./TitleFrameUserlist.vue.a3408e63.js";import"./ContentPop-v2.vue.1f7003ae.js";const q={class:"flex min-h-full w-full flex-col"},O=R({__name:"[group]",setup(A){const v=B(),r=o(!0),i=$(),{infiniteScrolling:h}=x(),n=_(()=>i.params.group),u=o(),f=o(),c=_(()=>i.query.sortBy||"add_list"),p=o({}),d=o(c.value);function w(){switch(n.value){case"favorite":return"ph:heart-fill";case"watchlist":return"ph:eye-fill";case"downloadlist":return"ph:plus-circle-fill";case"notify":return"ph:bell-fill"}}async function m(t,s){var l;s!==d.value&&(p.value={},d.value=s),r.value=!0;const e=await L("LIBRARY::"+n.value+t+s,()=>k.API.actions.user_list(n.value,t,s||"add_list","DESC"));u.value=e,r.value=!1,e&&((l=u.value)!=null&&l.error&&v(u.value.msg,"ERROR"),p.value[t]=e.result.posts,f.value={pages:e.result.pages,page:e.result.page,total:e.result.total})}return E(()=>{const t=Number(i.query.page||"1");m(t,c.value)}),(t,s)=>{const e=S,l=C;return P(),b("div",q,[g(l,{"secondary-title-type":"",transparent:"",class:"min-h-full",title:t.$t(`sidebar.tree.profile.panel.${a(n)}`),icon:w(),"is-loading":a(r),data:a(p),"result-info":a(f),onPageChanged:s[0]||(s[0]=y=>a(h)&&m(y,a(c)))},{header:I(()=>[g(e)]),_:1},8,["title","icon","is-loading","data","result-info"])])}}});export{O as default};