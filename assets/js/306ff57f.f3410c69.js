"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7857],{8300:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=s(1527),r=s(8422);const o={},i="Frequently Asked Questions",a={id:"see-also/faq",title:"Frequently Asked Questions",description:"Kubernetes is quite complex compared to Virtual Machines. How do I learn about Kubernetes? about ClusterFactory?",source:"@site/docs/see-also/02-faq.md",sourceDirName:"see-also",slug:"/see-also/faq",permalink:"/docs/see-also/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/see-also/02-faq.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/see-also/contributing"}},l={},c=[{value:"Kubernetes is quite complex compared to Virtual Machines. How do I learn about Kubernetes? about ClusterFactory?",id:"kubernetes-is-quite-complex-compared-to-virtual-machines-how-do-i-learn-about-kubernetes-about-clusterfactory",level:2},{value:"Why Kubernetes over Virtual Machines?",id:"why-kubernetes-over-virtual-machines",level:2},{value:"Why ClusterFactory over Vanilla Kubernetes?",id:"why-clusterfactory-over-vanilla-kubernetes",level:2},{value:"Why K0s at its core? Why not kubeadm or k3s? or an immutable OS like CoreOS?",id:"why-k0s-at-its-core-why-not-kubeadm-or-k3s-or-an-immutable-os-like-coreos",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,n.jsx)(t.h2,{id:"kubernetes-is-quite-complex-compared-to-virtual-machines-how-do-i-learn-about-kubernetes-about-clusterfactory",children:"Kubernetes is quite complex compared to Virtual Machines. How do I learn about Kubernetes? about ClusterFactory?"}),"\n",(0,n.jsxs)(t.p,{children:["Docker is young and Kubernetes is even younger. You can watch the ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=BE77h7dmoQU",children:"documentary made by Honeypot about Kubernetes"})," to learn the context of the creation of Kubernetes."]}),"\n",(0,n.jsxs)(t.p,{children:["There is no graphical user interface for Kubernetes, so it is difficult to tie all the concepts together. We always recommend using ",(0,n.jsx)(t.a,{href:"https://k8slens.dev",children:"Lens"})," for debugging and learning. The Argo CD dashboard can also help you understand some of the concepts."]}),"\n",(0,n.jsx)(t.p,{children:"Here are our recommended resources to learn Kubernetes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Start with ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/compose/gettingstarted/",children:"Docker"})," and ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/compose/gettingstarted/",children:"docker-compose"})]}),"\n",(0,n.jsxs)(t.li,{children:["After learning docker-compose, you should understand that Kubernetes is about scheduling containers on multiple computers. You should read the ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/",children:"Kubernetes Main Concepts"})," (don't skip any chapter even if it's complex)."]}),"\n",(0,n.jsxs)(t.li,{children:["Start directly by creating ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",children:"Kustomized Workloads"})," on MiniKube or KinD. Use ",(0,n.jsx)(t.a,{href:"https://k8slens.dev",children:"Lens"})," for debugging. Our suggestion is to at least try to ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tutorials/stateless-application/guestbook/",children:"set up a Web Server"})," with its ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/",children:"Ingress"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You know how to use Kubernetes! Now, what about ClusterFactory?"}),"\n",(0,n.jsxs)(t.p,{children:["You should read our ",(0,n.jsx)(t.a,{href:"/docs/main-concepts/k0s",children:"main concepts"}),", then try the ",(0,n.jsx)(t.a,{href:"/docs/getting-started/requirements-recommendations",children:"getting started"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Here are some other resources you can read:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Learn quickly ",(0,n.jsx)(t.a,{href:"https://argo-cd.readthedocs.io/en/stable/getting_started/",children:"Argo CD"})]}),"\n",(0,n.jsxs)(t.li,{children:["Learn about templating with ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"Helm"})]}),"\n",(0,n.jsxs)(t.li,{children:["Learn about ",(0,n.jsx)(t.a,{href:"https://metallb.universe.tf",children:"MetalLB"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you've got all this figured out, you will now know that putting Kubernetes into practice is less complicated than setting up a virtual machine."}),"\n",(0,n.jsx)(t.h2,{id:"why-kubernetes-over-virtual-machines",children:"Why Kubernetes over Virtual Machines?"}),"\n",(0,n.jsx)(t.p,{children:"Before ClusterFactory, we used Proxmox to manage our applications. One application\nper Virtual Machine. We used NFS, Ansible and Git to centralize our configuration.\nWith this setup, we had many problems:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["It's heavy. Obviously, with one application per VM, the resources were quickly depleted. You may want to put all the applications in one VM and use Ansible to configure the VM. However, this means we lose the isolation benefit of having one application per VM. We had to ",(0,n.jsx)(t.strong,{children:"containerize"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["High availability is also heavy because we need to copy the disk to the other hosts. The Kubernetes HA setup is less complex thanks to ",(0,n.jsx)(t.code,{children:"etcd"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"No health check, which means the VM or the application doesn't restart automatically."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Kubernetes has also these benefits:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Easy to deploy, easy to join a cluster."})," (Via kubeadm, K0s or k3s. All of them had a good experience deployment experience.)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Easy to maintain"})," thanks to K0s, Helm and Dockerfiles"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Easy to scale"})," thanks to the Kubernetes Scheduler and Horizontal Pod Auto-scheduling"]}),"\n",(0,n.jsxs)(t.li,{children:["All ",(0,n.jsx)(t.strong,{children:"declarative"})," and ",(0,n.jsx)(t.strong,{children:"GitOps friendly"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Custom Resources"})," with Kubernetes Operators"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Easy networking and routing"})," with the Ingresses"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'While Kubernetes seems complex because of all the features, it\'s the one with the most explicit syntax. Everything is inside a YAML and everything is sorted and well-defined thanks to the "Groups, Versions and Kinds" syntax.'}),"\n",(0,n.jsx)(t.h2,{id:"why-clusterfactory-over-vanilla-kubernetes",children:"Why ClusterFactory over Vanilla Kubernetes?"}),"\n",(0,n.jsx)(t.p,{children:"It is possible to use your own Kubernetes to administer your clusters! The main difference between\nthe vanilla Kubernetes and ClusterFactory is that we integrate a battle-tested stack that we use in our HPC clusters."}),"\n",(0,n.jsxs)(t.p,{children:["While you can do some research and development to see which stack you could use to manage your HPC clusters, ClusterFactory is the solution we built and chose as the core of our clusters at ",(0,n.jsx)(t.a,{href:"https://www.squarefactory.io",children:"SquareFactory"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"why-k0s-at-its-core-why-not-kubeadm-or-k3s-or-an-immutable-os-like-coreos",children:"Why K0s at its core? Why not kubeadm or k3s? or an immutable OS like CoreOS?"}),"\n",(0,n.jsx)(t.p,{children:"We were looking for two things:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Ease of deployment"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Ease of maintainance"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"While the Cluster API looked pretty interesting with kubeadm, we thought K0s had everything we needed:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Declarative deployment"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Easy update, backup, restore and reset"})}),"\n",(0,n.jsxs)(t.li,{children:["And a bonus: ",(0,n.jsx)(t.strong,{children:"only one binary is deployed"}),", without any dependencies"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'If we had to use an immutable operating system, we\'d rather build our own. Using an immutable operating system means being vendor-locked and not allowing "mutability". This means that for the sake of security and easy maintainability, it is impossible to edit the OS.'}),"\n",(0,n.jsx)(t.p,{children:"Since we do a lot of research and development, not having the flexibility of our OSes would stop us. However, the idea could be interesting in the future."}),"\n",(0,n.jsxs)(t.p,{children:["More information on ",(0,n.jsx)(t.a,{href:"https://K0sproject.io",children:"their website"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8422:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var n=s(959);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);