import Image from 'next/image'
import { Fragment } from 'react'
import { faces } from '@/content/faces'
import styles from './face-picker.module.css'

const defaultFace = faces[0]

/**
 * 表情を切り替えるだけの部品。状態はラジオボタンが持つので Server Component のまま、
 * クライアント JavaScript を 1 バイトも積まない。
 */
export function FacePicker() {
  return (
    <fieldset className={styles.picker}>
      <legend className={styles.legend}>顔を選ぶと、ひとこと返ってきます。</legend>

      <div className={styles.row}>
        {faces.map((face) => (
          <Fragment key={face.id}>
            <input
              className={`${styles.input} rd-visually-hidden`}
              type="radio"
              name="riml-face"
              id={`riml-face-${face.id}`}
              value={face.id}
              defaultChecked={face.id === defaultFace?.id}
            />
            <label className={styles.option} htmlFor={`riml-face-${face.id}`}>
              {face.label}
            </label>
          </Fragment>
        ))}

        <div className={styles.stage}>
          {faces.map((face) => (
            <figure key={face.id} className={styles.face} data-face={face.id}>
              <Image
                className={styles.portrait}
                src={face.src}
                alt={`riml の表情: ${face.label}`}
                width={256}
                height={256}
                priority={face.id === defaultFace?.id}
              />
              <figcaption className={styles.line}>{face.line}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </fieldset>
  )
}
