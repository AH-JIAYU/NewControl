
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as _,K as d,t as h,X as f,Y as g,v,x as b,r as x,Z as S,o as n,c as l,a as r,w as k,q as y,k as e,i as w,b as B,D as I,C as i,J as T,y as C}from"./index-B13k3BKp.js";import{_ as D}from"./tools.vue_vue_type_script_setup_true_lang-BO7OOLJM.js";const N={class:"flex items-center"},V={class:"flex-center gap-1"},$=["src","onerror"],q=_({name:"ToolbarRightSide",__name:"rightSide",setup(j){const u=d(),t=h(),a=f(),{t:o}=g(),m=v(b,Function,!0),s=x(!1);return S(()=>a.avatar,()=>{s.value&&(s.value=!1)}),(E,K)=>{const c=T,p=C;return n(),l("div",N,[r(D,{mode:"right-side"}),r(p,{items:[[{label:e(m)("route.home",e(t).settings.home.title),handle:()=>e(u).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:e(o)("app.preferences"),handle:()=>e(i).emit("global-preferences-toggle"),hide:!e(t).settings.userPreferences.enable}],[{label:e(o)("app.hotkeys"),handle:()=>e(i).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:e(o)("app.logout"),handle:()=>e(a).logout()}]],class:"flex-center cursor-pointer px-2"},{default:k(()=>[y("div",V,[e(a).avatar&&!e(s)?(n(),l("img",{key:0,src:e(a).avatar,onerror:()=>s.value=!0,class:"h-[24px] w-[24px] rounded-full"},null,8,$)):(n(),w(c,{key:1,name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-gray-400"})),B(" "+I(e(a).account)+" ",1),r(c,{name:"i-ep:caret-bottom"})])]),_:1},8,["items"])])}}});export{q as _};
