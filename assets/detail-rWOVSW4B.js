
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-D27jlqGU.js";import{f as R,A as k,K as x,B as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as c,H as y,z,an as N,e as T,_ as $}from"./index-ChRZRlQw.js";import A from"./index-BF48hOW2.js";import{u as D}from"./useTabbar-B0W-EfCP.js";import"./setting_role-nKGcpCfw.js";import"./buttonPermission-D4p2t0ci.js";import"./setting_permissions-D_w0ba0R.js";const F=R({name:"SettingRoleDetail",__name:"detail",setup(H){const l=k(),_=x(),m=D(),r=E(),i=S();function u(){i.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(I,M)=>{const p=z,n=a("ElButton"),d=N,g=a("ElCol"),b=a("ElRow"),v=T,B=C;return h(),w("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(A,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=$(F,[["__scopeId","data-v-698df12c"]]);export{L as default};
