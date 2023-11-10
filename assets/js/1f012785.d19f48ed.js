"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[4804],{6950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(1527),s=n(8422);n(7756),n(1253);const i={},o="GitOps with Grendel",l={id:"guides/provisioning/gitops-with-grendel",title:"GitOps with Grendel",description:"Postscript strategy",source:"@site/docs/guides/50-provisioning/03-gitops-with-grendel.mdx",sourceDirName:"guides/50-provisioning",slug:"/guides/provisioning/gitops-with-grendel",permalink:"/docs/guides/provisioning/gitops-with-grendel",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/50-provisioning/03-gitops-with-grendel.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Build an OS Image with Packer",permalink:"/docs/guides/provisioning/packer-build"},next:{title:"Deploying SLURM Cluster",permalink:"/docs/guides/slurm/deploy-slurm"}},a={},c=[{value:"Postscript strategy",id:"postscript-strategy",level:2},{value:"GitHub configuration",id:"github-configuration",level:2},{value:"You first postscript tracked with Git",id:"you-first-postscript-tracked-with-git",level:3},{value:"Adding a deploy key",id:"adding-a-deploy-key",level:3},{value:"Grendel configuration",id:"grendel-configuration",level:2},{value:"Private key secret",id:"private-key-secret",level:3},{value:"Mounting the private key",id:"mounting-the-private-key",level:3},{value:"Setup the Grendel postscript for GitOps",id:"setup-the-grendel-postscript-for-gitops",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"gitops-with-grendel",children:"GitOps with Grendel"}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"postscript-strategy",children:"Postscript strategy"}),"\n",(0,r.jsx)(t.p,{children:"If you've looked inside the Packer recipes, you can see that there is a systemd service that will run to fetch the postscript on Grendel:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="Extract of ks.bare.cfg"',children:'cat << \'END\' >/pull-postscript.sh\n#!/bin/sh\nset -ex\n\nHOSTNAME="$(sed -E \'s/^.*grendel.hostname=([^ ]*).*$/\\1/\' /proc/cmdline)"\nhostnamectl set-hostname "${HOSTNAME}"\n\nGRENDEL_ADDRESS="$(sed -E \'s/^.*grendel.address=([^ ]*).*$/\\1/\' /proc/cmdline)"\n\ncurl -fsSL ${GRENDEL_ADDRESS}/repo/postscript.sh -o /postscript.sh\nchmod +x /postscript.sh\n/postscript.sh ${HOSTNAME}\nEND\n\nchmod +x /pull-postscript.sh\n\ncat <<\'END\' >/etc/systemd/system/grendel-postscript.service\n[Unit]\nDescription=Grendel Postscript\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=simple\nExecStart=/pull-postscript.sh\n\n[Install]\nWantedBy=multi-user.target\nEND\nln -s "/etc/systemd/system/grendel-postscript.service" "/etc/systemd/system/multi-user.target.wants/grendel-postscript.service"\n'})}),"\n",(0,r.jsx)(t.p,{children:"The postscript is defined inside the Grendel configuration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"config:\n  postscript: ''\n"})}),"\n",(0,r.jsx)(t.p,{children:"The strategy to enable GitOps is the following:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The systemd service pull the grendel postscript."}),"\n",(0,r.jsx)(t.li,{children:"The grendel postscript fetches the ssh private key from the grendel HTTP server."}),"\n",(0,r.jsxs)(t.li,{children:["The grendel postscript ",(0,r.jsx)(t.code,{children:"git clone"})," a repository containing other postscripts by using the ssh private key."]}),"\n",(0,r.jsx)(t.li,{children:"After cloning the repository, grendel executes the postscripts."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"github-configuration",children:"GitHub configuration"}),"\n",(0,r.jsx)(t.h3,{id:"you-first-postscript-tracked-with-git",children:"You first postscript tracked with Git"}),"\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.strong,{children:"private"})," empty repository for your scripts and add a ",(0,r.jsx)(t.code,{children:"post.sh"})," script."]}),"\n",(0,r.jsx)(t.p,{children:"This script is the main entry point. If you want to add a hierarchy, you use this script:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="Example of postscript"',children:'#!/bin/sh\n\n# Find all the executable scripts and sort them by name\nscripts=$(find ./scripts -type f | sort)\n\n# Loop through each script and execute it\nfor script in $scripts; do\n  # Check if the script needs to be chmod-ed\n  if [ ! -x "$script" ]; then\n    chmod +x "$script"\n  fi\n\n  # Execute the script\n  "./$script"\ndone\n'})}),"\n",(0,r.jsxs)(t.p,{children:["This script will execute all the files inside the ",(0,r.jsx)(t.code,{children:"scripts"})," folder in alphabetical order. So you need to create a ",(0,r.jsx)(t.code,{children:"scripts"})," folder with scripts inside."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Commit and push everything."})}),"\n",(0,r.jsx)(t.h3,{id:"adding-a-deploy-key",children:"Adding a deploy key"}),"\n",(0,r.jsx)(t.p,{children:"Generate a key pair using:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"ssh-keygen -f $(pwd)/id_rsa -C grendel\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#set-up-deploy-keys",children:["And add the ",(0,r.jsx)(t.code,{children:"id_rsa.pub"})," as a deploy key."]})}),"\n",(0,r.jsx)(t.h2,{id:"grendel-configuration",children:"Grendel configuration"}),"\n",(0,r.jsx)(t.p,{children:"Let's add the private key to the Grendel HTTP server."}),"\n",(0,r.jsx)(t.h3,{id:"private-key-secret",children:"Private key secret"}),"\n",(0,r.jsx)(t.p,{children:"Create a secret:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="argo/provisioning/secrets/postscript-privatekey-secret.yaml.local"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: postscript-privatekey-secret\n  namespace: provisioning\ntype: Opaque\nstringData:\n  ## Create the key with:\n  ## ssh-keygen -f $(pwd)/key -C grendel\n  key: ''\n"})}),"\n",(0,r.jsx)(t.p,{children:"Seal it and apply it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="user@local:/ClusterFactory"',children:"cfctl kubeseal\nkubectl apply -f argo/provisioning/secrets/postscript-privatekey-sealed-secret.yaml\n"})}),"\n",(0,r.jsx)(t.h3,{id:"mounting-the-private-key",children:"Mounting the private key"}),"\n",(0,r.jsx)(t.p,{children:"In the Grendel values file, add:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"## Extra volumes\nvolumes:\n  - name: postscript-privatekey\n    secret:\n      defaultMode: 384\n      secretName: postscript-privatekey-secret\n\n## Extra volume mounts\nvolumeMounts:\n  - name: postscript-privatekey\n    subPath: key\n    mountPath: /var/lib/grendel/key\n"})}),"\n",(0,r.jsx)(t.p,{children:"This will mount the key inside the HTTP server."}),"\n",(0,r.jsx)(t.h3,{id:"setup-the-grendel-postscript-for-gitops",children:"Setup the Grendel postscript for GitOps"}),"\n",(0,r.jsxs)(t.p,{children:["In the Grendel values file, change the ",(0,r.jsx)(t.code,{children:"postscript"})," field to:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',children:"config:\n  postscript: |\n    #!/bin/sh\n\n    set -ex\n\n    # Fetch deploy key\n    curl --retry 5 -fsSL http://grendel.internal/repo/key -o /key\n    chmod 600 /key\n\n    # Cloning git repo containing postscripts.\n    mkdir -p /configs\n    GIT_SSH_COMMAND='ssh -i /key -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null' git clone git@github.com:<repo owner>/<repo>.git /configs\n    if [ -f /configs/post.sh ] && [ -x /configs/post.sh ]; then\n      cd /configs || exit 1\n      ./post.sh \"$1\"\n    fi\n    rm -f /key\n\n    # Security\n    chmod -R g-rwx,o-rwx .\n"})}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"And that's it! With this, the node postscripts will be tracked on Git and you won't be lost in your node configuration."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1253:(e,t,n)=>{n.d(t,{Z:()=>o});n(959);var r=n(5924);const s={tabItem:"tabItem_OqcZ"};var i=n(1527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},7756:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(959),s=n(5924),i=n(1512),o=n(8903),l=n(8784),a=n(8084),c=n(9094),d=n(7014);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=p(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=g({queryString:n,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),y=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{y&&a(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(4294);const y={tabList:"tabList_jrYe",tabItem:"tabItem_OXj1"};var v=n(1527);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=a.indexOf(t),s=l[n].value;s!==r&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(b,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(t))}},8422:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(959);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);