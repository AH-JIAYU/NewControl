
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as p}from"./index-Ctt68Nf9.js";import{f as d,n as b,I as g,p as B,r as k,h as y,o as h,c as v,a as e,w as t,k as x,b as i,z as C,e as S,_ as R}from"./index-CrP1nLrF.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-B48TbXtY.js";import{u as E}from"./useTabbar-ChItlHDC.js";import"./setting_questionnaireLibrary-BuYWWaot.js";import"./setting_basisDictionary-B_nRceAW.js";const L={class:"absolute-container"},T=d({name:"SettingQuestionnaireLibraryDetail",__name:"detail",setup(w){const c=b(),u=g(),_=E(),n=B(),a=k();function o(){a.value.submit().then(()=>{C.emit("get-data-list"),s()})}function l(){s()}function s(){n.settings.tabbar.enable&&n.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"screenLibrary"}):u.push({name:"screenLibrary"})}return(I,M)=>{const m=S,r=y("ElButton"),f=p;return h(),v("div",L,[e(m,null,{default:t(()=>[e(z,{id:x(c).params.id,ref_key:"formRef",ref:a,onOnSubmit:o},null,8,["id"])]),_:1}),e(f,null,{default:t(()=>[e(r,{type:"primary",size:"large",onClick:o},{default:t(()=>[i(" 提交 ")]),_:1}),e(r,{size:"large",onClick:l},{default:t(()=>[i(" 取消 ")]),_:1})]),_:1})])}}}),O=R(T,[["__scopeId","data-v-0948e07d"]]);export{O as default};
