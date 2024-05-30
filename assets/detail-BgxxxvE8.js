
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as x}from"./index-GffOivhM.js";import{g as B,p as k,J as E,q as R,r as S,i as a,o as w,c as P,a as e,w as t,b as s,l as m,A as h,I as y,ap as z,e as I,_ as N}from"./index-0FEud4J9.js";import T from"./index-BZX9LhUh.js";import{u as $}from"./useTabbar-DFHmRv3x.js";import"./index-BS0mkHba.js";import"./tenant_tenantPermission-dKRLLJFW.js";import"./tenantMenu-D3c3iSbb.js";import"./tenant_tenantMenu-M8UZRjWD.js";const A=B({name:"SettingPermissionsDetail",__name:"detail",setup(D){const l=k(),_=E(),c=$(),i=R(),r=S();function u(){r.value.submit().then(()=>{h.emit("get-data-list"),o()})}function p(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(F,M)=>{const f=y,n=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),v=I,C=x;return w(),P("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=N(A,[["__scopeId","data-v-eeed7d8a"]]);export{O as default};
