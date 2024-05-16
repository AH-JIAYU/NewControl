
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as R}from"./index-DaC72X9e.js";import{f as k,z as x,J as B,A as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as c,G as y,y as z,an as N,e as T,_ as $}from"./index-Bfo1XFaq.js";import A from"./index-B7zX_lS-.js";import{u as D}from"./useTabbar-D5RiH4_Q.js";import"./setting_role-Cyya1FWj.js";import"./menu-CzCPBqVa.js";import"./setting_permissions-E_ahAHzo.js";const F=k({name:"SettingRoleDetail",__name:"detail",setup(I){const l=x(),_=B(),m=D(),r=E(),i=S();function u(){i.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(M,P)=>{const p=z,n=a("ElButton"),d=N,g=a("ElCol"),b=a("ElRow"),v=T,C=R;return h(),w("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(A,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=$(F,[["__scopeId","data-v-fd4e7cba"]]);export{L as default};
