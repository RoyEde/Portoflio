webpackJsonp([0xd2a57dc1d883],{76:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(327),options:{plugins:[],color:"#342e37",showSpinner:!1}}]},197:function(e,n,t){"use strict";n.components={"component---src-pages-404-js":t(315),"component---src-pages-about-js":t(316),"component---src-pages-contact-js":t(317),"component---src-pages-index-js":t(318),"component---src-pages-projects-js":t(319)},n.json={"layout-index.json":t(320),"404.json":t(321),"about.json":t(323),"contact.json":t(324),"index.json":t(325),"projects.json":t(326),"404-html.json":t(322)},n.layouts={"layout---index":t(314)}},198:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),c=o(s),l=t(7),f=o(l),p=t(128),d=o(p),m=t(57),h=o(m),g=t(76),v=t(446),y=o(v),R=function(e){var n=e.children;return c.default.createElement("div",null,n())},b=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),i=t.location;return d.default.getPage(i.pathname)||(i=u({},i,{pathname:"/404.html"})),o.state={location:i,pageResources:d.default.getResourcesForPathname(i.pathname)},o}return i(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=u({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,y.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:u({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);b.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=b,e.exports=n.default},57:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(343),a=o(r),i=(0,a.default)();e.exports=i},199:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(75),a=t(129),i=o(a),u={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,i.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),u[a])return u[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return s=e,u[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return s=e,u[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return s=e,u[a]=e,!0}return!1}),s}}},200:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(104),a=o(r),i=t(76),u=(0,i.apiRunner)("replaceHistory"),s=u[0],c=s||(0,a.default)();e.exports=c},322:function(e,n,t){t(10),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(335)})})}},321:function(e,n,t){t(10),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(336)})})}},323:function(e,n,t){t(10),e.exports=function(e){return t.e(0xf927f8900006,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(337)})})}},324:function(e,n,t){t(10),e.exports=function(e){return t.e(0xa7f31e1aeaea,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(338)})})}},325:function(e,n,t){t(10),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(339)})})}},320:function(e,n,t){t(10),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(107)})})}},326:function(e,n,t){t(10),e.exports=function(e){return t.e(97786326051841,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(340)})})}},314:function(e,n,t){t(10),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(201)})})}},128:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(2),a=(o(r),t(199)),i=o(a),u=t(57),s=o(u),c=t(129),l=o(c),f=void 0,p={},d={},m={},h={},g={},v=[],y=[],R={},b="",x=[],_={},P=function(e){return e&&e.default||e},w=void 0,j=!0,k=[],C={},E={},N=5;w=t(202)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){x=x.filter(function(n){return n!==e}),w.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){w.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){w.onPostLoadPageResources(e)});var S=function(e,n){return _[e]>_[n]?1:_[e]<_[n]?-1:0},O=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},L=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,k.push({resource:n,succeeded:!e}),E[n]||(E[n]=e),k=k.slice(-N),t(e,o)})}},T=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):E[n]?e.nextTick(function(){t(E[n])}):L(n,function(e,o){if(e)t(e);else{var r=P(o());g[n]=r,t(e,r)}})},M=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=k.find(function(e){return e.succeeded});return!!n},A=function(e,n){console.log(n),C[e]||(C[e]=n),M()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},D=1,U={empty:function(){y=[],R={},_={},x=[],v=[],b=""},addPagesArray:function(e){v=e,b="/Portfolio",f=(0,i.default)(e,b)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return y.pop()},enqueue:function(e){var n=(0,l.default)(e,b);if(!v.some(function(e){return e.path===n}))return!1;var t=1/D;D+=1,R[n]?R[n]+=1:R[n]=1,U.has(n)||y.unshift(n),y.sort(O);var o=f(n);return o.jsonName&&(_[o.jsonName]?_[o.jsonName]+=1+t:_[o.jsonName]=1+t,x.indexOf(o.jsonName)!==-1||h[o.jsonName]||x.unshift(o.jsonName)),o.componentChunkName&&(_[o.componentChunkName]?_[o.componentChunkName]+=1+t:_[o.componentChunkName]=1+t,x.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||x.unshift(o.componentChunkName)),x.sort(S),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:_}},getPages:function(){return{pathArray:y,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return y.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};j&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),j=!1;if(C[n])return A(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return A(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];s.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,i=void 0,u=function(){if(r&&a&&(!o.layoutComponentChunkName||i)){m[n]={component:r,json:a,layout:i,page:o};var e={component:r,json:a,layout:i,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return T(o.componentChunkName,function(e,n){e&&A(o.path,"Loading the component for "+o.path+" failed"),r=n,u()}),T(o.jsonName,function(e,n){e&&A(o.path,"Loading the JSON for "+o.path+" failed"),a=n,u()}),void(o.layoutComponentChunkName&&T(o.layout,function(e,n){e&&A(o.path,"Loading the Layout for "+o.path+" failed"),i=n,u()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:U.getResourcesForPathname};n.default=U}).call(n,t(69))},341:function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-projects-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},202:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},i=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){i({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){i({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){i({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){i({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(76),i=t(2),u=o(i),s=t(166),c=o(s),l=t(75),f=t(331),p=t(299),d=o(p),m=t(106),h=t(200),g=o(h),v=t(57),y=o(v),R=t(341),b=o(R),x=t(342),_=o(x),P=t(198),w=o(P),j=t(197),k=o(j),C=t(128),E=o(C);t(222),window.___history=g.default,window.___emitter=y.default,E.default.addPagesArray(b.default),E.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=E.default,window.matchPath=l.matchPath;var N=_.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),S=function(e){var n=N[e];return null!=n&&(g.default.replace(n.toPath),!0)};S(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&s!==!1||(window.___history=e,s=!0,e.listen(function(e,n){S(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(203);var o=function(e){function n(e){e.page.path===E.default.getPage(o).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(i),window.___history.push(t))}var t=(0,m.createLocation)(e,null,null,g.default.location),o=t.pathname,r=N[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var i=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);E.default.getResourcesForPathname(o)?(clearTimeout(i),window.___history.push(t)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return u.default.createElement(l.Router,{history:g.default},n)},v=(0,l.withRouter)(w.default);E.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,i.createElement)(p?p:h,null,(0,i.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,i.createElement)(v,{layout:!0,children:function(n){return(0,i.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return E.default.getPage(o.location.pathname)?(0,i.createElement)(w.default,r({page:!0},o)):(0,i.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(u.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},342:function(e,n){e.exports=[]},203:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(57),a=o(r),i="/";i="/Portfolio/","serviceWorker"in navigator&&navigator.serviceWorker.register(i+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},129:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},299:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},10:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,i){var u=!1,s=!0,c=function(e){i&&(i(t,e),i=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){u||(u=!0,s?setTimeout(function(){c()}):c())}),void(u||(s=!1,e(function(){u||(u=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},327:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(130),a=o(r),i=t(344),u=o(i),s={color:"#29d"};n.onClientEntry=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,a.default)({},s,n);window.___emitter.on("onDelayedLoadPageResources",function(){u.default.configure(t),u.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){u.default.done()});var o="\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: "+t.color+";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+t.color+", 0 0 5px "+t.color+";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: "+t.color+";\n      border-left-color: "+t.color+";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n",r=document.createElement("style");r.id="nprogress-styles",r.innerHTML=o,document.head.appendChild(r)}},343:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},344:function(e,n,t){var o,r;!function(a,i){o=i,r="function"==typeof o?o.call(n,t,n,e):o,!(void 0!==r&&(e.exports=r))}(this,function(){function e(e,n,t){return e<n?n:e>t?t:e}function n(e){return 100*(-1+e)}function t(e,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+n(e)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+n(e)+"%,0)"}:{"margin-left":n(e)+"%"},r.transition="all "+t+"ms "+o,r}function o(e,n){var t="string"==typeof e?e:i(e);return t.indexOf(" "+n+" ")>=0}function r(e,n){var t=i(e),r=t+n;o(t,n)||(e.className=r.substring(1))}function a(e,n){var t,r=i(e);o(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function i(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function u(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var s={};s.version="0.2.0";var c=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};s.configure=function(e){var n,t;for(n in e)t=e[n],void 0!==t&&e.hasOwnProperty(n)&&(c[n]=t);return this},s.status=null,s.set=function(n){var o=s.isStarted();n=e(n,c.minimum,1),s.status=1===n?null:n;var r=s.render(!o),a=r.querySelector(c.barSelector),i=c.speed,u=c.easing;return r.offsetWidth,l(function(e){""===c.positionUsing&&(c.positionUsing=s.getPositioningCSS()),f(a,t(n,i,u)),1===n?(f(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){f(r,{transition:"all "+i+"ms linear",opacity:0}),setTimeout(function(){s.remove(),e()},i)},i)):setTimeout(e,i)}),this},s.isStarted=function(){return"number"==typeof s.status},s.start=function(){s.status||s.set(0);var e=function(){setTimeout(function(){s.status&&(s.trickle(),e())},c.trickleSpeed)};return c.trickle&&e(),this},s.done=function(e){return e||s.status?s.inc(.3+.5*Math.random()).set(1):this},s.inc=function(n){var t=s.status;return t?("number"!=typeof n&&(n=(1-t)*e(Math.random()*t,.1,.95)),t=e(t+n,0,.994),s.set(t)):s.start()},s.trickle=function(){return s.inc(Math.random()*c.trickleRate)},function(){var e=0,n=0;s.promise=function(t){return t&&"resolved"!==t.state()?(0===n&&s.start(),e++,n++,t.always(function(){n--,0===n?(e=0,s.done()):s.set((e-n)/e)}),this):this}}(),s.render=function(e){if(s.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),i=e?"-100":n(s.status||0),l=document.querySelector(c.parent);return f(a,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&u(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},s.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&u(e)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var l=function(){function e(){var t=n.shift();t&&t(e)}var n=[];return function(t){n.push(t),1==n.length&&e()}}(),f=function(){function e(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,n){return n.toUpperCase()})}function n(e){var n=document.body.style;if(e in n)return e;for(var t,o=r.length,a=e.charAt(0).toUpperCase()+e.slice(1);o--;)if(t=r[o]+a,t in n)return t;return e}function t(t){return t=e(t),a[t]||(a[t]=n(t))}function o(e,n,o){n=t(n),e.style[n]=o}var r=["Webkit","O","Moz","ms"],a={};return function(e,n){var t,r,a=arguments;if(2==a.length)for(t in n)r=n[t],void 0!==r&&n.hasOwnProperty(t)&&o(e,t,r);else o(e,a[1],a[2])}}();return s})},446:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},315:function(e,n,t){t(10),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(209)})})}},316:function(e,n,t){t(10),e.exports=function(e){return t.e(0xefeaa6d1881d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(210)})})}},317:function(e,n,t){t(10),e.exports=function(e){return t.e(70144966829960,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(211)})})}},318:function(e,n,t){t(10),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(212)})})}},319:function(e,n,t){t(10),e.exports=function(e){return t.e(0xc260c743ec7c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(213)})})}}});
//# sourceMappingURL=app-3e988f85a13c7d8e3231.js.map