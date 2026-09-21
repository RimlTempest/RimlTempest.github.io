# riml.work

riml（髙橋 大貴）のポートフォリオ。**<https://www.riml.work>** で公開しています。

青髪・赤目のキャラクター「riml」を看板にした、アニメ・ゲームの LP のような 1 枚目と、
作ったもの・使う道具・連絡先をまとめた静的サイトです。

## このサイトの立ち位置

見た目の正は **[riml-ds](https://github.com/RimlTempest/riml-ds)**（`vendor/riml-ds` に
submodule として入れています）。色・寸法・時間・角丸はすべて riml-ds のトークン（`--rd-*`）を
参照していて、このリポジトリは独自の値を持ちません。riml-ds のブランド 7 色は、
このキャラクターの青髪・赤目・クリーム色の肌から来ています。

| | |
| --- | --- |
| フレームワーク | Next.js 16（App Router / React Server Components） |
| 言語 | TypeScript 7 |
| スタイル | CSS Modules + riml-ds のトークンと基盤 CSS |
| ランタイム / パッケージ管理 | Bun 1.4 |
| バンドラ | Turbopack（Next.js）/ Vite 8（Storybook） |
| Lint / Format | oxlint + stylelint 17 / oxfmt |
| テスト | `bun:test` |
| カタログ | Storybook 10（`@storybook/nextjs-vite`） |
| Git フック | lefthook |
| ホスティング | GitHub Pages（静的エクスポート → `gh-pages` ブランチ） |

## はじめかた

```bash
git clone --recurse-submodules https://github.com/RimlTempest/RimlTempest.github.io.git
cd RimlTempest.github.io
mise install          # node / bun を固定のバージョンで入れる
bun install
bunx lefthook install
bun run dev           # http://localhost:3000
```

すでに clone してある場合は submodule を取ってください。

```bash
git submodule update --init --recursive
```

## コマンド

| コマンド | すること |
| --- | --- |
| `bun run dev` | 開発サーバ。先に `sync:ds` が走る |
| `bun run build` | `sync:ds` → `next build`。`out/` に静的エクスポート |
| `bun run serve` | 書き出した `out/` をそのまま配信して最終確認 |
| `bun run check` | oxfmt（差分確認）+ oxlint + stylelint + typecheck |
| `bun test src` | `bun:test`。`vendor/` は見ない |
| `bun run storybook` | Storybook を起動（6006） |
| `bun run sync:ds` | riml-ds をビルドして `src/styles/generated/riml-ds.css` を作り直す |

コミット前に `bun run check`。lefthook が staged ファイル単位で自動実行し、
push 前に typecheck とテストを流します。

## 構成

```
src/
  app/                  ルーティング（App Router）。中身は components/pages/ にある
    page.tsx              /            日本語
    about|work|contact/   /about|/work|/contact
    work/[slug]/          /work/<slug>（generateStaticParams で全 URL を列挙）
    en/                   同じ並びの英語版（/en の下）
    layout.tsx            <html> と先読みスクリプト
    not-found.tsx         404。両方の言語を 1 枚に出す
  components/
    pages/                画面の中身。言語を prop で受け取り、ja / en の両方から呼ばれる
    ...                   画面をまたいで使う部品（+ Storybook の story）
  content/              文章とデータ。ここが唯一のソース
    i18n.ts               言語の定義とパスの変換
    ui.ts                 画面の骨格の文言
  lib/                  純関数（ナビゲーション、メタ情報）
  styles/
    globals.css           ページの骨格
    generated/            riml-ds の生成物（コミットしない）
public/
  riml/                 キャラクターの画像（WebP）
  before-paint.js       配色と言語を最初の描画より前に入れる
  sw.js                 オフライン用のサービスワーカー
vendor/riml-ds/         デザインシステム（submodule）
.claude/skills/         コーディング規約のスキル
```

## 作ったものを足す

`src/content/works.ts` に 1 つ足すだけで、一覧・トップ・詳細ページが、
**日本語と英語の両方**に増えます。`slug` がそのまま URL（`/work/<slug>/` と
`/en/work/<slug>/`）になります。詳しくは
`.claude/skills/riml-web-content/SKILL.md` を読んでください。

## 言語

日本語が既定で、URL には出しません（`/about/`）。英語は `/en` の下に置きます
（`/en/about/`）。既定の言語を URL から外しているのは、いまある URL を壊さないためです
（GitHub Pages には転送が書けないので、`/about/` を `/ja/about/` に動かすと戻れません）。

文言は `Text = { ja: string; en: string }` という型で持つので、**片方だけ足して忘れる**
ことが型で落ちます。登壇や記事の題名は日本語で公開されているものなので、英語版でも
そのまま置き、`lang="ja"` を付けて読み上げだけ切り替えます。

## 配色

OS の設定に従うのが既定です。ヘッダーのボタンで **自動 → ライト → ダーク** と固定でき、
選択は `localStorage` に残ります。切り替えているのは `color-scheme` だけで、色は
riml-ds のトークンが `light-dark()` で持っています。固定した配色は
`public/before-paint.js` が最初の描画より前に `<html>` へ戻すので、OS の配色で
一瞬描いてから切り替わる、ということが起きません。

## 設計上の決めごと

- **見た目は riml-ds の「まど」に従っています。** 面は 1 色（グラデーション・ぼかし・
  フィルタを描かない）、影は硬い、区切りは点線、角丸は 8 / 12 / 16px とピルだけ、
  文字の大きさは type トークンの段まで。
- **モーションは操作への応答にだけ使います。** 自動で動き続けるものは置きません。
  スクロールに結んだ登場は `@supports` で囲み、対応していないブラウザには何も足しません。
  `prefers-reduced-motion` とヘッダーの「動きを止める」で、どちらも止まります。
- **WCAG 2.2 の AAA を守っています。** 本文はライト・ダークの両方で 7:1 以上、
  操作の的は 44×44 以上、外部リンクは読み上げ名に「新しいタブ」と書きます。
  `axe-core` の違反は全ページ 0 です。
- **キャラクターの画像はオーナーが手で切り抜いたものです。** 以前は rembg の
  `isnet-anime` と色キーイングで自動化していましたが、白い上着と紙の色の差が
  **1** しかなく、手で切ったほうがきれいでした。検品はマゼンタ地に置いて
  4 倍に拡大して行います。
- **`'use client'` は必要なところだけ。** ヘッダー（現在地と言語の判定）、言語と配色と
  モーションの切り替え、フレンドコードのコピー、窓の中の canvas、サービスワーカーの登録です。
- **Cache Components は使っていません。** Next.js 16 は `cacheComponents: true` と
  `output: 'export'` の併用を `Invariant: PPR cannot be enabled in export mode` で
  拒否します。このサイトのデータはすべてビルド時に確定するので、Server Components の
  プリレンダだけで同じ成果物になります。
- **色だけで状態を伝えません。** 公開状態は枠線 + 文言、現在地のピルは帯を反転させた塗り +
  `aria-current`。強制配色モードではシステム色だけを使います。

## デプロイ

`main` に push すると GitHub Actions が静的エクスポートを `gh-pages` ブランチへ出し、
GitHub Pages が `www.riml.work` で配信します。Storybook は `/storybook/` に同梱されます。

独自ドメインは `public/CNAME` が、`_next` を配信するための `.nojekyll` は
`public/.nojekyll` が支えています。**どちらも消さないでください。**

## ライセンス

コードは MIT。**`public/riml/` のイラストは対象外です**（キャラクター「riml」の画像の
権利は作者に帰属します）。
