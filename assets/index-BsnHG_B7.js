
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{a as C}from"./setting_permissions-CiFou7XP.js";import{g as O,m as S,cn as T,y as Y,r as b,u as H,h as P,q as Q,i as s,o as m,c as g,a as u,w as o,b as c,l as a,co as W,a4 as V,a5 as k,E as w,j as D,F as B,G as I,_ as X}from"./index-8VIcFXwB.js";const Z={style:{float:"left"}},ee={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},le=O({__name:"index",props:S(["id","path","keys","row","menulev"],{modelValue:{default:!1},modelModifiers:{}}),emits:S(["success"],["update:modelValue"]),setup(h,{emit:U}){const p=h,R=U,A=T(),N=Y("success"),y=b(),e=b({menulev:p.menulev,keys:p.keys||[],menuData:[],choiceMenuData:[],queryForm:{id:p.id||""}}),z=b({menu:[{required:!0,message:"请选择路由地址",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],name:[{required:!0,message:"请输入key标识",trigger:"blur"}],label:[{required:!0,message:"请输入名称",trigger:"blur"}]}),q=H(h,"modelValue"),L=P(()=>p.id===""?"新增权限":"编辑权限"),$=b([{value:3,label:"三级导航"},{value:4,label:"内置页面"}]);function f(r,t){const d=[];function v(n){if(Array.isArray(n))for(const i of n)i.menuLevel===t&&d.push(i),Array.isArray(i.children)&&v(i.children)}return v(r),d}function E(r){r===1?e.value.choiceMenuData=f(e.value.menuData,1):r===2?e.value.choiceMenuData=f(e.value.menuData,2):r===3?e.value.choiceMenuData=f(e.value.menuData,3):e.value.choiceMenuData=f(e.value.menuData,4)}function j(r){const t=e.value.choiceMenuData.find(d=>d.path===r);e.value.keys=t.key,e.value.queryForm.menuId=t.id}function K(){e.value.queryForm.permission=`${e.value.queryForm.menu}-${e.value.queryForm.type}-${e.value.queryForm.name}`,e.value.queryForm.id?y.value&&y.value.validate(r=>{r&&C.edit(e.value.queryForm).then(()=>{w.success({message:"编辑成功",center:!0}),N(),F()})}):y.value.validate(r=>{r&&C.create(e.value.queryForm).then(()=>{w.success({message:"新增成功",center:!0}),R("success"),F()})})}Q(async()=>{e.value.queryForm.id!==""&&(e.value.queryForm=JSON.parse(p.row)),e.value.menuData=A.routesRaw,e.value.choiceMenuData=f(e.value.menuData,e.value.menulev)});function F(){q.value=!1}return(r,t)=>{const d=s("el-option"),v=s("el-select"),n=s("ElFormItem"),i=s("ElSelect"),_=s("el-radio-button"),G=s("el-radio-group"),M=s("ElInput"),x=s("ElButton"),J=s("ElDialog");return m(),g("div",null,[u(J,{modelValue:q.value,"onUpdate:modelValue":t[6]||(t[6]=l=>q.value=l),title:a(L),width:"60%","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:o(()=>[u(x,{size:"large",onClick:F},{default:o(()=>[c(" 取消 ")]),_:1}),u(x,{type:"primary",size:"large",onClick:K},{default:o(()=>[c(" 确定 ")]),_:1})]),default:o(()=>[u(a(W),{ref_key:"formRef",ref:y,inline:!0,rules:a(z),model:a(e).queryForm,"label-width":"120px","label-suffix":":"},{default:o(()=>[u(n,{label:"路由等级"},{default:o(()=>[u(v,{modelValue:a(e).menulev,"onUpdate:modelValue":t[0]||(t[0]=l=>a(e).menulev=l),disabled:!!a(e).id,placeholder:"Select",onChange:E},{default:o(()=>[(m(!0),g(V,null,k(a($),l=>(m(),D(d,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),u(n,{label:"选择路由",prop:"menu"},{default:o(()=>[u(i,{modelValue:a(e).queryForm.menu,"onUpdate:modelValue":t[1]||(t[1]=l=>a(e).queryForm.menu=l),disabled:!!a(e).id,placeholder:"选择路由",onChange:j},{default:o(()=>[(m(!0),g(V,null,k(a(e).choiceMenuData,l=>(m(),D(d,{key:l.id,label:l.meta.title,value:l.path},{default:o(()=>[B("span",Z,I(l.meta.title),1),B("span",ee,I(l.name),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),u(n,{label:"类型",prop:"type"},{default:o(()=>[u(G,{modelValue:a(e).queryForm.type,"onUpdate:modelValue":t[2]||(t[2]=l=>a(e).queryForm.type=l)},{default:o(()=>[u(_,{value:"get",label:"get"},{default:o(()=>[c(" 读 ")]),_:1}),u(_,{value:"insert",label:"insert"},{default:o(()=>[c(" 写 ")]),_:1}),u(_,{value:"update",label:"update"},{default:o(()=>[c(" 改 ")]),_:1}),u(_,{value:"delete",label:"delete"},{default:o(()=>[c(" 删 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"对应接口"},{default:o(()=>[u(v,{modelValue:a(e).queryForm.key,"onUpdate:modelValue":t[3]||(t[3]=l=>a(e).queryForm.key=l),disabled:!!a(e).id,placeholder:"Select",onChange:E},{default:o(()=>[(m(!0),g(V,null,k(a(e).keys,l=>(m(),D(d,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),u(n,{label:"权限KEY",prop:"name"},{default:o(()=>[u(M,{modelValue:a(e).queryForm.name,"onUpdate:modelValue":t[4]||(t[4]=l=>a(e).queryForm.name=l)},null,8,["modelValue"])]),_:1}),u(n,{label:"名称",prop:"label"},{default:o(()=>[u(M,{modelValue:a(e).queryForm.label,"onUpdate:modelValue":t[5]||(t[5]=l=>a(e).queryForm.label=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue","title"])])}}}),oe=X(le,[["__scopeId","data-v-a2d0fc1b"]]);export{oe as default};
