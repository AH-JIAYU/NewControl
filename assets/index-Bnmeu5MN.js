
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as F}from"./setting_user-BFvHOZfN.js";import{a as U}from"./setting_role-CjggcPbH.js";import{p as I,r as n,h as q,g as z,m as E,u as N,q as j,i as r,s as H,o as i,c as V,t as L,l as o,j as w,w as l,a as u,b as k,a4 as P,a5 as T,aH as $,E as A,_ as G}from"./index-C3PJOLdt.js";const J=I("buttonPermission",()=>{const t=n([]),d=q(async()=>{if(t.value.length)return t.value;const{data:c}=await U.list();return c});return{role:t,getRole:d}}),K=J,O="分配角色",Q=z({__name:"index",props:E(["id","row"],{modelValue:{default:!1},modelModifiers:{}}),emits:E(["success"],["update:modelValue"]),setup(t,{emit:d}){const c=t,x=d,y=K(),m=n(),f=n(),a=n({id:c.row.id,role:"",account:""}),R=n({role:[{required:!0,message:"请选择角色码",trigger:"blur"}]}),_=n(),p=N(t,"modelValue");a.value.account=c.row.account;function C(){a.value.id&&f.value&&f.value.validate(g=>{g&&F.setUserRole(a.value).then(s=>{A.success({message:s.status===1?"角色赋予成功":"接口异常",center:!0}),x("success"),v()})})}j(async()=>{m.value=!0,_.value=await y.getRole,m.value=!1});function v(){p.value=!1}return(g,s)=>{const h=r("el-option"),B=r("el-select"),M=r("ElFormItem"),b=r("ElButton"),S=r("ElDialog"),D=H("loading");return i(),V("div",null,[L((i(),w(S,{modelValue:p.value,"onUpdate:modelValue":s[1]||(s[1]=e=>p.value=e),title:O,width:"30%","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:l(()=>[u(b,{size:"large",onClick:v},{default:l(()=>[k(" 取消 ")]),_:1}),u(b,{type:"primary",size:"large",onClick:C},{default:l(()=>[k(" 确定 ")]),_:1})]),default:l(()=>[u(o($),{ref_key:"formRef",ref:f,inline:!0,rules:o(R),model:o(a),"label-width":"120px","label-suffix":":"},{default:l(()=>[u(M,{label:"角色",prop:"role"},{default:l(()=>[u(B,{modelValue:o(a).role,"onUpdate:modelValue":s[0]||(s[0]=e=>o(a).role=e),placeholder:"请选择角色"},{default:l(()=>[(i(!0),V(P,null,T(o(_),e=>(i(),w(h,{key:e.id,label:e.role,value:e.role},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue"])),[[D,o(m)]])])}}}),Z=G(Q,[["__scopeId","data-v-b1b16c0e"]]);export{Z as default};
