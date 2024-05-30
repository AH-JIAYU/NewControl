
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as x}from"./index-GffOivhM.js";import{g as B,p as R,J as k,q as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as m,A as y,I as z,ap as D,e as I,_ as M}from"./index-0FEud4J9.js";import{D as N}from"./index-K9aCY8_9.js";import{u as T}from"./useTabbar-DFHmRv3x.js";import"./tenantMenu-D3c3iSbb.js";import"./tenant_tenantMenu-M8UZRjWD.js";import"./tenantButtonPermission-D4_E26Jo.js";import"./tenant_tenantPermission-dKRLLJFW.js";const V=B({name:"SettingVersionManagementDetail",__name:"detail",setup($){const l=R(),_=k(),c=T(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function p(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(A,F)=>{const f=z,n=a("ElButton"),d=D,g=a("ElCol"),b=a("ElRow"),v=I,C=x;return w(),h("div",null,[e(d,{title:m(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=M(V,[["__scopeId","data-v-7d855dde"]]);export{O as default};
