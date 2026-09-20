---
name: riml-web-css
description: riml.work の CSS 規約。CSS Modules を書く・直す前に読む。--rd-* トークン以外の生値禁止、論理プロパティのみ、モーションは prefers-reduced-motion の中だけ、Baseline Newly は @supports。「stylelint が落ちた」「色や寸法をどう書くか」「動きを付けたい」「ダーク/強制配色でどう書くか」で発火。
---

# riml.work CSS 規約

見た目の正は riml-ds（`vendor/riml-ds`）。このサイトは**トークンを参照するだけ**で、
独自の色・影・角丸を決めない。背景は `vendor/riml-ds/.claude/skills/riml-ds-css/SKILL.md`。

`stylelint.config.js` が機械的に落とす。plugin は submodule のものをそのまま使う。

## 0. まずこれだけ

| やること                                                | やらないこと                               |
| ------------------------------------------------------- | ------------------------------------------ |
| `var(--rd-color-text-default)`                          | `#333`、`oklch(…)`、`16px`、`200ms`        |
| `margin-inline-start`、`inset-block-end`、`inline-size` | `margin-left`、`left`、`width`             |
| CSS Modules（`*.module.css`）                           | グローバルなクラスを増やす                 |
| `@media (prefers-reduced-motion: no-preference) { … }`  | 無条件の `transition` / `animation`        |
| `@supports (text-wrap: balance) { … }`                  | Baseline Newly の機能を無条件に書く        |
| `--rd-color-surface-raised`                             | `--rd-color-palette-*`（パレットの直参照） |

## 1. どこに書くか

| ファイル                           | 何を書くか                                          |
| ---------------------------------- | --------------------------------------------------- |
| `src/styles/generated/riml-ds.css` | **生成物。触らない。** `bun run sync:ds` で作り直す |
| `src/styles/globals.css`           | ページの骨格（器の幅、紙の目、見出しの組み）        |
| `src/**/*.module.css`              | その部品・その画面だけの見た目                      |

`riml-ds.css` は `layers.css` → `tokens.css` → `index.css` を連結したもの。
`@layer` の順序はこの 1 枚で決まる。CSS Modules はレイヤーの外なので、
デザインシステムより常に強い。詳細度を上げる必要はない。

## 2. 寸法の逃げ道は `--riml-*`

デザインシステムのトークンに無い寸法（イラストの大きさなど）は、その部品の
**ルート要素にローカル変数として宣言**してから使う。グローバルには置かない。

```css
.picker {
  /* この部品だけの寸法。デザインシステムに一般化する値ではない */
  --riml-face-size: 9rem;
}

.portrait {
  inline-size: var(--riml-face-size);
}
```

CSS 変数は `--rd-`（デザインシステム）か `--riml-`（このサイト）で始める。

## 3. riml-ds から意図的に外した 2 つ

理由をコメントに残してある。勝手に戻さない。

| 規則                       | riml-ds | このサイト | 理由                                                       |
| -------------------------- | ------- | ---------- | ---------------------------------------------------------- |
| `text-align`               | 禁止    | 許可       | 部品ではなくランディングページ。中央揃えの段落が要る       |
| `selector-max-specificity` | `0,3,0` | `0,5,0`    | CSS Modules は 1 ファイルに閉じる。JS 無しの状態表現に必要 |

`animation-timing-function: linear` も許可している。スクロール駆動の
アニメーションは進行をスクロール量に一致させる必要があるため。

## 4. 動き

- 装飾の動きは `@media (prefers-reduced-motion: no-preference)` の**中だけ**。
- 自動再生の演出は置かない。動きはユーザーの操作（hover / focus / スクロール）に**応答**させる。
- スクロール駆動は `@supports ((animation-timeline: view()) and (animation-range: entry))`
  で囲む。装飾なので、対応していないブラウザには**何も足さない**（フォールバックを書かない）。

```css
@media (prefers-reduced-motion: no-preference) {
  @supports ((animation-timeline: view()) and (animation-range: entry)) {
    .riml-rise {
      animation: riml-rise auto var(--rd-motion-easing-standard) backwards;
      animation-timeline: view();
      animation-range: entry 10% entry 70%;
    }
  }
}
```

## 5. 状態は色だけで伝えない

選択中のピルは「塗り + 太字 + 下線」、公開状態のバッジは「枠線の色 + 文言」。
`@media (forced-colors: active)` ではシステム色（`Highlight` / `CanvasText` / `ButtonText`）
だけを使う。

## 6. stylelint が落ちたとき

| メッセージ                                      | 直し方                                                     |
| ----------------------------------------------- | ---------------------------------------------------------- |
| `Expected variable, function or keyword`        | トークンか `--riml-*` に置き換える                         |
| `Disallowed unit "px"`                          | `rem` にする。枠線の太さだけ `px` を許す                   |
| `property-disallowed-list`                      | 論理プロパティにする（`width` → `inline-size`）            |
| `… は @media (prefers-reduced-motion …) で囲む` | 動きの宣言を `no-preference` の中へ移す                    |
| `Expected shorthand property "border-…"`        | `border-block-end: var(--rd-border-width-default) solid …` |
| `no-palette-token`                              | `--rd-color-palette-*` をやめ、意味のトークンを使う        |
