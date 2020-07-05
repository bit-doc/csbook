(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{169:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return a})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return u}));var r=t(2),o=t(6),i=(t(0),t(179)),c={},a={id:"Deno/RedisClient/RedisConnection",isDocsHomePage:!1,title:"RedisConnection",description:"RedisConnection",source:"@site/docs/Deno/RedisClient/RedisConnection.md",permalink:"/csbook/docs/Deno/RedisClient/RedisConnection",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Deno/RedisClient/RedisConnection.md"},s=[{value:"RedisConnection",id:"redisconnection",children:[]}],p={rightToc:s};function u(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"redisconnection"},"RedisConnection"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"title=Connect\u8fde\u63a5\u65b9\u6cd5\u5f97\u5177\u4f53\u5b9e\u73b0",title:"Connect\u8fde\u63a5\u65b9\u6cd5\u5f97\u5177\u4f53\u5b9e\u73b0"}),'private thunkifyConnect(\n    hostname: string,\n    port: string | number,\n    options: RedisConnectionOptions,\n  ): () => Promise<RedisConnection> {\n    return async () => {\n      const dialOpts: Deno.ConnectOptions = {\n        hostname,\n        port: parsePortLike(port),\n      };\n      if (!Number.isSafeInteger(dialOpts.port)) {\n        throw new Error("deno-redis: opts.port is invalid");\n      }\n      const conn: Deno.Conn = options?.tls\n        ? await Deno.connectTls(dialOpts)\n        : await Deno.connect(dialOpts);\n\n      if (options.name) this.name = options.name;\n      if (options.maxRetryCount) this.maxRetryCount = options.maxRetryCount;\n\n      this.closer = conn;\n      this.reader = new BufReader(conn);\n      this.writer = new BufWriter(conn);\n      this.executor = muxExecutor(this, this.maxRetryCount > 0);\n\n      this._isClosed = false;\n      this._isConnected = true;\n\n      try {\n        if (options?.password != null) {\n          await this.authenticate(options.password);\n        }\n        if (options?.db) await this.selectDb(options.db);\n      } catch (error) {\n        this.close();\n        throw error;\n      }\n\n      return this as RedisConnection;\n    };\n  }\n')))}u.isMDXComponent=!0},179:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=o.a.createContext({}),u=function(n){var e=o.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=u(n.components);return o.a.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),l=u(t),f=r,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return t?o.a.createElement(m,a(a({ref:e},p),{},{components:t})):o.a.createElement(m,a({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:r,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);