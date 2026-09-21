'use client'

import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { htmlLang, localeFromPathname } from '@/content/i18n'
import { ui } from '@/content/ui'
import { usePathname } from 'next/navigation'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

/**
 * 帯とフッターと本文の器。
 *
 * ルートの layout は <html> を出すが、どの言語のページかは知らない（サーバー側で
 * パスを読めない）。ここで読んで、
 *   - 中身全体に lang を付ける（文書の一部の言語を正しく宣言する）
 *   - <html lang> も書き換える（文書全体の言語）
 * の 2 つをやる。片方だけだと、JavaScript を切った人か、<html> しか見ない道具の
 * どちらかで言語が合わなくなる。
 */
export function SiteChrome({ children }: { readonly children: ReactNode }) {
  const pathname = usePathname()
  const locale = localeFromPathname(pathname)
  const lang = htmlLang[locale]

  // <html lang> は描画の前にインラインスクリプトが入れる。ここは遷移したときの follow-up
  useEffect(() => {
    if (document.documentElement.lang !== lang) document.documentElement.lang = lang
  }, [lang])

  return (
    <div lang={lang}>
      <a className="rd-skip-link" href="#main">
        {ui.skipToContent[locale]}
      </a>
      <SiteHeader locale={locale} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  )
}
