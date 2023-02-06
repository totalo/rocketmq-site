"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4583],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),h=r,p=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return o?n.createElement(p,a(a({ref:t},d),{},{components:o})):n.createElement(p,a({ref:t},d))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},26262:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={},a="RocketMQ MQTT Overview",s={unversionedId:"mqtt/01RocketMQMQTTOverview",id:"version-5.0/mqtt/01RocketMQMQTTOverview",title:"RocketMQ MQTT Overview",description:"The traditional message queue MQ is mainly used for message communication between services (ends), such as transaction messages, payment messages, logistics messages, etc. in the e-commerce field. However, under the general category of messages, there is another very important and common message field, that is, IoT terminal device messages. In recent years, we have seen the explosive growth of IoT device-oriented news arising from smart home and industrial interconnection, and the news on the mobile APP side of the mobile Internet, which has been developed for more than ten years, is still orders of magnitude huge. The order of magnitude of messages for terminal devices is many orders of magnitude larger than that of traditional servers and is still growing rapidly.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/08-mqtt/01RocketMQMQTTOverview.md",sourceDirName:"08-mqtt",slug:"/mqtt/01RocketMQMQTTOverview",permalink:"/docs/mqtt/01RocketMQMQTTOverview",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/08-mqtt/01RocketMQMQTTOverview.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ EventBridge Quick Start",permalink:"/docs/eventbridge/03RocketMQEventBridgeQuickStart"},next:{title:"RocketMQ MQTT QuickStart",permalink:"/docs/mqtt/02RocketMQMQTTQuickStart"}},c={},l=[{value:"MQTT  Protocol",id:"mqtt--protocol",level:2},{value:"Model introduction",id:"model-introduction",level:2},{value:"Queue Storage Model",id:"queue-storage-model",level:3},{value:"Push-Pull Model",id:"push-pull-model",level:3},{value:"Architecture Overview",id:"architecture-overview",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-mqtt-overview"},"RocketMQ MQTT Overview"),(0,r.kt)("p",null,"The traditional message queue MQ is mainly used for message communication between services (ends), such as transaction messages, payment messages, logistics messages, etc. in the e-commerce field. However, under the general category of messages, there is another very important and common message field, that is, IoT terminal device messages. In recent years, we have seen the explosive growth of IoT device-oriented news arising from smart home and industrial interconnection, and the news on the mobile APP side of the mobile Internet, which has been developed for more than ten years, is still orders of magnitude huge. The order of magnitude of messages for terminal devices is many orders of magnitude larger than that of traditional servers and is still growing rapidly."),(0,r.kt)("p",null,"If there is a unified message system (product) to provide multi-scenario computing (such as stream, event) and multi-scenario (IoT, APP) access, it is actually very valuable, because messages are also important data. There is only one system, which can minimize storage costs and effectively avoid the consistency problems and challenges caused by data synchronization between different systems."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(88583).Z,width:"2106",height:"568"})),(0,r.kt)("p",null,"Based on this, we introduced the RocketMQ-MQTT extension project to realize RocketMQ's unified access to the messages of IoT devices and servers, and provide integrated message storage and intercommunication capabilities."),(0,r.kt)("h2",{id:"mqtt--protocol"},"MQTT  Protocol"),(0,r.kt)("p",null,"In the IoT terminal scenario, the MQTT protocol is widely used in the industry at present, which is a standard open protocol defined by the OASIS Alliance that originated from the IoT scenario of the Internet of Things. Because there are many types of IoT devices and different operating environments, a standard access protocol is particularly critical."),(0,r.kt)("p",null,'The MQTT protocol defines a Pub/Sub communication model, which is similar to RocketMQ, but it is more flexible in the way of subscription, and can support multi-level Topic subscriptions (such as "/t/t1/t2"), and can even support Wildcard subscription (such as "/t/t1/+").'),(0,r.kt)("h2",{id:"model-introduction"},"Model introduction"),(0,r.kt)("h3",{id:"queue-storage-model"},"Queue Storage Model"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(80364).Z,width:"1768",height:"606"})),(0,r.kt)("p",null,"We have designed a topic queue model for multi-dimensional distribution. As shown in the figure above, messages can come from various access scenarios (such as MQ/AMQP on the server side and MQTT on the client side), but only one copy will be written and stored in the commitlog, and then Distribute the queue index (ConsumerQueue) of multiple demand scenarios. For example, the server-side scenario (MQ/AMQP) can perform traditional server-side consumption according to the first-level Topic queue, and the client-side MQTT scenario can consume according to MQTT multi-level Topic and wildcard subscription. "),(0,r.kt)("p",null,"Such a queue model can support the access and message sending and receiving of the server and terminal scenarios at the same time, achieving the goal of integration."),(0,r.kt)("h3",{id:"push-pull-model"},"Push-Pull Model"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(76820).Z,width:"1622",height:"990"})),(0,r.kt)("p",null,"The above figure shows a push-pull model. The P node in the figure is a protocol gateway or broker plug-in, and the terminal device is connected to the gateway node through the MQTT protocol. Messages can be sent from a variety of scenarios (MQ/AMQP/MQTT). After being stored in the Topic queue, there will be a notify logic module to sense the arrival of the new message in real time, and then a message event (that is, the topic name of the message) will be generated. The event is pushed to the gateway node, and the gateway node performs internal matching according to the subscription status of the connected terminal devices, finds which terminal devices can be matched, and then triggers a pull request to the storage layer to read the message and push it to the terminal device."),(0,r.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(10607).Z,width:"1920",height:"870"}),"\nOur goal is to achieve an integrated and self-closed loop based on RocketMQ, but we don't want Broker to be invaded into more scenario logic. We abstract a protocol computing layer, which can be a gateway or a broker plug-in. Broker focuses on solving Queue issues and doing some Queue storage adaptation or transformation to meet the above computing needs. The protocol computing layer is responsible for protocol access and must be pluggable and deployed."))}m.isMDXComponent=!0},80364:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cq-0346fd04c437e267721dca190f30c49d.png"},10607:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/earch-0625e2c129ed2b9b453abcdfa9998f90.png"},88583:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/eone-9371a21bf82b3b3af8b90dd1a703a851.png"},76820:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/epushpull-680e9c01bf450138c834983c671e1c81.png"}}]);