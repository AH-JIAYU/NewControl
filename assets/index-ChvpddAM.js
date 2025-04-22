
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as c}from"./tenant_tenantHomepageSetting-C7b8Zo56.js";import{d as b,r as o,t as h,ak as f,a as i,ai as I,aj as F,i as t,o as k,b as D,f as u,w as p,I as V}from"./index-BF0CLg3s.js";const C=b({__name:"index",props:{id:{default:""},row:{default:""}},setup(_,{expose:v}){const d=_,g=o(!1),m=o(),e=o({id:d.id,title:"",css:"",html:"",rawData:""}),w=o({title:[{required:!0,message:"请输入标题",trigger:"blur"}]});return h(()=>{e.value.id!==""&&(e.value=JSON.parse(d.row))}),v({submit(){return new Promise(l=>{m.value.validate(s=>{if(s)if(e.value.id===""){const{id:a,...r}=e.value;c.create(r).then(n=>{n.status===1&&f.success({message:"新增成功",center:!0}),l()})}else c.edit(e.value).then(a=>{a.status===1&&f.success({message:"编辑成功",center:!0}),l()})})})}}),(l,s)=>{const a=i("ElInput"),r=i("ElFormItem"),n=i("ElForm"),x=I("loading");return F((k(),D("div",null,[u(n,{ref_key:"formRef",ref:m,model:t(e),rules:t(w),"label-width":"120px","label-suffix":"："},{default:p(()=>[u(r,{label:"标题",prop:"title"},{default:p(()=>[u(a,{modelValue:t(e).title,"onUpdate:modelValue":s[0]||(s[0]=E=>t(e).title=E),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,t(g)]])}}}),M=V(C,[["__scopeId","data-v-e5d00f76"]]);export{M as default};
