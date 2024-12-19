
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{af as e,ae as s,r as a,c as r}from"./index-C0vqyojX.js";import{a as i}from"./setting_versionManagement-C9mLZo8V.js";const l={list:t=>e.post("tenant-control/getTenant",t),create:t=>e.post("tenant-control/insertTenant",t),edit:t=>e.post("tenant-control/updateTenantStatus",t),export:t=>e.post("tenant-control/exportTenantList",t,{responseType:"blob"}),reset:t=>e.post("tenant-user/resetPassword",t)},p=s("version",()=>{const t=a([]),n=r(async()=>{if(t.value.length)return t.value;const{data:o}=await i.list();return o});return{versionMenu:t,getVersion:n}}),d=p;export{l as a,d as u};
