import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WindowPanel } from '@/components/window-panel'
import { findWork, statusLabel, works } from '@/content/works'
import styles from './page.module.css'

type Params = { readonly slug: string }

/** 静的エクスポートなので、出す URL はここで全部決める */
export function generateStaticParams(): Params[] {
  return works.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({
  params,
}: {
  readonly params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const work = findWork(slug)
  if (work === undefined) return { title: '見つかりませんでした' }
  return { title: work.name, description: work.summary }
}

export default async function WorkDetailPage({ params }: { readonly params: Promise<Params> }) {
  const { slug } = await params
  const work = findWork(slug)
  if (work === undefined) notFound()

  return (
    <div className="riml-container">
      <header className={styles.head}>
        <p className={styles.back}>
          <Link href="/work">← 作ったもの</Link>
        </p>
        <h1 className={styles.title}>{work.name}</h1>
        <p className={styles.summary}>{work.summary}</p>
      </header>

      <div className={styles.layout}>
        <div className="riml-prose">
          {work.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className={styles.links}>
            {work.siteUrl === undefined ? null : (
              <a className={styles.linkButton} href={work.siteUrl} target="_blank" rel="noreferrer">
                サイトを開く
              </a>
            )}
            {work.repoUrl === undefined ? null : (
              <a className={styles.linkGhost} href={work.repoUrl} target="_blank" rel="noreferrer">
                リポジトリを見る
              </a>
            )}
          </div>
        </div>

        <WindowPanel title="このプロダクト" headingLevel={2}>
          <dl className={styles.meta}>
            <div>
              <dt className={styles.term}>いまの状態</dt>
              <dd className={styles.value}>{statusLabel[work.status]}</dd>
            </div>
            <div>
              <dt className={styles.term}>使っているもの</dt>
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
