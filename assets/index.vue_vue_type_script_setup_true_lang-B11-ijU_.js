
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_}from"./index.vue_vue_type_script_setup_true_lang-mXnKaHjb.js";import{d as B,m as k,u as x,r as z,c as D,a as u,o as c,b as M,e as y,w as e,f as l,g as r,h as V,i as g,j as v}from"./index-CS0OZ-B6.js";const N={key:0},O=B({__name:"index",props:k(["id","row","mode"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:k(["success"],["update:modelValue"]),setup(f,{emit:C}){const t=f,b=C,o=x(f,"modelValue"),i=z(),p=D(()=>t.id===""?"新增前置问卷库":"编辑前置问卷库");function a(){i.value.submit().then(()=>{b("success"),d()})}function d(){o.value=!1}return(R,s)=>{const n=u("ElButton"),w=u("ElDialog"),E=u("ElDrawer");return o.value?(c(),M("div",N,[t.mode==="dialog"?(c(),y(w,{key:0,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=m=>o.value=m),title:g(p),width:"80%","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:e(()=>[l(n,{size:"large",onClick:d},{default:e(()=>[r(" 取消 ")]),_:1}),l(n,{type:"primary",size:"large",onClick:a},{default:e(()=>[r(" 确定 ")]),_:1})]),default:e(()=>[l(_,V({ref_key:"formRef",ref:i},t,{onOnSubmit:a}),null,16)]),_:1},8,["modelValue","title"])):t.mode==="drawer"?(c(),y(E,{key:1,modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=m=>o.value=m),title:g(p),size:"80%","close-on-click-modal":!1,"destroy-on-close":""},{footer:e(()=>[l(n,{size:"large",onClick:d},{default:e(()=>[r(" 取消 ")]),_:1}),l(n,{type:"primary",size:"large",onClick:a},{default:e(()=>[r(" 确定 ")]),_:1})]),default:e(()=>[l(_,V({ref_key:"formRef",ref:i},t,{onOnSubmit:a}),null,16)]),_:1},8,["modelValue","title"])):v("",!0)])):v("",!0)}}});export{O as _};
