
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as p,s as h,t as g,aK as w,r as x,Z as b,o as l,c as r,a1 as v,a2 as S,l as a,a3 as k,N as I,a as u,w as P,ai as d,q as _,aE as m,T as L,J as T,_ as V}from"./index-B4NyuzNm.js";const z={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},B=["data-path","src"],C={class:"absolute left-0 top-0 h-full w-full flex-center bg-stone-2/75 dark:bg-stone-8/75"},E=p({name:"IframeView",__name:"iframe",setup(N){const s=h(),f=g(),i=w(),c=x();return b(()=>s.fullPath,o=>{k(()=>{var n;(n=c.value)==null||n.forEach(t=>{t.dataset.path===o&&(t.onload=()=>{i.closeLoading(o)})})})},{immediate:!0}),(o,n)=>{const t=T;return l(),r("div",z,[(l(!0),r(v,null,S(a(i).openedList,e=>(l(),r("div",{key:e.path,class:I(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(s).fullPath===e.path}])},[u(L,{name:a(f).settings.mainPage.enableTransition?a(f).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:P(()=>[d(_("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,B),[[m,a(s).fullPath===e.path]])]),_:2},1032,["name"]),d(_("div",C,[u(t,{name:"i-line-md:loading-twotone-loop",size:36})],512),[[m,e.isLoading]])],2))),128))])}}}),y=V(E,[["__scopeId","data-v-1b4490bf"]]);export{y as default};
