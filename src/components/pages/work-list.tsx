import { WorkCard } from '@/components/work-card'
import type { Locale } from '@/content/i18n'
import { ui } from '@/content/ui'
import { works } from '@/content/works'
import styles from './work-list.module.css'

export function WorkListPage({ locale }: { readonly locale: Locale }) {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <h1 className={styles.title}>{ui.worksTitle[locale]}</h1>
        <p className={styles.lead}>{ui.workLead[locale]}</p>
      </header>

      <div className={styles.grid}>
        {works.map((work) => (
          <div key={work.slug} className={`riml-rise ${styles.item}`}>
            <WorkCard work={work} headingLevel={2} locale={locale} />
          </div>
        ))}
      </div>
    </div>
  )
}
