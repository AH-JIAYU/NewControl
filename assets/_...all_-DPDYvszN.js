
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f,s as d,K as _,t as x,L as m,r as v,am as p,B as w,c as b,a as n,q as t,w as g,ak as h,o as k,b as B,D as S,k as N,J as y,d as l}from"./index-B13k3BKp.js";const I={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg:flex-row -translate-x-50% -translate-y-50% lg:gap-12"},C={class:"flex flex-col gap-4"},R=t("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1),V=t("div",{class:"desc mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1),D=f({__name:"[...all]",setup(L){const a=d(),c=_(),s=x(),r=m(),e=v({inter:Number.NaN,countdown:5});p(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),w(()=>{s.settings.tabbar.enable&&r.remove(a.meta.activeMenu||a.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){c.push(s.settings.home.fullPath)}return(M,P)=>{const i=y,u=h;return k(),b("div",I,[n(i,{name:"404",class:"text-[300px] lg:text-[400px]"}),t("div",C,[R,V,t("div",null,[n(u,{onClick:o},{default:g(()=>[B(S(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof l=="function"&&l(D);export{D as default};
