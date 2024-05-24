
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as _,N as d,x as h,$ as g,a0 as f,y as b,z as v,r as x,a1 as S,o as n,c,a as r,w as y,F as k,l as e,j as w,b as B,G as I,D as i,M as N,A as T}from"./index-C3PJOLdt.js";import{_ as $}from"./tools.vue_vue_type_script_setup_true_lang-D5byB0bQ.js";const j={class:"flex items-center"},D={class:"flex-center gap-1"},V=["src","onerror"],P=_({name:"ToolbarRightSide",__name:"rightSide",setup(z){const u=d(),t=h(),a=g(),{t:o}=f(),m=b(v,Function,!0),s=x(!1);return S(()=>a.avatar,()=>{s.value&&(s.value=!1)}),(C,E)=>{const l=N,p=T;return n(),c("div",j,[r($,{mode:"right-side"}),r(p,{items:[[{label:e(m)("route.home",e(t).settings.home.title),handle:()=>e(u).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:e(o)("app.preferences"),handle:()=>e(i).emit("global-preferences-toggle"),hide:!e(t).settings.userPreferences.enable}],[{label:e(o)("app.hotkeys"),handle:()=>e(i).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:e(o)("app.logout"),handle:()=>e(a).logout()}]],class:"flex-center cursor-pointer px-2"},{default:y(()=>[k("div",D,[e(a).avatar&&!e(s)?(n(),c("img",{key:0,src:e(a).avatar,onerror:()=>s.value=!0,class:"h-[24px] w-[24px] rounded-full"},null,8,V)):(n(),w(l,{key:1,name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-gray-400"})),B(" "+I(e(a).account)+" ",1),r(l,{name:"i-ep:caret-bottom"})])]),_:1},8,["items"])])}}});export{P as _};
