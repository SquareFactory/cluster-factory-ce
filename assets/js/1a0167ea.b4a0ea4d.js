"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[9577],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4828:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(9496),r=t(5924);const o="tabItem_PO_0";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},627:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(665),r=t(9496),o=t(5924),l=t(3226),i=t(6508),s=t(9362),c=t(7823);function p(e){return function(e){var n;return(null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=u(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,p]=m({queryString:t,groupId:a}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=s??f;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,o]),tabValues:o}}var y=t(7120),g=t(4397);const h="tabList_BikV",k="tabItem_Z4S3";function b(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,y.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==l&&(p(n),i(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:u},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":l===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(b,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function w(e){const n=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(n)},e))}},3755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(665),r=(t(9496),t(9613)),o=t(627),l=t(4828);const i={},s="Setting up CoreDNS",c={unversionedId:"guides/setting-up-coredns",id:"guides/setting-up-coredns",title:"Setting up CoreDNS",description:"This guide repeats the same instructions as the Getting Started, but with slighly more descriptions.",source:"@site/docs/guides/02-setting-up-coredns.mdx",sourceDirName:"guides",slug:"/guides/setting-up-coredns",permalink:"/docs/guides/setting-up-coredns",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/02-setting-up-coredns.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Setting up the Git repository for GitOps",permalink:"/docs/guides/setting-up-repository"},next:{title:"Setting up dashboards",permalink:"/docs/guides/setting-up-dashboards"}},p={},u=[{value:"The different entrypoints",id:"the-different-entrypoints",level:2},{value:"The official way: LoadBalancer/NodePort Service",id:"the-official-way-loadbalancernodeport-service",level:3},{value:"The <code>hostPort</code> way",id:"the-hostport-way",level:3},{value:"The <code>ipvlan</code> way",id:"the-ipvlan-way",level:3}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-coredns"},"Setting up CoreDNS"),(0,r.kt)("p",null,"This guide repeats the same instructions as the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/core-apps-deployment#coredns-configuration"},"Getting Started"),", but with slighly more descriptions."),(0,r.kt)("h2",{id:"the-different-entrypoints"},"The different entrypoints"),(0,r.kt)("p",null,"To avoid mixing IP, this is a small reminder."),(0,r.kt)("p",null,"If MetalLB and Multus CNI have been successfully deployed, you now have several types of entry points to access a Kubernetes service."),(0,r.kt)("h3",{id:"the-official-way-loadbalancernodeport-service"},"The official way: LoadBalancer/NodePort Service"),(0,r.kt)("p",null,"Traefik has been configured to be the main Load Balancer. Its IP can be configured and exposed via MetalLB. Like so:"),(0,r.kt)(o.Z,{groupId:"metallb-config",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"l2",label:"L2/ARP",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/address-pools.yaml"',title:'"core/metallb/address-pools.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: main-pool\n  namespace: metallb\nspec:\n  addresses:\n    - 192.168.1.100/32\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/advertisements.yaml"',title:'"core/metallb/advertisements.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: l2-advertisement\n  namespace: metallb\nspec:\n  ipAddressPools:\n    - main-pool\n"))),(0,r.kt)(l.Z,{value:"bgp",label:"BGP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/address-pools.yaml"',title:'"core/metallb/address-pools.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: main-pool\n  namespace: metallb\nspec:\n  addresses:\n    - 192.168.1.100/32\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/peers.yaml"',title:'"core/metallb/peers.yaml"'},"apiVersion: metallb.io/v1beta2\nkind: BGPPeer\nmetadata:\n  name: main-router\n  namespace: metallb\nspec:\n  myASN: 65001 # MetalLB Speaker ASN (Autonomous System Number)\n  peerASN: 65000 # The router ASN\n  peerAddress: 192.168.0.1 # The router address\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/advertisements.yaml"',title:'"core/metallb/advertisements.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: BGPAdvertisement\nmetadata:\n  name: bgp-advertisement\n  namespace: metallb\nspec:\n  ipAddressPools:\n    - main-pool\n")))),(0,r.kt)("p",null,"The router will see this address and can forward external traffic to this IP."),(0,r.kt)("p",null,"To expose a Kubernetes pod, you will need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"IngressRoute"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," will expose the pod to the other pods. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"IngressRoute")," will forward the traffic based on rules."),(0,r.kt)("p",null,"The rules are often based on the domain name, therefore, you have to configure your DNS (or CoreDNS)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scenario 1: I want to expose my Kubernetes pod to the world wide web.")),(0,r.kt)("p",null,"Then, you need to configure the DNS from a domain name registrar (like Google Domains, for example)."),(0,r.kt)("p",null,"The A record (or AAAA record) that you have to add is ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app.example.com -> <router public ip>"),"."),(0,r.kt)("p",null,"If your kubernetes is multi-site and have multiple routers/IPs to the world wide web, you can create 2 DNS records for maximum Load Balancing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A record (GEO) lb.example.com.  --\x3e <router 1 public ip>\n                                --\x3e <router 2 public ip>\nCNAME record my-app.example.com --\x3e lb.example.com\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scenario 2: I want to expose my Kubenetes pod to the local network.")),(0,r.kt)("p",null,"Then, you can use a self-hosted DNS. Luckily, Kubernetes comes with a DNS integrated called CoreDNS."),(0,r.kt)("p",null,"By default, CoreDNS is exposed to the local network through:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"hostPort"),"s: Kubernetes nodes will have ports 53/udp and 53/tcp open."),(0,r.kt)("li",{parentName:"ul"},"The Load Balancer: Traefik will have ports 53/udp and 53/tcp open.")),(0,r.kt)("p",null,"You can configure your nodes to have a DNS config like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config",metastring:'title="/etc/resolv.conf"',title:'"/etc/resolv.conf"'},"nameserver <load balancer IP>\n")),(0,r.kt)("p",null,"Or like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config",metastring:'title="/etc/resolv.conf"',title:'"/etc/resolv.conf"'},"nameserver <kubernetes node IP>\n")),(0,r.kt)("p",null,"To add DNS records, you will need to direcly edit the CoreDNS configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',title:'"core/coredns/overlays/prod/configmap.yaml"'},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n    k0s.k0sproject.io/stack: coredns\ndata:\n  Corefile: |\n    .:53 {\n      errors\n      health {\n        lameduck 5s\n      }\n      ready\n      kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n        ttl 30\n      }\n      prometheus :9153\n      forward . 8.8.8.8\n      cache 30\n      loop\n      reload\n      loadbalance\n      }\n      internal:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/internal.db\n        reload\n      }\n\n  internal.db: |\n    <load balancer IP> my-app.internal\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="core/coredns/overlays/prod/deployment.yaml > spec > template > spec > volumes"',title:'"core/coredns/overlays/prod/deployment.yaml',">":!0,spec:!0,template:!0,'volumes"':!0},"        volumes:\n          - name: config-volume\n            configMap:\n              name: coredns\n              items:\n                - key: Corefile\n                  path: Corefile\n+               - key: internal.db\n+                 path: internal.db\n              defaultMode: 420\n")),(0,r.kt)("p",null,"You can test your configuration by using ",(0,r.kt)("inlineCode",{parentName:"p"},"dig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Use host DNS configuration\ndig my-app.internal\n# Explicit DNS server\ndig @<DNS IP> my-app.internal\n")),(0,r.kt)("h3",{id:"the-hostport-way"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"hostPort")," way"),(0,r.kt)("p",null,"Containers can be exposed to the local network by using ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPort"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPort")," will use the Kubernetes host to expose the port."),(0,r.kt)("p",null,"It is efficient to use ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPort"),' when using a DaemonSet. However, when using a Deployment, you will need to "stick" the pod to the node using a ',(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scenario 3: I want to expose my Kubenetes pod stuck on the controller node to the local network.")),(0,r.kt)("p",null,"To add DNS records, you will need to direcly edit the CoreDNS configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',title:'"core/coredns/overlays/prod/configmap.yaml"'},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n    k0s.k0sproject.io/stack: coredns\ndata:\n  Corefile: |\n    .:53 {\n      errors\n      health {\n        lameduck 5s\n      }\n      ready\n      kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n        ttl 30\n      }\n      prometheus :9153\n      forward . 8.8.8.8\n      cache 30\n      loop\n      reload\n      loadbalance\n      }\n      internal:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/internal.db\n        reload\n      }\n\n  internal.db: |\n    <kubernetes node IP> my-app.internal\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="core/coredns/overlays/prod/deployment.yaml > spec > template > spec > volumes"',title:'"core/coredns/overlays/prod/deployment.yaml',">":!0,spec:!0,template:!0,'volumes"':!0},"        volumes:\n          - name: config-volume\n            configMap:\n              name: coredns\n              items:\n                - key: Corefile\n                  path: Corefile\n+               - key: internal.db\n+                 path: internal.db\n              defaultMode: 420\n")),(0,r.kt)("p",null,"You can test your configuration by using ",(0,r.kt)("inlineCode",{parentName:"p"},"dig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Use host DNS configuration\ndig my-app.internal\n# Explicit DNS server\ndig @<DNS IP> my-app.internal\n")),(0,r.kt)("h3",{id:"the-ipvlan-way"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"ipvlan")," way"),(0,r.kt)("p",null,"Using Multus, it is possible to attach an additional network interface to a pod. By using ipvlan like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="network-attachment-definition.yaml"',title:'"network-attachment-definition.yaml"'},'apiVersion: \'k8s.cni.cncf.io/v1\'\nkind: NetworkAttachmentDefinition\nmetadata:\n  name: my-net\n  namespace: namespace\nspec:\n  config: |\n    {\n      "cniVersion": "0.4.0",\n      "type": "ipvlan",\n      "master": "eth0",\n      "mode": "l2",\n      "ipam": {\n        "type": "static",\n        "addresses": [\n          "<address CIDR: 192.168.0.3/24>"\n        ]\n      }\n    }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pod.yaml"',title:'"pod.yaml"'},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp\n  labels:\n    name: myapp\n  annotations:\n    k8s.v1.cni.cncf.io/networks: 'namespace/my-net'\nspec:\n  containers:\n    - name: myapp\n      image: <Image>\n      resources:\n        limits:\n          memory: '128Mi'\n          cpu: '500m'\n      ports:\n        - containerPort: 80\n")),(0,r.kt)("p",null,"the pod is exposed using the attachment and has the IP 192.168.0.3. Pay attention to the routing! Currently the ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.0/24")," will go through the network interface, but everything else will go to the default Kubernetes network interface."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scenario 4: I want to expose my Kubenetes pod to the local network without attaching to a specific node.")),(0,r.kt)("p",null,"To add DNS records, you will need to direcly edit the CoreDNS configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',title:'"core/coredns/overlays/prod/configmap.yaml"'},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n    k0s.k0sproject.io/stack: coredns\ndata:\n  Corefile: |\n    .:53 {\n      errors\n      health {\n        lameduck 5s\n      }\n      ready\n      kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n        ttl 30\n      }\n      prometheus :9153\n      forward . 8.8.8.8\n      cache 30\n      loop\n      reload\n      loadbalance\n      }\n      internal:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/internal.db\n        reload\n      }\n\n  internal.db: |\n    <network attachment IP> my-app.internal\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="core/coredns/overlays/prod/deployment.yaml > spec > template > spec > volumes"',title:'"core/coredns/overlays/prod/deployment.yaml',">":!0,spec:!0,template:!0,'volumes"':!0},"        volumes:\n          - name: config-volume\n            configMap:\n              name: coredns\n              items:\n                - key: Corefile\n                  path: Corefile\n+               - key: internal.db\n+                 path: internal.db\n              defaultMode: 420\n")),(0,r.kt)("p",null,"You can test your configuration by using ",(0,r.kt)("inlineCode",{parentName:"p"},"dig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Use host DNS configuration\ndig my-app.internal\n# Explicit DNS server\ndig @<DNS IP> my-app.internal\n")))}m.isMDXComponent=!0}}]);