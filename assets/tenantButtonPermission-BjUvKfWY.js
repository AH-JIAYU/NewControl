
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as s}from"./tenant_tenantPermission-vTouYyoS.js";import{ag as o,r,g as a}from"./index-CUKb-Uvd.js";const i=o("buttonPermission",()=>{const t=r([]),n=a(async()=>{if(t.value.length)return t.value;const{data:e}=await s.list();return e});return{tenantPermissions:t,getTenantPermissions:n}}),c=i;export{c as u};
