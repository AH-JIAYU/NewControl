
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{D as _}from"./index-CkpWNzw4.js";import{f as w,m as k,u as B,r as D,g as b,h as m,o as u,c as z,i as y,w as e,a as o,b as n,j as V,k as g,l as M}from"./index-B13k3BKp.js";const h=w({__name:"index",props:k({mode:{},id:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:k(["success"],["update:modelValue"]),setup(c,{emit:v}){const l=c,C=v,t=B(c,"modelValue"),r=D(),f=b(()=>l.id===""?"新增基础字典":"编辑基础字典");function p(){r.value.submit().then(()=>{C("success"),d()})}function d(){t.value=!1}return(N,a)=>{const s=m("ElButton"),x=m("ElDialog"),E=m("ElDrawer");return u(),z("div",null,[l.mode==="dialog"?(u(),y(x,{key:0,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),title:g(f),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:e(()=>[o(s,{size:"large",onClick:d},{default:e(()=>[n(" 取消 ")]),_:1}),o(s,{type:"primary",size:"large",onClick:p},{default:e(()=>[n(" 确定 ")]),_:1})]),default:e(()=>[o(_,V({ref_key:"formRef",ref:r},l),null,16)]),_:1},8,["modelValue","title"])):l.mode==="drawer"?(u(),y(E,{key:1,modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=i=>t.value=i),title:g(f),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:e(()=>[o(s,{size:"large",onClick:d},{default:e(()=>[n(" 取消 ")]),_:1}),o(s,{type:"primary",size:"large",onClick:p},{default:e(()=>[n(" 确定 ")]),_:1})]),default:e(()=>[o(_,V({ref_key:"formRef",ref:r},l),null,16)]),_:1},8,["modelValue","title"])):M("",!0)])}}});export{h as _};
