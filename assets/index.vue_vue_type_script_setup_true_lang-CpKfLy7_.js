
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import _ from"./index-CE_mB419.js";import{d as C,m as E,u as w,r as B,c as x,a as m,o as i,b as z,e as k,w as e,f as o,g as r,h as y,i as V,j as D}from"./index-BTP43HjK.js";const R=C({__name:"index",props:E(["mode","id","auths","menulev"],{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(u){const l=u,t=w(u,"modelValue"),f=B(),c=x(()=>l.id===""?"新增权限管理":"编辑权限管理");function p(){s()}function s(){t.value=!1}return(b,a)=>{const n=m("ElButton"),g=m("ElDialog"),v=m("ElDrawer");return i(),z("div",null,[l.mode==="dialog"?(i(),k(g,{key:0,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=d=>t.value=d),title:V(c),width:"60%","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:e(()=>[o(n,{size:"large",onClick:s},{default:e(()=>[r(" 取消 ")]),_:1}),o(n,{type:"primary",size:"large",onClick:p},{default:e(()=>[r(" 确定 ")]),_:1})]),default:e(()=>[o(_,y({ref_key:"formRef",ref:f},l),null,16)]),_:1},8,["modelValue","title"])):l.mode==="drawer"?(i(),k(v,{key:1,modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=d=>t.value=d),title:V(c),size:"60%","close-on-click-modal":!1,"destroy-on-close":""},{footer:e(()=>[o(n,{size:"large",onClick:s},{default:e(()=>[r(" 取消 ")]),_:1}),o(n,{type:"primary",size:"large",onClick:p},{default:e(()=>[r(" 确定 ")]),_:1})]),default:e(()=>[o(_,y({ref_key:"formRef",ref:f},l),null,16)]),_:1},8,["modelValue","title"])):D("",!0)])}}});export{R as _};
