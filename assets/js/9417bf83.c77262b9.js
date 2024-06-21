"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[5575],{74:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=t(2676),i=t(2494);const n={},a="dmsquash-live and SystemD, GitOps for compute nodes",r={id:"main-concepts/gitops/stateless-os",title:"dmsquash-live and SystemD, GitOps for compute nodes",description:"dmsquash-live, the dracut module for statless images",source:"@site/docs/main-concepts/03-gitops/06-stateless-os.md",sourceDirName:"main-concepts/03-gitops",slug:"/main-concepts/gitops/stateless-os",permalink:"/docs/main-concepts/gitops/stateless-os",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/main-concepts/03-gitops/06-stateless-os.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Sealed Secrets, the Secret Manager for Kubernetes",permalink:"/docs/main-concepts/gitops/sealed-secrets"},next:{title:"Grendel, the Bare-Metal Provisioner",permalink:"/docs/main-concepts/apps/grendel"}},c={},d=[{value:"<code>dmsquash-live</code>, the dracut module for statless images",id:"dmsquash-live-the-dracut-module-for-statless-images",level:2},{value:"SystemD, the main init system",id:"systemd-the-main-init-system",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"dmsquash-live-and-systemd-gitops-for-compute-nodes",children:[(0,o.jsx)(s.code,{children:"dmsquash-live"})," and SystemD, GitOps for compute nodes"]}),"\n",(0,o.jsxs)(s.h2,{id:"dmsquash-live-the-dracut-module-for-statless-images",children:[(0,o.jsx)(s.code,{children:"dmsquash-live"}),", the dracut module for statless images"]}),"\n",(0,o.jsx)(s.p,{children:"Dracut is a tool used for creating the initial ramdisk (initramfs). The initramfs is a file system that is invoked during the early stage of the Linux boot process to load essential drivers, modules and tools to mount the root file system and complete the boot procedure."}),"\n",(0,o.jsx)(s.p,{children:"With dracut, one of its key capabilities is the dmsquash-live dracut module, which allows the integration of compressed squashfs file systems into initramfs images. Combined with the livenet dracut module, it is possible to boot an OS by fetching the squashfs file system from the network, via HTTP, HTTPS, FTP, Torrent, or TFTP."}),"\n",(0,o.jsx)(s.p,{children:"Moreover, if we use OverlayFS, the same technologies used for containers, we can have a stateless image with a writable layer on top of it."}),"\n",(0,o.jsx)(s.h2,{id:"systemd-the-main-init-system",children:"SystemD, the main init system"}),"\n",(0,o.jsx)(s.p,{children:"SystemD is the default init system of Rockylinux and many popular Linux distributions. By using SystemD, we can use a SystemD service that pulls a Git repository and configure the node similarly to ArgoCD."}),"\n",(0,o.jsx)(s.p,{children:"We can achieve a pull-based configuration without the need to use Ansible and/or Terraform, which are push-based."})]})}function m(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2494:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>a});var o=t(5271);const i={},n=o.createContext(i);function a(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);