
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-CULVDhVI.js";import{g as B,v as k,N as E,x as R,r as S,i as a,o as w,c as P,a as e,w as t,b as s,l as m,D as h,M as y,ap as N,e as z,_ as D}from"./index-C3PJOLdt.js";import M from"./index-CY7cos4Y.js";import{u as T}from"./useTabbar-D5-A52A4.js";import"./index-C1_NwTAa.js";import"./setting_permissions-lW4jAp3d.js";const $=B({name:"SettingPermissionsDetail",__name:"detail",setup(F){const l=k(),_=E(),c=T(),i=R(),r=S();function u(){r.value.submit().then(()=>{h.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(I,V)=>{const p=y,o=a("ElButton"),d=N,g=a("ElCol"),b=a("ElRow"),v=z,x=C;return w(),P("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(M,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=D($,[["__scopeId","data-v-80671997"]]);export{K as default};
