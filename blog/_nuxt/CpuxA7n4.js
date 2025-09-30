import{_ as C}from"./HyjSaNXY.js";import{_ as x,u as D,f as k,g as l,c,a as e,F as u,k as h,j as g,o as n,b as A,w as I,A as B,B as M,t as i,C as b}from"./BEQmsZ6Q.js";import{u as z,q as U}from"./CzdIV_mV.js";import"./U187zO9b.js";const E={class:"categories-page"},L={class:"categories-section"},O={class:"container"},S={class:"categories-grid"},G={class:"category-icon"},N={class:"category-content"},P={class:"category-name"},j={class:"category-description"},q={class:"category-meta"},F={class:"post-count"},T={class:"last-updated"},V={class:"tags-section"},W={class:"container"},$={class:"tags-cloud"},H={template:`
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6m0 6v6"/>
      <path d="m21 12-6-3-6 3-6-3"/>
      <path d="m21 12-6 3-6-3-6 3"/>
    </svg>
  `},Z={template:`
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 10c0-4.4-3.6-8-8-8s-8 3.6-8 8c-2.2 0-4 1.8-4 4s1.8 4 4 4h16c1.1 0 2-.9 2-2s-.9-2-2-2z"/>
    </svg>
  `},J={template:`
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M8 12h8"/>
      <path d="m16 16 4-4-4-4"/>
      <path d="m8 8-4 4 4 4"/>
    </svg>
  `},K={template:`
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="6" width="20" height="8" rx="1"/>
      <path d="M6 10h4"/>
      <path d="M8 8v4"/>
      <circle cx="15" cy="9" r="1"/>
      <circle cx="18" cy="12" r="1"/>
    </svg>
  `},Q={template:`
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  `},R={components:{DevOpsIcon:H,CloudIcon:Z,AutomationIcon:J,GameDevIcon:K,DefaultIcon:Q}},X=Object.assign(R,{__name:"categories",async setup(Y){let r,d;D({title:"Categories - Zafran Ullah Blog",meta:[{name:"description",content:"Browse articles by categories including DevOps, Cloud, Automation, and Game Development"}]});const{data:m,pending:tt,error:et}=([r,d]=k(()=>z("categories-posts",()=>U("blog").find())),r=await r,d(),r),p=l(()=>m.value||[]),_=l(()=>{const o=new Map;return p.value.forEach(t=>{const s=t.category;o.has(s)||o.set(s,{name:s,slug:s.toLowerCase().replace(/\s+/g,"-"),count:0,lastUpdated:t.publishedAt,description:w(s)});const a=o.get(s);a.count++,new Date(t.publishedAt)>new Date(a.lastUpdated)&&(a.lastUpdated=t.publishedAt)}),Array.from(o.values()).sort((t,s)=>s.count-t.count)}),v=l(()=>{const o=new Map;return p.value.forEach(t=>{t.tags&&t.tags.forEach(s=>{o.set(s,(o.get(s)||0)+1)})}),Array.from(o.entries()).sort((t,s)=>s[1]-t[1]).slice(0,20).map(([t,s])=>({name:t,count:s,size:Math.min(1.2+s*.1,2)}))}),w=o=>({DevOps:"Infrastructure automation, CI/CD pipelines, and deployment strategies",Cloud:"Cloud architecture, AWS, Azure, and cloud-native technologies",Automation:"Process automation, scripting, and workflow optimization","Game Development":"Unity development, game design, and interactive experiences"})[o]||"Explore articles in this category",y=o=>({DevOps:"DevOpsIcon",Cloud:"CloudIcon",Automation:"AutomationIcon","Game Development":"GameDevIcon"})[o]||"DefaultIcon",f=o=>new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return(o,t)=>{const s=C;return n(),c("div",E,[t[2]||(t[2]=e("section",{class:"page-hero"},[e("div",{class:"container"},[e("h1",{class:"page-title"},"Categories"),e("p",{class:"page-subtitle"}," Explore articles organized by topics and technologies ")])],-1)),e("section",L,[e("div",O,[e("div",S,[(n(!0),c(u,null,h(g(_),a=>(n(),c("div",{key:a.name,class:"category-card"},[A(s,{to:`/categories/${a.slug}`,class:"category-link"},{default:I(()=>[e("div",G,[(n(),B(M(y(a.name))))]),e("div",N,[e("h3",P,i(a.name),1),e("p",j,i(a.description),1),e("div",q,[e("span",F,i(a.count)+" articles",1),e("span",T,"Updated "+i(f(a.lastUpdated)),1)])]),t[0]||(t[0]=e("div",{class:"category-arrow"},[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"9,18 15,12 9,6"})])],-1))]),_:2,__:[0]},1032,["to"])]))),128))])])]),e("section",V,[e("div",W,[t[1]||(t[1]=e("h2",{class:"section-title"},"Popular Tags",-1)),e("div",$,[(n(!0),c(u,null,h(g(v),a=>(n(),c("span",{key:a.name,class:"tag-cloud-item",style:b({fontSize:`${a.size}rem`})},i(a.name),5))),128))])])])])}}}),ct=x(X,[["__scopeId","data-v-db824a86"]]);export{ct as default};
