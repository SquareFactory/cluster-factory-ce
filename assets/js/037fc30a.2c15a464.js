"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[4112],{6760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/maintenance/removing-controller","title":"Ejecting a controller","description":"1. Cordon the node","source":"@site/docs/guides/30-maintenance/04-removing-controller.md","sourceDirName":"guides/30-maintenance","slug":"/guides/maintenance/removing-controller","permalink":"/docs/guides/maintenance/removing-controller","draft":false,"unlisted":false,"editUrl":"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/30-maintenance/04-removing-controller.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"docs","previous":{"title":"Backup and restore","permalink":"/docs/guides/maintenance/backup-restore"},"next":{"title":"Deploy the Kube Prometheus Stack","permalink":"/docs/guides/monitoring/deploy"}}');var s=t(6070),c=t(4306);const l={},o="Ejecting a controller",i={},d=[];function a(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ejecting-a-controller",children:"Ejecting a controller"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Cordon the node"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl cordon <node>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Drain the node"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl drain <node>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Delete the node"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl delete <node>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Remove the node from ",(0,s.jsx)(n.code,{children:"cfctl.yaml"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Remove the controller from ETCD."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On a controller node, install etcdctl"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="root@k0s-ch-sion-1"',children:'ETCD_VER=v3.5.2\nOS=linux\nARCH=amd64\ncurl -fsSL https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-${OS}-${ARCH}.tar.gz | tar -xvzf - "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl"\nmkdir -p /usr/local/bin/\nmv "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl" /usr/local/bin/etcdctl\nrmdir "etcd-${ETCD_VER}-${OS}-${ARCH}"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Find the node to be removed"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="root@controller"',children:"etcdctl --endpoints=https://127.0.0.1:2379 --key=/var/lib/k0s/pki/etcd/server.key --cert=/var/lib/k0s/pki/etcd/server.crt --insecure-skip-tls-verify member list\n# abcdef1234567890, started, controller, https://10.10.0.2:2380, https://127.0.0.1:2379, false\n# deadcafe12345678, started, controller-to-be-removed, https://10.10.1.2:2380, https://127.0.0.1:2379, false\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"And remove it"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="root@controller"',children:"etcdctl --endpoints=https://127.0.0.1:2379 --key=/var/lib/k0s/pki/etcd/server.key --cert=/var/lib/k0s/pki/etcd/server.crt --insecure-skip-tls-verify member remove <id>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["On the node to be removed, you can delete the ",(0,s.jsx)(n.code,{children:"/etc/cni"})," and ",(0,s.jsx)(n.code,{children:"/opt/cni"})," directories."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="root@controller-to-be-removed"',children:"rm -rf /etc/cni /opt/cni\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"On the node to be removed, you can uninstall k0s:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="root@controller-to-be-removed',children:"systemctl stop k0scontroller.service\nk0s reset\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4306:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(758);const s={},c=r.createContext(s);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);