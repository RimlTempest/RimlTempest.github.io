'use client'

import { useState } from 'react'
import styles from './motion-toggle.module.css'

/**
 * ずっと動き続ける装飾を止める / 戻す。
 * WCAG 2.2.2（自動で始まり 5 秒を超える動きには止める手段を用意する）のため。
 *
 * 状態は <html data-motion="off"> に置き、CSS 側の --riml-play が
 * running / paused を切り替える。読み込むたびに動く状態から始まるので、
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
