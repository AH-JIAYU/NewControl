
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import R from"./index-DW_sX2Is.js";import{a as $}from"./tenant_tenantPermission-BE8GBq3K.js";import{g as q,r as u,v as I,B as M,Z as J,i as s,ap as O,ai as S,l,o as _,c as U,a as e,w as a,j as h,b as i,n as j,aF as z,ao as K,_ as P}from"./index-B4NyuzNm.js";import"./tenantMenu-DwsgebD8.js";import"./tenant_tenantMenu-B-oFUNES.js";const Y=q({__name:"index",props:["id","auths","menulev"],setup(v){const d=v,b=u({menu:[{required:!0,message:"请选择路由地址",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],name:[{required:!0,message:"请输入key标识",trigger:"blur"}],label:[{required:!0,message:"请输入名称",trigger:"blur"}]}),m=u(!1),E=u(),k=u(),t=u({visible:!1,id:"",path:"",keys:[],row:{}}),w=I("success"),n=u({id:d.id,menulev:d.menulev,title:"",flat:!1,menu:"",data:[],menuData:[],choiceMenuData:[]});M(async()=>{n.value.id!==""&&x()}),J(()=>d.auths,o=>{n.value.data=JSON.parse(o)},{deep:!0});function x(){m.value=!0,n.value.data=JSON.parse(d.auths),n.value.flat=!!n.value.data.length,m.value=!1}function C(o){t.value.id=o.id,t.value.row=JSON.stringify(o),t.value.visible=!0}function V(o){z.confirm(`确认删除「${o.label}」吗？`,"确认信息").then(()=>{m.value=!0,$.delete(o.id).then(()=>{K.success({message:"删除成功",center:!0}),w(),m.value=!1})}).catch(()=>{})}return(o,g)=>{const p=s("el-radio-button"),B=s("el-radio-group"),T=s("ElFormItem"),c=s("ElTableColumn"),y=s("ElButton"),D=s("ElTable"),F=s("ElForm"),N=O("loading");return S((_(),U("div",null,[e(F,{ref_key:"formRef",ref:E,rules:l(b),model:l(n),"label-width":"120px","label-suffix":"："},{default:a(()=>[(_(),h(D,{ref_key:"authsTableRef",ref:k,key:v.id,data:l(n).data,stripe:"","highlight-current-row":"",border:""},{default:a(()=>[e(c,{label:"类型",align:"center",prop:"type"},{default:a(r=>[e(T,{prop:`data.${r.$index}.type`,rules:l(b).type},{default:a(()=>[e(B,{modelValue:r.row.type,"onUpdate:modelValue":f=>r.row.type=f,disabled:""},{default:a(()=>[e(p,{value:"get",label:"get"},{default:a(()=>[i(" 读 ")]),_:1}),e(p,{value:"insert",label:"insert"},{default:a(()=>[i(" 写 ")]),_:1}),e(p,{value:"update",label:"update"},{default:a(()=>[i(" 改 ")]),_:1}),e(p,{value:"delete",label:"delete"},{default:a(()=>[i(" 删 ")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(c,{label:"权限KEY",prop:"name"}),e(c,{label:"对应接口",prop:"key"}),e(c,{label:"名称",prop:"label"}),e(c,{label:"名称"},{default:a(r=>[e(y,{type:"primary",size:"small",plain:"",onClick:f=>C(r.row)},{default:a(()=>[i(" 编辑 ")]),_:2},1032,["onClick"]),e(y,{type:"danger",size:"small",plain:"",onClick:f=>V(r.row)},{default:a(()=>[i(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]))]),_:1},8,["rules","model"]),l(t).visible?(_(),h(R,{key:0,id:l(t).id,modelValue:l(t).visible,"onUpdate:modelValue":g[0]||(g[0]=r=>l(t).visible=r),menulev:d.menulev,row:l(t).row},null,8,["id","modelValue","menulev","row"])):j("",!0)])),[[N,l(m)]])}}}),Q=P(Y,[["__scopeId","data-v-5fdc0b7b"]]);export{Q as default};
