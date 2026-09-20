import Link from 'next/link'
import type { Work } from '@/content/works'
import { statusLabel } from '@/content/works'
import styles from './work-card.module.css'

const statusClass: Readonly<Record<Work['status'], string>> = {
  live: styles.statusLive ?? '',
  building: styles.statusBuilding ?? '',
  archived: '',
  private: '',
}

export function WorkCard({ work }: { readonly work: Work }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.name}>{work.name}</h3>
        <span className={`${styles.status} ${statusClass[work.status]}`}>
          {statusLabel[work.status]}
        </span>
      </div>

      <p className={styles.summary}>{work.summary}</p>

      <ul className={styles.stack}>
        {work.stack.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <Link className={styles.detail} href={`/work/${work.slug}`}>
          くわしく
        </Link>
        {work.siteUrl === undefined ? null : (
          <a className={styles.external} href={work.siteUrl} target="_blank" rel="noreferrer">
            サイトを開く
          </a>
        )}
        {work.repoUrl === undefined ? null : (
          <a className={styles.external} href={work.repoUrl} target="_blank" rel="noreferrer">
            リポジトリ
          </a>
        )}
      </div>
    </article>
  )
}
