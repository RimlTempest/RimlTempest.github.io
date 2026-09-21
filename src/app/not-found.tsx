import Image from 'next/image'
import Link from 'next/link'
import { locales } from '@/content/i18n'
import { htmlLang } from '@/content/i18n'
import { ui } from '@/content/ui'
import { routes } from '@/lib/nav'
import styles from './not-found.module.css'

/**
 * 404。静的書き出しでは 1 枚しか出せず（GitHub Pages が /404.html だけを見る）、
 * どの言語の URL で来たかも分からない。だから両方の言語を並べて出す。
 */
export default function NotFound() {
  return (
    <div className={`riml-container ${styles.wrap}`}>
      <Image
        className={styles.art}
        src="/riml/chibi/acc-surprise.webp"
        alt=""
        width={310}
        height={348}
        aria-hidden="true"
      />
      <p className={styles.code}>404</p>
      {locales.map((locale) => (
        <div key={locale} className={styles.block} lang={htmlLang[locale]}>
          <h1 className={styles.title}>{ui.notFoundTitle[locale]}</h1>
          <p className={styles.lead}>{ui.notFoundLead[locale]}</p>
          <Link className={styles.back} href={routes[locale].home}>
            {ui.notFoundCta[locale]}
          </Link>
        </div>
      ))}
    </div>
  )
}
