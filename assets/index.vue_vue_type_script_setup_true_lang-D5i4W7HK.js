
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g,x as u,r as a,h,i as m,o,j as _,w as d,c as r,l as e,n as l,G as f,Q as w}from"./index-zX-UbP25.js";const k=""+new URL("logo-CLz_KCqM.png",import.meta.url).href,x=["src"],L={key:1,class:"block truncate font-bold"},B=g({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(C){const t=u(),s=a("综合资源管理系统"),i=a(k),c=h(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,b)=>{const p=m("RouterLink");return o(),_(p,{to:e(c),class:w(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-pointer":e(t).settings.home.enable}]),title:e(s)},{default:d(()=>[n.showLogo?(o(),r("img",{key:0,src:e(i),class:"logo h-[30px] w-[30px] object-contain"},null,8,x)):l("",!0),n.showTitle?(o(),r("span",L,f(e(s)),1)):l("",!0)]),_:1},8,["to","class","title"])}}});export{B as _};
