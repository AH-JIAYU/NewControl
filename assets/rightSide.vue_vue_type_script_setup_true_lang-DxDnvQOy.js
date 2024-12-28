
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{d as _,F as d,l as h,P as g,Q as f,n as v,p as b,r as x,R as S,o as n,b as c,f as r,w as y,x as k,i as e,e as w,g as B,y as I,v as i,E as T,_ as E}from"./index-DCNrAvYe.js";import{_ as N}from"./tools.vue_vue_type_script_setup_true_lang-BnH4tgEp.js";const P={class:"flex items-center"},R={class:"flex-center gap-1"},V=["src","onerror"],z=_({name:"ToolbarRightSide",__name:"rightSide",setup($){const u=d(),t=h(),s=g(),{t:o}=f(),p=v(b,Function,!0),a=x(!1);return S(()=>s.avatar,()=>{a.value&&(a.value=!1)}),(j,C)=>{const l=T,m=E;return n(),c("div",P,[r(N,{mode:"right-side"}),r(m,{items:[[{label:e(p)("route.home",e(t).settings.home.title),handle:()=>e(u).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:e(o)("app.preferences"),handle:()=>e(i).emit("global-preferences-toggle"),hide:!e(t).settings.userPreferences.enable}],[{label:e(o)("app.hotkeys"),handle:()=>e(i).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:e(o)("app.logout"),handle:()=>e(s).logout()}]],class:"flex-center cursor-pointer px-2"},{default:y(()=>[k("div",R,[e(s).avatar&&!e(a)?(n(),c("img",{key:0,src:e(s).avatar,onerror:()=>a.value=!0,class:"h-[24px] w-[24px] rounded-full"},null,8,V)):(n(),w(l,{key:1,name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-gray-400"})),B(" "+I(e(s).account)+" ",1),r(l,{name:"i-ep:caret-bottom"})])]),_:1},8,["items"])])}}});export{z as _};
