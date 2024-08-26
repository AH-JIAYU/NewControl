
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{D as k}from"./index-CwO_FjNI.js";import{f as C,m as c,r as x,g as y,u as b,h as u,o as g,c as w,a as e,w as o,b as i,j as B,k as E,_ as D}from"./index-DiP3VL_3.js";import"./index-AF4IsacA.js";import"./index-BCVuiJoY.js";const M=C({__name:"index",props:c(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:c(["success"],["update:modelValue"]),setup(a,{emit:d}){const s=a,f=d,n=x(),p=y(()=>s.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}const t=b(a,"modelValue");function l(){t.value=!1}return(z,r)=>{const m=u("ElButton"),v=u("ElDrawer");return g(),w("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:E(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[i(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[i(" 确定 ")]),_:1})]),default:o(()=>[e(k,B({ref_key:"formRef",ref:n},s),null,16)]),_:1},8,["modelValue","title"])])}}}),R=D(M,[["__scopeId","data-v-b7caf439"]]);export{R as default};
