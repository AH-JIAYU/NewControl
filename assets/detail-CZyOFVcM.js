
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-TOa_3Q0V.js";import{g as x,q as k,J as E,s as R,r as S,i as a,o as w,c as P,a as e,w as t,b as s,l as m,B as h,I as y,an as z,e as I,_ as N}from"./index-C4wi2QcV.js";import T from"./index-DO9EcyCn.js";import{u as $}from"./useTabbar-_a_NTmrY.js";import"./index-CE9Rx7Yn.js";import"./setting_permissions-DamOsxL9.js";const D=x({name:"SettingPermissionsDetail",__name:"detail",setup(F){const l=k(),_=E(),c=$(),i=R(),r=S();function u(){r.value.submit().then(()=>{h.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(M,V)=>{const p=y,o=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),v=I,B=C;return w(),P("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=N(D,[["__scopeId","data-v-80671997"]]);export{K as default};
