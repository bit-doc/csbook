(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(184)),b={title:"Data Representation"},c={id:"dataStorage/Representation",isDocsHomePage:!1,title:"Data Representation",description:"- Data and Computers",source:"@site/docs/dataStorage/Representation.md",permalink:"/csbook/docs/dataStorage/Representation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dataStorage/Representation.md",sidebar:"someSidebar",previous:{title:"Number Systems",permalink:"/csbook/docs/dataStorage/NumberSystems"},next:{title:"Storing text in binary",permalink:"/csbook/docs/dataStorage/StoringTextInBinary"}},l=[{value:"Binary",id:"binary",children:[]},{value:"Decimal",id:"decimal",children:[]},{value:"Hexadecimal",id:"hexadecimal",children:[]},{value:"\u8fdb\u5236\u8f6c\u6362",id:"\u8fdb\u5236\u8f6c\u6362",children:[]}],o={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data and Computers"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Without data, computers would be useless. "),Object(i.b)("li",{parentName:"ul"},"different types of data, including:Numbers,Text, Audio,Images and graphics,Video. all this data is stored as binary digits."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Binary Representations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Representing Numeric Data"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Representing Negative Values",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Signed-Magnitude Representation"),Object(i.b)("li",{parentName:"ul"},"Fixed-Sized Numbers"))),Object(i.b)("li",{parentName:"ul"},"Number Overflow"),Object(i.b)("li",{parentName:"ul"},"Representing Real Numbers"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Representing Text"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ASCII Character Set"),Object(i.b)("li",{parentName:"ul"},"The Unicode Character Set"),Object(i.b)("li",{parentName:"ul"},"Text Compression"),Object(i.b)("li",{parentName:"ul"},"Keyword Encoding"),Object(i.b)("li",{parentName:"ul"},"Run-Length Encoding"),Object(i.b)("li",{parentName:"ul"},"Huffman Encoding"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Representing Audio Information"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Audio Formats",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The MP3 Audio Format"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Representing Images and Graphics"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Representing Color"),Object(i.b)("li",{parentName:"ul"},"Digitized Images and Graphics"),Object(i.b)("li",{parentName:"ul"},"Vector Representation of Graphics"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Representing Video"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Video Codecs")))),Object(i.b)("h3",{id:"binary"},"Binary"),Object(i.b)("h3",{id:"decimal"},"Decimal"),Object(i.b)("h3",{id:"hexadecimal"},"Hexadecimal"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"What is Hexadecimal?"),"\nHexadecimal is a base 16 number system used in computing."),Object(i.b)("p",null,"a big benefit of hexadecimals is that they are easy to convert to binary"),Object(i.b)("p",null,"In comparison, the counting we learnt at primary school is actually a base 10 number system (often called decimal or denary), and binary is base 2."),Object(i.b)("p",null,"Base 16 means that each position in a hexadecimal number comprises of one of 16 options."),Object(i.b)("p",null,"Hex looks odd because we don\u2019t have 16 original number symbols that we can use to represent these 16 possible options, so we have to use both numbers and letters from the alphabet."),Object(i.b)("p",null,"E.g. ",Object(i.b)("strong",{parentName:"p"},"We use \u201cA\u201d to represent ten.  We cannot use \u201c10\u201d to represent ten, because 1 and 0 are symbols that have already been used in our number system to represent other numbers"),"."),Object(i.b)("p",null,"Symbols available for use in each number system:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Hexadecimal(base 16) Decimal(base 10) Binary(base 2)        \n0   0   0\n1   1   1\n2   2\n3   3\n4   4\n5   5\n6   6\n7   7\n8   8\n9   9\nA\nB\nC\nD\nE\nF\n")),Object(i.b)("p",null,"Using a base 16 number system means that ",Object(i.b)("strong",{parentName:"p"},"large numbers can be achieved using less positional spaces"),".  Compare this to binary (base 2) which requires lots of bits (positional spaces) to create even small numbers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Base 2: 255\n\n128 64  32  16  8   4   2   1\n2^9 2^8 2^74 2^6 2^5 2^4 2^3 2^2 2^1 2^0\n1   1   1   1   1   1   1   1\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Base 10: 255\n100 10  1\n2   5   5\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Base 16: 255\n16  1\nF   F\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5341\u516d\u8fdb\u5236\u7684\u5e94\u7528\u573a\u666f")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTML/CSS\u989c\u8272\u4ee3\u7801\n\u5341\u516d\u8fdb\u5236\u6570\u5b57\u901a\u5e38\u7528\u4e8e\u8868\u793aHTML\u6216CSS\u4e2d\u7684\u989c\u8272\u3002\n6 \u4f4d\u5341\u516d\u8fdb\u5236\u989c\u8272\u4ee3\u7801\u5e94\u5206\u4e09\u90e8\u5206\u8003\u8651",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  - \u524d\u4e24\u4f4d\u6570\u5b57\u8868\u793a\u7ea2\u8272\uff08\u6700\u5927 FF \u6216 255\uff09\u7684\u91cf\n  - \u63a5\u4e0b\u6765\u7684\u4e24\u4f4d\u6570\u5b57\u8868\u793a\u989c\u8272\u4e2d\u7684\u7eff\u8272\u91cf\uff08\u6700\u5927 FF \u6216 255\uff09\n  - \u6700\u540e\u4e24\u4f4d\u6570\u5b57\u8868\u793a\u84dd\u8272\uff08\u6700\u5927 FF \u6216 255\uff09\n")),"  \u901a\u8fc7\u6539\u53d8\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u5f3a\u5ea6\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u51e0\u4e4e\u4efb\u4f55\u989c\u8272\u3002\n\u4f8b\u5982\uff0c\u6a59\u8272\u53ef\u4ee5\u8868\u793a\u4e3a#FFA500\uff0c\u5373\uff08255 \u7ea2\u8272\u3001165 \u7eff\u8272\u30010 \u84dd\u8272"),Object(i.b)("li",{parentName:"ul"},"MAC \u5730\u5740\n\u5a92\u4f53\u8bbf\u95ee\u63a7\u5236 \uff08MAC\uff09 \u5730\u5740\u662f\u4e00\u4e2a\u6570\u5b57\uff0c\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u4e92\u8054\u7f51\u4e0a\u7684\u8bbe\u5907\u3002\nMAC \u5730\u5740\u4e0e\u8bbe\u5907\u5185\u90e8\u7684\u7f51\u7edc\u63a5\u53e3\u5361 \uff08NIC\uff09 \u76f8\u5173.\n\u4f8b\u5982 D5-BE-E9-8D-44-9C\n\u4ee5\u5341\u516d\u8fdb\u5236\u683c\u5f0f\u8868\u793aMAC \u5730\u5740\u4f7f\u5176\u66f4\u6613\u4e8e\u9605\u8bfb\u548c\u4f7f\u7528\u3002"),Object(i.b)("li",{parentName:"ul"},"\u7a0b\u5e8f\u96c6\u4ee3\u7801\u548c\u5185\u5b58\u8f6c\u50a8\n\u5341\u516d\u8fdb\u5236\u662f\u6709\u76ca\u7684 \uff08\u8d85\u8fc7\u4e8c\u8fdb\u5236\uff09\uff0c \u56e0\u4e3a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b83\u4eec\u66f4\u6613\u4e8e\u4f7f\u7528\uff0c\u4f7f\u7528\u901f\u5ea6\u66f4\u5feb\uff0c\u5360\u7528\u7684\u5c4f\u5e55\u7a7a\u95f4\u66f4\u5c11"),Object(i.b)("li",{parentName:"ul"},"\u9519\u8bef\u4e0d\u592a\u53ef\u80fd\uff0c\u66f4\u5bb9\u6613\u8ddf\u8e2a/\u8c03\u8bd5")))),Object(i.b)("h2",{id:"\u8fdb\u5236\u8f6c\u6362"},"\u8fdb\u5236\u8f6c\u6362"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Converting Binary to Decimal"),"\n",Object(i.b)("strong",{parentName:"p"},"Converting Binary to Hexadecimal"),"\n",Object(i.b)("strong",{parentName:"p"},"Converting Decimal to Binary"),"\n",Object(i.b)("strong",{parentName:"p"},"Converting Decimal to Hexadecimal"),"\n",Object(i.b)("strong",{parentName:"p"},"Converting Hexadecimal to Binary"),"\n",Object(i.b)("strong",{parentName:"p"},"Converting Hexadecimal to Decimal")))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(b,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);