
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{g as b,s as g,t as N,h as y,l as d,j as S,w as T,n as h,v as j,x as k,y as x,o as I,z as w,A as f}from"./index-DsJuNEqK.js";const D=b({name:"I18nSelector",__name:"index",setup(B){const e=g(),t=N(),p=y(()=>Object.keys(f).map(a=>({label:f[a],disabled:t.lang===a,handle:()=>_(a)}))),n=j(k,Function,!0);function _(a){var o,s,i,r,l,m,c,u;t.setDefaultLang(a),t.settings.app.routeBaseOn!=="filesystem"?(s=(o=e.meta.breadcrumbNeste)==null?void 0:o.at(-1))!=null&&s.i18n||(r=(i=e.meta.breadcrumbNeste)==null?void 0:i.at(-1))!=null&&r.title?t.setTitle(n((m=(l=e.meta.breadcrumbNeste)==null?void 0:l.at(-1))==null?void 0:m.i18n,(u=(c=e.meta.breadcrumbNeste)==null?void 0:c.at(-1))==null?void 0:u.title)):t.setTitle(n(e.meta.i18n,e.meta.title)):(e.meta.i18n||e.meta.title)&&t.setTitle(n(e.meta.i18n,e.meta.title))}return(a,o)=>{const s=x;return d(t).settings.toolbar.i18n?(I(),S(s,{key:0,items:[d(p)]},{default:T(()=>[w(a.$slots,"default")]),_:3},8,["items"])):h("",!0)}}});export{D as _};
