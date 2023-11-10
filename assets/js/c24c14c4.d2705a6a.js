"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[9723],{7448:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=s(1527),i=s(8422);const l={},t="cfctl.yaml",o={id:"reference/cfctl.yaml",title:"cfctl.yaml",description:"apiVersion: cfctl.clusterfactory.io/v1beta1",source:"@site/docs/reference/cfctl.yaml.md",sourceDirName:"reference",slug:"/reference/cfctl.yaml",permalink:"/docs/reference/cfctl.yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/reference/cfctl.yaml.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"cfctl",permalink:"/docs/reference/cfctl"},next:{title:"Contributing",permalink:"/docs/see-also/contributing"}},c={},d=[{value:"Cluster",id:"cluster",level:2},{value:"ClusterMetadata",id:"clustermetadata",level:2},{value:"Spec",id:"spec",level:2},{value:"Host",id:"host",level:2},{value:"UploadFile",id:"uploadfile",level:2},{value:"SSH",id:"ssh",level:2},{value:"K0s",id:"k0s",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cfctlyaml",children:"cfctl.yaml"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"apiVersion: cfctl.clusterfactory.io/v1beta1"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: cfctl.clusterfactory.io/v1beta1\nkind: Cluster\nmetadata:\n  name: k8s.example.com-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 192.168.0.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eno1\n      privateAddress: 192.168.0.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=ch-sion,topology.kubernetes.io/zone=ch-sion-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n  k0s:\n    version: \'1.27.4+k0s.0\'\n    dynamicConfig: false\n    config:\n      apiVersion: k0s.k0sproject.io/v1beta1\n      kind: ClusterConfig\n      metadata:\n        name: k8s.example.com\n      spec:\n        api:\n          k0sApiPort: 9443\n          port: 6443\n        installConfig:\n          users:\n            etcdUser: etcd\n            kineUser: kube-apiserver\n            konnectivityUser: konnectivity-server\n            kubeAPIserverUser: kube-apiserver\n            kubeSchedulerUser: kube-scheduler\n        konnectivity:\n          adminPort: 8133\n          agentPort: 8132\n        network:\n          calico:\n            mode: \'vxlan\'\n            overlay: Always\n            mtu: 0\n            wireguard: false\n          kubeProxy:\n            disabled: false\n            mode: iptables\n          kuberouter:\n            autoMTU: true\n            mtu: 0\n            peerRouterASNs: \'\'\n            peerRouterIPs: \'\'\n          podCIDR: 10.244.0.0/16\n          provider: calico\n          serviceCIDR: 10.96.0.0/12\n        podSecurityPolicy:\n          defaultPolicy: 00-k0s-privileged\n        storage:\n          type: etcd\n        telemetry:\n          enabled: false\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"cluster",children:"Cluster"}),"\n",(0,r.jsx)(n.p,{children:"Cluster is the configuration for a k0s cluster. It configures k0s on the listed hosts."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apiVersion"}),": cfctl.clusterfactory.io/v1beta1"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"kind"}),": Cluster"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"metadata"}),": (",(0,r.jsx)(n.a,{href:"#clustermetadata",children:"ClusterMetadata"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"spec"})," (",(0,r.jsx)(n.a,{href:"#spec",children:"Spec"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clustermetadata",children:"ClusterMetadata"}),"\n",(0,r.jsx)(n.p,{children:"ClusterMetadata is the metadata of the cluster."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"name"}),": (string)"]}),"\n",(0,r.jsx)(n.p,{children:"Name of the cluster configuration."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"spec",children:"Spec"}),"\n",(0,r.jsx)(n.p,{children:"Spec is a description of a cluster configuration."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hosts"}),": ([]",(0,r.jsx)(n.a,{href:"#host",children:"host"}),"), required"]}),"\n",(0,r.jsx)(n.p,{children:"List of hosts belonging to the cluster. There must be at least on host in a Cluster. Host requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Currently only linux targets are supported"}),"\n",(0,r.jsxs)(n.li,{children:["The user must either be root or have passwordless ",(0,r.jsx)(n.code,{children:"sudo"})," access."]}),"\n",(0,r.jsx)(n.li,{children:"The host must fulfill the k0s system requirements"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"k0s"}),": (",(0,r.jsx)(n.a,{href:"#k0s",children:"K0s"}),"), optional"]}),"\n",(0,r.jsx)(n.p,{children:"K0s configuration for the hosts."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"host",children:"Host"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"role"}),": (string)"]}),"\n",(0,r.jsx)(n.p,{children:"One of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"controller"})," - a controller host"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"controller+worker"})," - a controller host that will also run workloads"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"single"})," - a single-node cluster host, the configuration can only contain one host"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worker"})," - a worker host"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"privateInterface"}),": (string), optional, default: ",(0,r.jsx)(n.code,{children:" "})]}),"\n",(0,r.jsx)(n.p,{children:"Override private network interface selected by host fact gathering.\nUseful in case fact gathering picks the wrong private network interface."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- role: worker\n  os: debian\n  privateInterface: eth1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"privateAddress"}),": (string), optional, default: ",(0,r.jsx)(n.code,{children:" "})]}),"\n",(0,r.jsx)(n.p,{children:"Override private IP address selected by host fact gathering.\nUseful in case fact gathering picks the wrong IPAddress."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- role: worker\n  os: debian\n  privateAddress: 10.0.0.2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"environment"}),": (map[string]string), optional"]}),"\n",(0,r.jsx)(n.p,{children:"List of key-value pairs to set to the target host's environment variables."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"environment:\n  HTTP_PROXY: 10.0.0.1:443\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"uploadBinary"}),": (boolean), optional, default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"true"}),", the k0s binaries for target host will be downloaded and cached on the local host and uploaded to the target.\nWhen ",(0,r.jsx)(n.code,{children:"false"}),", the k0s binary downloading is performed on the target host itself"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"k0sBinaryPath"}),": (string), optional"]}),"\n",(0,r.jsx)(n.p,{children:"A path to a file on the local host that contains a k0s binary to be uploaded to the host. Can be used to test drive a custom development build of k0s."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"installFlags"}),": ([]string), optional"]}),"\n",(0,r.jsxs)(n.p,{children:["Extra flags passed to the ",(0,r.jsx)(n.code,{children:"k0s install"})," command on the target host. See ",(0,r.jsx)(n.code,{children:"k0s install --help"})," for a list of options."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"files"}),": ([]",(0,r.jsx)(n.a,{href:"#uploadfile",children:"Uploadfile"}),"), optional"]}),"\n",(0,r.jsx)(n.p,{children:"List of files to be uploaded to the host."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- name: image-bundle\n  src: airgap-images.tgz\n  dstDir: /var/lib/k0s/images/\n  perm: 0600\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),': name of the file "bundle", used only for logging purposes (optional)']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"src"}),": File path, an URL or ",(0,r.jsx)(n.a,{href:"https://golang.org/pkg/path/filepath/#Match",children:"Glob pattern"})," to match files to be uploaded. URL sources will be directly downloaded using the target host (required)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dstDir"}),": Destination directory for the file(s). ",(0,r.jsx)(n.code,{children:"k0sctl"})," will create full directory structure if it does not already exist on the host (default: user home)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dst"}),": Destination filename for the file. Only usable for single file uploads (default: basename of file)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"perm"}),": File permission mode for uploaded file(s) (default: same as local)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dirPerm"}),": Directory permission mode for created directories (default: 0755)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"user"}),": User name of file/directory owner, must exist on the host (optional)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"group"}),": Group name of file/directory owner, must exist on the host (optional)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"os"}),": (string), optional, default: ",(0,r.jsx)(n.code,{children:" "})]}),"\n",(0,r.jsxs)(n.p,{children:["Override OS distribution auto-detection. By default ",(0,r.jsx)(n.code,{children:"k0sctl"})," detects the OS by reading ",(0,r.jsx)(n.code,{children:"/etc/os-release"})," or ",(0,r.jsx)(n.code,{children:"/usr/lib/os-release"})," files. In case your system is based on e.g. Debian but the OS release info has something else configured you can override ",(0,r.jsx)(n.code,{children:"k0sctl"})," to use Debian based functionality for the node with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- role: worker\n  os: debian\n  ssh:\n    address: 10.0.0.2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hostname"}),": (string), optional"]}),"\n",(0,r.jsx)(n.p,{children:"Override host's hostname. When not set, the hostname reported by the operating system is used."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"noTaints"}),": (boolean), optional, default: ` false"]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"true"})," and used in conjuction with the ",(0,r.jsx)(n.code,{children:"controller+worker"})," role, the default taints are disabled making regular workloads schedulable on the node. By default, k0s sets a node-role.kubernetes.io/master",":NoSchedule"," taint on controller+worker nodes and only workloads with toleration for it will be scheduled."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hooks"}),': (Hooks, which is a map[string]map[string][]string, such as hooks["apply"]["before"] = ["ls -al", "rm foo.txt"]), optional']}),"\n",(0,r.jsx)(n.p,{children:"Run a set of commands on the remote host during k0sctl operations."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'hooks:\n  apply:\n    before:\n      - date >> k0sctl-apply.log\n    after:\n      - echo "apply success" >> k0sctl-apply.log\n'})}),"\n",(0,r.jsx)(n.p,{children:'The currently available "hook points" are:'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"apply"}),": Runs during ",(0,r.jsx)(n.code,{children:"k0sctl apply"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"before"}),": Runs after configuration and host validation, right before configuring k0s on the host"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"after"}),": Runs before disconnecting from the host after a successful apply operation"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"backup"}),": Runs during ",(0,r.jsx)(n.code,{children:"k0s backup"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"before"}),": Runs before k0sctl runs the ",(0,r.jsx)(n.code,{children:"k0s backup"})," command"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"after"}),": Runs before disconnecting from the host after successfully taking a backup"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reset"}),": Runs during ",(0,r.jsx)(n.code,{children:"k0sctl reset"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"before"}),": Runs after gathering information about the cluster, right before starting to remove the k0s installation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"after"}),": Runs before disconnecting from the host after a successful reset operation"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ssh"}),": (",(0,r.jsx)(n.a,{href:"#ssh",children:"SSH"}),"), optional"]}),"\n",(0,r.jsx)(n.p,{children:"SSH connection options."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  hosts:\n    - role: controller\n      ssh:\n        address: 10.0.0.2\n        user: ubuntu\n        keyPath: ~/.ssh/id_rsa\n"})}),"\n",(0,r.jsx)(n.p,{children:"It's also possible to tunnel connections through a bastion host. The bastion configuration has all the same fields as any SSH connection:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  hosts:\n    - role: controller\n      ssh:\n        address: 10.0.0.2\n        user: ubuntu\n        keyPath: ~/.ssh/id_rsa\n        bastion:\n          address: 10.0.0.1\n          user: root\n          keyPath: ~/.ssh/id_rsa2\n"})}),"\n",(0,r.jsx)(n.p,{children:"SSH agent and auth forwarding are also supported, a host without a keyfile:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  hosts:\n    - role: controller\n      ssh:\n        address: 10.0.0.2\n        user: ubuntu\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ ssh-add ~/.ssh/aws.pem\n$ ssh -A user@jumphost\nuser@jumphost ~ $ k0sctl apply\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"localhost"}),": (Localhost), optional"]}),"\n",(0,r.jsx)(n.p,{children:"Localhost connection options. Can be used to use the local host running k0sctl as a node in the cluster."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"enabled"})," (boolean), optional, default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This must be set ",(0,r.jsx)(n.code,{children:"true"})," to enable the localhost connection."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"uploadfile",children:"UploadFile"}),"\n",(0,r.jsx)(n.p,{children:"UploadFile describes a file to be uploaded for the host"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"name"}),": (string), optional"]}),"\n",(0,r.jsx)(n.p,{children:'Name of the file "bundle", used only for logging purposes.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"src"}),": (string)"]}),"\n",(0,r.jsxs)(n.p,{children:["File path, an URL or ",(0,r.jsx)(n.a,{href:"https://golang.org/pkg/path/filepath/#Match",children:"Glob pattern"})," to match files to be uploaded. URL sources will be directly\ndownloaded using the target host."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"dstDir"}),": (string), default: user home"]}),"\n",(0,r.jsxs)(n.p,{children:["Destination directory for the file(s). ",(0,r.jsx)(n.code,{children:"k0sctl"})," will create full directory structure if it does not already exist on the host."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"dst"}),": (string), default: basename of file"]}),"\n",(0,r.jsx)(n.p,{children:"Destination filename for the file. Only usable for single file uploads."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"perm"}),": (octal string), default: same as local"]}),"\n",(0,r.jsx)(n.p,{children:"File permission mode for uploaded file(s)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"dirPerm"}),": (octal string), default: ",(0,r.jsx)(n.code,{children:"0755"})]}),"\n",(0,r.jsx)(n.p,{children:"Directory permission mode for created directories."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"user"}),": (string), optional"]}),"\n",(0,r.jsx)(n.p,{children:"User name of file/directory owner, must exist on the host."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"group"}),": (string)"]}),"\n",(0,r.jsx)(n.p,{children:"Group name of file/directory owner, must exist on the host."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ssh",children:"SSH"}),"\n",(0,r.jsx)(n.p,{children:"SSH describe an SSH connection."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"address"}),": (string)"]}),"\n",(0,r.jsx)(n.p,{children:"Address of the the remote SSH Host."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"user"}),": (string), default: ",(0,r.jsx)(n.code,{children:"root"})]}),"\n",(0,r.jsx)(n.p,{children:"User used to authenticate during the SSH connection."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"port"}),": (integer), optional, default: ",(0,r.jsx)(n.code,{children:"22"})]}),"\n",(0,r.jsx)(n.p,{children:"Port opened on the host which is accepting SSH connection."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"keyPath"}),": (string), optional, default: ",(0,r.jsx)(n.code,{children:"~/.ssh/id_rsa"})]}),"\n",(0,r.jsx)(n.p,{children:"Path of the SSH Key used to authenticate during the SSH connection."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hostKey"}),": (string), optional"]}),"\n",(0,r.jsx)(n.p,{children:"Key of the remote of for SSH host key verification."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"bastion"}),": (",(0,r.jsx)(n.a,{href:"#ssh",children:"SSH"}),"), optional"]}),"\n",(0,r.jsx)(n.p,{children:"Bastion is used to configured SSH connection over an SSH bastion."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"k0s",children:"K0s"}),"\n",(0,r.jsx)(n.p,{children:"K0s holds configuration for bootstraping a k0s cluster."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"version"}),": (string), optional, default: auto-discovery"]}),"\n",(0,r.jsx)(n.p,{children:"The version of k0s to deploy. When left out, k0sctl will default to using the latest released version of k0s or the version already running on the cluster."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"dynamicConfig"}),": (boolean), optional, default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Any controller node has ",(0,r.jsx)(n.code,{children:"--enable-dynamic-config"})," in ",(0,r.jsx)(n.code,{children:"installFlags"})]}),"\n",(0,r.jsxs)(n.li,{children:["Any existing controller node has ",(0,r.jsx)(n.code,{children:"--enable-dynamic-config"})," in run arguments (",(0,r.jsx)(n.code,{children:"k0s status -o json"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," When running k0s in dynamic config mode, k0sctl will ONLY configure the cluster-wide configuration during the first time initialization, after that the configuration has to be managed via ",(0,r.jsx)(n.code,{children:"k0s config edit"})," or ",(0,r.jsx)(n.code,{children:"k0sctl config edit"}),". The node specific configuration will be updated on each apply."]}),"\n",(0,r.jsx)(n.p,{children:"See also:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.k0sproject.io/main/dynamic-configuration/",children:"k0s Dynamic Configuration"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"config"}),": (",(0,r.jsx)(n.a,{href:"https://docs.k0sproject.io/head/configuration/",children:"K0sConfig"}),"), optional, default: auto-generated"]}),"\n",(0,r.jsxs)(n.p,{children:["Embedded k0s cluster configuration. See ",(0,r.jsx)(n.a,{href:"https://docs.k0sproject.io/main/configuration/",children:"k0s configuration documentation"})," for details."]}),"\n",(0,r.jsxs)(n.p,{children:["When left out, the output of ",(0,r.jsx)(n.code,{children:"k0s config create"})," will be used."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8422:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var r=s(959);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);