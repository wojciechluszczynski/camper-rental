import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Europa — Kamperownia',
  description: 'Wynajem kampera na wyjazd do Europy — Niemcy, Skandynawia, Włochy, Chorwacja. Bez ograniczeń kilometrów. Rezerwacja online.',
}

export default function EuropaPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera Europa
          </p>
          <h1 className={styles.h1}>Wynajem kampera Europa</h1>
          <p className={styles.lead}>
            Kamper to najlepsza forma zwiedzania Europy. Bez hoteli, bez kompromisów co do trasy, bez pośpiechu. Wynajmij u nas i jedź — do Skandynawii, Włoch, Chorwacji, gdziekolwiek chcesz.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Popularne trasy europejskie</h2>
            <ul className={styles.ul}>
              <li><strong>Skandynawia:</strong> Oslo, fiordy norweskie, Lofoty (3–4 tygodnie)</li>
              <li><strong>Niemcy i Austria:</strong> Bawaria, Alpy, Dolina Renu (10–14 dni)</li>
              <li><strong>Włochy:</strong> Toskania, Rzym, Cinque Terre, Sycylia (2–3 tygodnie)</li>
              <li><strong>Chorwacja:</strong> wybrzeże Dalmacji, wyspy, parki narodowe (1–2 tygodnie)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Czy można wyjechać za granicę?</h2>
            <p className={styles.p}>
              Tak — nasze kampery posiadają zielone karty ubezpieczeniowe ważne na terenie całej Europy. Brak ograniczeń kilometrów na trasach europejskich. Wymagamy jedynie powiadomienia o kierunku wyjazdu.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Ile kosztuje miesiąc w Europie kamperem?</h2>
            <p className={styles.p}>
              Przy wynajmie powyżej 14 dób oferujemy korzystniejsze stawki. Skontaktuj się z nami, aby otrzymać indywidualną wycenę na dłuższy wyjazd europejski.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Sprawdź dostępność</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
