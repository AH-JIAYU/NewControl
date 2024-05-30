
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{e as v}from"./world-CL7hqSLm.js";import{g as f,r as i,z as y,i as o,o as b,j as h,w as t,B as c,b as x,a,_ as w}from"./index-0FEud4J9.js";const V={class:"fx-b"},g=f({name:"HomeIndexWord",__name:"versionRevenue",setup(B){const r=i("month"),n=i();let e;function u(){e=v.init(n.value);const s={xAxis:{type:"category",data:["基础版","高级版","旗舰版"]},yAxis:{type:"value",boundaryGap:!1},series:[{data:[{value:120,itemStyle:{color:"#000000"}},{value:200,itemStyle:{color:"#e2982e"}},{value:240,itemStyle:{color:"#d10027"}}],label:{show:!0},type:"bar",barWidth:"30"}]};e.setOption(s)}return y(()=>{u(),window.addEventListener("resize",()=>{e.resize()})}),(s,l)=>{const d=o("el-radio-button"),_=o("el-radio-group"),p=o("el-card");return b(),h(p,{style:{width:"100%"}},{header:t(()=>[c("p",V,[x(" 版本分布 "),a(_,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=m=>r.value=m)},{default:t(()=>[a(d,{label:"月",value:"month"}),a(d,{label:"年",value:"year"})]),_:1},8,["modelValue"])])]),default:t(()=>[c("div",{id:"word",ref_key:"versionRef",ref:n},null,512)]),_:1})}}}),z=w(g,[["__scopeId","data-v-4b19cff4"]]);export{z as default};
