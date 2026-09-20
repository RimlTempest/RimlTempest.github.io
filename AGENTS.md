<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# riml.work

riml（髙橋 大貴）のポートフォリオ。**見た目の正は riml-ds**（`vendor/riml-ds`、submodule）で、
このリポジトリはそのトークンと基盤 CSS を読む**利用側**。独自の色・影・角丸を決めない。

Next.js 16（App Router / RSC）を静的エクスポートし、GitHub Pages の `gh-pages` ブランチから
`www.riml.work` で配信している。

## 作業を始める前に読むもの

| 状況                                   | 読むスキル             |
| -------------------------------------- | ---------------------- |
| TS / TSX を書く・直す                  | `riml-web-typescript`  |
| CSS を書く・直す・stylelint が落ちた   | `riml-web-css`         |
| 作品・表情・リンク・文言を足す         | `riml-web-content`     |
| ビルド・デプロイ・submodule の更新     | `riml-web-release`     |
| UI・UX の見直し                        | `better-interface`     |
| 「いま標準で何ができるか」を引く       | `modern-web-guidance`  |
| 機能追加・バグ修正（red → green）      | `tdd`                  |

デザインシステム側の詳しい背景は `vendor/riml-ds/.claude/skills/riml-ds-*` と
`vendor/riml-ds/DESIGN.md`、`vendor/riml-ds/docs/adr/`。

## 絶対に守ること

- **`any` / `as`（`as const` を除く）/ `!` / `enum` / `class` を書かない。**
  `.oxlintrc.json` の `riml-ds/*` ルールが落とす。回避せず設計を直す。
- **色・寸法・時間・角丸の生値を CSS に書かない。** すべて `--rd-*` トークンを参照する。
  トークンに無い寸法だけ、その部品のルートに `--riml-*` として宣言してから使う。
- **`src/styles/generated/` は生成物。手で直さない。** `bun run sync:ds` で作り直す。
- **`vendor/riml-ds` を直接編集しない。** 直すなら riml-ds 側で直して submodule を進める。
- **既定は Server Component。** `'use client'` はブラウザ API か React の状態が要るときだけ。
  状態を持つ UI でも、まず CSS（`:checked` と兄弟セレクタ）でできないかを考える。
- **静的エクスポートの制約を破らない。** `cookies()` / Server Actions / Middleware / ISR /
  `cacheComponents` は使えない。動的ルートは `generateStaticParams()` で全部列挙する。
- **文章とデータは `src/content/**` にだけ置く。** JSX に文言を直接書かない。
- **`public/CNAME` と `public/.nojekyll` を消さない。** 消すと独自ドメインと `_next` が壊れる。
- **既存の `/work/<slug>` を変えない。** 旧サイトからのリンクが切れる。
- **AAA を既定にする。** 本文コントラスト 7:1、ターゲット 44×44、`prefers-reduced-motion`
  で動きは既定オフ、色だけで状態を伝えない。
- **実装より先に失敗するテストを書く。**

## コマンド

```bash
bun run dev          # 開発サーバ（先に sync:ds が走る）
bun run build        # sync:ds → next build（out/ に静的エクスポート）
bun run check        # oxfmt + oxlint + stylelint + typecheck
bun test src         # bun:test（vendor は見ない）
bun run storybook    # Storybook 10
```

コミット前に `bun run check`。lefthook が staged ファイル単位で自動実行する。

## コミット規約

Conventional Commits（lefthook の `commit-msg` が検証する）。scope は領域名。

```
feat(top): add the face picker
fix(contact): keep friend codes copyable without JavaScript
build(ds): update riml-ds submodule
```
