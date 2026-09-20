---
name: riml-web-content
description: riml.work のコンテンツの足し方。成果物・表情・SNS リンク・フレンドコード・スキルを足す／直すときに読む。src/content が唯一のソースで、画面はそれを読むだけ。「作品を追加したい」「表情を増やしたい」「文言を変えたい」「画像をどこに置くか」で発火。
---

# riml.work コンテンツ規約

**文章とデータは `src/content/**` にだけ置く。** 画面（`src/app/**`）は読むだけ。
JSX に文言を直接書かない。Server Component がビルド時に読み、静的な HTML になる。

## ファイルの役割

| ファイル                 | 中身                                    |
| ------------------------ | --------------------------------------- |
| `src/content/site.ts`    | サイト名・説明・OGP。メタ情報の一元管理 |
| `src/content/profile.ts` | 自己紹介の 3 行と「私について」の各節   |
| `src/content/works.ts`   | 作ったもの。`slug` が URL になる        |
| `src/content/skills.ts`  | 使う道具。3 つのグループ                |
| `src/content/links.ts`   | SNS。24×24 の塗りパスを一緒に持つ       |
| `src/content/games.ts`   | フレンドコード                          |
| `src/content/faces.ts`   | 表情スプライトとせりふ                  |

## 作ったものを足す

1. `src/content/works.ts` の `works` に 1 つ足す。
2. `slug` は **URL に出る**ので `/^[\w-]+$/` に収める。既存の slug は
   旧サイトの `/work/<slug>` を引き継いでいる。**消したり変えたりするとリンクが切れる。**
3. `status` は `live` / `building` / `archived` / `private` のどれか。
   `private` のものに `siteUrl` / `repoUrl` を書かない（テストが落ちる）。
4. `bun test src` を走らせる。slug の重複、https でないリンク、空の要約は落ちる。

`generateStaticParams()` が `works` を読むので、ページは自動で増える。

## 表情を足す

表情ピッカーは **JavaScript を使わない**。CSS の
`.input[value='<id>']:checked ~ .stage [data-face='<id>']` で 1 枚だけを見せている。
だから **データと CSS の両方**を直す必要がある。

1. 画像を `public/riml/faces/<id>.webp` に置く（256×256、背景は透過）。
2. `src/content/faces.ts` に `{ id, label, line, src }` を足す。
3. `src/components/face-picker.module.css` の対応表に `<id>` の行を 2 つ足す。
4. `bun test src` を走らせる。`faces.test.ts` が対応の抜けを落とす。

## 画像

- 置き場所は `public/riml/`。形式は **WebP**（OGP 用の `og.png` とアイコンだけ PNG）。
- `next/image` を使う。`images.unoptimized: true` なので `width` / `height` は
  **実ファイルの寸法**を書く（レイアウトシフトを防ぐため）。
- 装飾の画像は `alt=""` + `aria-hidden="true"`。意味のある画像には日本語の `alt`。

## 文言

riml-ds の Voice & Tone を引き継ぐ。

- 短く、具体的に。ラベルは動詞で始める（「作ったものを見る」「コピー」）。
- 数字で盛らない。根拠が無く更新もされない指標（「習熟度 ◯ %」）を置かない。
- 事実だけを書く。確かめていないことは書かない。
- 丁寧語の「〜してください」はエラー文と誘導だけ。
