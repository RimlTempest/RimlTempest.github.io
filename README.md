# Portfolio

RimlことTakahashi Daikiのポートフォリオページとなります。   
[実際デプロイしたポートフォリオはこちら](https://www.riml.work)

## 概要

私のWeb名刺となるサイトを作成したいと思ったのが動機です。  
私の自己紹介や好きなゲームのフレンドコードを楽に渡せないかと思いそれならばサイトにアクセスするだけで情報が簡単に得られると楽なのではないかと考えました。  
他にもフロントエンド技術が好きということもあり新しい技術を用いて勉強を兼ねて制作しました。  
結果、自分の自己紹介のときに提出したり、フレンドコードを教える際デプロイしたリンクを教え簡単に交換することが可能になりました。  
勉強面でもいろんな機能を徐々に追加したりし学習の助けにもなっています。

## 使用技術

言語: TypeScript  
FW/Lib: Next.js, React.js, ChakraUI, StoryBook, Recoil, Jest
Deploy: GithubPages, GithubAction

## 自己評価 / 感想

デザインの設計が難しかったのが一番印象に残りました。  
`AtomicDesign`を元に制作しようとふんわりした考えで初めコンポーネント分けで戸惑ったりし曖昧な分け方をしてしまったりと苦労して現在も修正を日々加えてサイトも自分も成長していこうと考えています。
他にも後々BFFかバックエンドを作成するためuseSWRを使用したりと工夫したり学ぶことがたくさんありました。

## 実行方法

### パッケージ導入  
`yarn`
  
### デバック環境立ち上げ  
`yarn dev`

### ビルド方法  
`yarn build`  
※GithubActionsを用いており`mainブランチ`のほうにマージされた場合にGithubPagesにデプロイされるようにしています。

### storybook立ち上げ
`yarn storybook`
  
### lint実行  
`yarn lint`
  
### JESTを用いたテスト
`yarn test`

## 参考文献
[Next.js & TypeScriptについて](https://nextjs.org/learn/excel/typescript)  
[Next.jsについて](https://zenn.dev/awakei/scraps/963ad964165e68495821)  
[chakraUIについて](https://chakra-ui.com/docs/getting-started)  
[motionを使ったアニメーションについて](https://chakra-ui.com/guides/integrations/with-framer)  
[デプロイ時のhaskyエラーについて](https://qiita.com/nguyenduyta/items/321a24aae6b7d322c8dc)  
[storybook導入について](https://storybook.js.org/docs/react/get-started/introduction)  
[storybookとchakraUIの同棲について](https://suzukalight.com/blog/posts/2021-01-19-storybook-nextjs-chakraui)  
[storybookの使い方について](https://blog.microcms.io/storybook-react-use/)  
[Next.jsのPWA導入について](https://qiita.com/NozomuTsuruta/items/8991707ff549b1552e78)
