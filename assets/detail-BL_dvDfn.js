
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-rGT35nlU.js";import{f as x,n as B,I as v,p as R,r as S,h as o,o as h,c as w,a as e,w as t,b as s,k as i,z as T,H as y,ap as z,e as F,_ as M}from"./index-JmadfgZC.js";import H from"./index-B2eSB_zy.js";import{u as I}from"./useTabbar-DgT65qx_.js";import"./tenant_tenantHomepageSetting-CJ08SxDe.js";const N=x({name:"TenantTenantHomepageSettingDetail",__name:"detail",setup($){const l=B(),_=v(),m=I(),r=R(),c=S();function u(){c.value.submit().then(()=>{T.emit("get-data-list"),n()})}function f(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"pagesExampleGeneralFormModeList"}):_.push({name:"pagesExampleGeneralFormModeList"})}return(D,G)=>{const p=y,a=o("ElButton"),d=z,g=o("ElCol"),b=o("ElRow"),C=F,E=k;return h(),w("div",null,[e(d,{title:i(l).name==="routerName"?"新增首页设置":"编辑首页设置"},{default:t(()=>[e(a,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(H,{id:i(l).params.id,ref_key:"formRef",ref:c},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(a,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),q=M(N,[["__scopeId","data-v-fdc7a277"]]);export{q as default};
