
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as u,m as n,u as m,Y as b,o as a,c as t,a0 as o,a1 as p,M as _,i as f,b as g,B as h,x as v}from"./index-b9-Qwvd3.js";const k={class:"inline-flex select-none items-center justify-center of-hidden rounded-md bg-stone-3 dark:bg-stone-7"},x=["disabled","onClick"],M=u({__name:"HCheckList",props:n({options:{},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:n(["change"],["update:modelValue"]),setup(i,{emit:d}){const r=d,l=m(i,"modelValue");return b(l,s=>{r("change",s)}),(s,y)=>{const c=v;return a(),t("div",k,[(a(!0),t(o,null,p(s.options,e=>(a(),t("button",{key:e.value,disabled:s.disabled||e.disabled,class:_(["flex cursor-pointer items-center truncate border-size-0 bg-inherit px-2 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50 hover:not-disabled:bg-ui-primary hover:not-disabled:text-ui-text",{"text-ui-text bg-ui-primary":l.value===e.value}]),onClick:B=>l.value=e.value},[e.icon?(a(),f(c,{key:0,name:e.icon},null,8,["name"])):(a(),t(o,{key:1},[g(h(e.label),1)],64))],10,x))),128))])}}});export{M as _};
