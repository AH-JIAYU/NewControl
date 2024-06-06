
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{e as f}from"./world-mCAO6YYF.js";import{f as v,r as i,y,h as o,o as b,i as h,w as t,A as c,b as x,a,_ as w}from"./index-CGs043Wj.js";const V={class:"fx-b"},R=v({name:"HomeIndexWord",__name:"versionRevenue",setup(g){const r=i("month"),n=i();let e;function u(){e=f.init(n.value);const s={xAxis:{type:"category",data:["基础版","高级版","旗舰版"]},yAxis:{type:"value",boundaryGap:!1},series:[{data:[{value:120,itemStyle:{color:"#000000"}},{value:200,itemStyle:{color:"#e2982e"}},{value:240,itemStyle:{color:"#d10027"}}],label:{show:!0},type:"bar",barWidth:"30"}]};e.setOption(s)}return y(()=>{u(),window.addEventListener("resize",()=>{e.resize()})}),(s,l)=>{const d=o("el-radio-button"),_=o("el-radio-group"),p=o("el-card");return b(),h(p,{style:{width:"100%"}},{header:t(()=>[c("p",V,[x(" 版本分布 "),a(_,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=m=>r.value=m)},{default:t(()=>[a(d,{label:"月",value:"month"}),a(d,{label:"年",value:"year"})]),_:1},8,["modelValue"])])]),default:t(()=>[c("div",{id:"word",ref_key:"versionRef",ref:n},null,512)]),_:1})}}}),B=w(R,[["__scopeId","data-v-4b19cff4"]]);export{B as default};
