
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as B}from"./index-2sIEmf1_.js";import{f as x,z as v,J as y,A as R,r as S,h as o,o as h,c as w,a as e,w as t,b as s,k as c,G as z,y as M,an as $,e as G,d as _}from"./index-DEkb9qM_.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-CezRtgtp.js";import{u as T}from"./useTabbar-Cnq8Zw8L.js";import"./setting_role-BjzUHurx.js";import"./usePagination-BFgzm_nM.js";const A=x({name:"SettingUserDetail",__name:"detail",setup(L){const l=v(),m=y(),u=T(),r=R(),i=S();function f(){i.value.submit().then(()=>{z.emit("get-data-list"),n()})}function p(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?u.close({name:"pagesExampleGeneralManagerList"}):m.push({name:"pagesExampleGeneralManagerList"})}return(P,V)=>{const d=M,a=o("ElButton"),g=$,b=o("ElCol"),k=o("ElRow"),C=G,E=B;return h(),w("div",null,[e(g,{title:c(l).name==="routerName"?"新增用户":"编辑用户"},{default:t(()=>[e(a,{size:"default",round:"",onClick:n},{icon:t(()=>[e(d,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(k,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(N,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:f},{default:t(()=>[s(" 提交 ")]),_:1}),e(a,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}});typeof _=="function"&&_(A);export{A as default};
