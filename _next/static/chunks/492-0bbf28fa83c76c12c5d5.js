(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{956:function(e,r,t){"use strict";t.d(r,{UQ:function(){return I},KF:function(){return D},XE:function(){return j},Qd:function(){return P},Hk:function(){return R}});var n=t(58),a=t(1180),i=t(5284),o=t(2653),l=t(4686),s=t(658),c=t(6805),u=t(7294),d={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]};function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var m=e=>null!=e&&parseInt(e.toString(),10)>0,p={exit:e=>f({},e.animateOpacity&&{opacity:m(e.startingHeight)?1:0},{height:e.startingHeight,transition:{height:{duration:.2,ease:d.ease},opacity:{duration:.3,ease:d.ease}}}),enter:e=>f({},e.animateOpacity&&{opacity:1},{height:e.endingHeight,transition:{height:{duration:.3,ease:d.ease},opacity:{duration:.4,ease:d.ease}}})},v=u.forwardRef(((e,r)=>{var{in:t,unmountOnExit:n,animateOpacity:a=!0,startingHeight:i=0,endingHeight:d="auto",style:v,className:h,onAnimationComplete:g}=e,y=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","onAnimationComplete"]),_=0===i,[b,E]=u.useState(!!t),[w,x]=u.useState((()=>_&&!t&&!m(i)?"none":"block"));(0,o.r)((()=>{x("block"),E(!!t)}),[t]),i>0&&n&&(0,s.ZK)("startingHeight and unmountOnExit are mutually exclusive. You can't use them together");var O={startingHeight:i,endingHeight:d,animateOpacity:a},k=f({ref:r,onAnimationComplete:()=>{!b&&_&&x("none"),null==g||g()},className:(0,l.cx)("chakra-collapse",h)},y,{variants:p,style:f({overflow:"hidden"},v),custom:O});return n?u.createElement(c.M_,{initial:!1,custom:O},t&&u.createElement(c.EA.div,f({},k,{initial:"exit",animate:"enter",exit:"exit"}))):u.createElement(c.EA.div,f({},k,{style:f({},k.style,{display:w}),initial:!1,animate:b?"enter":"exit"}))}));l.__DEV__&&(v.displayName="Collapse");var h=t(2617),g=t(7581),y=t(1034),_=t(4577);function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function w(e){var{onChange:r,defaultIndex:t,index:n,allowMultiple:a,allowToggle:i}=e,o=E(e,["onChange","defaultIndex","index","allowMultiple","allowToggle"]);!function(e){var r=e.index||e.defaultIndex,t=!(0,l.isUndefined)(r)&&!(0,l.isArray)(r)&&e.allowMultiple;(0,s.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof r+","})}(e),function(e){(0,s.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var c=(0,h.A)(),[d,f]=(0,u.useState)(-1);(0,g.z)((()=>{f(-1)}),[c.descendants]);var[m,p]=(0,y.T)({value:n,defaultValue:()=>a?null!=t?t:[]:null!=t?t:-1,onChange:r});return{index:m,setIndex:p,htmlProps:o,getAccordionItemProps:e=>{var r=!1;null!==e&&(r=(0,l.isArray)(m)?m.includes(e):m===e);return{isOpen:r,onChange:r=>{if(null!==e)if(a&&(0,l.isArray)(m)){var t=r?(0,l.addItem)(m,e):(0,l.removeItem)(m,e);p(t)}else r?p(e):i&&p(-1)}}},focusedIndex:d,setFocusedIndex:f,domContext:c}}var[x,O]=(0,l.createContext)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"});function k(e){var{isDisabled:r,isFocusable:t,id:n}=e,a=E(e,["isDisabled","isFocusable","id"]),{getAccordionItemProps:i,domContext:c,focusedIndex:d,setFocusedIndex:f}=O(),{descendants:m}=c,p=(0,u.useRef)(null),[v,g]=(0,_.Z)(n,"accordion-button","accordion-panel");!function(e){(0,s.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var y=(0,h.Y)({element:p.current,context:c,disabled:r,focusable:t}),{isOpen:w,onChange:x}=i(-1===y?null:y);!function(e,r){var{shouldFocus:t,preventScroll:n}=r;(0,o.r)((()=>{var r=e.current;r&&t&&((0,l.hasFocusWithin)(r)||(0,l.focus)(r,{preventScroll:n}))}),[t,e,n])}(p,{shouldFocus:y===d});var k=(0,u.useCallback)((()=>{null==x||x(!w),f(y)}),[y,w,x,f]),C=(0,u.useCallback)((e=>{var r={ArrowDown:()=>{var e,r=(0,l.getNextIndex)(y,m.length),t=m[r];null==t||null==(e=t.element)||e.focus()},ArrowUp:()=>{var e,r=(0,l.getPrevIndex)(y,m.length),t=m[r];null==t||null==(e=t.element)||e.focus()},Home:()=>{var e,r=m[0];null==r||null==(e=r.element)||e.focus()},End:()=>{var e,r=m[m.length-1];null==r||null==(e=r.element)||e.focus()}}[(0,l.normalizeEventKey)(e)];r&&(e.preventDefault(),r(e))}),[m,y]),N=(0,u.useCallback)((()=>f(y)),[y,f]),I=(0,u.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),b({},e,{type:"button",ref:(0,l.mergeRefs)(p,t),id:v,disabled:!!r,"aria-expanded":!!w,"aria-controls":g,onClick:(0,s.v0)(e.onClick,k),onFocus:(0,s.v0)(e.onFocus,N),onKeyDown:(0,s.v0)(e.onKeyDown,C)})}),[v,r,w,k,N,C,g]),A=(0,u.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),b({},e,{ref:r,role:"region",id:g,"aria-labelledby":v,hidden:!w})}),[v,w,g]);return{isOpen:w,isDisabled:r,isFocusable:t,onOpen:()=>{null==x||x(!0)},onClose:()=>{null==x||x(!1)},getButtonProps:I,getPanelProps:A,htmlProps:a}}function C(){return(C=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function N(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var I=(0,a.forwardRef)(((e,r)=>{var{children:t,reduceMotion:n}=e,o=N(e,["children","reduceMotion"]),s=(0,a.useMultiStyleConfig)("Accordion",o),c=w((0,i.Lr)(o)),{htmlProps:d}=c,f=N(c,["htmlProps"]),m=u.useMemo((()=>C({},f,{reduceMotion:!!n})),[f,n]);return u.createElement(x,{value:m},u.createElement(a.StylesProvider,{value:s},u.createElement(a.chakra.div,C({ref:r},d,{className:(0,l.cx)("chakra-accordion",o.className)}),t)))}));l.__DEV__&&(I.displayName="Accordion");var[A,S]=(0,l.createContext)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),P=(0,a.forwardRef)(((e,r)=>{var{children:t,className:n}=e,i=k(e),{htmlProps:o}=i,c=N(i,["htmlProps"]),d=C({},(0,a.useStyles)().container,{overflowAnchor:"none"}),f=u.useMemo((()=>c),[c]);return u.createElement(A,{value:f},u.createElement(a.chakra.div,C({ref:r},o,{className:(0,l.cx)("chakra-accordion__item",n),__css:d}),(0,s.Pu)(t,{isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled})))}));l.__DEV__&&(P.displayName="AccordionItem");var D=(0,a.forwardRef)(((e,r)=>{var{getButtonProps:t}=S(),n=t(e,r),i=C({display:"flex",alignItems:"center",width:"100%",transition:"all 0.2s",outline:0},(0,a.useStyles)().button);return u.createElement(a.chakra.button,C({},n,{className:(0,l.cx)("chakra-accordion__button",e.className),__css:i}))}));l.__DEV__&&(D.displayName="AccordionButton");var R=(0,a.forwardRef)(((e,r)=>{var{reduceMotion:t}=O(),{getPanelProps:n,isOpen:i}=S(),o=n(e,r),s=(0,l.cx)("chakra-accordion__panel",e.className),c=(0,a.useStyles)();t||delete o.hidden;var d=u.createElement(a.chakra.div,C({},o,{__css:c.panel,className:s}));return t?d:u.createElement(v,{in:i},d)}));l.__DEV__&&(R.displayName="AccordionPanel");var j=e=>{var{isOpen:r,isDisabled:t}=S(),{reduceMotion:a}=O(),i={fontSize:"1.25em",opacity:t?.4:1,transform:r?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center"};return u.createElement(n.J,C({viewBox:"0 0 24 24","aria-hidden":!0,__css:i},e),u.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};l.__DEV__&&(j.displayName="AccordionIcon")},7497:function(e,r,t){"use strict";t.d(r,{qE:function(){return v}});var n=t(8894),a=t(1180),i=t(5284),o=t(4686),l=t(7294);function s(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=(0,a.forwardRef)(((e,r)=>{var t=c({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:"0",bottom:"0"},(0,a.useStyles)().badge);return l.createElement(a.chakra.div,c({ref:r},e,{className:(0,o.cx)("chakra-avatar__badge",e.className),__css:t}))}));function d(e){var[r,t]=e.split(" ");return r&&t?""+r.charAt(0)+t.charAt(0):r.charAt(0)}o.__DEV__&&(u.displayName="AvatarBadge");var f=e=>{var{name:r,getInitials:t}=e,n=s(e,["name","getInitials"]),i=(0,a.useStyles)();return l.createElement(a.chakra.div,c({"aria-label":r},n,{__css:i.label}),r?null==t?void 0:t(r):null)},m=e=>l.createElement(a.chakra.svg,c({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%"},e),l.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),l.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),p={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},v=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useMultiStyleConfig)("Avatar",e),n=(0,i.Lr)(e),{src:u,name:f,showBorder:v,borderRadius:g="full",onError:y,getInitials:_=d,icon:b=l.createElement(m,null),loading:E,children:w,borderColor:x}=n,O=s(n,["src","name","showBorder","borderRadius","onError","getInitials","icon","loading","children","borderColor"]),k=c({borderRadius:g,borderWidth:v?"2px":void 0},p,t.container);return x&&(k.borderColor=x),l.createElement(a.chakra.span,c({ref:r},O,{className:(0,o.cx)("chakra-avatar",e.className),__css:k}),l.createElement(a.StylesProvider,{value:t},l.createElement(h,{src:u,loading:E,onError:y,getInitials:_,name:f,borderRadius:g,icon:b}),w))}));o.__DEV__&&(v.displayName="Avatar");var h=e=>{var{src:r,onError:t,getInitials:i,name:o,borderRadius:s,loading:c,icon:u=l.createElement(m,null)}=e,d=(0,n.d)({src:r,onError:t});return!r||!("loaded"===d)?o?l.createElement(f,{className:"chakra-avatar__initials",getInitials:i,name:o}):l.cloneElement(u,{role:"img"}):l.createElement(a.chakra.img,{src:r,alt:o,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};o.__DEV__&&(h.displayName="AvatarImage")},8125:function(e,r,t){"use strict";t.d(r,{C:function(){return s}});var n=t(1180),a=t(5284),i=t(4686),o=t(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=(0,n.forwardRef)(((e,r)=>{var t=(0,n.useStyleConfig)("Badge",e),s=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}((0,a.Lr)(e),["className"]);return o.createElement(n.chakra.span,l({ref:r,className:(0,i.cx)("chakra-badge",e.className)},s,{__css:l({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));i.__DEV__&&(s.displayName="Badge")},336:function(e,r,t){"use strict";t.d(r,{X:function(){return s}});var n=t(1180),a=t(5284),i=t(4686),o=t(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=(0,n.forwardRef)(((e,r)=>{var t=(0,n.useStyleConfig)("Heading",e),s=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}((0,a.Lr)(e),["className"]);return o.createElement(n.chakra.h2,l({ref:r,className:(0,i.cx)("chakra-heading",e.className)},s,{__css:t}))}));i.__DEV__&&(s.displayName="Heading")},3762:function(e,r,t){"use strict";t.d(r,{aV:function(){return u},HC:function(){return m}});var n=t(58),a=t(1180),i=t(5284),o=t(4686),l=t(7294);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var u=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useMultiStyleConfig)("List",e),n=(0,i.Lr)(e),{children:u,styleType:d="none",stylePosition:f,spacing:m}=n,p=c(n,["children","styleType","stylePosition","spacing"]),v=(0,o.getValidChildren)(u),h=m?{"& > *:not(style) ~ *:not(style)":{mt:m}}:{};return l.createElement(a.StylesProvider,{value:t},l.createElement(a.chakra.ul,s({ref:r,listStyleType:d,listStylePosition:f,role:"list",__css:s({},t.container,h)},p),v))}));o.__DEV__&&(u.displayName="List");var d=(0,a.forwardRef)(((e,r)=>{var t=c(e,["as"]);return l.createElement(u,s({ref:r,as:"ol",styleType:"decimal",marginLeft:"1em"},t))}));o.__DEV__&&(d.displayName="OrderedList");var f=(0,a.forwardRef)(((e,r)=>{var t=c(e,["as"]);return l.createElement(u,s({ref:r,as:"ul",styleType:"initial",marginLeft:"1em"},t))}));o.__DEV__&&(f.displayName="UnorderedList");var m=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useStyles)();return l.createElement(a.chakra.li,s({ref:r},e,{__css:t.item}))}));o.__DEV__&&(m.displayName="ListItem");var p=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useStyles)();return l.createElement(n.J,s({ref:r,role:"presentation"},e,{__css:t.icon}))}));o.__DEV__&&(p.displayName="ListIcon")},3346:function(e,r,t){"use strict";t.d(r,{iA:function(){return c},hr:function(){return d},p3:function(){return f},Th:function(){return m},Tr:function(){return p},Td:function(){return v}});var n=t(7294),a=t(1180),i=t(5284),o=t(4686);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var c=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useMultiStyleConfig)("Table",e),c=(0,i.Lr)(e),{className:u}=c,d=s(c,["className"]);return n.createElement(a.StylesProvider,{value:t},n.createElement(a.chakra.table,l({role:"table",ref:r,__css:t.table,className:(0,o.cx)("chakra-table",u)},d)))}));o.__DEV__&&(c.displayName="Table");var u=(0,a.forwardRef)(((e,r)=>{var{placement:t="bottom"}=e,i=s(e,["placement"]),o=(0,a.useStyles)();return n.createElement(a.chakra.caption,l({},i,{ref:r,__css:l({},o.caption,{captionSide:t})}))}));o.__DEV__&&(u.displayName="TableCaption");var d=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useStyles)();return n.createElement(a.chakra.thead,l({},e,{ref:r,__css:t.thead}))})),f=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useStyles)();return n.createElement(a.chakra.tbody,l({},e,{ref:r,__css:t.tbody}))})),m=(0,a.forwardRef)(((e,r)=>{var{isNumeric:t}=e,i=s(e,["isNumeric"]),o=(0,a.useStyles)();return n.createElement(a.chakra.th,l({},i,{ref:r,__css:o.th,"data-is-numeric":t}))})),p=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useStyles)();return n.createElement(a.chakra.tr,l({role:"row"},e,{ref:r,__css:t.tr}))})),v=(0,a.forwardRef)(((e,r)=>{var{isNumeric:t}=e,i=s(e,["isNumeric"]),o=(0,a.useStyles)();return n.createElement(a.chakra.td,l({role:"gridcell"},i,{ref:r,__css:o.td,"data-is-numeric":t}))}))}}]);