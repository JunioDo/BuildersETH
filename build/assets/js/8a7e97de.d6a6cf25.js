"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[223],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,b=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),i="tabItem_OmH5";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),r=a(7294),i=a(2389),l=a(7392),s=a(7094),o=a(2466),u=a(6010),p="tabList_uSqn",d="tabItem_LplD";function m(e){var t,a,i,m=e.lazy,c=e.block,b=e.defaultValue,g=e.values,y=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===b?b:null!=(t=null!=b?b:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),w=T.tabGroupChoices,S=T.setTabGroupChoices,x=(0,r.useState)(N),I=x[0],D=x[1],Z=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var E=w[y];null!=E&&E!==I&&v.some((function(e){return e.value===E}))&&D(E)}var M=function(e){var t=e.currentTarget,a=Z.indexOf(t),n=v[a].value;n!==I&&(j(t),D(n),null!=y&&S(y,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=Z.indexOf(e.currentTarget)+1;a=Z[n]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;a=Z[r]||Z[Z.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},k)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:O,onFocus:M,onClick:M},i,{className:(0,u.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),m?(0,r.cloneElement)(f.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function c(e){var t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},9174:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=a(9877),s=a(2360),o=["components"],u={sidebar_position:6},p="Solidity Primitive Data Types - Value Types",d={unversionedId:"solidity-101/language-building-blocks/Data-Types/solidity-primitives-basics",id:"solidity-101/language-building-blocks/Data-Types/solidity-primitives-basics",title:"Solidity Primitive Data Types - Value Types",description:"Primitive Data Types Overview",source:"@site/docs/solidity-101/2-language-building-blocks/2-Data-Types/8-solidity-primitives-basics.mdx",sourceDirName:"solidity-101/2-language-building-blocks/2-Data-Types",slug:"/solidity-101/language-building-blocks/Data-Types/solidity-primitives-basics",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/solidity-primitives-basics",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/solidity-101/2-language-building-blocks/2-Data-Types/8-solidity-primitives-basics.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/introduction-variable-and-data-types"},next:{title:"Introduction",permalink:"/docs/solidity-101/language-building-blocks/Variables-Prefixes/introduction-variables-prefixes"}},m={},c=[{value:"Primitive Data Types Overview",id:"primitive-data-types-overview",level:2},{value:"Value Types Defined",id:"value-types-defined",level:3},{value:"Structing Data in Context",id:"structing-data-in-context",level:3},{value:"Booleans",id:"booleans",level:3},{value:"Strings",id:"strings",level:3},{value:"String escape characters",id:"string-escape-characters",level:3},{value:"Integers",id:"integers",level:3},{value:"Unsigned Integers",id:"unsigned-integers",level:3},{value:"Size, integers and unsigned integers",id:"size-integers-and-unsigned-integers",level:2},{value:"Maximum and Minimum Numbers",id:"maximum-and-minimum-numbers",level:2},{value:"Bytes",id:"bytes",level:2},{value:"Address",id:"address",level:2},{value:"Default assignment",id:"default-assignment",level:2},{value:"There Are No Decimals in Solidity",id:"there-are-no-decimals-in-solidity",level:3},{value:"Doing Decimal Math in Solidity",id:"doing-decimal-math-in-solidity",level:4}],b={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solidity-primitive-data-types---value-types"},"Solidity Primitive Data Types - Value Types"),(0,i.kt)("h2",{id:"primitive-data-types-overview"},"Primitive Data Types Overview"),(0,i.kt)("p",null,"In a high-level programming language, a primitive data type is the simplest building block for data. They are data types that cannot be reduced into a simpler form. Primary data types are the building blocks for other data types."),(0,i.kt)("p",null,"Usually, these at least include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"certain types of number representations"),(0,i.kt)("li",{parentName:"ul"},"strings for character representation"),(0,i.kt)("li",{parentName:"ul"},"Booleans for true or false representation")),(0,i.kt)("h3",{id:"value-types-defined"},"Value Types Defined"),(0,i.kt)("p",null,"This section will cover ",(0,i.kt)("strong",{parentName:"p"},"value types"),"."),(0,i.kt)("p",null,"A value type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is the actual value."),(0,i.kt)("li",{parentName:"ul"},"stores its data directly on the memory it owns."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"passes by value")," aka, the variable's values are ",(0,i.kt)("strong",{parentName:"li"},"copied")," when they are used as function arguments or in assignments. These copies don't affect the original data.")),(0,i.kt)("p",null,"These are different from ",(0,i.kt)("strong",{parentName:"p"},"reference types"),"."),(0,i.kt)("p",null,"Reference types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Reference_(computer_science)"},"references")," data at another location, aka it ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pointer_(computer_programming)"},"points")," to another spot.")),(0,i.kt)("p",null,"We will cover reference types and memory in the following lessons."),(0,i.kt)("h3",{id:"structing-data-in-context"},"Structing Data in Context"),(0,i.kt)("p",null,"Why are these important? To write a program, you must define the type of data you will store and manipulate. For example, will you hold numbers, words, a collections of these, or some custom data type etc.?"),(0,i.kt)("p",null,"A significant part of understanding how to design and code programs centers around:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"understanding which types of data you'd want to manipulate."),(0,i.kt)("li",{parentName:"ul"},"and how to manipulate that data.")),(0,i.kt)("p",null,"Once our data is structured correctly, algorithms are used to manipulate the data. ",(0,i.kt)("strong",{parentName:"p"},"Algorithms")," are a series of instructions to solve a specific type of problem efficiently. It's worth noting that certain types of problems are best solved with particular data types and algorithms. The study of this is covered in a course on data structure and algorithms."),(0,i.kt)("p",null,"Furthermore, certain recurring business logic problems are best solved with repeatable patterns. These best practices are called ",(0,i.kt)("strong",{parentName:"p"},"design patterns"),", and their application to web3 development will be covered in the future."),(0,i.kt)("h3",{id:"booleans"},"Booleans"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Boolean_data_type"},"Booleans")," are a form of data with only two possible states: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". These are useful for control flow of a program."),(0,i.kt)("p",null,"Fun fact: Computers store and represent numerical data using ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1GSjbWt0c9M"},"Boolean Math"),"."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Booleans {\n    // booleans - true or false\n    bool public boo = true;\n    bool public foo = false;\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class Booleans {\n    // boleans - true or false\n    let x = true;\n    let y = false;\n}\n")))),(0,i.kt)("h3",{id:"strings"},"Strings"),(0,i.kt)("p",null,"Strings are a sequence of characters, either as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Literal_(computer_programming)"},"literal constant")," or as some kind of variable."),(0,i.kt)("p",null,"In both Solidity and JavaScript, strings are immtuable. The word ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello"')," is fixed. If you change it to ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello World"')," is a totally different word."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Strings {\n    bool public str1 = "Hello, World";\n}\n'))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'class Strings {\n  let str = "Hello, World";\n}\n')))),(0,i.kt)("h3",{id:"string-escape-characters"},"String escape characters"),(0,i.kt)("p",null,"There are escape characters as well. Note the capital letter ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is a stand in, and can represent any character as defined in the description."),(0,i.kt)("p",null,"With the exception of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#hexadecimal_numbers"},"hexadecimal represenation"),", these are all the same in JavaScript."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.techtarget.com/whatis/definition/hexadecimal"},"Hexcadecimal values")," are base-16 number systems running from 0-9 and A-F. You probably have seen them while using CSS."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\n"),(0,i.kt)("td",{parentName:"tr",align:null},"Starts a new line.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\"),(0,i.kt)("td",{parentName:"tr",align:null},"Backslash")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\n"),(0,i.kt)("td",{parentName:"tr",align:null},"Starts a new line.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\'"),(0,i.kt)("td",{parentName:"tr",align:null},"Single Quote")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'\\"'),(0,i.kt)("td",{parentName:"tr",align:null},"Double Quote")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\b"),(0,i.kt)("td",{parentName:"tr",align:null},"Backspace")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\f"),(0,i.kt)("td",{parentName:"tr",align:null},"Form Feed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\r"),(0,i.kt)("td",{parentName:"tr",align:null},"carriage return")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\t"),(0,i.kt)("td",{parentName:"tr",align:null},"tab")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\v"),(0,i.kt)("td",{parentName:"tr",align:null},"vertical tab")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\xNN"),(0,i.kt)("td",{parentName:"tr",align:null},"Represents hexadecimal values and inserts appropriate bytes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\uNNNN"),(0,i.kt)("td",{parentName:"tr",align:null},"Represents Unicode value and inserts UTF-8 sequence.")))),(0,i.kt)("h3",{id:"integers"},"Integers"),(0,i.kt)("p",null,"Integers are ..."),(0,i.kt)("p",null,"Negative numbers are allowed for int types.\nLike uint, different ranges are available from int8 to int256"),(0,i.kt)("p",null,"int256 ranges from -2 ",(0,i.kt)("strong",{parentName:"p"}," 255 to 2 ")," 255 - 1\nint128 ranges from -2 ",(0,i.kt)("strong",{parentName:"p"}," 127 to 2 ")," 127 - 1"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Integers {\n    // integers\n    // Specify variables from 8 bytes to 256 bytes\n    int8 public i8 = -1;\n    int public i256 = 1234;\n    int public i = -1234; // int is an alias for int256\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class Numbers {\n  // Add code for primitive values\n  // JavaScript only has a Number Type\n  // No memory specfic number types\n}\n")))),(0,i.kt)("h3",{id:"unsigned-integers"},"Unsigned Integers"),(0,i.kt)("p",null,"uint stands for unsigned integer, meaning non negative integers\ndifferent sizes are available\nuint8 ranges from 0 to 2 ",(0,i.kt)("strong",{parentName:"p"}," 8 - 1\nuint16 ranges from 0 to 2 ")," 16 - 1\n...\nuint256 ranges from 0 to 2 ","*","*"," 256 - 1"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract UnsignedIntegers {\n    // These are unsigned, meaning no negatives (-) value.\n    // So they are only positive (+)\n    uint8 public u8 = 1;\n    uint public u256 = 456;\n    uint public u = 123; // uint is short hand for uint256\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class Numbers {\n  // Add code for primitive values\n  // JavaScript only has one  Number Type\n  // no concept of unsigned integer\n  // Add BigInt type - numbers of arbitray size\n}\n")))),(0,i.kt)("h2",{id:"size-integers-and-unsigned-integers"},"Size, integers and unsigned integers"),(0,i.kt)("p",null,"The table below shows the built-in integer types in Solidity."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Length"),(0,i.kt)("th",{parentName:"tr",align:null},"Signed"),(0,i.kt)("th",{parentName:"tr",align:null},"Unsigned"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"int8"),(0,i.kt)("td",{parentName:"tr",align:null},"uint8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"int16"),(0,i.kt)("td",{parentName:"tr",align:null},"uint16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"32-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"int32"),(0,i.kt)("td",{parentName:"tr",align:null},"uint32")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"64-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"128-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"int128"),(0,i.kt)("td",{parentName:"tr",align:null},"uint128")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"256-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"int256"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"256-bit alias"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"uint")))),(0,i.kt)("h2",{id:"maximum-and-minimum-numbers"},"Maximum and Minimum Numbers"),(0,i.kt)("p",null,"Maximum numbers and minimum numbers"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract MinMax {\n    // minimum and maximum of int\n    // max int = ENTER NUMBER\n    // min int = ENTER NUMBER\n    int public minInt = type(int).min;\n    int public maxInt = type(int).max;\n\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class MinMax {\n  let x = Number.MIN_VALUE; // returns SMALLEST number in JavaScript -> 5e-324\n  let x = Number.MAX_VALUE; // returns LARGEST number in JavaScript -> 1.7976931348623157e+308\n}\n")))),(0,i.kt)("h2",{id:"bytes"},"Bytes"),(0,i.kt)("p",null,"In Solidity, the data type byte represent a sequence of bytes.\nSolidity presents two type of bytes types :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fixed-sized byte arrays"),(0,i.kt)("li",{parentName:"ul"},"dynamically-sized byte arrays.")),(0,i.kt)("p",null,"The term bytes in Solidity represents a dynamic array of bytes.\nIt\u2019s a shorthand for byte[]."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract MinMax {\n    // bytes\n    bytes1 a = 0xb5; //  [10110101]\n    bytes1 b = 0x56; //  [01010110]\n\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class ArrayBuffer {\n    // create a buffer of 8 bytes\n    const buffer = new ArrayBuffer(8);\n    const view = new Int32Array(buffer);\n\n    // Learn more about ArrayBuffers here:\n    // https://javascript.info/arraybuffer-binary-arrays\n}\n")))),(0,i.kt)("h2",{id:"address"},"Address"),(0,i.kt)("p",null,"Addresses are a special data type specific to Solidity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ADD WHY")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Addresses {\n    // Specific to Solidity: addresses\n    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;\n\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class NoAddresses {\n  // JavaScript doesn't have a concept of Addresses!\n  // \ud83e\udd37\n}\n")))),(0,i.kt)("h2",{id:"default-assignment"},"Default assignment"),(0,i.kt)("p",null,"Unassigned values in Solidity are assigned default values."),(0,i.kt)("p",null,"A note on default values ..."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Primitives {\n    //...\n    // Default values\n    bool public defaultBoo; // false\n    uint public defaultUint; // 0\n    int public defaultInt; // 0\n    address public defaultAddr; // 0x0000000000000000000000000000000000000000\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class VariablesOverview {\n  // add code for default assignment of values\n}\n")))),(0,i.kt)("h3",{id:"there-are-no-decimals-in-solidity"},"There Are No Decimals in Solidity"),(0,i.kt)("p",null,"Notice that there are no decimals in Solidity! In computing, these are called ",(0,i.kt)("strong",{parentName:"p"},"Fixed Point Numbers"),"."),(0,i.kt)("p",null,"The reason behind this is because of the limits of fixed point math on the EVM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ADD WHY")),(0,i.kt)("h4",{id:"doing-decimal-math-in-solidity"},"Doing Decimal Math in Solidity"),(0,i.kt)("p",null,"So, how do we calculate decimals and fractional numbers. We will cover doing fixed point math more in depth in a future post.\nFor now, here is a brief summary."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract DecimalMath {\n    //...\n    // add work arounds\n    // openzeppelin contracts?\n}\n"))),(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class DecimalMath {\n  // easier for JavaScript\n  // add code\n}\n")))))}g.isMDXComponent=!0}}]);