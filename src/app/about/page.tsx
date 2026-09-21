import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { WindowPanel } from '@/components/window-panel'
import { standing } from '@/content/character'
import {
  currentRole,
  intro,
  profileLinks,
  profileSections,
  talks,
  writings,
} from '@/content/profile'
import { site } from '@/content/site'
import { skillGroups } from '@/content/skills'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '私について',
  description: `${site.fullName}（${site.name}）の詳細。いまの仕事、作っているもの、登壇と記事、使う道具。`,
}

/** 外部リンクは新しいタブで開くので、読み上げ名にもそう書く（WCAG 3.2.5） */
function externalLabel(title: string, where: string) {
  return `${title}（${where}・新しいタブ）`
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
        <WindowPanel title="いまの仕事" lead="名刺に書くくらいのこと。" id="now">
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt className={styles.term}>所属</dt>
              <dd className={styles.desc}>{currentRole.organization}</dd>
            </div>
            <div className={styles.fact}>
              <dt className={styles.term}>役割</dt>
              <dd className={styles.desc}>{currentRole.title}</dd>
            </div>
            <div className={styles.fact}>
              <dt className={styles.term}>拠点</dt>
              <dd className={styles.desc}>{currentRole.location}</dd>
            </div>
            <div className={styles.fact}>
              <dt className={styles.term}>やっていること</dt>
              <dd className={styles.desc}>
                <ul className={styles.duties}>
                  {currentRole.duties.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <p className={styles.availability}>{currentRole.availability}</p>
        </WindowPanel>

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
          title="話したこと"
          lead="スライドを公開しているものはリンクがあります。"
          id="talks"
        >
          <ul className={styles.entries}>
            {talks.map((talk) => (
              <li key={`${talk.event}-${talk.title}`} className={styles.entry}>
                <span className={styles.entryMeta}>{talk.event}</span>
                {talk.url === undefined ? (
                  <span className={styles.entryTitle}>{talk.title}</span>
                ) : (
                  <a
                    className={styles.entryLink}
                    href={talk.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={externalLabel(talk.title, 'Speaker Deck')}
                  >
                    {talk.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </WindowPanel>

        <WindowPanel title="書いたもの" lead="仕事のブログと、個人の記事から。" id="writings">
          <ul className={styles.entries}>
            {writings.map((writing) => (
              <li key={writing.url} className={styles.entry}>
                <span className={styles.entryMeta}>
                  {writing.date} · {writing.where}
                </span>
                <a
                  className={styles.entryLink}
                  href={writing.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={externalLabel(writing.title, writing.where)}
                >
                  {writing.title}
                </a>
              </li>
            ))}
          </ul>
        </WindowPanel>

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

        <WindowPanel title="ほかの場所" lead="活動のもとになっているところ。" id="elsewhere">
          <ul className={styles.entries}>
            {profileLinks.map((link) => (
              <li key={link.url} className={styles.entry}>
                <span className={styles.entryMeta}>{link.label}</span>
                <a
                  className={styles.entryLink}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={externalLabel(link.handle, link.label)}
                >
                  {link.handle}
                </a>
              </li>
            ))}
          </ul>
        </WindowPanel>

        <p className={styles.more}>
          <Link href="/work">作ったものを見る →</Link>
          <Link href="/contact">連絡先を見る →</Link>
        </p>
      </div>
    </div>
  )
}
