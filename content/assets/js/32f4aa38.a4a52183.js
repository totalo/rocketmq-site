"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(r),p=n,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return r?a.createElement(g,o(o({ref:t},m),{},{components:r})):a.createElement(g,o({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={},o="Message Trace",i={unversionedId:"bestPractice/03messagetra",id:"bestPractice/03messagetra",title:"Message Trace",description:"1. Key attributes of message trace data",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-bestPractice/03messagetra.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/03messagetra",permalink:"/docs/4.x/bestPractice/03messagetra",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/03messagetra.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"DLedger",permalink:"/docs/4.x/bestPractice/02dledger"},next:{title:"Access Control",permalink:"/docs/4.x/bestPractice/04access"}},c={},l=[{value:"1. Key attributes of message trace data",id:"1-key-attributes-of-message-trace-data",level:2},{value:"2. Cluster Deployment for Supporting Message Trace",id:"2-cluster-deployment-for-supporting-message-trace",level:2},{value:"2.1 Broker configuration file",id:"21-broker-configuration-file",level:3},{value:"2.2 Normal mode",id:"22-normal-mode",level:3},{value:"2.3 Physical IO isolation mode",id:"23-physical-io-isolation-mode",level:3},{value:"2.4 Start the Broker with message trace enabled",id:"24-start-the-broker-with-message-trace-enabled",level:3},{value:"3. Save the topic definition for message trace",id:"3-save-the-topic-definition-for-message-trace",level:2},{value:"3.1 System-level TraceTopic",id:"31-system-level-tracetopic",level:3},{value:"3.2 User-defined TraceTopic",id:"32-user-defined-tracetopic",level:3},{value:"4. The Client with Message Trace Practice",id:"4-the-client-with-message-trace-practice",level:2},{value:"4.1 Enable message trace when sending messages",id:"41-enable-message-trace-when-sending-messages",level:3},{value:"4.2 Enable message trace when subscribing to messages",id:"42-enable-message-trace-when-subscribing-to-messages",level:3},{value:"4.3 Support custom storage message trace Topic",id:"43-support-custom-storage-message-trace-topic",level:3},{value:"4.4 Use the mqadmin command to send and view traces",id:"44-use-the-mqadmin-command-to-send-and-view-traces",level:3}],m={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"message-trace"},"Message Trace"),(0,n.kt)("h2",{id:"1-key-attributes-of-message-trace-data"},"1. Key attributes of message trace data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Producer"),(0,n.kt)("th",{parentName:"tr",align:null},"Consumer"),(0,n.kt)("th",{parentName:"tr",align:null},"Broker"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Production instance information"),(0,n.kt)("td",{parentName:"tr",align:null},"Consumer instance information\xa0"),(0,n.kt)("td",{parentName:"tr",align:null},"Message Topic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Time of message sending"),(0,n.kt)("td",{parentName:"tr",align:null},"Delivery time and delivery round\xa0"),(0,n.kt)("td",{parentName:"tr",align:null},"Message store location")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Success of message sending"),(0,n.kt)("td",{parentName:"tr",align:null},"Success of message consumption"),(0,n.kt)("td",{parentName:"tr",align:null},"Message key value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Time taken to send"),(0,n.kt)("td",{parentName:"tr",align:null},"Time taken to consume\xa0"),(0,n.kt)("td",{parentName:"tr",align:null},"Message tag value")))),(0,n.kt)("h2",{id:"2-cluster-deployment-for-supporting-message-trace"},"2. Cluster Deployment for Supporting Message Trace"),(0,n.kt)("h3",{id:"21-broker-configuration-file"},"2.1 Broker configuration file"),(0,n.kt)("p",null,"Here is the content of the properties configuration file for enabling the message trace feature on the Broker \uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"brokerClusterName=DefaultCluster\nbrokerName=broker-a\nbrokerId=0\ndeleteWhen=04\nfileReservedTime=48\nbrokerRole=ASYNC_MASTER\nflushDiskType=ASYNC_FLUSH\nstorePathRootDir=/data/rocketmq/rootdir-a-m\nstorePathCommitLog=/data/rocketmq/commitlog-a-m\nautoCreateSubscriptionGroup=true\n## if msg tracing is open,the flag will be true\ntraceTopicEnable=true\nlistenPort=10911\nbrokerIP1=XX.XX.XX.XX1\nnamesrvAddr=XX.XX.XX.XX:9876\n")),(0,n.kt)("h3",{id:"22-normal-mode"},"2.2 Normal mode"),(0,n.kt)("p",null,"In  RocketMQ cluster, each Broker node is used to store message trace data collected and sent by the Client. Therefore, there is no requirement or limit on the number of Broker nodes in the RocketMQ cluster."),(0,n.kt)("h3",{id:"23-physical-io-isolation-mode"},"2.3 Physical IO isolation mode"),(0,n.kt)("p",null,"For scenarios with a large amount of message trace data, you can choose one of the Broker nodes in the RocketMQ cluster to be dedicated to storing message traces, so that the physical IO of the user's ordinary message data is completely isolated from the message trace data and does not affect each other. In this mode, there are at least two Broker nodes in the RocketMQ cluster, and one of them is defined as the server that stores the message trace data."),(0,n.kt)("h3",{id:"24-start-the-broker-with-message-trace-enabled"},"2.4 Start the Broker with message trace enabled"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"nohup sh mqbroker -c ../conf/2m-noslave/broker-a.properties &")),(0,n.kt)("h2",{id:"3-save-the-topic-definition-for-message-trace"},"3. Save the topic definition for message trace"),(0,n.kt)("p",null,"RocketMQ's message trace feature supports two ways of storing trace data\uff1a"),(0,n.kt)("h3",{id:"31-system-level-tracetopic"},"3.1 System-level TraceTopic"),(0,n.kt)("p",null,"By default, the message trace data is stored in the system-level TraceTopic (whose name is: ",(0,n.kt)("strong",{parentName:"p"},"RMQ_SYS_TRACE_TOPIC"),"). This Topic is automatically created when the Broker node is started (as mentioned above, the ",(0,n.kt)("strong",{parentName:"p"},"traceTopicEnable")," switch variable must be set to ",(0,n.kt)("strong",{parentName:"p"},"true")," in the Broker side configuration file)."),(0,n.kt)("h3",{id:"32-user-defined-tracetopic"},"3.2 User-defined TraceTopic"),(0,n.kt)("p",null,"If the user does not want to store the message trace data in the default system-level TraceTopic, they can also define and create a user-level Topic to save the trace (that is, create a regular Topic to store the message trace data). The next section will introduce how the Client interface supports user-defined TraceTopic."),(0,n.kt)("h2",{id:"4-the-client-with-message-trace-practice"},"4. The Client with Message Trace Practice"),(0,n.kt)("p",null,"In order to minimize the transformation work of the user's business system using the RocketMQ message trace feature, the author designed to add a switch parameter (",(0,n.kt)("strong",{parentName:"p"},"enableMsgTrace"),") to the original interface to enable or disable message trace, and added a custom parameter (",(0,n.kt)("strong",{parentName:"p"},"customizedTraceTopic"),") to allow the user to store the message trace data in their own user-level Topic created."),(0,n.kt)("h3",{id:"41-enable-message-trace-when-sending-messages"},"4.1 Enable message trace when sending messages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'        DefaultMQProducer producer = new DefaultMQProducer("ProducerGroupName",true);\n        producer.setNamesrvAddr("XX.XX.XX.XX1");\n        producer.start();\n            try {\n                {\n                    Message msg = new Message("TopicTest",\n                        "TagA",\n                        "OrderID188",\n                        "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n                    SendResult sendResult = producer.send(msg);\n                    System.out.printf("%s%n", sendResult);\n                }\n\n            } catch (Exception e) {\n                e.printStackTrace();\n            }\n')),(0,n.kt)("h3",{id:"42-enable-message-trace-when-subscribing-to-messages"},"4.2 Enable message trace when subscribing to messages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("CID_JODIE_1",true);\n        consumer.subscribe("TopicTest", "*");\n        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);\n        consumer.setConsumeTimestamp("20181109221800");\n        consumer.registerMessageListener(new MessageListenerConcurrently() {\n            @Override\n            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {\n                System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);\n                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n            }\n        });\n        consumer.start();\n        System.out.printf("Consumer Started.%n");\n')),(0,n.kt)("h3",{id:"43-support-custom-storage-message-trace-topic"},"4.3 Support custom storage message trace Topic"),(0,n.kt)("p",null,"To support custom storage message trace Topic, modify the initialization of the DefaultMQProducer and DefaultMQPushConsumer instances as follows when sending and subscribing to messages."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'        ##Topic_test11111 needs to be created by the user in advance to store message traces:\n        DefaultMQProducer producer = new DefaultMQProducer("ProducerGroupName",true,"Topic_test11111");\n        ......\n\n        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("CID_JODIE_1",true,"Topic_test11111");\n        ......\n')),(0,n.kt)("h3",{id:"44-use-the-mqadmin-command-to-send-and-view-traces"},"4.4 Use the mqadmin command to send and view traces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Send message"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'./mqadmin sendMessage -m true --topic some-topic-name -n 127.0.0.1:9876 -p "your meesgae content"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Query trace"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'./mqadmin QueryMsgTraceById -n 127.0.0.1:9876 -i "some-message-id"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Query trace result"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"RocketMQLog:WARN No appenders could be found for logger (io.netty.util.internal.PlatformDependent0).\nRocketMQLog:WARN Please initialize the logger system properly.\n#Type      #ProducerGroup       #ClientHost          #SendTime            #CostTimes #Status\nPub        1623305799667        xxx.xxx.xxx.xxx       2021-06-10 14:16:40  131ms      success\n")))))}d.isMDXComponent=!0}}]);