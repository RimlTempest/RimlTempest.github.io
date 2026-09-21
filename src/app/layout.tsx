import type { Viewport } from 'next'
import { ServiceWorker } from '@/components/service-worker'
import { SiteChrome } from '@/components/site-chrome'
import { defaultLocale, htmlLang } from '@/content/i18n'
import { rootMetadata } from '@/lib/metadata'
import '@/styles/generated/riml-ds.css'
import '@/styles/globals.css'

export const metadata = rootMetadata(defaultLocale)

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#39415b' },
    { media: '(prefers-color-scheme: dark)', color: '#151a29' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang={htmlLang[defaultLocale]}>
      <head>
        {/*
          配色と言語を、最初の描画より前に <html> へ入れる（public/before-paint.js）。
          next/script の beforeInteractive は Next のローダー経由で走るので描画に間に合わず、
          配色が一瞬ちらつく。同期に読む素の <script> にしてあるのはそのため。
        */}
        <script src="/before-paint.js" />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
        <ServiceWorker />
      </body>
    </html>
  )
}
