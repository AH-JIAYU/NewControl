
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{D as x}from"./index-ChxHLMBK.js";import{d as C,m as u,u as g,r as k,c as y,a as c,o as E,b as M,f as e,w as o,g as d,h as w,i as B,I as b}from"./index-DSVb7hii.js";import"./index-Dqh4wqMb.js";import"./index-5DgMrIKx.js";const D=C({name:"PagesExampleMenuFormMode",__name:"index",props:u(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:u(["success"],["update:modelValue"]),setup(a,{emit:i}){const s=a,f=i,t=g(a,"modelValue"),n=k(),p=y(()=>s.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}function l(){t.value=!1}return(z,r)=>{const m=c("ElButton"),v=c("ElDrawer");return E(),M("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:B(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[d(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[d(" 确定 ")]),_:1})]),default:o(()=>[e(x,w({ref_key:"formRef",ref:n},s),null,16)]),_:1},8,["modelValue","title"])])}}}),P=b(D,[["__scopeId","data-v-3c418d32"]]);export{P as default};
