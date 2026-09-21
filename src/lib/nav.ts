import type { Locale, Text } from '@/content/i18n'

export type NavKey = 'home' | 'about' | 'work' | 'contact'

/**
 * サイト内のリンク先。typedRoutes が通るように、組み立てずに全部書き出す。
 * 日本語は URL に言語を出さない（既定なので）。
 */
export const routes = {
  ja: { home: '/', about: '/about', work: '/work', contact: '/contact' },
  en: { home: '/en', about: '/en/about', work: '/en/work', contact: '/en/contact' },
} as const satisfies Readonly<Record<Locale, Readonly<Record<NavKey, string>>>>

export const navLabels: Readonly<Record<NavKey, Text>> = {
  home: { ja: 'トップ', en: 'Home' },
  about: { ja: '私について', en: 'About' },
  work: { ja: '作ったもの', en: 'Work' },
  contact: { ja: '連絡先', en: 'Contact' },
}

export const navOrder: readonly NavKey[] = ['home', 'about', 'work', 'contact']

/**
 * ナビゲーションの現在地判定。
 * trailingSlash: true なので pathname は必ず `/` で終わる。
 * /work/DotArt/ のような下の階層でも /work を現在地として扱う。
 */
export function isCurrent(pathname: string, locale: Locale, key: NavKey): boolean {
  const href = routes[locale][key]
  if (key === 'home') return pathname === href || pathname === `${href}/`
  return pathname === href || pathname.startsWith(`${href}/`)
}
