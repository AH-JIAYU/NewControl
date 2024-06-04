
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as _,I as d,p as h,R as f,U as g,q as b,s as v,r as x,X as S,o as n,c as l,a as r,w as k,A as y,k as e,i as B,b as w,B as I,z as i,H as T,t as N}from"./index-_6B1mbBs.js";import{_ as R}from"./tools.vue_vue_type_script_setup_true_lang-k6QCVx4L.js";const V={class:"flex items-center"},$={class:"flex-center gap-1"},j=["src","onerror"],P=_({name:"ToolbarRightSide",__name:"rightSide",setup(z){const u=d(),t=h(),s=f(),{t:o}=g(),p=b(v,Function,!0),a=x(!1);return S(()=>s.avatar,()=>{a.value&&(a.value=!1)}),(C,D)=>{const c=T,m=N;return n(),l("div",V,[r(R,{mode:"right-side"}),r(m,{items:[[{label:e(p)("route.home",e(t).settings.home.title),handle:()=>e(u).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:e(o)("app.preferences"),handle:()=>e(i).emit("global-preferences-toggle"),hide:!e(t).settings.userPreferences.enable}],[{label:e(o)("app.hotkeys"),handle:()=>e(i).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:e(o)("app.logout"),handle:()=>e(s).logout()}]],class:"flex-center cursor-pointer px-2"},{default:k(()=>[y("div",$,[e(s).avatar&&!e(a)?(n(),l("img",{key:0,src:e(s).avatar,onerror:()=>a.value=!0,class:"h-[24px] w-[24px] rounded-full"},null,8,j)):(n(),B(c,{key:1,name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-gray-400"})),w(" "+I(e(s).account)+" ",1),r(c,{name:"i-ep:caret-bottom"})])]),_:1},8,["items"])])}}});export{P as _};
