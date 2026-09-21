/**
 * 言語。日本語が既定で、URL には出さない（/about）。英語は /en の下に置く（/en/about）。
 *
 * 既定の言語を URL から外すのは、いまある URL を壊さないため。
 * GitHub Pages には転送が書けないので、/about を /ja/about に動かすと戻れなくなる。
 */
export const locales = ['ja', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ja'

/** 言語ごとの文言。どちらの言語も必ず持つ（片方だけ足して忘れる、が起きない） */
export type Text = Readonly<Record<Locale, string>>

/** 段落の並びなど、複数行の文言 */
export type TextList = Readonly<Record<Locale, readonly string[]>>

/** 言語切り替えに出す名前。その言語自身の表記で書く */
export const localeNames: Readonly<Record<Locale, string>> = {
  ja: '日本語',
  en: 'English',
}

/** <html lang> と hreflang に入れる値 */
export const htmlLang: Readonly<Record<Locale, string>> = {
  ja: 'ja',
  en: 'en',
}

/** OGP の locale */
export const ogLocale: Readonly<Record<Locale, string>> = {
  ja: 'ja_JP',
  en: 'en_US',
}

/** 数字や日付の書式に使う */
export const bcp47: Readonly<Record<Locale, string>> = {
  ja: 'ja-JP',
  en: 'en-US',
}

/** 文言を 1 つ取り出す */
export function text(value: Text, locale: Locale): string {
  return value[locale]
}

/** パスから言語を読む。trailingSlash: true なので /en/ も /en/about/ も来る */
export function localeFromPathname(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ja'
}

/**
 * いま見ているページの、別の言語版のパス。
 * 言語を変えると文書の言語が変わるので、リンクは <a> にして読み込み直す。
 */
export function pathForLocale(pathname: string, locale: Locale): string {
  const bare = pathname === '/en' ? '/' : pathname.replace(/^\/en(?=\/)/, '')
  if (locale === 'ja') return bare === '' ? '/' : bare
  return bare === '/' ? '/en/' : `/en${bare}`
}
