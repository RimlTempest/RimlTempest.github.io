import Image from 'next/image'
import Link from 'next/link'
import { WindowPanel } from '@/components/window-panel'
import { standing } from '@/content/character'
import type { Locale } from '@/content/i18n'
import { currentRole, intro, profileSections, talks, writings } from '@/content/profile'
import { site } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { ui } from '@/content/ui'
import { externalLabel } from '@/lib/label'
import { routes } from '@/lib/nav'
import styles from './about.module.css'

export function AboutPage({ locale }: { readonly locale: Locale }) {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <figure className={styles.headArt}>
          <Image
            className={styles.headArtImage}
            src={standing.src}
            alt={site.name}
            width={standing.width}
            height={standing.height}
            priority
          />
        </figure>
        <div className={styles.headText}>
          <h1 className={styles.title}>{ui.aboutTitle[locale]}</h1>
          <p className={styles.names}>{ui.aboutNames[locale]}</p>
          <div className="riml-prose">
            {intro[locale].map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </header>

      <div className={styles.sections}>
        <WindowPanel title={ui.nowTitle[locale]} lead={ui.nowLead[locale]} id="now">
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt className={styles.term}>{ui.fieldOrganization[locale]}</dt>
              <dd className={styles.desc}>{currentRole.organization[locale]}</dd>
            </div>
            <div className={styles.fact}>
              <dt className={styles.term}>{ui.fieldTitle[locale]}</dt>
              <dd className={styles.desc}>{currentRole.title[locale]}</dd>
            </div>
            <div className={styles.fact}>
              <dt className={styles.term}>{ui.fieldLocation[locale]}</dt>
              <dd className={styles.desc}>{currentRole.location[locale]}</dd>
            </div>
            <div className={styles.fact}>
              <dt className={styles.term}>{ui.fieldDuties[locale]}</dt>
              <dd className={styles.desc}>
                <ul className={styles.duties}>
                  {currentRole.duties.map((duty) => (
                    <li key={duty.ja}>{duty[locale]}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <p className={styles.availability}>{currentRole.availability[locale]}</p>
        </WindowPanel>

        {profileSections.map((section) => (
          <WindowPanel
            key={section.id}
            title={section.title[locale]}
            lead={section.lead[locale]}
            id={section.id}
          >
            <dl className={styles.highlights}>
              {section.highlights.map((highlight) => (
                <div key={highlight.label.ja}>
                  <dt className={styles.term}>{highlight.label[locale]}</dt>
                  <dd className={styles.desc}>{highlight.detail[locale]}</dd>
                </div>
              ))}
            </dl>
          </WindowPanel>
        ))}

        <WindowPanel title={ui.talksTitle[locale]} lead={ui.talksLead[locale]} id="talks">
          <ul className={styles.entries}>
            {talks.map((talk) => (
              <li key={`${talk.date}-${talk.title}`} className={styles.entry}>
                <span className={styles.entryMeta}>
                  {talk.date} · {talk.event[locale]}
                </span>
                {talk.url === undefined || talk.source === undefined ? (
                  <span className={styles.entryTitle} lang="ja">
                    {talk.title}
                  </span>
                ) : (
                  <a
                    className={styles.entryLink}
                    href={talk.url}
                    target="_blank"
                    rel="noreferrer"
                    lang="ja"
                    aria-label={externalLabel(locale, talk.title, talk.source[locale])}
                  >
                    {talk.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </WindowPanel>

        <WindowPanel title={ui.writingsTitle[locale]} lead={ui.writingsLead[locale]} id="writings">
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
                  lang="ja"
                  aria-label={externalLabel(locale, writing.title, writing.where)}
                >
                  {writing.title}
                </a>
              </li>
            ))}
          </ul>
        </WindowPanel>

        <WindowPanel title={ui.toolboxTitle[locale]} lead={ui.toolboxLead[locale]} id="tools">
          <dl className={styles.highlights}>
            {skillGroups.map((group) => (
              <div key={group.id}>
                <dt className={styles.term}>{group.title[locale]}</dt>
                <dd className={styles.desc}>
                  {group.note[locale]}
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
          <Link href={routes[locale].work}>{ui.aboutToWork[locale]}</Link>
          <Link href={routes[locale].contact}>{ui.aboutToContact[locale]}</Link>
        </p>
      </div>
    </div>
  )
}
