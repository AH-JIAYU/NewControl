
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as o}from"./setting_basisDictionary-BlA3Q6ul.js";import{ag as n,r as a,g as s}from"./index-DCn4g2j_.js";const u=n("tenantMenu",()=>{const t=a([]),r=s(async()=>{if(t.value.length)return t.value;const{data:e}=await o.itemList({page:1,limit:-1,id:32});return e.records});return{country:t,getCountry:r}}),m=u;export{m as u};
