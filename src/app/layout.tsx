import type { Metadata, Viewport } from 'next'
import { ServiceWorker } from '@/components/service-worker'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/content/site'
import '@/styles/generated/riml-ds.css'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.url }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: site.name,
    // 帯と同じインク色にするため、標準の黒ではなく半透明にしてこちらで塗る
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
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} のアイコン` }],
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
    creator: site.twitter,
    images: [site.ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#39415b' },
    { media: '(prefers-color-scheme: dark)', color: '#151a29' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <a className="rd-skip-link" href="#main">
          本文へ
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ServiceWorker />
      </body>
    </html>
  )
}
