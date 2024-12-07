
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as d,o as r,c as g,a as o,w as e,b as i,ap as $,H as k,am as h,e as C,d as m}from"./index-CnUI3URZ.js";import{u as P}from"./notification-CzQ6o4ao.js";const x=d({name:"PersonalNotification",__name:"notification",setup(N){const n=P();function _(){n.$patch(t=>{t.message+=1})}function f(){n.$patch(t=>{t.message-=t.message>0?1:0})}function l(){n.$patch(t=>{t.todo+=1})}function u(){n.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,B)=>{const p=$,a=k,s=h,c=C;return r(),g("div",null,[o(p,{title:"通知中心",content:"本页面仅模拟右上角通知数变化，具体业务逻辑请到 /src/store/modules/notification.ts 文件中编写"}),o(c,{title:"消息"},{default:e(()=>[o(s,{onClick:_},{default:e(()=>[o(a,{name:"i-ep:plus"}),i(" 1 ")]),_:1}),o(s,{"ml-2":"",onClick:f},{default:e(()=>[o(a,{name:"i-ep:minus"}),i(" 1 ")]),_:1})]),_:1}),o(c,{title:"待办"},{default:e(()=>[o(s,{onClick:l},{default:e(()=>[o(a,{name:"i-ep:plus"}),i(" 1 ")]),_:1}),o(s,{"ml-2":"",onClick:u},{default:e(()=>[o(a,{name:"i-ep:minus"}),i(" 1 ")]),_:1})]),_:1})])}}});typeof m=="function"&&m(x);export{x as default};
