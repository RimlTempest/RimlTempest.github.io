'use client'

import { useState } from 'react'
import styles from './motion-toggle.module.css'

/**
 * 画面の動きを止める / 戻す。
 * riml-ds に従ってこのサイトは自動再生する動きを持たないが、スクロールに結んだ
 * 見出しの登場や、ポインタに反応する窓の中の演出も要らない人がいる。
 * prefers-reduced-motion を設定していない人にも同じ止め方を用意する（WCAG 2.2.2）。
 *
 * 状態は <html data-motion="off"> に置く。globals.css がスクロールの動きを止め、
 * StampCanvas はこの属性を見て反応しなくなる。読み込むたびに動く状態から始まるので、
 * localStorage には保存しない（保存すると初期描画と食い違う）。
 */
export function MotionToggle() {
  const [paused, setPaused] = useState(false)

  const toggle = () => {
    const next = !paused
    setPaused(next)
    if (next) {
      document.documentElement.dataset['motion'] = 'off'
    } else {
      delete document.documentElement.dataset['motion']
    }
  }

  const label = paused ? '動きを戻す' : '動きを止める'

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggle}
      aria-pressed={paused}
      title={label}
    >
      <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {paused ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h3v14H7zm7 0h3v14h-3z" />}
      </svg>
      <span className="rd-visually-hidden">{label}</span>
    </button>
  )
}
