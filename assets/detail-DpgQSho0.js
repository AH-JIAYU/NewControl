
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as p}from"./index-UcsmwxhH.js";import{d,k as b,F as g,l as B,r as k,a as v,o as y,b as h,f as e,w as t,i as x,g as i,v as C,ah as S,I as R}from"./index-RnQyqHX0.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-JwYsGSZ_.js";import{u as L}from"./useTabbar-CqwIsJDB.js";import"./setting_questionnaireLibrary-CnL9fOr6.js";import"./setting_basisDictionary-e6i0TZLY.js";const T={class:"absolute-container"},w=d({name:"SettingQuestionnaireLibraryDetail",__name:"detail",setup(z){const c=b(),u=g(),_=L(),a=B(),n=k();function o(){n.value.submit().then(()=>{C.emit("get-data-list"),s()})}function l(){s()}function s(){a.settings.tabbar.enable&&a.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"screenLibrary"}):u.push({name:"screenLibrary"})}return(F,I)=>{const m=S,r=v("ElButton"),f=p;return y(),h("div",T,[e(m,null,{default:t(()=>[e(E,{id:x(c).params.id,ref_key:"formRef",ref:n,onOnSubmit:o},null,8,["id"])]),_:1}),e(f,null,{default:t(()=>[e(r,{type:"primary",size:"large",onClick:o},{default:t(()=>[i(" 提交 ")]),_:1}),e(r,{size:"large",onClick:l},{default:t(()=>[i(" 取消 ")]),_:1})]),_:1})])}}}),O=R(w,[["__scopeId","data-v-0948e07d"]]);export{O as default};
