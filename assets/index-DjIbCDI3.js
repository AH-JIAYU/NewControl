
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as y,r as x,a3 as N,a4 as P,Y as A,a5 as W,$ as O,a6 as R,a7 as _,a8 as T,a9 as q,p as H,aa as I,ab as K}from"./index-b9-Qwvd3.js";function S(o){var l;const e=R(o);return(l=e==null?void 0:e.$el)!=null?l:e}const k=_?window:void 0,V=_?window.document:void 0,D=_?window.navigator:void 0;function F(...o){let l,e,v,a;if(typeof o[0]=="string"||Array.isArray(o[0])?([e,v,a]=o,l=k):[l,e,v,a]=o,!l)return W;Array.isArray(e)||(e=[e]),Array.isArray(v)||(v=[v]);const s=[],u=()=>{s.forEach(d=>d()),s.length=0},r=(d,t,m,h)=>(d.addEventListener(t,m,h),()=>d.removeEventListener(t,m,h)),f=A(()=>[S(l),R(a)],([d,t])=>{if(u(),!d)return;const m=T(t)?{...t}:t;s.push(...e.flatMap(h=>v.map(g=>r(d,h,g,m))))},{immediate:!0,flush:"post"}),w=()=>{f(),u()};return q(w),w}function $(){const o=x(!1),l=K();return l&&H(()=>{o.value=!0},l),o}function M(o){const l=$();return y(()=>(l.value,!!o()))}function B(o,l={}){const{controls:e=!1,navigator:v=D}=l,a=M(()=>v&&"permissions"in v);let s;const u=typeof o=="string"?{name:o}:o,r=x(),f=()=>{s&&(r.value=s.state)},w=I(async()=>{if(a.value){if(!s)try{s=await v.permissions.query(u),F(s,"change",f),f()}catch{r.value="prompt"}return s}});return w(),e?{state:r,isSupported:a,query:w}:r}function U(o={}){const{navigator:l=D,read:e=!1,source:v,copiedDuring:a=1500,legacy:s=!1}=o,u=M(()=>l&&"clipboard"in l),r=B("clipboard-read"),f=B("clipboard-write"),w=y(()=>u.value||s),d=x(""),t=x(!1),m=N(()=>t.value=!1,a);function h(){u.value&&n(r.value)?l.clipboard.readText().then(p=>{d.value=p}):d.value=c()}w.value&&e&&F(["copy","cut"],h);async function g(p=R(v)){w.value&&p!=null&&(u.value&&n(f.value)?await l.clipboard.writeText(p):i(p),d.value=p,t.value=!0,m.start())}function i(p){const b=document.createElement("textarea");b.value=p??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function c(){var p,b,E;return(E=(b=(p=document==null?void 0:document.getSelection)==null?void 0:p.call(document))==null?void 0:b.toString())!=null?E:""}function n(p){return p==="granted"||p==="prompt"}return{isSupported:w,text:d,copied:t,copy:g}}function j(o,l,e={}){const{window:v=k,...a}=e;let s;const u=M(()=>v&&"ResizeObserver"in v),r=()=>{s&&(s.disconnect(),s=void 0)},f=y(()=>Array.isArray(o)?o.map(t=>S(t)):[S(o)]),w=A(f,t=>{if(r(),u.value&&v){s=new ResizeObserver(l);for(const m of t)m&&s.observe(m,a)}},{immediate:!0,flush:"post"}),d=()=>{r(),w()};return q(d),{isSupported:u,stop:d}}function Y(o,l={width:0,height:0},e={}){const{window:v=k,box:a="content-box"}=e,s=y(()=>{var t,m;return(m=(t=S(o))==null?void 0:t.namespaceURI)==null?void 0:m.includes("svg")}),u=x(l.width),r=x(l.height),{stop:f}=j(o,([t])=>{const m=a==="border-box"?t.borderBoxSize:a==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(v&&s.value){const h=S(o);if(h){const g=v.getComputedStyle(h);u.value=Number.parseFloat(g.width),r.value=Number.parseFloat(g.height)}}else if(m){const h=Array.isArray(m)?m:[m];u.value=h.reduce((g,{inlineSize:i})=>g+i,0),r.value=h.reduce((g,{blockSize:i})=>g+i,0)}else u.value=t.contentRect.width,r.value=t.contentRect.height},e);P(()=>{const t=S(o);t&&(u.value="offsetWidth"in t?t.offsetWidth:l.width,r.value="offsetHeight"in t?t.offsetHeight:l.height)});const w=A(()=>S(o),t=>{u.value=t?l.width:0,r.value=t?l.height:0});function d(){f(),w()}return{width:u,height:r,stop:d}}const L=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Q(o,l={}){const{document:e=V,autoExit:v=!1}=l,a=y(()=>{var n;return(n=S(o))!=null?n:e==null?void 0:e.querySelector("html")}),s=x(!1),u=y(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(n=>e&&n in e||a.value&&n in a.value)),r=y(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(n=>e&&n in e||a.value&&n in a.value)),f=y(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(n=>e&&n in e||a.value&&n in a.value)),w=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(n=>e&&n in e),d=M(()=>a.value&&e&&u.value!==void 0&&r.value!==void 0&&f.value!==void 0),t=()=>w?(e==null?void 0:e[w])===a.value:!1,m=()=>{if(f.value){if(e&&e[f.value]!=null)return e[f.value];{const n=a.value;if((n==null?void 0:n[f.value])!=null)return!!n[f.value]}}return!1};async function h(){if(!(!d.value||!s.value)){if(r.value)if((e==null?void 0:e[r.value])!=null)await e[r.value]();else{const n=a.value;(n==null?void 0:n[r.value])!=null&&await n[r.value]()}s.value=!1}}async function g(){if(!d.value||s.value)return;m()&&await h();const n=a.value;u.value&&(n==null?void 0:n[u.value])!=null&&(await n[u.value](),s.value=!0)}async function i(){await(s.value?h():g())}const c=()=>{const n=m();(!n||n&&t())&&(s.value=n)};return F(e,L,c,!1),F(()=>S(a),L,c,!1),v&&q(h),{isSupported:d,isFullscreen:s,enter:g,exit:h,toggle:i}}const G={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function X(o={}){const{reactive:l=!1,target:e=k,aliasMap:v=G,passive:a=!0,onEventFired:s=W}=o,u=O(new Set),r={toJSON(){return{}},current:u},f=l?O(r):r,w=new Set,d=new Set;function t(i,c){i in f&&(l?f[i]=c:f[i].value=c)}function m(){u.clear();for(const i of d)t(i,!1)}function h(i,c){var n,p;const b=(n=i.key)==null?void 0:n.toLowerCase(),z=[(p=i.code)==null?void 0:p.toLowerCase(),b].filter(Boolean);b&&(c?u.add(b):u.delete(b));for(const C of z)d.add(C),t(C,c);b==="meta"&&!c?(w.forEach(C=>{u.delete(C),t(C,!1)}),w.clear()):typeof i.getModifierState=="function"&&i.getModifierState("Meta")&&c&&[...u,...z].forEach(C=>w.add(C))}F(e,"keydown",i=>(h(i,!0),s(i)),{passive:a}),F(e,"keyup",i=>(h(i,!1),s(i)),{passive:a}),F("blur",m,{passive:!0}),F("focus",m,{passive:!0});const g=new Proxy(f,{get(i,c,n){if(typeof c!="string")return Reflect.get(i,c,n);if(c=c.toLowerCase(),c in v&&(c=v[c]),!(c in f))if(/[+_-]/.test(c)){const b=c.split(/[+_-]/g).map(E=>E.trim());f[c]=y(()=>b.every(E=>R(g[E])))}else f[c]=x(!1);const p=Reflect.get(i,c,n);return l?R(p):p}});return g}export{U as a,Y as b,X as c,Q as u};
