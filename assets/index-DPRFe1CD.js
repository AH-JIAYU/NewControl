
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import k from"./index-Bxq9E1is.js";import{f as C,m as u,u as x,r as g,g as y,h as c,o as B,c as E,a as e,w as o,b as d,j as b,k as w,_ as M}from"./index-B13k3BKp.js";import"./menu-tDEsZBM6.js";import"./useTabbar-CTRLO9y6.js";const z=C({__name:"index",props:u(["id","parentId","modelValue"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:u(["success"],["update:modelValue"]),setup(s,{emit:i}){const a=s,f=i,t=x(s,"modelValue"),n=g(),p=y(()=>a.id===""?"新增角色":"编辑角色");function _(){n.value.submit().then(()=>{f("success"),l()})}function l(){t.value=!1}return(D,r)=>{const m=c("ElButton"),V=c("ElDrawer");return B(),E("div",null,[e(V,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=v=>t.value=v),title:w(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[d(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[d(" 确定 ")]),_:1})]),default:o(()=>[e(k,b({ref_key:"formRef",ref:n},a),null,16)]),_:1},8,["modelValue","title"])])}}}),R=M(z,[["__scopeId","data-v-d7977855"]]);export{R as default};
