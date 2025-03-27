
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import C from"./index-DvKlxqUW.js";import{d as k,m as i,r as x,c as y,u as g,a as u,o as w,b as B,f as e,w as o,g as c,h as E,i as b,I as M}from"./index-CcnRRDsH.js";import"./index-H-UkSBWd.js";import"./index-BqutmvQi.js";import"./supplieMenu-BVPY8n9D.js";const z=k({__name:"index",props:i(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:i(["success"],["update:modelValue"]),setup(a,{emit:d}){const s=a,f=d,n=x(),p=y(()=>s.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}const t=g(a,"modelValue");function l(){t.value=!1}return(D,r)=>{const m=u("ElButton"),v=u("ElDrawer");return w(),B("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:b(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[c(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[c(" 确定 ")]),_:1})]),default:o(()=>[e(C,E({ref_key:"formRef",ref:n},s),null,16)]),_:1},8,["modelValue","title"])])}}}),L=M(z,[["__scopeId","data-v-ffdea393"]]);export{L as default};
