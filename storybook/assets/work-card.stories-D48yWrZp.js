import{n as e,o as t}from"./rolldown-runtime-CsOFd3vK.js";import{t as n}from"./react-Z7gd5LxR.js";import{o as r}from"./iframe-DUe_bN2-.js";import{n as i,t as a}from"./ui-Cfo1MnfM.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=t(n(),1),{fn:s}=__STORYBOOK_MODULE_TEST__,c=s().mockName(`next/link::Link`),l=e=>e.endsWith(`/`)&&e.length>1?e.slice(0,-1):e,u=e=>{let t=e.indexOf(`#`),n=e.indexOf(`?`),r=n>-1&&(t<0||n<t);return r||t>-1?{pathname:e.substring(0,r?n:t),query:r?e.substring(n,t>-1?t:void 0):``,hash:t>-1?e.slice(t):``}:{pathname:e,query:``,hash:``}},d=e=>{if(!e.startsWith(`/`))return e;let{pathname:t,query:n,hash:r}=u(e);return/\.[^/]+\/?$/.test(t)?`${l(t)}${n}${r}`:`${t.endsWith(`/`)?t:`${t}/`}${n}${r}`},f=o.forwardRef(function({href:e,as:t,replace:n,scroll:r,shallow:i,prefetch:a,passHref:s,legacyBehavior:l,locale:u,onClick:f,children:p,...m},h){let g=typeof e==`object`?`${e.pathname||``}${e.query?`?${new URLSearchParams(e.query).toString()}`:``}${e.hash||``}`:e,_=typeof g==`string`?d(g):g,v=e=>{e.preventDefault(),f?.(e),c(_,{replace:n,scroll:r,shallow:i,prefetch:a,locale:u})};if(l){let e=o.Children.only(p),t={ref:h,onClick:t=>{t.preventDefault(),e.props&&typeof e.props.onClick==`function`&&e.props.onClick(t),c(_,{replace:n,scroll:r,shallow:i,prefetch:a,locale:u})},...m};return(s||e.type===`a`&&!(`href`in(e.props||{})))&&(t.href=_),o.cloneElement(e,t)}return o.createElement(`a`,{ref:h,href:_,onClick:v,...m},p)}),f.displayName=`NextLink`,p=f,s(()=>({pending:!1})).mockName(`next/link::useLinkStatus`)})))()}function h(e,t,n){return e===`ja`?n===void 0?`${t}（新しいタブ）`:`${t}（${n}・新しいタブ）`:n===void 0?`${t} (new tab)`:`${t} (${n}, new tab)`}var g;function _(){return(_=e((()=>{g={live:{ja:`公開中`,en:`Live`},building:{ja:`制作中`,en:`Building`},archived:{ja:`更新停止`,en:`Archived`},private:{ja:`非公開`,en:`Private`}}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{v=`_card_l51e7_1`,y=`_head_l51e7_12`,b=`_name_l51e7_20`,x=`_status_l51e7_26`,S=`_statusLive_l51e7_39`,C=`_statusBuilding_l51e7_44`,w=`_summary_l51e7_49`,T=`_stack_l51e7_54`,E=`_chip_l51e7_63`,D=`_actions_l51e7_72`,O=`_detail_l51e7_80`,k=`_external_l51e7_81`,A={card:v,head:y,name:b,status:x,statusLive:S,statusBuilding:C,summary:w,stack:T,chip:E,actions:D,detail:O,external:k}})))()}function M({work:e,headingLevel:t=3,locale:n}){let r=t===2?`h2`:`h3`,a=i.workDetail[n],o=`${e.name}: ${a}`;return(0,N.jsxs)(`article`,{className:A.card,children:[(0,N.jsxs)(`div`,{className:A.head,children:[(0,N.jsx)(r,{className:A.name,children:e.name}),(0,N.jsx)(`span`,{className:`${A.status} ${P[e.status]}`,children:g[e.status][n]})]}),(0,N.jsx)(`p`,{className:A.summary,children:e.summary[n]}),(0,N.jsx)(`ul`,{className:A.stack,children:e.stack.map(e=>(0,N.jsx)(`li`,{className:A.chip,children:e},e))}),(0,N.jsxs)(`div`,{className:A.actions,children:[n===`ja`?(0,N.jsx)(p,{className:A.detail,href:`/work/${e.slug}`,"aria-label":o,children:a}):(0,N.jsx)(p,{className:A.detail,href:`/en/work/${e.slug}`,"aria-label":o,children:a}),e.siteUrl===void 0?null:(0,N.jsx)(`a`,{className:A.external,href:e.siteUrl,target:`_blank`,rel:`noreferrer`,"aria-label":h(n,`${e.name}: ${i.workOpenSite[n]}`),children:i.workOpenSite[n]}),e.repoUrl===void 0?null:(0,N.jsx)(`a`,{className:A.external,href:e.repoUrl,target:`_blank`,rel:`noreferrer`,"aria-label":h(n,`${e.name}: ${i.workRepo[n]}`),children:i.workRepo[n]})]})]})}var N,P;function F(){return(F=e((()=>{N=r(),m(),a(),_(),j(),P={live:A.statusLive??``,building:A.statusBuilding??``,archived:``,private:``},M.__docgenInfo={description:`作品 1 つのカード。

リンクの文言（「くわしく」「リポジトリ」）は単体では行き先が分からないので、
aria-label で作品名を足す（WCAG 2.4.9 リンクの目的・リンクのみ）。見えている文言は
aria-label に必ず含める（WCAG 2.5.3 名前に含まれるラベル）。
外部リンクは新しいタブで開くので、そのことも名前に書く（WCAG 3.2.5 要求による変化）。`,methods:[],displayName:`WorkCard`,props:{work:{required:!0,tsType:{name:`Work`},description:``},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:`見出しのレベル。カードの上に何があるかは呼ぶ側しか知らない`,defaultValue:{value:`3`,computed:!1}},locale:{required:!0,tsType:{name:`Locale`},description:``}}}})))()}var I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{F(),I={slug:`sample`,name:`sample-app`,summary:{ja:`カードの見た目を確かめるための見本です。`,en:`A sample for checking how the card looks.`},body:{ja:[`詳細ページ用の本文。`],en:[`Body text for the detail page.`]},status:`live`,stack:[`TypeScript`,`Next.js`],siteUrl:`https://example.com`,repoUrl:`https://github.com/example/sample`},L={title:`components/WorkCard`,component:M,parameters:{layout:`centered`},args:{work:I,locale:`ja`}},R={},z={args:{locale:`en`}},B={args:{work:{...I,status:`building`}}},V={args:{work:{...I,status:`archived`}}},H={args:{work:{slug:I.slug,name:I.name,summary:I.summary,body:I.body,status:`private`,stack:I.stack}}},U={args:{work:{...I,summary:{ja:`要約が長いときの折り返しを見るための文です。カードの高さは grid-template-rows で揃うので、並べたときに下端がずれません。`,en:`A long summary, to see how it wraps. The cards line up along the bottom because their height comes from grid-template-rows.`},stack:[`TypeScript`,`Next.js`,`React`,`CSS Modules`,`Bun`,`Storybook`]}}},W=[`Live`,`English`,`Building`,`Archived`,`Private`,`Dense`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    work: {
      ...sample,
      status: 'building'
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    work: {
      ...sample,
      status: 'archived'
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    work: {
      slug: sample.slug,
      name: sample.name,
      summary: sample.summary,
      body: sample.body,
      status: 'private',
      stack: sample.stack
    }
  }
}`,...H.parameters?.docs?.source},description:{story:`公開先もリポジトリも無い場合。「くわしく」だけが残る`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    work: {
      ...sample,
      summary: {
        ja: '要約が長いときの折り返しを見るための文です。カードの高さは grid-template-rows で揃うので、並べたときに下端がずれません。',
        en: 'A long summary, to see how it wraps. The cards line up along the bottom because their height comes from grid-template-rows.'
      },
      stack: ['TypeScript', 'Next.js', 'React', 'CSS Modules', 'Bun', 'Storybook']
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`長い要約と多いスタックでも高さが揃う`,...U.parameters?.docs?.description}}}})))()}G();export{V as Archived,B as Building,U as Dense,z as English,R as Live,H as Private,W as __namedExportsOrder,L as default};