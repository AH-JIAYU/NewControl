
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import _ from"./index-BMfrdmeT.js";import{f as B,m as k,u as b,r as x,g as z,h as i,o as u,c as D,i as y,w as e,a as o,b as n,j as V,k as g,l as M}from"./index-b9-Qwvd3.js";const h=B({__name:"index",props:k(["mode","id","menulev"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:k(["success"],["update:modelValue"]),setup(c,{emit:v}){const l=c,C=v,t=b(c,"modelValue"),r=x(),f=z(()=>l.id===""?"新增权限管理":"编辑权限管理");function p(){r.value.submit().then(()=>{C("success"),m()})}function m(){t.value=!1}return(N,a)=>{const s=i("ElButton"),E=i("ElDialog"),w=i("ElDrawer");return u(),D("div",null,[l.mode==="dialog"?(u(),y(E,{key:0,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=d=>t.value=d),title:g(f),width:"60%","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:e(()=>[o(s,{size:"large",onClick:m},{default:e(()=>[n(" 取消 ")]),_:1}),o(s,{type:"primary",size:"large",onClick:p},{default:e(()=>[n(" 确定 ")]),_:1})]),default:e(()=>[o(_,V({ref_key:"formRef",ref:r},l),null,16)]),_:1},8,["modelValue","title"])):l.mode==="drawer"?(u(),y(w,{key:1,modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=d=>t.value=d),title:g(f),size:"60%","close-on-click-modal":!1,"destroy-on-close":""},{footer:e(()=>[o(s,{size:"large",onClick:m},{default:e(()=>[n(" 取消 ")]),_:1}),o(s,{type:"primary",size:"large",onClick:p},{default:e(()=>[n(" 确定 ")]),_:1})]),default:e(()=>[o(_,V({ref_key:"formRef",ref:r},l),null,16)]),_:1},8,["modelValue","title"])):M("",!0)])}}});export{h as _};
