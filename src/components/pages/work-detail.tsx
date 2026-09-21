import Link from 'next/link'
import { WindowPanel } from '@/components/window-panel'
import type { Locale } from '@/content/i18n'
import { ui } from '@/content/ui'
import type { Work } from '@/content/works'
import { statusLabel } from '@/content/works'
import { externalLabel } from '@/lib/label'
import { routes } from '@/lib/nav'
import styles from './work-detail.module.css'

type WorkDetailProps = {
  readonly work: Work
  readonly locale: Locale
}

export function WorkDetailPage({ work, locale }: WorkDetailProps) {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <p className={styles.back}>
          <Link href={routes[locale].work}>{ui.workBack[locale]}</Link>
        </p>
        <h1 className={styles.title}>{work.name}</h1>
        <p className={styles.summary}>{work.summary[locale]}</p>
      </header>

      <div className={styles.layout}>
        <div className="riml-prose">
          {work.body[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className={styles.links}>
            {work.siteUrl === undefined ? null : (
              <a
                className={styles.linkButton}
                href={work.siteUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={externalLabel(locale, `${work.name}: ${ui.workOpenSite[locale]}`)}
              >
                {ui.workOpenSite[locale]}
              </a>
            )}
            {work.repoUrl === undefined ? null : (
              <a
                className={styles.linkGhost}
                href={work.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={externalLabel(locale, `${work.name}: ${ui.workOpenRepo[locale]}`)}
              >
                {ui.workOpenRepo[locale]}
              </a>
            )}
          </div>
        </div>

        <WindowPanel title={ui.workAbout[locale]} headingLevel={2}>
          <dl className={styles.meta}>
            <div>
              <dt className={styles.term}>{ui.workStatus[locale]}</dt>
              <dd className={styles.value}>{statusLabel[work.status][locale]}</dd>
            </div>
            <div>
              <dt className={styles.term}>{ui.workStack[locale]}</dt>
              <dd>
                <ul className={styles.chips}>
                  {work.stack.map((item) => (
                    <li key={item} className={styles.chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </WindowPanel>
      </div>
    </div>
  )
}
