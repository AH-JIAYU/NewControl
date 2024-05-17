
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as E}from"./index-CYlwN2GT.js";import{f as x,A as v,K as R,B as S,r as h,h as o,o as w,c as y,a as e,w as t,b as s,k as c,H as z,z as M,an as $,e as N,d as _}from"./index-fOI-6dkn.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-5rK5R0_U.js";import{u as A}from"./useTabbar-vq4elHFJ.js";import"./setting_role-Cx7lXP-p.js";import"./usePagination-CBdo8piC.js";const G=x({name:"SettingUserDetail",__name:"detail",setup(H){const l=v(),m=R(),u=A(),r=S(),i=h();function f(){i.value.submit().then(()=>{z.emit("get-data-list"),n()})}function p(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?u.close({name:"pagesExampleGeneralManagerList"}):m.push({name:"pagesExampleGeneralManagerList"})}return(L,P)=>{const d=M,a=o("ElButton"),g=$,b=o("ElCol"),k=o("ElRow"),B=N,C=E;return w(),y("div",null,[e(g,{title:c(l).name==="routerName"?"新增用户":"编辑用户"},{default:t(()=>[e(a,{size:"default",round:"",onClick:n},{icon:t(()=>[e(d,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(B,null,{default:t(()=>[e(k,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(T,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:f},{default:t(()=>[s(" 提交 ")]),_:1}),e(a,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}});typeof _=="function"&&_(G);export{G as default};
