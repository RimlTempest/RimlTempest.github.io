---
name: riml-web-release
description: riml.work のビルドと公開。デプロイが落ちた、独自ドメインが消えた、riml-ds を最新にしたい、Storybook を出したいときに読む。GitHub Pages（gh-pages ブランチ）への静的エクスポートと、submodule の更新手順を持つ。「デプロイが失敗した」「CNAME が消えた」「デザインシステムを更新したい」で発火。
---

# riml.work のビルドと公開

## 構成

```
main に push
  → .github/workflows/deploy.yml
    → submodule を取る → bun install → bun run build（out/）
    → Storybook を out/storybook に置く
    → peaceiris/actions-gh-pages で gh-pages ブランチへ
      → GitHub Pages が www.riml.work で配信
```

独自ドメインは **`public/CNAME`**（`www.riml.work`）が `out/CNAME` にコピーされて保たれる。
**このファイルを消すとドメインが外れる。**

## デザインシステムの更新

見た目の正は `vendor/riml-ds`（submodule）。トークンや基盤 CSS を変えたいときは
**riml-ds 側で直して push し、こちらは submodule のコミットを進める**。

```bash
git -C vendor/riml-ds fetch origin
git -C vendor/riml-ds checkout origin/main
bun run sync:ds          # tokens + css をビルドして src/styles/generated/ に出す
bun run check && bun test src && bun run build
git add vendor/riml-ds && git commit -m "build(ds): update riml-ds"
```

`src/styles/generated/riml-ds.css` は**生成物でコミットしない**。`.gitignore` に入れてある。
clone 直後は次の 2 つが要る。

```bash
git submodule update --init --recursive
bun install              # bun run dev / build が sync:ds を先に走らせる
```

## 落ちたときに見るところ

| 症状                                              | 原因と直し方                                                       |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| `vendor/riml-ds が空です`                         | `git submodule update --init --recursive`                          |
| `Invariant: PPR cannot be enabled in export mode` | `cacheComponents` は `output: 'export'` と併用できない。外す       |
| `Type '"/work/"' is not assignable to …RouteImpl` | `typedRoutes` は末尾スラッシュ無しの `href` を要求する（`/work`）  |
| デプロイ後にドメインが `github.io` に戻る         | `public/CNAME` が消えている。戻す                                  |
| GitHub Pages で `_next` が 404                    | `.nojekyll` が無い。`public/.nojekyll` を戻す                      |
| Storybook が 404                                  | `deploy.yml` の `mv storybook-static out/storybook` が走っていない |

## 手元で最終確認

```bash
bun run check      # fmt + oxlint + stylelint + typecheck
bun test src
bun run build && bunx serve out
```

コミットは Conventional Commits（lefthook の `commit-msg` が検証する）。
scope は領域名（`top` / `works` / `contact` / `ds` / `ci`）。
