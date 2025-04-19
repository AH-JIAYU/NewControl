
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import C from"./index-DewcaRFR.js";import{d as k,m as d,r as x,c as y,u as g,a as i,o as w,b as B,f as e,w as o,g as u,h as E,i as b,I as M}from"./index-Cgn_EQxF.js";import"./index-BVvqHxXN.js";import"./index-jhMmeHgb.js";import"./tenant_vip_menu-YpGqvb-T.js";const z=k({__name:"index",props:d(["id","parentId","modelValue","menuLevel","row"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:d(["success"],["update:modelValue"]),setup(s,{emit:c}){const a=s,f=c,n=x(),p=y(()=>a.id===""?"新增角色":"编辑角色");async function _(){n.value.submit().then(()=>{f("success"),l()})}const t=g(s,"modelValue");function l(){t.value=!1}return(D,r)=>{const m=i("ElButton"),v=i("ElDrawer");return w(),B("div",null,[e(v,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=V=>t.value=V),title:b(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[u(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[u(" 确定 ")]),_:1})]),default:o(()=>[e(C,E({ref_key:"formRef",ref:n},a),null,16)]),_:1},8,["modelValue","title"])])}}}),L=M(z,[["__scopeId","data-v-d33fef9d"]]);export{L as default};
