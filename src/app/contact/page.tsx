import type { Metadata } from 'next'
import { CopyField } from '@/components/copy-field'
import { WindowPanel } from '@/components/window-panel'
import { accountsOf, platformLabel } from '@/content/games'
import { socialLinks } from '@/content/links'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '連絡先',
  description: 'riml への連絡先と、リズムゲームのフレンドコード。',
}

const platforms = ['arcade', 'mobile'] as const

export default function ContactPage() {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <h1 className={styles.title}>連絡先</h1>
        <p className={styles.lead}>
          仕事の話は GitHub か X が早いです。フレンドコードはボタンでコピーできます。
        </p>
      </header>

      <div className={styles.panels}>
        <WindowPanel title="アカウント" lead="返事が早い順に並べています。">
          <ul className={styles.socials}>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a className={styles.social} href={link.href} target="_blank" rel="me noreferrer">
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    fillRule="evenodd"
                    aria-hidden="true"
                  >
                    <path d={link.path} />
                  </svg>
                  <span className={styles.socialName}>{link.label}</span>
                  <span className={styles.socialHandle}>{link.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </WindowPanel>

        <WindowPanel title="フレンドコード" lead="音ゲーで遊びましょう。">
          <div className={styles.codes}>
            {platforms.map((platform) => (
              <div key={platform} className={`${styles.codes} ${styles.group}`}>
                <h3 className={styles.groupTitle}>{platformLabel[platform]}</h3>
                {accountsOf(platform).map((account) => (
                  <CopyField key={account.id} name={account.title} value={account.friendCode} />
                ))}
              </div>
            ))}
          </div>
        </WindowPanel>
      </div>
    </div>
  )
}
