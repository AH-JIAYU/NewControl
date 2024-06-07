
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as k}from"./tenant_tenantTemplate-BQsU-iAG.js";import{f as w,r,h as o,o as B,i as E,w as t,a,b as d,ai as N,_ as F}from"./index-vWDRJyOK.js";const R=w({__name:"index",emits:["success"],setup(S,{expose:f,emit:_}){const p=_,u=r(),s=r(),e=r({name:"",title:""}),v=r({name:[{required:!0,message:"请输入模板名称",trigger:"blur"}]});function g(l){l?(e.value=JSON.parse(JSON.stringify(l)),e.value.title="编辑"):e.value.title="添加",s.value=!0}async function b(){u.value.validate(async l=>{l&&(await k.create(e),N.success({message:"修改成功",center:!0}),p("success"),i())})}function i(){u.value.resetFields(),e.value={},s.value=!1}return f({showEdit:g}),(l,n)=>{const V=o("el-input"),x=o("el-form-item"),y=o("el-form"),c=o("ElButton"),C=o("el-dialog");return B(),E(C,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=m=>s.value=m),title:e.value.title,width:"30%",onClose:i},{footer:t(()=>[a(c,{size:"large",onClick:i},{default:t(()=>[d(" 取 消 ")]),_:1}),a(c,{type:"primary",size:"large",onClick:b},{default:t(()=>[d(" 确 定 ")]),_:1})]),default:t(()=>[a(y,{ref_key:"formRef",ref:u,model:e.value,"label-width":"100px",class:"demo-ruleForm",rules:v.value},{default:t(()=>[a(x,{label:"模板名称",prop:"name"},{default:t(()=>[a(V,{modelValue:e.value.name,"onUpdate:modelValue":n[0]||(n[0]=m=>e.value.name=m),clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),J=F(R,[["__scopeId","data-v-f186bd8b"]]);export{J as default};
