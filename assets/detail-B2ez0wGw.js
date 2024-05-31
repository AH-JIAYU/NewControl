
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-BAjnv4t0.js";import{f as x,n as B,I as R,p as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as m,z as y,H as z,ap as D,e as I,_ as M}from"./index-DANQ2mS2.js";import{D as N}from"./index-B4qsHUQu.js";import{u as T}from"./useTabbar-BDQ0uMbM.js";import"./tenantMenu-DCPm1AW9.js";import"./tenant_tenantMenu-CQsHuazn.js";import"./tenantButtonPermission-bE-SghRa.js";import"./tenant_tenantPermission-cI7KTRah.js";const V=x({name:"SettingVersionManagementDetail",__name:"detail",setup($){const l=B(),_=R(),c=T(),r=E(),i=S();function u(){i.value.submit().then(()=>{y.emit("get-data-list"),n()})}function p(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(F,H)=>{const f=z,o=a("ElButton"),d=D,g=a("ElCol"),b=a("ElRow"),v=I,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:m(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=M(V,[["__scopeId","data-v-ea872473"]]);export{O as default};
