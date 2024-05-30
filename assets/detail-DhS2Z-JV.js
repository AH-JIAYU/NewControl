
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as x}from"./index-GffOivhM.js";import{g as B,p as k,J as v,q as R,r as w,i as o,o as M,c as S,a as e,w as t,b as s,l as i,A as T,I as h,ap as y,e as F,_ as z}from"./index-0FEud4J9.js";import{D}from"./index-CehR8Y3T.js";import{u as I}from"./useTabbar-DFHmRv3x.js";const N=B({name:"TenantTenantManageDetail",__name:"detail",setup($){const l=k(),_=v(),m=I(),r=R(),c=w();function u(){c.value.submit().then(()=>{T.emit("get-data-list"),a()})}function f(){a()}function a(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"pagesExampleGeneralFormModeList"}):_.push({name:"pagesExampleGeneralFormModeList"})}return(A,G)=>{const p=h,n=o("ElButton"),d=y,g=o("ElCol"),b=o("ElRow"),C=F,E=x;return M(),S("div",null,[e(d,{title:i(l).name==="routerName"?"新增租户":"编辑租户"},{default:t(()=>[e(n,{size:"default",round:"",onClick:a},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(D,{id:i(l).params.id,ref_key:"formRef",ref:c},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),H=z(N,[["__scopeId","data-v-0ca691d9"]]);export{H as default};
