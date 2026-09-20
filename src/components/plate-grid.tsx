import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { Plate } from '@/content/character'
import styles from './plate-grid.module.css'

type PlateGridStyle = CSSProperties & {
  readonly '--riml-plate-min'?: string
  readonly '--riml-plate-height'?: string
}

type PlateGridProps = {
  readonly plates: readonly Plate[]
  /** 1 枠の最小幅 */
  readonly min?: string
  /** 図版の高さ */
  readonly height?: string
}

/** 設定資料の図版を並べる */
export function PlateGrid({ plates, min = '9rem', height = '9rem' }: PlateGridProps) {
  const style: PlateGridStyle = { '--riml-plate-min': min, '--riml-plate-height': height }
  return (
    <ul className={styles.grid} style={style}>
      {plates.map((plate) => (
        <li key={plate.key} className={styles.item}>
          <div
            className={plate.kind === 'plate' ? `${styles.stage} ${styles.paper}` : styles.stage}
          >
            <Image
              className={styles.image}
              src={plate.src}
              alt={plate.label}
              width={plate.width}
              height={plate.height}
            />
          </div>
          <div className={styles.caption}>
            <span className={styles.label}>{plate.label}</span>
            {plate.note === undefined ? null : <span className={styles.note}>{plate.note}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}
