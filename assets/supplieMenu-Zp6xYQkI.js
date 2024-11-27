
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{ah as t,ag as n,r as p,g as a}from"./index-zM2lJBAI.js";const r={list:e=>t.post("supplier-menu/getMenuList",e),create:e=>t.post("supplier-menu/insertMenu",e),edit:e=>t.post("supplier-menu/updateMenu",e),delete:e=>t.post("supplier-menu/deleteMenu",e)},i=n("supplieMenu",()=>{const e=p([]),u=a(async()=>{if(e.value.length)return e.value;const{data:s}=await r.list({type:"normal"});return s});return{supplieMenu:e,getsupplieMenu:u}}),l=i;export{r as a,l as u};
