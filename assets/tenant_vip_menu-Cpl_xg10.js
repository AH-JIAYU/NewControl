
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{af as t,ae as s,r as a,c as r}from"./index-CS0OZ-B6.js";const o={list:e=>t.post("member-menu/getMenuList",e),create:e=>t.post("member-menu/insertMenu",e),edit:e=>t.post("member-menu/updateMenu",e),delete:e=>t.post("member-menu/deleteMenu",e)},i=s("tenantVipMenu",()=>{const e=a([]),n=r(async()=>{if(e.value.length)return e.value;const{data:u}=await o.list({type:"normal"});return u});return{vipMenu:e,getvipMenu:n}}),p=i;export{o as a,p as u};
