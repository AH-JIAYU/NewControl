
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{r as w,g as i,f as V,aQ as M,E as D,ag as K,p as L,Y as O,aJ as v,aL as P,aY as U,aK as j,aN as A,aO as R,a0 as H,aR as b,m as Y,u as q,o as y,i as h,w as z,A as g,l as F,M as k,k as G,x as J}from"./index-b9-Qwvd3.js";import{s as Q}from"./use-resolve-button-type-D66a6bvj.js";function W(a,l,t){let o=w(t==null?void 0:t.value),n=i(()=>a.value!==void 0);return[i(()=>n.value?a.value:o.value),function(s){return n.value||(o.value=s),l==null?void 0:l(s)}]}function X(a){var l,t;let o=(l=a==null?void 0:a.form)!=null?l:a.closest("form");if(o){for(let n of o.elements)if(n!==a&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(t=o.requestSubmit)==null||t.call(o)}}let Z=Symbol("GroupContext"),ee=V({name:"Switch",emits:{"update:modelValue":a=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(a,{emit:l,attrs:t,slots:o,expose:n}){var s;let C=(s=a.id)!=null?s:`headlessui-switch-${M()}`,r=D(Z,null),[d,m]=W(i(()=>a.modelValue),e=>l("update:modelValue",e),i(()=>a.defaultChecked));function p(){m(!d.value)}let I=w(null),f=r===null?I:r.switchRef,S=Q(i(()=>({as:a.as,type:t.type})),f);n({el:f,$el:f});function x(e){e.preventDefault(),p()}function N(e){e.key===b.Space?(e.preventDefault(),p()):e.key===b.Enter&&X(e.currentTarget)}function $(e){e.preventDefault()}let c=i(()=>{var e,u;return(u=(e=K(f))==null?void 0:e.closest)==null?void 0:u.call(e,"form")});return L(()=>{O([c],()=>{if(!c.value||a.defaultChecked===void 0)return;function e(){m(a.defaultChecked)}return c.value.addEventListener("reset",e),()=>{var u;(u=c.value)==null||u.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{name:e,value:u,form:B,...T}=a,_={checked:d.value},E={id:C,ref:f,role:"switch",type:S.value,tabIndex:0,"aria-checked":d.value,"aria-labelledby":r==null?void 0:r.labelledby.value,"aria-describedby":r==null?void 0:r.describedby.value,onClick:x,onKeyup:N,onKeypress:$};return v(H,[e!=null&&d.value!=null?v(P,U({features:j.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:d.value,form:B,name:e,value:u})):null,A({ourProps:E,theirProps:{...t,...R(T,["modelValue","defaultChecked"])},slot:_,attrs:t,slots:o,name:"Switch"})])}}});const ae={class:"absolute inset-0 h-full w-full flex items-center justify-center"},ne=V({__name:"HToggle",props:Y({disabled:{type:Boolean,default:!1},onIcon:{},offIcon:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=q(a,"modelValue");return(t,o)=>{const n=J;return y(),h(G(ee),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=s=>l.value=s),disabled:t.disabled,class:k(["relative h-5 w-10 inline-flex flex-shrink-0 cursor-pointer border-2 border-transparent rounded-full p-0 vertical-middle disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",[l.value?"bg-ui-primary":"bg-stone-3 dark:bg-stone-7"]])},{default:z(()=>[g("span",{class:k(["pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition-margin duration-200 ease-in-out dark:bg-dark",[l.value?"ms-5":"ms-0"]])},[g("span",ae,[l.value&&t.onIcon||!l.value&&t.offIcon?(y(),h(n,{key:0,name:l.value?t.onIcon:t.offIcon,class:"h-3 w-3 text-stone-7 dark:text-stone-3"},null,8,["name"])):F("",!0)])],2)]),_:1},8,["modelValue","disabled","class"])}}});export{ne as _};
