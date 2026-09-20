import Image from 'next/image'
import Link from 'next/link'
import { SplitText } from '@/components/split-text'
import { StampCanvas } from '@/components/stamp-canvas'
import { WindowPanel } from '@/components/window-panel'
import { WorkCard } from '@/components/work-card'
import { bust, bustHappy } from '@/content/character'
import { intro } from '@/content/profile'
import { site } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { works } from '@/content/works'
import styles from './page.module.css'

/** トップに出す作品。全部は出さず、いま動いているものだけ */
const featured = works.filter((work) => work.status !== 'private').slice(0, 4)

/** 肩書きのかわりに並べる、ふだん触っているもの */
const tags = ['TypeScript', 'React / Next.js', 'Lit', 'CSS'] as const

export default function Home() {
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
              <p className={styles.eyebrow}>portfolio — {site.latinName}</p>
              <h1 className={styles.heroTitle} id="hero-title">
                <span className={styles.heroLatin}>
                  <SplitText text="riml" />
                </span>
                <span className={styles.heroJa}>{site.fullName}</span>
              </h1>
              <span className={styles.signatureRule} aria-hidden="true" />
              <p className={styles.heroLead}>{intro[0]}</p>

              <ul className={styles.tagRow}>
                {tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <div className={styles.ctaRow}>
                <Link className={styles.buttonPrimary} href="/work">
                  作ったものを見る
                </Link>
                <Link className={styles.buttonSecondary} href="/about">
                  私について
                </Link>
              </div>

              <p className={styles.hint}>窓の中をさわると、riml の髪どめが散ります。</p>
            </div>

            <figure className={styles.heroArt}>
              <Image
                className={`${styles.heroArtImage} ${styles.heroArtMain}`}
                src={bust.src}
                alt={`${site.name} の立ち絵`}
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
            作ったもの
          </h2>
          <p className={styles.sectionLead}>
            いま動いているものを 4 つ。止まっているものも、止まっていると書いてあります。
          </p>
        </div>
        <div className={styles.workGrid}>
          {featured.map((work) => (
            <div key={work.slug} className={`riml-rise ${styles.workItem}`}>
              <WorkCard work={work} />
            </div>
          ))}
        </div>
        <p className={styles.more}>
          <Link href="/work">すべての作品を見る →</Link>
        </p>
      </section>

      <div className="riml-container">
        <hr className="riml-rule" />
      </div>

      <section className="riml-container riml-section" aria-labelledby="toolbox-title">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLatin}>toolbox</p>
          <h2 className={styles.sectionTitle} id="toolbox-title">
            使う道具
          </h2>
          <p className={styles.sectionLead}>
            「習熟度 ◯ %」はやめました。実際にどれくらい触っているかで 3 つに分けています。
          </p>
        </div>
        <div className={styles.skillGrid}>
          {skillGroups.map((group) => (
            <WindowPanel key={group.id} title={group.title} headingLevel={3} lead={group.note}>
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
            私について
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
              {intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className={styles.sectionLead}>
              いま作っているもの、使う道具、画面の外で好きなこと。
            </p>
            <Link className={styles.buttonSecondary} href="/about">
              もっと読む
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
              声をかけてください
            </h2>
            <p className={styles.sectionLead}>仕事の話も、ゲームのフレンド申請も、どちらでも。</p>
            <Link className={styles.buttonPrimary} href="/contact">
              連絡先を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
