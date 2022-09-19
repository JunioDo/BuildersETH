"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[2185],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4126:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],l={sidebar_position:1},s="Course Introduction",u={unversionedId:"solidity-101/course-introduction/introduction-course",id:"solidity-101/course-introduction/introduction-course",title:"Course Introduction",description:"Course Objective",source:"@site/docs/solidity-101/1-course-introduction/1-introduction-course.mdx",sourceDirName:"solidity-101/1-course-introduction",slug:"/solidity-101/course-introduction/introduction-course",permalink:"/docs/solidity-101/course-introduction/introduction-course",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/solidity-101/1-course-introduction/1-introduction-course.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/docs/intro"},next:{title:"Course Prerequisites",permalink:"/docs/solidity-101/course-introduction/course-prerequisites"}},c={},p=[{value:"Course Objective",id:"course-objective",level:2},{value:"Language Version",id:"language-version",level:3},{value:"Who is this Course for",id:"who-is-this-course-for",level:2},{value:"What this course covers",id:"what-this-course-covers",level:2},{value:"Course Introduction",id:"course-introduction-1",level:3},{value:"Language Building Blocks",id:"language-building-blocks",level:3},{value:"Contracts and Full Programs",id:"contracts-and-full-programs",level:3},{value:"Special Topics",id:"special-topics",level:3},{value:"Secure Smart Contracts",id:"secure-smart-contracts",level:3},{value:"Smart Contracts and the Wider Web3 World",id:"smart-contracts-and-the-wider-web3-world",level:3},{value:"How to get the most out of this course",id:"how-to-get-the-most-out-of-this-course",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Contact",id:"contact",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],d={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"course-introduction"},"Course Introduction"),(0,i.kt)("h2",{id:"course-objective"},"Course Objective"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aim:")," To give a beginner web3 developer a friendly and broad introduction to the Solidity programming language. Additionally, we will provide a general overview of various core emergent concepts when applied directly to Solidity development."),(0,i.kt)("p",null,"Although we will cover topics such as the Ethereum Protocol, DeFi, NFTs, and writing secure smart contracts, this is by no means an extensive description."),(0,i.kt)("p",null,"This course is not focused on creating full-stack decentralized applications (DApps). Although we will make some DApps, our focus will primarily be on the Solidity portion, with the DApps as a means to see our interactions. As such, best practices for front-end DApp development are out of the scope of this course."),(0,i.kt)("p",null,"This course aims to give you a broad hands-on overview, by which you can extend your skills later. Future tutorials in the future will go in-depth into these concepts."),(0,i.kt)("h3",{id:"language-version"},"Language Version"),(0,i.kt)("p",null,"Solidity is a fast-changing language, like the wider web3 and Ethereum ecosystem."),(0,i.kt)("p",null,"This course will be on Solidity 0.8.13. We plan to write up blog posts to any minor version upgrades and bug fixes that affect the course and link them where applicable."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/introduction-semantic-versioning/#:~:text=Semantic%20Versioning%20is%20a%203,and%20minor%20versions%20to%20zero."},"semantic versioning")," (semver):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"major versions: ",(0,i.kt)("strong",{parentName:"li"},"x")," -> ",(0,i.kt)("strong",{parentName:"li"},"x"),".yy.zz"),(0,i.kt)("li",{parentName:"ul"},"minor versions: ",(0,i.kt)("strong",{parentName:"li"},"y")," -> x.",(0,i.kt)("strong",{parentName:"li"},"yy"),".zz"),(0,i.kt)("li",{parentName:"ul"},"patches: ",(0,i.kt)("strong",{parentName:"li"},"z")," -> x.yy.",(0,i.kt)("strong",{parentName:"li"},"zz"))),(0,i.kt)("p",null,"Major: break the API and are not backward compatible.",(0,i.kt)("br",{parentName:"p"}),"\n","Minor: update the API and are backward compatible.",(0,i.kt)("br",{parentName:"p"}),"\n","Patches: bug fixes."),(0,i.kt)("h2",{id:"who-is-this-course-for"},"Who is this Course for"),(0,i.kt)("p",null,"This course primarily aimed at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"developers."),(0,i.kt)("li",{parentName:"ul"},"who are beginners to blockchains, Ethereum, or web3 in general."),(0,i.kt)("li",{parentName:"ul"},"and would like to start Solidity programming to develop Ethereum smart contracts.")),(0,i.kt)("p",null,"No prior knowledge of Ethereum is required. However, understanding the basics of blockchains and Ethereum will help. Therefore, we will cover the immediately relevant parts of Ethereum as we introduce new programming concepts hands-only. This way, we will learn from the top and gradually dig deeper."),(0,i.kt)("p",null,"We will assume:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At least six months to one year of programming experience."),(0,i.kt)("li",{parentName:"ul"},"Familiarity with JavaScript."),(0,i.kt)("li",{parentName:"ul"},"Basic experience with the command line."),(0,i.kt)("li",{parentName:"ul"},"Basic experience with NodeJS."),(0,i.kt)("li",{parentName:"ul"},"Basic experience with React.")),(0,i.kt)("h2",{id:"what-this-course-covers"},"What this course covers"),(0,i.kt)("p",null,"This course is will cover the folling in five sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Course Introduction"),(0,i.kt)("li",{parentName:"ol"},"Language Building Blocks"),(0,i.kt)("li",{parentName:"ol"},"Contracts and Full Programs"),(0,i.kt)("li",{parentName:"ol"},"Special Topics"),(0,i.kt)("li",{parentName:"ol"},"Smart Contracts and The Wider Web3 World")),(0,i.kt)("h3",{id:"course-introduction-1"},"Course Introduction"),(0,i.kt)("p",null,"The course introduction covers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting up your development environment."),(0,i.kt)("li",{parentName:"ul"},"A description of Solidity and why it's useful to learn it."),(0,i.kt)("li",{parentName:"ul"},"A brief overview of the relevant parts of Ethereum for this course."),(0,i.kt)("li",{parentName:"ul"},"A brief overview of your first smart contract.")),(0,i.kt)("h3",{id:"language-building-blocks"},"Language Building Blocks"),(0,i.kt)("p",null,"This section will cover the basics of the Solidity programming language. You will eventually get an overview of each data type, their use, and relevant information to create your first smart contract program."),(0,i.kt)("p",null,"You will also learn how to use the command line-based smart contract developer tooling and a local blockchain."),(0,i.kt)("h3",{id:"contracts-and-full-programs"},"Contracts and Full Programs"),(0,i.kt)("p",null,"After understanding the basics of Solidity, we will cover the basics of creating complete programs using contracts, interfaces, and libraries."),(0,i.kt)("p",null,"Along the way, you will go deeper into using the command line-based smart contract development tooling. Additionally, you will build rudimentary web DApps."),(0,i.kt)("h3",{id:"special-topics"},"Special Topics"),(0,i.kt)("p",null,"Once we can build and deploy basic smart contracts, we will learn various special topics and methods which will help improve our contracts."),(0,i.kt)("h3",{id:"secure-smart-contracts"},"Secure Smart Contracts"),(0,i.kt)("p",null,"After understanding some useful methods and concepts, we will briefly look into testing our smart contracts. Testing is essential because updating smart contract codes is difficult without certain types of design patterns because they are immutable and because of their potential to hold large amounts of funds. In addition, testing reduces our potential headaches to prevent bugs from occurring before deploying the contract."),(0,i.kt)("h3",{id:"smart-contracts-and-the-wider-web3-world"},"Smart Contracts and the Wider Web3 World"),(0,i.kt)("p",null,"Congratulations! You know how to build basic smart contracts. But what about the wider web3 world? In this section, you will learn how to build more secure contracts, create fungible and non-fungible tokens, and interact with other contracts already deployed to an Ethereum Network."),(0,i.kt)("h2",{id:"how-to-get-the-most-out-of-this-course"},"How to get the most out of this course"),(0,i.kt)("p",null,"Learning a new skill set is fun but requires constant practice and engagement. Learning with others in a community can turbocharge your progress."),(0,i.kt)("p",null,"To find a community:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"join our ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/PqVhBKxSKb"},"Discord")),(0,i.kt)("li",{parentName:"ul"},"join a meetup to meet others like ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/ethbuilders/"},"EthBuilders"),"."),(0,i.kt)("li",{parentName:"ul"},"or find a meetup in your region via the ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/buidl/"},"BUIDL Network"),".")),(0,i.kt)("p",null,"You will find exciting ways to approach the material by asking the right questions. In addition, when answering other developers' questions, you will find interesting ways to connect the topics."),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"This course is meant to be an introduciton, not definitive guide."),(0,i.kt)("p",null,"We suggest after finishing this course you revisit the materials with other resources like the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/v0.8.17/"},"The Offical Solidity Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cryptozombies.io/"},"CryptoZombies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://solidity-by-example.org/"},"Solidity-by-example.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys-Academy/Blockchain-Developer-Bootcamp"},"ConsenSys Academy Bootcamp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.scaffoldeth.io/scaffold-eth/"},"Scaffold-ETH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kernel.community/en/"},"Kernal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://school-of-code.vercel.app/lessons"},"School of Code"))),(0,i.kt)("h2",{id:"contact"},"Contact"),(0,i.kt)("p",null,"Have any suggestions, questions, comments, or requests for content?",(0,i.kt)("br",{parentName:"p"}),"\n","Feel free to open a Github ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tesla809/BuildersETH/issues"},"issue"),"."),(0,i.kt)("p",null,"Want to submit to the blog, lesson, lesson fix, or image/logo?",(0,i.kt)("br",{parentName:"p"}),"\n","Submit a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tesla809/BuildersETH/pulls"},"github pull request"),"."),(0,i.kt)("p",null,"Want to contact the website admin directly?",(0,i.kt)("br",{parentName:"p"}),"\n","Message: ",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@web3cryptodev.com"},"contact@web3cryptodev.com")),(0,i.kt)("p",null,"Any and all feedback is appreciated <3!"),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"Assume this code is not production-grade and will fail. The author is not responsible for any fallout from the code posted here. This site and its content are merely for educational purposes only."),(0,i.kt)("p",null,"If you enjoy this site:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"please bookmark"),(0,i.kt)("li",{parentName:"ul"},"share it with a friend"),(0,i.kt)("li",{parentName:"ul"},"post about it on Twitter or on ",(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/ethdev"},"reddit.com/r/ethdev"))))}m.isMDXComponent=!0}}]);