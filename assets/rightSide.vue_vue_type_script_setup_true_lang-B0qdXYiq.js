
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as _,J as d,y as h,U as f,X as g,E as b,F as v,r as x,Y as S,o as n,c as l,a as r,w as k,A as y,k as e,i as B,b as w,B as I,z as i,x as T,G as E}from"./index-b9-Qwvd3.js";import{_ as N}from"./tools.vue_vue_type_script_setup_true_lang-BkmnAp26.js";const V={class:"flex items-center"},$={class:"flex-center gap-1"},j=["src","onerror"],R=_({name:"ToolbarRightSide",__name:"rightSide",setup(z){const u=d(),t=h(),a=f(),{t:o}=g(),m=b(v,Function,!0),s=x(!1);return S(()=>a.avatar,()=>{s.value&&(s.value=!1)}),(C,D)=>{const c=T,p=E;return n(),l("div",V,[r(N,{mode:"right-side"}),r(p,{items:[[{label:e(m)("route.home",e(t).settings.home.title),handle:()=>e(u).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:e(o)("app.preferences"),handle:()=>e(i).emit("global-preferences-toggle"),hide:!e(t).settings.userPreferences.enable}],[{label:e(o)("app.hotkeys"),handle:()=>e(i).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:e(o)("app.logout"),handle:()=>e(a).logout()}]],class:"flex-center cursor-pointer px-2"},{default:k(()=>[y("div",$,[e(a).avatar&&!e(s)?(n(),l("img",{key:0,src:e(a).avatar,onerror:()=>s.value=!0,class:"h-[24px] w-[24px] rounded-full"},null,8,j)):(n(),B(c,{key:1,name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-gray-400"})),w(" "+I(e(a).account)+" ",1),r(c,{name:"i-ep:caret-bottom"})])]),_:1},8,["items"])])}}});export{R as _};
