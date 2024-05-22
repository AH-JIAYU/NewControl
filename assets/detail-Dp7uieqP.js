
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-TOa_3Q0V.js";import{g as x,q as v,J as R,s as S,r as w,i as o,o as y,c as h,a as e,w as t,b as s,l as c,B as M,I as $,an as z,e as N,d as _}from"./index-C4wi2QcV.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-_ZtNYkpo.js";import{u as G}from"./useTabbar-_a_NTmrY.js";import"./setting_role-Bd2P9WIJ.js";const I=x({name:"SettingUserDetail",__name:"detail",setup(L){const l=v(),u=R(),m=G(),r=S(),i=w();function f(){i.value.submit().then(()=>{M.emit("get-data-list"),n()})}function p(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"pagesExampleGeneralManagerList"}):u.push({name:"pagesExampleGeneralManagerList"})}return(P,V)=>{const d=$,a=o("ElButton"),g=z,b=o("ElCol"),B=o("ElRow"),C=N,E=k;return y(),h("div",null,[e(g,{title:c(l).name==="routerName"?"新增用户":"编辑用户"},{default:t(()=>[e(a,{size:"default",round:"",onClick:n},{icon:t(()=>[e(d,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(B,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(T,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:f},{default:t(()=>[s(" 提交 ")]),_:1}),e(a,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}});typeof _=="function"&&_(I);export{I as default};
