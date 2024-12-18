
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-C2XhXV4k.js";import{d as x,k as B,F as E,l as R,r as S,a,o as h,b as w,f as e,w as t,g as s,i as m,v as P,E as y,ap as z,ah as F,I}from"./index-AugZrloc.js";import N from"./index-DDJjESh3.js";import{u as T}from"./useTabbar-vJ3pKA-0.js";import"./index-dKh_dbbd.js";import"./tenant_tenantPermission-Bg8TYVI5.js";import"./tenantMenu-tDrEng-h.js";import"./tenant_tenantMenu-BuIGrjqA.js";const $=x({name:"SettingPermissionsDetail",__name:"detail",setup(D){const l=B(),_=E(),c=T(),i=R(),r=S();function u(){r.value.submit().then(()=>{P.emit("get-data-list"),o()})}function f(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(M,V)=>{const p=y,n=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),v=F,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=I($,[["__scopeId","data-v-81a600e4"]]);export{O as default};
