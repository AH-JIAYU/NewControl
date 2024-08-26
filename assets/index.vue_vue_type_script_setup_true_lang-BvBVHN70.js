
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as u,m as a,u as i,o as l,c as n,v as m,A as f,a as g,l as p,L as v,H as b}from"./index-DiP3VL_3.js";const _={key:0,class:"absolute bottom-0 left-0 w-full translate-y-1/2 text-center"},k=u({name:"SearchBar",__name:"index",props:a({showToggle:{type:Boolean,default:!0},background:{type:Boolean,default:!1}},{fold:{type:Boolean,default:!0},foldModifiers:{}}),emits:a(["toggle"],["update:fold"]),setup(s,{emit:r}){const c=r,e=i(s,"fold");function t(){e.value=!e.value,c("toggle",e.value)}return(o,h)=>{const d=b;return l(),n("div",{class:v(["relative",{"py-4":o.showToggle,"px-4 bg-[var(--g-bg)] transition":o.background}])},[m(o.$slots,"default",{fold:e.value,toggle:t}),o.showToggle?(l(),n("div",_,[f("button",{class:"h-5 inline-flex cursor-pointer select-none items-center border-size-0 rounded bg-[var(--g-bg)] px-2 text-xs font-medium outline-none",onClick:t},[g(d,{name:e.value?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])])])):p("",!0)],2)}}});export{k as _};
