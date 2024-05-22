
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as _,J as d,s as h,U as g,X as f,t as v,v as b,r as x,Y as S,o as n,c,a as r,w as k,p as y,l as e,j as B,b as w,C as I,B as i,I as T,x as j}from"./index-C4wi2QcV.js";import{_ as C}from"./tools.vue_vue_type_script_setup_true_lang-DnPk_1Fj.js";const N={class:"flex items-center"},V={class:"flex-center gap-1"},$=["src","onerror"],z=_({name:"ToolbarRightSide",__name:"rightSide",setup(D){const u=d(),t=h(),s=g(),{t:o}=f(),p=v(b,Function,!0),a=x(!1);return S(()=>s.avatar,()=>{a.value&&(a.value=!1)}),(E,P)=>{const l=T,m=j;return n(),c("div",N,[r(C,{mode:"right-side"}),r(m,{items:[[{label:e(p)("route.home",e(t).settings.home.title),handle:()=>e(u).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:e(o)("app.preferences"),handle:()=>e(i).emit("global-preferences-toggle"),hide:!e(t).settings.userPreferences.enable}],[{label:e(o)("app.hotkeys"),handle:()=>e(i).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:e(o)("app.logout"),handle:()=>e(s).logout()}]],class:"flex-center cursor-pointer px-2"},{default:k(()=>[y("div",V,[e(s).avatar&&!e(a)?(n(),c("img",{key:0,src:e(s).avatar,onerror:()=>a.value=!0,class:"h-[24px] w-[24px] rounded-full"},null,8,$)):(n(),B(l,{key:1,name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-gray-400"})),w(" "+I(e(s).account)+" ",1),r(l,{name:"i-ep:caret-bottom"})])]),_:1},8,["items"])])}}});export{z as _};
