"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7409],{3815:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=t(7976),n=t(8502);const a={},l="Deploy a CVMFS Stratum 1",c={id:"guides/cvmfs/deploy-cvmfs",title:"Deploy a CVMFS Stratum 1",description:"image-20220509180348675",source:"@site/docs/guides/70-cvmfs/04-deploy-cvmfs.md",sourceDirName:"guides/70-cvmfs",slug:"/guides/cvmfs/deploy-cvmfs",permalink:"/docs/guides/cvmfs/deploy-cvmfs",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/70-cvmfs/04-deploy-cvmfs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Mount CVMFS repositories on Kubernetes",permalink:"/docs/guides/cvmfs/mount-cvmfs"},next:{title:"Deploy a VM with KubeVirt",permalink:"/docs/guides/kubevirt/deploy-vm"}},o={},i=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Deploy Namespace and AppProject",id:"1-deploy-namespace-and-appproject",level:2},{value:"2. Persistent Volumes, Secrets and PVC",id:"2-persistent-volumes-secrets-and-pvc",level:2},{value:"2.a. Write the CVMFS public key",id:"2a-write-the-cvmfs-public-key",level:3},{value:"2.b Deploy a <code>PersistentVolume</code> or <code>StorageClass</code>",id:"2b-deploy-a-persistentvolume-or-storageclass",level:3},{value:"3. Editing <code>cvmfs-server-app.yaml</code> to use the fork",id:"3-editing-cvmfs-server-appyaml-to-use-the-fork",level:2},{value:"4. Adding custom values to the chart",id:"4-adding-custom-values-to-the-chart",level:2},{value:"4.a. Create the values file",id:"4a-create-the-values-file",level:3},{value:"4.b. Select the nodes",id:"4b-select-the-nodes",level:3},{value:"4.c. Mount the keys",id:"4c-mount-the-keys",level:3},{value:"4.d. Add the replicas",id:"4d-add-the-replicas",level:3},{value:"4.e. (Optional) Expose the application to the external network",id:"4e-optional-expose-the-application-to-the-external-network",level:3},{value:"5. Deploy the app",id:"5-deploy-the-app",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"deploy-a-cvmfs-stratum-1",children:"Deploy a CVMFS Stratum 1"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20220509180348675",src:t(6996).Z+"",width:"1026",height:"454"})}),"\n",(0,r.jsxs)(s.p,{children:["Let's assume we plan to replicate ",(0,r.jsx)(s.code,{children:"http://cvmfs.example.com/cvmfs/repo.example.com"}),"."]}),"\n",(0,r.jsxs)(s.admonition,{type:"warning",children:[(0,r.jsx)(s.p,{children:"There is an issue with the Cgroups V2, a feature in recent linux kernels."}),(0,r.jsx)(s.p,{children:"The issue happens when a container image uses SystemD as the init system."}),(0,r.jsxs)(s.p,{children:["When using a container image with SystemD, ",(0,r.jsx)(s.code,{children:"/sys/fs/cgroup"})," must be mounted on the container. However, with Cgroups v2, the structure of this directory changed."]}),(0,r.jsxs)(s.p,{children:["Therefore, you MUST rollback to Cgroups v1 until SystemD can run with Cgroups v2. To rollback, add ",(0,r.jsx)(s.code,{children:"systemd.unified_cgroup_hierarchy=0"})," to the kernel cmdline parameter."]})]}),"\n",(0,r.jsx)(s.h2,{id:"helm-and-docker-resources",children:"Helm and Docker resources"}),"\n",(0,r.jsxs)(s.p,{children:["The Helm resources are stored on ",(0,r.jsx)(s.a,{href:"https://github.com/deepsquare-io/ClusterFactory/tree/main/helm/cvmfs-server",children:"ClusterFactory Git Repository"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The Dockerfile is described in the git repository ",(0,r.jsx)(s.a,{href:"https://github.com/SquareFactory/cvmfs-server-docker",children:"SquareFactory/cvmfs-server-docker"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"A Docker image can be pulled with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"docker pull ghcr.io/squarefactory/cvmfs-server:latest\n"})}),"\n",(0,r.jsx)(s.h2,{id:"1-deploy-namespace-and-appproject",children:"1. Deploy Namespace and AppProject"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"kubectl apply -f argo/cvmfs/\n"})}),"\n",(0,r.jsx)(s.h2,{id:"2-persistent-volumes-secrets-and-pvc",children:"2. Persistent Volumes, Secrets and PVC"}),"\n",(0,r.jsx)(s.h3,{id:"2a-write-the-cvmfs-public-key",children:"2.a. Write the CVMFS public key"}),"\n",(0,r.jsx)(s.p,{children:"Create a SealedSecret which contains the keys of the repositories:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Create a ",(0,r.jsx)(s.code,{children:"-secret.yaml.local"})," file:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",metastring:'title="argo/cvmfs/secrets/keys-secret.yaml.local"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: keys-secret\n  namespace: cvmfs\ntype: Opaque\nstringData:\n  repo.example.com.pub: |\n    -----BEGIN PUBLIC KEY-----\n    ...\n    -----END PUBLIC KEY-----\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsx)(s.li,{children:"Seal the secret:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"cfctl kubeseal\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsx)(s.li,{children:"Apply the SealedSecret:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"kubectl apply -f argo/cvmfs/secrets/keys-sealed-secret.yaml\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"2b-deploy-a-persistentvolume-or-storageclass",children:["2.b Deploy a ",(0,r.jsx)(s.code,{children:"PersistentVolume"})," or ",(0,r.jsx)(s.code,{children:"StorageClass"})]}),"\n",(0,r.jsxs)(s.p,{children:["While we could use ",(0,r.jsx)(s.em,{children:"NFS"})," to as persistent storage for the replica, let's deploy a ",(0,r.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner",children:(0,r.jsx)(s.code,{children:"local-path-provisioner"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Basically, ",(0,r.jsx)(s.code,{children:"local-path-provisioner"})," creates the ",(0,r.jsx)(s.code,{children:"/opt/local-path-provisioner"})," directory on the nodes. It allocates dynamically a volume in that directory using a StorageClass."]}),"\n",(0,r.jsx)(s.p,{children:"To deploy the provisioner:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"kubectl apply -f argo/local-path-storage/apps/local-path-storage-app.yaml\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"StorageClass"})," ",(0,r.jsx)(s.code,{children:"local-path"})," should be deployed."]}),"\n",(0,r.jsxs)(s.h2,{id:"3-editing-cvmfs-server-appyaml-to-use-the-fork",children:["3. Editing ",(0,r.jsx)(s.code,{children:"cvmfs-server-app.yaml"})," to use the fork"]}),"\n",(0,r.jsxs)(s.p,{children:["Change the ",(0,r.jsx)(s.code,{children:"repoURL"})," to the URL used to pull the fork. Also add the ",(0,r.jsx)(s.code,{children:"values-production.yaml"})," file to customize the values."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",metastring:'title="argo.example/cvmfs/apps/cvmfs-server-app.yaml > spec > source"',children:"source:\n  # You should have forked this repo. Change the URL to your fork.\n  repoURL: git@github.com:<your account>/ClusterFactory.git\n  # You should use your branch too.\n  targetRevision: HEAD\n  path: helm/cvmfs-server\n  helm:\n    releaseName: cvmfs-server\n\n    # Create a values file inside your fork and change the values.\n    valueFiles:\n      - values-production.yaml\n"})}),"\n",(0,r.jsx)(s.h2,{id:"4-adding-custom-values-to-the-chart",children:"4. Adding custom values to the chart"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["Read the ",(0,r.jsx)(s.a,{href:"https://github.com/deepsquare-io/ClusterFactory/blob/main/helm/cvmfs-server/values.yaml",children:(0,r.jsx)(s.code,{children:"values.yaml"})})," to see all the default values."]})}),"\n",(0,r.jsx)(s.h3,{id:"4a-create-the-values-file",children:"4.a. Create the values file"}),"\n",(0,r.jsxs)(s.p,{children:["Create the values file ",(0,r.jsx)(s.code,{children:"values-production.yaml"})," inside the ",(0,r.jsx)(s.code,{children:"helm/cvmfs-server/"})," directory."]}),"\n",(0,r.jsx)(s.h3,{id:"4b-select-the-nodes",children:"4.b. Select the nodes"}),"\n",(0,r.jsxs)(s.p,{children:["Because we are using ",(0,r.jsx)(s.code,{children:"local-path"}),", you should select the nodes hosting the volumes."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",metastring:'title="helm/cvmfs-server/values-production.yaml"',children:"nodeSelector:\n  kubernetes.io/hostname: my-node\n"})}),"\n",(0,r.jsx)(s.h3,{id:"4c-mount-the-keys",children:"4.c. Mount the keys"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",metastring:'title="helm/cvmfs-server/values-production.yaml"',children:"# ...\nvolumeMounts:\n  - name: keys\n    mountPath: /etc/cvmfs/keys/cvmfs.example.com/repo.example.com.pub\n    subPath: repo.example.com.pub\n    readOnly: true\n\nvolumes:\n  - name: keys\n    secret:\n      secretName: keys-secret\n      defaultMode: 256\n\nstate:\n  storageClassName: 'local-path'\n\nstorage:\n  storageClassName: 'local-path'\n"})}),"\n",(0,r.jsx)(s.h3,{id:"4d-add-the-replicas",children:"4.d. Add the replicas"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",metastring:'title="helm/cvmfs-server/values-production.yaml"',children:"# ...\nconfig:\n  replicas:\n    - name: repo.example.com\n      url: http://cvmfs.example.com/cvmfs/repo.example.com\n      keys: /etc/cvmfs/keys/cvmfs.example.com/repo.example.com.pub\n      options: '-o root'\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Make sure the option ",(0,r.jsx)(s.code,{children:"-o root"})," is present to avoid a deadlock."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"-o root"})," indicates the owner of the repository."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"options"})," field is the arguments passed to ",(0,r.jsx)(s.code,{children:"cvmfs_server add-replica"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"4e-optional-expose-the-application-to-the-external-network",children:"4.e. (Optional) Expose the application to the external network"}),"\n",(0,r.jsx)(s.p,{children:"If you want to expose your stratum 1 server, add these fields to the values:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",metastring:'title="helm/cvmfs-server/values-production.yaml"',children:"# ...\ningress:\n  enabled: true\n  annotations:\n    cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n    traefik.ingress.kubernetes.io/router.entrypoints: websecure\n    traefik.ingress.kubernetes.io/router.tls: 'true'\n\n  ingressClass: traefik\n\n  hosts:\n    - cvmfs.example.com\n\n  tls:\n    - secretName: cvmfs.example.com-secret\n      hosts:\n        - cvmfs.example.com\n"})}),"\n",(0,r.jsx)(s.p,{children:"The service is already enabled."}),"\n",(0,r.jsxs)(s.p,{children:["In case you don't know how to use ",(0,r.jsx)(s.code,{children:"Ingress"})," with ",(0,r.jsx)(s.code,{children:"cert-manager"})," and Traefik. Use the annotations ",(0,r.jsx)(s.code,{children:"traefik.ingress.kubernetes.io/router.entrypoints"})," and ",(0,r.jsx)(s.code,{children:"traefik.ingress.kubernetes.io/router.tls"})," to indicates the port used by Traefik."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"cfctl.yaml"})," indicates that the entrypoints ",(0,r.jsx)(s.code,{children:"websecure"})," is the port 443."]}),"\n",(0,r.jsxs)(s.p,{children:["More about Traefik with Kubernetes Ingresses in ",(0,r.jsx)(s.a,{href:"https://doc.traefik.io/traefik/routing/providers/kubernetes-ingress/",children:"their documentation"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Use the annotation ",(0,r.jsx)(s.code,{children:"cert-manager.io/cluster-issuer"})," to indicates the certificate issuer and specify the generated certificate secret name in the ",(0,r.jsx)(s.code,{children:"tls[].secretName"})," field. ",(0,r.jsx)(s.code,{children:"cert-manager"})," will automatically search or generate the TLS certificates."]}),"\n",(0,r.jsxs)(s.p,{children:["More about ",(0,r.jsx)(s.code,{children:"cert-manager"})," in ",(0,r.jsx)(s.a,{href:"https://cert-manager.io/docs/usage/ingress/",children:"their documentation"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"5-deploy-the-app",children:"5. Deploy the app"}),"\n",(0,r.jsx)(s.p,{children:"Commit and push:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:'git add .\ngit commit -m "Added CVMFS server"\ngit push\n'})}),"\n",(0,r.jsx)(s.p,{children:"And deploy the Argo CD application:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"kubectl apply -f argo/provisioning/apps/cvmfs-server-app.yaml\n"})}),"\n",(0,r.jsx)(s.p,{children:"If the Ingress is enabled and configured, the CVMFS server should be available on the IP specified by MetalLB. Configure your DNS so it redirects to this IP."})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6996:(e,s,t)=>{t.d(s,{Z:()=>r});const r=t.p+"assets/images/image-20220509180348675-72e61e3b74ef02813999a23896812ff6.png"},8502:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>l});var r=t(1258);const n={},a=r.createContext(n);function l(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);