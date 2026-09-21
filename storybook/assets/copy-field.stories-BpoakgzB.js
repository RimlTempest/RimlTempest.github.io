import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-Z7gd5LxR.js";import{o as n}from"./iframe-Dy3XB7s_.js";import{n as r,t as i}from"./ui-DCWHMVMy.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{a=`_row_1maks_1`,o=`_label_1maks_12`,s=`_name_1maks_17`,c=`_code_1maks_21`,l=`_button_1maks_28`,u=`_copied_1maks_46`,d={row:a,label:o,name:s,code:c,button:l,copied:u}})))()}function p({name:e,value:t,locale:n}){let[i,a]=(0,h.useState)(!1),o=(0,h.useRef)(void 0);(0,h.useEffect)(()=>()=>clearTimeout(o.current),[]);let s=async()=>{try{await navigator.clipboard.writeText(t)}catch{a(!1);return}a(!0),clearTimeout(o.current),o.current=setTimeout(()=>a(!1),g)};return(0,m.jsxs)(`div`,{className:d.row,children:[(0,m.jsxs)(`span`,{className:d.label,children:[(0,m.jsx)(`span`,{className:d.name,children:e}),(0,m.jsx)(`code`,{className:d.code,children:t})]}),(0,m.jsx)(`button`,{type:`button`,className:`${d.button} ${i?d.copied:``}`,onClick:()=>void s(),children:i?r.copied[n]:r.copy[n]})]})}var m,h,g;function _(){return(_=e((()=>{m=n(),h=t(),i(),f(),g=2e3,p.__docgenInfo={description:`フレンドコードを 1 タップで渡すための行。
JavaScript が無い環境でも値は読めるので、ボタンが効かないだけで困らない。`,methods:[],displayName:`CopyField`,props:{name:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`string`},description:``},locale:{required:!0,tsType:{name:`Locale`},description:``}}}})))()}var v,y,b,x,S;function C(){return(C=e((()=>{_(),v={title:`components/CopyField`,component:p,parameters:{layout:`centered`},args:{name:`CHUNITHM`,value:`1007302938635`,locale:`ja`}},y={},b={args:{name:`CHUNITHM`,value:`1007302938635`,locale:`en`}},x={args:{name:`ガルパ`,value:`349329`,locale:`ja`}},S=[`Default`,`English`,`ShortCode`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'CHUNITHM',
    value: '1007302938635',
    locale: 'en'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'ガルパ',
    value: '349329',
    locale: 'ja'
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as Default,b as English,x as ShortCode,S as __namedExportsOrder,v as default};