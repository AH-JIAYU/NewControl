
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as H,D as B,y as R,L as A,r as d,g as k,Y as y,p as O,k as e,o as c,c as m,a as u,M as l,A as p,w as T,a0 as $,a1 as j,aH as z,ai as v,aC as h,l as x,x as N,a2 as V,_ as D}from"./index-b9-Qwvd3.js";import{b as E}from"./index-DjIbCDI3.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-DqtLT1qg.js";import{_ as P}from"./index.vue_vue_type_script_setup_true_lang-BiTt1QTT.js";import"./sub.vue_vue_type_script_setup_true_lang-aAQ6MbQA.js";import"./item-CcJqpLgT.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-CFQhMAqs.js";import"./HBadge.vue_vue_type_script_setup_true_lang-49sDCJ0u.js";const q=H({name:"SubSidebar",__name:"index",setup(F){const S=B(),s=R(),t=A(),r=d(),M=d(!1),_=d(!1);function b(){const n=r.value.scrollTop;M.value=n>0;const o=r.value.clientHeight,i=r.value.scrollHeight;_.value=Math.ceil(n+o)<i}const g=k(()=>{var n;return s.mode==="mobile"||["side","head","single"].includes(s.settings.menu.menuMode)&&t.sidebarMenus.length!==0&&!(s.settings.menu.subMenuOnlyOneHide&&t.sidebarMenus.length===1&&(!t.sidebarMenus[0].children||(n=t.sidebarMenus[0])!=null&&n.children.every(o=>{var i;return((i=o.meta)==null?void 0:i.menu)===!1})))});y(g,n=>{n&&V(()=>{b()})},{immediate:!0});const C=d();O(()=>{if(g.value){const{height:n}=E(C);y(()=>n.value,()=>{n.value>0&&b()},{immediate:!0})}});const a=k(()=>s.mode==="pc"?!!(s.settings.menu.subMenuCollapse&&(!s.isHoverSidebar||s.isHoverSidebar&&!s.settings.menu.subMenuAutoCollapse)):s.settings.menu.subMenuCollapse);return(n,o)=>{const i=N;return e(g)?(c(),m("div",{key:0,class:l(["sub-sidebar-container",{"is-collapse":e(a),"shadow-side":e(s).isHoverSidebar&&e(s).settings.menu.subMenuAutoCollapse&&e(s).settings.menu.subMenuCollapse}])},[u(L,{"show-logo":e(s).settings.menu.menuMode==="single",class:l(["sidebar-logo",{"sidebar-logo-bg":e(s).settings.menu.menuMode==="single"}])},null,8,["show-logo","class"]),p("div",{ref_key:"subSidebarRef",ref:r,class:l(["sub-sidebar flex-1 transition-shadow-300",{"shadow-top":e(M),"shadow-bottom":e(_)}]),onScroll:b},[p("div",{ref_key:"menuRef",ref:C},[u(z,{name:"sub-sidebar"},{default:T(()=>[(c(!0),m($,null,j(e(t).allMenus,(f,w)=>v((c(),m("div",{key:w},[u(P,{menu:f.children,value:e(S).meta.activeMenu||e(S).path,"default-openeds":e(t).defaultOpenedPaths,"always-openeds":e(t).alwaysOpenedPaths,accordion:e(s).settings.menu.subMenuUniqueOpened,collapse:e(a),rounded:e(s).settings.menu.isRounded,direction:e(s).settings.app.direction,class:"menu"},null,8,["menu","value","default-openeds","always-openeds","accordion","collapse","rounded","direction"])],512)),[[h,w===e(t).actived]])),128))]),_:1})],512)],34),e(s).mode==="pc"?(c(),m("div",{key:0,class:l(["relative flex items-center px-4 py-3",{"justify-center":e(a),"justify-between":!e(a)&&e(s).settings.menu.enableSubMenuCollapseButton,"justify-end":!e(a)&&!e(s).settings.menu.enableSubMenuCollapseButton}])},[v(p("span",{class:"flex-center cursor-pointer rounded bg-stone-1 p-2 transition dark:bg-stone-9 hover:bg-stone-2 dark:hover:bg-stone-8",onClick:o[0]||(o[0]=f=>e(s).toggleSidebarAutoCollapse())},[u(i,{name:e(s).settings.menu.subMenuAutoCollapse?"i-lucide:pin-off":"i-lucide:pin"},null,8,["name"])],512),[[h,!e(a)||e(a)&&!e(s).settings.menu.enableSubMenuCollapseButton]]),v(p("span",{class:l(["flex-center cursor-pointer rounded bg-stone-1 p-2 transition dark:bg-stone-9 hover:bg-stone-2 dark:hover:bg-stone-8",{"-rotate-z-180":e(s).settings.menu.subMenuCollapse}]),onClick:o[1]||(o[1]=f=>e(s).toggleSidebarCollapse())},[u(i,{name:"toolbar-collapse"})],2),[[h,e(s).settings.menu.enableSubMenuCollapseButton]])],2)):x("",!0)],2)):x("",!0)}}}),X=D(q,[["__scopeId","data-v-5bbcf6e1"]]);export{X as default};
