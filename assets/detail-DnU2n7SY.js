
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as R}from"./index-CHA_xJn2.js";import{g as x,s as B,K as k,t as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as c,C as y,J as z,an as N,e as T,_ as $}from"./index-AYGfxCO1.js";import D from"./index--XHZdLr4.js";import{u as F}from"./useTabbar-DUjf25Ea.js";import"./setting_role-Bk_fj-G0.js";import"./buttonPermission-WP9ykX_J.js";import"./setting_permissions-SMuUAefQ.js";const I=x({name:"SettingRoleDetail",__name:"detail",setup(M){const l=B(),_=k(),m=F(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(P,V)=>{const p=z,n=a("ElButton"),d=N,g=a("ElCol"),b=a("ElRow"),C=T,v=R;return w(),h("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(D,{id:c(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=$(I,[["__scopeId","data-v-698df12c"]]);export{L as default};
