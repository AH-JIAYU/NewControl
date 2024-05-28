
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-3RvriCdG.js";import{g as B,v as k,N as E,x as R,r as S,i as a,o as w,c as P,a as e,w as t,b as s,l as m,D as h,M as y,ap as N,e as z,_ as D}from"./index-zX-UbP25.js";import M from"./index-CJXPd4hV.js";import{u as T}from"./useTabbar-BxJ-ZlRa.js";import"./index-B1FwYrw4.js";import"./tenant_tenantPermission-gCG1WQCS.js";import"./tenantMenu-D1ik0fKX.js";import"./tenant_tenantMenu-BzR_nRH9.js";const $=B({name:"SettingPermissionsDetail",__name:"detail",setup(F){const l=k(),_=E(),c=T(),i=R(),r=S();function u(){r.value.submit().then(()=>{h.emit("get-data-list"),o()})}function p(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(I,V)=>{const f=y,n=a("ElButton"),d=N,g=a("ElCol"),b=a("ElRow"),v=z,x=C;return w(),P("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(M,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=D($,[["__scopeId","data-v-eeed7d8a"]]);export{O as default};
