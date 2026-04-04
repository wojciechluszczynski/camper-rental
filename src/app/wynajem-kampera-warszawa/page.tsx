import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Warszawa — Kamperownia',
  description: 'Wynajem kampera z Warszawy. Odbiór w Warszawie i okolicach, pełne wyposażenie, BLIK i karty. Zarezerwuj online.',
}

export default function WarsawPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera Warszawa
          </p>
          <h1 className={styles.h1}>Wynajem kampera Warszawa</h1>
          <p className={styles.lead}>
            Planujesz wyjazd z Warszawy? Odbierz kampera bezpośrednio w stolicy lub okolicach i ruszaj w drogę — do Polski, Niemiec, Skandynawii lub gdziekolwiek pragniesz.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Dlaczego wynajem kampera z Warszawy?</h2>
            <p className={styles.p}>
              Warszawa to doskonały punkt startowy dla podróżników kamperowych. Bliskość autostrady A2 i S8 pozwala w kilka godzin dotrzeć nad Bałtyk, w Bieszczady lub do Niemiec. Nasz parking odbioru mieści się w łatwo dostępnym miejscu, z bezpłatnym parkingiem i możliwością przyjazdu komunikacją miejską.
            </p>
            <ul className={styles.ul}>
              <li>Odbiór i zdanie kampera w Warszawie</li>
              <li>Możliwość odbioru w weekendy i dni świąteczne</li>
              <li>Pełne instrukcje obsługi przy odbiorze</li>
              <li>Ubezpieczenie AC/OC w cenie</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Co zawiera wynajem?</h2>
            <p className={styles.p}>
              Nasze kampery wyjeżdżają w pełni wyposażone: pościel, ręczniki, kompletna kuchnia (lodówka, kuchenka, naczynia), łazienka z prysznicem, ogrzewanie. Żadnych ukrytych opłat za wyposażenie.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jak zarezerwować?</h2>
            <p className={styles.p}>
              Wybierz termin na stronie głównej, sprawdź dostępność i zapłać online — BLIK, kartą, Apple Pay lub Google Pay. Potwierdzenie otrzymasz na e-mail w ciągu kilku minut.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Sprawdź dostępność</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
