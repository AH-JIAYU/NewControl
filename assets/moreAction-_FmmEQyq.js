
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import L from"./HDropdown-BRGEmGgw.js";import{_ as N}from"./HTooltip.vue_vue_type_script_setup_true_lang-BVd5H3Fy.js";import{g as R,N as D,x as H,O as M,a0 as O,y as V,z as j,h as F,r as T,a1 as z,o as l,c as b,a as s,w as d,F as u,l as a,n as m,ah as E,aI as G,Q as y,a4 as q,a5 as A,D as K,M as Q,j as v,b as U,G as J,au as P,_ as W}from"./index-C3PJOLdt.js";import{S as X}from"./sortable.esm-BS5toX6s.js";import{u as Y}from"./useTabbar-D5-A52A4.js";const Z={class:"h-6 w-6 flex-center cursor-pointer rounded-1 bg-[var(--g-container-bg)] text-lg shadow transition-background-color transition-shadow"},tt={class:"quick-button"},at=["disabled"],ot=["disabled"],et=["disabled"],st=["title","onClick"],nt=R({name:"TabbarMoreAction",__name:"moreAction",setup(it){const $=D(),x=H(),f=M(),n=Y(),{t:p}=O(),w=V(j,Function,!0),g=F(()=>n.getId()),k=T(),h=T(!1);z(()=>k.value,i=>{i&&new X(k.value.$el,{animation:200,ghostClass:"ghost",draggable:".tab",filter:".no-drag",onStart:()=>{h.value=!0},onEnd:()=>{h.value=!1},onUpdate:o=>{o.newIndex!==void 0&&o.oldIndex!==void 0&&f.sort(o.newIndex,o.oldIndex)}})});function _(i){switch(i){case"search-tabs":K.emit("global-search-toggle","tab");break;case"other-side":n.closeOtherSide();break;case"left-side":n.closeLeftSide();break;case"right-side":n.closeRightSide();break}}function C(i,o,e){let r;return!i&&o||i&&!e?r=o:i&&e&&(r=e),r}return(i,o)=>{const e=Q,r=N,B=L;return l(),b("div",null,[s(B,{placement:"bottom-end","popper-class":"tabbar-dropdown"},{dropdown:d(()=>[u("div",tt,[a(x).settings.toolbar.navSearch?(l(),b("button",{key:0,class:"button",onClick:o[0]||(o[0]=t=>_("search-tabs"))},[s(r,{text:a(p)("app.tabbar.searchTabs")},{default:d(()=>[s(e,{name:"i-ri:search-line"})]),_:1},8,["text"])])):m("",!0),u("button",{class:"button",disabled:!a(n).checkCloseOtherSide(),onClick:o[1]||(o[1]=t=>_("other-side"))},[s(r,{text:a(p)("app.tabbar.closeOtherSide")},{default:d(()=>[s(e,{name:"i-ri:close-fill"})]),_:1},8,["text"])],8,at),u("button",{class:"button",disabled:!a(n).checkCloseLeftSide(),onClick:o[2]||(o[2]=t=>_("left-side"))},[s(r,{text:a(p)("app.tabbar.closeLeftSide")},{default:d(()=>[s(e,{name:"i-ph:arrow-line-left"})]),_:1},8,["text"])],8,ot),u("button",{class:"button",disabled:!a(n).checkCloseRightSide(),onClick:o[3]||(o[3]=t=>_("right-side"))},[s(r,{text:a(p)("app.tabbar.closeRightSide")},{default:d(()=>[s(e,{name:"i-ph:arrow-line-right"})]),_:1},8,["text"])],8,et)]),s(a(E),{options:{scrollbars:{autoHide:"leave",autoHideDelay:300}},defer:"",class:"max-h-[300px]"},{default:d(()=>[s(G,{ref_key:"dropdownTabContainerRef",ref:k,name:a(h)?void 0:"dropdown-tab",tag:"div",class:y(["tabs",{dragging:a(h)}])},{default:d(()=>[(l(!0),b(q,null,A(a(f).list,t=>{var I,S;return l(),b("div",{key:t.tabId,class:y(["tab",{actived:t.tabId===a(g),"no-drag":t.isPermanent||t.isPin}])},[(l(),b("div",{key:t.tabId,class:"title",title:((I=t.customTitleList.find(c=>c.fullPath===t.fullPath))==null?void 0:I.title)||a(w)(t.i18n,t.title),onClick:c=>a($).push(t.fullPath)},[a(x).settings.tabbar.enableIcon&&C(t.tabId===a(g),t.icon,t.activeIcon)?(l(),v(e,{key:0,name:C(t.tabId===a(g),t.icon,t.activeIcon)},null,8,["name"])):m("",!0),U(" "+J(((S=t.customTitleList.find(c=>c.fullPath===t.fullPath))==null?void 0:S.title)||a(w)(t.i18n,t.title)),1)],8,st)),!t.isPermanent&&t.isPin?(l(),v(e,{key:0,name:"i-ri:pushpin-2-fill",class:"action-icon",onClick:P(c=>a(f).unPin(t.tabId),["stop"])},null,8,["onClick"])):!t.isPermanent&&a(f).list.length>1?(l(),v(e,{key:1,name:"ri:close-fill",class:"action-icon",onClick:P(c=>a(n).closeById(t.tabId),["stop"])},null,8,["onClick"])):m("",!0)],2)}),128))]),_:1},8,["name","class"])]),_:1})]),default:d(()=>[u("div",Z,[s(e,{name:"i-ri:arrow-down-s-fill"})])]),_:1})])}}}),ut=W(nt,[["__scopeId","data-v-08000b0b"]]);export{ut as default};
