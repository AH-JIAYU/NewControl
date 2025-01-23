
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as s}from"./tenant_tenantPermission-BNSAB0No.js";import{ae as o,r,c as a}from"./index-BBIE9_do.js";const i=o("buttonPermission",()=>{const t=r([]),e=a(async()=>{if(t.value.length)return t.value;const{data:n}=await s.list();return n});return{tenantPermissions:t,getTenantPermissions:e}}),c=i;export{c as u};
