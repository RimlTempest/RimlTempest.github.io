import type { CSSProperties } from 'react'
import styles from './split-text.module.css'

/** CSS 変数を style に渡すための型。`as` を使わずに書くためだけのもの */
type CharStyle = CSSProperties & { readonly '--riml-i': number }

type SplitTextProps = {
  readonly text: string
  readonly className?: string | undefined
  /** 何文字目から数え始めるか。複数行を続けて出すときに使う */
  readonly offset?: number
}

/** 書記素単位で分ける。絵文字や結合文字を壊さない */
const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' })

/**
 * 1 文字ずつ span に分ける。分割はビルド時に済むのでクライアント JavaScript は要らない。
 *
 * 読み上げが 1 文字ずつにならないよう、**見えない本文をそのまま置き**、分割したほうを
 * aria-hidden にする。role を持たない span に aria-label は付けられない（ARIA の禁止属性。
 * 支援技術によっては読み飛ばされる）。
 */
export function SplitText({ text, className, offset = 0 }: SplitTextProps) {
  const chars = Array.from(segmenter.segment(text), (segment) => segment.segment)
  return (
    <span className={className}>
      <span className="rd-visually-hidden">{text}</span>
      <span className={styles.line} aria-hidden="true">
        {chars.map((char, index) => {
          const style: CharStyle = { '--riml-i': index + offset }
          return (
            // 同じ文字が複数あるので添字を含めた key にする
            <span key={`${char}-${String(index)}`} className={styles.char} style={style}>
              {char}
            </span>
          )
        })}
      </span>
    </span>
  )
}
