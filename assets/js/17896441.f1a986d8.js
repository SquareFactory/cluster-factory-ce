"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7918],{5247:(e,t,s)=>{s.r(t),s.d(t,{default:()=>le});var n=s(5271),a=s(3878),i=s(1597),o=s(2676);const l=n.createContext(null);function c(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,o.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,n.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=r();return(0,o.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(4814),m=s(7195),h=s(1340),b=s(8299);function x(e){const{permalink:t,title:s,subLabel:n,isNext:a}=e;return(0,o.jsxs)(b.Z,{className:(0,u.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,o.jsx)("div",{className:"pagination-nav__label",children:s})]})}function p(e){const{previous:t,next:s}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(x,{...t,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,o.jsx)(x,{...s,subLabel:(0,o.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=r();return(0,o.jsx)(p,{previous:e.previous,next:e.next})}var v=s(6654),j=s(1396),f=s(1066),_=s(9699),N=s(3807);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){const t=C[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(b.Z,{to:s,onClick:n,children:(0,o.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function Z(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,v.Z)(),{pluginId:a}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(a),{latestDocSuggestion:l,latestVersionSuggestion:c}=(0,j.Jo)(a),r=l??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(k,{siteTitle:n,versionMetadata:s})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(L,{versionLabel:c.label,to:r.path,onClick:()=>i(c.name)})})]})}function T(e){let{className:t}=e;const s=(0,N.E)();return s.banner?(0,o.jsx)(Z,{className:t,versionMetadata:s}):null}function M(e){let{className:t}=e;const s=(0,N.E)();return s.badge?(0,o.jsx)("span",{className:(0,u.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}const w={tag:"tag_A5Nm",tagRegular:"tagRegular_h4fH",tagWithCount:"tagWithCount_NQib"};function I(e){let{permalink:t,label:s,count:n,description:a}=e;return(0,o.jsxs)(b.Z,{href:t,title:a,className:(0,u.Z)(w.tag,n?w.tagWithCount:w.tagRegular),children:[s,n&&(0,o.jsx)("span",{children:n})]})}const y={tags:"tags_R3sa",tag:"tag_KMcc"};function B(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.Z)(y.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:y.tag,children:(0,o.jsx)(I,{...e})},e.permalink)))})]})}var H=s(977);function A(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,l=!!(t||s||n);return i||l?(0,o.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.Z)("row margin-top--sm",f.k.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(B,{tags:a})})}),l&&(0,o.jsx)(H.Z,{className:(0,u.Z)("margin-top--sm",f.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var E=s(4098),P=s(8207);const V={tocCollapsibleButton:"tocCollapsibleButton_d6Ac",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_o6nu"};function R(e){let{collapsed:t,...s}=e;return(0,o.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,s.className),children:(0,o.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const F={tocCollapsible:"tocCollapsible_wfgR",tocCollapsibleContent:"tocCollapsibleContent_ePcK",tocCollapsibleExpanded:"tocCollapsibleExpanded_J7dW"};function S(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,E.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(F.tocCollapsible,!i&&F.tocCollapsibleExpanded,s),children:[(0,o.jsx)(R,{collapsed:i,onClick:l}),(0,o.jsx)(E.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(P.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const U={tocMobile:"tocMobile_ny2g"};function D(){const{toc:e,frontMatter:t}=r();return(0,o.jsx)(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,U.tocMobile)})}var W=s(4096);function J(){const{toc:e,frontMatter:t}=r();return(0,o.jsx)(W.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var O=s(9684),z=s(1321);function K(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=r();return t.hide_title||void 0!==s?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[s&&(0,o.jsx)("header",{children:(0,o.jsx)(O.Z,{as:"h1",children:s})}),(0,o.jsx)(z.Z,{children:t})]})}var G=s(5006),Q=s(2025),$=s(754);function q(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const X={breadcrumbHomeIcon:"breadcrumbHomeIcon_df99"};function Y(){const e=(0,$.ZP)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(b.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(q,{className:X.breadcrumbHomeIcon})})})}const ee={breadcrumbsContainer:"breadcrumbsContainer_EOF0"};function te(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,o.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,o.jsx)(b.Z,{className:a,href:s,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:a,children:t})}function se(e){let{children:t,active:s,index:n,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function ne(){const e=(0,G.s1)(),t=(0,Q.Ns)();return e?(0,o.jsx)("nav",{className:(0,u.Z)(f.k.docs.docBreadcrumbs,ee.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(Y,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(se,{active:n,index:s,addMicrodata:!!a,children:(0,o.jsx)(te,{href:a,isLast:n,children:t.label})},s)}))]})}):null}var ae=s(7303);const ie={docItemContainer:"docItemContainer_WFJn",docItemCol:"docItemCol_cZ5u"};function oe(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=r(),s=(0,m.i)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,o.jsx)(D,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(J,{})}}(),{metadata:n}=r();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!s.hidden&&ie.docItemCol),children:[(0,o.jsx)(ae.Z,{metadata:n}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:ie.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ne,{}),(0,o.jsx)(M,{}),s.mobile,(0,o.jsx)(K,{children:t}),(0,o.jsx)(A,{})]}),(0,o.jsx)(g,{})]})]}),s.desktop&&(0,o.jsx)("div",{className:"col col--3",children:s.desktop})]})}function le(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,o.jsx)(c,{content:e.content,children:(0,o.jsxs)(a.FG,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(oe,{children:(0,o.jsx)(s,{})})]})})}}}]);