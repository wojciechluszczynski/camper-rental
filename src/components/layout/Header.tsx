import Link from 'next/link'
import { IconCamper } from '@/components/icons'
import styles from './Header.module.css'

export function Header() {
  return (
    <>
      <div className={styles.promo}>
        🌟 Sezon 2025 otwarty — <strong>bezpłatna dostawa kampera</strong> przy rezerwacji 7+ dób
        <Link href="/#fleet" className={styles.promoLink}>Sprawdź ofertę →</Link>
      </div>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <IconCamper size={22} />
            <span>Kamperownia</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/#fleet">Kampery</Link>
            <div className={styles.dropdown}>
              <span className={styles.dropdownTrigger}>Lokalizacje ▾</span>
              <div className={styles.dropdownMenu}>
                <Link href="/wynajem-kampera-rzeszow">Rzeszów i Podkarpacie</Link>
                <Link href="/wynajem-kampera-warszawa">Warszawa</Link>
                <Link href="/wynajem-kampera-polska">Cała Polska</Link>
                <Link href="/wynajem-kampera-europa">Europa</Link>
                <Link href="/wynajem-kampera-na-weekend">Na weekend</Link>
              </div>
            </div>
            <a href="mailto:kontakt@kamperownia.eu">Kontakt</a>
          </nav>
          <Link href="/#fleet" className={styles.cta}>Zarezerwuj</Link>
        </div>
      </header>
    </>
  )
}
