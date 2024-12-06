
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-C1Dk4Gu4.js";import{f as x,n as B,I as E,p as R,r as S,h as a,o as h,c as w,a as e,w as t,b as s,k as m,z as P,H as y,ap as z,e as I,_ as N}from"./index-CJp8R_z-.js";import T from"./index-CAAblGLH.js";import{u as $}from"./useTabbar-Dh8Z9pdP.js";import"./index-CZ5lj3NK.js";import"./supplieMenu-CEwDvxQ5.js";const D=x({name:"SettingPermissionsDetail",__name:"detail",setup(F){const l=B(),_=E(),c=$(),i=R(),r=S();function u(){r.value.submit().then(()=>{P.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(H,M)=>{const p=y,o=a("ElButton"),d=z,g=a("ElCol"),b=a("ElRow"),v=I,C=k;return h(),w("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=N(D,[["__scopeId","data-v-55783d9a"]]);export{K as default};
