
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as ue}from"./index-vSTuns5P.js";import{g as pe,r as w,B as ve,Z as M,i as d,ap as fe,o as I,c as ge,q as m,a as i,w as o,b as N,D as L,au as x,ai as z,aE as P,j as $,l as b,n as A,aF as S,ao as V,J as me,aA as he,aB as _e,_ as ye,d as R}from"./index-Daq1Jgd4.js";import be from"./index-BBglrveS.js";import Ce from"./index-D66offaL.js";import{a as _}from"./setting_basisDictionary-BOvoFgLq.js";import{u as Ee}from"./usePagination-C1JpBk6a.js";const De=C=>(he("data-v-ae286c25"),C=C(),_e(),C),ke={class:"absolute-container"},we={class:"page-main"},Ie={class:"custom-tree-node"},Ne=["title"],Se={class:"code"},Ve={class:"actions"},Le={class:"dictionary-container"},xe={class:"dictionary-container"},ze=De(()=>m("div",{class:"empty"}," 请在左侧新增或选择一个字典 ",-1)),$e=[ze],J=pe({name:"PagesExampleDictionary",__name:"list",setup(C){const B=w(),a=w({search:"",tree:[],currentNode:void 0,currentData:void 0,dialog:{visible:!1,parentId:"",id:""},row:""}),{pagination:p,onSizeChange:F,onCurrentChange:G,onSortChange:O}=Ee();p.value.size=20,p.value.sizes=[20,50,100];const j=w(),n=w({loading:!1,search:{dictionaryId:"",title:""},dataList:[],selectionDataList:[],row:"",dialog:{visible:!1,id:""}});function E(){n.value.search.dictionaryId="",_.list().then(e=>{a.value.tree=e.data.catalogueList})}ve(()=>{E()}),M(()=>a.value.search,e=>{B.value.filter(e)});function q(e,t){return e?t.label.includes(e):!0}function T(e){a.value.currentData=e,a.value.dialog.parentId=(e==null?void 0:e.id)??"",a.value.dialog.id="",a.value.dialog.visible=!0}function Z(e,t){a.value.currentNode=e,a.value.currentData=t,a.value.row=JSON.stringify(t),a.value.dialog.parentId=e.parent.data.id??"",a.value.dialog.id=t.id,a.value.dialog.visible=!0}function H(e,t){S.confirm(`确认删除「${t.chineseName}」吗？`,"确认信息").then(()=>{_.delete(t.id).then(()=>{V.success({message:"删除成功",center:!0});const c=e.parent,r=c.data.children||c.data,s=r.findIndex(v=>v.id===t.id);r.splice(s,1),a.value.tree=[...a.value.tree]})})}function K(e){a.value.currentData?(a.value.currentData.children||(a.value.currentData.children=[]),a.value.currentData.children.push({id:e.id,label:e.label,code:e.code})):a.value.tree.push({id:e.id,label:e.label,code:e.code}),E()}function Q(e,t){if(a.value.currentNode&&a.value.currentData)if((a.value.currentNode.parent.data.id??"")===t)a.value.currentData.label=e.label,a.value.currentData.code=e.code;else{const c=a.value.currentNode.parent,r=c.data.children||c.data,s=r.findIndex(v=>v.id===e.id);if(r[s].label=e.label,r[s].code=e.code,t){const v=(h,D)=>{for(const u in h){if(h[u].id===D)return h[u];if(h[u].children){const k=v(h[u].children,D);if(k)return k}}},y=v(a.value.tree,t);y.children||(y.children=[]),y.children.push(r[s])}else a.value.tree.push(r[s]);r.splice(s,1)}E()}function W(e){p.value.page=1,n.value.search.dictionaryId=e.id}M(()=>n.value.search.dictionaryId,()=>{g()});function g(){n.value.loading=!0,_.itemList(n.value.search.dictionaryId).then(e=>{n.value.loading=!1,n.value.dataList=e.data,n.value.dataList.forEach(t=>{t.enableLoading=!1}),p.value.total=e.data.length})}function X(e){return new Promise(t=>{S.confirm(`确认${e.enable?"禁用":"启用"}「${e.name}」吗？`,"确认信息").then(()=>{e.enableLoading=!0,_.itemChangeEnable({id:e.id,enable:!e.enable}).then(()=>(e.enableLoading=!1,V.success({message:`${e.enable?"禁用":"启用"}成功`,center:!0}),t(!0))).catch(()=>(e.enableLoading=!1,t(!1)))}).catch(()=>t(!1))})}function Y(e){F(e).then(()=>g())}function ee(e=1){G(e).then(()=>g())}function ae({prop:e,order:t}){O(e,t).then(()=>g())}function te(){n.value.dialog.id="",n.value.dialog.visible=!0}function ie(e){n.value.row=JSON.stringify(e),n.value.dialog.id=e.id,n.value.dialog.visible=!0}function ne(e){S.confirm(`确认删除「${e.chineseName}」吗？`,"确认信息").then(()=>{_.itemDelete(e.id).then(()=>{g(),V.success({message:"删除成功",center:!0})})}).catch(()=>{})}function le(e){S.confirm(`确认删除选中的 ${e.length} 条数据吗？`,"确认信息").then(()=>{_.itemDelete(e.map(t=>t.id)).then(()=>{g(),V.success({message:"删除成功",center:!0})})}).catch(()=>{})}return(e,t)=>{const c=d("ElButton"),r=me,s=d("ElButtonGroup"),v=d("ElInput"),y=d("ElTree"),h=d("ElScrollbar"),D=d("ElSpace"),u=d("ElTableColumn"),k=d("ElTag"),oe=d("ElSwitch"),re=d("ElTable"),ce=d("ElPagination"),de=ue,se=fe("loading");return I(),ge("div",ke,[m("div",we,[i(de,{"hide-left-side-toggle":""},{leftSide:o(()=>[i(s,{class:"btns"},{default:o(()=>[i(c,{type:"primary",class:"add",onClick:t[0]||(t[0]=l=>T())},{default:o(()=>[N(" 新增字典 ")]),_:1}),i(c,{onClick:E},{icon:o(()=>[i(r,{name:"i-ep:refresh"})]),_:1})]),_:1}),i(v,{modelValue:a.value.search,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.search=l),placeholder:"请输入关键词筛选字典",clearable:"",class:"search"},null,8,["modelValue"]),i(h,{class:"tree"},{default:o(()=>[i(y,{ref_key:"dictionaryRef",ref:B,data:a.value.tree,"filter-node-method":q,"default-expand-all":"",onNodeClick:W},{default:o(({node:l,data:f})=>[m("div",Ie,[m("div",{class:"label",title:l.label},L(f.chineseName),9,Ne),m("div",Se,L(f.englishName),1),m("div",Ve,[i(s,null,{default:o(()=>[i(c,{type:"primary",plain:"",size:"default",onClick:x(U=>T(f),["stop"])},{icon:o(()=>[i(r,{name:"i-ep:plus"})]),_:2},1032,["onClick"]),i(c,{type:"info",plain:"",size:"default",onClick:x(U=>Z(l,f),["stop"])},{icon:o(()=>[i(r,{name:"i-ep:edit"})]),_:2},1032,["onClick"]),i(c,{type:"danger",plain:"",size:"default",onClick:x(U=>H(l,f),["stop"])},{icon:o(()=>[i(r,{name:"i-ep:delete"})]),_:2},1032,["onClick"])]),_:2},1024)])])]),_:1},8,["data","filter-node-method"])]),_:1})]),default:o(()=>[z(m("div",Le,[i(D,{wrap:""},{default:o(()=>[i(c,{type:"primary",onClick:te},{icon:o(()=>[i(r,{name:"i-ep:plus"})]),_:1}),i(c,{type:"danger",disabled:!n.value.selectionDataList.length,onClick:t[2]||(t[2]=l=>le(n.value.selectionDataList))},{icon:o(()=>[i(r,{name:"i-ep:delete"})]),_:1},8,["disabled"]),i(v,{modelValue:n.value.search.title,"onUpdate:modelValue":t[3]||(t[3]=l=>n.value.search.title=l),placeholder:"请输入关键词筛选字典项",clearable:"",style:{width:"200px"}},null,8,["modelValue"]),i(c,{onClick:g},{icon:o(()=>[i(r,{name:"i-ep:search"})]),_:1})]),_:1}),z((I(),$(re,{ref_key:"dictionaryItemRef",ref:j,data:n.value.dataList,stripe:"","highlight-current-row":"",border:"",height:"100%",onSortChange:ae,onSelectionChange:t[4]||(t[4]=l=>n.value.selectionDataList=l)},{default:o(()=>[i(u,{type:"selection",align:"center",fixed:""}),i(u,{prop:"chineseName",label:"名称"}),i(u,{label:"键值",align:"center",width:"150"},{default:o(l=>[i(k,{type:"info"},{default:o(()=>[N(L(l.row.id),1)]),_:2},1024)]),_:1}),i(u,{label:"状态",width:"100",align:"center"},{default:o(l=>[i(oe,{modelValue:l.row.active,"onUpdate:modelValue":f=>l.row.active=f,loading:l.row.deleted,"inline-prompt":"","active-text":"启用","inactive-text":"禁用","before-change":()=>X(l.row)},null,8,["modelValue","onUpdate:modelValue","loading","before-change"])]),_:1}),i(u,{label:"操作",width:"200",align:"center"},{default:o(l=>[i(c,{type:"primary",size:"small",plain:"",onClick:f=>ie(l.row)},{default:o(()=>[N(" 编辑 ")]),_:2},1032,["onClick"]),i(c,{type:"danger",size:"small",plain:"",onClick:f=>ne(l.row)},{default:o(()=>[N(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[se,n.value.loading]]),i(ce,{"current-page":b(p).page,total:b(p).total,"page-size":b(p).size,"page-sizes":b(p).sizes,layout:b(p).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:Y,onCurrentChange:ee},null,8,["current-page","total","page-size","page-sizes","layout"])],512),[[P,n.value.search.dictionaryId]]),z(m("div",xe,$e,512),[[P,!n.value.search.dictionaryId]])]),_:1}),a.value.dialog.visible?(I(),$(be,{key:0,id:a.value.dialog.id,modelValue:a.value.dialog.visible,"onUpdate:modelValue":t[5]||(t[5]=l=>a.value.dialog.visible=l),row:a.value.row,"parent-id":a.value.dialog.parentId,tree:a.value.tree,onAddNode:K,onEditNode:Q},null,8,["id","modelValue","row","parent-id","tree"])):A("",!0),n.value.dialog.visible?(I(),$(Ce,{key:1,id:n.value.dialog.id,modelValue:n.value.dialog.visible,"onUpdate:modelValue":t[6]||(t[6]=l=>n.value.dialog.visible=l),"dictionary-id":n.value.search.dictionaryId,tree:a.value.tree,row:n.value.row,onSuccess:g},null,8,["id","modelValue","dictionary-id","tree","row"])):A("",!0)])])}}});typeof R=="function"&&R(J);const Re=ye(J,[["__scopeId","data-v-ae286c25"]]);export{Re as default};
