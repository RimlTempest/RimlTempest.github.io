import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { WindowPanel } from '@/components/window-panel'
import { standing } from '@/content/character'
import { intro, profileSections } from '@/content/profile'
import { site } from '@/content/site'
import { skillGroups } from '@/content/skills'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '私について',
  description: `${site.fullName}（${site.name}）の自己紹介。いま作っているもの、使う道具、好きなもの。`,
}

export default function AboutPage() {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <figure className={styles.headArt}>
          <Image
            className={styles.headArtImage}
            src={standing.src}
            alt={`${site.name} の立ち絵`}
            width={standing.width}
            height={standing.height}
            priority
          />
        </figure>
        <div className={styles.headText}>
          <h1 className={styles.title}>私について</h1>
          <p className={styles.names}>
            {site.name} / {site.fullName}
          </p>
          <div className="riml-prose">
            {intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </header>

      <div className={styles.sections}>
        {profileSections.map((section) => (
          <WindowPanel key={section.id} title={section.title} lead={section.lead} id={section.id}>
            <dl className={styles.highlights}>
              {section.highlights.map((highlight) => (
                <div key={highlight.label}>
                  <dt className={styles.term}>{highlight.label}</dt>
                  <dd className={styles.desc}>{highlight.detail}</dd>
                </div>
              ))}
            </dl>
          </WindowPanel>
        ))}

        <WindowPanel
          title="使う道具"
          lead="「習熟度 ◯ %」はやめました。実際にどれくらい触っているかで 3 つに分けています。"
          id="tools"
        >
          <dl className={styles.highlights}>
            {skillGroups.map((group) => (
              <div key={group.id}>
                <dt className={styles.term}>{group.title}</dt>
                <dd className={styles.desc}>
                  {group.note}
                  <ul className={styles.tools}>
                    {group.items.map((item) => (
                      <li key={item} className={styles.tool}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </WindowPanel>

        <p className={styles.more}>
          <Link href="/work">作ったものを見る →</Link>
          <Link href="/contact">連絡先を見る →</Link>
        </p>
      </div>
    </div>
  )
}
