
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-TOa_3Q0V.js";import{g as R,q as x,J as k,s as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as c,B as y,I as z,an as I,e as N,_ as T}from"./index-C4wi2QcV.js";import $ from"./index-B7r8k2Ew.js";import{u as D}from"./useTabbar-_a_NTmrY.js";import"./setting_role-Bd2P9WIJ.js";import"./buttonPermission-mJNlyucR.js";import"./setting_permissions-DamOsxL9.js";const F=R({name:"SettingRoleDetail",__name:"detail",setup(M){const l=x(),_=k(),m=D(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(P,V)=>{const p=z,n=a("ElButton"),d=I,g=a("ElCol"),b=a("ElRow"),v=N,B=C;return w(),h("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e($,{id:c(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=T(F,[["__scopeId","data-v-698df12c"]]);export{L as default};
