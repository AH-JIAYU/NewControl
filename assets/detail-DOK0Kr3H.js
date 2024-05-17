
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-BkpAMAuq.js";import{f as x,z as B,J as E,A as R,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as m,G as y,y as P,an as z,e as N,_ as T}from"./index-DR6yxu20.js";import $ from"./index-D8xotAHx.js";import{u as A}from"./useTabbar-M6tPutko.js";import"./index-BwBfEZqU.js";import"./setting_permissions-XKKZqIzY.js";const D=x({name:"SettingPermissionsDetail",__name:"detail",setup(F){const l=B(),_=E(),c=A(),i=R(),r=S();function u(){r.value.submit().then(()=>{y.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(I,M)=>{const p=P,o=a("ElButton"),d=z,b=a("ElCol"),g=a("ElRow"),v=N,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(g,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e($,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=T(D,[["__scopeId","data-v-4beffb8d"]]);export{K as default};
