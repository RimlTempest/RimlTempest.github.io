import type { Locale, Text } from './i18n'

/** サイト全体のメタ情報。1 箇所で持つ。 */
export const site = {
  name: 'riml',
  fullName: '髙橋 大貴',
  latinName: 'Daiki Takahashi',
  url: 'https://www.riml.work',
  /** 窓の帯に出す表札 */
  domain: 'www.riml.work',
  twitter: '@Fande4d',
  ogImage: '/riml/og.png',
} as const

/** 名前の書き方。英語では漢字を読めない人のほうが多い */
export const displayName: Text = {
  ja: '髙橋 大貴',
  en: 'Daiki Takahashi',
}

export const siteTitle: Text = {
  ja: 'riml — 髙橋 大貴',
  en: 'riml — Daiki Takahashi',
}

export const siteDescription: Text = {
  ja: 'riml（髙橋 大貴）のポートフォリオ。作ったもの、使う道具、連絡先をまとめています。',
  en: "riml (Daiki Takahashi)'s portfolio: what I build, the tools I use, and how to reach me.",
}

export const siteTagline: Text = {
  ja: 'フロントエンドを書く人。青髪と赤い目の看板を掲げています。',
  en: 'A frontend engineer, behind a blue-haired, red-eyed sign.',
}

/** ページ名 — %s — riml の形 */
export function titleTemplate(locale: Locale): string {
  return locale === 'ja' ? `%s — ${site.name}` : `%s — ${site.name}`
}
