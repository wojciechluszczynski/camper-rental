import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Warszawa - Kamperownia',
  description: 'Wynajem kampera dla klientów z Warszawy i okolic. Odbiór z Rzeszowa lub możliwość dostawy. Pełne wyposażenie, rezerwacja online.',
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
          <h1 className={styles.h1}>Wynajem kampera - klienci z Warszawy</h1>
          <p className={styles.lead}>
            Nasza baza mieści się w Rzeszowie, ale chętnie obsługujemy klientów z Warszawy i całej Polski. Odbierz kampera u nas lub skorzystaj z opcji dostawy pod wskazany adres.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Opcja 1: Odbiór w Rzeszowie</h2>
            <p className={styles.p}>
              Rzeszów jest doskonale skomunikowany z Warszawą - pociąg PKP IC z Centralnej to ok. 2,5–3 h (ceny biletów od ok. 49 zł). Można też dolecieć samolotem - LOT i Ryanair obsługują połączenie Warszawa–Rzeszów (45 min). Odbiór kampera w Rzeszowie i bezpośredni wyjazd w Bieszczady lub Tatry - to często najwygodniejsza opcja.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Opcja 2: Dostawa kampera</h2>
            <p className={styles.p}>
              Oferujemy dostawę kampera pod wskazany adres - Warszawa, okolice, a w przypadku dłuższych wynajmów (7+ dób) nawet odleglejsze miejsca. Cena dostawy jest ustalana indywidualnie w zależności od odległości - skontaktuj się z nami, żeby uzyskać wycenę.
            </p>
            <ul className={styles.ul}>
              <li>Dostawa do Warszawy: od ok. 600 zł w obie strony</li>
              <li>Możliwość zdania kampera w innej lokalizacji niż odbiór</li>
              <li>Dostawa możliwa przy wynajmie min. 5 dób</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Popularne trasy z Warszawy kamperem</h2>
            <p className={styles.p}>
              <strong>Mazury (ok. 200 km):</strong> Mikołajki, Giżycko, Mrągowo - kraina jezior idealna na 5–10 dób kamperowania. Campingi bezpośrednio przy wodzie, możliwość wypożyczenia kajaka lub roweru wodnego.
            </p>
            <p className={styles.p}>
              <strong>Bałtyk (ok. 350–450 km):</strong> Trójmiasto, Łeba, Władysławowo, Hel. Klasyczna trasa plażowa - najlepsza w czerwcu i wrześniu, kiedy mniej tłumu.
            </p>
            <p className={styles.p}>
              <strong>Bieszczady (ok. 400 km):</strong> Idealne połączenie z przejazdem przez Rzeszów - odbierasz kampera u nas w drodze w Bieszczady i zdajesz po powrocie.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jak zarezerwować?</h2>
            <ul className={styles.ul}>
              <li>Wybierz kampera i termin na stronie głównej</li>
              <li>W formularzu zaznacz opcję dostawy i podaj adres - skontaktujemy się z wyceną</li>
              <li>Zapłać online: BLIK, karta, Apple Pay, Google Pay</li>
              <li>Potwierdzenie dostajesz na e-mail natychmiast</li>
            </ul>
          </div>

          <Link href="/#fleet" className={styles.cta}>Sprawdź dostępne kampery →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
