import Image from 'next/image'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={`riml-container ${styles.wrap}`}>
      <Image
        className={styles.art}
        src="/riml/faces/surprised.webp"
        alt=""
        width={256}
        height={256}
        aria-hidden="true"
      />
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>見つかりませんでした</h1>
      <p className={styles.lead}>
        そのページは引っ越したか、もともと無かったようです。トップから探し直してください。
      </p>
      <Link className={styles.back} href="/">
        トップへ戻る
      </Link>
    </div>
  )
}
