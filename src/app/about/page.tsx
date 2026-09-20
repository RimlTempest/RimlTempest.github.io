import type { Metadata } from 'next'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { WindowPanel } from '@/components/window-panel'
import { bodyViews, bust, faces, fullSheet, palette } from '@/content/character'
import { intro, profileSections } from '@/content/profile'
import { site } from '@/content/site'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '私について',
  description: `${site.fullName}（${site.name}）の自己紹介と、キャラクターの設定資料。三面図・表情・配色。`,
}

type SwatchStyle = CSSProperties & { readonly '--riml-swatch': string }

export default function AboutPage() {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <figure className={styles.headArt}>
          <Image
            className={styles.headArtImage}
            src={bust.src}
            alt={`${site.name} の立ち絵`}
            width={bust.width}
            height={bust.height}
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
          title="全身 4 方向"
          lead="正面・横・背面・斜め後ろ。横に流して見られます。"
          id="body"
        >
          <ul className={styles.bodyRail}>
            {bodyViews.map((view) => (
              <li key={view.key} className={styles.bodyItem}>
                <Image
                  className={styles.bodyImage}
                  src={view.src}
                  alt={`立ち絵（${view.label}）`}
                  width={view.width}
                  height={view.height}
                />
                <span className={styles.bodyLabel}>{view.label}</span>
              </li>
            ))}
          </ul>
        </WindowPanel>

        <WindowPanel title="表情と小物" lead="ふだんの顔と、かぶりもの。" id="faces">
          <ul className={styles.faceGrid}>
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
        </WindowPanel>

        <WindowPanel
          title="配色"
          lead="riml-ds の --rd-* は、この青・赤・クリームを AAA が成り立つ明度へ移し替えたものです。"
          id="palette"
        >
          <dl className={styles.palette}>
            {palette.map((row) => (
              <div key={row.id} className={styles.paletteRow}>
                <dt className={styles.paletteLabel}>{row.label}</dt>
                <dd>
                  <ul className={styles.swatches}>
                    {row.swatches.map((swatch) => {
                      const style: SwatchStyle = { '--riml-swatch': swatch.hex }
                      return (
                        <li key={swatch.hex + swatch.name} className={styles.swatch}>
                          <span
                            className={styles.chip}
                            style={style}
                            title={`${row.label} / ${swatch.name}`}
                          />
                          <span className={styles.hex}>{swatch.hex}</span>
                        </li>
                      )
                    })}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </WindowPanel>

        <WindowPanel title="設定資料の全体" id="sheet">
          <div className={styles.sheetLink}>
            <Image
              className={styles.sheetImage}
              src={fullSheet.src}
              alt="riml のキャラクターデザインシート。全身 4 方向、表情、髪や小物の詳細"
              width={fullSheet.width}
              height={fullSheet.height}
            />
            <p className={styles.caption}>
              このページの図版は、すべてこの 1 枚から切り出しています。
            </p>
          </div>
        </WindowPanel>
      </div>
    </div>
  )
}
