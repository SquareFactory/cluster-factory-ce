"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7672],{4352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(2676),s=t(2494),a=t(9037),l=t(7784);const i={},o="Creating a highly available cluster",c={id:"guides/maintenance/high-availability",title:"Creating a highly available cluster",description:"You can set up a HA cluster any time without destroying your old cluster.",source:"@site/docs/guides/30-maintenance/01-high-availability.md",sourceDirName:"guides/30-maintenance",slug:"/guides/maintenance/high-availability",permalink:"/docs/guides/maintenance/high-availability",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/30-maintenance/01-high-availability.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Exposing your Kubernetes Workload",permalink:"/docs/guides/exposing-k8s-workloads"},next:{title:"Updating the K0s cluster",permalink:"/docs/guides/maintenance/updating-k0s-cluster"}},d={},u=[{value:"The architecture of a High-Available Kubernetes cluster",id:"the-architecture-of-a-high-available-kubernetes-cluster",level:2},{value:"Setting up the HA cluster",id:"setting-up-the-ha-cluster",level:2},{value:"1. Setting up HAProxy",id:"1-setting-up-haproxy",level:3},{value:"2. Editing <code>cfctl.yaml</code> to set up the nodes",id:"2-editing-cfctlyaml-to-set-up-the-nodes",level:3},{value:"Verify everything is good",id:"verify-everything-is-good",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"creating-a-highly-available-cluster",children:"Creating a highly available cluster"})}),"\n","\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"You can set up a HA cluster any time without destroying your old cluster."})}),"\n",(0,r.jsx)(n.p,{children:"This guide is about setting up a highly available Kubernetes cluster with stacked control plane nodes. The etcd members and control plane nodes are co-located."}),"\n",(0,r.jsx)(n.p,{children:"We use HAProxy for the Load Balancer of the control plane."}),"\n",(0,r.jsx)(n.h2,{id:"the-architecture-of-a-high-available-kubernetes-cluster",children:"The architecture of a High-Available Kubernetes cluster"}),"\n",(0,r.jsx)(n.p,{children:"To set up a highly available Kubernetes cluster, you need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A load balancer (a cloud load balancer or HAProxy) which can route the traffic to the control plane nodes and to the following ports.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"6443 (for Kubernetes API)"}),"\n",(0,r.jsx)(n.li,{children:"8132 (for Konnectivity)"}),"\n",(0,r.jsx)(n.li,{children:"9443 (for controller join API)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"3 or more machines, preferably one per failure zone. Having an odd number of control plane nodes can help with leader selection in the case of machine or zone failure."}),"\n"]}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"high-availability_overview",src:t(9601).Z+"#white-bg",width:"764",height:"767"})})}),"\n",(0,r.jsx)(n.p,{children:"The kubectl will connect to the load-balancer."}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-the-ha-cluster",children:"Setting up the HA cluster"}),"\n",(0,r.jsx)(n.h3,{id:"1-setting-up-haproxy",children:"1. Setting up HAProxy"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"On a machine able to route the traffic to all the control plane nodes, install HAProxy:"}),"\n"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"os",children:[(0,r.jsx)(l.Z,{value:"dnf",label:"dnf",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:'title="root@haproxy"',children:"dnf install haproxy\n"})})}),(0,r.jsx)(l.Z,{value:"apt",label:"apt",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:'title="root@haproxy"',children:"apt install haproxy\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Edit ",(0,r.jsx)(n.code,{children:"/etc/haproxy/haproxy.cfg"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",metastring:'title="/etc/haproxy/haproxy.cfg"',children:"global\n    log         127.0.0.1 local2\n\n    chroot      /var/lib/haproxy\n    pidfile     /var/run/haproxy.pid\n    maxconn     4000\n    user        haproxy\n    group       haproxy\n    daemon\n\n    # turn on stats unix socket\n    stats socket /var/lib/haproxy/stats\n\n    # utilize system-wide crypto-policies\n    ssl-default-bind-ciphers PROFILE=SYSTEM\n    ssl-default-server-ciphers PROFILE=SYSTEM\n\ndefaults\n    mode                    http\n    log                     global\n    option                  httplog\n    option                  dontlognull\n    timeout connect         10s\n    timeout client          86400s\n    timeout server          86400s\n    timeout tunnel          86400s\n    maxconn                 3000\n\n# Fronends\nfrontend kubeAPI\n    bind :6443\n    mode tcp\n    default_backend kubeAPI_backend\nfrontend konnectivity\n    bind :8132\n    mode tcp\n    default_backend konnectivity_backend\nfrontend controllerJoinAPI\n    bind :9443\n    mode tcp\n    default_backend controllerJoinAPI_backend\n\n# Backends\nbackend kubeAPI_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:6443 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:6443 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:6443 check check-ssl verify none\nbackend konnectivity_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:8132 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:8132 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:8132 check check-ssl verify none\nbackend controllerJoinAPI_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:9443 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:9443 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:9443 check check-ssl verify none\n\n# Listen\nlisten stats\n    bind *:9000\n    mode http\n    stats enable\n    stats uri /\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2-editing-cfctlyaml-to-set-up-the-nodes",children:["2. Editing ",(0,r.jsx)(n.code,{children:"cfctl.yaml"})," to set up the nodes"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="cfctl.yaml"',children:'apiVersion: cfctl.clusterfactory.io/v1beta1\nkind: Cluster\nmetadata:\n  name: k8s.example.com-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 10.10.0.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.0.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=ch-sion,topology.kubernetes.io/zone=ch-sion-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n    - ssh:\n        address: 10.10.1.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.1.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=at-vie,topology.kubernetes.io/zone=at-vie-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n    - ssh:\n        address: 10.10.3.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.3.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=de-fra,topology.kubernetes.io/zone=de-fra-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n  k0s:\n    ...\n\n    config:\n      ...\n\n      spec:\n        api:\n          k0sApiPort: 9443\n          port: 6443\n          externalAddress: 10.10.4.10 # LB address\n          sans:\n            - 10.10.4.10\n'})}),"\n",(0,r.jsx)(n.p,{children:"Apply the config and be patient:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cfctl apply --debug --config=cfctl.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"verify-everything-is-good",children:"Verify everything is good"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'cfctl kubeconfig --config ./cfctl.yaml >./kubeconfig\nchmod 600 ./kubeconfig\nexport KUBECONFIG="$(pwd)/kubeconfig"\nkubectl get nodes\n# NAME            STATUS   ROLES           AGE     VERSION\n# k0s-ch-sion-1   Ready    control-plane   61d     v1.23.6+k0s\n# k0s-at-vie-1    Ready    control-plane   3d22h   v1.23.6+k0s\n# k0s-de-fra-1    Ready    control-plane   4d      v1.23.6+k0s\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"On a controller node"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'# Install etcdctl\nETCD_VER=v3.5.2\nOS=linux\nARCH=amd64\ncurl -fsSL https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-${OS}-${ARCH}.tar.gz | tar -xvzf - "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl"\nmkdir -p /usr/local/bin/\nmv "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl" /usr/local/bin/etcdctl\nrmdir "etcd-${ETCD_VER}-${OS}-${ARCH}"\n\n# Verify\netcdctl --endpoints=https://127.0.0.1:2379 --key=/var/lib/k0s/pki/etcd/server.key --cert=/var/lib/k0s/pki/etcd/server.crt --insecure-skip-tls-verify member list\n# abcdef1234567890, started, k0s-ch-sion-1, https://10.10.0.2:2380, https://127.0.0.1:2379, false\n# deadcafe12345678, started, k0s-at-vie-1, https://10.10.1.2:2380, https://127.0.0.1:2379, false\n# deaddead12345678, started, k0s-de-fra-1, https://10.10.2.2:2380, https://127.0.0.1:2379, false\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7784:(e,n,t)=>{t.d(n,{Z:()=>l});t(5271);var r=t(4814);const s={tabItem:"tabItem_vBus"};var a=t(2676);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},9037:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(5271),s=t(4814),a=t(1400),l=t(3225),i=t(8777),o=t(7876),c=t(2916),d=t(4803);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=f({queryString:t,groupId:s}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(7818);const v={tabList:"tabList_Afiz",tabItem:"tabItem_Dnpk"};var m=t(2676);function y(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,m.jsx)(y,{...n,...e}),(0,m.jsx)(k,{...n,...e})]})}function j(e){const n=(0,b.Z)();return(0,m.jsx)(x,{...e,children:u(e.children)},String(n))}},9601:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/high-availability_overview-f20a13ff0ff3b84e5c0093aa23e97070.png"},2494:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(5271);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);