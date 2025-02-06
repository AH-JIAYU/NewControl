
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-HVElNFMV.js";import{d as x,k as B,F as E,l as R,r as S,a,o as h,b as w,f as e,w as t,g as s,i as m,v as y,E as z,ap as F,ah as I,I as M}from"./index-DE7GWU9V.js";import N from"./index-B-we7sGO.js";import{u as T}from"./useTabbar-CXJXFJUu.js";import"./setting_versionManagement-D0cuonOB.js";import"./tenantMenu-8b6UFnka.js";import"./tenant_tenantMenu-BtgMT_3q.js";import"./tenantButtonPermission-Cof547Xu.js";import"./tenant_tenantPermission-Cu4WoJq7.js";const V=x({name:"SettingVersionManagementDetail",__name:"detail",setup($){const l=B(),c=E(),_=T(),i=R(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function p(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"multilevel_menu_exampleRole"}):c.push({name:"multilevel_menu_exampleRole"})}return(D,P)=>{const f=z,n=a("ElButton"),d=F,g=a("ElCol"),b=a("ElRow"),v=I,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),Q=M(V,[["__scopeId","data-v-97333e3c"]]);export{Q as default};
