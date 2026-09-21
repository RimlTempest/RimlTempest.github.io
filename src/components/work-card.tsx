import Link from 'next/link'
import type { Locale } from '@/content/i18n'
import { ui } from '@/content/ui'
import { externalLabel } from '@/lib/label'
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
  readonly locale: Locale
}

/**
 * 作品 1 つのカード。
 *
 * リンクの文言（「くわしく」「リポジトリ」）は単体では行き先が分からないので、
 * aria-label で作品名を足す（WCAG 2.4.9 リンクの目的・リンクのみ）。見えている文言は
 * aria-label に必ず含める（WCAG 2.5.3 名前に含まれるラベル）。
 * 外部リンクは新しいタブで開くので、そのことも名前に書く（WCAG 3.2.5 要求による変化）。
 */
export function WorkCard({ work, headingLevel = 3, locale }: WorkCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const detailLabel = ui.workDetail[locale]
  const detailAria = `${work.name}: ${detailLabel}`
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <Heading className={styles.name}>{work.name}</Heading>
        <span className={`${styles.status} ${statusClass[work.status]}`}>
          {statusLabel[work.status][locale]}
        </span>
      </div>

      <p className={styles.summary}>{work.summary[locale]}</p>

      <ul className={styles.stack}>
        {work.stack.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        {/* typedRoutes は動的ルートを型で確かめるので、言語ごとに別の Link を置く。
            1 つにまとめると href の型が和集合になり、どちらのルートにも当たらなくなる */}
        {locale === 'ja' ? (
          <Link className={styles.detail} href={`/work/${work.slug}`} aria-label={detailAria}>
            {detailLabel}
          </Link>
        ) : (
          <Link className={styles.detail} href={`/en/work/${work.slug}`} aria-label={detailAria}>
            {detailLabel}
          </Link>
        )}
        {work.siteUrl === undefined ? null : (
          <a
            className={styles.external}
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
            className={styles.external}
            href={work.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={externalLabel(locale, `${work.name}: ${ui.workRepo[locale]}`)}
          >
            {ui.workRepo[locale]}
          </a>
        )}
      </div>
    </article>
  )
}
