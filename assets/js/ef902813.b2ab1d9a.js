"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[2713],{2514:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(1527),r=s(8422);const t={},a="Build an OS Image with Packer",c={id:"guides/provisioning/packer-build",title:"Build an OS Image with Packer",description:"SquareOS Image",source:"@site/docs/guides/50-provisioning/02-packer-build.md",sourceDirName:"guides/50-provisioning",slug:"/guides/provisioning/packer-build",permalink:"/docs/guides/provisioning/packer-build",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/50-provisioning/02-packer-build.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Using ServiceMonitor to fetch metrics",permalink:"/docs/guides/monitoring/service-monitor"},next:{title:"GitOps with Grendel",permalink:"/docs/guides/provisioning/gitops-with-grendel"}},o={},d=[{value:"SquareOS Image",id:"squareos-image",level:2},{value:"Configuring and Launching Packer",id:"configuring-and-launching-packer",level:3},{value:"Extracting the kernel, initramfs and create a squashfs for Grendel",id:"extracting-the-kernel-initramfs-and-create-a-squashfs-for-grendel",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"build-an-os-image-with-packer",children:"Build an OS Image with Packer"}),"\n",(0,i.jsx)(n.h2,{id:"squareos-image",children:"SquareOS Image"}),"\n",(0,i.jsx)(n.h3,{id:"configuring-and-launching-packer",children:"Configuring and Launching Packer"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.a,{href:"https://github.com/deepsquare-io/ClusterFactory/tree/main/packer-recipes",children:[(0,i.jsx)(n.code,{children:"packer-recipes"})," directory inside the git repository"]})," contains examples of Packer configuration files."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="compute.bare.json"',children:'{\n  "variables": {\n    "boot_wait": "3s",\n    "disk_size": "50G",\n    "iso_checksum": "fe77cc293a2f2fe6ddbf5d4bc2b5c820024869bc7ea274c9e55416d215db0cc5",\n    "iso_url": "https://download.rockylinux.org/vault/rocky/8.6/isos/x86_64/Rocky-8.6-x86_64-boot.iso",\n    "memsize": "2048",\n    "numvcpus": "4"\n  },\n  "builders": [\n    {\n      "type": "qemu",\n      "accelerator": "kvm",\n      "communicator": "none",\n      "boot_command": [\n        "<up><tab><bs><bs><bs><bs><bs> ",\n        "inst.ks=http://{{ .HTTPIP }}:{{ .HTTPPort }}/ks.bare.cfg ",\n        "inst.cmdline",\n        "<enter><wait>"\n      ],\n      "boot_wait": "{{ user `boot_wait` }}",\n      "disk_size": "{{ user `disk_size` }}",\n      "iso_url": "{{ user `iso_url` }}",\n      "iso_checksum": "{{ user `iso_checksum` }}",\n      "headless": true,\n      "cpus": "{{ user `numvcpus` }}",\n      "memory": "{{ user `memsize` }}",\n      "vnc_bind_address": "0.0.0.0",\n      "http_directory": "http",\n      "shutdown_timeout": "3h",\n      "qemuargs": [["-serial", "stdio"]]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"When running Packer, the process is the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Launch a HTTP server that serves the ",(0,i.jsx)(n.code,{children:"http"})," directory."]}),"\n",(0,i.jsx)(n.li,{children:"Launch a VM and a VNC session."}),"\n",(0,i.jsxs)(n.li,{children:["Boot on the ISO and enter the ",(0,i.jsx)(n.code,{children:"boot_command"})," to load the RedHat Kickstart file from HTTP."]}),"\n",(0,i.jsx)(n.li,{children:"Run the Kickstart RedHat file. This file automates the installation process of the OS."}),"\n",(0,i.jsx)(n.li,{children:"Shut down the VM."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Configure the installation process by editing the ",(0,i.jsx)(n.code,{children:"http/ks.bare.cfg"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"packages"})," and ",(0,i.jsx)(n.code,{children:"post"})," blocks are probably what you are interested in."]}),"\n",(0,i.jsx)(n.p,{children:"Run packer with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:'title="user@local:/ClusterFactory/packer-recipes/rocky"',children:'packer build -var "numvcpus=12" -var "memsize=23609" compute.bare.json\n'})}),"\n",(0,i.jsx)(n.h3,{id:"extracting-the-kernel-initramfs-and-create-a-squashfs-for-grendel",children:"Extracting the kernel, initramfs and create a squashfs for Grendel"}),"\n",(0,i.jsxs)(n.p,{children:["There the script ",(0,i.jsx)(n.code,{children:"export.bare.sh"})," which can help you extract the kernel, initramfs and create a squashfs."]}),"\n",(0,i.jsx)(n.p,{children:"You must run it by root."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:'title="export.bare.sh"',children:"# Mount the disk\nsource ./scripts-local/setup-nbd\n\n# Extract initramfs and kernel\n./scripts-local/exec-dracut\n\n# Squash the image\nOUTPUT=squareos-8.6.squashfs ./scripts-local/squash-root\n\n# Unmount the disk\nsource ./scripts-local/teardown-nbd\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8422:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var i=s(959);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);