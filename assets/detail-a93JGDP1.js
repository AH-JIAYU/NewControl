
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-BdxjBgge.js";import{g as R,v as B,N as k,x as E,r as S,i as a,o as w,c as h,a as e,w as t,b as s,l as c,D as y,M as N,ap as z,e as D,_ as M}from"./index-8VIcFXwB.js";import T from"./index-CPG7A-AW.js";import{u as $}from"./useTabbar-Bz8ua3s2.js";import"./setting_role-DtYxXPT4.js";import"./buttonPermission-zEM2RV36.js";import"./setting_permissions-CiFou7XP.js";const F=R({name:"SettingRoleDetail",__name:"detail",setup(I){const l=B(),_=k(),m=$(),i=E(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(P,V)=>{const p=N,n=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),v=D,x=C;return w(),h("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:c(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=M(F,[["__scopeId","data-v-698df12c"]]);export{L as default};
