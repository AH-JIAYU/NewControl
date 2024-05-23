
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as x}from"./index-P2LLNa6V.js";import{g as B,s as R,K as k,t as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as m,C as y,J as z,an as D,e as M,_ as N}from"./index-B4NyuzNm.js";import{D as T}from"./index-Bn2LSKdU.js";import{u as V}from"./useTabbar-Bk-w9Dk-.js";import"./tenantMenu-DwsgebD8.js";import"./tenant_tenantMenu-B-oFUNES.js";import"./tenantButtonPermission-Czewx4v9.js";import"./tenant_tenantPermission-BE8GBq3K.js";const $=B({name:"SettingVersionManagementDetail",__name:"detail",setup(F){const l=R(),_=k(),c=V(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(I,P)=>{const p=z,o=a("ElButton"),d=D,g=a("ElCol"),b=a("ElRow"),C=M,v=x;return w(),h("div",null,[e(d,{title:m(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=N($,[["__scopeId","data-v-7d855dde"]]);export{O as default};
