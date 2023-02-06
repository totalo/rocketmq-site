"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var c=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,c,a=function(e,t){if(null==e)return{};var r,c,a={},n=Object.keys(e);for(c=0;c<n.length;c++)r=n[c],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)r=n[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=c.createContext({}),i=function(e){var t=c.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return c.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},h=c.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=i(r),h=a,k=u["".concat(p,".").concat(h)]||u[h]||m[h]||n;return r?c.createElement(k,l(l({ref:t},s),{},{components:r})):c.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<n;i++)l[i]=r[i];return c.createElement.apply(null,l)}return c.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>i});var c=r(87462),a=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},l=void 0,o={permalink:"/release-notes/2019/08/20/release-notes-rocketmq-client-cpp-1.2.3",source:"@site/release-notes/2019-08-20-release-notes-rocketmq-client-cpp-1.2.3.md",title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",description:"* Source: rocketmq-client-cpp-1.2.3-source-release.tar.gz [PGP] [SHA512]",date:"2019-08-20T00:00:00.000Z",formattedDate:"August 20, 2019",tags:[{label:"RocketMQ_Client_CPP",permalink:"/release-notes/tags/rocket-mq-client-cpp"}],readingTime:1.225,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client CPP- Version 1.2.3",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.0.4",permalink:"/release-notes/2019/11/01/release-notes-rocketmq-spring-2.0.4"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.5.2",permalink:"/release-notes/2019/08/02/4.5.2"}},p={authorsImageUrls:[]},i=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,c.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Download",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Source: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-source-release.tar.gz"},"rocketmq-client-cpp-1.2.3-source-release.tar.gz")," [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-source-release.tar.gz.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-source-release.tar.gz.sha512"},"SHA512"),"]"),(0,a.kt)("li",{parentName:"ul"},"Binary: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-bin-release.tar.gz"},"rocketmq-client-cpp-1.2.3-bin-release.tar.gz")," [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-bin-release.tar.gz.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/1.2.3/rocketmq-client-cpp-1.2.3-bin-release.tar.gz.sha512"},"SHA512"),"]"))),(0,a.kt)("p",null,"Below is a summary of the issues addressed in the version 1.2.3 release of RocketMQ Client CPP. For full documentation of the release, a guide to get started, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-cpp"},"Quick Start"),"."),(0,a.kt)("h2",{id:"improvement"},"Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/139"},"ISSUE-139"),"] -  Export send batch messages api in c style."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/154"},"ISSUE-154"),"] -  Support transaction message."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/138"},"ISSUE-138"),"] -  Support getting error code and error message when C api returns."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/140"},"ISSUE-140"),"] -  Fix build warnings in namespace util."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/143"},"ISSUE-143"),"] -  Replace unsigned int by auto to save string::size_type."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/157"},"ISSUE-157"),"] -  Remove two unused functionalities, removeDropedPullRequestOpaque and deleteOpaqueForDropPullRequest."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/159"},"ISSUE-159"),"] -  Update unit test case for response future."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/160"},"ISSUE-160"),"] -  Optimize BatchMessage detection in\xa0producer send kernel."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/127"},"ISSUE-127"),"] -  Support muti-threads compile in build.sh."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/167"},"ISSUE-167"),"] -  Support 64bit boost library on windows."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/172"},"ISSUE-172"),"] -  Remove useless code and fix compile warnings."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/179"},"ISSUE-179"),"] -  Modify deploy shell to package license and notice file.")),(0,a.kt)("h2",{id:"bug"},"Bug"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/59"},"ISSUE-59"),"] -  Fix infinite loop on tcp transport connect."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/152"},"ISSUE-152"),"] -  Resolve the bug without encode batch flag when send batch message."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/156"},"ISSUE-156"),"] -  Use io-thread pool and work-thread pool in network callback to resolve deadlock in block-request."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/175"},"ISSUE-175"),"] -  Fix the death lock on pull request process of orderly consumer.")))}m.isMDXComponent=!0}}]);