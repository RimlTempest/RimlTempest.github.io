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
  app/                  ルーティングと画面（App Router）
    page.tsx              トップ。キービジュアル、作品、道具、設定資料への導線
    about/                私について（キャラクターシート付き）
    work/                 作ったもの一覧
    work/[slug]/          作ったもの詳細（generateStaticParams で全 URL を列挙）
    contact/              連絡先とフレンドコード
  components/           画面をまたいで使う部品（+ Storybook の story）
  content/              文章とデータ。ここが唯一のソース
  lib/                  純関数
  styles/
    globals.css           ページの骨格
    generated/            riml-ds の生成物（コミットしない）
public/riml/            キャラクターの画像（WebP）
vendor/riml-ds/         デザインシステム（submodule）
.claude/skills/         コーディング規約のスキル
```

## 作ったものを足す

`src/content/works.ts` に 1 つ足すだけで、一覧・トップ・詳細ページが増えます。
`slug` がそのまま URL（`/work/<slug>/`）になります。詳しくは
`.claude/skills/riml-web-content/SKILL.md` を読んでください。

## 設計上の決めごと

- **キービジュアルの見せ場を CSS だけで作っています。** 床のグリッドは
  `perspective()` と 2 本のグラデーション、放射状の光は `repeating-conic-gradient` 1 枚で、
  画像を 1 枚も足していません。立ち絵の hover での切り替え（正面 → 斜め前）も、
  見出しの 1 文字ずつのリビールも CSS だけなので Server Component のままです。
- **`'use client'` は 3 ファイルだけ。** ヘッダー（現在地の判定）、フレンドコードの
  コピーボタン（`navigator.clipboard`）、動きを止めるボタンです。
- **キャラクターの図版は 1 枚のデザインシートから切り出しています。** 白いジャケットと
  紙の背景は色でほとんど区別がつかないので、線画のエッジを壁にして塗りつぶしを止め、
  半透明の縁からは背景色の混ざりを引き算しています。品質は評価器で機械的に確認します
  （白フチ 0%、抜け残り 0〜2%、内部の穴なし）。
- **動きは `prefers-reduced-motion: no-preference` の中だけ**に書いています。ループする
  装飾（立ち絵の呼吸、床のスクロール、流れる帯）はヘッダーの「動きを止める」で止められます
  （WCAG 2.2.2。5 秒を超えて自動で動くものには止める手段が要る）。スクロール駆動の
  アニメーションは `@supports` で囲み、対応していないブラウザには何も足しません。
- **Cache Components は使っていません。** Next.js 16 は `cacheComponents: true` と
  `output: 'export'` の併用を `Invariant: PPR cannot be enabled in export mode` で
  拒否します。このサイトのデータはすべてビルド時に確定するので、Server Components の
  プリレンダだけで同じ成果物になります。
- **色だけで状態を伝えません。** 公開状態は枠線 + 文言、選択中のピルは塗り + 太字 + 下線。
  強制配色モードではシステム色だけを使います。

## デプロイ

`main` に push すると GitHub Actions が静的エクスポートを `gh-pages` ブランチへ出し、
GitHub Pages が `www.riml.work` で配信します。Storybook は `/storybook/` に同梱されます。

独自ドメインは `public/CNAME` が、`_next` を配信するための `.nojekyll` は
`public/.nojekyll` が支えています。**どちらも消さないでください。**

## ライセンス

コードは MIT。**`public/riml/` のイラストは対象外です**（キャラクター「riml」の画像の
権利は作者に帰属します）。
