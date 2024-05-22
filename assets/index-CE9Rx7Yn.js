
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as C}from"./setting_permissions-DamOsxL9.js";import{g as J,m as S,aG as O,t as T,r as b,u as Y,h as P,A as Q,i as s,o as m,c as g,a as u,w as t,b as c,l as a,aH as W,a0 as F,a1 as k,ao as w,j as D,p as B,C as I,_ as X}from"./index-C4wi2QcV.js";const Z={style:{float:"left"}},ee={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},le=J({__name:"index",props:S(["id","path","keys","row","menulev"],{modelValue:{default:!1},modelModifiers:{}}),emits:S(["success"],["update:modelValue"]),setup(h,{emit:U}){const p=h,A=U,R=O(),N=T("success"),y=b(),e=b({menulev:p.menulev,keys:p.keys||[],menuData:[],choiceMenuData:[],queryForm:{id:p.id||""}}),z=b({menu:[{required:!0,message:"请选择路由地址",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],name:[{required:!0,message:"请输入key标识",trigger:"blur"}],label:[{required:!0,message:"请输入名称",trigger:"blur"}]}),V=Y(h,"modelValue"),L=P(()=>p.id===""?"新增权限":"编辑权限"),$=b([{value:3,label:"三级导航"},{value:4,label:"内置页面"}]);function f(r,o){const d=[];function v(n){if(Array.isArray(n))for(const i of n)i.menuLevel===o&&d.push(i),Array.isArray(i.children)&&v(i.children)}return v(r),d}function E(r){r===1?e.value.choiceMenuData=f(e.value.menuData,1):r===2?e.value.choiceMenuData=f(e.value.menuData,2):r===3?e.value.choiceMenuData=f(e.value.menuData,3):e.value.choiceMenuData=f(e.value.menuData,4)}function j(r){const o=e.value.choiceMenuData.find(d=>d.path===r);e.value.keys=o.key,e.value.queryForm.menuId=o.id}function K(){e.value.queryForm.permission=`${e.value.queryForm.menu}-${e.value.queryForm.type}-${e.value.queryForm.name}`,e.value.queryForm.id?y.value&&y.value.validate(r=>{r&&C.edit(e.value.queryForm).then(()=>{w.success({message:"编辑成功",center:!0}),N(),q()})}):y.value.validate(r=>{r&&C.create(e.value.queryForm).then(()=>{w.success({message:"新增成功",center:!0}),A("success"),q()})})}Q(async()=>{e.value.queryForm.id!==""&&(e.value.queryForm=JSON.parse(p.row)),e.value.menuData=R.routesRaw,e.value.choiceMenuData=f(e.value.menuData,e.value.menulev)});function q(){V.value=!1}return(r,o)=>{const d=s("el-option"),v=s("el-select"),n=s("ElFormItem"),i=s("ElSelect"),_=s("el-radio-button"),G=s("el-radio-group"),M=s("ElInput"),x=s("ElButton"),H=s("ElDialog");return m(),g("div",null,[u(H,{modelValue:V.value,"onUpdate:modelValue":o[6]||(o[6]=l=>V.value=l),title:a(L),width:"60%","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:t(()=>[u(x,{size:"large",onClick:q},{default:t(()=>[c(" 取消 ")]),_:1}),u(x,{type:"primary",size:"large",onClick:K},{default:t(()=>[c(" 确定 ")]),_:1})]),default:t(()=>[u(a(W),{ref_key:"formRef",ref:y,inline:!0,rules:a(z),model:a(e).queryForm,"label-width":"120px","label-suffix":":"},{default:t(()=>[u(n,{label:"路由等级"},{default:t(()=>[u(v,{modelValue:a(e).menulev,"onUpdate:modelValue":o[0]||(o[0]=l=>a(e).menulev=l),disabled:!!a(e).id,placeholder:"Select",onChange:E},{default:t(()=>[(m(!0),g(F,null,k(a($),l=>(m(),D(d,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),u(n,{label:"选择路由",prop:"menu"},{default:t(()=>[u(i,{modelValue:a(e).queryForm.menu,"onUpdate:modelValue":o[1]||(o[1]=l=>a(e).queryForm.menu=l),disabled:!!a(e).id,placeholder:"选择路由",onChange:j},{default:t(()=>[(m(!0),g(F,null,k(a(e).choiceMenuData,l=>(m(),D(d,{key:l.id,label:l.meta.title,value:l.path},{default:t(()=>[B("span",Z,I(l.meta.title),1),B("span",ee,I(l.name),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),u(n,{label:"类型",prop:"type"},{default:t(()=>[u(G,{modelValue:a(e).queryForm.type,"onUpdate:modelValue":o[2]||(o[2]=l=>a(e).queryForm.type=l)},{default:t(()=>[u(_,{value:"get",label:"get"},{default:t(()=>[c(" 读 ")]),_:1}),u(_,{value:"insert",label:"insert"},{default:t(()=>[c(" 写 ")]),_:1}),u(_,{value:"update",label:"update"},{default:t(()=>[c(" 改 ")]),_:1}),u(_,{value:"delete",label:"delete"},{default:t(()=>[c(" 删 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"对应接口"},{default:t(()=>[u(v,{modelValue:a(e).queryForm.key,"onUpdate:modelValue":o[3]||(o[3]=l=>a(e).queryForm.key=l),disabled:!!a(e).id,placeholder:"Select",onChange:E},{default:t(()=>[(m(!0),g(F,null,k(a(e).keys,l=>(m(),D(d,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),u(n,{label:"权限KEY",prop:"name"},{default:t(()=>[u(M,{modelValue:a(e).queryForm.name,"onUpdate:modelValue":o[4]||(o[4]=l=>a(e).queryForm.name=l)},null,8,["modelValue"])]),_:1}),u(n,{label:"名称",prop:"label"},{default:t(()=>[u(M,{modelValue:a(e).queryForm.label,"onUpdate:modelValue":o[5]||(o[5]=l=>a(e).queryForm.label=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue","title"])])}}}),te=X(le,[["__scopeId","data-v-a2d0fc1b"]]);export{te as default};
