
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as R}from"./index-GffOivhM.js";import{g as x,p as B,J as k,q as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as c,A as y,I as z,ap as I,e as N,_ as T}from"./index-0FEud4J9.js";import $ from"./index-B_wopt0N.js";import{u as A}from"./useTabbar-DFHmRv3x.js";import"./setting_role-DPvweghp.js";import"./buttonPermission-DbE_-6iT.js";import"./setting_permissions-CEYutHlj.js";const D=x({name:"SettingRoleDetail",__name:"detail",setup(F){const l=B(),_=k(),m=A(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(M,P)=>{const p=z,n=a("ElButton"),d=I,g=a("ElCol"),b=a("ElRow"),v=N,C=R;return w(),h("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e($,{id:c(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=T(D,[["__scopeId","data-v-698df12c"]]);export{L as default};
