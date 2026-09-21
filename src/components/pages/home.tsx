import Image from 'next/image'
import Link from 'next/link'
import { SplitText } from '@/components/split-text'
import { StampCanvas } from '@/components/stamp-canvas'
import { WindowPanel } from '@/components/window-panel'
import { WorkCard } from '@/components/work-card'
import { bust, bustHappy } from '@/content/character'
import type { Locale } from '@/content/i18n'
import { intro } from '@/content/profile'
import { displayName, site } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { ui } from '@/content/ui'
import { works } from '@/content/works'
import { routes } from '@/lib/nav'
import styles from './home.module.css'

/** トップに出す作品。全部は出さず、いま動いているものだけ */
const featured = works.filter((work) => work.status !== 'private').slice(0, 4)

/** 肩書きのかわりに並べる、ふだん触っているもの */
const tags = ['TypeScript', 'React / Next.js', 'Lit', 'CSS'] as const

export function HomePage({ locale }: { readonly locale: Locale }) {
  const lines = intro[locale]

  return (
    <>
      {/* 主役は 1 枚の「まど」。帯 + 本体で、riml-ds と同じ骨格にする */}
      <section className={`riml-container ${styles.hero}`} aria-labelledby="hero-title">
        <div className="rd-window">
          <div className="rd-window-bar">
            <p className="rd-window-title">{site.domain}</p>
          </div>
          <div className={styles.heroBody}>
            <StampCanvas />

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                {ui.heroEyebrow[locale]} — {site.latinName}
              </p>
              <h1 className={styles.heroTitle} id="hero-title">
                <span className={styles.heroLatin}>
                  <SplitText text="riml" />
                </span>
                <span className={styles.heroJa}>{displayName[locale]}</span>
              </h1>
              <span className={styles.signatureRule} aria-hidden="true" />
              <p className={styles.heroLead}>{lines[0]}</p>

              <ul className={styles.tagRow}>
                {tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <div className={styles.ctaRow}>
                <Link className={styles.buttonPrimary} href={routes[locale].work}>
                  {ui.heroCta[locale]}
                </Link>
                <Link className={styles.buttonSecondary} href={routes[locale].about}>
                  {ui.heroCtaAbout[locale]}
                </Link>
              </div>

              <p className={styles.hint}>{ui.heroHint[locale]}</p>
            </div>

            <figure className={styles.heroArt}>
              <Image
                className={`${styles.heroArtImage} ${styles.heroArtMain}`}
                src={bust.src}
                alt={site.name}
                width={bust.width}
                height={bust.height}
                priority
              />
              <Image
                className={`${styles.heroArtImage} ${styles.heroArtAlt}`}
                src={bustHappy.src}
                alt=""
                width={bustHappy.width}
                height={bustHappy.height}
                aria-hidden="true"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="riml-container riml-section" aria-labelledby="works-title">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLatin}>works</p>
          <h2 className={styles.sectionTitle} id="works-title">
            {ui.worksTitle[locale]}
          </h2>
          <p className={styles.sectionLead}>{ui.worksLead[locale]}</p>
        </div>
        <div className={styles.workGrid}>
          {featured.map((work) => (
            <div key={work.slug} className={`riml-rise ${styles.workItem}`}>
              <WorkCard work={work} locale={locale} />
            </div>
          ))}
        </div>
        <p className={styles.more}>
          <Link href={routes[locale].work}>{ui.worksMore[locale]}</Link>
        </p>
      </section>

      <div className="riml-container">
        <hr className="riml-rule" />
      </div>

      <section className="riml-container riml-section" aria-labelledby="toolbox-title">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLatin}>toolbox</p>
          <h2 className={styles.sectionTitle} id="toolbox-title">
            {ui.toolboxTitle[locale]}
          </h2>
          <p className={styles.sectionLead}>{ui.toolboxLead[locale]}</p>
        </div>
        <div className={styles.skillGrid}>
          {skillGroups.map((group) => (
            <WindowPanel
              key={group.id}
              title={group.title[locale]}
              headingLevel={3}
              lead={group.note[locale]}
            >
              <ul className={styles.skillItems}>
                {group.items.map((item) => (
                  <li key={item} className={styles.skillItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </WindowPanel>
          ))}
        </div>
      </section>

      <div className="riml-container">
        <hr className="riml-rule" />
      </div>

      <section className="riml-container riml-section" aria-labelledby="about-title">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLatin}>about</p>
          <h2 className={styles.sectionTitle} id="about-title">
            {ui.aboutTitle[locale]}
          </h2>
        </div>
        <div className={styles.aboutRow}>
          <Image
            className={styles.aboutArt}
            src={bustHappy.src}
            alt=""
            width={bustHappy.width}
            height={bustHappy.height}
            aria-hidden="true"
          />
          <div className={styles.aboutText}>
            <div className="riml-prose">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className={styles.sectionLead}>{ui.aboutTeaserLead[locale]}</p>
            <Link className={styles.buttonSecondary} href={routes[locale].about}>
              {ui.aboutMore[locale]}
            </Link>
          </div>
        </div>
      </section>

      <section className={`riml-container ${styles.hero}`} aria-labelledby="contact-title">
        <div className="rd-window">
          <div className="rd-window-bar">
            <p className="rd-window-title">contact</p>
          </div>
          <div className={styles.closingBody}>
            <Image
              className={styles.closingArt}
              src={bustHappy.src}
              alt=""
              width={bustHappy.width}
              height={bustHappy.height}
              aria-hidden="true"
            />
            <h2 className={styles.closingTitle} id="contact-title">
              {ui.closingTitle[locale]}
            </h2>
            <p className={styles.sectionLead}>{ui.closingLead[locale]}</p>
            <Link className={styles.buttonPrimary} href={routes[locale].contact}>
              {ui.closingCta[locale]}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
