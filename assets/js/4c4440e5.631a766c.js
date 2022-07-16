"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[8723],{9613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8677:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(9496),l=a(5924),r="tabItem_FTZG";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},1023:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(665),l=a(9496),r=a(5924),o=a(7928),s=a(473),i=a(4467),p=a(5947),u="tabList_m6Et",c="tabItem_b767";function d(e){var t,a,o=e.lazy,d=e.block,m=e.defaultValue,g=e.values,v=e.groupId,y=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:h[0].props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),C=N.tabGroupChoices,D=N.setTabGroupChoices,A=(0,l.useState)(b),P=A[0],E=A[1],L=[],_=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=C[v];null!=I&&I!==P&&k.some((function(e){return e.value===I}))&&E(I)}var O=function(e){var t=e.currentTarget,a=L.indexOf(t),n=k[a].value;n!==P&&(_(t),E(n),null!=v&&D(v,String(n)))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=L.indexOf(e.currentTarget)+1;a=null!=(n=L[l])?n:L[0];break;case"ArrowLeft":var r,o=L.indexOf(e.currentTarget)-1;a=null!=(r=L[o])?r:L[L.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},y)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return L.push(e)},onKeyDown:S,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},2690:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n=a(665),l=a(151),r=(a(9496),a(9613)),o=a(1023),s=a(8677),i=["components"],p={},u="Deploy a LDAP server",c={unversionedId:"guides/deploy-ldap",id:"guides/deploy-ldap",title:"Deploy a LDAP server",description:"Helm and Docker resources",source:"@site/docs/guides/800-deploy-ldap.md",sourceDirName:"guides",slug:"/guides/deploy-ldap",permalink:"/docs/guides/deploy-ldap",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/guides/800-deploy-ldap.md",tags:[],version:"current",sidebarPosition:800,frontMatter:{},sidebar:"docs",previous:{title:"Deploy a VM with KubeVirt",permalink:"/docs/guides/kubevirt/deploy-vm"},next:{title:"Develop Applications to integrate into ClusterFactory",permalink:"/docs/guides/develop-apps"}},d={},m=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Deploy Namespace and AppProject",id:"1-deploy-namespace-and-appproject",level:2},{value:"2. Persistent Volumes, Secrets and Ingresses",id:"2-persistent-volumes-secrets-and-ingresses",level:2},{value:"2.a. Creating a <code>StorageClass</code> or <code>PersistentVolume</code>",id:"2a-creating-a-storageclass-or-persistentvolume",level:3},{value:"2.b. Editing the environment variables with secrets",id:"2b-editing-the-environment-variables-with-secrets",level:2},{value:"2.c. Creating an <code>IngressRouteTCP</code> to expose the LDAP server",id:"2c-creating-an-ingressroutetcp-to-expose-the-ldap-server",level:3},{value:"3. Editing <code>openldap-app.yml</code> to use the fork",id:"3-editing-openldap-appyml-to-use-the-fork",level:2},{value:"4. Adding custom values to the chart",id:"4-adding-custom-values-to-the-chart",level:2},{value:"4.a. Create the values file",id:"4a-create-the-values-file",level:3},{value:"4.b. Configure the OpenLDAP environment variables",id:"4b-configure-the-openldap-environment-variables",level:3},{value:"4.c. Mount the volume",id:"4c-mount-the-volume",level:3},{value:"4. Deploy the app",id:"4-deploy-the-app",level:2}],g={toc:m};function v(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-a-ldap-server"},"Deploy a LDAP server"),(0,r.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,r.kt)("p",null,"The Helm resources are stored on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/helm/openldap"},"ClusterFactory Git Repository"),"."),(0,r.kt)("p",null,"The Dockerfile is described in the git repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/bitnami-docker-openldap"},"bitnami/bitnami-docker-openldap"),"."),(0,r.kt)("p",null,"An Docker image can be pulled with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull docker.io/bitnami/openldap:latest\n")),(0,r.kt)("h2",{id:"1-deploy-namespace-and-appproject"},"1. Deploy Namespace and AppProject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/ldap/\n")),(0,r.kt)("h2",{id:"2-persistent-volumes-secrets-and-ingresses"},"2. Persistent Volumes, Secrets and Ingresses"),(0,r.kt)("h3",{id:"2a-creating-a-storageclass-or-persistentvolume"},"2.a. Creating a ",(0,r.kt)("inlineCode",{parentName:"h3"},"StorageClass")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"PersistentVolume")),(0,r.kt)("p",null,"We will use NFS. Feel free to use another type of storage. We recommend at least 100 GB since the storage is used to store the root file system of the operating system images."),(0,r.kt)(o.Z,{groupId:"volume",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/volumes/storage-class.yaml"',title:'"argo/ldap/volumes/storage-class.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: openldap-nfs\n  namespace: ldap\n  labels:\n    app: openldap\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: <FILL ME> # IP or host\n  share: <FILL ME> # /srv/nfs/k8s/xcat\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/zone\n        values:\n          - <FILL ME> # <country code>-<city>-<index>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/ldap/volumes/storage-class.yaml\n"))),(0,r.kt)(s.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/volumes/persistent-volume.yaml"',title:'"argo/ldap/volumes/persistent-volume.yaml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: openldap-pv\n  namespace: ldap\n  labels:\n    app: openldap\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nspec:\n  capacity:\n    storage: 100Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: <unique id> # uuidgen\n    volumeAttributes:\n      server: <FILL ME> # IP or host\n      share: <FILL ME> # /srv/nfs/k8s/xcat\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/ldap/volumes/persistent-volume.yaml\n")),(0,r.kt)("p",null,"The label ",(0,r.kt)("inlineCode",{parentName:"p"},"app=ldap")," will be used by the PersistentVolumeClaim."))),(0,r.kt)("h2",{id:"2b-editing-the-environment-variables-with-secrets"},"2.b. Editing the environment variables with secrets"),(0,r.kt)("p",null,"Take a look at the git repository of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/bitnami-docker-openldap#configuration"},"bitnami-docker-openldap"),"."),(0,r.kt)("p",null,"Some of the environment variables are sensitive:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_ADMIN_USERNAME"),": LDAP database admin user. Default: ",(0,r.kt)("strong",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_ADMIN_PASSWORD"),": LDAP database admin password. Default: ",(0,r.kt)("strong",{parentName:"li"},"adminpassword")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_CONFIG_ADMIN_ENABLED"),": Whether to create a configuration admin user. Default: ",(0,r.kt)("strong",{parentName:"li"},"no"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_CONFIG_ADMIN_USERNAME"),": LDAP configuration admin user. This is separate from ",(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_ADMIN_USERNAME"),". Default: ",(0,r.kt)("strong",{parentName:"li"},"admin"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_CONFIG_ADMIN_PASSWORD"),": LDAP configuration admin password. Default: ",(0,r.kt)("strong",{parentName:"li"},"configpassword"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_USERS"),": Comma separated list of LDAP users to create in the default LDAP tree. Default: ",(0,r.kt)("strong",{parentName:"li"},"user01,user02")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP_PASSWORDS"),": Comma separated list of passwords to use for LDAP users. Default: ",(0,r.kt)("strong",{parentName:"li"},"bitnami1,bitnami2"))),(0,r.kt)("p",null,"If the default value isn't satisfying, you can override these variables by using a secret:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"-secret.yaml.local")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/secrets/openldap-env-secret.yaml.local"',title:'"argo/ldap/secrets/openldap-env-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: openldap-env-secret\n  namespace: monitoring\nstringData:\n  LDAP_ADMIN_USERNAME: admin\n  LDAP_ADMIN_PASSWORD: adminpassword\n  LDAP_CONFIG_ADMIN_ENABLED: no\n  LDAP_CONFIG_ADMIN_USERNAME: admin\n  LDAP_CONFIG_ADMIN_PASSWORD: configpassword\n  LDAP_USERS: user01,user02\n  LDAP_PASSWORDS: bitnami1,bitnami2\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"cfctl kubeseal\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/ldap/secrets/openldap-env-sealed-secret.yaml\n")),(0,r.kt)("p",null,"You can track ",(0,r.kt)("inlineCode",{parentName:"p"},"openldap-env-sealed-secret.yaml")," in Git, but not the ",(0,r.kt)("inlineCode",{parentName:"p"},"-secret.yaml.local")," file."),(0,r.kt)("h3",{id:"2c-creating-an-ingressroutetcp-to-expose-the-ldap-server"},"2.c. Creating an ",(0,r.kt)("inlineCode",{parentName:"h3"},"IngressRouteTCP")," to expose the LDAP server"),(0,r.kt)("p",null,"You can expose the LDAP using Traefik ",(0,r.kt)("inlineCode",{parentName:"p"},"IngressRouteTCP"),"."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"argo/ldap/ingresses/ingress-route-tcp.yaml")," file and add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/ingresses/ingress-routes-tcp.yaml"',title:'"argo/ldap/ingresses/ingress-routes-tcp.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldap-ingress-tcp\nspec:\n  entryPoints:\n    - ldap\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: openldap\n          port: 1389\n---\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldaps-ingress-tcp\nspec:\n  entryPoints:\n    - ldaps\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: openldap\n          port: 1636\n")),(0,r.kt)("p",null,"You must open ports 636 and 389 on the load balancer of Traefik by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfctl.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cfctl.yaml > spec > k0s > config > spec > extensions > helm > chart[]',title:'"cfctl.yaml',">":!0,spec:!0,k0s:!0,config:!0,extensions:!0,helm:!0,"chart[]":!0},"- name: traefik\n  chartname: traefik/traefik\n  version: '10.24.0'\n  namespace: traefik\n  values: |\n    ports:\n      ldap:\n        port: 1389\n        expose: yes\n        exposedPort: 389\n        protocol: TCP\n      ldaps:\n        port: 1636\n        expose: yes\n        exposedPort: 636\n        protocol: TCP\n")),(0,r.kt)("p",null,"Apply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"cfctl apply --debug --config cfctl.yaml\nkubectl apply -f argo/ldap/ingresses/ingress-routes-tcp.yaml\n")),(0,r.kt)("h2",{id:"3-editing-openldap-appyml-to-use-the-fork"},"3. Editing ",(0,r.kt)("inlineCode",{parentName:"h2"},"openldap-app.yml")," to use the fork"),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"repoURL")," to the URL used to pull the fork. Also add the ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," file to customize the values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo.example/ldap/apps/openldap-app.yml > spec > source"',title:'"argo.example/ldap/apps/openldap-app.yml',">":!0,spec:!0,'source"':!0},"source:\n  # You should have forked this repo. Change the URL to your fork.\n  repoURL: git@github.com:<your account>/ClusterFactory-CE.git\n  targetRevision: HEAD\n  path: helm/openldap\n  helm:\n    releaseName: openldap\n\n    # Create a values file inside your fork and change the values.\n    valueFiles:\n      - values-production.yaml\n")),(0,r.kt)("h2",{id:"4-adding-custom-values-to-the-chart"},"4. Adding custom values to the chart"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory-CE/blob/main/helm/openldap/values.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"values.yaml"))," to see all the default values.")),(0,r.kt)("h3",{id:"4a-create-the-values-file"},"4.a. Create the values file"),(0,r.kt)("p",null,"Create the values file ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm/openldap/")," directory."),(0,r.kt)("h3",{id:"4b-configure-the-openldap-environment-variables"},"4.b. Configure the OpenLDAP environment variables"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," field according to you needs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/openldap/values-production.yaml"',title:'"helm/openldap/values-production.yaml"'},"env:\n  BITNAMI_DEBUG: 'true'\n  LDAP_ROOT: 'dc=example,dc=org'\n  LDAP_CONFIG_ADMIN_ENABLED: 'no'\n  LDAP_USER_DC: 'users'\n  LDAP_GROUP: 'readers'\n  LDAP_ADD_SCHEMAS: 'yes'\n  LDAP_EXTRA_SCHEMAS: 'cosine,inetorgperson,nis'\n  LDAP_SKIP_DEFAULT_TREE: 'no'\n  LDAP_CUSTOM_LDIF_DIR: '/ldifs'\n  LDAP_CUSTOM_SCHEMA_FILE: '/schema/custom.ldif'\n  LDAP_ULIMIT_NOFILES: '1024'\n  LDAP_ALLOW_ANON_BINDING: 'yes'\n  LDAP_LOGLEVEL: '256'\n")),(0,r.kt)("h3",{id:"4c-mount-the-volume"},"4.c. Mount the volume"),(0,r.kt)(o.Z,{groupId:"volume",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/openldap/values-production.yaml"',title:'"helm/openldap/values-production.yaml"'},"# ...\npersistence:\n  storageClassName: 'openldap-nfs'\n"))),(0,r.kt)(s.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/openldap/values-production.yaml"',title:'"helm/openldap/values-production.yaml"'},"# ...\npersistence:\n  selectorLabels:\n    app: ldap\n")))),(0,r.kt)("h2",{id:"4-deploy-the-app"},"4. Deploy the app"),(0,r.kt)("p",null,"Commit and push:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},'git add .\ngit commit -m "Added OpenLDAP service"\ngit push\n')),(0,r.kt)("p",null,"And deploy the Argo CD application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/ldap/apps/openldap-app.yml\n")),(0,r.kt)("p",null,"If the Ingress is configured, the LDAP server should be available on the IP specified by MetalLB."))}v.isMDXComponent=!0}}]);