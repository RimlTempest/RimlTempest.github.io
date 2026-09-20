import Image from 'next/image'
import Link from 'next/link'
import { FacePicker } from '@/components/face-picker'
import { WindowPanel } from '@/components/window-panel'
import { WorkCard } from '@/components/work-card'
import { ChevronDown, XMark } from '@/components/x-mark'
import { intro } from '@/content/profile'
import { site } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { works } from '@/content/works'
import styles from './page.module.css'

/** トップに出す作品。全部は出さず、いま動いているものだけ */
const featured = works.filter((work) => work.status !== 'private').slice(0, 4)

export default function Home() {
  return (
    <>
      <section className={`riml-container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>フロントエンドを書いています</p>
          <h1 className={styles.name}>{site.name}</h1>
          <span className={styles.nameRule} aria-hidden="true" />
          <p className={styles.latin}>{site.latinName}</p>

          <ul className={styles.introList}>
            {intro.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} href="/work">
              作ったものを見る
            </Link>
            <Link className={styles.ctaSecondary} href="/about">
              私について
            </Link>
          </div>
        </div>

        <div className={styles.heroArt}>
          <span className={styles.disc} aria-hidden="true" />
          <Image
            className={styles.artLayer}
            src="/riml/riml-bust.webp"
            alt={`${site.name} のイラスト`}
            width={768}
            height={768}
            priority
          />
          <Image
            className={`${styles.artLayer} ${styles.artHappy}`}
            src="/riml/riml-bust-happy.webp"
            alt=""
            width={768}
            height={768}
            aria-hidden="true"
          />
          <XMark className={`${styles.xMark} ${styles.x1}`} />
          <XMark className={`${styles.xMark} ${styles.x2}`} />
          <XMark className={`${styles.xMark} ${styles.x3}`} />
        </div>

        <p className={styles.scrollCue}>
          <ChevronDown className={styles.scrollArrow} />
          下へ
        </p>
      </section>

      <section className={`riml-container riml-section riml-rise`} aria-labelledby="faces-title">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle} id="faces-title">
            ごあいさつ
          </h2>
          <p className={styles.sectionLead}>
            キャラクターシートから切り出した 6
            つの表情です。ボタンを押すか、矢印キーで切り替わります。
          </p>
        </div>
        <WindowPanel title="riml の表情" headingLevel={3}>
          <FacePicker />
        </WindowPanel>
      </section>

      <section className="riml-container riml-section riml-rise" aria-labelledby="works-title">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle} id="works-title">
            作ったもの
          </h2>
          <p className={styles.sectionLead}>
            いま動いているものを 4 つ。横に流して、気になったものを開いてください。
          </p>
        </div>
        <div className={styles.workRail}>
          {featured.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
        <p className={styles.hint}>
          <Link href="/work">すべての作品を見る</Link>
        </p>
      </section>

      <section className="riml-container riml-section riml-rise" aria-labelledby="skills-title">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle} id="skills-title">
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

      <section className={`riml-container ${styles.closing}`} aria-labelledby="closing-title">
        <div className={styles.closingArt} aria-hidden="true">
          <span className={styles.closingDisc} />
          <Image
            className={styles.closingImage}
            src="/riml/riml-bust-happy.webp"
            alt=""
            width={768}
            height={768}
          />
        </div>
        <h2 className={styles.sectionTitle} id="closing-title">
          声をかけてください
        </h2>
        <p className={styles.sectionLead}>仕事の話も、ゲームのフレンド申請も、どちらでも。</p>
        <Link className={styles.ctaPrimary} href="/contact">
          連絡先を見る
        </Link>
      </section>
    </>
  )
}
