
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as f,v as d,N as _,x,O as m,r as v,ao as p,q as w,c as g,a as n,F as t,w as b,am as h,o as N,b as S,G as B,l as k,M as y,d as l}from"./index-zX-UbP25.js";const I={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg:flex-row -translate-x-50% -translate-y-50% lg:gap-12"},C={class:"flex flex-col gap-4"},M=t("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1),R=t("div",{class:"desc mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1),V=f({__name:"[...all]",setup(P){const a=d(),c=_(),o=x(),r=m(),e=v({inter:Number.NaN,countdown:5});p(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),w(()=>{o.settings.tabbar.enable&&r.remove(a.meta.activeMenu||a.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){c.push(o.settings.home.fullPath)}return(T,$)=>{const i=y,u=h;return N(),g("div",I,[n(i,{name:"404",class:"text-[300px] lg:text-[400px]"}),t("div",C,[M,R,t("div",null,[n(u,{onClick:s},{default:b(()=>[S(B(k(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof l=="function"&&l(V);export{V as default};
