
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-UcsmwxhH.js";import{d as v,k as x,F as B,l as R,r as h,a as n,o as w,b as F,f as e,w as t,g as s,i as c,v as M,E as S,ap as T,ah as y,I as z}from"./index-RnQyqHX0.js";import I from"./index-CUUaUVew.js";import{u as N}from"./useTabbar-CqwIsJDB.js";import"./version-B-qPvC22.js";import"./setting_versionManagement-YRYtU5ai.js";import"./country-QVakc4Mi.js";import"./setting_basisDictionary-e6i0TZLY.js";const $=v({name:"TenantTenantManageDetail",__name:"detail",setup(D){const r=x(),m=B(),_=N(),l=R(),i=h();function u(){i.value.submit().then(()=>{M.emit("get-data-list"),a()})}function p(){a()}function a(){l.settings.tabbar.enable&&l.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"pagesExampleGeneralFormModeList"}):m.push({name:"pagesExampleGeneralFormModeList"})}return(G,L)=>{const f=S,o=n("ElButton"),d=T,g=n("ElCol"),b=n("ElRow"),E=y,C=k;return w(),F("div",null,[e(d,{title:c(r).name==="routerName"?"新增租户":"编辑租户"},{default:t(()=>[e(o,{size:"default",round:"",onClick:a},{icon:t(()=>[e(f,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(E,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(I,{id:c(r).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),O=z($,[["__scopeId","data-v-6c0e7aea"]]);export{O as default};
