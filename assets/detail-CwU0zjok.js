
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-DAmJC7KL.js";import{f as x,n as B,I as R,p as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as m,z as y,H as z,ap as I,e as M,_ as N}from"./index-Bnomq2O6.js";import T from"./index-1oLHiH1i.js";import{u as V}from"./useTabbar-5aGvjZZ_.js";import"./setting_versionManagement-ClcpjJKi.js";import"./tenantMenu-CiCKfBEJ.js";import"./tenantButtonPermission-CCBJNUvi.js";import"./tenant_tenantPermission-BBQI_nPd.js";const $=x({name:"SettingVersionManagementDetail",__name:"detail",setup(D){const l=B(),_=R(),c=V(),r=E(),i=S();function u(){i.value.submit().then(()=>{y.emit("get-data-list"),n()})}function p(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(F,H)=>{const f=z,o=a("ElButton"),d=I,g=a("ElCol"),b=a("ElRow"),v=M,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=N($,[["__scopeId","data-v-ea872473"]]);export{O as default};
