
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as B}from"./index-M6SKIRTd.js";import{d as v,k as x,F as R,l as S,r as h,a as o,o as w,b as y,f as e,w as t,g as s,i as c,v as M,E as $,ap as z,ah as N,ag as _}from"./index-CcnRRDsH.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-B-ws5bLz.js";import{u as F}from"./useTabbar-CLGlI62B.js";import"./setting_user-ByIlIPBo.js";const G=v({name:"SettingUserDetail",__name:"detail",setup(L){const l=x(),u=R(),m=F(),r=S(),i=h();function f(){i.value.submit().then(()=>{M.emit("get-data-list"),n()})}function p(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"pagesExampleGeneralManagerList"}):u.push({name:"pagesExampleGeneralManagerList"})}return(P,V)=>{const d=$,a=o("ElButton"),g=z,b=o("ElCol"),E=o("ElRow"),k=N,C=B;return w(),y("div",null,[e(g,{title:c(l).name==="routerName"?"新增用户":"编辑用户"},{default:t(()=>[e(a,{size:"default",round:"",onClick:n},{icon:t(()=>[e(d,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(k,null,{default:t(()=>[e(E,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(T,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:f},{default:t(()=>[s(" 提交 ")]),_:1}),e(a,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}});typeof _=="function"&&_(G);export{G as default};
