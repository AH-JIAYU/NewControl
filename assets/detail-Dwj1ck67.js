
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as p}from"./index-GffOivhM.js";import{g as d,p as b,J as g,q as B,r as y,i as k,o as v,c as x,a as e,w as t,l as C,b as i,A as S,e as h,_ as R}from"./index-0FEud4J9.js";import E from"./index-DvN-xRlo.js";import{u as L}from"./useTabbar-DFHmRv3x.js";const T={class:"absolute-container"},w=d({name:"SettingQuestionnaireLibraryDetail",__name:"detail",setup(z){const c=b(),u=g(),l=L(),a=B(),n=y();function o(){n.value.submit().then(()=>{S.emit("get-data-list"),s()})}function _(){s()}function s(){a.settings.tabbar.enable&&a.settings.tabbar.mergeTabsBy!=="activeMenu"?l.close({name:"screenLibrary"}):u.push({name:"screenLibrary"})}return(A,D)=>{const m=h,r=k("ElButton"),f=p;return v(),x("div",T,[e(m,null,{default:t(()=>[e(E,{id:C(c).params.id,ref_key:"formRef",ref:n,onOnSubmit:o},null,8,["id"])]),_:1}),e(f,null,{default:t(()=>[e(r,{type:"primary",size:"large",onClick:o},{default:t(()=>[i(" 提交 ")]),_:1}),e(r,{size:"large",onClick:_},{default:t(()=>[i(" 取消 ")]),_:1})]),_:1})])}}}),q=R(w,[["__scopeId","data-v-faa040cd"]]);export{q as default};
