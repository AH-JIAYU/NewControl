
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-HVElNFMV.js";import{d as k,k as B,F as E,l as R,r as h,a,o as w,b as P,f as e,w as t,g as s,i as m,v as S,E as y,ap as z,ah as F,I}from"./index-DE7GWU9V.js";import N from"./index-BGNr050H.js";import{u as T}from"./useTabbar-CXJXFJUu.js";import"./index-QEBfxI9h.js";import"./setting_permissions-DXwTpBeH.js";const $=k({name:"multilevel_menu_examplePermissionsDetail",__name:"detail",setup(D){const l=B(),_=E(),c=T(),i=R(),r=h();function u(){r.value.submit().then(()=>{S.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(M,V)=>{const p=y,o=a("ElButton"),d=z,b=a("ElCol"),g=a("ElRow"),v=F,x=C;return w(),P("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(g,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(N,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=I($,[["__scopeId","data-v-6b3b0109"]]);export{K as default};
