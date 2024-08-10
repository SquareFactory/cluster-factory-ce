"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[2348],{2951:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(2676),t=i(2494);const r={},o="6. Grendel Deployment",a={id:"getting-started/grendel-deployment",title:"6. Grendel Deployment",description:"The argo/provisioning directory deploys the Grendel application. Grendel is a PXE, TFTP and DHCP server used for network booting. It's lightweight and written in Go.",source:"@site/docs/getting-started/06-grendel-deployment.md",sourceDirName:"getting-started",slug:"/getting-started/grendel-deployment",permalink:"/docs/getting-started/grendel-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/getting-started/06-grendel-deployment.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"5. Adding the Git repository to ArgoCD",permalink:"/docs/getting-started/adding-repository-argocd"},next:{title:"K0s, the Kubernetes distribution for bare-metal",permalink:"/docs/main-concepts/k0s"}},l={},d=[{value:"1. Namespace and AppProject",id:"1-namespace-and-appproject",level:2},{value:"2. Preparing the dynamic provisioning of volumes",id:"2-preparing-the-dynamic-provisioning-of-volumes",level:2},{value:"3. Apps",id:"3-apps",level:2},{value:"4. Values configuration",id:"4-values-configuration",level:2},{value:"Sticking the Grendel Pod to the right zone",id:"sticking-the-grendel-pod-to-the-right-zone",level:3},{value:"Grendel Configuration Secret",id:"grendel-configuration-secret",level:3},{value:"Nodes configuration",id:"nodes-configuration",level:3},{value:"Persistence",id:"persistence",level:3},{value:"IPVLAN configuration",id:"ipvlan-configuration",level:3},{value:"(Optional) IPMI API configuration",id:"optional-ipmi-api-configuration",level:3},{value:"5. CoreDNS configuration",id:"5-coredns-configuration",level:2},{value:"6. Commit, Push, Deploy",id:"6-commit-push-deploy",level:2},{value:"7. (Optional) Building the OS Image",id:"7-optional-building-the-os-image",level:2},{value:"8. Adding the OS Image to Grendel",id:"8-adding-the-os-image-to-grendel",level:2},{value:"9. BIOS configuration",id:"9-bios-configuration",level:2},{value:"10. IPMI commands, rebooting and provision",id:"10-ipmi-commands-rebooting-and-provision",level:2},{value:"Congratulation!",id:"congratulation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"6-grendel-deployment",children:"6. Grendel Deployment"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"argo/provisioning"})," directory deploys the Grendel application. Grendel is a PXE, TFTP and DHCP server used for network booting. It's lightweight and written in Go."]}),"\n",(0,s.jsx)(n.h2,{id:"1-namespace-and-appproject",children:"1. Namespace and AppProject"}),"\n",(0,s.jsx)(n.p,{children:"Create the Kubernetes namespace and ArgoCD AppProject."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"kubectl apply -f argo/provisioning\n"})}),"\n",(0,s.jsx)(n.p,{children:"Kubernetes' namespaces are used to isolate workloads and organize the Kubernetes cluster application."}),"\n",(0,s.jsx)(n.p,{children:"ArgoCD's AppProjects are used in the continuous deployment process to prevent unauthorized deployment of resources. The more restrictive this is, the better we can avoid a supply chain attack."}),"\n",(0,s.jsx)(n.h2,{id:"2-preparing-the-dynamic-provisioning-of-volumes",children:"2. Preparing the dynamic provisioning of volumes"}),"\n",(0,s.jsxs)(n.p,{children:["Grendel needs to store its OS images. We will use NFS for the storage in this guide, but there are other solution like OpenEBS or local-path (see the local-path-storage ArgoCD application in the ",(0,s.jsx)(n.code,{children:"argo/local-path-storage"})," directory)."]}),"\n",(0,s.jsx)(n.p,{children:"We need to deploy a StorageClass, so that Kubernetes can dynamically provision volumes."}),"\n",(0,s.jsxs)(n.p,{children:["Look at the ",(0,s.jsx)(n.code,{children:"argo/volumes/dynamic-nfs.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="argo/volumes/dynamic-nfs.yaml"',children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: dynamic-nfs\n  labels:\n    topology.kubernetes.io/region: ch-sion\n    topology.kubernetes.io/zone: ch-sion-1\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: nfs.example.com\n  share: /srv/nfs/dynamic\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/region\n        values:\n          - ch-sion\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Change the server address ",(0,s.jsx)(n.code,{children:"nfs.example.com"})," to your NFS server and apply the resource."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kubectl apply -f argo/volumes/dynamic-nfs.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-apps",children:"3. Apps"}),"\n",(0,s.jsx)(n.p,{children:"Since Grendel is using DHCP (and therefore L2 networking), we need to connect Grendel to the network connected to the compute nodes. To do that, we use Multus CNI with IPVLan."}),"\n",(0,s.jsx)(n.p,{children:"Let's start with the ArgoCD application declaration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="argo/provisioning/apps/grendel-app.yaml"',children:'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: grendel-app\n  namespace: argocd\n  finalizers:\n    - resources-finalizer.argocd.argoproj.io\nspec:\n  project: provisioning\n  source:\n    # You should have forked this repo. Change the URL to your fork.\n    repoURL: git@github.com:<your account>/ClusterFactory.git\n    # You should use your branch too.\n    targetRevision: HEAD\n    path: helm/grendel\n    helm:\n      releaseName: grendel\n\n      # We will create a values file inside the fork and change the values.\n      valueFiles:\n        - values-production.yaml\n\n  destination:\n    server: \'https://kubernetes.default.svc\'\n    namespace: provisioning\n\n  syncPolicy:\n    automated:\n      prune: true # Specifies if resources should be pruned during auto-syncing ( false by default ).\n      selfHeal: true # Specifies if partial app sync should be executed when resources are changed only in target Kubernetes cluster and no git change detected ( false by default ).\n      allowEmpty: false # Allows deleting all application resources during automatic syncing ( false by default ).\n    syncOptions: []\n    retry:\n      limit: 5 # number of failed sync attempt retries; unlimited number of attempts if less than 0\n      backoff:\n        duration: 5s # the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")\n        factor: 2 # a factor to multiply the base duration after each failed retry\n        maxDuration: 3m # the maximum amount of time allowed for the backoff strategy\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Most of the options don't need to change, so just add ",(0,s.jsx)(n.code,{children:"values-production.yaml"})," to the ",(0,s.jsx)(n.code,{children:"valueFiles"})," field because we will create a ",(0,s.jsx)(n.code,{children:"values-production.yaml"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you've looked inside the ",(0,s.jsx)(n.code,{children:"helm/grendel/"})," directory, you can see the default ",(0,s.jsx)(n.code,{children:"values.yaml"}),". To change these values, add the ",(0,s.jsx)(n.code,{children:"values-production.yaml"})," file directly inside the helm application."]}),"\n",(0,s.jsx)(n.h2,{id:"4-values-configuration",children:"4. Values configuration"}),"\n",(0,s.jsx)(n.h3,{id:"sticking-the-grendel-pod-to-the-right-zone",children:"Sticking the Grendel Pod to the right zone"}),"\n",(0,s.jsxs)(n.p,{children:["After adding the ",(0,s.jsx)(n.code,{children:"values-production.yaml"})," file in the helm application directory. We can start by selecting where Grendel will be hosted:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"nodeSelector:\n  kubernetes.io/hostname: k0s-1.example.com\n"})}),"\n",(0,s.jsx)(n.p,{children:"Since we are using IPVLAN, the pod needs to be stuck on a Kubernetes node with a known network interface."}),"\n",(0,s.jsx)(n.h3,{id:"grendel-configuration-secret",children:"Grendel Configuration Secret"}),"\n",(0,s.jsxs)(n.p,{children:["Grendel needs a configuration file which contains credentials. Therefore, you need to create a secret with the ",(0,s.jsx)(n.code,{children:"grendel.toml"})," inside. Create a ",(0,s.jsx)(n.code,{children:"grendel-secret.yaml.local"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="argo/provisioning/secrets/grendel-secret.yaml.local"',children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: grendel-secret\n  namespace: provisioning\ntype: Opaque\nstringData:\n  grendel.toml: |\n    dbpath = ":memory:"\n    loggers = {cli="on", tftp="on", dhcp="on", dns="off", provision="on", api="on", pxe="on"}\n    admin_ssh_pubkeys = []\n\n    [provision]\n    listen = "0.0.0.0:80"\n    token_ttl = 3600\n    root_password = ""\n    default_image = ""\n    repo_dir = "/var/lib/grendel"\n\n    [dhcp]\n    listen = "0.0.0.0:67"\n    lease_time = "24h"\n    dns_servers = []\n    domain_search = []\n    mtu = 1500\n    proxy_only = false\n    router_octet4 = 0\n    subnets = [\n        {gateway = "192.168.0.1/24", dns="192.168.0.100", domainSearch="example.com", mtu="1500"}\n    ]\n\n    [dns]\n    listen = "0.0.0.0:53"\n    ttl = 86400\n\n    [tftp]\n    listen = "0.0.0.0:69"\n\n    [pxe]\n    listen = "0.0.0.0:4011"\n\n    [api]\n    socket_path = "/var/run/grendel/grendel-api.socket"\n\n    [client]\n    api_endpoint = "/var/run/grendel/grendel-api.socket"\n    insecure = false\n\n    [bmc]\n    user = "admin"\n    password = "password"\n\n    [discovery]\n    user = ""\n    password = ""\n    domain = ""\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["You need to change the ",(0,s.jsx)(n.code,{children:"dhcp.subnets"})," configuration according to your network configuration."]})}),"\n",(0,s.jsx)(n.p,{children:"Seal the secret and apply it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"cfctl kubeseal\nkubectl apply -f argo/provisioning/secrets/grendel-sealed-secret.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nodes-configuration",children:"Nodes configuration"}),"\n",(0,s.jsxs)(n.p,{children:["After adding the ",(0,s.jsx)(n.code,{children:"values-production.yaml"})," file in the helm application directory. We can start by adding the provisioning configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"config:\n  ## Secret containing grendel.toml\n  secretName: grendel-secret\n  secretKey: grendel.toml\n\n  hosts:\n    - name: cn1\n      provision: true\n      boot_image: squareos-9.2\n      interfaces:\n        - ip: 10.10.2.51/24\n          mac: aa:bb:cc:11:22:33\n          bmc: false\n        - ip: 10.10.3.51/32\n          bmc: true\n\n  images:\n    - name: squareos-9.2\n      kernel: '/var/lib/grendel/vmlinuz-5.14.0-284.30.1.el9_2.x86_64'\n      initrd:\n        - '/var/lib/grendel/initramfs-5.14.0-284.30.1.el9_2.x86_64.img'\n      liveimg: '/var/lib/grendel/squareos-9.2.squashfs'\n      cmdline: console=ttyS0 console=tty0 root=live:http://sos-ch-dk-2.exo.io/osimages/squareos-9.2/squareos-9.2.squashfs BOOTIF=01-{{ $.nic.MAC | toString | replace \":\" \"-\" }} grendel.hostname={{ $.host.Name }} grendel.address=http://grendel.example.com rd.live.overlay.readonly=1 rd.live.overlay.overlayfs=1 rd.neednet=1\n\n  postscript: |\n    #!/bin/sh\n    touch /hello-world\n"})}),"\n",(0,s.jsx)(n.p,{children:"The MAC address corresponds to the network interface connected to the network with Grendel."}),"\n",(0,s.jsx)(n.p,{children:"Inside the image configuration, you can notice some kernel parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"console=ttyS0 console=tty0"})," means that the kernel messages will appear on both the first serial port and virtual terminal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root=live:http://sos-ch-dk-2.exo.io/osimages/squareos-9.2/squareos-9.2.squashfs"})," means that Dracut will load the OS image as a live OS image. ",(0,s.jsx)(n.strong,{children:"Modify the URL based on the domain name you want to use."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rd.live.overlay.readonly=1 rd.live.overlay.overlayfs=1 rd.neednet=1"})," are parameters relative to loading the live OS image. Here, we are mounting the OS image as a read-only base image for the OverlayFS. This is to create a stateless file system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"grendel.hostname={{ $.host.Name }} grendel.address=http://grendel.example.com"})," are parameters used to change the hostname of the OS and fetch the postscript. ",(0,s.jsx)(n.strong,{children:"Modify the URL based on the domain name you want to use."})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"persistence",children:"Persistence"}),"\n",(0,s.jsxs)(n.p,{children:["Remember the ",(0,s.jsx)(n.code,{children:"dynamic-nfs"})," storage class we've just created? Let's use it now:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"persistence:\n  storageClassName: 'provisioning-nfs'\n  accessModes: ['ReadWriteMany']\n  size: 20Gi\n  selectorLabels:\n    app: grendel\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will create a PersistentStorageClaim asking for 20Gi to the NFS provisioner. The NFS provisioner will create a directory inside the NFS with the following path ",(0,s.jsx)(n.code,{children:"/srv/nfs/dynamic/pvc-<UUID>"}),". The UUID in randomized."]}),"\n",(0,s.jsx)(n.h3,{id:"ipvlan-configuration",children:"IPVLAN configuration"}),"\n",(0,s.jsxs)(n.p,{children:["To expose Grendel to the external network, instead of using ",(0,s.jsx)(n.code,{children:"LoadBalancers"}),", we use ",(0,s.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni",children:"Multus"}),". Generally, Multus is a CNI plugin to attach multiple network interfaces on Pods. However, we will use Multus CNI to replace the default network interface with an IPVLAN interface."]}),"\n",(0,s.jsxs)(n.p,{children:["IPVLAN allows us to directly expose the pod to the host network by assigning an IP to the pod. To do that, you must specify the network interface of the node with the ",(0,s.jsx)(n.code,{children:"masterInterface"})," field. Then, you should allocate an address using the ",(0,s.jsx)(n.code,{children:"ipam"})," field."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"net:\n  # Kubernetes host interface\n  masterInterface: eth0\n  mode: l2\n  type: ipvlan\n\n  # https://www.cni.dev/plugins/current/ipam/static/\n  ipam:\n    type: static\n    addresses:\n      - address: 192.168.0.3/24\n        gateway: 10.10.2.1\n    routes:\n      - dst: 0.0.0.0/0\n\n  # https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-dns-config\n  dns:\n    nameservers:\n      - 1.1.1.1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["More details on IPAM ",(0,s.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/ipam/static/",children:"here"})," and for IPVLAN ",(0,s.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/main/ipvlan/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"optional-ipmi-api-configuration",children:"(Optional) IPMI API configuration"}),"\n",(0,s.jsx)(n.p,{children:"The helm application can also deploy an IPMI API. This API doesn't use L2, so we can expose that service through Traefik by using an Ingress:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"ipmi:\n  ingress:\n    enabled: true\n    ingressClass: 'traefik'\n\n    annotations:\n      cert-manager.io/cluster-issuer: private-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: websecure\n      traefik.ingress.kubernetes.io/router.tls: 'true'\n\n    hosts:\n      - ipmi.example.com\n\n    path: /\n\n    tls:\n      - secretName: ipmi.example.com-secret\n        hosts:\n          - ipmi.example.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With this, you can use ",(0,s.jsx)(n.code,{children:"cfctl"})," to control your nodes."]}),"\n",(0,s.jsx)(n.h2,{id:"5-coredns-configuration",children:"5. CoreDNS configuration"}),"\n",(0,s.jsx)(n.p,{children:"Remember to add a DNS entry each time you want to expose an application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',children:"data:\n  example.com.db: |\n    # ...\n    192.168.0.3 grendel.example.com\n    192.168.1.100 ipmi.example.com\n"})}),"\n",(0,s.jsx)(n.h2,{id:"6-commit-push-deploy",children:"6. Commit, Push, Deploy"}),"\n",(0,s.jsx)(n.p,{children:"Commit and push:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'git add .\ngit commit -m "Added Grendel application and values"\ngit push\n'})}),"\n",(0,s.jsx)(n.p,{children:"Deploy the app:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"kubectl apply -f argo/provisioning/apps/grendel-app.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"7-optional-building-the-os-image",children:"7. (Optional) Building the OS Image"}),"\n",(0,s.jsx)(n.p,{children:"This step is optional, you can download a pre-built SquareOS image:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://sos-ch-dk-2.exo.io/osimages/squareos-9.2/initramfs-4.18.0-372.19.1.el8_6.x86_64.img",children:"initramfs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://sos-ch-dk-2.exo.io/osimages/squareos-9.2/squareos-9.2.squashfs",children:"OS image"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://sos-ch-dk-2.exo.io/osimages/squareos-9.2/vmlinuz-4.18.0-372.19.1.el8_6.x86_64",children:"linux kernel"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you want to build it yourself, we use Packer to build the OS image. To build the OS image:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install Packer and QEMU."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Go to the ",(0,s.jsx)(n.code,{children:"packer-recipes/rocky9.2"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Build the OS image using the ",(0,s.jsx)(n.code,{children:"build.bare.sh"})," script."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Extract the kernel, initramfs and create the squashfs file using the ",(0,s.jsx)(n.code,{children:"export.bare.sh"})," script."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"8-adding-the-os-image-to-grendel",children:"8. Adding the OS Image to Grendel"}),"\n",(0,s.jsx)(n.p,{children:"After deploying Grendel, a file server is exposed for you to copy the OS images."}),"\n",(0,s.jsxs)(n.p,{children:["You can access using this URL: ",(0,s.jsx)(n.a,{href:"http://grendel.example.com:8080",children:"http://grendel.example.com:8080"})]}),"\n",(0,s.jsx)(n.p,{children:"Drag & Drop the OS image, linux kernel and initramfs there."}),"\n",(0,s.jsx)(n.h2,{id:"9-bios-configuration",children:"9. BIOS configuration"}),"\n",(0,s.jsx)(n.p,{children:"Make sure your nodes are configured with network boot as the first boot option. Grendel supports:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"x86 Legacy"}),"\n",(0,s.jsx)(n.li,{children:"x86 UEFI"}),"\n",(0,s.jsx)(n.li,{children:"x86_64 UEFI"}),"\n",(0,s.jsx)(n.li,{children:"ARM64 UEFI"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"10-ipmi-commands-rebooting-and-provision",children:"10. IPMI commands, rebooting and provision"}),"\n",(0,s.jsx)(n.p,{children:"If you've deployed the IPMI API, you can run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory"',children:"export IPMIUSER=<user>\nexport IPMIPASS=<password>\nexport IPMIADDRESS=https://ipmi.example.com\ncfctl ipmi <nodename> <on/off/cycle/status/soft/reset>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Reboot the nodes with ",(0,s.jsx)(n.code,{children:"cfctl ipmi cn1 reset"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Read the logs of Grendel and the serial console of your node to see if the boot is successful."}),"\n",(0,s.jsx)(n.h2,{id:"congratulation",children:"Congratulation!"}),"\n",(0,s.jsx)(n.p,{children:"You've finished the guide. However, there is still a lot of application we didn't deploy. Continue on these guides if you are interested:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/guides/slurm/deploy-slurm",children:"Deploy SLURM, the bare-metal batch scheduler"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/guides/provisioning/gitops-with-grendel",children:"Configure the postscript to follow the GitOps practices"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/guides/maintenance/high-availability",children:"About maintenance"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.deepsquare.run/deepsquare-grid/clusterfactory/overview",children:"Join the DeepSquare Grid"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2494:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(5271);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);