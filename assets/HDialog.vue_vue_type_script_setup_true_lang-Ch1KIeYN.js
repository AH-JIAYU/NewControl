
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as h,m as i,u as w,R as b,r as k,h as C,o as d,j as B,w as t,a as s,l as e,S as p,k as c,F as o,Q as V,U as S,V as T,b as F,G as j,W as M,B as u,c as N,n as $,X as z,Y as D,M as G}from"./index-C3PJOLdt.js";const W={class:"fixed inset-0 overflow-y-auto"},E={class:"min-h-full flex items-end justify-center p-4 text-center lg:items-center"},H={flex:"~ items-center justify-between","px-4":"","py-3":"","border-b":"~ solid stone/15","text-6":""},I={key:0,flex:"~ items-center justify-end","px-4":"","py-3":"","border-t":"~ solid stone/15"},P=h({__name:"HDialog",props:i({appear:{type:Boolean,default:!1},title:{},preventClose:{type:Boolean,default:!1},overlay:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:i(["close"],["update:modelValue"]),setup(f,{emit:m}){const y=m,l=w(f,"modelValue"),v=b(),g=k({enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}),x=C(()=>({enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95",enterTo:"opacity-100 translate-y-0 lg:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 lg:scale-100",leaveTo:"opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"}));function r(){l.value=!1,y("close")}return(a,n)=>{const _=G;return d(),B(e(D),{as:"template",appear:a.appear,show:l.value},{default:t(()=>[s(e(z),{class:"fixed inset-0 z-2000 flex",onClose:n[0]||(n[0]=J=>!a.preventClose&&r())},{default:t(()=>[s(e(p),c({as:"template",appear:a.appear},e(g)),{default:t(()=>[o("div",{class:V(["fixed inset-0 bg-stone-2/75 transition-opacity dark:bg-stone-8/75",{"backdrop-blur-sm":a.overlay}])},null,2)]),_:1},16,["appear"]),o("div",W,[o("div",E,[s(e(p),c({as:"template",appear:a.appear},e(x)),{default:t(()=>[s(e(S),{class:"relative w-full flex flex-col overflow-hidden rounded-xl bg-white text-left shadow-xl lg:my-8 lg:max-w-lg dark:bg-stone-8"},{default:t(()=>[o("div",H,[s(e(T),{"m-0":"","text-lg":"","text-dark":"","dark:text-white":""},{default:t(()=>[F(j(a.title),1)]),_:1}),s(_,{name:"i-carbon:close","cursor-pointer":"",onClick:r})]),s(e(M),{"m-0":"","overflow-y-auto":"","p-4":"","text-start":""},{default:t(()=>[u(a.$slots,"default")]),_:3}),e(v).footer?(d(),N("div",I,[u(a.$slots,"footer")])):$("",!0)]),_:3})]),_:3},16,["appear"])])])]),_:3})]),_:3},8,["appear","show"])}}});export{P as _};
