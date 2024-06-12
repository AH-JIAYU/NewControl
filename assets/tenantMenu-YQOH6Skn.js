
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{ah as t,ag as u,r as s,g as o}from"./index-Bp4Fvijc.js";const r={list:e=>t.post("/tenant-menu/get/getMenuList",e),create:e=>t.post("/tenant-menu/insert/insertMenu",e),edit:e=>t.post("/tenant-menu/update/updateMenu",e),delete:e=>t.post("/tenant-menu/delete/deleteMenu",e)},i=u("tenantMenu",()=>{const e=s([]),n=o(async()=>{if(e.value.length)return e.value;const{data:a}=await r.list({type:"normal"});return a});return{tenantMenu:e,gettenantMenu:n}}),M=i;export{r as a,M as u};
