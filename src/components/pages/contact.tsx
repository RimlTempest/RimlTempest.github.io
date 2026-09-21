import { CopyField } from '@/components/copy-field'
import { WindowPanel } from '@/components/window-panel'
import { accountsOf, platformLabel } from '@/content/games'
import type { Locale } from '@/content/i18n'
import { socialLinks } from '@/content/links'
import { ui } from '@/content/ui'
import styles from './contact.module.css'

const platforms = ['arcade', 'mobile'] as const

export function ContactPage({ locale }: { readonly locale: Locale }) {
  return (
    <div className="riml-container">
      <header className={styles.head}>
        <h1 className={styles.title}>{ui.contactTitle[locale]}</h1>
        <p className={styles.lead}>{ui.contactLead[locale]}</p>
      </header>

      <div className={styles.panels}>
        <WindowPanel title={ui.accountsTitle[locale]} lead={ui.accountsLead[locale]}>
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

        <WindowPanel title={ui.friendCodesTitle[locale]} lead={ui.friendCodesLead[locale]}>
          <div className={styles.codes}>
            {platforms.map((platform) => (
              <div key={platform} className={`${styles.codes} ${styles.group}`}>
                <h3 className={styles.groupTitle}>{platformLabel[platform][locale]}</h3>
                {accountsOf(platform).map((account) => (
                  <CopyField
                    key={account.id}
                    name={account.title[locale]}
                    value={account.friendCode}
                    locale={locale}
                  />
                ))}
              </div>
            ))}
          </div>
        </WindowPanel>
      </div>
    </div>
  )
}
