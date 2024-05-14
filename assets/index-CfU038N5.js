
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import k from"./index-BrCAtwLp.js";import{f as C,m as c,u as x,r as y,g as b,h as u,o as g,c as B,a as e,w as o,b as d,j as E,k as w,_ as M}from"./index-CTklHSgw.js";import"./index-cmnQJw7N.js";import"./menu-sGXqquFs.js";const z=C({__name:"index",props:c(["id","parentId","modelValue"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:c(["success"],["update:modelValue"]),setup(a,{emit:i}){const s=a,f=i,t=x(a,"modelValue"),n=y(),p=b(()=>s.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}function l(){t.value=!1}return(D,r)=>{const m=u("ElButton"),V=u("ElDrawer");return g(),B("div",null,[e(V,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=v=>t.value=v),title:w(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[d(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[d(" 确定 ")]),_:1})]),default:o(()=>[e(k,E({ref_key:"formRef",ref:n},s),null,16)]),_:1},8,["modelValue","title"])])}}}),R=M(z,[["__scopeId","data-v-b97d21ae"]]);export{R as default};
