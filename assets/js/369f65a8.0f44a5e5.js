"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[350],{9613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7212:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(9496),r=a(1626),l="tabItem_uYtj";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4356:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(2848),r=a(9496),l=a(9732),o=a(539),s=a(6194),i=a(3461),p=a(1626),u="tabList_O_Pr",c="tabItem_jwmu";function d(e){var t,a,l,d=e.lazy,m=e.block,g=e.defaultValue,v=e.values,f=e.groupId,y=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(t=null!=g?g:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var D=(0,s.U)(),P=D.tabGroupChoices,A=D.setTabGroupChoices,L=(0,r.useState)(N),_=L[0],C=L[1],E=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=P[f];null!=O&&O!==_&&h.some((function(e){return e.value===O}))&&C(O)}var S=function(e){var t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==_&&(I(t),C(n),null!=f&&A(f,n))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},y)},h.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return E.push(e)},onKeyDown:T,onFocus:S,onClick:S},l,{className:(0,p.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=a?a:t)}))),d?(0,r.cloneElement)(k.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},3297:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n=a(2848),r=a(9213),l=(a(9496),a(9613)),o=a(4356),s=a(7212),i=["components"],p={},u="Deploy a LDAP server",c={unversionedId:"guides/deploy-ldap",id:"guides/deploy-ldap",title:"Deploy a LDAP server",description:"Helm and Docker resources",source:"@site/docs/guides/80-deploy-ldap.md",sourceDirName:"guides",slug:"/guides/deploy-ldap",permalink:"/docs/guides/deploy-ldap",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/web/docs/guides/80-deploy-ldap.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"docs",previous:{title:"Deploy a VM with KubeVirt",permalink:"/docs/guides/kubevirt/deploy-vm"},next:{title:"Develop Applications to integrate into Cluster Factory",permalink:"/docs/guides/develop-apps"}},d={},m=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Deploy Namespace and AppProject",id:"1-deploy-namespace-and-appproject",level:2},{value:"2. Persistent Volumes, Secrets and Ingresses",id:"2-persistent-volumes-secrets-and-ingresses",level:2},{value:"2.a. Creating a <code>StorageClass</code> or <code>PersistentVolume</code>",id:"2a-creating-a-storageclass-or-persistentvolume",level:3},{value:"2.b. Editing the environment variables with secrets",id:"2b-editing-the-environment-variables-with-secrets",level:2},{value:"2.c. Creating an <code>IngressRouteTCP</code> to expose the LDAP server",id:"2c-creating-an-ingressroutetcp-to-expose-the-ldap-server",level:3},{value:"3. Editing the <code>openldap-app.yml</code> values",id:"3-editing-the-openldap-appyml-values",level:2},{value:"3.a. Configure the OpenLDAP environment variables",id:"3a-configure-the-openldap-environment-variables",level:3},{value:"3.b. Mount the volume",id:"3b-mount-the-volume",level:3},{value:"3.c. Verify the default values",id:"3c-verify-the-default-values",level:3},{value:"4. Deploy the app",id:"4-deploy-the-app",level:2}],g={toc:m};function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-a-ldap-server"},"Deploy a LDAP server"),(0,l.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,l.kt)("p",null,"The Helm resources are stored on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/helm/openldap"},"Cluster Factory Git Repository"),"."),(0,l.kt)("p",null,"The Dockerfile is described in the git repository ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami/bitnami-docker-openldap"},"bitnami/bitnami-docker-openldap"),"."),(0,l.kt)("p",null,"An Docker image can be pulled with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull docker.io/bitnami/openldap:latest\n")),(0,l.kt)("h2",{id:"1-deploy-namespace-and-appproject"},"1. Deploy Namespace and AppProject"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/ldap/\n")),(0,l.kt)("h2",{id:"2-persistent-volumes-secrets-and-ingresses"},"2. Persistent Volumes, Secrets and Ingresses"),(0,l.kt)("h3",{id:"2a-creating-a-storageclass-or-persistentvolume"},"2.a. Creating a ",(0,l.kt)("inlineCode",{parentName:"h3"},"StorageClass")," or ",(0,l.kt)("inlineCode",{parentName:"h3"},"PersistentVolume")),(0,l.kt)("p",null,"We will use NFS. Feel free to use another type of storage. We recommend at least 100 GB since the storage is used to store the root file system of the operating system images."),(0,l.kt)(o.Z,{groupId:"volume",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/volumes/storage-class.yaml"',title:'"argo/ldap/volumes/storage-class.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: openldap-nfs\n  namespace: ldap\n  labels:\n    app: openldap\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: <FILL ME> # IP or host\n  share: <FILL ME> # /srv/nfs/k8s/xcat\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/zone\n        values:\n          - <FILL ME> # <country code>-<city>-<index>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/ldap/volumes/storage-class.yaml\n"))),(0,l.kt)(s.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/volumes/persistent-volume.yaml"',title:'"argo/ldap/volumes/persistent-volume.yaml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: openldap-pv\n  namespace: ldap\n  labels:\n    app: openldap\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nspec:\n  capacity:\n    storage: 100Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: <unique id> # uuidgen\n    volumeAttributes:\n      server: <FILL ME> # IP or host\n      share: <FILL ME> # /srv/nfs/k8s/xcat\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/ldap/volumes/persistent-volume.yaml\n")),(0,l.kt)("p",null,"The label ",(0,l.kt)("inlineCode",{parentName:"p"},"app=ldap")," will be used by the PersistentVolumeClaim."))),(0,l.kt)("h2",{id:"2b-editing-the-environment-variables-with-secrets"},"2.b. Editing the environment variables with secrets"),(0,l.kt)("p",null,"Take a look at the git repository of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami/bitnami-docker-openldap#configuration"},"bitnami-docker-openldap"),"."),(0,l.kt)("p",null,"Some of the environment variables are sensitive:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_ADMIN_USERNAME"),": LDAP database admin user. Default: ",(0,l.kt)("strong",{parentName:"li"},"admin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_ADMIN_PASSWORD"),": LDAP database admin password. Default: ",(0,l.kt)("strong",{parentName:"li"},"adminpassword")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_CONFIG_ADMIN_ENABLED"),": Whether to create a configuration admin user. Default: ",(0,l.kt)("strong",{parentName:"li"},"no"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_CONFIG_ADMIN_USERNAME"),": LDAP configuration admin user. This is separate from ",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_ADMIN_USERNAME"),". Default: ",(0,l.kt)("strong",{parentName:"li"},"admin"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_CONFIG_ADMIN_PASSWORD"),": LDAP configuration admin password. Default: ",(0,l.kt)("strong",{parentName:"li"},"configpassword"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_USERS"),": Comma separated list of LDAP users to create in the default LDAP tree. Default: ",(0,l.kt)("strong",{parentName:"li"},"user01,user02")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_PASSWORDS"),": Comma separated list of passwords to use for LDAP users. Default: ",(0,l.kt)("strong",{parentName:"li"},"bitnami1,bitnami2"))),(0,l.kt)("p",null,"If the default value isn't satisfying, you can override these variables by using a secret:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"-secret.yaml.local")," file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/secrets/openldap-env-secret.yaml.local"',title:'"argo/ldap/secrets/openldap-env-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: openldap-env-secret\n  namespace: monitoring\nstringData:\n  LDAP_ADMIN_USERNAME: admin\n  LDAP_ADMIN_PASSWORD: adminpassword\n  LDAP_CONFIG_ADMIN_ENABLED: no\n  LDAP_CONFIG_ADMIN_USERNAME: admin\n  LDAP_CONFIG_ADMIN_PASSWORD: configpassword\n  LDAP_USERS: user01,user02\n  LDAP_PASSWORDS: bitnami1,bitnami2\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"./kubeseal-every-local-files.sh\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/ldap/secrets/openldap-env-sealed-secret.yaml\n")),(0,l.kt)("p",null,"You can track ",(0,l.kt)("inlineCode",{parentName:"p"},"openldap-env-sealed-secret.yaml")," in Git, but not the ",(0,l.kt)("inlineCode",{parentName:"p"},"-secret.yaml.local")," file."),(0,l.kt)("h3",{id:"2c-creating-an-ingressroutetcp-to-expose-the-ldap-server"},"2.c. Creating an ",(0,l.kt)("inlineCode",{parentName:"h3"},"IngressRouteTCP")," to expose the LDAP server"),(0,l.kt)("p",null,"You can expose the LDAP using Traefik ",(0,l.kt)("inlineCode",{parentName:"p"},"IngressRouteTCP"),"."),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"argo/ldap/ingresses/ingress-route-tcp.yaml")," file and add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/ingresses/ingress-routes-tcp.yaml"',title:'"argo/ldap/ingresses/ingress-routes-tcp.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldap-ingress-tcp\nspec:\n  entryPoints:\n    - ldap\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: openldap\n          port: 1389\n---\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldaps-ingress-tcp\nspec:\n  entryPoints:\n    - ldaps\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: openldap\n          port: 1636\n")),(0,l.kt)("p",null,"You must open ports 636 and 389 on the load balancer of Traefik by configuring the ",(0,l.kt)("inlineCode",{parentName:"p"},"k0sctl.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="k0sctl.yaml > spec > k0s > config > spec > extensions > helm > chart[]',title:'"k0sctl.yaml',">":!0,spec:!0,k0s:!0,config:!0,extensions:!0,helm:!0,"chart[]":!0},"- name: traefik\n  chartname: traefik/traefik\n  version: '10.15.0'\n  namespace: traefik\n  values: |\n    ports:\n      ldap:\n        port: 1389\n        expose: yes\n        exposedPort: 389\n        protocol: TCP\n      ldaps:\n        port: 1636\n        expose: yes\n        exposedPort: 636\n        protocol: TCP\n")),(0,l.kt)("p",null,"Apply:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"k0sctl apply --config k0sctl.yaml\nkubectl apply -f argo/ldap/ingresses/ingress-routes-tcp.yaml\n")),(0,l.kt)("h2",{id:"3-editing-the-openldap-appyml-values"},"3. Editing the ",(0,l.kt)("inlineCode",{parentName:"h2"},"openldap-app.yml")," values"),(0,l.kt)("h3",{id:"3a-configure-the-openldap-environment-variables"},"3.a. Configure the OpenLDAP environment variables"),(0,l.kt)("p",null,"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," field according to you needs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/apps/openldap-app.yml > spec > source > helm > values > env"',title:'"argo/ldap/apps/openldap-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'env"':!0},"env:\n  BITNAMI_DEBUG: 'true'\n  LDAP_ROOT: 'dc=example,dc=org'\n  LDAP_CONFIG_ADMIN_ENABLED: 'no'\n  LDAP_USER_DC: 'users'\n  LDAP_GROUP: 'readers'\n  LDAP_ADD_SCHEMAS: 'yes'\n  LDAP_EXTRA_SCHEMAS: 'cosine,inetorgperson,nis'\n  LDAP_SKIP_DEFAULT_TREE: 'no'\n  LDAP_CUSTOM_LDIF_DIR: '/ldifs'\n  LDAP_CUSTOM_SCHEMA_FILE: '/schema/custom.ldif'\n  LDAP_ULIMIT_NOFILES: '1024'\n  LDAP_ALLOW_ANON_BINDING: 'yes'\n  LDAP_LOGLEVEL: '256'\n")),(0,l.kt)("h3",{id:"3b-mount-the-volume"},"3.b. Mount the volume"),(0,l.kt)(o.Z,{groupId:"volume",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/apps/openldap-app.yml > spec > source > helm > values > env"',title:'"argo/ldap/apps/openldap-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'env"':!0},"persistence:\n  storageClassName: 'openldap-nfs'\n"))),(0,l.kt)(s.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/apps/openldap-app.yml > spec > source > helm > values > env"',title:'"argo/ldap/apps/openldap-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'env"':!0},"persistence:\n  selectorLabels:\n    app: ldap\n")))),(0,l.kt)("h3",{id:"3c-verify-the-default-values"},"3.c. Verify the default values"),(0,l.kt)("p",null,"Verify the default value inside the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/cluster-factory-ce/blob/main/helm/openldap/values.yaml"},"git repository"),"."),(0,l.kt)("h2",{id:"4-deploy-the-app"},"4. Deploy the app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/ldap/apps/openldap-app.yml\n")),(0,l.kt)("p",null,"If the Ingress is configured, the LDAP server should be available on the IP specified by MetalLB."))}v.isMDXComponent=!0}}]);