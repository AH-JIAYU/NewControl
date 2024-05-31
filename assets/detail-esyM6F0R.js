
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-BAjnv4t0.js";import{f as x,n as B,I as v,p as R,r as h,h as o,o as w,c as M,a as e,w as t,b as s,k as i,z as S,H as T,ap as y,e as z,_ as F}from"./index-DANQ2mS2.js";import{D}from"./index-CBUldg3S.js";import{u as I}from"./useTabbar-BDQ0uMbM.js";const N=x({name:"TenantTenantManageDetail",__name:"detail",setup($){const l=B(),_=v(),m=I(),r=R(),c=h();function u(){c.value.submit().then(()=>{S.emit("get-data-list"),a()})}function f(){a()}function a(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"pagesExampleGeneralFormModeList"}):_.push({name:"pagesExampleGeneralFormModeList"})}return(G,H)=>{const p=T,n=o("ElButton"),d=y,g=o("ElCol"),b=o("ElRow"),C=z,E=k;return w(),M("div",null,[e(d,{title:i(l).name==="routerName"?"新增租户":"编辑租户"},{default:t(()=>[e(n,{size:"default",round:"",onClick:a},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(D,{id:i(l).params.id,ref_key:"formRef",ref:c},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),j=F(N,[["__scopeId","data-v-0ca691d9"]]);export{j as default};
