import type { Metadata } from 'next'
import { WorkCard } from '@/components/work-card'
import { works } from '@/content/works'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '作ったもの',
  description: 'riml が作った Web アプリ、デザインシステム、テンプレートの一覧。',
}

export default function WorkIndexPage() {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <h1 className={styles.title}>作ったもの</h1>
        <p className={styles.lead}>
          公開しているものと、いま手を入れているもの。止まっているものも、止まっていると書いてあります。
        </p>
      </header>

      <div className={styles.grid}>
        {works.map((work) => (
          <div key={work.slug} className={`riml-rise ${styles.item}`}>
            <WorkCard work={work} headingLevel={2} />
          </div>
        ))}
      </div>
    </div>
  )
}
