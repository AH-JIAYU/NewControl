
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as B,r as f,h as p,o as i,c as o,l as t,t as g,aE as S,aC as m,B as r,n as d,F as v,a as b,R as y,M as W,_ as $}from"./index-C3PJOLdt.js";const L={class:"flex-container"},w={class:"main"},R={key:0,class:"left-side-icon absolute top-1/2 z-1 h-6 w-6 flex-center cursor-pointer rounded-1/2 bg-[var(--g-container-bg)] -left-3"},C={key:1,class:"right-side-icon absolute top-1/2 z-1 h-6 w-6 flex-center cursor-pointer rounded-1/2 bg-[var(--g-container-bg)] -right-3"},V={class:"main-container"},T=B({name:"ListLayout",__name:"index",props:{enableLeftSide:{type:Boolean,default:!0},enableRightSide:{type:Boolean,default:!0},leftSideWidth:{default:300},rightSideWidth:{default:300},hideLeftSideToggle:{type:Boolean,default:!1},hideRightSideToggle:{type:Boolean,default:!1}},setup(_){const l=_,s=f(!0),a=f(!0),c=p(()=>l.enableLeftSide&&!!y().leftSide),u=p(()=>l.enableRightSide&&!!y().rightSide);return(e,n)=>{const h=W;return i(),o("div",L,[t(c)?g((i(),o("div",{key:0,class:"left-side",style:m({width:typeof e.leftSideWidth=="number"?`${e.leftSideWidth}px`:e.leftSideWidth})},[r(e.$slots,"leftSide",{},void 0,!0)],4)),[[S,t(s)]]):d("",!0),v("div",w,[t(c)&&!e.hideLeftSideToggle?(i(),o("div",R,[b(h,{name:t(s)?"i-ep:caret-left":"i-ep:caret-right",class:"op-30 transition-opacity hover:op-100",onClick:n[0]||(n[0]=k=>s.value=!t(s))},null,8,["name"])])):d("",!0),t(u)&&!e.hideRightSideToggle?(i(),o("div",C,[b(h,{name:t(a)?"i-ep:caret-right":"i-ep:caret-left",class:"op-30 transition-opacity hover:op-100",onClick:n[1]||(n[1]=k=>a.value=!t(a))},null,8,["name"])])):d("",!0),v("div",V,[r(e.$slots,"default",{},void 0,!0)])]),t(u)?g((i(),o("div",{key:1,class:"right-side",style:m({width:typeof e.rightSideWidth=="number"?`${e.rightSideWidth}px`:e.rightSideWidth})},[r(e.$slots,"rightSide",{},void 0,!0)],4)),[[S,t(a)]]):d("",!0)])}}}),N=$(T,[["__scopeId","data-v-19e18cc4"]]);export{N as _};
