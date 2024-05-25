
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-BdxjBgge.js";import{g as B,v as R,N as k,x as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as m,D as y,M as D,ap as M,e as N,_ as z}from"./index-8VIcFXwB.js";import{D as T}from"./index-CTkCh0-l.js";import{u as V}from"./useTabbar-Bz8ua3s2.js";import"./tenantMenu--6VNg9w4.js";import"./tenant_tenantMenu-C2vMA-vw.js";import"./tenantButtonPermission-eniiQUrm.js";import"./tenant_tenantPermission-Ct_1shrq.js";const $=B({name:"SettingVersionManagementDetail",__name:"detail",setup(F){const l=R(),_=k(),c=V(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function p(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(I,P)=>{const f=D,n=a("ElButton"),d=M,g=a("ElCol"),b=a("ElRow"),v=N,x=C;return w(),h("div",null,[e(d,{title:m(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=z($,[["__scopeId","data-v-7d855dde"]]);export{O as default};
