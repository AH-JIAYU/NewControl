
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as p,D as h,y as g,aI as w,r as x,Y as b,o as l,c as r,a0 as v,a1 as k,k as a,a2 as S,M as I,a as u,w as P,ai as d,A as _,aC as m,T as C,x as L,_ as T}from"./index-b9-Qwvd3.js";const V={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},y=["data-path","src"],z={class:"absolute left-0 top-0 h-full w-full flex-center bg-stone-2/75 dark:bg-stone-8/75"},B=p({name:"IframeView",__name:"iframe",setup(R){const s=h(),f=g(),i=w(),c=x();return b(()=>s.fullPath,o=>{S(()=>{var n;(n=c.value)==null||n.forEach(t=>{t.dataset.path===o&&(t.onload=()=>{i.closeLoading(o)})})})},{immediate:!0}),(o,n)=>{const t=L;return l(),r("div",V,[(l(!0),r(v,null,k(a(i).openedList,e=>(l(),r("div",{key:e.path,class:I(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(s).fullPath===e.path}])},[u(C,{name:a(f).settings.mainPage.enableTransition?a(f).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:P(()=>[d(_("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,y),[[m,a(s).fullPath===e.path]])]),_:2},1032,["name"]),d(_("div",z,[u(t,{name:"i-line-md:loading-twotone-loop",size:36})],512),[[m,e.isLoading]])],2))),128))])}}}),E=T(B,[["__scopeId","data-v-1b4490bf"]]);export{E as default};
