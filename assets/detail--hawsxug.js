
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-PT9kEZcl.js";import{f as k,D as B,J as E,y as R,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as m,z as y,x as P,an as z,e as D,_ as N}from"./index-b9-Qwvd3.js";import T from"./index-BMfrdmeT.js";import{u as $}from"./useTabbar-CR34tQS_.js";import"./sortable.esm-BS5toX6s.js";import"./setting_permissions-Dq6cERzx.js";import"./menu-BEWG5_yh.js";const F=k({name:"SettingPermissionsDetail",__name:"detail",setup(I){const l=B(),_=E(),c=$(),i=R(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(M,V)=>{const p=P,o=a("ElButton"),d=z,b=a("ElCol"),g=a("ElRow"),v=D,x=C;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(g,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),L=N(F,[["__scopeId","data-v-4beffb8d"]]);export{L as default};
