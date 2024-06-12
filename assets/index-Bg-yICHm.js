
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import k from"./index-BwAcYbNr.js";import{f as C,m as u,r as x,g as y,u as g,h as c,o as w,c as B,a as e,w as o,b as i,j as E,k as b,_ as M}from"./index-Bp4Fvijc.js";import"./index-C63Ompon.js";import"./index-IkvfwJz_.js";import"./tenantMenu-YQOH6Skn.js";const z=C({__name:"index",props:u(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:u(["success"],["update:modelValue"]),setup(s,{emit:d}){const a=s,f=d,n=x(),p=y(()=>a.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}const t=g(s,"modelValue");function l(){t.value=!1}return(D,r)=>{const m=c("ElButton"),v=c("ElDrawer");return w(),B("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:b(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[i(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[i(" 确定 ")]),_:1})]),default:o(()=>[e(k,E({ref_key:"formRef",ref:n},a),null,16)]),_:1},8,["modelValue","title"])])}}}),j=M(z,[["__scopeId","data-v-2e721223"]]);export{j as default};
