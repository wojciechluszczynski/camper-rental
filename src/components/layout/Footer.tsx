'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IconMail, IconPhone, IconPin, IconCamper } from '@/components/icons'
import styles from './Footer.module.css'

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function IconTiktok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSent(true)
  }

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
              <a href="mailto:kontakt@kamperownia.eu">kontakt@kamperownia.eu</a>
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

          <div className={styles.social}>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <IconInstagram size={18} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook size={18} />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <IconTiktok size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Wynajem</h4>
          <ul className={styles.linkList}>
            <li><Link href="/wynajem-kampera-rzeszow">Rzeszów i Podkarpacie</Link></li>
            <li><Link href="/wynajem-kampera-polska">Wynajem po Polsce</Link></li>
            <li><Link href="/wynajem-kampera-na-weekend">Na weekend</Link></li>
            <li><Link href="/wynajem-kampera-europa">Wynajem Europa</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Informacje</h4>
          <ul className={styles.linkList}>
            <li><Link href="/#fleet">Nasza flota</Link></li>
            <li><a href="mailto:kontakt@kamperownia.eu">Kontakt</a></li>
            <li><a href="tel:+48500818172">+48 500 818 172</a></li>
            <li><Link href="/regulamin">Regulamin</Link></li>
            <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Newsletter</h4>
          <p className={styles.newsletterText}>
            Zapisz się po nowości w flocie, wolne terminy i oferty last minute. Bez spamu.
          </p>
          {sent ? (
            <p className={styles.newsletterDone}>Dzięki! Odezwiemy się wkrótce.</p>
          ) : (
            <form className={styles.newsletterForm} onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Twój e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterBtn}>Zapisuję się</button>
            </form>
          )}

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
