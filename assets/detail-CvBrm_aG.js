
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-TOa_3Q0V.js";import{g as x,q as R,J as k,s as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as c,B as y,I as z,an as D,e as I,_ as M}from"./index-C4wi2QcV.js";import{D as N}from"./index-zqlM8Phc.js";import{u as T}from"./useTabbar-_a_NTmrY.js";import"./buttonPermission-mJNlyucR.js";import"./setting_permissions-DamOsxL9.js";const V=x({name:"SettingVersionManagementDetail",__name:"detail",setup($){const l=R(),_=k(),m=T(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(F,P)=>{const p=z,o=a("ElButton"),d=D,g=a("ElCol"),b=a("ElRow"),v=I,B=C;return w(),h("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:c(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=M(V,[["__scopeId","data-v-7c0c70b8"]]);export{K as default};
