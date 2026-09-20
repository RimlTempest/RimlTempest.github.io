import type { Metadata } from 'next'
import Image from 'next/image'
import { WindowPanel } from '@/components/window-panel'
import { intro, profileSections } from '@/content/profile'
import { site } from '@/content/site'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '私について',
  description: `${site.fullName}（${site.name}）の自己紹介。作っているもの、好きなもの。`,
}

export default function AboutPage() {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <div className={styles.identity}>
          <Image
            className={styles.avatar}
            src="/riml/riml-bust.webp"
            alt=""
            width={768}
            height={768}
            aria-hidden="true"
            priority
          />
          <div className={styles.names}>
            <h1 className={styles.title}>私について</h1>
            <p className={styles.realName}>
              {site.name} / {site.fullName}
            </p>
          </div>
        </div>
        <div className="riml-prose">
          {intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
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
          title="キャラクターシート"
          lead="サイトのあちこちに出てくる riml の設定です。髪どめの × はそのままロゴにもなっています。"
          id="character"
        >
          <div className={styles.sheet}>
            <Image
              className={styles.sheetImage}
              src="/riml/riml-sheet.webp"
              alt="riml の三面図、表情集、小物のキャラクターシート"
              width={1254}
              height={1254}
            />
            <p className={styles.caption}>
              青い髪、赤い目、クリーム色の肌。この 3 色が riml-ds の配色の出発点です。
            </p>
          </div>
        </WindowPanel>
      </div>
    </div>
  )
}
