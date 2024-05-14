
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f,z as d,J as _,A as x,K as m,r as p,am as v,q as w,c as b,a as n,p as t,w as g,ak as h,o as k,b as S,H as B,k as N,y,d as l}from"./index-DEkb9qM_.js";const I={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg:flex-row -translate-x-50% -translate-y-50% lg:gap-12"},C={class:"flex flex-col gap-4"},R=t("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1),V=t("div",{class:"desc mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1),H=f({__name:"[...all]",setup(M){const a=d(),c=_(),o=x(),r=m(),e=p({inter:Number.NaN,countdown:5});v(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),w(()=>{o.settings.tabbar.enable&&r.remove(a.meta.activeMenu||a.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){c.push(o.settings.home.fullPath)}return(P,T)=>{const i=y,u=h;return k(),b("div",I,[n(i,{name:"404",class:"text-[300px] lg:text-[400px]"}),t("div",C,[R,V,t("div",null,[n(u,{onClick:s},{default:g(()=>[S(B(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof l=="function"&&l(H);export{H as default};
