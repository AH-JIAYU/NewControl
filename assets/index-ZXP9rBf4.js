
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as j,q as B,s as I,L as T,t as N,v as z,r as L,o,j as p,w as V,l as e,c as m,p as c,a as $,au as A,M as l,a0 as F,a1 as H,n as u,T as Y,C as q,I as D,_ as E}from"./index-C4wi2QcV.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-DO8wrA4Y.js";import{_ as W}from"./rightSide.vue_vue_type_script_setup_true_lang-BrMWV6qm.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-Bihr9-B6.js";import{u as J}from"./useMenu-DQjzYc7g.js";import"./tools.vue_vue_type_script_setup_true_lang-DnPk_1Fj.js";import"./index-BHK8ZbPh.js";import"./index-19GWcBqU.js";import"./item.vue_vue_type_script_setup_true_lang-DBcn9ZWu.js";import"./index.vue_vue_type_script_setup_true_lang-Bo9EYiot.js";import"./HDropdown-CUFcTFcn.js";import"./HTabList.vue_vue_type_script_setup_true_lang-BpTN3ci7.js";import"./use-resolve-button-type-cvDH0zuy.js";import"./index.vue_vue_type_script_setup_true_lang-DHBLvOst.js";import"./panel-CNvxZ3Iq.js";import"./sortable.esm-BS5toX6s.js";import"./index.vue_vue_type_script_setup_true_lang-CIiPNJVx.js";import"./index-D7-Cvkh5.js";import"./index-BajVIxrD.js";import"./index.vue_vue_type_script_setup_true_lang-CscgjG8q.js";import"./index.vue_vue_type_script_setup_true_lang-DKVcTM_M.js";import"./HKbd-DGV4ROUk.js";import"./index-oHoxZIG1.js";import"./HBadge.vue_vue_type_script_setup_true_lang-C6iwxQBB.js";import"./panel-DtHc4NuT.js";import"./notification-Bvv6LZ4G.js";import"./index-DpP6FzDZ.js";import"./useMainPage-CKDdVpJF.js";import"./useTabbar-_a_NTmrY.js";import"./sub.vue_vue_type_script_setup_true_lang-BZG4tJHA.js";import"./item-DmOe87RI.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-Ct4cybYT.js";const O={key:0},P={class:"header-container"},Q=["title","onClick"],U={class:"inline-flex flex-1 items-center justify-center gap-1"},X={class:"w-full flex-1 truncate text-sm transition-height transition-opacity transition-width"},Z=j({name:"LayoutHeader",__name:"index",setup(ee){const f=B(),n=I(),s=T(),{switchTo:R}=J(),h=N(z,Function,!0);function _(a,d,r){let t;return!a&&d||a&&!r?t=d:a&&r&&(t=r),t}const v=L();function b(a){(a.deltaY||a.detail!==0)&&v.value.scrollBy({left:(a.deltaY||a.detail)>0?50:-50})}return(a,d)=>{const r=D;return o(),p(Y,{name:"header"},{default:V(()=>[e(n).mode==="pc"&&["head","only-head"].includes(e(n).settings.menu.menuMode)?(o(),m("header",O,[c("div",P,[$(K,{class:"title"}),c("div",{ref_key:"menuRef",ref:v,class:"menu-container",onWheel:A(b,["prevent"])},[e(n).settings.menu.menuMode==="head"?(o(),m("div",{key:0,class:l(["menu flex of-hidden transition-all",{[`menu-active-${e(n).settings.menu.menuActiveStyle}`]:e(n).settings.menu.menuActiveStyle!==""}])},[(o(!0),m(F,null,H(e(s).allMenus,(t,i)=>{var g,y,k,S,x,M,w,C;return o(),m("div",{key:i,class:l(["menu-item relative transition-all",{active:i===e(s).actived,"px-1 py-2":e(n).settings.menu.isRounded}])},[t.children&&t.children.length!==0?(o(),m("div",{key:0,class:l(["group menu-item-container h-full w-full flex cursor-pointer items-center justify-between gap-1 px-3 text-[var(--g-header-menu-color)] transition-all hover:bg-[var(--g-header-menu-hover-bg)] hover:text-[var(--g-header-menu-hover-color)]",{"text-[var(--g-header-menu-active-color)]! bg-[var(--g-header-menu-active-bg)]!":i===e(s).actived,"rounded-2":e(n).settings.menu.isRounded}]),title:e(h)((g=t.meta)==null?void 0:g.i18n,(y=t.meta)==null?void 0:y.title),onClick:te=>e(R)(i)},[c("div",U,[_(i===e(s).actived,(k=t.meta)==null?void 0:k.icon,(S=t.meta)==null?void 0:S.activeIcon)?(o(),p(r,{key:0,name:_(i===e(s).actived,(x=t.meta)==null?void 0:x.icon,(M=t.meta)==null?void 0:M.activeIcon),size:20,class:"menu-item-container-icon transition-transform group-hover:scale-120",async:""},null,8,["name"])):u("",!0),c("span",X,q(e(h)((w=t.meta)==null?void 0:w.i18n,(C=t.meta)==null?void 0:C.title)),1)])],10,Q)):u("",!0)],2)}),128))],2)):e(n).settings.menu.menuMode==="only-head"?(o(),p(G,{key:1,menu:e(s).allMenus,value:e(f).meta.activeMenu||e(f).path,mode:"horizontal","show-collapse-name":"",rounded:e(n).settings.menu.isRounded,direction:e(n).settings.app.direction,class:l(["menu",{[`menu-active-${e(n).settings.menu.menuActiveStyle}`]:e(n).settings.menu.menuActiveStyle!==""}])},null,8,["menu","value","rounded","direction","class"])):u("",!0)],544),$(W)])])):u("",!0)]),_:1})}}}),ze=E(Z,[["__scopeId","data-v-8fd3a85a"]]);export{ze as default};
