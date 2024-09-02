
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-C4yUwp4s.js";import{f as R,n as k,I as B,p as E,r as h,h as a,o as w,c as S,a as e,w as t,b as l,k as i,z as y,H as z,ap as I,e as N,_ as T}from"./index-DCn4g2j_.js";import $ from"./index-CTDD0IN0.js";import{u as D}from"./useTabbar-Cz-ll743.js";import"./setting_role-CLiL_99b.js";import"./buttonPermission-CkZrbu6W.js";import"./setting_permissions-CD6qf-iX.js";const F=R({name:"multilevel_menu_exampleRoleDetail",__name:"detail",setup(H){const s=k(),m=B(),c=D(),r=E(),_=h();function u(){_.value.submit().then(()=>{y.emit("get-data-list"),o()})}function p(){o()}function o(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_exampleRole"}):m.push({name:"multilevel_menu_exampleRole"})}return(M,P)=>{const f=z,n=a("ElButton"),d=I,b=a("ElCol"),g=a("ElRow"),v=N,x=C;return w(),S("div",null,[e(d,{title:i(s).name==="routerName"?"新增角色管理":"编辑角色管理"},{default:t(()=>[e(n,{size:"default",round:"",onClick:o},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[l(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(g,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e($,{id:i(s).params.id,ref_key:"formRef",ref:_},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[l(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[l(" 取消 ")]),_:1})]),_:1})])}}}),L=T(F,[["__scopeId","data-v-1b0554e8"]]);export{L as default};
