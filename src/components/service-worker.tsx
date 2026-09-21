'use client'

import { useEffect } from 'react'

/**
 * サービスワーカーを登録する。オフラインでも読めるようにするためだけのもの
 * （public/sw.js）。描画には関わらないので、読み込みが落ち着いてから登録する。
 *
 * 失敗しても何も起きない（サイトはそのまま動く）ので、握りつぶしてよい。
 */
export function ServiceWorker() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // 対応していない・権限が無い環境では何もしない
      })
    }

    if (document.readyState === 'complete') {
      register()
      return
    }
    globalThis.addEventListener('load', register, { once: true })
    return () => {
      globalThis.removeEventListener('load', register)
    }
  }, [])

  return null
}
