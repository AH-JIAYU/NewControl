
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as V}from"./setting_basisDictionary-BOvoFgLq.js";import{g as D,m as N,u as M,h as S,r as f,B as U,i,o as F,j as q,w as s,a,b as E,l as o,ao as I,_ as R}from"./index-Daq1Jgd4.js";const z=D({__name:"index",props:N({dictionaryId:{default:""},id:{default:""},tree:{},row:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:N(["success"],["update:modelValue"]),setup(v,{emit:b}){const d=v,g=b,c=M(v,"modelValue"),y=S(()=>d.id===""?"新增字典项":"编辑字典项"),m=f(),e=f({id:d.id,parentId:null,catalogueId:d.dictionaryId,englishName:"",chineseName:"",code:"",remark:"",active:""}),C=f({catalogueId:[{required:!0,message:"请选择所属字典"}],chineseName:[{required:!0,message:"请输入字典项名称"}],englishName:[{required:!0,message:"请输入字典项键值"}]});U(()=>{if(d.id!==""){const{active:n,englishName:l,chineseName:p,catalogueId:u}=JSON.parse(d.row);e.value.catalogueId=u,e.value.chineseName=p,e.value.englishName=l,e.value.active=n}});function w(){e.value.id===""?m.value&&m.value.validate(n=>{n&&V.itemCreate(e.value).then(()=>{I.success({message:"新增成功",center:!0}),g("success"),r()})}):m.value&&m.value.validate(n=>{n&&V.itemEdit(e.value).then(()=>{I.success({message:"编辑成功",center:!0}),g("success"),r()})})}function r(){c.value=!1}return(n,l)=>{const p=i("ElCascader"),u=i("ElFormItem"),_=i("ElInput"),x=i("ElSwitch"),k=i("ElForm"),h=i("ElButton"),B=i("ElDialog");return F(),q(B,{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=t=>c.value=t),title:o(y),width:"400px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":"",onClosed:r},{footer:s(()=>[a(h,{size:"large",onClick:r},{default:s(()=>[E(" 取消 ")]),_:1}),a(h,{type:"primary",size:"large",onClick:w},{default:s(()=>[E(" 确定 ")]),_:1})]),default:s(()=>[a(k,{ref_key:"formRef",ref:m,model:o(e),rules:o(C),"label-width":"100px"},{default:s(()=>[a(u,{label:"所属字典"},{default:s(()=>[a(p,{modelValue:o(e).catalogueId,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e).catalogueId=t),options:n.tree,props:{value:"id",label:"chineseName",emitPath:!1,checkStrictly:!0},"show-all-levels":!1,placeholder:"请选择所属字典"},null,8,["modelValue","options"])]),_:1}),a(u,{label:"字典项名称",prop:"chineseName"},{default:s(()=>[a(_,{modelValue:o(e).chineseName,"onUpdate:modelValue":l[1]||(l[1]=t=>o(e).chineseName=t),placeholder:"请输入字典项名称",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"字典项键值",prop:"englishName"},{default:s(()=>[a(_,{modelValue:o(e).englishName,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e).englishName=t),placeholder:"请输入字典项键值",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"状态",prop:"code"},{default:s(()=>[a(x,{modelValue:o(e).active,"onUpdate:modelValue":l[3]||(l[3]=t=>o(e).active=t),"inline-prompt":"","active-text":"启用","inactive-text":"禁用"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),O=R(z,[["__scopeId","data-v-8eb8f963"]]);export{O as default};
