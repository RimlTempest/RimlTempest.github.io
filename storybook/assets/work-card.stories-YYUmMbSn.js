import{n as e,o as t}from"./rolldown-runtime-CsOFd3vK.js";import{t as n}from"./react-Z7gd5LxR.js";import{o as r}from"./iframe-DPVwvDg_.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{i=t(n(),1),{fn:a}=__STORYBOOK_MODULE_TEST__,o=a().mockName(`next/link::Link`),s=e=>e.endsWith(`/`)&&e.length>1?e.slice(0,-1):e,c=e=>{let t=e.indexOf(`#`),n=e.indexOf(`?`),r=n>-1&&(t<0||n<t);return r||t>-1?{pathname:e.substring(0,r?n:t),query:r?e.substring(n,t>-1?t:void 0):``,hash:t>-1?e.slice(t):``}:{pathname:e,query:``,hash:``}},l=e=>{if(!e.startsWith(`/`))return e;let{pathname:t,query:n,hash:r}=c(e);return/\.[^/]+\/?$/.test(t)?`${s(t)}${n}${r}`:`${t.endsWith(`/`)?t:`${t}/`}${n}${r}`},u=i.forwardRef(function({href:e,as:t,replace:n,scroll:r,shallow:a,prefetch:s,passHref:c,legacyBehavior:u,locale:d,onClick:f,children:p,...m},h){let g=typeof e==`object`?`${e.pathname||``}${e.query?`?${new URLSearchParams(e.query).toString()}`:``}${e.hash||``}`:e,_=typeof g==`string`?l(g):g,v=e=>{e.preventDefault(),f?.(e),o(_,{replace:n,scroll:r,shallow:a,prefetch:s,locale:d})};if(u){let e=i.Children.only(p),t={ref:h,onClick:t=>{t.preventDefault(),e.props&&typeof e.props.onClick==`function`&&e.props.onClick(t),o(_,{replace:n,scroll:r,shallow:a,prefetch:s,locale:d})},...m};return(c||e.type===`a`&&!(`href`in(e.props||{})))&&(t.href=_),i.cloneElement(e,t)}return i.createElement(`a`,{ref:h,href:_,onClick:v,...m},p)}),u.displayName=`NextLink`,d=u,a(()=>({pending:!1})).mockName(`next/link::useLinkStatus`)})))()}var p;function m(){return(m=e((()=>{p={live:`公開中`,building:`制作中`,archived:`更新停止`,private:`非公開`}})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{h=`_card_ygkh9_1`,g=`_head_ygkh9_12`,_=`_name_ygkh9_20`,v=`_status_ygkh9_26`,y=`_statusLive_ygkh9_39`,b=`_statusBuilding_ygkh9_44`,x=`_summary_ygkh9_49`,S=`_stack_ygkh9_54`,C=`_chip_ygkh9_63`,w=`_actions_ygkh9_71`,T=`_detail_ygkh9_78`,E=`_external_ygkh9_83`,D={card:h,head:g,name:_,status:v,statusLive:y,statusBuilding:b,summary:x,stack:S,chip:C,actions:w,detail:T,external:E}})))()}function k({work:e}){return(0,A.jsxs)(`article`,{className:D.card,children:[(0,A.jsxs)(`div`,{className:D.head,children:[(0,A.jsx)(`h3`,{className:D.name,children:e.name}),(0,A.jsx)(`span`,{className:`${D.status} ${j[e.status]}`,children:p[e.status]})]}),(0,A.jsx)(`p`,{className:D.summary,children:e.summary}),(0,A.jsx)(`ul`,{className:D.stack,children:e.stack.map(e=>(0,A.jsx)(`li`,{className:D.chip,children:e},e))}),(0,A.jsxs)(`div`,{className:D.actions,children:[(0,A.jsx)(d,{className:D.detail,href:`/work/${e.slug}`,children:`くわしく`}),e.siteUrl===void 0?null:(0,A.jsx)(`a`,{className:D.external,href:e.siteUrl,target:`_blank`,rel:`noreferrer`,children:`サイトを開く`}),e.repoUrl===void 0?null:(0,A.jsx)(`a`,{className:D.external,href:e.repoUrl,target:`_blank`,rel:`noreferrer`,children:`リポジトリ`})]})]})}var A,j;function M(){return(M=e((()=>{A=r(),f(),m(),O(),j={live:D.statusLive??``,building:D.statusBuilding??``,archived:``,private:``},k.__docgenInfo={description:``,methods:[],displayName:`WorkCard`,props:{work:{required:!0,tsType:{name:`Work`},description:``}}}})))()}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{M(),N={slug:`sample`,name:`sample-app`,summary:`カードの見た目を確かめるための見本です。`,body:[`詳細ページ用の本文。`],status:`live`,stack:[`TypeScript`,`Next.js`],siteUrl:`https://example.com`,repoUrl:`https://github.com/example/sample`},P={title:`components/WorkCard`,component:k,parameters:{layout:`centered`},args:{work:N}},F={},I={args:{work:{...N,status:`building`}}},L={args:{work:{...N,status:`archived`}}},R={args:{work:{slug:N.slug,name:N.name,summary:N.summary,body:N.body,status:`private`,stack:N.stack}}},z={args:{work:{...N,summary:`要約が長いときの折り返しを見るための文です。カードの高さは grid-template-rows で揃うので、並べたときに下端がずれません。`,stack:[`TypeScript`,`Next.js`,`React`,`CSS Modules`,`Bun`,`Storybook`]}}},B=[`Live`,`Building`,`Archived`,`Private`,`Dense`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    work: {
      ...sample,
      status: 'building'
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    work: {
      ...sample,
      status: 'archived'
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`公開先もリポジトリも無い場合。「くわしく」だけが残る`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    work: {
      ...sample,
      summary: '要約が長いときの折り返しを見るための文です。カードの高さは grid-template-rows で揃うので、並べたときに下端がずれません。',
      stack: ['TypeScript', 'Next.js', 'React', 'CSS Modules', 'Bun', 'Storybook']
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`長い要約と多いスタックでも高さが揃う`,...z.parameters?.docs?.description}}}})))()}V();export{L as Archived,I as Building,z as Dense,F as Live,R as Private,B as __namedExportsOrder,P as default};