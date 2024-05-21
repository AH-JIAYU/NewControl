
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import k from"./index-DTDxyqeJ.js";import{g as C,m as i,u as x,r as g,h as y,i as u,o as B,c as E,a as e,w as o,b as c,k as b,l as w,_ as M}from"./index-AYGfxCO1.js";import"./index-N5KN9hNX.js";import"./menu-DJPPVFB-.js";import"./useTabbar-DUjf25Ea.js";const z=C({__name:"index",props:i(["id","parentId","modelValue"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:i(["success"],["update:modelValue"]),setup(s,{emit:d}){const a=s,f=d,t=x(s,"modelValue"),n=g(),p=y(()=>a.id===""?"新增角色":"编辑角色");function _(){n.value.submit().then(()=>{f("success"),l()})}function l(){t.value=!1}return(D,r)=>{const m=u("ElButton"),V=u("ElDrawer");return B(),E("div",null,[e(V,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=v=>t.value=v),title:w(p),size:"60%","close-on-click-modal":!1,"destroy-on-close":"",onClose:l},{footer:o(()=>[e(m,{size:"large",onClick:l},{default:o(()=>[c(" 取消 ")]),_:1}),e(m,{type:"primary",size:"large",onClick:_},{default:o(()=>[c(" 确定 ")]),_:1})]),default:o(()=>[e(k,b({ref_key:"formRef",ref:n},a),null,16)]),_:1},8,["modelValue","title"])])}}}),P=M(z,[["__scopeId","data-v-d7977855"]]);export{P as default};
