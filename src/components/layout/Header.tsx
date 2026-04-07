import Link from 'next/link'
import { IconCamper } from '@/components/icons'
import styles from './Header.module.css'

export function Header() {
  return (
    <>
      <div className={styles.promo}>
        Sezon 2025 otwarty - <strong>bezpłatna dostawa kampera</strong> przy rezerwacji 7+ dób
        <Link href="/#fleet" className={styles.promoLink}>Sprawdź ofertę →</Link>
      </div>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <IconCamper size={22} />
            <span>Kamperownia</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/flota">Kampery</Link>
            <Link href="/regulamin">Regulamin</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
          <Link href="/#fleet" className={styles.cta}>Zarezerwuj</Link>
        </div>
      </header>
    </>
  )
}
