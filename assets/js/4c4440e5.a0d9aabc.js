"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[8723],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=l,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8751:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(9496),l=a(5924);const s="tabItem_cuvL";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,r),hidden:a},t)}},5632:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(665),l=a(9496),s=a(5924),r=a(2981),o=a(8291),i=a(9825),p=a(3772);const d="tabList_vL6X",u="tabItem_MPSI";function c(e){var t;const{lazy:a,block:r,defaultValue:c,values:m,groupId:g,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,i.U)(),[C,x]=(0,l.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=g){const e=f[g];null!=e&&e!==C&&y.some((t=>t.value===e))&&x(e)}const D=e=>{const t=e.currentTarget,a=w.indexOf(t),n=y[a].value;n!==C&&(P(t),x(n),null!=g&&N(g,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},y.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:D},r,{className:(0,s.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),a??t)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,r.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},1519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(665),l=(a(9496),a(9613)),s=a(5632),r=a(8751);const o={},i="Deploy a LDAP server",p={unversionedId:"guides/deploy-ldap",id:"guides/deploy-ldap",title:"Deploy a LDAP server",description:"Helm and Docker resources",source:"@site/docs/guides/800-deploy-ldap.md",sourceDirName:"guides",slug:"/guides/deploy-ldap",permalink:"/docs/guides/deploy-ldap",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/800-deploy-ldap.md",tags:[],version:"current",sidebarPosition:800,frontMatter:{},sidebar:"docs",previous:{title:"Deploy a VM with KubeVirt",permalink:"/docs/guides/kubevirt/deploy-vm"},next:{title:"Develop Applications to integrate into ClusterFactory",permalink:"/docs/guides/develop-apps"}},d={},u=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Deploy Namespace and AppProject",id:"1-deploy-namespace-and-appproject",level:2},{value:"2. Persistent Volumes, Secrets and Ingresses",id:"2-persistent-volumes-secrets-and-ingresses",level:2},{value:"2.a. Creating a <code>StorageClass</code> or <code>PersistentVolume</code>",id:"2a-creating-a-storageclass-or-persistentvolume",level:3},{value:"2.b. Editing the environment variables with secrets",id:"2b-editing-the-environment-variables-with-secrets",level:2},{value:"2.c. Creating an <code>IngressRouteTCP</code> to expose the LDAP server",id:"2c-creating-an-ingressroutetcp-to-expose-the-ldap-server",level:3},{value:"2.d. Creating a <code>Certificate</code> for LDAPS (TLS)",id:"2d-creating-a-certificate-for-ldaps-tls",level:3},{value:"3. Editing <code>389ds-app.yaml</code> to use the fork",id:"3-editing-389ds-appyaml-to-use-the-fork",level:2},{value:"4. Adding custom values to the chart",id:"4-adding-custom-values-to-the-chart",level:2},{value:"4.a. Create the values file",id:"4a-create-the-values-file",level:3},{value:"4.b. Configure the 389ds",id:"4b-configure-the-389ds",level:3},{value:"4.c. Mount the volume",id:"4c-mount-the-volume",level:3},{value:"4. Deploy the app",id:"4-deploy-the-app",level:2},{value:"5. Post deployment settings",id:"5-post-deployment-settings",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-a-ldap-server"},"Deploy a LDAP server"),(0,l.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,l.kt)("p",null,"The Helm resources are stored on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/tree/main/helm/389ds"},"ClusterFactory Git Repository"),"."),(0,l.kt)("p",null,"The Dockerfile is described in the git repository ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/389ds/389-ds-base"},"389ds/dirsrv"),"."),(0,l.kt)("p",null,"An Docker image can be pulled with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull docker.io/389ds/dirsrv:latest\n")),(0,l.kt)("h2",{id:"1-deploy-namespace-and-appproject"},"1. Deploy Namespace and AppProject"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/\n")),(0,l.kt)("h2",{id:"2-persistent-volumes-secrets-and-ingresses"},"2. Persistent Volumes, Secrets and Ingresses"),(0,l.kt)("h3",{id:"2a-creating-a-storageclass-or-persistentvolume"},"2.a. Creating a ",(0,l.kt)("inlineCode",{parentName:"h3"},"StorageClass")," or ",(0,l.kt)("inlineCode",{parentName:"h3"},"PersistentVolume")),(0,l.kt)("p",null,"We will use NFS. Feel free to use another type of storage. We recommend at least 100 GB since the storage is used to store the root file system of the operating system images."),(0,l.kt)(s.Z,{groupId:"volume",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/volumes/storage-class.yaml"',title:'"argo/ldap/volumes/storage-class.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: 389ds-nfs\n  namespace: ldap\n  labels:\n    app: 389ds\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: <FILL ME> # IP or host\n  share: <FILL ME> # /srv/nfs/k8s/389ds\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/zone\n        values:\n          - <FILL ME> # <country code>-<city>-<index>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/volumes/storage-class.yaml\n"))),(0,l.kt)(r.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/volumes/persistent-volume.yaml"',title:'"argo/ldap/volumes/persistent-volume.yaml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: 389ds-pv\n  namespace: ldap\n  labels:\n    app: 389ds\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nspec:\n  capacity:\n    storage: 100Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: <unique id> # uuidgen\n    volumeAttributes:\n      server: <FILL ME> # IP or host\n      share: <FILL ME> # /srv/nfs/k8s/389ds\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/volumes/persistent-volume.yaml\n")),(0,l.kt)("p",null,"The label ",(0,l.kt)("inlineCode",{parentName:"p"},"app=ldap")," will be used by the PersistentVolumeClaim."))),(0,l.kt)("h2",{id:"2b-editing-the-environment-variables-with-secrets"},"2.b. Editing the environment variables with secrets"),(0,l.kt)("p",null,"Take a look at the README of ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/389ds/dirsrv"},"389ds/dirsrv"),"."),(0,l.kt)("p",null,"Some of the environment variables are sensitive:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dm-password"),": The password of the ",(0,l.kt)("inlineCode",{parentName:"li"},"cn=Directory Manager")," user.")),(0,l.kt)("p",null,"We must store these value inside a secret."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"-secret.yaml.local")," file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/secrets/389ds-secret.yaml.local"',title:'"argo/ldap/secrets/389ds-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: 389ds-secret\n  namespace: ldap\nstringData:\n  dm-password: <a password>\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"cfctl kubeseal\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/secrets/389ds-sealed-secret.yaml\n")),(0,l.kt)("p",null,"You can track ",(0,l.kt)("inlineCode",{parentName:"p"},"389ds-env-sealed-secret.yaml")," in Git, but not the ",(0,l.kt)("inlineCode",{parentName:"p"},"-secret.yaml.local")," file."),(0,l.kt)("h3",{id:"2c-creating-an-ingressroutetcp-to-expose-the-ldap-server"},"2.c. Creating an ",(0,l.kt)("inlineCode",{parentName:"h3"},"IngressRouteTCP")," to expose the LDAP server"),(0,l.kt)("p",null,"You can expose the LDAP using Traefik ",(0,l.kt)("inlineCode",{parentName:"p"},"IngressRouteTCP"),"."),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"argo/ldap/ingresses/ingress-route-tcp.yaml")," file and add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/ingresses/ingress-routes-tcp.yaml"',title:'"argo/ldap/ingresses/ingress-routes-tcp.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldap-ingress-tcp\n  namespace: ldap\n  labels:\n    app.kubernetes.io/name: ldap\n    app.kubernetes.io/component: ingress-route-tcp\nspec:\n  entryPoints:\n    - ldap\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: dirsrv-389ds\n          port: 3389\n---\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldaps\n  namespace: ldap\n  labels:\n    app.kubernetes.io/name: ldaps\n    app.kubernetes.io/component: ingress-route-tcp\n\nspec:\n  entryPoints:\n    - ldaps\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: dirsrv-389ds\n          namespace: ldap\n          port: 3636\n  tls:\n    passthrough: true\n")),(0,l.kt)("p",null,"You must open ports 636 and 389 on the load balancer of Traefik by configuring the Traefik ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/traefik/values.yaml"',title:'"core/traefik/values.yaml"'},"ports:\n  ldap:\n    port: 1389\n    expose: yes\n    exposedPort: 389\n    protocol: TCP\n  ldaps:\n    port: 1636\n    expose: yes\n    exposedPort: 636\n    protocol: TCP\n")),(0,l.kt)("p",null,"Apply:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"./scripts/deploy-core\nkubectl apply -f argo/ldap/ingresses/ingress-routes-tcp.yaml\n")),(0,l.kt)("h3",{id:"2d-creating-a-certificate-for-ldaps-tls"},"2.d. Creating a ",(0,l.kt)("inlineCode",{parentName:"h3"},"Certificate")," for LDAPS (TLS)"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"argo/ldap/certificates/ldap.example.com-cert.yaml")," file and add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/certificates/ldap.example.com-cert.yaml"',title:'"argo/ldap/certificates/ldap.example.com-cert.yaml"'},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: ldap.example.com-cert\n  namespace: ldap\nspec:\n  secretName: ldap.example.com-secret\n  issuerRef:\n    name: private-cluster-issuer\n    kind: ClusterIssuer\n  commonName: ldap.example.com\n  subject:\n    countries: [CH]\n    localities: [Lonay]\n    organizationalUnits: []\n    organizations: [Example Org]\n    postalCodes: ['1027']\n    provinces: [Laud]\n    streetAddresses: [Chemin des Mouettes 1]\n  duration: 1y\n  dnsNames:\n    - ldap.example.com\n    - dirsrv-389ds.ldap.svc.cluster.local\n  privateKey:\n    size: 4096\n    algorithm: RSA\n")),(0,l.kt)("p",null,"You want your LDAP server to be secure inside and outside the cluster. Therefore, you need to add 2 DNS names:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ldap.example.com")," which is used to access to the Ingress Controller which will forward to the LDAP service."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dirsrv-389ds.ldap.svc.cluster.local")," which is used to access to the LDAP service.")),(0,l.kt)("p",null,"You should edit all of the fields of the certificate, especially the ",(0,l.kt)("inlineCode",{parentName:"p"},"subject")," field."),(0,l.kt)("p",null,"Apply it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"./scripts/deploy-core\nkubectl apply -f argo/ldap/certificates/ldap.example.com-cert.yaml\n")),(0,l.kt)("h2",{id:"3-editing-389ds-appyaml-to-use-the-fork"},"3. Editing ",(0,l.kt)("inlineCode",{parentName:"h2"},"389ds-app.yaml")," to use the fork"),(0,l.kt)("p",null,"Change the ",(0,l.kt)("inlineCode",{parentName:"p"},"repoURL")," to the URL used to pull the fork. Also add the ",(0,l.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," file to customize the values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo.example/ldap/apps/389ds-app.yaml > spec > source"',title:'"argo.example/ldap/apps/389ds-app.yaml',">":!0,spec:!0,'source"':!0},"source:\n  # You should have forked this repo. Change the URL to your fork.\n  repoURL: git@github.com:<your account>/ClusterFactory.git\n  # You should use your branch too.\n  targetRevision: HEAD\n  path: helm/389ds\n  helm:\n    releaseName: 389ds\n\n    # Create a values file inside your fork and change the values.\n    valueFiles:\n      - values-production.yaml\n")),(0,l.kt)("h2",{id:"4-adding-custom-values-to-the-chart"},"4. Adding custom values to the chart"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Read the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/helm/389ds/values.yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"values.yaml"))," to see all the default values.")),(0,l.kt)("h3",{id:"4a-create-the-values-file"},"4.a. Create the values file"),(0,l.kt)("p",null,"Create the values file ",(0,l.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm/389ds/")," directory."),(0,l.kt)("h3",{id:"4b-configure-the-389ds"},"4.b. Configure the 389ds"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/389ds/values-production.yaml"',title:'"helm/389ds/values-production.yaml"'},"tls:\n  secretName: ldap.example.com-secret\n\nconfig:\n  dmPassword:\n    secretName: '389ds-secret'\n    key: 'dm-password'\n  suffixName: 'dc=example,dc=com'\n\ninitChownData:\n  enabled: true\n")),(0,l.kt)("p",null,"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"suffixName")," according to your need. This is the path in LDAP where the organizational units will be stored. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"ou=people,dc=example,dc=com"),"."),(0,l.kt)("h3",{id:"4c-mount-the-volume"},"4.c. Mount the volume"),(0,l.kt)(s.Z,{groupId:"volume",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/389ds/values-production.yaml"',title:'"helm/389ds/values-production.yaml"'},"# ...\npersistence:\n  storageClassName: '389ds-nfs'\n"))),(0,l.kt)(r.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/389ds/values-production.yaml"',title:'"helm/389ds/values-production.yaml"'},"# ...\npersistence:\n  selectorLabels:\n    app: 389ds\n")))),(0,l.kt)("h2",{id:"4-deploy-the-app"},"4. Deploy the app"),(0,l.kt)("p",null,"Commit and push:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'git add .\ngit commit -m "Added 389ds service"\ngit push\n')),(0,l.kt)("p",null,"And deploy the Argo CD application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/apps/389ds-app.yaml\n")),(0,l.kt)("p",null,"If the Ingress is configured, the LDAP server should be available on the IP specified by MetalLB."),(0,l.kt)("p",null,"The deployment of 389ds might be slow. Watch the logs and look for ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO: 389-ds-container started.")," which indicates a successful deployment."),(0,l.kt)("p",null,"If the server is crashing, it may be caused by the permissions inside the NFS. Check the content inside NFS, the owner should be ",(0,l.kt)("inlineCode",{parentName:"p"},"499:499"),"."),(0,l.kt)("h2",{id:"5-post-deployment-settings"},"5. Post deployment settings"),(0,l.kt)("p",null,"After deploying the LDAP server, the database is empty."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl exec")," inside the container:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'kubectl exec -i -t -n ldap dirsrv-389ds-0 -c dirsrv-389ds -- sh -c "clear; (bash || ash || sh)"\n')),(0,l.kt)("p",null,"You can also use Lens to open a shell inside the container."),(0,l.kt)("p",null,"To initialize the database, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},"dsconf localhost backend create --suffix dc=example,dc=com --be-name example_backend\ndsidm localhost initialise\n")),(0,l.kt)("p",null,"Adapt the suffix based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"suffixName")," in the values file. You can also change the backend name ",(0,l.kt)("inlineCode",{parentName:"p"},"example_backend"),"."),(0,l.kt)("p",null,"Based on what you want, you can add ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqueness")," attributes to some fields:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'# Unique mail\ndsconf localhost plugin attr-uniq add "mail attribute uniqueness" --attr-name mail --subtree "dc=people,dc=example,dc=com"\n# Unique uid\ndsconf localhost plugin attr-uniq add "uid attribute uniqueness" --attr-name uid --subtree "dc=people,dc=example,dc=com"\n# Unique uid number\ndsconf localhost plugin attr-uniq add "uidNumber attribute uniqueness" --attr-name uidNumber --subtree "dc=example,dc=com"\n# Unique gid number\ndsconf localhost plugin attr-uniq add "gidNumber attribute uniqueness" --attr-name gidNumber --subtree "ou=groups,dc=example,dc=com"\n\n# Enable the plugins\ndsconf localhost plugin attr-uniq enable "mail attribute uniqueness"\ndsconf localhost plugin attr-uniq enable "uid attribute uniqueness"\ndsconf localhost plugin attr-uniq enable "uidNumber attribute uniqueness"\ndsconf localhost plugin attr-uniq enable "gidNumber attribute uniqueness"\n')),(0,l.kt)("p",null,"You may also want uid/gid number auto assignment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsconf localhost plugin dna config "UID and GID numbers" add \\\n  --type gidNumber uidNumber \\\n  --filter "(|(objectclass=posixAccount)(objectclass=posixGroup))" \\\n  --scope dc=example,dc=run\\\n  --next-value 1601 \\\n  --magic-regen -1\ndsconf localhost plugin dna enable\n')),(0,l.kt)("p",null,"Change ",(0,l.kt)("inlineCode",{parentName:"p"},"next-value")," to the wishing starting uid/gid number. Select a magic value which will indicates to use a new value for the user."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost user create \\\n  --uid example-user \\\n  --cn example-user \\\n  --displayName example-user \\\n  --homeDirectory "/dev/shm" \\\n  --uidNumber -1 \\\n  --gidNumber 1600\n')),(0,l.kt)("p",null,"The created user will have 1601 as UID and 1600 as GID."),(0,l.kt)("p",null,"If you want to have a seperate DNA plugin for ",(0,l.kt)("inlineCode",{parentName:"p"},"gidNumber")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"uidNumber"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsconf localhost plugin dna config "UID numbers" add \\\n  --type uidNumber \\\n  --filter "(objectclass=posixAccount)" \\\n  --scope ou=people,dc=example,dc=run\\\n  --next-value 1601 \\\n  --magic-regen -1\ndsconf localhost plugin dna config "GID numbers" add \\\n  --type gidNumber \\\n  --filter "(objectclass=posixGroup)" \\\n  --scope ou=groups,dc=example,dc=run\\\n  --next-value 1601 \\\n  --magic-regen -1\ndsconf localhost plugin dna enable\n')),(0,l.kt)("p",null,"Full documentation about distributed numeric assignment ",(0,l.kt)("a",{parentName:"p",href:"https://directory.fedoraproject.org/docs/389ds/design/dna-plugin.html"},"here"),"."),(0,l.kt)("p",null,"Restart the server after the changes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl delete pod -n ldap dirsrv-389ds-0\n")),(0,l.kt)("p",null,"The database may have been destroyed because of the plugin, ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl exec")," in the container and run it again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},"dsconf localhost backend create --suffix dc=example,dc=com --be-name example_backend\ndsidm localhost initialise\n")))}m.isMDXComponent=!0}}]);