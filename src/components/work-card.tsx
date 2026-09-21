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

type WorkCardProps = {
  readonly work: Work
  /** 見出しのレベル。カードの上に何があるかは呼ぶ側しか知らない */
  readonly headingLevel?: 2 | 3
}

/**
 * 作品 1 つのカード。
 *
 * リンクの文言（「くわしく」「リポジトリ」）は単体では行き先が分からないので、
 * aria-label で作品名を足す（WCAG 2.4.9 リンクの目的・リンクのみ）。見えている文言は
 * aria-label に必ず含める（WCAG 2.5.3 名前に含まれるラベル）。
 * 外部リンクは新しいタブで開くので、そのことも名前に書く（WCAG 3.2.5 要求による変化）。
 */
export function WorkCard({ work, headingLevel = 3 }: WorkCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <Heading className={styles.name}>{work.name}</Heading>
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
        <Link
          className={styles.detail}
          href={`/work/${work.slug}`}
          aria-label={`${work.name} をくわしく見る`}
        >
          くわしく
        </Link>
        {work.siteUrl === undefined ? null : (
          <a
            className={styles.external}
            href={work.siteUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${work.name} のサイトを開く（新しいタブ）`}
          >
            サイトを開く
          </a>
        )}
        {work.repoUrl === undefined ? null : (
          <a
            className={styles.external}
            href={work.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${work.name} のリポジトリ（新しいタブ）`}
          >
            リポジトリ
          </a>
        )}
      </div>
    </article>
  )
}
