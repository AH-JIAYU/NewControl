
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{d as b,k as g,l as N,c as k,i as d,e as S,w as T,j,n as y,p as I,_ as h,o as w,q as x,s as p}from"./index-59jiekGF.js";const D=b({name:"I18nSelector",__name:"index",setup(B){const e=g(),t=N(),_=k(()=>Object.keys(p).map(a=>({label:p[a],disabled:t.lang===a,handle:()=>f(a)}))),n=y(I,Function,!0);function f(a){var i,s,o,r,l,m,c,u;t.setDefaultLang(a),t.settings.app.routeBaseOn!=="filesystem"?(s=(i=e.meta.breadcrumbNeste)==null?void 0:i.at(-1))!=null&&s.i18n||(r=(o=e.meta.breadcrumbNeste)==null?void 0:o.at(-1))!=null&&r.title?t.setTitle(n((m=(l=e.meta.breadcrumbNeste)==null?void 0:l.at(-1))==null?void 0:m.i18n,(u=(c=e.meta.breadcrumbNeste)==null?void 0:c.at(-1))==null?void 0:u.title)):t.setTitle(n(e.meta.i18n,e.meta.title)):(e.meta.i18n||e.meta.title)&&t.setTitle(n(e.meta.i18n,e.meta.title))}return(a,i)=>{const s=h;return d(t).settings.toolbar.i18n?(w(),S(s,{key:0,items:[d(_)]},{default:T(()=>[x(a.$slots,"default")]),_:3},8,["items"])):j("",!0)}}});export{D as _};
