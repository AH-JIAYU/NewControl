
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{p as A,x as j,$ as O,a1 as $,r as K,h as V,g as U,v as q,b1 as J,P as Q,q as G,ar as k,aJ as X,i as Y,o as C,c as Z,F as v,a as l,Q as I,l as s,aC as ee,t as T,aE as E,w as N,T as te,j as W,aw as oe,b2 as ae,n as H,a7 as ie,M as se,_ as ne}from"./index-C3PJOLdt.js";import re from"./index-CYDRYBHn.js";import le from"./index-D7qd78l0.js";import me from"./index-CM1vGnrp.js";import pe from"./index-CTDYPOC_.js";import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang-CI0egixp.js";import de from"./index-nymbORi6.js";import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang-BVo3na-X.js";import"./sortable.esm-BS5toX6s.js";import"./index-TSqjRFBt.js";/* empty css                                                              */import fe from"./iframe-DnoHRcsg.js";import he from"./link-1v7D1j8T.js";import ge from"./index-BHtaS5rz.js";import{_ as _e}from"./index.vue_vue_type_script_setup_true_lang-h18HWbSV.js";import{u as ye}from"./useMainPage-BpkO9xp4.js";import{u as be}from"./useMenu-sYQhVTX6.js";import"./index.vue_vue_type_script_setup_true_lang-D_P1n9xg.js";import"./rightSide.vue_vue_type_script_setup_true_lang--TS1P1AV.js";import"./tools.vue_vue_type_script_setup_true_lang-D5byB0bQ.js";import"./index-DYlGELl0.js";import"./index-C3BVaD0z.js";import"./item.vue_vue_type_script_setup_true_lang-CFfBOxSr.js";import"./index.vue_vue_type_script_setup_true_lang-7pv6Z1Ph.js";import"./HDropdown-BRGEmGgw.js";import"./HTabList.vue_vue_type_script_setup_true_lang-BRXZJG_m.js";import"./use-resolve-button-type-BBs0E0cm.js";import"./index.vue_vue_type_script_setup_true_lang-B7GjchAH.js";import"./panel-BzLQsZ_v.js";import"./index.vue_vue_type_script_setup_true_lang-CdcX-iQK.js";import"./index-Cc-afjau.js";import"./index-Ccn6EZfz.js";import"./index.vue_vue_type_script_setup_true_lang-Cd2BsWCU.js";import"./index.vue_vue_type_script_setup_true_lang-CXsZGzDp.js";import"./HKbd-D-IoO_Ss.js";import"./index-Dun7mRIE.js";import"./HBadge.vue_vue_type_script_setup_true_lang-D52GpbCr.js";import"./panel-28BorBHv.js";import"./notification-z_VXSJ_o.js";import"./index-DAlMhJ74.js";import"./useTabbar-D5-A52A4.js";import"./index.vue_vue_type_script_setup_true_lang-DxespKbi.js";import"./sub.vue_vue_type_script_setup_true_lang-Dck-69kj.js";import"./item-CTY_CX6t.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-BVd5H3Fy.js";import"./index-BticgEEQ.js";import"./moreAction-_FmmEQyq.js";import"./index-TGVt4pHV.js";import"./leftSide.vue_vue_type_script_setup_true_lang-C-7Y8wjA.js";import"./HCheckList.vue_vue_type_script_setup_true_lang-COnTYgT9.js";import"./HToggle.vue_vue_type_script_setup_true_lang-BUXINc0Q.js";import"./HDialog.vue_vue_type_script_setup_true_lang-Ch1KIeYN.js";function ve(){const p={},e={id:"wm_div_id",prefix:"mask_div_id",text:"测试水印",x:20,y:20,rows:0,cols:0,x_space:50,y_space:50,font:"微软雅黑",color:"black",fontsize:"18px",alpha:.15,width:100,height:100,angle:15,parent_width:0,parent_height:0,parent_node:null,monitor:!0};let o=!1;const g=new MutationObserver(_);function c(t){var F;Object.assign(e,t);const d=document.getElementById(e.id);(F=d==null?void 0:d.parentNode)==null||F.removeChild(d);const w=e.parent_node,a=w||document.body,m=Math.max(a.scrollWidth,a.clientWidth),M=Math.max(a.scrollHeight,a.clientHeight);let b=0,u=0;t.parent_width||t.parent_height?a&&(b=a.offsetTop||0,u=a.offsetLeft||0,e.x=e.x+u,e.y=e.y+b):a&&(b=a.offsetTop||0,u=a.offsetLeft||0);let n=document.getElementById(e.id),x=null;if(n)n.shadowRoot&&(x=n.shadowRoot);else{n=document.createElement("div"),n.id=e.id,n.setAttribute("style","pointer-events: none !important; display: block !important"),typeof n.attachShadow=="function"?x=n.attachShadow({mode:"open"}):x=n;const r=a.children,h=Math.floor(Math.random()*(r.length-1));r[h]?a.insertBefore(n,r[h]):a.appendChild(n)}e.cols=Math.floor((m-e.x)/(e.width+e.x_space));const R=Math.floor((m-e.x-e.width*e.cols)/e.cols);e.x_space=R&&e.x_space;let z;e.rows=Math.floor((M-e.y)/(e.height+e.y_space));const D=Math.floor((M-e.y-e.height*e.rows)/e.rows);e.y_space=D&&e.y_space;let L;w?(z=e.x+e.width*e.cols+e.x_space*(e.cols-1),L=e.y+e.height*e.rows+e.y_space*(e.rows-1)):(z=u+e.x+e.width*e.cols+e.x_space*(e.cols-1),L=b+e.y+e.height*e.rows+e.y_space*(e.rows-1));let P,B;for(let r=0;r<e.rows;r++){w?B=b+e.y+(e.y_space+e.height)*r:B=e.y+(M-L)/2+(e.y_space+e.height)*r;for(let h=0;h<e.cols;h++){w?P=u+e.x+(m-z)/2+(e.width+e.x_space)*h:P=e.x+(m-z)/2+(e.width+e.x_space)*h;const i=document.createElement("div");i.innerHTML=e.text.replace(/\n/g,"<br>"),i.id=e.prefix+r+h,i.style.transform=`rotate(-${e.angle}deg)`,i.style.visibility="",i.style.position="absolute",i.style.left=`${P}px`,i.style.top=`${B}px`,i.style.overflow="hidden",i.style.zIndex="9999999",i.style.opacity=`${e.alpha}`,i.style.fontSize=e.fontsize,i.style.fontFamily=e.font,i.style.color=e.color,i.style.textAlign="center",i.style.width=`${e.width}px`,i.style.height=`${e.height}px`,i.style.display="block",i.style.userSelect="none",x==null||x.appendChild(i)}}if(e.monitor){const r={childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"],attributeOldValue:!0};g.observe(a,r),g.observe(document.getElementById(e.id).shadowRoot,r)}}function f(){var d;const t=document.getElementById(e.id);(d=t==null?void 0:t.parentNode)==null||d.removeChild(t),g.disconnect()}function _(t){if(o){o=!1;return}(p&&t.length===1||t.length===1&&t[0].removedNodes.length>=1)&&c(p)}return{init:function(t){Object.assign(p,t),c(t)},remove:function(){o=!0,f()}}}const we=A("watermark",()=>{const p=j(),e=O(),{init:o,remove:g}=ve();$(()=>p.settings.app.enableWatermark,t=>{t?_():S()},{immediate:!0}),$(()=>p.settings.app.colorScheme,()=>{p.settings.app.enableWatermark&&_()});const c=K({}),f=V({get(){return Object.assign({text:`Fantastic-admin
当前用户：${e.account}`,width:150,x:0,y:0,x_space:50,y_space:50,alpha:.1,color:p.settings.app.colorScheme==="light"?"black":"white"},c.value)},set(t){y(t)}});$(f,()=>{p.settings.app.enableWatermark&&_()},{deep:!0});function _(){o(f.value)}function S(){try{g()}catch{}}function y(t={}){c.value=t}return{update:y}}),xe=we,ke={class:"layout"},Se={class:"wrapper"},Me={class:"main"},Ce=U({name:"Layout",__name:"index",setup(p){const e=q(),o=j(),g=J(),c=Q();xe();const f=ye(),_=be(),S=V(()=>!!e.meta.iframe),y=V(()=>!!e.meta.link);$(()=>o.settings.menu.subMenuCollapse,a=>{o.mode==="mobile"&&(a?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden"))}),$(()=>e.path,()=>{o.mode==="mobile"&&o.$patch(a=>{a.settings.menu.subMenuCollapse=!0})}),G(()=>{k("f5",a=>{o.settings.toolbar.pageReload&&(a.preventDefault(),f.reload())}),k("alt+`",a=>{o.settings.menu.enableHotkeys&&(a.preventDefault(),_.switchTo(c.actived+1<c.allMenus.length?c.actived+1:0))}),k("alt+up,alt+down",(a,m)=>{switch(a.preventDefault(),m.key){case"alt+up":f.maximize(!0);break;case"alt+down":f.maximize(!1);break}})}),X(()=>{k.unbind("f5"),k.unbind("alt+`"),k.unbind("alt+up,alt+down")});let t;function d(){t==null||t(),o.setHoverSidebar(!0)}function w(){t==null||t(),{stop:t}=ie(()=>{o.setHoverSidebar(!1)},300)}return(a,m)=>{const M=se,b=Y("RouterView");return C(),Z("div",ke,[v("div",{id:"app-main",class:I({"main-page-maximize":s(o).mainPageMaximizeStatus})},[l(re),v("div",Se,[v("div",{class:I(["sidebar-container",{show:s(o).mode==="mobile"&&!s(o).settings.menu.subMenuCollapse}]),onMouseenter:d,onMouseleave:w},[l(le),l(me)],34),v("div",{class:I(["sidebar-mask",{show:s(o).mode==="mobile"&&!s(o).settings.menu.subMenuCollapse}]),onClick:m[0]||(m[0]=u=>s(o).toggleSidebarCollapse())},null,2),v("div",{class:"main-container",style:ee({"padding-bottom":s(e).meta.paddingBottom})},[l(pe),v("div",Me,[T(v("div",{class:"exit-main-page-maximize",onClick:m[1]||(m[1]=u=>s(o).setMainPageMaximize())},[l(M,{name:"i-ri:logout-box-line"})],512),[[E,s(o).mainPageMaximizeStatus]]),l(b,null,{default:N(({Component:u,route:n})=>[l(te,{name:s(o).settings.mainPage.enableTransition?s(o).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:N(()=>[(C(),W(ae,{include:s(g).list},[T((C(),W(oe(u),{key:n.fullPath})),[[E,!(s(S)||s(y))]])],1032,["include"]))]),_:2},1032,["name"])]),_:1}),T(l(fe,null,null,512),[[E,s(S)&&!s(y)]]),s(y)?(C(),W(he,{key:0})):H("",!0)]),l(ge)],4)])],2),l(ce),s(o).settings.userPreferences.enable?(C(),W(de,{key:0})):H("",!0),l(ue),H("",!0),l(_e)])}}}),Mt=ne(Ce,[["__scopeId","data-v-aa005c75"]]);export{Mt as default};
