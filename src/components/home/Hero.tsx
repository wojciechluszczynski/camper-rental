import Link from 'next/link'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>🚐 Najlepsza flota w Polsce</span>
          <h1 className={styles.headline}>
            Twoja przygoda<br />
            <span className={styles.highlight}>zaczyna się tutaj</span>
          </h1>
          <p className={styles.subtitle}>
            Wynajmij komfortowego kampera i odkryj Polskę oraz Europę.
            Pełne wyposażenie, elastyczne terminy, prosta rezerwacja.
          </p>
          <div className={styles.actions}>
            <Link href="#fleet" className={styles.btnPrimary}>
              Zobacz kamery
            </Link>
            <Link href="#how-it-works" className={styles.btnSecondary}>
              Jak to działa?
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><strong>50+</strong><span>Szczęśliwych klientów</span></div>
            <div className={styles.stat}><strong>3</strong><span>Kamery w flocie</span></div>
            <div className={styles.stat}><strong>5★</strong><span>Średnia ocena</span></div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imagePlaceholder}>
            <span>🚐</span>
          </div>
        </div>
      </div>
    </section>
  )
}
