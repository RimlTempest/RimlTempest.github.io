if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise((async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},a=(a,n)=>{Promise.all(a.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(a)};self.define=(a,c,i)=>{n[a]||(n[a]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map((a=>{switch(a){case"exports":return n;case"module":return r;default:return e(a)}}))).then((e=>{const a=i(...e);return n.default||(n.default=a),n}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LINE_SOCIAL_Basic.png",revision:"414687b54e41d424f391df8ca87517e4"},{url:"/LINE_SOCIAL_Circle.png",revision:"ad252fd233366605e74e026a6f01e957"},{url:"/_next/static/chunks/05d954cf-fe5d3af59fb48d38b19a.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/0a301732-48576b66f5eed1c7bb86.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/0c428ae2-62effb3bb53b523c6ef1.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/1bfc9850-ff2391524cdd6502a6f3.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/212-f00195889a6e8304c861.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/243-035eac2f05262bb81b2c.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/31664189-d1f27e7436cb0c6d2fd8.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/commons-487fa9cc1adaeae991b8.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/d64684d8-a32b23d6a7d6c13f0640.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/framework-0007399af24a9c9e8fa7.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/main-21bdc6e02759ebdf32a4.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/pages/_app-53b213d02bd842cc731f.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/pages/_error-4e5a3aa9bf27544492b2.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/pages/about-33e6b044ef8d942b8b5c.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/pages/contact-c0d472297768e5d02935.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/pages/index-e1ff41fbc8771a9f5109.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/pages/work-dde2b65d86e68d42bf2a.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/pages/work/%5Bid%5D-0d90593d105f78cce7da.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/chunks/webpack-7fc9e4ab54d5dcbb18bd.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/fLXVY9b1aMnawwcawz_oz/_buildManifest.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/_next/static/fLXVY9b1aMnawwcawz_oz/_ssgManifest.js",revision:"fLXVY9b1aMnawwcawz_oz"},{url:"/android-chrome-128x128.png",revision:"9525ae837e2ff2af4677a7e9a302e2b2"},{url:"/android-chrome-144x144.png",revision:"76e4be49a6da440519170c6a809b3d2b"},{url:"/android-chrome-152x152.png",revision:"859ccde60230bd2e2603cb3d0a6308b4"},{url:"/android-chrome-192x192.png",revision:"008f4d7b07fcf16bba1f712598b5c4b9"},{url:"/android-chrome-256x256.png",revision:"6ce94e702cd09001cb080a2ba279a1fa"},{url:"/android-chrome-36x36.png",revision:"9f1d6870b1cc4c101868d9dc4b20d4aa"},{url:"/android-chrome-384x384.png",revision:"b0be5b672e469f624efb16afdfabc20c"},{url:"/android-chrome-48x48.png",revision:"5c37d1aeda1d67012b3c5b90237861c5"},{url:"/android-chrome-512x512.png",revision:"d7b5bb9e18de5487bf8d1a3248f220f9"},{url:"/android-chrome-72x72.png",revision:"3e78af0dbffae0326545336c65827ff9"},{url:"/android-chrome-96x96.png",revision:"35abd2d05867e6cfe009b7545ee0f871"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"d1a01158e900a8f81f71c447edc865a2"},{url:"/apple-touch-icon-114x114.png",revision:"d1a01158e900a8f81f71c447edc865a2"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"245ba6b883a7a7412ed83a0b553249a4"},{url:"/apple-touch-icon-120x120.png",revision:"245ba6b883a7a7412ed83a0b553249a4"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"76e4be49a6da440519170c6a809b3d2b"},{url:"/apple-touch-icon-144x144.png",revision:"76e4be49a6da440519170c6a809b3d2b"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"859ccde60230bd2e2603cb3d0a6308b4"},{url:"/apple-touch-icon-152x152.png",revision:"859ccde60230bd2e2603cb3d0a6308b4"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"93f88a2ef4d6435f541b20b264440c82"},{url:"/apple-touch-icon-180x180.png",revision:"93f88a2ef4d6435f541b20b264440c82"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"ec8339b98d506d8d0019d5dd6b5e588f"},{url:"/apple-touch-icon-57x57.png",revision:"ec8339b98d506d8d0019d5dd6b5e588f"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"b9d4c3bfdbc4e7a684bb2e6927ee711c"},{url:"/apple-touch-icon-60x60.png",revision:"b9d4c3bfdbc4e7a684bb2e6927ee711c"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"3e78af0dbffae0326545336c65827ff9"},{url:"/apple-touch-icon-72x72.png",revision:"3e78af0dbffae0326545336c65827ff9"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"60bd61ac9b081c42ac6d5a9cf7c93ec2"},{url:"/apple-touch-icon-76x76.png",revision:"60bd61ac9b081c42ac6d5a9cf7c93ec2"},{url:"/apple-touch-icon-precomposed.png",revision:"93f88a2ef4d6435f541b20b264440c82"},{url:"/apple-touch-icon.png",revision:"93f88a2ef4d6435f541b20b264440c82"},{url:"/favicon.ico",revision:"8beebf5a3c99460d78d5327c687088e8"},{url:"/icon-128x128.png",revision:"9525ae837e2ff2af4677a7e9a302e2b2"},{url:"/icon-144x144.png",revision:"76e4be49a6da440519170c6a809b3d2b"},{url:"/icon-152x152.png",revision:"859ccde60230bd2e2603cb3d0a6308b4"},{url:"/icon-160x160.png",revision:"f75b7a1954987e5f19e4dae8ab359461"},{url:"/icon-16x16.png",revision:"924e1aca07456198fee679c86eeed7d3"},{url:"/icon-192x192.png",revision:"008f4d7b07fcf16bba1f712598b5c4b9"},{url:"/icon-196x196.png",revision:"e51b1f2069ce77f116c8ea89b70dc78c"},{url:"/icon-24x24.png",revision:"90f534a95d14b0c1a1b38c54c3885bd5"},{url:"/icon-256x256.png",revision:"6ce94e702cd09001cb080a2ba279a1fa"},{url:"/icon-32x32.png",revision:"b0f86282e46c6f4ea5c696664e4ab759"},{url:"/icon-36x36.png",revision:"9f1d6870b1cc4c101868d9dc4b20d4aa"},{url:"/icon-384x384.png",revision:"b0be5b672e469f624efb16afdfabc20c"},{url:"/icon-48x48.png",revision:"5c37d1aeda1d67012b3c5b90237861c5"},{url:"/icon-512x512.png",revision:"d7b5bb9e18de5487bf8d1a3248f220f9"},{url:"/icon-72x72.png",revision:"3e78af0dbffae0326545336c65827ff9"},{url:"/icon-96x96.png",revision:"35abd2d05867e6cfe009b7545ee0f871"},{url:"/manifest.json",revision:"c38ec62a8663ed368aa315444322dbec"},{url:"/noimage.jpg",revision:"b5a2d4cad17b4d204e5a11728789bf72"},{url:"/site-tile-150x150.png",revision:"ebcf023852f883b2f886f6ddcb0c8ff1"},{url:"/site-tile-310x150.png",revision:"176fd8f2b3894a964e72b6e213677a20"},{url:"/site-tile-310x310.png",revision:"02dfd917f73e09f2d6b028f2cdd5f6e8"},{url:"/site-tile-70x70.png",revision:"607afbcd7e4c7ff2f402a19d1cda508c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
