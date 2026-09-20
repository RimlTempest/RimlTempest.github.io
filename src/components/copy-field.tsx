'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './copy-field.module.css'

/** コピー済み表示が戻るまでの時間 */
const copiedDuration = 2000

type CopyFieldProps = {
  readonly name: string
  readonly value: string
}

/**
 * フレンドコードを 1 タップで渡すための行。
 * JavaScript が無い環境でも値は読めるので、ボタンが効かないだけで困らない。
 */
export function CopyField({ name, value }: CopyFieldProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // クリップボードを拒否された（権限・非セキュアな文脈）。値は画面に出ているので
      // 手で選んでコピーできる。表示は変えない
      setCopied(false)
      return
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), copiedDuration)
  }

  return (
    <div className={styles.row}>
      <span className={styles.label}>
        <span className={styles.name}>{name}</span>
        <code className={styles.code}>{value}</code>
      </span>
      <button
        type="button"
        className={`${styles.button} ${copied ? styles.copied : ''}`}
        onClick={() => void copy()}
      >
        {copied ? 'コピーしました' : 'コピー'}
      </button>
    </div>
  )
}
