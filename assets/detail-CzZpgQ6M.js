
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as R}from"./index-LcPfEGck.js";import{f as k,s as x,K as B,t as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as c,C as y,J as z,an as N,e as T,_ as $}from"./index-B13k3BKp.js";import D from"./index-Bpk5W3Xa.js";import{u as F}from"./useTabbar-CTRLO9y6.js";import"./setting_role-BIfv9404.js";import"./buttonPermission-vrlrtzvp.js";import"./setting_permissions-Dqj22Ve0.js";const I=k({name:"SettingRoleDetail",__name:"detail",setup(M){const l=x(),_=B(),m=F(),r=E(),i=S();function u(){i.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(P,V)=>{const p=z,n=a("ElButton"),d=N,g=a("ElCol"),b=a("ElRow"),C=T,v=R;return h(),w("div",null,[e(d,{title:c(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(D,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=$(I,[["__scopeId","data-v-698df12c"]]);export{L as default};
