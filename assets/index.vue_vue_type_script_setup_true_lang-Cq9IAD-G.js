
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as b,D as g,y as N,g as k,k as d,i as y,w as I,l as S,E as T,F as h,G as j,o as w,H as x,I as f}from"./index-CeJVNZ3l.js";const D=b({name:"I18nSelector",__name:"index",setup(B){const e=g(),t=N(),p=k(()=>Object.keys(f).map(a=>({label:f[a],disabled:t.lang===a,handle:()=>_(a)}))),n=T(h,Function,!0);function _(a){var i,s,o,r,l,m,c,u;t.setDefaultLang(a),t.settings.app.routeBaseOn!=="filesystem"?(s=(i=e.meta.breadcrumbNeste)==null?void 0:i.at(-1))!=null&&s.i18n||(r=(o=e.meta.breadcrumbNeste)==null?void 0:o.at(-1))!=null&&r.title?t.setTitle(n((m=(l=e.meta.breadcrumbNeste)==null?void 0:l.at(-1))==null?void 0:m.i18n,(u=(c=e.meta.breadcrumbNeste)==null?void 0:c.at(-1))==null?void 0:u.title)):t.setTitle(n(e.meta.i18n,e.meta.title)):(e.meta.i18n||e.meta.title)&&t.setTitle(n(e.meta.i18n,e.meta.title))}return(a,i)=>{const s=j;return d(t).settings.toolbar.i18n?(w(),y(s,{key:0,items:[d(p)]},{default:I(()=>[x(a.$slots,"default")]),_:3},8,["items"])):S("",!0)}}});export{D as _};
