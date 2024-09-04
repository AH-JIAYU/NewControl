
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as m,n as h,p as g,cp as w,r as x,X as b,o as l,c as r,$ as v,a0 as k,k as a,a1 as S,L as I,a as u,w as L,aj as d,A as p,c9 as _,T as P,H as T,_ as V}from"./index-BWsHdh2I.js";const z={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},B=["data-path","src"],C={class:"absolute left-0 top-0 h-full w-full flex-center bg-stone-2/75 dark:bg-stone-8/75"},R=m({name:"IframeView",__name:"iframe",setup(y){const s=h(),f=g(),i=w(),c=x();return b(()=>s.fullPath,o=>{S(()=>{var n;(n=c.value)==null||n.forEach(t=>{t.dataset.path===o&&(t.onload=()=>{i.closeLoading(o)})})})},{immediate:!0}),(o,n)=>{const t=T;return l(),r("div",z,[(l(!0),r(v,null,k(a(i).openedList,e=>(l(),r("div",{key:e.path,class:I(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(s).fullPath===e.path}])},[u(P,{name:a(f).settings.mainPage.enableTransition?a(f).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:L(()=>[d(p("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,B),[[_,a(s).fullPath===e.path]])]),_:2},1032,["name"]),d(p("div",C,[u(t,{name:"i-line-md:loading-twotone-loop",size:36})],512),[[_,e.isLoading]])],2))),128))])}}}),N=V(R,[["__scopeId","data-v-1b4490bf"]]);export{N as default};
