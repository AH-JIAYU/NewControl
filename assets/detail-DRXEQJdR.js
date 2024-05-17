
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-D27jlqGU.js";import{f as k,A as x,K as E,B as R,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as m,H as P,z as y,an as z,e as N,_ as T}from"./index-ChRZRlQw.js";import $ from"./index-B-VDT4sA.js";import{u as A}from"./useTabbar-B0W-EfCP.js";import"./index-CUD7MP3y.js";import"./setting_permissions-D_w0ba0R.js";const D=k({name:"SettingPermissionsDetail",__name:"detail",setup(F){const l=x(),_=E(),c=A(),i=R(),r=S();function u(){r.value.submit().then(()=>{P.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(H,I)=>{const p=y,o=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),v=N,B=C;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e($,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),J=T(D,[["__scopeId","data-v-80671997"]]);export{J as default};
