
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as b,z as T,A as j,L as z,B as A,C as I,r as N,o,i as p,w as H,k as e,c as m,p as c,a as $,aA as L,M as l,a0 as V,a1 as F,l as u,T as Y,H as D,y as E,_ as K}from"./index-DEkb9qM_.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang-DUWD7anR.js";import{_ as q}from"./rightSide.vue_vue_type_script_setup_true_lang-CZVzkX5a.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-BmVRkWuv.js";import{u as J}from"./useMenu-DymeWSDw.js";import"./tools.vue_vue_type_script_setup_true_lang-B72tuK-L.js";import"./index-Dwj57QM0.js";import"./index-C73m4twj.js";import"./item.vue_vue_type_script_setup_true_lang-QV44G4ut.js";import"./index.vue_vue_type_script_setup_true_lang-3_qiogf3.js";import"./HDropdown-DE8frjbL.js";import"./HTabList.vue_vue_type_script_setup_true_lang-D0dXu_mi.js";import"./use-resolve-button-type-CV2_IWSH.js";import"./index.vue_vue_type_script_setup_true_lang-C_-p6egz.js";import"./panel-BwI1fafm.js";import"./sortable.esm-BS5toX6s.js";import"./index.vue_vue_type_script_setup_true_lang-C0RgG5bo.js";import"./index-SG504U6J.js";import"./index-DhVCfvgR.js";import"./index.vue_vue_type_script_setup_true_lang-D5VKU_Cc.js";import"./index.vue_vue_type_script_setup_true_lang-pBVyzeKP.js";import"./HKbd-BAuv3vZw.js";import"./index-CYAza0f7.js";import"./HBadge.vue_vue_type_script_setup_true_lang-skK6jr8i.js";import"./panel-pNjiIY00.js";import"./notification-DTghXUKb.js";import"./index-D6aRdwJg.js";import"./useMainPage-DAesw8GO.js";import"./useTabbar-Cnq8Zw8L.js";import"./sub.vue_vue_type_script_setup_true_lang-ChA_cG0X.js";import"./item-wmcqb8q2.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-Dti0fkgQ.js";const O={key:0},P={class:"header-container"},Q=["title","onClick"],U={class:"inline-flex flex-1 items-center justify-center gap-1"},X={class:"w-full flex-1 truncate text-sm transition-height transition-opacity transition-width"},Z=b({name:"LayoutHeader",__name:"index",setup(ee){const f=T(),n=j(),i=z(),{switchTo:B}=J(),h=A(I,Function,!0);function _(a,d,r){let t;return!a&&d||a&&!r?t=d:a&&r&&(t=r),t}const v=N();function R(a){(a.deltaY||a.detail!==0)&&v.value.scrollBy({left:(a.deltaY||a.detail)>0?50:-50})}return(a,d)=>{const r=E;return o(),p(Y,{name:"header"},{default:H(()=>[e(n).mode==="pc"&&["head","only-head"].includes(e(n).settings.menu.menuMode)?(o(),m("header",O,[c("div",P,[$(W,{class:"title"}),c("div",{ref_key:"menuRef",ref:v,class:"menu-container",onWheel:L(R,["prevent"])},[e(n).settings.menu.menuMode==="head"?(o(),m("div",{key:0,class:l(["menu flex of-hidden transition-all",{[`menu-active-${e(n).settings.menu.menuActiveStyle}`]:e(n).settings.menu.menuActiveStyle!==""}])},[(o(!0),m(V,null,F(e(i).allMenus,(t,s)=>{var g,y,k,S,x,M,w,C;return o(),m("div",{key:s,class:l(["menu-item relative transition-all",{active:s===e(i).actived,"px-1 py-2":e(n).settings.menu.isRounded}])},[t.children&&t.children.length!==0?(o(),m("div",{key:0,class:l(["group menu-item-container h-full w-full flex cursor-pointer items-center justify-between gap-1 px-3 text-[var(--g-header-menu-color)] transition-all hover:bg-[var(--g-header-menu-hover-bg)] hover:text-[var(--g-header-menu-hover-color)]",{"text-[var(--g-header-menu-active-color)]! bg-[var(--g-header-menu-active-bg)]!":s===e(i).actived,"rounded-2":e(n).settings.menu.isRounded}]),title:e(h)((g=t.meta)==null?void 0:g.i18n,(y=t.meta)==null?void 0:y.title),onClick:te=>e(B)(s)},[c("div",U,[_(s===e(i).actived,(k=t.meta)==null?void 0:k.icon,(S=t.meta)==null?void 0:S.activeIcon)?(o(),p(r,{key:0,name:_(s===e(i).actived,(x=t.meta)==null?void 0:x.icon,(M=t.meta)==null?void 0:M.activeIcon),size:20,class:"menu-item-container-icon transition-transform group-hover:scale-120",async:""},null,8,["name"])):u("",!0),c("span",X,D(e(h)((w=t.meta)==null?void 0:w.i18n,(C=t.meta)==null?void 0:C.title)),1)])],10,Q)):u("",!0)],2)}),128))],2)):e(n).settings.menu.menuMode==="only-head"?(o(),p(G,{key:1,menu:e(i).allMenus,value:e(f).meta.activeMenu||e(f).path,mode:"horizontal","show-collapse-name":"",rounded:e(n).settings.menu.isRounded,direction:e(n).settings.app.direction,class:l(["menu",{[`menu-active-${e(n).settings.menu.menuActiveStyle}`]:e(n).settings.menu.menuActiveStyle!==""}])},null,8,["menu","value","rounded","direction","class"])):u("",!0)],544),$(q)])])):u("",!0)]),_:1})}}}),Ie=K(Z,[["__scopeId","data-v-8fd3a85a"]]);export{Ie as default};
