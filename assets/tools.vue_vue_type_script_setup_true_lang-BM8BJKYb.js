
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import d from"./index-B9cflRWU.js";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-BTxhFK-a.js";import{_ as g}from"./index.vue_vue_type_script_setup_true_lang-DyMhG-sF.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-dY-k_wLU.js";import x from"./index-DKqrkON0.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-C_DIjjzx.js";import C from"./index-DxzkynvH.js";import y from"./index-BmuwIklN.js";import{f as S,B,g as k,o as f,c as _,a2 as E,k as l,a1 as p,i as R,aC as T,l as U}from"./index-DliMWqTD.js";const $=/\d/,F=["-","_","/","."];function L(e=""){if(!$.test(e))return e!==e.toLowerCase()}function N(e,r){const a=r??F,n=[];if(!e||typeof e!="string")return n;let t="",s,i;for(const o of e){const u=a.includes(o);if(u===!0){n.push(t),t="",s=void 0;continue}const c=L(o);if(i===!1){if(s===!1&&c===!0){n.push(t),t=o,s=c;continue}if(s===!0&&c===!1&&t.length>1){const m=t.at(-1);n.push(t.slice(0,Math.max(0,t.length-1))),t=m+o,s=c;continue}}t+=o,s=c,i=u}return n.push(t),n}function A(e){return e?e[0].toUpperCase()+e.slice(1):""}function I(e,r){return e?(Array.isArray(e)?e:N(e)).map(a=>A(r!=null&&r.normalize?a.toLowerCase():a)).join(""):""}const q=S({name:"ToolbarTools",__name:"tools",props:{mode:{}},setup(e){const r=e,a=Object.assign({"./Breadcrumb/index.vue":d,"./ColorScheme/index.vue":v,"./Favorites/index.vue":g,"./Fullscreen/index.vue":h,"./I18n/index.vue":x,"./NavSearch/index.vue":b,"./Notification/index.vue":C,"./PageReload/index.vue":y}),n=B(),t=k(()=>{const s=n.settings.toolbar.layout.findIndex(o=>o==="->"),i=[];return r.mode==="left-side"?n.settings.toolbar.layout.forEach((o,u)=>{u<s&&o!=="->"&&i.push(o)}):n.settings.toolbar.layout.forEach((o,u)=>{u>s&&o!=="->"&&i.push(o)}),i});return(s,i)=>(f(!0),_(p,null,E(l(t),o=>(f(),_(p,{key:o},[l(n).settings.toolbar[o]?(f(),R(T(l(a)[`./${l(I)(o)}/index.vue`]),{key:0})):U("",!0)],64))),128))}});export{q as _};
