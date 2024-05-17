
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import k from"./index-CZvvMwIB.js";import{f as C,m as c,u as b,r as x,g,h as u,o as y,c as B,a as e,w as o,b as i,j as E,k as w,_ as M}from"./index-DliMWqTD.js";import"./menu-BuXABFQe.js";import"./useTabbar-Cl3ye03o.js";const z=C({__name:"index",props:c(["id","parentId","modelValue"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:c(["success"],["update:modelValue"]),setup(s,{emit:d}){const a=s,f=d,t=b(s,"modelValue"),n=x(),p=g(()=>a.id===""?"新增角色":"编辑角色");function _(){n.value.submit().then(()=>{f("success"),l()})}function l(){t.value=!1}return(D,r)=>{const m=u("ElButton"),V=u("ElDrawer");return y(),B("div",null,[e(V,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=v=>t.value=v),title:w(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[i(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[i(" 确定 ")]),_:1})]),default:o(()=>[e(k,E({ref_key:"formRef",ref:n},a),null,16)]),_:1},8,["modelValue","title"])])}}}),R=M(z,[["__scopeId","data-v-4b9f1b3c"]]);export{R as default};
