
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as p}from"./index-bDIYpz1f.js";import{f as d,n as b,I as g,p as B,r as k,h as y,o as h,c as v,a as e,w as t,k as x,b as i,z as C,e as S,_ as R}from"./index-BT9-YC42.js";import z from"./index-DKTngzIG.js";import{u as E}from"./useTabbar-DxCJu9Py.js";import"./setting_questionnaireLibrary--jb2wD6d.js";const L={class:"absolute-container"},T=d({name:"SettingQuestionnaireLibraryDetail",__name:"detail",setup(w){const c=b(),u=g(),l=E(),a=B(),n=k();function o(){n.value.submit().then(()=>{C.emit("get-data-list"),s()})}function _(){s()}function s(){a.settings.tabbar.enable&&a.settings.tabbar.mergeTabsBy!=="activeMenu"?l.close({name:"screenLibrary"}):u.push({name:"screenLibrary"})}return(D,F)=>{const m=S,r=y("ElButton"),f=p;return h(),v("div",L,[e(m,null,{default:t(()=>[e(z,{id:x(c).params.id,ref_key:"formRef",ref:n,onOnSubmit:o},null,8,["id"])]),_:1}),e(f,null,{default:t(()=>[e(r,{type:"primary",size:"large",onClick:o},{default:t(()=>[i(" 提交 ")]),_:1}),e(r,{size:"large",onClick:_},{default:t(()=>[i(" 取消 ")]),_:1})]),_:1})])}}}),O=R(T,[["__scopeId","data-v-faa040cd"]]);export{O as default};
