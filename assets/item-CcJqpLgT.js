
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{_ as H}from"./HTooltip.vue_vue_type_script_setup_true_lang-CFQhMAqs.js";import{_ as V}from"./HBadge.vue_vue_type_script_setup_true_lang-49sDCJ0u.js";import{aZ as D,f as F,E as B,F as O,r as R,g as i,h as W,o,c as m,a as N,w as f,k as t,i as c,A as Z,M as s,l,B as G,at as J,j as L,ae as Q,aA as U,x as X,_ as Y}from"./index-b9-Qwvd3.js";const _=D("rootMenu"),ee=F({__name:"item",props:{uniqueKey:{},item:{},level:{default:0},subMenu:{type:Boolean,default:!1},expand:{type:Boolean,default:!1},alwaysExpand:{type:Boolean,default:!1}},setup(K,{expose:E}){const n=K,a=B(_),p=B(O,Function,!0),d=R(),v=i(()=>n.subMenu?a.subMenus[n.uniqueKey.at(-1)].active:a.activeIndex===n.uniqueKey.at(-1)),b=i(()=>v.value&&(!n.subMenu||a.isMenuPopup)),y=i(()=>{var u,r;let e;return(u=n.item.meta)!=null&&u.icon&&(e=n.item.meta.icon),v.value&&(r=n.item.meta)!=null&&r.activeIcon&&(e=n.item.meta.activeIcon),e}),S=i(()=>a.isMenuPopup?"":`padding-inline-start: ${20*(n.level??0)}px`);return E({ref:d}),(e,u)=>{const r=X,z=V,q=H,A=W("router-link");return o(),m("div",{ref_key:"itemRef",ref:d,class:s(["menu-item relative transition-all",{active:t(b),"px-2 py-1":t(a).props.rounded,"px-1! py-2!":t(a).props.rounded&&t(a).isMenuPopup&&e.level===0&&t(a).props.mode==="horizontal"}])},[N(A,{custom:"",to:e.uniqueKey.at(-1)??""},{default:f(({href:T,navigate:$})=>{var g,M;return[N(q,{enable:t(a).isMenuPopup&&e.level===0&&!e.subMenu,text:t(p)((g=e.item.meta)==null?void 0:g.i18n,(M=e.item.meta)==null?void 0:M.title),placement:"right",class:"h-full w-full"},{default:f(()=>{var h,w,P,k,I;return[(o(),c(U(e.subMenu?"div":"a"),L({...!e.subMenu&&{href:(h=e.item.meta)!=null&&h.link?e.item.meta.link:T,target:(w=e.item.meta)!=null&&w.newWindow||(P=e.item.meta)!=null&&P.link?"_blank":"_self",class:"no-underline"}},{class:["group menu-item-container h-full w-full flex items-center justify-between gap-1 px-5 py-4",{...t(a).isMenuPopup||!e.alwaysExpand?{"cursor-pointer text-[var(--g-sub-sidebar-menu-color)] transition-all hover:bg-[var(--g-sub-sidebar-menu-hover-bg)] hover:text-[var(--g-sub-sidebar-menu-hover-color)]":!0,"text-[var(--g-sub-sidebar-menu-active-color)]! bg-[var(--g-sub-sidebar-menu-active-bg)]!":t(b),"rounded-2":t(a).props.rounded,"px-3!":t(a).isMenuPopup&&e.level===0,"py-3!":t(a).props.rounded&&t(a).isMenuPopup&&e.level!==0}:{"py-2! opacity-30":!0}}],title:t(p)((k=e.item.meta)==null?void 0:k.i18n,(I=e.item.meta)==null?void 0:I.title)},Q({...!e.subMenu&&{click:$}})),{default:f(()=>{var C,j,x;return[Z("div",{class:s(["inline-flex flex-1 items-center justify-center gap-[12px]",{"flex-col":t(a).isMenuPopup&&e.level===0&&t(a).props.mode==="vertical","gap-1!":t(a).isMenuPopup&&e.level===0&&t(a).props.showCollapseName,"w-full":t(a).isMenuPopup&&e.level===0&&t(a).props.showCollapseName&&t(a).props.mode==="vertical"}]),style:J(t(S))},[t(y)?(o(),c(r,{key:0,name:t(y),size:20,class:s(["menu-item-container-icon",{"transition-transform group-hover:scale-120":t(a).isMenuPopup||!e.alwaysExpand}])},null,8,["name","class"])):l("",!0),t(a).isMenuPopup&&e.level===0&&!t(a).props.showCollapseName?l("",!0):(o(),m("span",{key:1,class:s(["w-0 flex-1 truncate text-sm transition-height transition-opacity transition-width",{"opacity-0 w-0 h-0":t(a).isMenuPopup&&e.level===0&&!t(a).props.showCollapseName,"w-full text-center":t(a).isMenuPopup&&e.level===0&&t(a).props.showCollapseName}])},G(t(p)((C=e.item.meta)==null?void 0:C.i18n,(j=e.item.meta)==null?void 0:j.title)),3)),(x=e.item.meta)!=null&&x.badge&&!(t(a).isMenuPopup&&e.level===0)?(o(),c(z,{key:2,value:typeof e.item.meta.badge=="function"?e.item.meta.badge():e.item.meta.badge,class:"badge"},null,8,["value"])):l("",!0)],6),e.subMenu&&(!t(a).isMenuPopup||e.level!==0)&&(t(a).isMenuPopup||!e.alwaysExpand)?(o(),m("i",{key:0,class:s(["relative ms-1 w-[10px] after:absolute after:h-[1.5px] after:w-[6px] after:bg-current after:transition-transform-200 after:content-empty after:-translate-y-[1px] before:absolute before:h-[1.5px] before:w-[6px] before:bg-current before:transition-transform-200 before:content-empty before:-translate-y-[1px]",[e.expand?"before:-rotate-45 before:-translate-x-[2px] after:rotate-45 after:translate-x-[2px]":"before:rotate-45 before:-translate-x-[2px] after:-rotate-45 after:translate-x-[2px]",t(a).isMenuPopup&&e.level===0&&"opacity-0",t(a).isMenuPopup&&e.level!==0&&"-rotate-90 -top-[1.5px]"]])},null,2)):l("",!0)]}),_:2},1040,["class","title"]))]}),_:2},1032,["enable","text"])]}),_:1},8,["to"])],2)}}}),te=Y(ee,[["__scopeId","data-v-cd8910d9"]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));export{te as I,se as i,_ as r};
