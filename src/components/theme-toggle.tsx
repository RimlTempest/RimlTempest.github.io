'use client'

import { useSyncExternalStore } from 'react'
import type { Locale } from '@/content/i18n'
import styles from './theme-toggle.module.css'

/** 自動は OS の設定に従う。ライト / ダークは利用者が固定したもの */
const schemes = ['auto', 'light', 'dark'] as const

type Scheme = (typeof schemes)[number]

/** localStorage のキー。layout.tsx の先読みスクリプトと合わせる */
const STORAGE_KEY = 'riml-color-scheme'

const labels: Readonly<Record<Locale, Readonly<Record<Scheme, string>>>> = {
  ja: { auto: '自動', light: 'ライト', dark: 'ダーク' },
  en: { auto: 'Auto', light: 'Light', dark: 'Dark' },
}

const actionLabel: Readonly<Record<Locale, string>> = {
  ja: '配色',
  en: 'Color scheme',
}

function isScheme(value: string | null): value is Scheme {
  return value === 'auto' || value === 'light' || value === 'dark'
}

/**
 * 設定は React の外（localStorage と <html>）にある。
 * useSyncExternalStore で読むと、別のタブで変えられたときも追いつける。
 */
const listeners = new Set<() => void>()

function notify() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  globalThis.addEventListener('storage', listener)
  return () => {
    listeners.delete(listener)
    globalThis.removeEventListener('storage', listener)
  }
}

function getSnapshot(): Scheme {
  try {
    const stored = globalThis.localStorage.getItem(STORAGE_KEY)
    return isScheme(stored) ? stored : 'auto'
  } catch {
    // プライベートウィンドウなど、読めない環境では自動のまま
    return 'auto'
  }
}

/** サーバーでは利用者の設定を知りようがないので、自動として描く */
function getServerSnapshot(): Scheme {
  return 'auto'
}

function apply(scheme: Scheme) {
  if (scheme === 'auto') {
    delete document.documentElement.dataset['colorScheme']
  } else {
    document.documentElement.dataset['colorScheme'] = scheme
  }
  try {
    globalThis.localStorage.setItem(STORAGE_KEY, scheme)
  } catch {
    // 保存できなくても、このページの見た目は変わっている
  }
  notify()
}

/**
 * ライト / ダークの切り替え。自動 → ライト → ダーク → 自動 と回る。
 *
 * riml-ds のトークンは `light-dark()` で書かれているので、変えるのは
 * `color-scheme` だけ。色を上書きしないので、高コントラストや強制配色とも喧嘩しない。
 *
 * 最初の描画より前に <html data-color-scheme> を入れるのは layout.tsx の
 * 先読みスクリプトの仕事。ここはその値を読んで、押されたら書き換える。
 */
export function ThemeToggle({ locale }: { readonly locale: Locale }) {
  const scheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const next = schemes[(schemes.indexOf(scheme) + 1) % schemes.length] ?? 'auto'
  const name = labels[locale][scheme]

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => {
        apply(next)
      }}
      title={`${actionLabel[locale]}: ${name}`}
    >
      <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {scheme === 'light' ? (
          // 太陽
          <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-6 1.8 3.2L17 3l-.6 3.6L20 6l-1.8 3.2L21 12l-2.8 1.8L20 18l-3.6-.6L17 21l-3.2-1.8L12 23l-1.8-3.2L7 21l.6-3.6L4 18l1.8-2.8L3 12l2.8-1.8L4 6l3.6.6L7 3l3.2 1.8Z" />
        ) : scheme === 'dark' ? (
          // 月
          <path d="M21 14.5A9 9 0 0 1 9.5 3 9 9 0 1 0 21 14.5Z" />
        ) : (
          // 半分ずつ = OS に従う
          <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm0 2v16a8 8 0 0 1 0-16Z" />
        )}
      </svg>
      <span className={styles.name} aria-hidden="true">
        {name}
      </span>
      <span className="rd-visually-hidden">{`${actionLabel[locale]}: ${name}`}</span>
    </button>
  )
}
