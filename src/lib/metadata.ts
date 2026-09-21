import type { Metadata } from 'next'
import type { Locale } from '@/content/i18n'
import { htmlLang, ogLocale } from '@/content/i18n'
import { site, siteDescription, siteTitle } from '@/content/site'

/**
 * ページのメタ情報。
 *
 * 言語ごとに別の URL を出すので、alternates で互いを指す。
 * canonical は自分自身、languages は両方（x-default は日本語＝既定）。
 */
export function pageMetadata(options: {
  readonly locale: Locale
  /** 日本語版のパス。`/about` のように先頭 `/`、末尾 `/` なし。トップは '' */
  readonly path: string
  readonly title?: string
  readonly description: string
}): Metadata {
  const { locale, path, title, description } = options
  const ja = `${path}/`
  const en = `/en${path}/`
  const self = locale === 'ja' ? ja : en

  return {
    ...(title === undefined ? {} : { title }),
    description,
    alternates: {
      canonical: self,
      languages: { ja, en, 'x-default': ja },
    },
    openGraph: {
      type: 'website',
      url: `${site.url}${self}`,
      siteName: site.name,
      title: title ?? siteTitle[locale],
      description,
      locale: ogLocale[locale],
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
  }
}

/** <html lang> に入れる値 */
export function langOf(locale: Locale): string {
  return htmlLang[locale]
}

/** ルートの既定メタ。layout が使う */
export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: { default: siteTitle[locale], template: `%s — ${site.name}` },
    description: siteDescription[locale],
    applicationName: site.name,
    authors: [{ name: site.fullName, url: site.url }],
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      title: site.name,
      statusBarStyle: 'black-translucent',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
        { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon-180x180.png', sizes: '180x180' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: site.twitter,
      creator: site.twitter,
      images: [site.ogImage],
    },
  }
}
