
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as y,A as b,K as w,aZ as C,C as I,D as P,r as S,Z as z,o,c as i,q as r,k as e,a1 as x,i as p,l as m,a as c,w as A,a2 as $,ai as j,aE as B,b as _,ae as D,z as F,at as N,au as R,I as V,aA as T,_ as E}from"./index-DliMWqTD.js";import{S as H}from"./sortable.esm-BS5toX6s.js";const h=d=>(N("data-v-2dce4004"),d=d(),R(),d),K={class:"favorites-container w-80"},Z={class:"flex items-center justify-between px-4 py-3"},q=h(()=>r("div",{class:"text-sm font-bold"}," 我的收藏夹 ",-1)),L=["title","onClick"],M={class:"name flex-1 truncate pe-4"},U={class:"right-1 h-5 w-6 rounded-full text-stone-3 !absolute dark:text-stone-7 hover:text-stone-7 dark:hover:text-stone-3"},G={key:1,flex:"center col","py-6":"","text-stone-5":""},J=h(()=>r("p",{"m-2":"","text-base":""}," 收藏夹是空的 ",-1)),O={"m-0":"","flex-center":"","text-sm":"","op-75":""},Q=y({name:"FavoritesPanel",__name:"panel",setup(d){const l=b(),g=w(),s=C(),f=I(P,Function,!0),u=S();return z(()=>u.value,v=>{v&&new H(u.value,{animation:200,ghostClass:"draggable-ghost",draggable:".draggable-item",onUpdate:a=>{a.newIndex!==void 0&&a.oldIndex!==void 0&&s.sort(a.newIndex,a.oldIndex)}})}),(v,a)=>{const n=F;return o(),i("div",K,[r("div",Z,[q,e(s).canAdd(e(l).fullPath)?(o(),i(x,{key:0},[e(s).isAdd(e(l).fullPath)?(o(),p(n,{key:1,class:"cursor-pointer text-xl",name:"i-mdi:star-remove",title:"从收藏夹删除",onClick:a[1]||(a[1]=t=>e(s).remove(e(l).fullPath))})):(o(),p(n,{key:0,class:"cursor-pointer text-xl",name:"i-mdi:star-plus-outline",title:"添加到收藏夹",onClick:a[0]||(a[0]=t=>e(s).add(e(l)))}))],64)):m("",!0)]),c(e(D),{options:{scrollbars:{autoHide:"leave",autoHideDelay:300}},defer:"",class:"max-h-220px"},{default:A(()=>[e(s).list.length>0?(o(),i("div",{key:0,ref_key:"favoritesContainerRef",ref:u,class:"flex flex-wrap items-center justify-between gap-2 px-4 pb-4"},[(o(!0),i(x,null,$(e(s).list,t=>(o(),i("div",{key:t.fullPath,title:e(f)(t.i18n,t.title),class:"draggable-item relative w-[calc(50%-0.25rem)] flex cursor-pointer items-center gap-1 rounded px-2 py-2 ring-1 ring-stone-3 ring-inset hover:bg-stone-1 dark:ring-stone-7 dark:hover:bg-dark/50",onClick:k=>e(g).push(t.fullPath)},[t.icon?(o(),p(n,{key:0,name:t.icon,size:18},null,8,["name"])):m("",!0),r("div",M,V(e(f)(t.i18n,t.title)),1),r("div",U,[c(n,{name:"i-ep:delete",size:14,onClick:T(k=>e(s).remove(t.fullPath),["stop"])},null,8,["onClick"])])],8,L))),128))],512)):(o(),i("div",G,[c(n,{name:"i-tabler:mood-empty",size:40}),J,j(r("p",O,[_(" 点击右上角 "),c(n,{name:"i-mdi:star-plus-outline",size:20,"mx-1":"","text-stone-6":"","dark:text-stone-4":""}),_(" 将当前页面添加到收藏夹 ")],512),[[B,e(s).canAdd(e(l).fullPath)]])]))]),_:1})])}}}),Y=E(Q,[["__scopeId","data-v-2dce4004"]]);export{Y as default};
