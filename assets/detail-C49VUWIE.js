
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-uefq56YS.js";import{d as R,k,F as B,l as E,r as h,a,o as w,b as S,f as e,w as t,g as l,i as m,v as y,E as z,ap as F,ah as I,I as N}from"./index-DCJyWkOf.js";import T from"./index-BFtXMd-c.js";import{u as $}from"./useTabbar-TtkZI-3a.js";import"./setting_role-D25K-6hz.js";import"./buttonPermission-Cy6Y7sEX.js";import"./setting_permissions-BhnZUpDJ.js";const D=R({name:"multilevel_menu_exampleRoleDetail",__name:"detail",setup(M){const s=k(),_=B(),c=$(),i=E(),r=h();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(P,V)=>{const p=z,n=a("ElButton"),d=F,g=a("ElCol"),b=a("ElRow"),v=I,x=C;return w(),S("div",null,[e(d,{title:m(s).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[l(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:m(s).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[l(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[l(" 取消 ")]),_:1})]),_:1})])}}}),L=N(D,[["__scopeId","data-v-1b0554e8"]]);export{L as default};
