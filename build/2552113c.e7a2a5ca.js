(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var l=a(2),n=a(6),r=(a(0),a(190)),b={},i={id:"Deno/index",isDocsHomePage:!1,title:"index",description:"Deno",source:"@site/docs/Deno/index.md",permalink:"/csbook/docs/Deno/index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Deno/index.md",sidebar:"someSidebar",previous:{title:"\u6682\u65e0\u5185\u5bb9",permalink:"/csbook/docs/null"},next:{title:"\u6682\u65e0\u5185\u5bb9",permalink:"/csbook/docs/null"}},c=[{value:"Deno",id:"deno",children:[{value:"\u7d22\u5f15",id:"\u7d22\u5f15",children:[]},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"deno"},"Deno"),Object(r.b)("h3",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Basic"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Data",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/csbook/docs/Deno/Data"}),"Text to Binary")))),Object(r.b)("li",{parentName:"ul"},"Buffer ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"concept ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7f13\u548c\u51b2\u51fb\u533a\u57df\uff0c\u7528\u4e8e\u5904\u7406\u901f\u5ea6\u5e73\u8861, \u8d77\u5230\u6d41\u91cf\u6574\u5f62\u7684\u4f5c\u7528\u3002\u4f8b\u5982\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u6a21\u5f0f\u4e2d\uff0c\u7f13\u5b58\u751f\u4ea7\u5927\u4e8e\u6d88\u8d39\u8fc7\u7a0b\u7684\u4e2d\u95f4\u5730\u5e26\u3002"))),Object(r.b)("li",{parentName:"ul"},"\u7f13\u51b2\u533a\u7c7b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ArrayBuffer: \u7528\u6765\u8868\u793a\u901a\u7528\u7684\u3001\u56fa\u5b9a\u957f\u5ea6\u7684\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u7f13\u51b2\u533a"),Object(r.b)("li",{parentName:"ul"},"DataView:\u4e8c\u8fdb\u5236\u5185\u5b58\u7f13\u51b2\u533a\u89c6\u56fe"),Object(r.b)("li",{parentName:"ul"},"Uint8Array: 8\u4f4d\u65e0\u7b26\u53f7\u6574\u578b\u6570\u7ec4-\u7f13\u51b2\u533a\u64cd"),Object(r.b)("li",{parentName:"ul"},"TextEncoder:\u5c06\u5b57\u7b26\u4e32\u8f6c\u6210\u4e8c\u8fdb\u5236\u7f13\u51b2\u533a\u91cc\u7684\u6570\u636e\u6d41"),Object(r.b)("li",{parentName:"ul"},"TextDecoder:\u5c06\u4e8c\u8fdb\u5236\u7f13\u51b2\u533a\u91cc\u7684\u6570\u636e\u6d41\u8f6c\u6210\u5b57\u7b26\u4e32"))))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Architecture"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Deno and Linux analogy(\u540d\u79f0\u5bf9\u6bd4)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Processes"),Object(r.b)("li",{parentName:"ul"},"Syscalls"),Object(r.b)("li",{parentName:"ul"},"File descriptors (fd)"),Object(r.b)("li",{parentName:"ul"},"Scheduler"),Object(r.b)("li",{parentName:"ul"},"/proc/\\$\\$/stat"))),Object(r.b)("li",{parentName:"ul"},"Resources"),Object(r.b)("li",{parentName:"ul"},"Metrics"),Object(r.b)("li",{parentName:"ul"},"Schematic diagram"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Environment "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Environment Variables",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"DENO_DIR :            Set the cache directory"),Object(r.b)("li",{parentName:"ul"},"DENO_INSTALL_ROOT :    Set deno install's output directory\n(defaults to $HOME/.deno/bin)"),Object(r.b)("li",{parentName:"ul"},"NO_COLOR    :          Set to disable color"),Object(r.b)("li",{parentName:"ul"},"HTTP_PROXY  :          Proxy address for HTTP requests\n(module downloads, fetch)"),Object(r.b)("li",{parentName:"ul"},"HTTPS_PROXY  :         Proxy address for HTTPS requests\n(module downloads, fetch)"))),Object(r.b)("li",{parentName:"ul"},"Deno Command line interface",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"bundle:         Bundle module and dependencies into single file"),Object(r.b)("li",{parentName:"ul"},"cache:           Cache the dependencies"),Object(r.b)("li",{parentName:"ul"},"completions:     Generate shell completions"),Object(r.b)("li",{parentName:"ul"},"doc:             Show documentation for a - module"),Object(r.b)("li",{parentName:"ul"},"eval:            Eval script"),Object(r.b)("li",{parentName:"ul"},"fmt:            Format source files"),Object(r.b)("li",{parentName:"ul"},"help  :          Prints this message or the help of the given subcommand(s)"),Object(r.b)("li",{parentName:"ul"},"info  :          Show info about cache or - info related to source file"),Object(r.b)("li",{parentName:"ul"},"install  :       Install script as an executable"),Object(r.b)("li",{parentName:"ul"},"lint    :        Lint source files"),Object(r.b)("li",{parentName:"ul"},"repl   :         Read Eval Print Loop"),Object(r.b)("li",{parentName:"ul"},"run    :         Run a program given a filename or url to the module. Use '-' as a filename to read from stdin."),Object(r.b)("li",{parentName:"ul"},"test     :       Run tests"),Object(r.b)("li",{parentName:"ul"},"types   :        Print runtime TypeScript declarations"),Object(r.b)("li",{parentName:"ul"},"upgrade :        Upgrade deno executable to given version"))),Object(r.b)("li",{parentName:"ul"},"Permissions",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"-A, --allow-all Allow all permissions. This disables all security."),Object(r.b)("li",{parentName:"ul"},"--allow-env Allow environment access for things like getting and setting of environment variables."),Object(r.b)("li",{parentName:"ul"},"--allow-hrtime Allow high resolution time measurement. High resolution time can be used in timing attacks and fingerprinting."),Object(r.b)("li",{parentName:"ul"},"--allow-net=allow-net Allow network access. You can specify an optional, comma separated list of domains to provide a allow-list of allowed domains."),Object(r.b)("li",{parentName:"ul"},"--allow-plugin Allow loading plugins. Please note that --allow-plugin is an unstable feature."),Object(r.b)("li",{parentName:"ul"},"--allow-read=allow-read Allow file system read access. You can specify an optional, comma separated list of directories or files to provide a allow-list of allowed file system access."),Object(r.b)("li",{parentName:"ul"},"--allow-run Allow running subprocesses. Be aware that subprocesses are not run in a sandbox and therefore do not have the same security restrictions as the deno process. Therefore, use with caution."),Object(r.b)("li",{parentName:"ul"},"--allow-write=allow-write Allow file system write access. You can specify an optional, comma separated list of directories or files to provide a allow-list of allowed file system access."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://deno.land/manual/runtime/compiler_apis"}),"Compiler Apis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://deno.land/manual/linking_to_external_code"}),"Linking to external code"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Reloading modules"),Object(r.b)("li",{parentName:"ul"},"Integrity checking"),Object(r.b)("li",{parentName:"ul"},"Proxies"),Object(r.b)("li",{parentName:"ul"},"Import maps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/csbook/docs/Deno/ProgramLifecycle"}),"Program lifecycle"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Deno supports browser compatible lifecycle events: load and unload. "))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tools"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Debugger"),Object(r.b)("li",{parentName:"ul"},"Installer"),Object(r.b)("li",{parentName:"ul"},"Formatter"),Object(r.b)("li",{parentName:"ul"},"Document generator"),Object(r.b)("li",{parentName:"ul"},"Dependency inspector"),Object(r.b)("li",{parentName:"ul"},"Linter"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Technologies"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/csbook/docs/Deno/WebAssembly"}),"WebAssembly")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/csbook/docs/Deno/Worker"}),"Workers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://deno.land/manual/examples/os_signals"}),"OS Signals")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Testing"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Assertions",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Assertions"),Object(r.b)("li",{parentName:"ul"},"Equality"),Object(r.b)("li",{parentName:"ul"},"Contains"),Object(r.b)("li",{parentName:"ul"},"Regex"),Object(r.b)("li",{parentName:"ul"},"Throws"),Object(r.b)("li",{parentName:"ul"},"Custom Messages"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Runtime API"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Namespaces",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Deno"),Object(r.b)("li",{parentName:"ul"},"WebAssembly"),Object(r.b)("li",{parentName:"ul"},"Performance"))),Object(r.b)("li",{parentName:"ul"},"Variables"),Object(r.b)("li",{parentName:"ul"},"Interfaces",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Crypto"),Object(r.b)("li",{parentName:"ul"},"Deno.Closer"),Object(r.b)("li",{parentName:"ul"},"Deno.Conn"),Object(r.b)("li",{parentName:"ul"},"Deno.ConnectOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.ConnectTlsOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.DirEntry"),Object(r.b)("li",{parentName:"ul"},"Deno.FileInfo"),Object(r.b)("li",{parentName:"ul"},"Deno.FsEvent"),Object(r.b)("li",{parentName:"ul"},"Deno.ListenOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.ListenTlsOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.Listener"),Object(r.b)("li",{parentName:"ul"},"Deno.MakeTempOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.Metrics"),Object(r.b)("li",{parentName:"ul"},"Deno.MkdirOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.NetAddr"),Object(r.b)("li",{parentName:"ul"},"Deno.OpenOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.Reader"),Object(r.b)("li",{parentName:"ul"},"Deno.ReaderSync"),Object(r.b)("li",{parentName:"ul"},"Deno.RemoveOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.RunOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.Seeker"),Object(r.b)("li",{parentName:"ul"},"Deno.SeekerSync"),Object(r.b)("li",{parentName:"ul"},"Deno.TestDefinition"),Object(r.b)("li",{parentName:"ul"},"Deno.UnixAddr"),Object(r.b)("li",{parentName:"ul"},"Deno.WriteFileOptions"),Object(r.b)("li",{parentName:"ul"},"Deno.Writer"),Object(r.b)("li",{parentName:"ul"},"Deno.WriterSync"),Object(r.b)("li",{parentName:"ul"},"ImportMeta"),Object(r.b)("li",{parentName:"ul"},"Window"))),Object(r.b)("li",{parentName:"ul"},"Class"),Object(r.b)("li",{parentName:"ul"},"Functions"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Std "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"deno/std/archive"),Object(r.b)("li",{parentName:"ul"},"deno/std/async"),Object(r.b)("li",{parentName:"ul"},"deno/std/bytes"),Object(r.b)("li",{parentName:"ul"},"deno/std/datetime"),Object(r.b)("li",{parentName:"ul"},"deno/std/encoding"),Object(r.b)("li",{parentName:"ul"},"deno/std/examples"),Object(r.b)("li",{parentName:"ul"},"deno/std/flags"),Object(r.b)("li",{parentName:"ul"},"deno/std/fmt"),Object(r.b)("li",{parentName:"ul"},"deno/std/fs"),Object(r.b)("li",{parentName:"ul"},"deno/std/hash"),Object(r.b)("li",{parentName:"ul"},"deno/std/http"),Object(r.b)("li",{parentName:"ul"},"deno/std/io"),Object(r.b)("li",{parentName:"ul"},"deno/std/log"),Object(r.b)("li",{parentName:"ul"},"deno/std/mime"),Object(r.b)("li",{parentName:"ul"},"deno/std/node"),Object(r.b)("li",{parentName:"ul"},"deno/std/path"),Object(r.b)("li",{parentName:"ul"},"deno/std/permissions"),Object(r.b)("li",{parentName:"ul"},"deno/std/signal"),Object(r.b)("li",{parentName:"ul"},"deno/std/testing"),Object(r.b)("li",{parentName:"ul"},"deno/std/textproto"),Object(r.b)("li",{parentName:"ul"},"deno/std/uuid"),Object(r.b)("li",{parentName:"ul"},"deno/std/ws"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Programs"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Network",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Tcp Server"))),Object(r.b)("li",{parentName:"ul"},"Process",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Subprocess"),Object(r.b)("li",{parentName:"ul"},"Status"))),Object(r.b)("li",{parentName:"ul"},"FileSystem",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Permissions"),Object(r.b)("li",{parentName:"ul"},"FileServer"),Object(r.b)("li",{parentName:"ul"},"FileSystem Events"))),Object(r.b)("li",{parentName:"ul"},"Bash Programs",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"cat"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/chenshenhai/deno_note/blob/master/note/chapter_07/deno_cmd.md"}),"\u8fdb\u5ea6\u6761\u6548\u679c")," "))),Object(r.b)("li",{parentName:"ul"},"Database",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"MySQL"),Object(r.b)("li",{parentName:"ul"},"Redis",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/csbook/docs/Deno/index"}),"RedisClient\u5b9e\u73b0")))),Object(r.b)("li",{parentName:"ul"},"ElasticSearch"),Object(r.b)("li",{parentName:"ul"},"Kafka"))),Object(r.b)("li",{parentName:"ul"},"WebFramework",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"MVC",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Route"),Object(r.b)("li",{parentName:"ul"},"Pipeline"),Object(r.b)("li",{parentName:"ul"},"Middleware"),Object(r.b)("li",{parentName:"ul"},"Controller"),Object(r.b)("li",{parentName:"ul"},"Model"))),Object(r.b)("li",{parentName:"ul"},"Lifecycle",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Headers"),Object(r.b)("li",{parentName:"ul"},"Request"),Object(r.b)("li",{parentName:"ul"},"Response"))),Object(r.b)("li",{parentName:"ul"},"Permission",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8eab\u4efd\u8ba4\u8bc1"),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u6388\u6743"))),Object(r.b)("li",{parentName:"ul"},"Safe",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Crypto"))),Object(r.b)("li",{parentName:"ul"},"Static Files"),Object(r.b)("li",{parentName:"ul"},"URL"),Object(r.b)("li",{parentName:"ul"},"FormData"),Object(r.b)("li",{parentName:"ul"},"File"),Object(r.b)("li",{parentName:"ul"},"Notification"),Object(r.b)("li",{parentName:"ul"},"Session"),Object(r.b)("li",{parentName:"ul"},"Cookie"))),Object(r.b)("li",{parentName:"ul"},"Instant Messager"),Object(r.b)("li",{parentName:"ul"},"WebServer"),Object(r.b)("li",{parentName:"ul"},"\u4e91\u5b58\u50a8"),Object(r.b)("li",{parentName:"ul"},"Lemmy"),Object(r.b)("li",{parentName:"ul"},"\u5728\u7ebf\u4ee3\u7801\u6267\u884c\u5de5\u5177"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/danistefanovic/build-your-own-x"}),"build-your-own-x"))))),Object(r.b)("h3",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/csbook/docs/Deno/Request"}),"Request")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/csbook/docs/Deno/WebSocket"}),"WebSocket"))))}p.isMDXComponent=!0},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var l=a(0),n=a.n(l);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),s=l,O=u["".concat(b,".").concat(s)]||u[s]||m[s]||r;return a?n.a.createElement(O,i(i({ref:t},o),{},{components:a})):n.a.createElement(O,i({ref:t},o))}));function O(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,b=new Array(r);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,b[1]=i;for(var o=2;o<r;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);