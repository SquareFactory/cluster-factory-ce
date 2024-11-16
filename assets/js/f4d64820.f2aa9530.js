"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[4297],{2619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"main-concepts/core-network/metallb","title":"MetalLB, the bare-metal Load Balancer","description":"A good article is written here.","source":"@site/docs/main-concepts/02-core-network/02-metallb.md","sourceDirName":"main-concepts/02-core-network","slug":"/main-concepts/core-network/metallb","permalink":"/docs/main-concepts/core-network/metallb","draft":false,"unlisted":false,"editUrl":"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/main-concepts/02-core-network/02-metallb.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"docs","previous":{"title":"K0s, the Kubernetes distribution for bare-metal","permalink":"/docs/main-concepts/k0s"},"next":{"title":"Traefik, the All-in-One L7 Load Balancer and Ingress","permalink":"/docs/main-concepts/core-network/traefik"}}');var a=n(6070),r=n(4306);const o={},i="MetalLB, the bare-metal Load Balancer",c={},l=[];function d(e){const t={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"metallb-the-bare-metal-load-balancer",children:"MetalLB, the bare-metal Load Balancer"})}),"\n",(0,a.jsxs)(t.p,{children:["A good article is written ",(0,a.jsx)(t.a,{href:"https://kubernetes.github.io/ingress-nginx/deploy/baremetal/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Kubernetes was primarily designed for the cloud. Most clouds have a ",(0,a.jsx)(t.a,{href:"https://cloud.google.com/load-balancing",children:"Cloud Load Balancer"}),". On bare-metal, that load balancer doesn't exist."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Cloud environment",src:n(750).A+"#white-bg",width:"764",height:"767"})}),"\n",(0,a.jsxs)(t.p,{children:["A proper solution would have been to use a dedicated appliance or software (like ",(0,a.jsx)(t.a,{href:"https://www.haproxy.com/documentation/hapee/latest/high-availability/active-active/l4-load-balancing/",children:"HAproxy"}),") which is outside the Kubernetes cluster. The ingresses (like Traefik) would have been configured using ",(0,a.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",children:"NodePort services"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"User edge",src:n(4232).A+"#white-bg",width:"764",height:"790"})}),"\n",(0,a.jsxs)(t.p,{children:["However, MetalLB is inside the Kubernetes Cluster and permits the use of ",(0,a.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",children:"LoadBalancer services"}),". The experience becomes extremely similar to the cloud and load balancing is resolved using L2 or L3 (BGP) solutions."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"MetalLB Concepts",src:n(1648).A+"#white-bg",width:"860",height:"831"})}),"\n",(0,a.jsx)(t.p,{children:"Using a self-provisioned edge is surely the most stable and suitable solution since MetalLB is still young. However, MetalLB allows for a proper Kubernetes experience."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},750:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/cloud_overview-081764ad99ad8d7d8f434048901c3457.png"},4232:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/managed_edge_overview-6709cf82de79011271edab08208d9caf.png"},1648:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/metallb_concepts-afe86a92b9fa058b25211ba9e095608d.png"},4306:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(758);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);