
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as D,K as R,B as V,r as $,s as z,H as b,t as N,h as d,ap as H,o as u,c as A,a as o,w as l,b as f,ai as I,k as a,i as p,l as v,N as U,aG as G,ao as J,z as K,e as O,_ as j}from"./index-DliMWqTD.js";import{_ as q}from"./index.vue_vue_type_script_setup_true_lang-D4Y-86wa.js";import{a as h}from"./setting_role-uwu1AqsV.js";import{u as F}from"./usePagination-BzieftIB.js";import{u as Q}from"./useTabbar-Cl3ye03o.js";import"./index-CtGDQueX.js";import"./buttonPermission-C2-BjLMd.js";import"./setting_permissions-BW4__MIr.js";const W=D({name:"SettingRoleList",__name:"list",setup(X){const _=R(),{pagination:M,onSortChange:C}=F(),g=Q(),r=V(),e=$({loading:!1,tableAutoHeight:!1,formMode:"drawer",formModeProps:{visible:!1,id:"",row:{}},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});z(()=>{i(),e.value.formMode==="router"&&b.on("get-data-list",()=>{i()})}),N(()=>{e.value.formMode==="router"&&b.off("get-data-list")});function i(){e.value.loading=!0,h.list().then(t=>{e.value.loading=!1,e.value.dataList=t.data,M.value.total=t.data.length})}function E({prop:t,order:n}){C(t,n).then(()=>i())}function x(){e.value.formMode==="router"?r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?g.open({name:"multilevel_menu_exampleRoleCreate"}):_.push({name:"multilevel_menu_exampleRoleCreate"}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function y(t){e.value.formMode==="router"?r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?g.open({name:"multilevel_menu_exampleRoleEdit",params:{id:t.id}}):_.push({name:"multilevel_menu_exampleRoleEdit",params:{id:t.id}}):(e.value.formModeProps.id=t.id,e.value.formModeProps.row=JSON.stringify(t),e.value.formModeProps.visible=!0)}function P(t){G.confirm(`确认删除「${t.title}」吗？`,"确认信息").then(()=>{h.delete(t.id).then(()=>{i(),J.success({message:"模拟删除成功",center:!0})})}).catch(()=>{})}return(t,n)=>{const S=K,c=d("ElButton"),k=d("ElSpace"),m=d("ElTableColumn"),w=d("ElTable"),B=O,T=H("loading");return u(),A("div",{class:U({"absolute-container":a(e).tableAutoHeight})},[o(B,null,{default:l(()=>[o(k,{wrap:""},{default:l(()=>[o(c,{type:"primary",size:"default",onClick:x},{icon:l(()=>[o(S,{name:"i-ep:plus"})]),default:l(()=>[f(" 新增角色管理 ")]),_:1})]),_:1}),I((u(),p(w,{class:"my-4",data:a(e).dataList,stripe:"","highlight-current-row":"",border:"",height:"100%",onSortChange:E,onSelectionChange:n[0]||(n[0]=s=>a(e).batch.selectionDataList=s)},{default:l(()=>[a(e).batch.enable?(u(),p(m,{key:0,type:"selection",align:"center",fixed:""})):v("",!0),o(m,{prop:"id",label:"id"}),o(m,{prop:"role",label:"角色码"}),o(m,{label:"操作",width:"250",align:"center",fixed:"right"},{default:l(s=>[o(c,{type:"primary",size:"small",plain:"",onClick:L=>y(s.row)},{default:l(()=>[f(" 编辑 ")]),_:2},1032,["onClick"]),o(c,{type:"danger",size:"small",plain:"",onClick:L=>P(s.row)},{default:l(()=>[f(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[T,a(e).loading]])]),_:1}),a(e).formMode==="dialog"||a(e).formMode==="drawer"?(u(),p(q,{key:0,id:a(e).formModeProps.id,modelValue:a(e).formModeProps.visible,"onUpdate:modelValue":n[1]||(n[1]=s=>a(e).formModeProps.visible=s),row:a(e).formModeProps.row,mode:a(e).formMode,onSuccess:i},null,8,["id","modelValue","row","mode"])):v("",!0)],2)}}}),se=j(W,[["__scopeId","data-v-c8ba6500"]]);export{se as default};
