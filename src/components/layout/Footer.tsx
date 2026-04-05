import Link from 'next/link'
import { IconMail, IconPhone, IconPin, IconCamper } from '@/components/icons'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="kontakt" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <IconCamper size={20} />
            <span>Kamperownia</span>
          </div>
          <p className={styles.tagline}>Twoja przygoda zaczyna się tutaj.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Kontakt</h4>
          <ul className={styles.contactList}>
            <li>
              <IconMail size={16} />
              <a href="mailto:kontakt@kamperownia.eu">kontakt@kamperownia.eu</a>
            </li>
            <li>
              <IconPhone size={16} />
              <a href="tel:+48500818172">+48 500 818 172</a>
            </li>
            <li>
              <IconPin size={16} />
              <span>Lubelska 50, 35-233 Rzeszów</span>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Strony</h4>
          <ul className={styles.linkList}>
            <li><Link href="/wynajem-kampera-rzeszow">Wynajem — Rzeszów</Link></li>
            <li><Link href="/wynajem-kampera-polska">Wynajem — Polska</Link></li>
            <li><Link href="/wynajem-kampera-na-weekend">Wynajem na weekend</Link></li>
            <li><Link href="/wynajem-kampera-europa">Wynajem — Europa</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Płatności</h4>
          <div className={styles.payments}>
            <span className={styles.payBadge}>BLIK</span>
            <span className={styles.payBadge}>Visa</span>
            <span className={styles.payBadge}>Mastercard</span>
            <span className={styles.payBadge}>Apple Pay</span>
            <span className={styles.payBadge}>Google Pay</span>
            <span className={styles.payBadge}>P24</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Kamperownia. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}
