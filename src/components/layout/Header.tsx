import Link from 'next/link'
import { IconCamper } from '@/components/icons'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <IconCamper size={22} />
          <span>Kamperownia</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#fleet">Kampery</Link>
          <Link href="/#jak-to-dziala">Jak to działa</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <Link href="/#fleet" className={styles.cta}>Zarezerwuj</Link>
      </div>
    </header>
  )
}
