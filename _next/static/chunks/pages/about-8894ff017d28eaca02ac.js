_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"6cby":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("yGVr"),a=r("sKyC"),i=r("5+Am"),l=r("U6LL"),s=r("4jWa"),c=r("CRla"),o=r("epLR"),d=r("pr4h"),b=r("q1tI");function j(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=Object(a.a)(((e,t)=>{var r=m({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:"0",bottom:"0"},Object(i.c)().badge);return b.createElement(l.a.div,m({ref:t},e,{className:Object(o.a)("chakra-avatar__badge",e.className),__css:r}))}));function u(e){var[t,r]=e.split(" ");return t&&r?""+t.charAt(0)+r.charAt(0):t.charAt(0)}d.a&&(h.displayName="AvatarBadge");var x=e=>{var{name:t,getInitials:r}=e,n=j(e,["name","getInitials"]),a=Object(i.c)();return b.createElement(l.a.div,m({"aria-label":t},n,{__css:a.label}),t?null==r?void 0:r(t):null)},f=e=>b.createElement(l.a.svg,m({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%"},e),b.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),b.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),O={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},p=Object(a.a)(((e,t)=>{var r=Object(s.a)("Avatar",e),n=Object(c.b)(e),{src:a,name:d,showBorder:h,borderRadius:x="full",onError:p,getInitials:v=u,icon:y=b.createElement(f,null),loading:S,children:C,borderColor:_}=n,I=j(n,["src","name","showBorder","borderRadius","onError","getInitials","icon","loading","children","borderColor"]),E=m({borderRadius:x,borderWidth:h?"2px":void 0},O,r.container);return _&&(E.borderColor=_),b.createElement(l.a.span,m({ref:t},I,{className:Object(o.a)("chakra-avatar",e.className),__css:E}),b.createElement(i.b,{value:r},b.createElement(g,{src:a,loading:S,onError:p,getInitials:v,name:d,borderRadius:x,icon:y}),C))}));d.a&&(p.displayName="Avatar");var g=e=>{var{src:t,onError:r,getInitials:a,name:i,borderRadius:s,loading:c,icon:o=b.createElement(f,null)}=e,d=Object(n.a)({src:t,onError:r});return!t||!("loaded"===d)?i?b.createElement(x,{className:"chakra-avatar__initials",getInitials:a,name:i}):b.cloneElement(o,{role:"img"}):b.createElement(l.a.img,{src:t,alt:i,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};d.a&&(g.displayName="AvatarImage")},"8xRS":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r("Uxhg")}])},Uxhg:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("q1tI"),i=r("tofy"),l=r("MAJE"),s=r("6cby"),c=r("oSKe"),o=r("sKyC"),d=r("4jWa"),b=r("CRla"),j=r("5+Am"),m=r("U6LL"),h=r("JX03"),u=r("pr4h");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var O=Object(o.a)(((e,t)=>{var r=Object(d.a)("List",e),n=Object(b.b)(e),{children:i,styleType:l="none",stylePosition:s,spacing:c}=n,o=f(n,["children","styleType","stylePosition","spacing"]),u=Object(h.b)(i),O=c?{"& > *:not(style) ~ *:not(style)":{mt:c}}:{};return a.createElement(j.b,{value:r},a.createElement(m.a.ul,x({ref:t,listStyleType:l,listStylePosition:s,role:"list",__css:x({},r.container,O)},o),u))}));u.a&&(O.displayName="List");var p=Object(o.a)(((e,t)=>{var r=f(e,["as"]);return a.createElement(O,x({ref:t,as:"ol",styleType:"decimal",marginLeft:"1em"},r))}));u.a&&(p.displayName="OrderedList");var g=Object(o.a)(((e,t)=>{var r=f(e,["as"]);return a.createElement(O,x({ref:t,as:"ul",styleType:"initial",marginLeft:"1em"},r))}));u.a&&(g.displayName="UnorderedList");var v=Object(o.a)(((e,t)=>{var r=Object(j.c)();return a.createElement(m.a.li,x({ref:t},e,{__css:r.item}))}));u.a&&(v.displayName="ListItem");var y=Object(o.a)(((e,t)=>{var r=Object(j.c)();return a.createElement(c.a,x({ref:t,role:"presentation"},e,{__css:r.icon}))}));u.a&&(y.displayName="ListIcon");var S=r("epLR");function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var I=Object(o.a)(((e,t)=>{var r=Object(d.b)("Divider",e),{borderLeftWidth:n,borderBottomWidth:i,borderTopWidth:l,borderRightWidth:s,borderWidth:c,borderStyle:o,borderColor:j}=r,h=_(r,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),u=Object(b.b)(e),{className:x,orientation:f="horizontal",__css:O}=u,p=_(u,["className","orientation","__css"]),g={vertical:{borderLeftWidth:n||s||c||"1px",height:"100%"},horizontal:{borderBottomWidth:i||l||c||"1px",width:"100%"}};return a.createElement(m.a.hr,C({ref:t,role:"separator","aria-orientation":f},p,{__css:C({},h,{border:"0",borderColor:j,borderStyle:o},g[f],O),className:Object(S.a)("chakra-divider",x)}))}));u.a&&(I.displayName="Divider");var E=r("AeFk");r("KwD7"),Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER;Object(E.b)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),Object(E.b)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});var w=Object(E.b)({"0%":{left:"-40%"},"100%":{left:"100%"}}),z=Object(E.b)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function N(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}u.a;var D=e=>{var{min:t,max:r,value:n,isIndeterminate:i}=e,l=N(e,["min","max","value","isIndeterminate"]),s=function(e){var{value:t=0,min:r,max:n,valueText:a,getValueText:i,isIndeterminate:l}=e,s=function(e,t,r){return 100*(e-t)/(r-t)}(t,r,n);return{bind:{"data-indeterminate":l?"":void 0,"aria-valuemax":n,"aria-valuemin":r,"aria-valuenow":l?void 0:t,"aria-valuetext":(()=>{if(null!=t)return Object(u.e)(i)?i(t,s):a})(),role:"progressbar"},percent:s}}({value:n,min:t,max:r,isIndeterminate:i}),c=k({height:"100%"},Object(j.c)().filledTrack);return a.createElement(m.a.div,k({style:k({width:s.percent+"%"},l.style)},s.bind,l,{__css:c}))},A=e=>{var t,r=Object(b.b)(e),{value:n,min:i=0,max:l=100,hasStripe:s,isAnimated:c,children:o,borderRadius:h,isIndeterminate:u,"aria-label":x,"aria-labelledby":f}=r,O=N(r,["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby"]),p=Object(d.a)("Progress",e),g=null!=h?h:null==(t=p.track)?void 0:t.borderRadius,v=k({},!u&&s&&c&&{animation:z+" 1s linear infinite"},u&&{position:"absolute",willChange:"left",minWidth:"50%",animation:w+" 1s ease infinite normal none running"}),y=k({overflow:"hidden",position:"relative"},p.track);return a.createElement(m.a.div,k({borderRadius:g,__css:y},O),a.createElement(j.b,{value:p},a.createElement(D,{"aria-label":x,"aria-labelledby":f,min:i,max:l,value:n,isIndeterminate:u,css:v,borderRadius:g}),o))};u.a&&(A.displayName="Progress");var R=r("6qu1"),W=Object(R.a)({d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",displayName:"CopyIcon"}),T=r("9sSY");t.default=function(){return Object(n.jsx)(T.a,{height:"100vh",children:Object(n.jsxs)(i.a,{flexDirection:"column",pr:10,pl:10,width:"100%",height:"100%",children:[Object(n.jsx)(i.a,{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",mb:5,mt:5,children:Object(n.jsx)(l.a,{fontSize:"3xl",textAlign:"center",letterSpacing:"wide",children:"About"})}),Object(n.jsx)(i.a,{overflow:"visible",justifyContent:"center",alignItems:"center",flexDirection:"column",opacity:1,children:Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",backgroundColor:"whiteAlpha.300",p:5,children:[Object(n.jsxs)(i.a,{mb:5,children:[Object(n.jsx)(s.a,{size:"2xl"}),Object(n.jsxs)(i.a,{flexDirection:"column",ml:5,justifyContent:"center",alignItems:"center",children:[Object(n.jsx)(l.a,{fontSize:"xl",letterSpacing:"wider",children:"Riml"}),Object(n.jsx)(l.a,{children:"\u9ad9\u6a4b \u5927\u8cb4 / Takahashi Daiki"})]})]}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsxs)(i.a,{justifyContent:"center",flexDirection:"column",alignItems:"flex-start",children:[Object(n.jsx)(l.a,{children:"\u8da3\u5473"}),Object(n.jsx)(i.a,{children:Object(n.jsxs)(O,{styleType:"disc",ml:5,children:[Object(n.jsx)(v,{children:"\u52d5\u753b\u9451\u8cde\uff08Youtube\u3001niconico\u52d5\u753b\uff09"}),Object(n.jsxs)(i.a,{flexDirection:"row",children:[Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(v,{mt:3,children:"\u30ea\u30ba\u30e0\u30b2\u30fc\u30e0"}),Object(n.jsxs)(i.a,{children:[Object(n.jsx)(I,{borderColor:"red.500",orientation:"vertical",border:"1px",height:"100%"}),Object(n.jsxs)(O,{styleType:"none",ml:2,children:[Object(n.jsx)(v,{fontSize:"sm",children:"\u7b2c2\u56de\u30ac\u30eb\u30d1\u676f\u3000\u4e8c\u6b21\u4e88\u9078\u51fa\u5834\uff08\u4ed9\u53f0\uff09"}),Object(n.jsx)(v,{fontSize:"sm",children:"\u30c1\u30e5\u30a6\u30cb\u30ba\u30e0\u3001maimai \u8679\u30ec\u30fc\u30c8\u5230\u9054"}),Object(n.jsx)(v,{fontSize:"sm",children:"BeatTube PR \u6700\u5927\uff15\u4f4d"})]})]})]}),Object(n.jsxs)(O,{styleType:"disc",ml:3,children:[Object(n.jsx)(v,{mt:3,ml:3,children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0"}),Object(n.jsxs)(i.a,{children:[Object(n.jsx)(I,{borderColor:"red.500",border:"1px",orientation:"vertical",color:"green.500"}),Object(n.jsxs)(O,{styleType:"none",ml:2,children:[Object(n.jsx)(v,{fontSize:"sm",children:"Paiza S\u30e9\u30f3\u30af\u5230\u9054"}),Object(n.jsx)(v,{fontSize:"sm",children:"\u6821\u5185\u30cf\u30c3\u30ab\u30bd\u30f3\u6700\u512a\u79c0\u8cde\u3001\u4f01\u696d\u8cde"}),Object(n.jsx)(v,{fontSize:"sm",children:"Connect2019\u3000\u512a\u79c0\u8cde"})]})]})]})]})]})})]}),Object(n.jsx)(i.a,{justifyContent:"center",alignItems:"center",mt:3,mb:3,children:Object(n.jsx)(I,{borderColor:"green.500",orientation:"horizontal",color:"green.500",border:"1px",width:"100%"})}),Object(n.jsxs)(i.a,{justifyContent:"center",flexDirection:"column",alignItems:"flex-start",children:[Object(n.jsx)(l.a,{children:"Skill"}),Object(n.jsxs)(i.a,{justifyContent:"center",alignItems:"center",children:[Object(n.jsxs)(i.a,{flexDirection:"column",justifyContent:"center",ml:3,alignItems:"stretch",children:[Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:2,children:"HTML"}),Object(n.jsx)(A,{value:49,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]}),Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:3,children:"SCSS"}),Object(n.jsx)(A,{value:53,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]}),Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:3,children:"JavaScript"}),Object(n.jsx)(A,{value:66,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]}),Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:3,children:"TypeScript"}),Object(n.jsx)(A,{value:66,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]})]}),Object(n.jsxs)(i.a,{flexDirection:"column",justifyContent:"center",ml:10,children:[Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:3,children:"Next.js"}),Object(n.jsx)(A,{value:68,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]}),Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:3,children:"React.js"}),Object(n.jsx)(A,{value:68,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]}),Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:3,children:"Nuxt.js"}),Object(n.jsx)(A,{value:57,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]}),Object(n.jsxs)(i.a,{justifyContent:"flex-start",alignItems:"center",mb:2,children:[Object(n.jsx)(W,{boxSize:5}),Object(n.jsxs)(i.a,{flexDirection:"column",children:[Object(n.jsx)(l.a,{pl:3,children:"Vue.js"}),Object(n.jsx)(A,{value:55,max:100,colorScheme:"whatsapp",hasStripe:!0,isAnimated:!0,size:"lg",border:"1px solid green",height:3,minWidth:"100px",ml:2})]})]})]})]})]})]})]})})]})})}},yGVr:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("zlS4"),a=r("q1tI");function i(e){var{src:t,srcSet:r,onLoad:i,onError:l,crossOrigin:s,sizes:c,ignoreFallback:o}=e,[d,b]=Object(a.useState)("pending");Object(a.useEffect)((()=>{b(t?"loading":"pending")}),[t]);var j=Object(a.useRef)(),m=Object(a.useCallback)((()=>{if(t){h();var e=new Image;e.src=t,s&&(e.crossOrigin=s),r&&(e.srcset=r),c&&(e.sizes=c),e.onload=e=>{h(),b("loaded"),null==i||i(e)},e.onerror=e=>{h(),b("failed"),null==l||l(e)},j.current=e}}),[t,s,r,c,i,l]),h=()=>{j.current&&(j.current.onload=null,j.current.onerror=null,j.current=null)};return Object(n.a)((()=>{if(!o)return"loading"===d&&m(),()=>{h()}}),[d,m,o]),o?"loaded":d}}},[["8xRS",1,2,4,0,3,5]]]);