
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as k}from"./index-LcPfEGck.js";import{f as v,s as y,K as E,t as x,r as R,h as o,o as S,c as h,a as e,w as t,b as s,k as l,C as w,J as D,an as z,e as N,_ as T}from"./index-B13k3BKp.js";import{D as $}from"./index-CkpWNzw4.js";import{u as F}from"./useTabbar-CTRLO9y6.js";const I=v({name:"SettingBasisDictionaryDetail",__name:"detail",setup(M){const i=y(),_=E(),u=F(),c=x(),r=R();function m(){r.value.submit().then(()=>{w.emit("get-data-list"),a()})}function f(){a()}function a(){c.settings.tabbar.enable&&c.settings.tabbar.mergeTabsBy!=="activeMenu"?u.close({name:"basis_dictionary"}):_.push({name:"basis_dictionary"})}return(P,V)=>{const d=D,n=o("ElButton"),p=z,b=o("ElCol"),g=o("ElRow"),C=N,B=k;return S(),h("div",null,[e(p,{title:l(i).name==="routerName"?"新增基础字典":"编辑基础字典"},{default:t(()=>[e(n,{size:"default",round:"",onClick:a},{icon:t(()=>[e(d,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(C,null,{default:t(()=>[e(g,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e($,{id:l(i).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(n,{type:"primary",size:"large",onClick:m},{default:t(()=>[s(" 提交 ")]),_:1}),e(n,{size:"large",onClick:f},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}}),j=T(I,[["__scopeId","data-v-6e13a6a9"]]);export{j as default};
