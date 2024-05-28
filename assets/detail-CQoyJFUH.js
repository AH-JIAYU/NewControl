
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as E}from"./index-3RvriCdG.js";import{g as v,v as B,N as k,x as M,r as R,i as o,o as w,c as S,a as e,w as t,b as s,l as i,D as T,M as h,ap as y,e as D,_ as F}from"./index-zX-UbP25.js";import{D as N}from"./index-BU0z_CG0.js";import{u as z}from"./useTabbar-BxJ-ZlRa.js";const $=v({name:"TenantTenantManageDetail",__name:"detail",setup(G){const l=B(),_=k(),m=z(),r=M(),c=R();function u(){c.value.submit().then(()=>{T.emit("get-data-list"),a()})}function f(){a()}function a(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"pagesExampleGeneralFormModeList"}):_.push({name:"pagesExampleGeneralFormModeList"})}return(I,L)=>{const p=h,n=o("ElButton"),d=y,g=o("ElCol"),b=o("ElRow"),x=D,C=E;return w(),S("div",null,[e(d,{title:i(l).name==="routerName"?"新增租户":"编辑租户"},{default:t(()=>[e(n,{size:"default",round:"",onClick:a},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(x,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(N,{id:i(l).params.id,ref_key:"formRef",ref:c},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:u},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),j=F($,[["__scopeId","data-v-0ca691d9"]]);export{j as default};
