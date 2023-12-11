import{_ as S}from"./SortByDropdown.vue.6b2a02b1.js";import{_ as w}from"./TitleList.vue.60111e87.js";import{d as B,u as E,a8 as P,r as n,a as q,R as j,c as h,a9 as k,g as x,h as L,i as _,z as M,j as a,aa as N,K as O}from"./entry.579b4528.js";import{u as T}from"./useArchiveIcon.18656aa1.js";const V={class:"flex min-h-full w-full flex-col"},H=B({__name:"ArchiveList",props:{slug:{}},setup(y){const m=E(),A=P(),r=n(!0),u=q(),{infiniteScrolling:C}=j(),l=y,R=h(()=>{var e;return(e=[...m.categories,...m.genres].find(s=>s.slug===l.slug))==null?void 0:e.name}),i=n(),p=n(),c=h(()=>u.query.sortBy||"relevant"),g=u.query.stream==="true",f=n({}),v=n(c.value);async function d(e,s){var o;s!==v.value&&(f.value={},v.value=s),r.value=!0;const t=await N("ARCHIVE::"+[l.slug].join(",")+e+s+g,()=>O.API.actions.archive([l.slug],g,e,s));i.value=t,r.value=!1,t&&((o=i.value)!=null&&o.error&&A(i.value.msg,"ERROR"),f.value[e]=t.result.posts,p.value={pages:t.result.pages,page:t.result.page,total:t.result.total})}return k(()=>{const e=Number(u.query.page||"1");d(e,c.value)}),(e,s)=>{const t=S,o=w;return x(),L("div",V,[_(o,{"secondary-title-type":"",transparent:"",class:"min-h-full",title:a(R)||"",icon:("useArchiveIcon"in e?e.useArchiveIcon:a(T))(e.slug),"is-loading":a(r),data:a(f),"result-info":a(p),onPageChanged:s[0]||(s[0]=I=>a(C)&&d(I,a(c)))},{header:M(()=>[_(t)]),_:1},8,["title","icon","is-loading","data","result-info"])])}}});export{H as _};
