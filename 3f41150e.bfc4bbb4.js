(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(190)),c={},i={id:"WebFramework/Route",isDocsHomePage:!1,title:"Route",description:"Route",source:"@site/docs/WebFramework/Route.md",permalink:"/csbook/docs/WebFramework/Route",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/WebFramework/Route.md"},l=[{value:"Route",id:"route",children:[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"RoutingEngine \u5de5\u4f5c\u6b65\u9aa4",id:"routingengine-\u5de5\u4f5c\u6b65\u9aa4",children:[]},{value:"Route Table",id:"route-table",children:[]},{value:"\u5982\u4f55\u5b9e\u73b0\u8def\u7531\u914d\u7f6e?",id:"\u5982\u4f55\u5b9e\u73b0\u8def\u7531\u914d\u7f6e",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"route"},"Route"),Object(a.b)("h3",{id:"\u529f\u80fd"},"\u529f\u80fd"),Object(a.b)("p",null,"URL\u4e0e\u7269\u7406\u6587\u4ef6\u4e4b\u95f4\u7684\u6620\u5c04,\u8def\u7531\u4f7f\u6211\u4eec\u80fd\u591f\u5b9a\u4e49\u6620\u5c04\u5230\u8bf7\u6c42\u5904\u7406\u7a0b\u5e8f\u7684 URL \u6a21\u5f0f."),Object(a.b)("p",null,"\u6bcf\u4e2aMVC\u7a0b\u5e8f\u5fc5\u987b\u6709\u4e00\u4e2a\u8def\u7531,"),Object(a.b)("p",null,"URL \u53ef\u4ee5\u6620\u5c04\u5230 MVC\u4e2d\u7684\u63a7\u5236\u5668\u548c\u64cd\u4f5c\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"http://domain/students -> http://domain/studentsinfo.aspx\n")),Object(a.b)("h3",{id:"routingengine-\u5de5\u4f5c\u6b65\u9aa4"},"RoutingEngine \u5de5\u4f5c\u6b65\u9aa4"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u672c\u5730\u8def\u7531\u6587\u4ef6\u914d\u7f6e"),Object(a.b)("li",{parentName:"ol"},"\u63a5\u6536Request"),Object(a.b)("li",{parentName:"ol"},"\u4e0e\u672c\u5730\u8def\u7531\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u5339\u914d"),Object(a.b)("li",{parentName:"ol"},"\u6267\u884c\u63a7\u5236\u5668\u548c\u63a7\u5236\u5668\u64cd\u4f5c"),Object(a.b)("li",{parentName:"ol"},"\u8fd4\u56de\u54cd\u5e94,\u5305\u62ec200,404\u7b49\u7b49")),Object(a.b)("h3",{id:"route-table"},"Route Table"),Object(a.b)("p",null,"\u8def\u7531\u914d\u7f6e\u6587\u4ef6\u89e3\u6790\u540e\u7684\u8868, \u5305\u542bRoute, URL Pattern, Handler"),Object(a.b)("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u8def\u7531\u914d\u7f6e"},"\u5982\u4f55\u5b9e\u73b0\u8def\u7531\u914d\u7f6e?"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"title='routeRegister.js'",title:"'routeRegister.js'"}),'http://localhost:1234/controller/action/id\n\ntype = {\n    resource,\n}\n//\u793a\u4f8b\nclass routes{\n    register(){}\n    route_table(){}\n}\nroutes.register([\n    {\n        name:"www",\n        type:"resource",\n        domain:"www.hello.com",\n        route:"/",\n        controller:"wwwController",\n        middleware:""\n    },\n    {\n        name:"book",\n        type:"resource",\n        domain:"book.hello.com",\n        route:"/",\n        controller:"bookController"\n    }\n]);\n')))}b.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);