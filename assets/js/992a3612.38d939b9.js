"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[743],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8178:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(9496),r=n(1626),i="tabItem_W_EQ";function s(e){var t=e.children,n=e.hidden,s=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},4565:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(5443),r=n(9496),i=n(1626),s=n(4189),a=n(7967),l=n(193),c=n(7725),u="tabList_NXW1",p="tabItem_Mex1";function d(e){var t,n,s=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,a.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,l.U)(),w=x.tabGroupChoices,N=x.setTabGroupChoices,S=(0,r.useState)(b),C=S[0],T=S[1],O=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=w[h];null!=P&&P!==C&&k.some((function(e){return e.value===P}))&&T(P)}var _=function(e){var t=e.currentTarget,n=O.indexOf(t),o=k[n].value;o!==C&&(E(t),T(o),null!=h&&N(h,String(o)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=O.indexOf(e.currentTarget)+1;n=null!=(o=O[r])?o:O[0];break;case"ArrowLeft":var i,s=O.indexOf(e.currentTarget)-1;n=null!=(i=O[s])?i:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:_,onClick:_},s,{className:(0,i.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,s.Z)();return r.createElement(d,(0,o.Z)({key:String(t)},e))}},6605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var o=n(5443),r=n(3010),i=(n(9496),n(9613)),s=n(4565),a=n(8178),l=["components"],c={},u="GitOps with xCAT",p={unversionedId:"guides/provisioning/gitops-with-xcat",id:"guides/provisioning/gitops-with-xcat",title:"GitOps with xCAT",description:"In the next version of ClusterFactory, xCAT will be a Kubernetes operator.",source:"@site/docs/guides/02-provisioning/04-gitops-with-xcat.mdx",sourceDirName:"guides/02-provisioning",slug:"/guides/provisioning/gitops-with-xcat",permalink:"/docs/guides/provisioning/gitops-with-xcat",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/web/docs/guides/02-provisioning/04-gitops-with-xcat.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Configure xCAT to provision the nodes",permalink:"/docs/guides/provisioning/configure-xcat"},next:{title:"Deploying SLURM Cluster",permalink:"/docs/guides/slurm/deploy-slurm"}},d={},m=[{value:"Stanza files as source of truth",id:"stanza-files-as-source-of-truth",level:2},{value:"Creating and using a postbootscript/cloud-init file to allow GitOps",id:"creating-and-using-a-postbootscriptcloud-init-file-to-allow-gitops",level:2},{value:"Step 1: Setup the Git repository",id:"step-1-setup-the-git-repository",level:3},{value:"Step 2: Add a SSH deploy key to the GitHub repository",id:"step-2-add-a-ssh-deploy-key-to-the-github-repository",level:3},{value:"Step 3: Encrypt the SSH deploy private key",id:"step-3-encrypt-the-ssh-deploy-private-key",level:3},{value:"Step 4: Creating the post-boot script/cloud-init file",id:"step-4-creating-the-post-boot-scriptcloud-init-file",level:3}],f={toc:m};function h(e){var t=e.components,c=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gitops-with-xcat"},"GitOps with xCAT"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the next version of ClusterFactory, xCAT will be a Kubernetes operator."),(0,i.kt)("p",{parentName:"div"},"This means that the stanza file for the definition of the cluster can be written in YAML, and there will be no need to SSH to xCAT."))),(0,i.kt)("h2",{id:"stanza-files-as-source-of-truth"},"Stanza files as source of truth"),(0,i.kt)("p",null,"You can dump the database by using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@xcat"',title:'"root@xcat"'},"lsdef -a -l -z > mydbstanzafile\n# -a: all\n# -l: long\n# -z: stanza\n")),(0,i.kt)("p",null,"You can apply a stanza by using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@xcat"',title:'"root@xcat"'},"cat mydbstanzafile | mkdef -z\n")),(0,i.kt)("h2",{id:"creating-and-using-a-postbootscriptcloud-init-file-to-allow-gitops"},"Creating and using a postbootscript/cloud-init file to allow GitOps"),(0,i.kt)("p",null,"A post-boot script/cloud-init file is executed after the boot of the OS, thanks to SystemD."),(0,i.kt)("p",null,"The strategy is the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The postscripts/cloud-init file will accept one parameter: a private key. This key shouldn't be checked in Git."),(0,i.kt)("li",{parentName:"ol"},"The secret key will decrypt the SSH deploy key, which is stored inside the script."),(0,i.kt)("li",{parentName:"ol"},"With the SSH deploy key, the script will ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone")," the Git repository containing the configuration files"),(0,i.kt)("li",{parentName:"ol"},"If the script ",(0,i.kt)("inlineCode",{parentName:"li"},"post.sh")," exists in the repository, then we execute this file."),(0,i.kt)("li",{parentName:"ol"},"This file will copy files and executes other post-boot scripts.")),(0,i.kt)("h3",{id:"step-1-setup-the-git-repository"},"Step 1: Setup the Git repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/"',title:'"user@local:/"'},"mkdir compute-configs\ncd compute-configs\ngit init\n")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"post.sh")," file. This is the entry point. You can do anything you want inside (copy or run other scripts)."),(0,i.kt)("p",null,"Here is an example of our script that we use daily for ",(0,i.kt)("a",{parentName:"p",href:"https://deepsquare.io"},"DeepSquare"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local"',title:'"user@local"'},'#!/bin/sh\n\n# RUN wraps the command to log into journalctl\nRUN() {\n  logger -t postscripts "Running $*..."\n  "$@"\n  code=$?\n  if [ $code -eq 1 ]; then\n    logger -t postscripts "$* failed with error code $code"\n  elif [ $code -ne 0 ]; then\n    logger -t postscripts "$* exited with error code $code"\n  fi\n  logger -t postscripts "$* exited with code $code"\n}\n\nCOPY() {\n  mkdir -p "$(dirname "$2")"\n  rsync -av "$1" "$2"\n}\n\nSCRIPTPATH=$(dirname "$(realpath "$0")")\n\n# -- SYNCLIST\ncd "${SCRIPTPATH}/files" || (echo "cd failed" && exit 1)\nCOPY ./sssd/sssd.rocky.conf /etc/sssd/sssd.conf\n\nCOPY ./munge/munge.key /etc/munge/munge.key\n\n# Slurm configless\nCOPY ./slurm/slurmd_defaults /etc/default/slurmd\n\n# Slurm\nCOPY ./systemd/slurmd.service /etc/systemd/system/slurmd.service\nCOPY ./enroot/00-default.conf /etc/enroot/enroot.conf.d/00-default.conf\nCOPY ./slurm/prolog.d/ /etc/slurm/prolog.d/\nCOPY ./slurm/epilog.d/ /etc/slurm/epilog.d/\nCOPY ./slurm/plugstack.rocky.conf.d/ /etc/slurm/plugstack.conf.d/\n\n# CA\nCOPY ./certs/csquare.gcloud.pem /etc/pki/ca-trust/source/anchors/csquare.gcloud.pem\nupdate-ca-trust\nsystemctl restart sssd\n\n# -- APPEND\ncat ./slurmctl/keys/id_rsa.pub >>/root/.ssh/authorized_keys\n\n# Restore context\ncd "${SCRIPTPATH}" || (echo "cd failed" && exit 1)\n\n# -- EXECUTE (use RUN to log your postscripts)\nPATH="${SCRIPTPATH}/postscripts:$PATH"\n\nRUN ldap\nRUN fs_mount\nRUN slurm\nRUN set-motd\n')),(0,i.kt)("p",null,"The copied files are stored inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"files/")," directory and other scripts are stored inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"postscripts/")," directory."),(0,i.kt)("p",null,"Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 files\n\u2502\xa0\xa0 \u251c\u2500\u2500 certs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 csquare.gcloud.pem\n\u2502\xa0\xa0 \u251c\u2500\u2500 enroot\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 00-default.conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 munge\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 munge.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 slurm\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 epilog.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 none.sh\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 plugstack.rocky.conf.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 spank.conf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prolog.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 50-all-enroot-dirs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 slurmd_defaults\n\u2502\xa0\xa0 \u251c\u2500\u2500 slurmctl\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 keys\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 id_rsa\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 id_rsa.pub\n\u2502\xa0\xa0 \u251c\u2500\u2500 sssd\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 sssd.rocky.conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 systemd\n\u2502\xa0\xa0     \u2514\u2500\u2500 slurmd.service\n\u251c\u2500\u2500 git-configs-execute.xcat-postbootscript.example\n\u251c\u2500\u2500 postscripts\n\u2502\xa0\xa0 \u251c\u2500\u2500 fs_mount\n\u2502\xa0\xa0 \u251c\u2500\u2500 ldap\n\u2502\xa0\xa0 \u251c\u2500\u2500 set-motd\n\u2502\xa0\xa0 \u2514\u2500\u2500 slurm\n\u2514\u2500\u2500 post.sh\n")),(0,i.kt)("p",null,"Commit and put it on GitHub as a private (or public if you feel safe) repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="user@local:/compute-configs"'},'git add .\ngit commit -m "feat: initial commit"\ngit remote add origin https://github.com/user/repo.git\ngit branch -M main\ngit push -u origin main\n')),(0,i.kt)("h3",{id:"step-2-add-a-ssh-deploy-key-to-the-github-repository"},"Step 2: Add a SSH deploy key to the GitHub repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local"',title:'"user@local"'},"ssh-keygen -t ed25519 -f key\n")),(0,i.kt)("p",null,"Put the ",(0,i.kt)("inlineCode",{parentName:"p"},"key.pub")," on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/overview/managing-deploy-keys#setup-2"},"GitHub as a deploy key"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deploy Key page",src:n(6438).Z,width:"2154",height:"1194"})),(0,i.kt)("h3",{id:"step-3-encrypt-the-ssh-deploy-private-key"},"Step 3: Encrypt the SSH deploy private key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local"',title:'"user@local"'},"openssl enc -aes-256-cbc -a -salt -pbkdf2 -in key -out key.enc\n")),(0,i.kt)("p",null,"Save the password for the next step."),(0,i.kt)("h3",{id:"step-4-creating-the-post-boot-scriptcloud-init-file"},"Step 4: Creating the post-boot script/cloud-init file"),(0,i.kt)(s.Z,{groupId:"provisioning",mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"xcat",label:"xCAT",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="git-config-execute.sh <password>"',title:'"git-config-execute.sh','<password>"':!0},"#!/bin/sh\n# Params:\n#  1: password for the ssh key\n\nset -x\n\nmkdir -p /configs\n\n# Encrypt\ncat << EOF > /key.enc\n<FILL ME: encrypted SSH deploy key>\nEOF\nchmod 600 /key.enc\necho \"$1\" | openssl aes-256-cbc -d -a -pbkdf2 -in /key.enc -out /key -pass stdin\nchmod 600 /key\nGIT_SSH_COMMAND='ssh -i /key -o IdentitiesOnly=yes' git clone <FILL ME: your git repository> /configs\nif [ -f /configs/post.sh ] && [ -x /configs/post.sh ]; then\n  cd /configs || exit 1\n  ./post.sh\nfi\nrm -f /key /key.env\n\n# Security\nchmod -R g-rwx,o-rwx .\n")),(0,i.kt)("p",null,"On xCAT, you should add the post-boot script inside an ",(0,i.kt)("inlineCode",{parentName:"p"},"osimage")," stanza:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="stanzafile"',title:'"stanzafile"'},"rocky8.4-x86_64-netboot-compute:\n    objtype=osimage\n    exlist=/xcatdata/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist\n    imagetype=linux\n    kernelver=4.18.0-305.17.1.el8_4.x86_64\n    osarch=x86_64\n    osname=Linux\n    osvers=rocky8.4\n    permission=755\n    postbootscripts=git-config-execute.sh <FILL ME: password>\n    profile=compute\n    provmethod=netboot\n    rootimgdir=/install/netboot/rocky8.4/x86_64/compute\n")),(0,i.kt)("p",null,"Since the stanza contains a secret, you should store it in a Secret management system like HashiCorp Vault or a Sealed Secrets.")),(0,i.kt)(a.Z,{value:"cloud-init",label:"cloud-init",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\nwrite_files:\n  - content: |\n      <FILL ME: encrypted SSH deploy key>\n    path: /key.enc\n    permissions: '0600'\n\nruncmd:\n  - [\n      sh,\n      -c,\n      \"echo '<FILL ME: password>' | openssl aes-256-cbc -d -a -pbkdf2 -in /key.enc -out /key -pass stdin\",\n    ]\n  - [chmod, '600', /key]\n  - [\n      sh,\n      -c,\n      \"mkdir -p /configs && GIT_SSH_COMMAND='ssh -i /key -o IdentitiesOnly=yes' git clone <FILL ME: your git repository> /configs\",\n    ]\n  - [\n      sh,\n      -c,\n      'if [ -f /configs/post.sh ] && [ -x /configs/post.sh ]; then cd /configs && ./post.sh compute; fi',\n    ]\n  - [rm, -f, /key, /key.enc]\n  - [chmod, -R, 'g-rwx,o-rwx', '.']\n")),(0,i.kt)("p",null,"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," contains a secret, you should store it in a Secret management system like HashiCorp Vault or a Sealed Secrets."))))}h.isMDXComponent=!0},6438:function(e,t,n){t.Z=n.p+"assets/images/deploy-key-eff7e8504e92d7759d4e2111b20b0824.png"}}]);