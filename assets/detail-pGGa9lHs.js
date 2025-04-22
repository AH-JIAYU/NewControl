
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as p}from"./index-Cr-3A0Z-.js";import{d,k as b,F as g,l as B,r as k,a as v,o as y,b as h,f as e,w as t,i as x,g as i,v as C,ah as S,I as R}from"./index-DC3paojg.js";import{D}from"./index-CQrCou2C.js";import{u as E}from"./useTabbar-DgLMubEp.js";import"./setting_questionnaireLibrary-CN5HZfic.js";import"./setting_basisDictionary-D22hKgq2.js";const F={class:"absolute-container"},L=d({name:"SettingQuestionnaireLibraryDetail",__name:"detail",setup(T){const c=b(),u=g(),l=E(),a=B(),n=k();function o(){n.value.submit().then(()=>{C.emit("get-data-list"),s()})}function m(){s()}function s(){a.settings.tabbar.enable&&a.settings.tabbar.mergeTabsBy!=="activeMenu"?l.close({name:"screenLibrary"}):u.push({name:"screenLibrary"})}return(w,z)=>{const _=S,r=v("ElButton"),f=p;return y(),h("div",F,[e(_,null,{default:t(()=>[e(D,{id:x(c).params.id,ref_key:"formRef",ref:n,onOnSubmit:o},null,8,["id"])]),_:1}),e(f,null,{default:t(()=>[e(r,{type:"primary",size:"large",onClick:o},{default:t(()=>[i(" 提交 ")]),_:1}),e(r,{size:"large",onClick:m},{default:t(()=>[i(" 取消 ")]),_:1})]),_:1})])}}}),P=R(L,[["__scopeId","data-v-0948e07d"]]);export{P as default};
