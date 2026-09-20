'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { isCurrent, navItems } from '@/lib/nav'
import { MotionToggle } from './motion-toggle'
import { XMark } from './x-mark'
import styles from './site-header.module.css'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className={styles.bar}>
      <span className={styles.dots} aria-hidden="true">
        <span className={`${styles.dot} ${styles.dotClose}`} />
        <span className={`${styles.dot} ${styles.dotExpand}`} />
        <span className={`${styles.dot} ${styles.dotCollapse}`} />
      </span>

      <nav className={styles.nav} aria-label="サイト内">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.link}
            aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.end}>
        <MotionToggle />
        <Link href="/" className={styles.brand}>
          <XMark className={styles.brandMark ?? ''} />
          <span>riml</span>
        </Link>
      </div>
    </header>
  )
}
