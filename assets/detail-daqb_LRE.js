
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as x}from"./index-3RvriCdG.js";import{g as B,v,N as R,x as S,r as w,i as o,o as y,c as M,a as e,w as t,b as s,l as c,D as h,M as N,ap as $,e as z,d as _}from"./index-zX-UbP25.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-DSmA9se7.js";import{u as D}from"./useTabbar-BxJ-ZlRa.js";import"./setting_user-DZ7tjb3u.js";const G=B({name:"SettingUserDetail",__name:"detail",setup(L){const l=v(),u=R(),m=D(),r=S(),i=w();function f(){i.value.submit().then(()=>{h.emit("get-data-list"),n()})}function p(){n()}function n(){r.settings.tabbar.enable&&r.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"pagesExampleGeneralManagerList"}):u.push({name:"pagesExampleGeneralManagerList"})}return(P,V)=>{const d=N,a=o("ElButton"),g=$,b=o("ElCol"),C=o("ElRow"),E=z,k=x;return y(),M("div",null,[e(g,{title:c(l).name==="routerName"?"新增用户":"编辑用户"},{default:t(()=>[e(a,{size:"default",round:"",onClick:n},{icon:t(()=>[e(d,{name:"i-ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(E,null,{default:t(()=>[e(C,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(T,{id:c(l).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:f},{default:t(()=>[s(" 提交 ")]),_:1}),e(a,{size:"large",onClick:p},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}});typeof _=="function"&&_(G);export{G as default};
