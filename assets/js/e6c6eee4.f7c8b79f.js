"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[3905],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8751:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9496),o=a(5924);const r="tabItem_cuvL";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},5632:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(665),o=a(9496),r=a(5924),l=a(2981),s=a(8291),i=a(9825),c=a(3772);const u="tabList_vL6X",p="tabItem_MPSI";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:g,className:y}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:x}=(0,i.U)(),[N,C]=(0,o.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=g){const e=f[g];null!=e&&e!==N&&k.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==N&&(E(t),C(n),null!=g&&x(g,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},y)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:I,onClick:T},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},7067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(665),o=(a(9496),a(9613)),r=a(5632),l=a(8751);const s={},i="How to deploy xCAT",c={unversionedId:"guides/provisioning/deploy-xcat",id:"guides/provisioning/deploy-xcat",title:"How to deploy xCAT",description:"xCAT deployment graph",source:"@site/docs/guides/50-provisioning/01-deploy-xcat.mdx",sourceDirName:"guides/50-provisioning",slug:"/guides/provisioning/deploy-xcat",permalink:"/docs/guides/provisioning/deploy-xcat",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/50-provisioning/01-deploy-xcat.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Deploy the Kube Prometheus Stack",permalink:"/docs/guides/monitoring/deploy"},next:{title:"Build an OS Image with Packer",permalink:"/docs/guides/provisioning/packer-build"}},u={},p=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Deploy Namespace and AppProject",id:"1-deploy-namespace-and-appproject",level:2},{value:"2. Creating a <code>StorageClass</code> or <code>PersistentVolume</code>",id:"2-creating-a-storageclass-or-persistentvolume",level:2},{value:"3. Editing <code>xcat-app.yaml</code> to use the fork",id:"3-editing-xcat-appyaml-to-use-the-fork",level:2},{value:"4. Adding custom values",id:"4-adding-custom-values",level:2},{value:"4.a. Add the values file to the chart",id:"4a-add-the-values-file-to-the-chart",level:3},{value:"4.b. Selecting a zone",id:"4b-selecting-a-zone",level:3},{value:"4.c. Network configuration",id:"4c-network-configuration",level:3},{value:"4.d. Volume configuration",id:"4d-volume-configuration",level:3},{value:"5. Deploy xCAT",id:"5-deploy-xcat",level:2}],d={toc:p};function m(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-deploy-xcat"},"How to deploy xCAT"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xCAT deployment graph",src:a(6292).Z,width:"1017",height:"228"})),(0,o.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,o.kt)("p",null,"The Helm resources are stored on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/tree/main/helm/xcat"},"ClusterFactory Git Repository"),"."),(0,o.kt)("p",null,"The Dockerfile is described in the git repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/xcat-rocky"},"SquareFactory/xcat-rocky"),"."),(0,o.kt)("p",null,"An Docker image can be pulled with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull ghcr.io/squarefactory/xcat-rocky:latest\n")),(0,o.kt)("h2",{id:"1-deploy-namespace-and-appproject"},"1. Deploy Namespace and AppProject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/provisioning/\n")),(0,o.kt)("h2",{id:"2-creating-a-storageclass-or-persistentvolume"},"2. Creating a ",(0,o.kt)("inlineCode",{parentName:"h2"},"StorageClass")," or ",(0,o.kt)("inlineCode",{parentName:"h2"},"PersistentVolume")),(0,o.kt)("p",null,"We will use NFS. Feel free to use another type of storage. We recommend at least 100 GB since the storage is used to store the root file system of the operating system images."),(0,o.kt)(r.Z,{groupId:"volume",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/volumes/storage-class.yaml"',title:'"argo/provisioning/volumes/storage-class.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: xcat-nfs\n  namespace: provisioning\n  labels:\n    app: xcat\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: <FILL ME> # IP or host\n  share: <FILL ME> # /srv/nfs/k8s/xcat\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/region\n        values:\n          - <FILL ME> # <country code>-<city>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/provisioning/volumes/storage-class.yaml\n"))),(0,o.kt)(l.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/volumes/persistent-volume.yaml"',title:'"argo/provisioning/volumes/persistent-volume.yaml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: xcat-pv\n  namespace: provisioning\n  labels:\n    app: xcat\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nspec:\n  capacity:\n    storage: 100Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: <unique id> # uuidgen\n    volumeAttributes:\n      server: <FILL ME> # IP or host\n      share: <FILL ME> # /srv/nfs/k8s/xcat\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/provisioning/volumes/persistent-volume.yaml\n")),(0,o.kt)("p",null,"The label ",(0,o.kt)("inlineCode",{parentName:"p"},"app=xcat")," will be used by the PersistentVolumeClaim."))),(0,o.kt)("h2",{id:"3-editing-xcat-appyaml-to-use-the-fork"},"3. Editing ",(0,o.kt)("inlineCode",{parentName:"h2"},"xcat-app.yaml")," to use the fork"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo.example/provisioning/apps/xcat-app.yaml > spec > source"',title:'"argo.example/provisioning/apps/xcat-app.yaml',">":!0,spec:!0,'source"':!0},"source:\n  # You should have forked this repo. Change the URL to your fork.\n  repoURL: git@github.com:<your account>/ClusterFactory.git\n  # You should your branch too.\n  targetRevision: HEAD\n  path: helm/xcat\n  helm:\n    releaseName: xcat\n\n    valueFiles:\n      - values-production.yaml\n")),(0,o.kt)("h2",{id:"4-adding-custom-values"},"4. Adding custom values"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Read the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/helm/xcat/values.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"values.yaml"))," to see all the default values.")),(0,o.kt)("h3",{id:"4a-add-the-values-file-to-the-chart"},"4.a. Add the values file to the chart"),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"helm/xcat/")," directory."),(0,o.kt)("h3",{id:"4b-selecting-a-zone"},"4.b. Selecting a zone"),(0,o.kt)("p",null,"xCAT will use the host network. Make sure that xCAT stays on the same network by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"."),(0,o.kt)("p",null,"Your nodes should be annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/region")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/xcat/values-production.yaml"',title:'"helm/xcat/values-production.yaml"'},"nodeSelector:\n  topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n  topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\n")),(0,o.kt)("h3",{id:"4c-network-configuration"},"4.c. Network configuration"),(0,o.kt)("p",null,"xCAT will be connected to the host network using the IPVLAN CNI plugin. Make sure that Multus CNI is already installed."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check with:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> kubectl get daemonset -n kube-system kube-multus-ds\nNAME             DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE\nkube-multus-ds   1         1         1       1            1           <none>          28d\n")),(0,o.kt)("p",{parentName:"admonition"},"If it isn't already deployed, you can deploy Multus with:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/k8snetworkplumbingwg/multus-cni/master/deployments/multus-daemonset-thick-plugin.yaml\n"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xcat network diagram",src:a(9213).Z,width:"364",height:"377"})),(0,o.kt)("p",null,"Similar to configuring the network interface of a Virtual Machine, you must change these fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="title="helm/xcat/values-production.yaml"',title:'"title'},"# ...\n\nnet:\n  # Kubernetes host interface\n  masterInterface: eth0\n  mode: l2\n  type: ipvlan\n\n  # https://www.cni.dev/plugins/current/ipam/static/\n  ipam:\n    type: static\n    addresses:\n      - address: 192.168.0.3/24\n        gateway: 192.168.0.1\n    routes:\n      - dst: 0.0.0.0/0\n      - dst: 192.168.0.0/24\n        gw: 192.168.0.1\n\n  # https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-dns-config\n  dns:\n    nameservers:\n      - 127.0.0.1\n")),(0,o.kt)("p",null,"Use IPAM ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," since xCAT has a ISC DHCP server."),(0,o.kt)("h3",{id:"4d-volume-configuration"},"4.d. Volume configuration"),(0,o.kt)(r.Z,{groupId:"volume",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Edit the values accordingly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/xcat/values-production.yaml"',title:'"helm/xcat/values-production.yaml"'},"# ...\npersistence:\n  storageClassName: 'xcat-nfs'\n  accessModes: ['ReadWriteOnce']\n  size: 50Gi\n"))),(0,o.kt)(l.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/xcat/values-production.yaml"',title:'"helm/xcat/values-production.yaml"'},"# ...\npersistence:\n  storageClassName: ''\n  accessModes: ['ReadWriteOnce']\n  size: 50Gi\n  selectorLabels:\n    app: xcat\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\n")))),(0,o.kt)("h2",{id:"5-deploy-xcat"},"5. Deploy xCAT"),(0,o.kt)("p",null,"Commit and push:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'git add .\ngit commit -m "Added xCAT application and values"\ngit push\n')),(0,o.kt)("p",null,"And deploy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/provisioning/apps/xcat-app.yaml\n")))}m.isMDXComponent=!0},6292:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20220506142457636-1829689768a08986687e4f0518f45ce9.png"},9213:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcat.drawio-2ad7b54ef38c8135be246bf66243e9e1.svg"}}]);