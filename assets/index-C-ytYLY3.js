
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import C from"./index-DUYUsQ7F.js";import{d as k,m as c,r as x,c as y,u as b,a as i,o as g,b as w,f as e,w as o,g as u,h as B,i as E,I as M}from"./index-DE7GWU9V.js";import"./index-BPTUwEOk.js";import"./index-C3HoIohj.js";import"./tenant_vip_menu-i8X1Mi0v.js";const z=k({__name:"index",props:c(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:c(["success"],["update:modelValue"]),setup(a,{emit:d}){const s=a,f=d,n=x(),p=y(()=>s.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}const t=b(a,"modelValue");function l(){t.value=!1}return(D,r)=>{const m=i("ElButton"),v=i("ElDrawer");return g(),w("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:E(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[u(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[u(" 确定 ")]),_:1})]),default:o(()=>[e(C,B({ref_key:"formRef",ref:n},s),null,16)]),_:1},8,["modelValue","title"])])}}}),L=M(z,[["__scopeId","data-v-b7caf439"]]);export{L as default};
