"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7476],{100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=r(2676),a=r(2494);const n={},c="cert-manager, the Certificate Manager",i={id:"main-concepts/gitops/cert-manager",title:"cert-manager, the Certificate Manager",description:"Like the name indicates, cert-manager adds certificates and certificate issuers as custom resources for Kubernetes.",source:"@site/docs/main-concepts/03-gitops/04-cert-manager.md",sourceDirName:"main-concepts/03-gitops",slug:"/main-concepts/gitops/cert-manager",permalink:"/docs/main-concepts/gitops/cert-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/main-concepts/03-gitops/04-cert-manager.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Argo CD, GitOps for Kubernetes",permalink:"/docs/main-concepts/gitops/argocd"},next:{title:"Sealed Secrets, the Secret Manager for Kubernetes",permalink:"/docs/main-concepts/gitops/sealed-secrets"}},o={},d=[];function m(e){const t={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cert-manager-the-certificate-manager",children:"cert-manager, the Certificate Manager"})}),"\n",(0,s.jsx)(t.p,{children:"Like the name indicates, cert-manager adds certificates and certificate issuers as custom resources for Kubernetes."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"High level overview diagram explaining cert-manager architecture",src:r(2596).Z+"",width:"1088",height:"624"})}),"\n",(0,s.jsx)(t.p,{children:"It's possible to manage self-signed certificates, a private CA, ACME issuers, ..."}),"\n",(0,s.jsx)(t.p,{children:"cert-manager also automatically generates and renews certificates using the Kubernetes annotation field in the Ingress resource."}),"\n",(0,s.jsxs)(t.p,{children:["Although cert-manager ",(0,s.jsx)(t.a,{href:"https://doc.traefik.io/traefik/master/providers/kubernetes-crd/#letsencrypt-support-with-the-custom-resource-definition-provider",children:"is not compatible with the Traefik IngressRoute resource"}),", the certificate can be managed using a ",(0,s.jsx)(t.a,{href:"https://cert-manager.io/docs/usage/certificate/",children:"Certificate resource"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2596:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/high-level-overview-50c4f8ffb0afde9e922c3ded01752ced.svg"},2494:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var s=r(5271);const a={},n=s.createContext(a);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);