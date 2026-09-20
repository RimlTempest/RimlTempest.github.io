import Image from 'next/image'
import Link from 'next/link'
import { SplitText } from '@/components/split-text'
import { WindowPanel } from '@/components/window-panel'
import { WorkCard } from '@/components/work-card'
import { XMark } from '@/components/x-mark'
import { bust, bustHappy, faces } from '@/content/character'
import { intro } from '@/content/profile'
import { site } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { works } from '@/content/works'
import styles from './page.module.css'

/** トップに出す作品。全部は出さず、いま動いているものだけ */
const featured = works.filter((work) => work.status !== 'private').slice(0, 4)

/** 帯に流す短い言葉。2 周ぶん並べて継ぎ目を消す */
const tickerWords = [
  'frontend engineer',
  'design system',
  'web components',
  'rhythm games',
  'wcag aaa',
  'bun + next.js',
] as const

export default function Home() {
  return (
    <>
      <section className={`riml-container ${styles.kv}`}>
        <span className={styles.stageRays} aria-hidden="true" />
        <span className={styles.stageGrid} aria-hidden="true" />
        <span className={styles.stageGlow} aria-hidden="true" />

        <div className={styles.kvCopy}>
          <p className={styles.kvEyebrow}>PORTFOLIO — {site.latinName}</p>
          <h1 className={styles.kvName}>
            <SplitText text="riml" />
          </h1>
          <span className={styles.kvRule} aria-hidden="true" />
          <p className={styles.kvJa}>{site.fullName}</p>
          <p className={styles.kvLead}>{intro[0]}</p>

          <ul className={styles.kvTags}>
            <li className={styles.kvTag}>TypeScript</li>
            <li className={styles.kvTag}>React / Next.js</li>
            <li className={styles.kvTag}>Lit</li>
            <li className={styles.kvTag}>CSS</li>
          </ul>

          <div className={styles.kvCta}>
            <Link className={styles.buttonPrimary} href="/work">
              作ったものを見る
            </Link>
            <Link className={styles.buttonGhost} href="/about">
              キャラクター設定を見る
            </Link>
          </div>
        </div>

        <figure className={styles.kvArt}>
          <Image
            className={`${styles.kvArtImage} ${styles.kvArtMain}`}
            src={bust.src}
            alt={`${site.name} の立ち絵`}
            width={bust.width}
            height={bust.height}
            priority
          />
          <Image
            className={`${styles.kvArtImage} ${styles.kvArtAlt}`}
            src={bustHappy.src}
            alt=""
            width={bustHappy.width}
            height={bustHappy.height}
            aria-hidden="true"
          />
          <XMark className={`${styles.xMark} ${styles.x1}`} />
          <XMark className={`${styles.xMark} ${styles.x2}`} />
          <XMark className={`${styles.xMark} ${styles.x3}`} />
        </figure>

        <p className={styles.scrollCue}>
          SCROLL
          <span className={styles.scrollTrack} aria-hidden="true" />
        </p>
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <ul className={styles.tickerRow}>
          {[...tickerWords, ...tickerWords].map((word, index) => (
            <li key={`${word}-${String(index)}`} className={styles.tickerItem}>
              {word}
            </li>
          ))}
        </ul>
      </div>

      <section className={styles.dome} aria-labelledby="works-title">
        <div className="riml-container">
          <div className={styles.sectionHead}>
            <h2 className="riml-display-latin" id="works-title">
              <SplitText text="works" />
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
        </div>
      </section>

      <section className="riml-container riml-section" aria-labelledby="skills-title">
        <div className={styles.sectionHead}>
          <h2 className="riml-display-latin" id="skills-title">
            <SplitText text="toolbox" />
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

      <section className={styles.dome} aria-labelledby="about-title">
        <div className="riml-container">
          <div className={styles.sectionHead}>
            <h2 className="riml-display-latin" id="about-title">
              <SplitText text="about" />
            </h2>
          </div>
          <div className={styles.aboutRow}>
            <ul className={styles.faceRow}>
              {faces.map((face) => (
                <li key={face.key} className={styles.faceItem}>
                  <Image
                    className={styles.faceImage}
                    src={face.src}
                    alt={face.label}
                    width={face.width}
                    height={face.height}
                  />
                  <span className={styles.faceLabel}>{face.label}</span>
                </li>
              ))}
            </ul>
            <div className={styles.aboutText}>
              <div className="riml-prose">
                {intro.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className={styles.sectionLead}>
                青い髪、赤い目、クリーム色の肌。この 3 色が riml-ds の配色の出発点になっています。
                全身 4 方向と配色は「私について」に置きました。
              </p>
              <Link className={styles.buttonGhost} href="/about">
                設定資料を開く
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`riml-container ${styles.closing}`} aria-labelledby="contact-title">
        <Image
          className={styles.closingArt}
          src={faces[0]?.src ?? bust.src}
          alt=""
          width={faces[0]?.width ?? bust.width}
          height={faces[0]?.height ?? bust.height}
          aria-hidden="true"
        />
        <h2 className="riml-display-latin" id="contact-title">
          <SplitText text="contact" />
        </h2>
        <p className={styles.sectionLead}>仕事の話も、ゲームのフレンド申請も、どちらでも。</p>
        <Link className={styles.buttonPrimary} href="/contact">
          連絡先を見る
        </Link>
      </section>
    </>
  )
}
