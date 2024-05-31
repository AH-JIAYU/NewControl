
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as R}from"./index-BAjnv4t0.js";import{f as k,n as x,I as B,p as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as c,z as y,H as z,ap as I,e as N,_ as T}from"./index-DANQ2mS2.js";import $ from"./index-BlSjUovB.js";import{u as D}from"./useTabbar-BDQ0uMbM.js";import"./setting_role-TxIS7Lg2.js";import"./buttonPermission-CluJpw-J.js";import"./setting_permissions-nnPcoehj.js";const F=k({name:"SettingRoleDetail",__name:"detail",setup(H){const l=x(),_=B(),m=D(),r=E(),i=S();function u(){i.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(M,P)=>{const p=z,n=a("ElButton"),d=I,g=a("ElCol"),b=a("ElRow"),v=N,C=R;return h(),w("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e($,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=T(F,[["__scopeId","data-v-698df12c"]]);export{L as default};
