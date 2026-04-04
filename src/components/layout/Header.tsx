import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>Kamperownia</Link>
        <nav className={styles.nav}>
          <Link href="#fleet">Kamery</Link>
          <Link href="#how-it-works">Jak to działa</Link>
          <Link href="#contact">Kontakt</Link>
        </nav>
        <Link href="#fleet" className={styles.cta}>Zarezerwuj</Link>
      </div>
    </header>
  )
}
