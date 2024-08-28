
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{D as k}from"./index-SvK2NtNT.js";import{f as x,m as u,u as C,r as g,g as y,h as c,o as E,c as M,a as e,w as o,b as d,j as w,k as B,_ as b}from"./index-CUpiA7PJ.js";import"./index-DXisLo13.js";import"./index-DkP_mTY7.js";const D=x({name:"PagesExampleMenuFormMode",__name:"index",props:u(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:u(["success"],["update:modelValue"]),setup(a,{emit:i}){const s=a,f=i,t=C(a,"modelValue"),n=g(),p=y(()=>s.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}function l(){t.value=!1}return(z,r)=>{const m=c("ElButton"),v=c("ElDrawer");return E(),M("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:B(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[d(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[d(" 确定 ")]),_:1})]),default:o(()=>[e(k,w({ref_key:"formRef",ref:n},s),null,16)]),_:1},8,["modelValue","title"])])}}}),P=b(D,[["__scopeId","data-v-3c418d32"]]);export{P as default};
