
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import k from"./index-DNsnt-_h.js";import{g as C,m as c,u as x,r as y,h as g,i as u,o as w,c as B,a as e,w as o,b as i,k as E,l as b,_ as M}from"./index-AYGfxCO1.js";import"./index-N5KN9hNX.js";import"./menu-DJPPVFB-.js";const z=C({__name:"index",props:c(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:c(["success"],["update:modelValue"]),setup(s,{emit:d}){const a=s,f=d,t=x(s,"modelValue"),n=y(),p=g(()=>a.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}function l(){t.value=!1}return(D,r)=>{const m=u("ElButton"),v=u("ElDrawer");return w(),B("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:b(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[i(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[i(" 确定 ")]),_:1})]),default:o(()=>[e(k,E({ref_key:"formRef",ref:n},a),null,16)]),_:1},8,["modelValue","title"])])}}}),R=M(z,[["__scopeId","data-v-54c8d38e"]]);export{R as default};
