
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-BMOB6Bmh.js";import{f as x,n as B,I as v,p as R,r as h,h as o,o as w,c as M,a as e,w as t,b as s,k as c,z as S,H as T,ap as y,e as z,_ as F}from"./index-tFO6bl5n.js";import{D}from"./index-DvvVfXg8.js";import{u as I}from"./useTabbar-De_pQ9o5.js";import"./country-T6ptPD3I.js";import"./setting_basisDictionary-CGbrRQFJ.js";import"./setting_versionManagement-BtboSsKQ.js";const N=x({name:"TenantTenantManageDetail",__name:"detail",setup($){const r=B(),m=v(),_=I(),l=R(),i=h();function u(){i.value.submit().then(()=>{S.emit("get-data-list"),a()})}function p(){a()}function a(){l.settings.tabbar.enable&&l.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"pagesExampleGeneralFormModeList"}):m.push({name:"pagesExampleGeneralFormModeList"})}return(G,H)=>{const f=T,n=o("ElButton"),d=y,g=o("ElCol"),b=o("ElRow"),C=z,E=k;return w(),M("div",null,[e(d,{title:c(r).name==="routerName"?"新增租户":"编辑租户"},{default:t(()=>[e(n,{size:"default",round:"",onClick:a},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(D,{id:c(r).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),K=F(N,[["__scopeId","data-v-43a2ab92"]]);export{K as default};
