
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-DSsDY5IQ.js";import{f as x,n as B,I as R,p as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as _,z as y,H as z,ap as D,e as I,_ as M}from"./index-CNoZ28XD.js";import{D as N}from"./index-B2XUoYmm.js";import{u as T}from"./useTabbar-DuT99aX5.js";import"./tenantMenu-CXTQgFIj.js";import"./tenantButtonPermission-CVr6n15h.js";import"./tenant_tenantPermission-BdY7br38.js";const V=x({name:"SettingVersionManagementDetail",__name:"detail",setup($){const l=B(),c=R(),m=T(),r=E(),i=S();function u(){i.value.submit().then(()=>{y.emit("get-data-list"),n()})}function f(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):c.push({name:"multilevel_menu_exampleRole"})}return(F,H)=>{const p=z,o=a("ElButton"),d=D,g=a("ElCol"),b=a("ElRow"),v=I,C=k;return h(),w("div",null,[e(d,{title:_(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:_(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=M(V,[["__scopeId","data-v-ea872473"]]);export{L as default};
