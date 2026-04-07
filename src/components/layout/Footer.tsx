import Link from 'next/link'
import { IconMail, IconPhone, IconPin, IconCamper } from '@/components/icons'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="kontakt" className={styles.footer}>
      <div className={styles.inner}>

        {/* Column 1: Brand + contact */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <IconCamper size={22} />
            <span>Kamperownia</span>
          </div>
          <p className={styles.tagline}>Wynajem kamperów z Rzeszowa. Twoja przygoda zaczyna się tutaj.</p>

          <ul className={styles.contactList}>
            <li>
              <IconMail size={15} />
              <a href="mailto:kontakt@">kontakt@</a>
            </li>
            <li>
              <IconPhone size={15} />
              <a href="tel:+48500818172">+48 500 818 172</a>
            </li>
            <li>
              <IconPin size={15} />
              <span>Lubelska 50, 35-233 Rzeszów</span>
            </li>
          </ul>

          <div className={styles.payments}>
            <span className={styles.payBadge}>BLIK</span>
            <span className={styles.payBadge}>Visa</span>
            <span className={styles.payBadge}>Mastercard</span>
            <span className={styles.payBadge}>Apple Pay</span>
            <span className={styles.payBadge}>Google Pay</span>
            <span className={styles.payBadge}>P24</span>
          </div>
        </div>

        {/* Column 2: Campers */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Kampery</h4>
          <ul className={styles.linkList}>
            <li><Link href="/flota">Nasza flota</Link></li>
            <li><Link href="/wynajem-kampera-rzeszow">Rzeszów i Podkarpacie</Link></li>
            <li><Link href="/wynajem-kampera-polska">Wynajem po Polsce</Link></li>
            <li><Link href="/wynajem-kampera-na-weekend">Na weekend</Link></li>
            <li><Link href="/wynajem-kampera-europa">Wynajem Europa</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal + Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Informacje</h4>
          <ul className={styles.linkList}>
            <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/regulamin">Regulamin</Link></li>
            <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© 2026 Kamperownia. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}
