"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7857],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(5443),a=n(3010),o=(n(9496),n(9613)),s=["components"],i={},l="Frequently Asked Questions",u={unversionedId:"see-also/faq",id:"see-also/faq",title:"Frequently Asked Questions",description:"Kubernetes is quite complex compared to Virtual Machines. How do I learn about Kubernetes? about ClusterFactory?",source:"@site/docs/see-also/02-faq.md",sourceDirName:"see-also",slug:"/see-also/faq",permalink:"/docs/see-also/faq",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/see-also/02-faq.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/see-also/contributing"}},c={},p=[{value:"Kubernetes is quite complex compared to Virtual Machines. How do I learn about Kubernetes? about ClusterFactory?",id:"kubernetes-is-quite-complex-compared-to-virtual-machines-how-do-i-learn-about-kubernetes-about-clusterfactory",level:2},{value:"Why Kubernetes over Virtual Machines?",id:"why-kubernetes-over-virtual-machines",level:2},{value:"Why ClusterFactory over Vanilla Kubernetes?",id:"why-clusterfactory-over-vanilla-kubernetes",level:2},{value:"Why K0s at its core? Why not kubeadm or k3s? or an immutable OS like CoreOS?",id:"why-k0s-at-its-core-why-not-kubeadm-or-k3s-or-an-immutable-os-like-coreos",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h2",{id:"kubernetes-is-quite-complex-compared-to-virtual-machines-how-do-i-learn-about-kubernetes-about-clusterfactory"},"Kubernetes is quite complex compared to Virtual Machines. How do I learn about Kubernetes? about ClusterFactory?"),(0,o.kt)("p",null,"Docker is young and Kubernetes is even younger. You can watch the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BE77h7dmoQU"},"documentary made by Honeypot about Kubernetes")," to learn the context of the creation of Kubernetes."),(0,o.kt)("p",null,"There is no graphical user interface for Kubernetes, so it is difficult to tie all the concepts together. We always recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://k8slens.dev"},"Lens")," for debugging and learning. The Argo CD dashboard can also help you understand some of the concepts."),(0,o.kt)("p",null,"Here are our recommended resources to learn Kubernetes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start with ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/gettingstarted/"},"Docker")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/gettingstarted/"},"docker-compose")),(0,o.kt)("li",{parentName:"ul"},"After learning docker-compose, you should understand that Kubernetes is about scheduling containers on multiple computers. You should read the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/"},"Kubernetes Main Concepts")," (don't skip any chapter even if it's complex)."),(0,o.kt)("li",{parentName:"ul"},"Start directly by creating ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"},"Kustomized Workloads")," on MiniKube or KinD. Use ",(0,o.kt)("a",{parentName:"li",href:"https://k8slens.dev"},"Lens")," for debugging. Our suggestion is to at least try to ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/stateless-application/guestbook/"},"set up a Web Server")," with its ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),".")),(0,o.kt)("p",null,"Congratulations! You know how to use Kubernetes! Now, what about ClusterFactory?"),(0,o.kt)("p",null,"You should read our ",(0,o.kt)("a",{parentName:"p",href:"/docs/main-concepts/k0s"},"main concepts"),", then try the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/requirements-recommendations"},"getting started"),"."),(0,o.kt)("p",null,"Here are some other resources you can read:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn quickly ",(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/getting_started/"},"Argo CD")),(0,o.kt)("li",{parentName:"ul"},"Learn about templating with ",(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/quickstart/"},"Helm")),(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"https://metallb.universe.tf"},"MetalLB"))),(0,o.kt)("p",null,"Then, if you are interested in bare-metal provisioning, you should read our ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/provisioning/deploy-xcat"},"guides"),"."),(0,o.kt)("p",null,"If you've got all this figured out, you will now know that putting Kubernetes into practice is less complicated than setting up a virtual machine."),(0,o.kt)("h2",{id:"why-kubernetes-over-virtual-machines"},"Why Kubernetes over Virtual Machines?"),(0,o.kt)("p",null,"Before ClusterFactory, we used Proxmox to manage our applications. One application\nper Virtual Machine. We used NFS, Ansible and Git to centralize our configuration.\nWith this setup, we had many problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's heavy. Obviously, with one application per VM, the resources were quickly depleted. You may want to put all the applications in one VM and use Ansible to configure the VM. However, this means we lose the isolation benefit of having one application per VM. We had to ",(0,o.kt)("strong",{parentName:"li"},"containerize"),"."),(0,o.kt)("li",{parentName:"ul"},"High availability is also heavy because we need to copy the disk to the other hosts. The Kubernetes HA setup is less complex thanks to ",(0,o.kt)("inlineCode",{parentName:"li"},"etcd"),"."),(0,o.kt)("li",{parentName:"ul"},"No health check, which means the VM or the application doesn't restart automatically.")),(0,o.kt)("p",null,"Kubernetes has also these benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy to deploy, easy to join a cluster.")," (Via kubeadm, K0s or k3s. All of them had a good experience deployment experience.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy to maintain")," thanks to K0s, Helm and Dockerfiles"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy to scale")," thanks to the Kubernetes Scheduler and Horizontal Pod Auto-scheduling"),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("strong",{parentName:"li"},"declarative")," and ",(0,o.kt)("strong",{parentName:"li"},"GitOps friendly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom Resources")," with Kubernetes Operators"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy networking and routing")," with the Ingresses")),(0,o.kt)("p",null,'While Kubernetes seems complex because of all the features, it\'s the one with the most explicit syntax. Everything is inside a YAML and everything is sorted and well-defined thanks to the "Groups, Versions and Kinds" syntax.'),(0,o.kt)("h2",{id:"why-clusterfactory-over-vanilla-kubernetes"},"Why ClusterFactory over Vanilla Kubernetes?"),(0,o.kt)("p",null,"It is possible to use your own Kubernetes to administer your clusters! The main difference between\nthe vanilla Kubernetes and ClusterFactory is that we integrate a battle-tested stack that we use in our HPC clusters."),(0,o.kt)("p",null,"While you can do some research and development to see which stack you could use to manage your HPC clusters, ClusterFactory is the solution we built and chose as the core of our clusters at ",(0,o.kt)("a",{parentName:"p",href:"https://www.squarefactory.io"},"SquareFactory"),"."),(0,o.kt)("h2",{id:"why-k0s-at-its-core-why-not-kubeadm-or-k3s-or-an-immutable-os-like-coreos"},"Why K0s at its core? Why not kubeadm or k3s? or an immutable OS like CoreOS?"),(0,o.kt)("p",null,"We were looking for two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ease of deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ease of maintainance"))),(0,o.kt)("p",null,"While the Cluster API looked pretty interesting with kubeadm, we thought K0s had everything we needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Declarative deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy update, backup, restore and reset")),(0,o.kt)("li",{parentName:"ul"},"And a bonus: ",(0,o.kt)("strong",{parentName:"li"},"only one binary is deployed"),", without any dependencies")),(0,o.kt)("p",null,'If we had to use an immutable operating system, we\'d rather build our own. Using an immutable operating system means being vendor-locked and not allowing "mutability". This means that for the sake of security and easy maintainability, it is impossible to edit the OS.'),(0,o.kt)("p",null,"Since we do a lot of research and development, not having the flexibility of our OSes would stop us. However, the idea could be interesting in the future."),(0,o.kt)("p",null,"More information on ",(0,o.kt)("a",{parentName:"p",href:"https://K0sproject.io"},"their website"),"."))}h.isMDXComponent=!0}}]);