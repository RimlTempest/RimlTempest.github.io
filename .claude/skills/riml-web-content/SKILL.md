---
name: riml-web-content
description: riml.work のコンテンツの足し方。成果物・キャラクターの図版・SNS リンク・フレンドコード・スキルを足す／直すときに読む。src/content が唯一のソースで、画面はそれを読むだけ。「作品を追加したい」「設定資料の図版を増やしたい」「文言を変えたい」「画像をどこに置くか」で発火。
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
| `src/content/character.ts` | 設定資料の図版（三面図・表情・髪型・衣装）と配色 |

## 作ったものを足す

1. `src/content/works.ts` の `works` に 1 つ足す。
2. `slug` は **URL に出る**ので `/^[\w-]+$/` に収める。既存の slug は
   旧サイトの `/work/<slug>` を引き継いでいる。**消したり変えたりするとリンクが切れる。**
3. `status` は `live` / `building` / `archived` / `private` のどれか。
   `private` のものに `siteUrl` / `repoUrl` を書かない（テストが落ちる）。
4. `bun test src` を走らせる。slug の重複、https でないリンク、空の要約は落ちる。

`generateStaticParams()` が `works` を読むので、ページは自動で増える。

## 設定資料の図版を足す

図版は 1 枚のデザインシートから切り出して `public/riml/sheet/` に置く。
`src/content/character.ts` が置き場所・ラベル・**実寸**を持つ。

1. 画像を `public/riml/sheet/<key>.webp` に書き出す。
2. `src/content/character.ts` の該当する配列に `sheet(key, label, width, height, kind)` を足す。
   - `kind: 'cutout'` … 背景を抜いたもの。そのまま面の上に置ける
   - `kind: 'plate'` … 紙が絵の一部のもの。`PlateGrid` が紙色のカードに載せる
3. `bun test src` を走らせる。`character.test.ts` が **書いた寸法と実ファイルの
   WebP ヘッダを突き合わせる**ので、ずれていれば落ちる。

`next/image` の最適化を切っている（静的エクスポート）ため、寸法がずれると
レイアウトが動く。テストはそこを縛るためにある。

### 切り抜きについて

白いジャケットと紙の背景は色で区別できない（L1 で 8 しか違わない）。色距離だけの
塗りつぶしでは服まで抜けるので、**線画のエッジを壁にして**止める。半透明の縁は
背景色の混ざりを引き算する（`obs = a·fg + (1-a)·bg` を解く）。これをやらないと
暗い背景で白く縁取られる。

表情と顔のアップはタイルの内側に余白がほとんど無いので、切り抜かずに図版として扱う。

## 画像

- 置き場所は `public/riml/`（設定資料は `public/riml/sheet/`）。形式は **WebP**
  （OGP 用の `og.png` とアイコンだけ PNG）。
- `next/image` を使う。`images.unoptimized: true` なので `width` / `height` は
  **実ファイルの寸法**を書く（レイアウトシフトを防ぐため）。
- 装飾の画像は `alt=""` + `aria-hidden="true"`。意味のある画像には日本語の `alt`。

## 文言

riml-ds の Voice & Tone を引き継ぐ。

- 短く、具体的に。ラベルは動詞で始める（「作ったものを見る」「コピー」）。
- 数字で盛らない。根拠が無く更新もされない指標（「習熟度 ◯ %」）を置かない。
- 事実だけを書く。確かめていないことは書かない。
- 丁寧語の「〜してください」はエラー文と誘導だけ。
