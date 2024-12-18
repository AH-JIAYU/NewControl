
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{d as p,k as h,l as g,co as w,r as x,R as b,o as l,b as r,Y as v,Z as k,i as a,$ as S,J as I,f as u,w as P,aj as d,x as _,c9 as m,T as L,E as R,I as T}from"./index-AugZrloc.js";const V={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},z=["data-path","src"],B={class:"absolute left-0 top-0 h-full w-full flex-center bg-stone-2/75 dark:bg-stone-8/75"},C=p({name:"IframeView",__name:"iframe",setup(E){const s=h(),f=g(),i=w(),c=x();return b(()=>s.fullPath,o=>{S(()=>{var n;(n=c.value)==null||n.forEach(t=>{t.dataset.path===o&&(t.onload=()=>{i.closeLoading(o)})})})},{immediate:!0}),(o,n)=>{const t=R;return l(),r("div",V,[(l(!0),r(v,null,k(a(i).openedList,e=>(l(),r("div",{key:e.path,class:I(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(s).fullPath===e.path}])},[u(L,{name:a(f).settings.mainPage.enableTransition?a(f).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:P(()=>[d(_("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,z),[[m,a(s).fullPath===e.path]])]),_:2},1032,["name"]),d(_("div",B,[u(t,{name:"i-line-md:loading-twotone-loop",size:36})],512),[[m,e.isLoading]])],2))),128))])}}}),N=T(C,[["__scopeId","data-v-1b4490bf"]]);export{N as default};
