import type { ReactNode } from 'react'
import styles from './window-panel.module.css'

type WindowPanelProps = {
  readonly title: string
  /** 見出しのレベル。ページの構造に合わせて呼ぶ側が決める */
  readonly headingLevel?: 2 | 3
  readonly lead?: string
  readonly id?: string
  readonly className?: string
  readonly children: ReactNode
}

/**
 * 「まど」。帯 + 本体。riml-ds の .rd-window / .rd-window-bar / .rd-window-title を使う。
 * 操作の丸は置かない（押せない丸は置かない、ADR-0014）。
 */
export function WindowPanel({
  title,
  headingLevel = 2,
  lead,
  id,
  className,
  children,
}: WindowPanelProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <section className={`rd-window ${className ?? ''}`} id={id}>
      <div className="rd-window-bar">
        <Heading className="rd-window-title">{title}</Heading>
      </div>
      <div className={styles.body}>
        {lead === undefined ? null : <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
    </section>
  )
}
