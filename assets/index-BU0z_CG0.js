
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as m,g as L,r as p,q as h,E as _,i as u,s as D,t as q,l as o,o as g,c as V,a as t,w as r,a4 as C,a5 as M,b as S,G as j,_ as B}from"./index-zX-UbP25.js";const v={list:n=>m.get("tenant/tenant_manage/list",{params:n,baseURL:"/mock/"}),detail:n=>m.get("tenant/tenant_manage/detail",{params:{id:n},baseURL:"/mock/"}),create:n=>m.post("tenant/tenant_manage/create",n,{baseURL:"/mock/"}),edit:n=>m.post("tenant/tenant_manage/edit",n,{baseURL:"/mock/"}),delete:n=>m.post("tenant/tenant_manage/delete",{id:n},{baseURL:"/mock/"})},x="创建完成后，请告知用户初始密码：123456",O=L({__name:"index",props:{id:{default:""}},setup(n,{expose:U}){const N=n,y=[{lable:"专业版",value:1},{lable:"企业版",value:2},{lable:"基础版",value:3}],c=p(!1),d=p(),e=p({id:N.id,tenantName:"",country:"",phoneNumber:"",email:"",role:1,version:"",time:"",active:!0}),k=p({tenantName:[{required:!0,message:"请输入用户名",trigger:"blur"}],country:[{required:!0,message:"请选择国家",trigger:"blur"}]});h(()=>{e.value.id!==""&&w()});function w(){c.value=!0,v.detail(e.value.id).then(()=>{c.value=!1})}return U({submit(){return new Promise(f=>{e.value.id===""?d.value&&d.value.validate(l=>{l&&v.create(e.value).then(()=>{_.success({message:"模拟新增成功",center:!0}),f()})}):d.value&&d.value.validate(l=>{l&&v.edit(e.value).then(()=>{_.success({message:"模拟编辑成功",center:!0}),f()})})})}}),(f,l)=>{const i=u("ElInput"),s=u("ElFormItem"),b=u("el-select"),E=u("el-option"),R=u("el-switch"),F=u("ElForm"),I=D("loading");return q((g(),V("div",null,[t(F,{ref_key:"formRef",ref:d,model:o(e),rules:o(k),"label-width":"120px","label-suffix":"："},{default:r(()=>[t(s,{label:"用户名",prop:"tenantName"},{default:r(()=>[t(i,{modelValue:o(e).tenantName,"onUpdate:modelValue":l[0]||(l[0]=a=>o(e).tenantName=a),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),t(s,{label:"国家",prop:"country"},{default:r(()=>[t(b,{modelValue:o(e).country,"onUpdate:modelValue":l[1]||(l[1]=a=>o(e).country=a),placeholder:"请选择国家"},null,8,["modelValue"])]),_:1}),t(s,{label:"手机号码",prop:"phoneNumber"},{default:r(()=>[t(i,{modelValue:o(e).phoneNumber,"onUpdate:modelValue":l[2]||(l[2]=a=>o(e).phoneNumber=a),placeholder:"请输入手机号码"},null,8,["modelValue"])]),_:1}),t(s,{label:"电子邮箱",prop:"email"},{default:r(()=>[t(i,{modelValue:o(e).email,"onUpdate:modelValue":l[3]||(l[3]=a=>o(e).email=a),placeholder:"请输入电子邮箱"},null,8,["modelValue"])]),_:1}),t(s,{label:"初始密码",prop:"password"},{default:r(()=>[t(i,{modelValue:x,"onUpdate:modelValue":l[4]||(l[4]=a=>x=a),disabled:"",placeholder:"请输入登录密码"})]),_:1}),t(s,{label:"版本分配",prop:"role"},{default:r(()=>[t(b,{modelValue:o(e).version,"onUpdate:modelValue":l[5]||(l[5]=a=>o(e).version=a),placeholder:"请选择版本"},{default:r(()=>[(g(),V(C,null,M(y,a=>t(E,{key:a.value,label:a.lable,value:a.value},{default:r(()=>[S(j(a.lable),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"租户状态",prop:"active"},{default:r(()=>[t(R,{modelValue:o(e).active,"onUpdate:modelValue":l[6]||(l[6]=a=>o(e).active=a),"inline-prompt":"","active-text":"开启","inactive-text":"关闭"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[I,o(c)]])}}}),P=B(O,[["__scopeId","data-v-4ce00a7f"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{P as D,v as a,z as i};
