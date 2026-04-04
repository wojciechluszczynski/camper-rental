import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Kamperownia</span>
          <p className={styles.tagline}>Twoja przygoda zaczyna się tutaj.</p>
        </div>
        <div className={styles.contact}>
          <h4>Kontakt</h4>
          <p>📧 kontakt@kamperownia.pl</p>
          <p>📞 +48 500 000 000</p>
          <p>📍 Warszawa, Polska</p>
        </div>
        <div className={styles.links}>
          <h4>Płatności</h4>
          <p>🇵🇱 BLIK</p>
          <p>💳 Visa / Mastercard</p>
          <p>🍎 Apple Pay</p>
          <p>🟢 Google Pay</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Kamperownia. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}
