
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-3DaWwqQ6.js";import{f as R,D as k,J as B,y as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as i,z as y,x as z,an as D,e as N,_ as T}from"./index-CeJVNZ3l.js";import{D as $}from"./index-D1uQ1teX.js";import{u as F}from"./useTabbar-BxdI1NEH.js";import"./menu-CrKF0d3b.js";import"./setting_permissions-DUgtDp94.js";const I=R({name:"SettingRoleDetail",__name:"detail",setup(M){const l=k(),_=B(),m=F(),r=E(),c=S();function u(){c.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(P,V)=>{const p=z,n=a("ElButton"),d=D,g=a("ElCol"),b=a("ElRow"),v=N,x=C;return h(),w("div",null,[e(d,{title:i(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e($,{id:i(l).params.id,ref_key:"formRef",ref:c},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=T(I,[["__scopeId","data-v-fd4e7cba"]]);export{K as default};
