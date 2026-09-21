'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/content/i18n'
import { ui } from '@/content/ui'
import { isCurrent, navLabels, navOrder, routes } from '@/lib/nav'
import { LocaleSwitch } from './locale-switch'
import { MotionToggle } from './motion-toggle'
import { ThemeToggle } from './theme-toggle'
import { XMark } from './x-mark'
import styles from './site-header.module.css'

export function SiteHeader({ locale }: { readonly locale: Locale }) {
  const pathname = usePathname()

  return (
    <header className={styles.bar}>
      <span className={styles.dots} aria-hidden="true">
        <span className={`${styles.dot} ${styles.dotClose}`} />
        <span className={`${styles.dot} ${styles.dotExpand}`} />
        <span className={`${styles.dot} ${styles.dotCollapse}`} />
      </span>

      <nav className={styles.nav} aria-label={ui.siteNav[locale]}>
        {navOrder.map((key) => (
          <Link
            key={key}
            href={routes[locale][key]}
            className={styles.link}
            aria-current={isCurrent(pathname, locale, key) ? 'page' : undefined}
          >
            {navLabels[key][locale]}
          </Link>
        ))}
      </nav>

      <div className={styles.end}>
        <LocaleSwitch locale={locale} />
        <ThemeToggle locale={locale} />
        <MotionToggle locale={locale} />
        <Link href={routes[locale].home} className={styles.brand}>
          <XMark className={styles.brandMark ?? ''} />
          <span>riml</span>
        </Link>
      </div>
    </header>
  )
}
