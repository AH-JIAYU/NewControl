
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{D as C}from"./index--jGDTuMy.js";import{d as k,m as u,r as x,c as y,u as g,a as c,o as w,b as B,f as e,w as o,g as d,h as E,i as b,I as D}from"./index-DCNrAvYe.js";import"./index-Bwb6Iab-.js";import"./index-BznLheGu.js";const M=k({__name:"index",props:u(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:u(["success"],["update:modelValue"]),setup(s,{emit:i}){const a=s,f=i,n=x(),p=y(()=>a.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}const t=g(s,"modelValue");function l(){t.value=!1}return(z,r)=>{const m=c("ElButton"),v=c("ElDrawer");return w(),B("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:b(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[d(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[d(" 确定 ")]),_:1})]),default:o(()=>[e(C,E({ref_key:"formRef",ref:n},a),null,16)]),_:1},8,["modelValue","title"])])}}}),R=D(M,[["__scopeId","data-v-7313e0d7"]]);export{R as default};
