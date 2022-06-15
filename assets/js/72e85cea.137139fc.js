"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[78],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6701:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(5443),r=t(3010),i=(t(9496),t(9613)),o=["components"],s={},l="Updating the K0s Helm extensions",p={unversionedId:"guides/maintenance/updating-helm-extensions",id:"guides/maintenance/updating-helm-extensions",title:"Updating the K0s Helm extensions",description:"Updating and applying k0sctl.yaml will create downtime!",source:"@site/docs/guides/30-maintenance/02-updating-helm-extensions.md",sourceDirName:"guides/30-maintenance",slug:"/guides/maintenance/updating-helm-extensions",permalink:"/docs/guides/maintenance/updating-helm-extensions",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/guides/30-maintenance/02-updating-helm-extensions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Creating a highly available cluster",permalink:"/docs/guides/maintenance/high-availability"},next:{title:"Updating the K0s cluster",permalink:"/docs/guides/maintenance/updating-k0s-cluster"}},c={},d=[],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-the-k0s-helm-extensions"},"Updating the K0s Helm extensions"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Updating and applying ",(0,i.kt)("inlineCode",{parentName:"p"},"k0sctl.yaml")," will create downtime!"))),(0,i.kt)("p",null,"There are two ways to update the K0s Helm extensions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updating directly the ",(0,i.kt)("inlineCode",{parentName:"li"},"k0sctl.yaml")," and deploying with ",(0,i.kt)("inlineCode",{parentName:"li"},"k0sctl")),(0,i.kt)("li",{parentName:"ul"},"Updating the CRD ",(0,i.kt)("inlineCode",{parentName:"li"},"helm.k0sproject.io")," and deploying with ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"))),(0,i.kt)("p",null,"We recommend updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"k0sctl.yaml"),", editing and applying the CRD to avoid downtime. For example, if you wish to update Traefik:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"k0sctl.yaml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="k0sctl.yaml > spec > k0s > config > spec > extensions > helm > charts[]"',title:'"k0sctl.yaml',">":!0,spec:!0,k0s:!0,config:!0,extensions:!0,helm:!0,'charts[]"':!0},"                - name: traefik\n                  chartname: traefik/traefik\n-                 version: '10.15.0'\n+                 version: '10.19.5'\n                  namespace: traefik\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Update the CRD:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get Chart k0s-addon-chart-traefik -n kube-system -o yaml > chart.yaml\n")),(0,i.kt)("p",null,"Edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"chart.yaml"),". Remove the metadata and update the Traefik version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"  apiVersion: helm.k0sproject.io/v1beta1\n  kind: Chart\n  metadata:\n    finalizers:\n      - helm.k0sproject.io/uninstall-helm-release\n    labels:\n      k0s.k0sproject.io/stack: helm\n    name: k0s-addon-chart-traefik\n    namespace: kube-system\n  spec:\n    chartName: traefik/traefik\n    namespace: traefik\n    releaseName: traefik\n    values: |\n\n      ingressClass:\n        enabled: true\n        isDefaultClass: true\n\n      service:\n        enabled: true\n        annotations:\n          metallb.universe.tf/address-pool: main-pool\n          metallb.universe.tf/allow-shared-ip: traefik-lb-key\n        spec:\n          externalTrafficPolicy: Cluster\n          loadBalancerIP: 192.168.1.100\n\n      providers:\n        kubernetesCRD:\n          enabled: true\n          allowCrossNamespace: true\n          allowExternalNameServices: true\n          namespaces: []\n        kubernetesIngress:\n          enabled: true\n          allowExternalNameServices: true\n          namespaces: []\n          ingressClass: traefik\n          publishedService:\n            enabled: true\n\n      globalArguments:\n        - '--global.checknewversion'\n        - '--api.dashboard=true'\n\n      additionalArguments:\n        - '--entryPoints.websecure.proxyProtocol.insecure'\n        - '--entryPoints.websecure.forwardedHeaders.insecure'\n\n      ingressRoute:\n        dashboard:\n          enabled: false\n\n      ports:\n        traefik:\n          port: 9000\n          expose: false\n          exposedPort: 9000\n          protocol: TCP\n        dns-tcp:\n          port: 8053\n          expose: true\n          exposedPort: 53\n          protocol: TCP\n        dns-udp:\n          port: 8054\n          expose: true\n          exposedPort: 53\n          protocol: UDP\n        oidc:\n          port: 5556\n          expose: true\n          exposedPort: 5556\n          protocol: TCP\n        web:\n          port: 80\n          expose: true\n          exposedPort: 80\n          protocol: TCP\n        websecure:\n          port: 443\n          expose: true\n          exposedPort: 443\n          protocol: TCP\n          # NOTE: use cert-manager.\n          tls:\n            enabled: false\n        metrics:\n          port: 9100\n          expose: false\n          exposedPort: 9100\n          protocol: TCP\n\n      securityContext:\n        capabilities:\n          drop: [ALL]\n          add: [NET_BIND_SERVICE]\n        readOnlyRootFilesystem: true\n        runAsGroup: 0\n        runAsNonRoot: false\n        runAsUser: 0\n\n      podSecurityContext:\n        fsGroup: 65532\n-   version: 10.15.0\n+   version: 10.19.5\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Apply the ",(0,i.kt)("inlineCode",{parentName:"li"},"chart.yaml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f chart.yaml -n kube-system\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If nothing is happening, delete the chart and reapply it again."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete -f chart.yaml -n kube-system\n\n# OR\n\nkubectl delete Chart k0s-addon-chart-traefik -n kube-system\n")))))}u.isMDXComponent=!0}}]);