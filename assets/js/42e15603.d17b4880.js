"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7411],{6925:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=s(2676),t=s(2494);const r={},i="Overview",a={id:"guides/storage/overview",title:"Overview",description:"Introduction",source:"@site/docs/guides/90-storage/01-overview.md",sourceDirName:"guides/90-storage",slug:"/guides/storage/overview",permalink:"/docs/guides/storage/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/90-storage/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Deploy a VM with KubeVirt",permalink:"/docs/guides/kubevirt/deploy-vm"},next:{title:"Storage Architecture",permalink:"/docs/guides/storage/storage-architecture"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"While ClusterFactory was mainly made for being a control plane for SLURM, this guide provides step-by-step instructions for deploying Rook, an open-source storage orchestrator for Kubernetes, with a focus on setting up a scalable and maintainable control plane. Rook enables the deployment and management of storage solutions such as CephFS volumes (shared storage), object storage and block storage within your Kubernetes cluster."}),"\n",(0,o.jsx)(n.p,{children:"The following sections will walk you through the process of deploying Rook, starting from the prerequisites and requirements to the configuration of a resilient control plane. By following this guide, you will be able to provision storage resources and ensure high availability, scalability, and ease of maintenance for your storage plane."}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"Before you begin the deployment process, ensure you have the following prerequisites in place:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Label your nodes. This is used to identify which nodes contain which disk. Examples of labels are ",(0,o.jsx)(n.code,{children:"storage/disktype=ssd"})," and ",(0,o.jsx)(n.code,{children:"storage=true"}),". Apply these labels with:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl label nodes <node-name> storage=true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Pods can select the node using a ",(0,o.jsx)(n.code,{children:"nodeSelector"})," like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      imagePullPolicy: IfNotPresent\n  nodeSelector:\n    storage/disktype: ssd\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"(optional) Taints your nodes. This avoids running compute workloads on the storage nodes. If you want to allow workloads on the storage node, you can ignore this requirement. You can taint a node with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl taint nodes <node-name> storage=true:NoSchedule\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To allow pods to run on a node with a taint, the pods can use ",(0,o.jsx)(n.code,{children:"tolerations"})," like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      imagePullPolicy: IfNotPresent\n  tolerations:\n    - key: 'storage'\n      operator: 'Equal'\n      value: 'true'\n      effect: 'NoSchedule'\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Node resources: ",(0,o.jsxs)(n.strong,{children:["Nodes must either have one of these local storage: raw partitions, raw devices, LVM logical volumes or persistent volumes in ",(0,o.jsx)(n.code,{children:"block"})," mode (no partition table, no data, no filesystem)."]})," Rook will automatically format these disks/partitions. Confirm with the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"lsblk -f\n\n# NAME                  FSTYPE      LABEL UUID                                   MOUNTPOINT\n# vda\n# \u2514\u2500vda1                LVM2_member       >eSO50t-GkUV-YKTH-WsGq-hNJY-eKNf-3i07IB\n#   \u251c\u2500ubuntu--vg-root   ext4              c2366f76-6e21-4f10-a8f3-6776212e2fe4   /\n#   \u2514\u2500ubuntu--vg-swap_1 swap              9492a3dc-ad75-47cd-9596-678e8cf17ff9   [SWAP]\n# vdb\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"FSTYPE"})," field should be empty. Here, only ",(0,o.jsx)(n.code,{children:"vdb"})," is available since it is an empty device with no filesystem."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"About LVM: LVM should be installed on the nodes using your favorite package manager:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"yum install -y lvm2\n# OR\napt install -y lvm2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The LVM version should be greater than ",(0,o.jsx)(n.strong,{children:"1.5.0"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["About Rados Block Devices (RBD): the ",(0,o.jsx)(n.code,{children:"rbd"})," kernel module should be loaded."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'# Manually\nmodprobe rbd\n# Automatically at each boot:\necho "rbd" > /etc/modules-load.d/rbd.conf\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If the Kubernetes nodes are running a 5.4 or later kernel, additional feature flags can be enabled in the storage class. The ",(0,o.jsx)(n.code,{children:"fast-diff"})," and ",(0,o.jsx)(n.code,{children:"object-map"})," features are especially useful."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"imageFeatures: layering,fast-diff,object-map,deep-flatten,exclusive-lock\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["About CephFS: the recommended minimum kernel version is ",(0,o.jsx)(n.strong,{children:"4.17"})," to support storage quotas."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2494:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var o=s(5271);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);