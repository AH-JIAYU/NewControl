
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as w,aG as z,r as T,B as V,i as u,ap as D,o as i,c as y,a as o,w as a,b as s,ai as N,j as r,q as h,D as c,n as p,N as $,aF as j,ao as A,J as F,e as H,_ as J,d as M}from"./index-DsJuNEqK.js";import R from"./index-NfJzrjXl.js";import{a as k}from"./menu-tfPYhZTz.js";import"./index-hZTbljDv.js";import"./index-D720C594.js";const q=["title"],G=["title"],O={style:{display:"flex","justify-content":"center"}},P=w({name:"PagesExampleMenuList",__name:"list",setup(U){const C=z(),t=T({loading:!1,tableAutoHeight:!0,dataList:[],formModeProps:{visible:!1,id:"",parentId:""}});V(()=>{f()});function f(){t.value.loading=!0,k.list({type:"normal"}).then(l=>{C.routesRaw=l.data,t.value.loading=!1,t.value.dataList=l.data})}function b(l){t.value.formModeProps.id="",t.value.formModeProps.parentId=l.id??"",t.value.formModeProps.menuLevel=l.menuLevel??"",t.value.formModeProps.visible=!0}function E(l){t.value.formModeProps.id=l.id??"",t.value.formModeProps.menuLevel=l.menuLevel-1,t.value.formModeProps.row=JSON.stringify(l),t.value.formModeProps.parentId=l.parentId??"",t.value.formModeProps.visible=!0}function L(l){j.confirm(`确认删除「${l.meta.title}」吗？`,"确认信息").then(()=>{k.delete({id:l.id}).then(d=>{f(),A[d.status===1?"success":"error"]({message:d.error,center:!0})})}).catch(()=>{})}return(l,d)=>{const _=F,m=u("ElButton"),x=u("ElSpace"),n=u("ElTableColumn"),v=u("ElTag"),I=u("ElTable"),B=H,S=D("loading");return i(),y("div",{class:$({"absolute-container":t.value.tableAutoHeight})},[o(B,null,{default:a(()=>[o(x,null,{default:a(()=>[o(m,{type:"primary",size:"default",onClick:b},{icon:a(()=>[o(_,{name:"i-ep:plus"})]),default:a(()=>[s(" 新增主导航 ")]),_:1})]),_:1}),N((i(),r(I,{class:"mt-4",data:t.value.dataList,"row-key":"id",stripe:"","highlight-current-row":"","default-expand-all":"",border:"",height:"100%"},{default:a(()=>[o(n,{prop:"meta.title",label:"标题","min-width":"200",fixed:"left"}),o(n,{label:"路由",width:"200"},{default:a(({row:e})=>[h("span",{title:e.path},c(e.path),9,q)]),_:1}),o(n,{label:"页面组件",width:"200"},{default:a(({row:e})=>[e.component==="Layout"?(i(),r(v,{key:0},{default:a(()=>[s(" Layout ")]),_:1})):(i(),y("span",{key:1,title:e.component},c(e.component),9,G))]),_:1}),o(n,{label:"图标",width:"90",align:"center"},{default:a(({row:e})=>[h("div",O,[e.meta.icon?(i(),r(_,{key:0,name:e.meta.icon,size:24},null,8,["name"])):p("",!0)])]),_:1}),o(n,{label:"激活图标",width:"90",align:"center"},{default:a(({row:e})=>[e.meta.activeIcon?(i(),r(_,{key:0,name:e.meta.activeIcon,size:24},null,8,["name"])):p("",!0)]),_:1}),o(n,{label:"菜单",width:"80",align:"center"},{default:a(({row:e})=>[typeof e.meta.menu=="boolean"?(i(),r(v,{key:0,type:e.meta.menu?"success":"danger"},{default:a(()=>[s(c(e.meta.menu?"显示":"隐藏"),1)]),_:2},1032,["type"])):p("",!0)]),_:1}),o(n,{label:"面包屑",width:"80",align:"center"},{default:a(({row:e})=>[typeof e.meta.breadcrumb=="boolean"?(i(),r(v,{key:0,type:e.meta.breadcrumb?"success":"danger"},{default:a(()=>[s(c(e.meta.breadcrumb?"显示":"隐藏"),1)]),_:2},1032,["type"])):p("",!0)]),_:1}),o(n,{label:"操作",width:"250",align:"center",fixed:"right"},{default:a(e=>[o(m,{type:"info",size:"small",plain:"",onClick:g=>b(e.row)},{default:a(()=>[s(" 新增导航 ")]),_:2},1032,["onClick"]),o(m,{type:"primary",size:"small",plain:"",onClick:g=>E(e.row)},{default:a(()=>[s(" 编辑 ")]),_:2},1032,["onClick"]),o(m,{type:"danger",size:"small",plain:"",onClick:g=>L(e.row)},{default:a(()=>[s(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[S,t.value.loading]])]),_:1}),o(R,{id:t.value.formModeProps.id,modelValue:t.value.formModeProps.visible,"onUpdate:modelValue":d[0]||(d[0]=e=>t.value.formModeProps.visible=e),"menu-level":t.value.formModeProps.menuLevel,"parent-id":t.value.formModeProps.parentId,row:t.value.formModeProps.row,onSuccess:f},null,8,["id","modelValue","menu-level","parent-id","row"])],2)}}});typeof M=="function"&&M(P);const Z=J(P,[["__scopeId","data-v-f3fc6b5d"]]);export{Z as default};
