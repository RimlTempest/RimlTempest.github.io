import { socialLinks } from '@/content/links'
import { site } from '@/content/site'
import styles from './site-footer.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`riml-container ${styles.inner}`}>
        <p className={styles.note}>
          © {site.fullName}（{site.name}）
        </p>
        <ul className={styles.links}>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                className={styles.iconLink}
                href={link.href}
                rel="me noreferrer"
                target="_blank"
                title={`${link.label}: ${link.handle}`}
              >
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  fillRule="evenodd"
                  aria-hidden="true"
                >
                  <path d={link.path} />
                </svg>
                <span className="rd-visually-hidden">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
