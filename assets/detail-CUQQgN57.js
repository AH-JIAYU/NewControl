
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-BPWBuFQG.js";import{d as v,k as x,F as B,l as R,r as S,a as o,o as h,b as w,f as e,w as t,g as s,i as c,v as F,E as T,ap as y,ah as M,I as z}from"./index-BBIE9_do.js";import I from"./index-BW_Nspht.js";import{u as N}from"./useTabbar-tpkf9QCE.js";import"./tenant_tenantHomepageSetting-C8ia1kjy.js";const $=v({name:"TenantTenantHomepageSettingDetail",__name:"detail",setup(D){const l=x(),m=B(),_=N(),r=R(),i=S();function u(){i.value.submit().then(()=>{F.emit("get-data-list"),a()})}function f(){a()}function a(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"pagesExampleGeneralFormModeList"}):m.push({name:"pagesExampleGeneralFormModeList"})}return(G,H)=>{const p=T,n=o("ElButton"),d=y,g=o("ElCol"),b=o("ElRow"),E=M,C=k;return h(),w("div",null,[e(d,{title:c(l).name==="routerName"?"新增首页设置":"编辑首页设置"},{default:t(()=>[e(n,{size:"default",round:"",onClick:a},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(E,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(I,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),q=z($,[["__scopeId","data-v-fdc7a277"]]);export{q as default};
