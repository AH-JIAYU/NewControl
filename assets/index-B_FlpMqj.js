
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as d}from"./tenant_tenantHomepageSetting-6KTAXmll.js";import{f as h,r as o,y as b,ak as f,h as i,ai as k,aj as F,k as t,o as I,c as D,a as u,w as p,_ as V}from"./index--FFwJr66.js";const C=h({__name:"index",props:{id:{default:""},row:{default:""}},setup(_,{expose:v}){const c=_,g=o(!1),m=o(),e=o({id:c.id,title:"",css:"",html:"",rawData:""}),w=o({title:[{required:!0,message:"请输入标题",trigger:"blur"}]});return b(()=>{e.value.id!==""&&(e.value=JSON.parse(c.row))}),v({submit(){return new Promise(l=>{m.value.validate(s=>{if(s)if(e.value.id===""){const{id:a,...r}=e.value;d.create(r).then(n=>{n.status===1&&f.success({message:"新增成功",center:!0}),l()})}else d.edit(e.value).then(a=>{a.status===1&&f.success({message:"编辑成功",center:!0}),l()})})})}}),(l,s)=>{const a=i("ElInput"),r=i("ElFormItem"),n=i("ElForm"),x=k("loading");return F((I(),D("div",null,[u(n,{ref_key:"formRef",ref:m,model:t(e),rules:t(w),"label-width":"120px","label-suffix":"："},{default:p(()=>[u(r,{label:"标题",prop:"title"},{default:p(()=>[u(a,{modelValue:t(e).title,"onUpdate:modelValue":s[0]||(s[0]=E=>t(e).title=E),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,t(g)]])}}}),B=V(C,[["__scopeId","data-v-0f1ff3c8"]]);export{B as default};
