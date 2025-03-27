
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-M6SKIRTd.js";import{d as x,k as B,F as E,l as R,r as S,a,o as h,b as w,f as e,w as t,g as s,i as m,v as P,E as y,ap as z,ah as F,I}from"./index-CcnRRDsH.js";import N from"./index-CYiudd_N.js";import{u as T}from"./useTabbar-CLGlI62B.js";import"./index-A4nrwpvI.js";import"./supplieMenu-BVPY8n9D.js";const $=x({name:"SettingPermissionsDetail",__name:"detail",setup(D){const l=B(),_=E(),c=T(),i=R(),r=S();function u(){r.value.submit().then(()=>{P.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(M,V)=>{const p=y,o=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),v=F,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=I($,[["__scopeId","data-v-55783d9a"]]);export{K as default};
