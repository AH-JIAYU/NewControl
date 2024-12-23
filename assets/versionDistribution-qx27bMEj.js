
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{e as c}from"./world-DGKWrAm_.js";import{d,r as p,t as u,a as f,o as m,e as x,w as s,g as _,x as g,I as h}from"./index-CS0OZ-B6.js";const v=d({name:"HomeIndexVersionDistribution",__name:"versionDistribution",setup(b){const a=p();let o;function l(){o=c.init(a.value);const t=[{value:100,name:"基础版"},{value:20,name:"高级版"},{value:30,name:"旗舰版"}],i={title:{left:"10%",text:"",radius:["40%","60%"],center:["25%","50%"],subtext:""},tooltip:{trigger:"item",formatter(e){return`版本:${e.name}</br>关联人数: ${e.value}`}},legend:[{orient:"horizontal",x:"60%",y:"center",bottom:"20",itemGap:20,center:["50%","50%"],icon:"pin",data:["基础版","高级版","旗舰版"],formatter(e){let r;for(let n=0;n<t.length;n++)t[n].name===e&&(r=t[n].value);return[`{a|${e}} `,`{b| ${r}}`].join(" ")},textStyle:{rich:{a:{width:50,backgroundColor:"transparent"},b:{width:60,backgroundColor:"transparent"}}}}],series:[{name:"访问来源",type:"pie",radius:["40%","60%"],center:["30%","50%"],text:"省市公司",data:t,label:{normal:{position:"inner",show:!1}}}],graphic:[{type:"group",left:"30%",top:"center",bounding:"raw",children:[{type:"text",style:{text:"合计",fontSize:18,textAlign:"center",textVerticalAlign:"bottom"}},{type:"text",style:{text:`${t.reduce((e,r)=>e+r.value,0)}`,textAlign:"center",textVerticalAlign:"top",fontSize:30}}]}]};o.setOption(i)}return u(()=>{l(),window.addEventListener("resize",()=>{o.resize()})}),(t,i)=>{const e=f("el-card");return m(),x(e,{style:{width:"100%"}},{header:s(()=>[_(" 版本分布 ")]),default:s(()=>[g("div",{id:"word",ref_key:"versionRef",ref:a},null,512)]),_:1})}}}),z=h(v,[["__scopeId","data-v-9d3bf855"]]);export{z as default};
