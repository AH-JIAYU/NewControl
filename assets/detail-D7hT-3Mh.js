
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as C}from"./index-BpVD9fMu.js";import{f as k,n as B,I as E,p as R,r as h,h as a,o as w,c as P,a as e,w as t,b as s,k as m,z as S,H as y,ap as z,e as I,_ as N}from"./index-DuFrpP8D.js";import T from"./index-D02tclBJ.js";import{u as $}from"./useTabbar-e_l9Pya-.js";import"./index-B7F5U7E6.js";import"./setting_permissions-CY7nJBqA.js";const D=k({name:"multilevel_menu_examplePermissionsDetail",__name:"detail",setup(F){const l=B(),_=E(),c=$(),i=R(),r=h();function u(){r.value.submit().then(()=>{S.emit("get-data-list"),n()})}function f(){n()}function n(){i.settings.tabbar.enable&&i.settings.tabbar.mergeTabsBy!=="activeMenu"?c.close({name:"multilevel_menu_examplePermissions"}):_.push({name:"multilevel_menu_examplePermissions"})}return(H,M)=>{const p=y,o=a("ElButton"),d=z,b=a("ElCol"),g=a("ElRow"),v=I,x=C;return w(),P("div",null,[e(d,{title:m(l).name==="routerName"?"新增权限管理":"编辑权限管理"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e(g,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(T,{id:m(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=N(D,[["__scopeId","data-v-6b3b0109"]]);export{K as default};
