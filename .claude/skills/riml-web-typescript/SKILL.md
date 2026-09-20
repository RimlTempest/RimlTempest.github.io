---
name: riml-web-typescript
description: riml.work（このサイト）の TypeScript 規約。TS / TSX を書く・直す・レビューする前に読む。any / as（as const を除く）/ ! / enum / class を禁止し、Server Component を既定にする。「型が決まらない」「as で通した」「'use client' を足すか」「default export していいか」で発火。
---

# riml.work TypeScript 規約

riml-ds（`vendor/riml-ds`）の規約をそのまま引き継ぐ。詳しい背景と型パターンは
`vendor/riml-ds/.claude/skills/riml-ds-typescript/` を読む。ここには**このサイト固有の差分**だけを書く。

`.oxlintrc.json` が `vendor/riml-ds/tools/lint/oxlint-plugin` を読み込んでいるので、
禁止事項は機械的に落ちる。lint を回避せず設計を直す。

## 0. まずこれだけ

| やること                                  | やらないこと                                     |
| ----------------------------------------- | ------------------------------------------------ |
| `unknown` で受けてパースする              | `any`                                            |
| 型ガード / 判別可能ユニオンで絞る         | `as`（`as const` だけ許可）                      |
| `?? ''` / 早期 return で不在を書く        | `!`（非 null アサーション）                      |
| `const X = {...} as const` + 値のユニオン | `enum`                                           |
| 関数コンポーネント                        | `class`                                          |
| 既定は Server Component                   | とりあえず `'use client'` を足す                 |
| 名前付き export                           | default export（`src/app/**` と story だけ例外） |

## 1. Server Component が既定

`'use client'` を書いてよいのは、**ブラウザの API か React の状態が要るときだけ**。

いま `'use client'` が付いているのは 2 つだけ:

| ファイル                         | 理由                                       |
| -------------------------------- | ------------------------------------------ |
| `src/components/site-header.tsx` | `usePathname()` で現在地に印を付ける       |
| `src/components/copy-field.tsx`  | `navigator.clipboard` と「コピーしました」 |

**状態を持つ UI でも、まず CSS でできないかを考える。**
キービジュアルの立ち絵の切り替え（正面 → 斜め前）は `:hover` / `:focus-within` と
重ね合わせだけ、見出しの 1 文字ずつのリビールはビルド時の分割 + `animation-timeline: view()`
だけで動く。どちらも Server Component のままでクライアント JS は 0 バイト。

## 2. 静的エクスポートの制約

`next.config.ts` は `output: 'export'`。だから次は**使えない**。

- `cookies()` / `headers()` / リクエストに依存する Route Handler
- Server Actions、Middleware、ISR
- `cacheComponents: true`（`output: 'export'` と併用するとビルドが
  `Invariant: PPR cannot be enabled in export mode` で落ちる）
- `next/image` の既定ローダー（`images.unoptimized: true` にしてある）

動的ルートを足すときは `generateStaticParams()` で出す URL を全部列挙する。

## 3. 不在の書き方

`exactOptionalPropertyTypes` と `noUncheckedIndexedAccess` を有効にしてある。

```ts
// ダメ: ! で黙らせる
const first = works[0]!

// よい: 不在を型で持ったまま扱う
const first = works[0]
if (first === undefined) return null

// よい: 省略可能な prop は undefined を明示する
type Props = { readonly className?: string | undefined }
```

JSX で条件表示するときは `&&` ではなく三項で `null` を返す
（`0` や `''` がそのまま描画される事故を防ぐ）。

```tsx
{
  work.siteUrl === undefined ? null : <a href={work.siteUrl}>サイトを開く</a>
}
```

## 4. どこに置くか

| 置き場所            | 何を置くか                                    |
| ------------------- | --------------------------------------------- |
| `src/app/**`        | ルーティングと画面。default export はここだけ |
| `src/components/**` | 画面をまたいで使う部品。名前付き export       |
| `src/content/**`    | 文章とデータ。`throw` しない純粋な値          |
| `src/lib/**`        | 純関数。`throw` しない。テストを隣に置く      |
| `scripts/**`        | ビルド時に走る道具。`console` を使ってよい    |

`src/content` と `src/lib` には `riml-ds/no-throw-in-domain` が掛かる。失敗は
`undefined` か Result 型で返す。
