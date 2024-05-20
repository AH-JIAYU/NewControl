
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as r}from"./setting_permissions-C5sdRSil.js";import{p as o,r as n,h as i}from"./index-DsJuNEqK.js";const a=o("buttonPermission",()=>{const t=n([]),s=i(async()=>{if(t.value.length)return t.value;const{data:e}=await r.list();return e});return{permissions:t,getPermissions:s}}),c=a;export{c as u};
