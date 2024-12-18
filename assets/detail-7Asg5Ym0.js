
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-BM5rDH7w.js";import{d as x,k as B,F as E,l as R,r as S,a,o as h,b as w,f as e,w as t,g as s,i as m,v as y,E as z,ap as F,ah as I,I as M}from"./index-vHq0Y8jA.js";import N from"./index-C3RDPo8W.js";import{u as T}from"./useTabbar-m8Q0QLCc.js";import"./setting_versionManagement-aQ2l9gaw.js";import"./tenantMenu-DO87NP8_.js";import"./tenant_tenantMenu-BxDw53oc.js";import"./tenantButtonPermission-dBS_Yl7u.js";import"./tenant_tenantPermission-C5TgpvnA.js";const V=x({name:"SettingVersionManagementDetail",__name:"detail",setup($){const l=B(),c=E(),_=T(),i=R(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function p(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"multilevel_menu_exampleRole"}):c.push({name:"multilevel_menu_exampleRole"})}return(D,P)=>{const f=z,n=a("ElButton"),d=F,g=a("ElCol"),b=a("ElRow"),v=I,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),Q=M(V,[["__scopeId","data-v-97333e3c"]]);export{Q as default};
