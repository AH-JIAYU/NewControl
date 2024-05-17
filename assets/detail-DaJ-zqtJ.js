
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as R}from"./index-BkpAMAuq.js";import{f as k,z as x,J as B,A as E,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as i,G as y,y as z,an as N,e as T,_ as $}from"./index-DR6yxu20.js";import A from"./index-DsSNTXZv.js";import{u as D}from"./useTabbar-M6tPutko.js";import"./setting_role-5zZdImod.js";import"./setting_permissions-XKKZqIzY.js";const F=k({name:"SettingRoleDetail",__name:"detail",setup(I){const l=x(),_=B(),m=D(),r=E(),c=S();function u(){c.value.submit().then(()=>{y.emit("get-data-list"),o()})}function f(){o()}function o(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"multilevel_menu_exampleRole"}):_.push({name:"multilevel_menu_exampleRole"})}return(M,P)=>{const p=z,n=a("ElButton"),d=N,g=a("ElCol"),b=a("ElRow"),v=T,C=R;return h(),w("div",null,[e(d,{title:i(l).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(A,{id:i(l).params.id,ref_key:"formRef",ref:c},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=$(F,[["__scopeId","data-v-fd4e7cba"]]);export{K as default};
