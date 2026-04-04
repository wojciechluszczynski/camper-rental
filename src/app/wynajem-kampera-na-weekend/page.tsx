import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera na Weekend — Kamperownia',
  description: 'Krótki wynajem kampera na weekend lub długi weekend. Minimum 2 doby. Sprawdź dostępność i zarezerwuj na już.',
}

export default function WeekendPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera na weekend
          </p>
          <h1 className={styles.h1}>Wynajem kampera na weekend</h1>
          <p className={styles.lead}>
            Nie potrzebujesz tygodniowego urlopu, żeby uciec z miasta. Wynajem kampera na 2–3 dni to idealny sposób na szybką regenerację i przygodę w długi weekend.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Weekendowe destynacje z Warszawy</h2>
            <ul className={styles.ul}>
              <li><strong>Kampinos:</strong> 40 km od centrum, kempingi na skraju puszczy</li>
              <li><strong>Mazury:</strong> 3 h jazdy — jezioro Śniardwy, Niegocin</li>
              <li><strong>Roztocze:</strong> 4 h — rezerwat, spokój, dzikie rzeki</li>
              <li><strong>Góry Świętokrzyskie:</strong> 3 h — szlaki, widoki, brak tłumów</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Minimum wynajmu</h2>
            <p className={styles.p}>
              Minimalna długość wynajmu to 2 doby. Odbiór możliwy w piątek od 14:00, zdanie w niedzielę do 18:00 — idealne na klasyczny weekend.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Czy kamper jest odpowiedni na krótki wyjazd?</h2>
            <p className={styles.p}>
              Zdecydowanie tak. Kamper eliminuje potrzebę rezerwacji hotelu czy Airbnb. Jeden pojazd = transport + nocleg + kuchnia. Na weekendzie to duża wygoda dla rodziny lub pary.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Sprawdź dostępność na weekend</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
