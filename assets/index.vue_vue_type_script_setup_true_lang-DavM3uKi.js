
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_}from"./index.vue_vue_type_script_setup_true_lang-BvInSzNq.js";import{f as B,m as k,u as x,r as z,g as D,h as u,o as c,c as M,i as y,w as e,a as l,b as r,j as V,k as g,l as v}from"./index-qQLkOm5f.js";const N={key:0},O=B({__name:"index",props:k(["id","row","mode"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:k(["success"],["update:modelValue"]),setup(f,{emit:C}){const t=f,b=C,o=x(f,"modelValue"),i=z(),p=D(()=>t.id===""?"新增前置问卷库":"编辑前置问卷库");function a(){i.value.submit().then(()=>{b("success"),m()})}function m(){o.value=!1}return(R,s)=>{const n=u("ElButton"),w=u("ElDialog"),E=u("ElDrawer");return o.value?(c(),M("div",N,[t.mode==="dialog"?(c(),y(w,{key:0,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=d=>o.value=d),title:g(p),width:"80%","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:e(()=>[l(n,{size:"large",onClick:m},{default:e(()=>[r(" 取消 ")]),_:1}),l(n,{type:"primary",size:"large",onClick:a},{default:e(()=>[r(" 确定 ")]),_:1})]),default:e(()=>[l(_,V({ref_key:"formRef",ref:i},t,{onOnSubmit:a}),null,16)]),_:1},8,["modelValue","title"])):t.mode==="drawer"?(c(),y(E,{key:1,modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=d=>o.value=d),title:g(p),size:"80%","close-on-click-modal":!1,"destroy-on-close":""},{footer:e(()=>[l(n,{size:"large",onClick:m},{default:e(()=>[r(" 取消 ")]),_:1}),l(n,{type:"primary",size:"large",onClick:a},{default:e(()=>[r(" 确定 ")]),_:1})]),default:e(()=>[l(_,V({ref_key:"formRef",ref:i},t,{onOnSubmit:a}),null,16)]),_:1},8,["modelValue","title"])):v("",!0)])):v("",!0)}}});export{O as _};
