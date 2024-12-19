
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as o}from"./setting_basisDictionary-CnZkWQGG.js";import{ae as n,r as a,c as s}from"./index-BTP43HjK.js";const u=n("tenantMenu",()=>{const t=a([]),e=s(async()=>{if(t.value.length)return t.value;const{data:r}=await o.itemList({page:1,limit:-1,id:32});return r.records});return{country:t,getCountry:e}}),m=u;export{m as u};
