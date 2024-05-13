
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as S,D as I,y as D,L as O,E as $,F,g as B,k as g,o as w,i as P,w as _,a as H,c as L,a1 as V,a0 as U,aH as z,M as G,l as K,b as q,B as J,_ as Q}from"./index-b9-Qwvd3.js";import W from"./index-B1yBFFm7.js";import{_ as X}from"./item.vue_vue_type_script_setup_true_lang-ZPCM5DqT.js";function Y(t){for(var a=[],e=0;e<t.length;){var s=t[e];if(s==="*"||s==="+"||s==="?"){a.push({type:"MODIFIER",index:e,value:t[e++]});continue}if(s==="\\"){a.push({type:"ESCAPED_CHAR",index:e++,value:t[e++]});continue}if(s==="{"){a.push({type:"OPEN",index:e,value:t[e++]});continue}if(s==="}"){a.push({type:"CLOSE",index:e,value:t[e++]});continue}if(s===":"){for(var d="",r=e+1;r<t.length;){var l=t.charCodeAt(r);if(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||l===95){d+=t[r++];continue}break}if(!d)throw new TypeError("Missing parameter name at ".concat(e));a.push({type:"NAME",index:e,value:d}),e=r;continue}if(s==="("){var c=1,u="",r=e+1;if(t[r]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(r));for(;r<t.length;){if(t[r]==="\\"){u+=t[r++]+t[r++];continue}if(t[r]===")"){if(c--,c===0){r++;break}}else if(t[r]==="("&&(c++,t[r+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(r));u+=t[r++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(e));if(!u)throw new TypeError("Missing pattern at ".concat(e));a.push({type:"PATTERN",index:e,value:u}),e=r;continue}a.push({type:"CHAR",index:e,value:t[e++]})}return a.push({type:"END",index:e,value:""}),a}function Z(t,a){a===void 0&&(a={});for(var e=Y(t),s=a.prefixes,d=s===void 0?"./":s,r="[^".concat(ee(a.delimiter||"/#?"),"]+?"),l=[],c=0,u=0,o="",i=function(m){if(u<e.length&&e[u].type===m)return e[u++].value},n=function(m){var y=i(m);if(y!==void 0)return y;var C=e[u],N=C.type,R=C.index;throw new TypeError("Unexpected ".concat(N," at ").concat(R,", expected ").concat(m))},f=function(){for(var m="",y;y=i("CHAR")||i("ESCAPED_CHAR");)m+=y;return m};u<e.length;){var h=i("CHAR"),E=i("NAME"),v=i("PATTERN");if(E||v){var p=h||"";d.indexOf(p)===-1&&(o+=p,p=""),o&&(l.push(o),o=""),l.push({name:E||c++,prefix:p,suffix:"",pattern:v||r,modifier:i("MODIFIER")||""});continue}var x=h||i("ESCAPED_CHAR");if(x){o+=x;continue}o&&(l.push(o),o="");var A=i("OPEN");if(A){var p=f(),T=i("NAME")||"",b=i("PATTERN")||"",M=f();n("CLOSE"),l.push({name:T||(b?c++:""),pattern:T&&!b?r:b,prefix:p,suffix:M,modifier:i("MODIFIER")||""});continue}n("END")}return l}function j(t,a){return k(Z(t,a),a)}function k(t,a){a===void 0&&(a={});var e=te(a),s=a.encode,d=s===void 0?function(u){return u}:s,r=a.validate,l=r===void 0?!0:r,c=t.map(function(u){if(typeof u=="object")return new RegExp("^(?:".concat(u.pattern,")$"),e)});return function(u){for(var o="",i=0;i<t.length;i++){var n=t[i];if(typeof n=="string"){o+=n;continue}var f=u?u[n.name]:void 0,h=n.modifier==="?"||n.modifier==="*",E=n.modifier==="*"||n.modifier==="+";if(Array.isArray(f)){if(!E)throw new TypeError('Expected "'.concat(n.name,'" to not repeat, but got an array'));if(f.length===0){if(h)continue;throw new TypeError('Expected "'.concat(n.name,'" to not be empty'))}for(var v=0;v<f.length;v++){var p=d(f[v],n);if(l&&!c[i].test(p))throw new TypeError('Expected all "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(p,'"'));o+=n.prefix+p+n.suffix}continue}if(typeof f=="string"||typeof f=="number"){var p=d(String(f),n);if(l&&!c[i].test(p))throw new TypeError('Expected "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(p,'"'));o+=n.prefix+p+n.suffix;continue}if(!h){var x=E?"an array":"a string";throw new TypeError('Expected "'.concat(n.name,'" to be ').concat(x))}}return o}}function ee(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function te(t){return t&&t.sensitive?"":"i"}const ae=S({name:"Breadcrumb",__name:"index",setup(t){const a=I(),e=D(),s=O(),d=$(F,Function,!0),r=B(()=>{var u,o,i;const c=[];if(e.settings.home.enable&&c.push({path:e.settings.home.fullPath,title:d("route.home",e.settings.home.title)}),a.fullPath!==e.settings.home.fullPath&&e.settings.breadcrumb.enableMainMenu&&!["single"].includes(e.settings.menu.menuMode)){const n=s.allMenus.findIndex(f=>f.children.some(h=>a.fullPath.indexOf(`${h.path}/`)===0||a.fullPath===h.path));(u=s.allMenus[n])!=null&&u.meta&&c.push({path:"",title:d((o=s.allMenus[n].meta)==null?void 0:o.i18n,(i=s.allMenus[n].meta)==null?void 0:i.title)})}if(a.meta.breadcrumbNeste){a.meta.breadcrumbNeste.forEach(f=>{f.hide===!1&&c.push({path:f.path,title:d(f.i18n,f.title)})});const n=e.customTitleList.find(f=>f.fullPath===a.fullPath);n&&(c[c.length-1].title=n.title)}return c});function l(c){return j(c)(a.params)}return(c,u)=>g(e).mode==="pc"&&g(e).settings.app.routeBaseOn!=="filesystem"?(w(),P(W,{key:0,class:G(["breadcrumb whitespace-nowrap px-2",{[`breadcrumb-${g(e).settings.breadcrumb.style}`]:g(e).settings.breadcrumb.style!==""}])},{default:_(()=>[H(z,{name:"breadcrumb"},{default:_(()=>[(w(!0),L(U,null,V(g(r),(o,i)=>(w(),P(X,{key:`${i}_${o.path}_${o.title}`,to:i<g(r).length-1&&o.path!==""?l(o.path):""},{default:_(()=>[q(J(o.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["class"])):K("",!0)}}),ue=Q(ae,[["__scopeId","data-v-f42995d4"]]);export{ue as default};
