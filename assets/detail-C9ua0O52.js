
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as x}from"./index-CHA_xJn2.js";import{g as B,s as k,K as E,t as R,r as S,i as a,o as w,c as P,a as e,w as t,b as s,l as m,C as h,J as y,an as z,e as N,_ as T}from"./index-AYGfxCO1.js";import $ from"./index-DCYOw9tM.js";import{u as D}from"./useTabbar-DUjf25Ea.js";import"./index-BTBaiwgn.js";import"./setting_permissions-SMuUAefQ.js";const F=B({name:"SettingPermissionsDetail",__name:"detail",setup(I){const l=k(),_=E(),c=D(),i=R(),r=S();function u(){r.value.submit().then(()=>{h.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(M,V)=>{const p=y,o=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),C=N,v=x;return w(),P("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e($,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),G=T(F,[["__scopeId","data-v-80671997"]]);export{G as default};
