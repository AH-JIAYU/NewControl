
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import F from"./index-CV3pJY2W.js";import{a as R}from"./tenant_tenantPermission-Ct_1shrq.js";import{g as $,r as u,y as I,q as M,a1 as J,i as s,s as O,t as S,l as a,o as _,c as U,a as e,w as l,j as E,b as i,n as j,cm as z,E as K,_ as P}from"./index-8VIcFXwB.js";import"./tenantMenu--6VNg9w4.js";import"./tenant_tenantMenu-C2vMA-vw.js";const Y=$({__name:"index",props:["id","auths","menulev"],setup(b){const d=b,v=u({menu:[{required:!0,message:"请选择路由地址",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],name:[{required:!0,message:"请输入key标识",trigger:"blur"}],label:[{required:!0,message:"请输入名称",trigger:"blur"}]}),m=u(!1),h=u(),k=u(),t=u({visible:!1,id:"",path:"",keys:[],row:{}}),w=I("success"),n=u({id:d.id,menulev:d.menulev,title:"",flat:!1,menu:"",data:[],menuData:[],choiceMenuData:[]});M(async()=>{n.value.id!==""&&x()}),J(()=>d.auths,o=>{n.value.data=JSON.parse(o)},{deep:!0});function x(){m.value=!0,n.value.data=JSON.parse(d.auths),n.value.flat=!!n.value.data.length,m.value=!1}function C(o){t.value.id=o.id,t.value.row=JSON.stringify(o),t.value.visible=!0}function V(o){z.confirm(`确认删除「${o.label}」吗？`,"确认信息").then(()=>{m.value=!0,R.delete(o.id).then(()=>{K.success({message:"删除成功",center:!0}),w(),m.value=!1})}).catch(()=>{})}return(o,g)=>{const p=s("el-radio-button"),T=s("el-radio-group"),B=s("ElFormItem"),c=s("ElTableColumn"),y=s("ElButton"),D=s("ElTable"),N=s("ElForm"),q=O("loading");return S((_(),U("div",null,[e(N,{ref_key:"formRef",ref:h,rules:a(v),model:a(n),"label-width":"120px","label-suffix":"："},{default:l(()=>[(_(),E(D,{ref_key:"authsTableRef",ref:k,key:b.id,data:a(n).data,stripe:"","highlight-current-row":"",border:""},{default:l(()=>[e(c,{label:"类型",align:"center",prop:"type"},{default:l(r=>[e(B,{prop:`data.${r.$index}.type`,rules:a(v).type},{default:l(()=>[e(T,{modelValue:r.row.type,"onUpdate:modelValue":f=>r.row.type=f,disabled:""},{default:l(()=>[e(p,{value:"get",label:"get"},{default:l(()=>[i(" 读 ")]),_:1}),e(p,{value:"insert",label:"insert"},{default:l(()=>[i(" 写 ")]),_:1}),e(p,{value:"update",label:"update"},{default:l(()=>[i(" 改 ")]),_:1}),e(p,{value:"delete",label:"delete"},{default:l(()=>[i(" 删 ")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(c,{label:"权限KEY",prop:"name"}),e(c,{label:"对应接口",prop:"key"}),e(c,{label:"名称",prop:"label"}),e(c,{label:"名称"},{default:l(r=>[e(y,{type:"primary",size:"small",plain:"",onClick:f=>C(r.row)},{default:l(()=>[i(" 编辑 ")]),_:2},1032,["onClick"]),e(y,{type:"danger",size:"small",plain:"",onClick:f=>V(r.row)},{default:l(()=>[i(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]))]),_:1},8,["rules","model"]),a(t).visible?(_(),E(F,{key:0,id:a(t).id,modelValue:a(t).visible,"onUpdate:modelValue":g[0]||(g[0]=r=>a(t).visible=r),menulev:d.menulev,row:a(t).row},null,8,["id","modelValue","menulev","row"])):j("",!0)])),[[q,a(m)]])}}}),W=P(Y,[["__scopeId","data-v-5fdc0b7b"]]);export{W as default};
