
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as v,r as V,h as o,o as b,c as g,a as e,w as l,b as x,ap as w,e as U,_ as k}from"./index-B9guF8Px.js";const y=v({name:"site_setting",__name:"list",setup(C){const t=V({register:!0,registerExamine:!1,supplierURL:""});function r(){}return(E,a)=>{const i=w,u=o("el-switch"),s=o("el-form-item"),_=o("el-col"),m=o("el-row"),p=o("el-input"),d=o("el-button"),c=o("el-form"),f=U;return b(),g("div",null,[e(i,{title:"站点设置管理"}),e(f,null,{default:l(()=>[e(c,{ref_key:"form",ref:t,model:t.value,"label-width":"100px",inline:!1},{default:l(()=>[e(m,{gutter:20},{default:l(()=>[e(_,{span:3},{default:l(()=>[e(s,{label:"注册开关"},{default:l(()=>[e(u,{modelValue:t.value.register,"onUpdate:modelValue":a[0]||(a[0]=n=>t.value.register=n),"active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:6},{default:l(()=>[e(s,{label:"注册审核"},{default:l(()=>[e(u,{modelValue:t.value.registerExamine,"onUpdate:modelValue":a[1]||(a[1]=n=>t.value.registerExamine=n),"active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{label:"租户网址"},{default:l(()=>[e(p,{modelValue:t.value.supplierURL,"onUpdate:modelValue":a[2]||(a[2]=n=>t.value.supplierURL=n),style:{width:"18rem"}},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(d,{type:"primary",onClick:r},{default:l(()=>[x(" 确认 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}}),R=k(y,[["__scopeId","data-v-396b6b88"]]);export{R as default};
