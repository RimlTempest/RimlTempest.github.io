'use client'

import { usePathname } from 'next/navigation'
import { localeNames, locales, pathForLocale } from '@/content/i18n'
import type { Locale } from '@/content/i18n'
import { ui } from '@/content/ui'
import styles from './locale-switch.module.css'

/**
 * 言語の切り替え。
 *
 * <Link> ではなく <a> にしてあるのは、言語が変わると文書の言語（<html lang>）が
 * 変わるからで、クライアント側の遷移では支援技術に伝わらないため。
 * hreflang を付けて「押すと何語のページに行くか」を先に伝える。
 */
export function LocaleSwitch({ locale }: { readonly locale: Locale }) {
  const pathname = usePathname()

  return (
    <nav className={styles.group} aria-label={ui.languageNav[locale]}>
      {locales.map((target) => (
        <a
          key={target}
          className={`${styles.link} ${target === locale ? (styles.current ?? '') : ''}`}
          href={pathForLocale(pathname, target)}
          hrefLang={target}
          lang={target}
          aria-current={target === locale ? 'true' : undefined}
        >
          {localeNames[target]}
        </a>
      ))}
    </nav>
  )
}
