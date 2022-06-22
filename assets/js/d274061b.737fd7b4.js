"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7344],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(5443),a=n(3010),i=(n(9496),n(9613)),c=["components"],o={},s="Updating the K0s cluster",u={unversionedId:"guides/maintenance/updating-k0s-cluster",id:"guides/maintenance/updating-k0s-cluster",title:"Updating the K0s cluster",description:"Updating the k0s cluster is super easy!",source:"@site/docs/guides/30-maintenance/03-updating-k0s-cluster.md",sourceDirName:"guides/30-maintenance",slug:"/guides/maintenance/updating-k0s-cluster",permalink:"/docs/guides/maintenance/updating-k0s-cluster",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/guides/30-maintenance/03-updating-k0s-cluster.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Updating the K0s Helm extensions",permalink:"/docs/guides/maintenance/updating-helm-extensions"},next:{title:"Backup and restore",permalink:"/docs/guides/maintenance/backup-restore"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-the-k0s-cluster"},"Updating the K0s cluster"),(0,i.kt)("p",null,"Updating the k0s cluster is super easy!"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"k0sctl.yaml"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="k0sctl.yaml > spec > k0s"',title:'"k0sctl.yaml',">":!0,spec:!0,'k0s"':!0},"    k0s:\n-     version: 1.23.5+k0s.0\n+     version: 1.23.6+k0s.1\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"And apply it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"k0sctl apply --debug --config k0sctl.yaml\n\n# OR\n\n./1.deploy-k0s.sh\n")))}m.isMDXComponent=!0}}]);