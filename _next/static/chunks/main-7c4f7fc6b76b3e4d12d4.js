_N_E=(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{400:function(){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))})},9204:function(){"use strict";try{self["workbox:window:6.1.1"]&&_()}catch(e){}function e(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.1.1"]&&_()}catch(e){}var o=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function a(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var i=function(e,t){this.type=e,Object.assign(this,t)};function u(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function c(){}var s={type:"SKIP_WAITING"};function f(e,t){if(!t)return e&&e.then?e.then(c):Promise.resolve()}var l=function(n){var r,c;function l(e,t){var r,c;return void 0===t&&(t={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var e=r.fn,t=e.installing;r.tn>0||!a(t.scriptURL,r.sn)||performance.now()>r.un+6e4?(r.vn=t,e.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(e){var t=r.fn,n=e.target,o=n.state,a=n===r.vn,u={sw:n,isExternal:a,originalEvent:e};!a&&r.mn&&(u.isUpdate=!0),r.dispatchEvent(new i(o,u)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&t.waiting===n&&r.dispatchEvent(new i("waiting",u))}),200):"activating"===o&&(clearTimeout(r.wn),a||r.en.resolve(n))},r.dn=function(e){var t=r.hn;t===navigator.serviceWorker.controller&&(r.dispatchEvent(new i("controlling",{sw:t,originalEvent:e,isUpdate:r.mn})),r.on.resolve(t))},r.gn=(c=function(e){var t=e.data,n=e.source;return u(r.getSW(),(function(){r.an.has(n)&&r.dispatchEvent(new i("message",{data:t,sw:n,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(c.apply(this,e))}catch(e){return Promise.reject(e)}}),r.sn=e,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}c=n,(r=l).prototype=Object.create(c.prototype),r.prototype.constructor=r,r.__proto__=c;var d,p,h=l.prototype;return h.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return f(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),u(r.bn(),(function(e){r.fn=e,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&a(t.scriptURL,r.sn)&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn,{once:!0}),r.fn}))}))}catch(e){return Promise.reject(e)}},h.update=function(){try{return this.fn?f(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},h.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(t){try{return u(this.getSW(),(function(n){return e(n,t)}))}catch(e){return Promise.reject(e)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&e(this.fn.waiting,s)},h.pn=function(){var e=navigator.serviceWorker.controller;return e&&a(e.scriptURL,this.sn)?e:void 0},h.bn=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return u(navigator.serviceWorker.register(e.sn,e.nn),(function(t){return e.un=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},d=l,(p=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&t(d.prototype,p),l}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.Sn(e).add(t)},t.removeEventListener=function(e,t){this.Sn(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,n=r(this.Sn(e.type));!(t=n()).done;)(0,t.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());"undefined"!==typeof window&&"serviceWorker"in navigator&&(window.workbox=new l("/sw.js",{scope:"/"}),window.workbox.addEventListener("activated",(function(e){e.isUpdate||caches.keys().then((function(e){e.includes("start-url")||fetch("/")}))})),window.workbox.register())},2771:function(e,t){"use strict";t.__esModule=!0,t.default=function(){var e=null;return{mountedInstances:new Set,updateHead:function(t){var n=e=Promise.resolve().then((function(){if(n===e){e=null;var o={};t.forEach((function(e){var t=o[e.type]||[];t.push(e),o[e.type]=t}));var a=o.title?o.title[0]:null,i="";if(a){var u=a.props.children;i="string"===typeof u?u:Array.isArray(u)?u.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var n=document.getElementsByTagName("head")[0],o=n.querySelector("meta[name=next-head-count]");0;for(var a=Number(o.content),i=[],u=0,c=o.previousElementSibling;u<a;u++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);var s=t.map(r).filter((function(e){for(var t=0,n=i.length;t<n;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return n.insertBefore(e,o)})),o.content=(a-i.length+s.length).toString()}(e,o[e]||[])}))}}))}}},t.DOMAttributeNames=void 0;var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function r(e){var t=e.type,r=e.props,o=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=n[a]||a.toLowerCase();"script"!==t||"async"!==i&&"defer"!==i&&"noModule"!==i?o.setAttribute(i,r[a]):o[i]=!!r[a]}var u=r.children,c=r.dangerouslySetInnerHTML;return c?o.innerHTML=c.__html||"":u&&(o.textContent="string"===typeof u?u:Array.isArray(u)?u.join(""):""),o}t.DOMAttributeNames=n},7403:function(e,t,n){"use strict";var r=n(809),o=n(8561),a=n(2553),i=n(2012),u=n(9807),c=n(7690),s=n(9828),f=n(3848);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var d=n(9448),p=n(2426);t.__esModule=!0,t.render=oe,t.renderError=ie,t.default=t.emitter=t.router=t.version=void 0;var h=p(n(9566));p(n(9448));n(400);var v=p(n(7294)),m=p(n(3935)),y=n(4287),g=p(n(7332)),w=n(1642),b=n(1689),S=n(3288),E=d(n(4915)),_=d(n(9186)),x=n(3937),P=p(n(2771)),k=p(n(7365)),T=p(n(4829)),A=n(2441),L=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=L;t.version="10.0.7";var C=function(e){return[].slice.call(e)},M=L.props,R=L.err,N=L.page,j=L.query,F=L.buildId,I=L.assetPrefix,O=L.runtimeConfig,D=L.dynamicIds,B=L.isFallback,U=L.locale,W=L.locales,q=L.domainLocales,H=L.defaultLocale,X=I||"";n.p="".concat(X,"/_next/"),_.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:O||{}});var G=(0,x.getURL)();(0,b.hasBasePath)(G)&&(G=(0,b.delBasePath)(G));var V=new k.default(F,X),J=function(e){var t=f(e,2),n=t[0],r=t[1];return V.routeLoader.onEntrypoint(n,r)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return J(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=J;var Y,$,K,Q,z=(0,P.default)(),Z=document.getElementById("__next");t.router=$;var ee,te=function(e){u(n,e);var t=l(n);function n(){return a(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),$.isSsr&&(B||L.nextExport&&((0,S.isDynamicRoute)($.pathname)||location.search)||M&&M.__N_SSG&&location.search)&&$.replace($.pathname+"?"+String(E.assign(E.urlQueryToSearchParams($.query),new URLSearchParams(location.search))),G,{_h:1,shallow:!B})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(v.default.Component),ne=(0,g.default)();t.emitter=ne;var re=function(){var e=o(r.mark((function e(){var n,o,a,i,u,c,s=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,V.routeLoader.whenEntrypoint("/_app");case 4:if(!("error"in(n=e.sent))){e.next=7;break}throw n.error;case 7:o=n.component,a=n.exports,K=o,a&&a.reportWebVitals&&(Q=function(e){var t,n=e.id,r=e.name,o=e.startTime,i=e.value,u=e.duration,c=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),a.reportWebVitals({id:n||f,name:r,startTime:o||t,value:null==i?u:i,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),i=R,e.prev=11,e.next=16;break;case 16:return e.next=18,V.routeLoader.whenEntrypoint(N);case 18:e.t0=e.sent;case 19:if(!("error"in(u=e.t0))){e.next=22;break}throw u.error;case 22:ee=u.component,e.next=27;break;case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(11),i=e.t1;case 32:if(!window.__NEXT_PRELOADREADY){e.next=36;break}return e.next=36,window.__NEXT_PRELOADREADY(D);case 36:return t.router=$=(0,A.createRouter)(N,j,G,{initialProps:M,pageLoader:V,App:K,Component:ee,wrapApp:pe,err:i,isFallback:Boolean(B),subscription:function(e,t,n){return oe(Object.assign({},e,{App:t,scroll:n}))},locale:U,locales:W,defaultLocale:H,domainLocales:q}),oe(c={App:K,initial:!0,Component:ee,props:M,err:i}),e.abrupt("return",ne);case 44:return e.abrupt("return",{emitter:ne,render:oe,renderCtx:c});case 45:case"end":return e.stop()}}),e,null,[[11,29]])})));return function(){return e.apply(this,arguments)}}();function oe(e){return ae.apply(this,arguments)}function ae(){return(ae=o(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,ie(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,he(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,ie((0,h.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function ie(e){var t=e.App,n=e.err;return console.error(n),V.loadPage("/_error").then((function(r){var o=r.page,a=r.styleSheets,i=pe(t),u={Component:o,AppTree:i,router:$,ctx:{err:n,pathname:N,query:j,asPath:G,AppTree:i}};return Promise.resolve(e.props?e.props:(0,x.loadGetInitialProps)(t,u)).then((function(t){return he((0,h.default)({},e,{err:n,Component:o,styleSheets:a,props:t}))}))}))}t.default=re;var ue="function"===typeof m.default.hydrate;function ce(){x.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),Q&&performance.getEntriesByName("Next.js-hydration").forEach(Q),fe())}function se(){if(x.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),Q&&(performance.getEntriesByName("Next.js-render").forEach(Q),performance.getEntriesByName("Next.js-route-change-to-render").forEach(Q)),fe(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function fe(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function le(e){var t=e.children;return v.default.createElement(te,{fn:function(e){return ie({App:K,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},v.default.createElement(w.RouterContext.Provider,{value:(0,A.makePublicRouterInstance)($)},v.default.createElement(y.HeadManagerContext.Provider,{value:z},t)))}var de,pe=function(e){return function(t){var n=(0,h.default)({},t,{Component:ee,err:R,router:$});return v.default.createElement(le,null,v.default.createElement(e,n))}};function he(e){var t=e.App,n=e.Component,r=e.props,o=e.err,a="initial"in e?void 0:e.styleSheets;n=n||de.Component,r=r||de.props;var i=(0,h.default)({},r,{Component:n,err:o,router:$});de=i;var u,c=!1,s=new Promise((function(e,t){Y&&Y(),u=function(){Y=null,e()},Y=function(){c=!0,Y=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var f,l,d=v.default.createElement(ve,{callback:function(){u()}},v.default.createElement(me,{callback:function(){if(a&&!c){for(var t=new Set(a.map((function(e){return e.href}))),n=C(document.querySelectorAll("style[data-n-href]")),r=n.map((function(e){return e.getAttribute("data-n-href")})),o=0;o<r.length;++o)t.has(r[o])?n[o].removeAttribute("media"):n[o].setAttribute("media","x");var i=document.querySelector("noscript[data-n-css]");i&&a.forEach((function(e){var t=e.href,n=document.querySelector('style[data-n-href="'.concat(t,'"]'));n&&(i.parentNode.insertBefore(n,i.nextSibling),i=n)})),C(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}e.scroll&&window.scrollTo(e.scroll.x,e.scroll.y)}}),v.default.createElement(le,null,v.default.createElement(t,i)));return function(){if(!a)return!1;var e=C(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")}))),n=document.querySelector("noscript[data-n-css]"),r=null==n?void 0:n.getAttribute("data-n-css");a.forEach((function(e){var n=e.href,o=e.text;if(!t.has(n)){var a=document.createElement("style");a.setAttribute("data-n-href",n),a.setAttribute("media","x"),r&&a.setAttribute("nonce",r),document.head.appendChild(a),a.appendChild(document.createTextNode(o))}}))}(),f=d,l=Z,x.ST&&performance.mark("beforeRender"),ue?(m.default.hydrate(f,l,ce),ue=!1):m.default.render(f,l,se),s}function ve(e){var t=e.callback,n=e.children;return v.default.useLayoutEffect((function(){return t()}),[t]),v.default.useEffect((function(){(0,T.default)(Q)}),[]),n}function me(e){var t=e.callback;return v.default.useLayoutEffect((function(){return t()}),[t]),null}},5778:function(e,t,n){"use strict";var r=n(9448)(n(7403));window.next=r,(0,r.default)().catch(console.error)},7365:function(e,t,n){"use strict";var r=n(2553),o=n(2012),a=n(9448),i=n(2426);t.__esModule=!0,t.default=void 0;var u=n(1689),c=i(n(7892)),s=n(3288),f=n(4436),l=a(n(7599));function d(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}var p=function(){function e(t,n){r(this,e),this.buildId=void 0,this.assetPrefix=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.routeLoader=void 0,this.routeLoader=(0,l.default)(n),this.buildId=t,this.assetPrefix=n,this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getPageList",value:function(){return(0,l.getClientBuildManifest)().then((function(e){return e.sortedPages}))}},{key:"getDataHref",value:function(e,t,n,r){var o=this,a=(0,f.parseRelativeUrl)(e),i=a.pathname,l=a.query,p=a.search,h=(0,f.parseRelativeUrl)(t).pathname,v=d(i),m=function(e){var t=(0,c.default)((0,u.addLocale)(e,r),".json");return(0,u.addBasePath)("/_next/data/".concat(o.buildId).concat(t).concat(n?"":p))},y=(0,s.isDynamicRoute)(v),g=y?(0,u.interpolateAs)(i,h,l).result:"";return y?g&&m(g):m(v)}},{key:"_isSsg",value:function(e){var t=d((0,f.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(e){return e.has(t)}))}},{key:"loadPage",value:function(e){return this.routeLoader.loadRoute(e).then((function(e){if("component"in e)return{page:e.component,mod:e.exports,styleSheets:e.styles.map((function(e){return{href:e.href,text:e.content}}))};throw e.error}))}},{key:"prefetch",value:function(e){return this.routeLoader.prefetch(e)}}]),e}();t.default=p},4829:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=n(5866),a=(location.href,!1);function i(e){r&&r(e)}t.default=function(e){r=e,a||(a=!0,(0,o.getCLS)(i),(0,o.getFID)(i),(0,o.getFCP)(i),(0,o.getLCP)(i),(0,o.getTTFB)(i))}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},9186:function(e,t){"use strict";var n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}},5866:function(e){e.exports=function(){var e={599:function(e,t){!function(e){"use strict";var t,n,r=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},o=function(e){return{name:e,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:r(),isFinal:!1}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},i=!1,u=!1,c=function(e){i=!e.persisted},s=function(){addEventListener("pagehide",c),addEventListener("beforeunload",(function(){}))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u||(s(),u=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:i})}),{capture:!0,once:t})},l=function(e,t,n,r){var o;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},d=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,f((function(e){var n=e.timeStamp;return t=n}),!0)),{get timeStamp(){return t}}},p=function(){return n||(n=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),n};e.getCLS=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o("CLS",0),i=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),t())},u=a("layout-shift",i);u&&(t=l(e,r,u,n),f((function(e){var n=e.isUnloading;u.takeRecords().map(i),n&&(r.isFinal=!0),t()})))},e.getFCP=function(e){var t,n=o("FCP"),r=d(),i=a("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(n.value=e.startTime,n.isFinal=!0,n.entries.push(e),t())}));i&&(t=l(e,n,i))},e.getFID=function(e){var t=o("FID"),n=d(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,u())},i=a("first-input",r),u=l(e,t,i);i?f((function(){i.takeRecords().map(r),i.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],u())}))},e.getLCP=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o("LCP"),i=d(),u=function(e){var n=e.startTime;n<i.timeStamp?(r.value=n,r.entries.push(e)):r.isFinal=!0,t()},c=a("largest-contentful-paint",u);if(c){t=l(e,r,c,n);var s=function(){r.isFinal||(c.takeRecords().map(u),r.isFinal=!0,t())};p().then(s),f(s,!0)}},e.getTTFB=function(e){var t,n=o("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}},a=!0;try{e[r].call(o.exports,o,o.exports,n),a=!1}finally{a&&delete t[r]}return o.exports}return n.ab="//",n(599)}()},450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9566:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}e.exports=t},9828:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:function(e,t,n){var r=n(1914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},7690:function(e,t,n){var r=n(7917),o=n(450);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},0,[[9204,272,774,351],[5778,272,774,351]]]);