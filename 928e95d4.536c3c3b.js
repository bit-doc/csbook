(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(179)),c={},a={id:"Deno/RedisClient/RedisImpl",isDocsHomePage:!1,title:"RedisImpl",description:"RedisImpl",source:"@site/docs/Deno/RedisClient/RedisImpl.md",permalink:"/csbook/docs/Deno/RedisClient/RedisImpl",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Deno/RedisClient/RedisImpl.md"},s=[{value:"RedisImpl",id:"redisimpl",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"redisimpl"},"RedisImpl"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"title= RedisImpl",title:"",RedisImpl:!0}),'class RedisImpl {\n    get isConnected(){}\n    constructor(private connection: RedisConnection}\n\n    hlen(key: string) {\n        return this.execIntegerReply("HLEN", key);\n    }\n\n    hmget(key: string, ...fields: string[]) {\n        return this.execArrayReply<BulkString>("HMGET", key, ...fields);\n    }\n\n    hmset(key: string, ...field_values: string[]) {\n        return this.execStatusReply("HMSET", key, ...field_values);\n    }\n    //... \u6bcf\u4e2a\u65b9\u6cd5\u5bf9\u5e94\u4e00\u4e2aRedis\u547d\u4ee4\n}\n')))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?i.a.createElement(m,a(a({ref:t},l),{},{components:n})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);