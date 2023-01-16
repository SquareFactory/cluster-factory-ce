"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[9808],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(665),r=(n(9496),n(9613));const o={},l="4. Core Apps Deployment",s={unversionedId:"getting-started/core-apps-deployment",id:"getting-started/core-apps-deployment",title:"4. Core Apps Deployment",description:"We will deploy:",source:"@site/docs/getting-started/04-core-apps-deployment.md",sourceDirName:"getting-started",slug:"/getting-started/core-apps-deployment",permalink:"/docs/getting-started/core-apps-deployment",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/getting-started/04-core-apps-deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"3. K0s Configuration",permalink:"/docs/getting-started/k0s-configuration"},next:{title:"5. Argo Apps Deployment",permalink:"/docs/getting-started/argo-apps-deployment"}},i={},p=[{value:"Configuring MetalLB",id:"configuring-metallb",level:2},{value:"Multi-zone (BGP)",id:"multi-zone-bgp",level:3},{value:"Single zone (L2/ARP)",id:"single-zone-l2arp",level:3},{value:"Configuring Traefik",id:"configuring-traefik",level:2},{value:"CoreDNS configuration",id:"coredns-configuration",level:2},{value:"Configure the cert-manager issuers",id:"configure-the-cert-manager-issuers",level:2},{value:"Configure the route and certificate for the ArgoCD dashboard",id:"configure-the-route-and-certificate-for-the-argocd-dashboard",level:2},{value:"Deploying the core apps",id:"deploying-the-core-apps",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-core-apps-deployment"},"4. Core Apps Deployment"),(0,r.kt)("p",null,"We will deploy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Traefik, the Ingress Controller"),(0,r.kt)("li",{parentName:"ul"},"MetalLB advertisements, for Load Balancing"),(0,r.kt)("li",{parentName:"ul"},"CoreDNS, the internal DNS for Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Sealed Secrets, secret management optimized for GitOps"),(0,r.kt)("li",{parentName:"ul"},"Cert-manager issuers, to generate your SSL certificates and enable, for free, TLS configuration."),(0,r.kt)("li",{parentName:"ul"},"Argo CD, to enable GitOps."),(0,r.kt)("li",{parentName:"ul"},"Multus CNI, to support multiple network interfaces"),(0,r.kt)("li",{parentName:"ul"},"KubeVirt, to deploy VM workloads")),(0,r.kt)("h2",{id:"configuring-metallb"},"Configuring MetalLB"),(0,r.kt)("p",null,"MetalLB is a L2/L3 load balancer designed for bare metal Kubernetes clusters. It exposes the kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Services"),' to the external network. It uses either L2 (ARP) or BGP to advertise routes. It is possible to make "zoned" advertisements with L2, but we heavily recommend to use BGP for multi-zone clusters.'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metallb_concepts",src:n(6178).Z+"#white-bg",width:"860",height:"831"}))),(0,r.kt)("h3",{id:"multi-zone-bgp"},"Multi-zone (BGP)"),(0,r.kt)("p",null,"This is the most stable solution, the router must be capable of using BGP. If not, you should use an appliance with BGP capabilities (like OPNsense, OpenWRT, vyOS, or Linux with BIRD) which can act like a router."),(0,r.kt)("p",null,"Let's start configuring the main ",(0,r.kt)("inlineCode",{parentName:"p"},"IPAddressPool"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/address-pools.yaml"',title:'"core/metallb/address-pools.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: main-pool\n  namespace: metallb\nspec:\n  addresses:\n    - 192.168.1.100/32\n")),(0,r.kt)("p",null,"The indicated IP address will be allocated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," Kubernetes Services, which is Traefik."),(0,r.kt)("p",null,"We should now advertise the IP address by configuring a ",(0,r.kt)("inlineCode",{parentName:"p"},"BGPAdvertisement")," and its peers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/peers.yaml"',title:'"core/metallb/peers.yaml"'},"apiVersion: metallb.io/v1beta2\nkind: BGPPeer\nmetadata:\n  name: main-router\n  namespace: metallb\nspec:\n  myASN: 65001 # MetalLB Speaker ASN (Autonomous System Number)\n  peerASN: 65000 # The router ASN\n  peerAddress: 192.168.0.1 # The router address\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/advertisements.yaml"',title:'"core/metallb/advertisements.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: BGPAdvertisement\nmetadata:\n  name: bgp-advertisement\n  namespace: metallb\nspec:\n  ipAddressPools:\n    - main-pool\n")),(0,r.kt)("p",null,"With this configuration, the MetalLB speakers on all the nodes will advertise the IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.100/32")," to the router, which is at ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.1"),". By receiving the advertisement, the router will create a BGP route ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.100/32 via <ip of the node>"),"."),(0,r.kt)("h3",{id:"single-zone-l2arp"},"Single zone (L2/ARP)"),(0,r.kt)("p",null,"Let's start configuring the main ",(0,r.kt)("inlineCode",{parentName:"p"},"IPAddressPool"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/address-pools.yaml"',title:'"core/metallb/address-pools.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: main-pool\n  namespace: metallb\nspec:\n  addresses:\n    - 192.168.1.100/32\n")),(0,r.kt)("p",null,"The indicated IP address will be allocated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," Kubernetes Services, which is Traefik."),(0,r.kt)("p",null,"We should now advertise the IP address by configuring a ",(0,r.kt)("inlineCode",{parentName:"p"},"L2Advertisement"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/metallb/advertisements.yaml"',title:'"core/metallb/advertisements.yaml"'},"apiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: l2-advertisement\n  namespace: metallb\nspec:\n  ipAddressPools:\n    - main-pool\n")),(0,r.kt)("p",null,"That's all! The MetalLB speakers on all the nodes will advertise the IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.100/32")," to the router via ARP. You can also use an IP in the same subnet as the host."),(0,r.kt)("h2",{id:"configuring-traefik"},"Configuring Traefik"),(0,r.kt)("p",null,"You should configure Traefik, which is the main Ingress and L7 load balancer. ",(0,r.kt)("inlineCode",{parentName:"p"},"core/traefik/values.yaml")," is the main configuration file."),(0,r.kt)("p",null,"You should look for ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerIP")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"metallb.universe.tf")," annotations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/traefik/values.yaml"',title:'"core/traefik/values.yaml"'},"service:\n  enabled: true\n  annotations:\n    metallb.universe.tf/address-pool: main-pool\n    metallb.universe.tf/allow-shared-ip: traefik-lb-key\n  spec:\n    externalTrafficPolicy: Cluster\n    loadBalancerIP: 192.168.1.100\n")),(0,r.kt)("p",null,"Since we are using MetalLB, we select our ",(0,r.kt)("inlineCode",{parentName:"p"},"IPAddressPool")," by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"metallb.universe.tf/address-pool")," annotation."),(0,r.kt)("p",null,"The value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerIP")," correspond to an IP address included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"IPAddressPool"),". ",(0,r.kt)("strong",{parentName:"p"},"This IP address will be exposed to the external network.")),(0,r.kt)("p",null,"After that, you can add or remove ports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/traefik/values.yaml"',title:'"core/traefik/values.yaml"'},"ports:\n  traefik:\n    port: 9000\n    expose: true\n    exposedPort: 9000\n    protocol: TCP\n  dns-tcp:\n    port: 8053\n    expose: true\n    exposedPort: 53\n    protocol: TCP\n  dns-udp:\n    port: 8054\n    expose: true\n    exposedPort: 53\n    protocol: UDP\n  web:\n    port: 80\n    expose: true\n    exposedPort: 80\n    protocol: TCP\n  websecure:\n    port: 443\n    expose: true\n    exposedPort: 443\n    protocol: TCP\n    # You MUST open port 443 UDP!\n    # HTTP3 upgrades the connection from TCP to UDP.\n    http3:\n      enabled: true\n    tls:\n      enabled: true\n  metrics:\n    port: 9100\n    expose: false\n    exposedPort: 9100\n    protocol: TCP\n")),(0,r.kt)("p",null,"Since Traefik will be used as the main Ingress, these ports will be exposed to the external network if ",(0,r.kt)("inlineCode",{parentName:"p"},"expose")," is set to true."),(0,r.kt)("p",null,"You can also configure the dashboard route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ingressRoute:\n  dashboard:\n    enabled: true\n    # See your DNS configuration\n    matchRule: Host(`traefik.internal`)\n    entryPoints: ['traefik']\n")),(0,r.kt)("p",null,"This means that the Traefik dashboard is accessible to ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik.internel")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik")," entry point, which is the 9000/tcp port. In short: ",(0,r.kt)("a",{parentName:"p",href:"http://traefik.internal:9000/dashboard/"},"http://traefik.internal:9000/dashboard/")," (the trailing slash is important)."),(0,r.kt)("p",null,"Your DNS should be configured to redirect ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik.internal")," to the load balancer at ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.100"),". Fortunately, we can configure and expose our own DNS."),(0,r.kt)("h2",{id:"coredns-configuration"},"CoreDNS configuration"),(0,r.kt)("p",null,"The CoreDNS given by k0s does not meet our needs, so we added ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-components coredns")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"installFlags")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"cfctl.yaml"),". We will deploy our own."),(0,r.kt)("p",null,"CoreDNS will be exposed to the external network thanks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"IngressRoute")," objects in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/core.example/coredns/overlays/prod/ingress-route.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"core/coredns/overlays/prod/ingress-route.yaml")),". ",(0,r.kt)("strong",{parentName:"p"},"It is also exposed using ",(0,r.kt)("inlineCode",{parentName:"strong"},"hostPort")," (",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/core.example/coredns/overlays/prod/daemonset.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"core/coredns/overlays/prod/daemonset.yaml")),").")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPort")," will be used, make sure the host does not have port 53/udp busy. On most systems with SystemD, this port is occupied by a stub listener. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/resolved.conf")," configuration file on the host and disable the stub listener by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"DNSStubListener")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"no"),". Finally, restart the service with ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl restart systemd-resolved.service"),"."),(0,r.kt)("p",{parentName:"admonition"},"If this is an unwanted feature (because you are using an other DNS for example), feel free to remove the routes and close the ports in the Traefik configuration."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"rm core/coredns/overlays/prod/ingress-route.yaml\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="core/traefik/values.yaml"',title:'"core/traefik/values.yaml"'},"ports:\n  traefik:\n    port: 9000\n    expose: false\n    exposedPort: 9000\n    protocol: TCP\n- dns-tcp:\n-   port: 8053\n-   expose: true\n-   exposedPort: 53\n-   protocol: TCP\n- dns-udp:\n-   port: 8054\n-   expose: true\n-   exposedPort: 53\n-   protocol: UDP\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="core/coredns/overlays/prod/daemonset.yaml"',title:'"core/coredns/overlays/prod/daemonset.yaml"'},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: coredns\nspec:\n  template:\n    spec:\n      containers:\n        - name: coredns\n-         ports:\n-           - name: dns\n-             containerPort: 53\n-             hostPort: 53\n-             protocol: UDP\n-           - name: dns-tcp\n-             containerPort: 53\n-             hostPort: 53\n-             protocol: TCP\n      volumes:\n        - name: config-volume\n          configMap:\n            name: coredns\n            items:\n              - key: Corefile\n                path: Corefile\n              - key: example.com.db\n                path: example.com.db\n              - key: internal.db\n                path: internal.db\n            defaultMode: 420\n\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"./scripts/deploy-core\n"))),(0,r.kt)("p",null,"The files that you should look for are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/core.example/coredns/overlays/prod/configmap.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"core/coredns/overlays/prod/configmap.yaml"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/core.example/coredns/overlays/prod/deployment.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"core/coredns/overlays/prod/deployment.yaml")),"."),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap"),", you'll find:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',title:'"core/coredns/overlays/prod/configmap.yaml"'},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n    k0s.k0sproject.io/stack: coredns\ndata:\n  Corefile: |\n    .:53 {\n      errors\n      health {\n        lameduck 5s\n      }\n      ready\n      kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n        ttl 30\n      }\n      prometheus :9153\n      forward . 8.8.8.8\n      cache 30\n      loop\n      reload\n      loadbalance\n      }\n      internal:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/internal.db\n        reload\n      }\n      example.com:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/example.com.db\n        reload\n      }\n\n  internal.db: |\n    192.168.1.100 traefik.internal\n    192.168.1.100 argocd.internal\n\n  example.com.db: |\n    # Examples of external services\n    192.168.0.1 gateway.example.com\n    192.168.0.2 mn1.example.com\n    192.168.0.3 xcatmn.example.com\n    192.168.0.5 cvmfs.example.com\n    192.168.0.6 nfs.example.com\n    192.168.0.7 mysql.example.com\n    192.168.0.8 ldap.example.com\n\n    192.168.0.10 slurm-cluster-example-controller-0.example.com\n    192.168.0.20 slurm-cluster-example-login-0.example.com\n    192.168.0.21 slurm-cluster-example-login-1.example.com\n    192.168.0.51 cn1.example.com\n\n    # Internal services\n    192.168.1.100 prometheus.example.com\n    192.168.1.100 grafana.example.com\n")),(0,r.kt)("p",null,"Change the zones with your own and eventually change the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward")," field with your preferred DNS.\nChange, add or remove service names as you wish. The ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com.db")," is only an example."),(0,r.kt)("p",null,"Kubernetes Services going through the Load Balancer should use the MetalLB IP."),(0,r.kt)("p",null,"Compute nodes should be declared here. The IP should be the one declared on xCAT."),(0,r.kt)("p",null,"The slurm controller node should take the IP of the kubernetes node on which the pod is hosted, as it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPort"),"."),(0,r.kt)("p",null,"You should configure the DNS of the machines to use CoreDNS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf",metastring:'title="resolv.conf"',title:'"resolv.conf"'},"nameserver 192.168.1.100\nsearch example.com\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If some files were added and removed, you must change the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yaml"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="core/coredns/overlays/prod/deployment.yaml > spec > template > spec > volumes"',title:'"core/coredns/overlays/prod/deployment.yaml',">":!0,spec:!0,template:!0,'volumes"':!0},"        volumes:\n          - name: config-volume\n            configMap:\n              name: coredns\n              items:\n                - key: Corefile\n                  path: Corefile\n                - key: example.com.db\n                  path: example.com.db\n                - key: internal.db\n                  path: internal.db\n+               - key: your.new.file.db\n+                 path: your.new.file.db\n              defaultMode: 420\n"))),(0,r.kt)("h2",{id:"configure-the-cert-manager-issuers"},"Configure the cert-manager issuers"),(0,r.kt)("p",null,"Specify new certificate issuers in the ",(0,r.kt)("inlineCode",{parentName:"p"},"core/cert-manager")," directory."),(0,r.kt)("p",null,"It is highly recommended to add your own private certificate authority, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/configuration/ca/"},"official guide of cert-manager"),"."),(0,r.kt)("p",null,"You must create a Secret ",(0,r.kt)("inlineCode",{parentName:"p"},"ca-key-pair"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="ca-key-pair-secret.yaml"',title:'"ca-key-pair-secret.yaml"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: ca-key-pair\n  namespace: cert-manager\ntype: kubernetes.io/tls\nstringData:\n  tls.crt: |\n    -----BEGIN CERTIFICATE-----\n    -----END CERTIFICATE-----\n\n  tls.key: |\n    -----BEGIN RSA PRIVATE KEY-----\n    -----END RSA PRIVATE KEY-----\n")),(0,r.kt)("p",null,"To generate a TLS certificate and its private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl genrsa -out tls.key 2048\nopenssl req -x509 -sha256 -new -nodes -key tls.key -days 3650 -out tls.crt\n")),(0,r.kt)("p",null,"Seal it with ",(0,r.kt)("inlineCode",{parentName:"p"},"cfctl kubeseal")," and apply it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="private-cluster-issuer.yaml"',title:'"private-cluster-issuer.yaml"'},"apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: private-cluster-issuer\n  namespace: cert-manager\nspec:\n  ca:\n    secretName: ca-key-pair\n")),(0,r.kt)("p",null,"If you wish to use ACME HTTP-01, follow ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/configuration/acme/http01/"},"this guide"),". This will create an Ingress by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="public-cluster-issuer.yaml"',title:'"public-cluster-issuer.yaml"'},"apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: public-cluster-issuer\n  namespace: cert-manager\nspec:\n  acme:\n    email: john.smith@example.com\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: public-cluster-issuer-account-key\n    solvers:\n      - http01:\n          ingress:\n            class: traefik\n")),(0,r.kt)("h2",{id:"configure-the-route-and-certificate-for-the-argocd-dashboard"},"Configure the route and certificate for the ArgoCD dashboard"),(0,r.kt)("p",null,"ArgoCD has a dashboard. To change the address and certificate, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-route.yaml")," file and ",(0,r.kt)("inlineCode",{parentName:"p"},"certificate.yaml")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"core/argo-cd")," directory."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure the addresses correspond to the ones defined in the CoreDNS (or in your private DNS).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example of ingress-route.yaml for ArgoCD"',title:'"Example',of:!0,"ingress-route.yaml":!0,for:!0,'ArgoCD"':!0},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: argocd-server-https\n  namespace: argocd\n  labels:\n    app.kubernetes.io/name: argocd-server-https\n    app.kubernetes.io/component: ingress-route\nspec:\n  entryPoints:\n    - websecure\n  routes:\n    - kind: Rule\n      match: Host(`argocd.internal`)\n      priority: 10\n      services:\n        - name: argocd-server\n          port: 80\n    - kind: Rule\n      match: Host(`argocd.internal`) && HeadersRegexp(`Content-Type`, `^application/grpc.*$`)\n      priority: 11\n      services:\n        - name: argocd-server\n          port: 80\n          scheme: h2c\n  tls:\n    secretName: argocd.internal-secret\n")),(0,r.kt)("p",null,"IngressRoute allows us to create more complex routing rules than the classic Ingress. However, Ingress can automatically generate a TLS certificate by using annotations, without the need to create a Certificate resource."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="ingress.yaml"',title:'"ingress.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: grafana-ingress\n  labels:\n    app.kubernetes.io/name: grafana-ingress\n    app.kubernetes.io/component: ingress\n  annotations:\n    cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n    traefik.ingress.kubernetes.io/router.entrypoints: websecure\n    traefik.ingress.kubernetes.io/router.tls: 'true'\nspec:\n  ingressClassName: traefik\n  rules:\n    - host: grafana.example.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: grafana\n                port:\n                  number: 80\n  tls:\n    - hosts:\n        - grafana.example.com\n      secretName: grafana.example.com-secret\n")),(0,r.kt)("p",null,"Our recommendation is to use Ingress for simple routes with HTTP. Otherwise, IngressRoute is the best solution for all the cases."),(0,r.kt)("h2",{id:"deploying-the-core-apps"},"Deploying the core apps"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/deploy-core")," script to deploy the core applications. This should deploy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Traefik"),(0,r.kt)("li",{parentName:"ul"},"CoreDNS"),(0,r.kt)("li",{parentName:"ul"},"MetalLB"),(0,r.kt)("li",{parentName:"ul"},"MultusCNI"),(0,r.kt)("li",{parentName:"ul"},"sealed-secrets"),(0,r.kt)("li",{parentName:"ul"},"cert-manager"),(0,r.kt)("li",{parentName:"ul"},"ArgoCD")),(0,r.kt)("p",null,"If the script fails, you can run it again without harming the cluster."),(0,r.kt)("p",null,"If CoreDNS and the IngressRoutes are configured, you should be able to access the ArgoCD dashboard and Traefik dashboard."),(0,r.kt)("p",null,"Congratulations! You have successfully deployed a Kubernetes Cluster with the minimum requirements. We still recommend to deploy the Monitoring stack to monitor the RAM and CPU usage of the containers. Nevertheless, you can follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides"},"guides"),", learn the ",(0,r.kt)("a",{parentName:"p",href:"/docs/main-concepts/k0s"},"main concepts of ClusterFactory"),", or continue the ",(0,r.kt)("a",{parentName:"p",href:"./argo-apps-deployment"},"Getting Started"),"."))}m.isMDXComponent=!0},6178:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metallb_concepts-afe86a92b9fa058b25211ba9e095608d.png"}}]);