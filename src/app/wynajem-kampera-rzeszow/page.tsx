import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Rzeszów i Podkarpacie - Kamperownia',
  description: 'Wynajem kamperów w Rzeszowie. Odbiór w centrum, pełne wyposażenie, ubezpieczenie AC/OC w cenie. Rezerwacja online - BLIK, karta, Apple Pay.',
}

export default function RzeszowPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera Rzeszów
          </p>
          <h1 className={styles.h1}>Wynajem kampera Rzeszów i Podkarpacie</h1>
          <p className={styles.lead}>
            Kamperownia to największa wypożyczalnia kamperów w Rzeszowie. Odbierz pojazd przy ul. Lubelskiej i wyrusz w podróż - w Bieszczady, Tatry, nad Bałtyk lub za granicę.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Dlaczego Rzeszów to idealny start?</h2>
            <p className={styles.p}>
              Rzeszów leży w sercu Podkarpacia - zaledwie 90 km od Bieszczad i 130 km od Tatr. To idealne miejsce, żeby odebrać kampera i od razu wjechać w jedne z najpiękniejszych terenów górskich w Polsce. Przez miasto przebiegają drogi krajowe nr 4 i 19, zapewniając szybki dojazd we wszystkich kierunkach.
            </p>
            <ul className={styles.ul}>
              <li>Bieszczady (Ustrzyki Dolne) - ok. 90 km, 1,5 h jazdy</li>
              <li>Tatry (Zakopane) - ok. 210 km, 2,5 h jazdy</li>
              <li>Roztocze i Zamość - ok. 130 km, 1,5 h jazdy</li>
              <li>Kraków - ok. 170 km, 2 h jazdy</li>
              <li>Słowacja (Preszów) - ok. 110 km, 1,5 h jazdy</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Popularne trasy z Rzeszowa</h2>
            <p className={styles.p}>
              <strong>Bieszczadzka Pętla (5–7 dób):</strong> Rzeszów → Sanok → Lesko → Ustrzyki Dolne → Cisna → Baligród → powrót. Dzikie campingi nad Jeziorem Solińskim i szlaki na Tarnicę - doświadczenie, którego nie zapomnisz.
            </p>
            <p className={styles.p}>
              <strong>Podkarpacki Szlak Architektury Drewnianej (3–5 dób):</strong> Dziesiątki zabytkowych cerkwi, dworków i kościółków rozsianych po całym regionie. Kamperem dotrzesz do miejsc niedostępnych dla turystyki zorganizowanej.
            </p>
            <p className={styles.p}>
              <strong>Weekend w Tatrach (2–3 doby):</strong> Rzeszów → Nowy Sącz → Zakopane → Kościelisko → powrót przez Nowy Targ. Nocleg w kamperze tuż pod Giewontem.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Co zawiera wynajem?</h2>
            <ul className={styles.ul}>
              <li>Pełne ubezpieczenie OC i AC bez franczyzy</li>
              <li>Pościel, poduszki i kołdry dla wszystkich miejsc sypialnych</li>
              <li>Kompletna kuchnia: lodówka, kuchenka, naczynia, sztućce</li>
              <li>Łazienka z prysznicem i toaletą (zależnie od modelu)</li>
              <li>Podgrzewanie postojowe Truma lub Webasto</li>
              <li>Panel solarny i dodatkowy akumulator AGM (zależnie od modelu)</li>
              <li>Instrukcja obsługi po polsku + omówienie przy odbiorze</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Cennik i warunki</h2>
            <p className={styles.p}>
              Ceny zaczynają się od <strong>390 zł za dobę</strong>. Minimum 3 doby. Kaucja zwrotna: 3 000 zł (pobierana przy odbiorze, zwracana do 3 dni roboczych). Ubezpieczenie OC/AC w cenie. Paliwo we własnym zakresie.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jak wygląda odbiór?</h2>
            <ul className={styles.ul}>
              <li>Przyjeżdżasz pod adres: Lubelska 50, 35-233 Rzeszów (bezpłatny parking)</li>
              <li>Wspólnie sprawdzamy stan techniczny i podpisujemy protokół</li>
              <li>Omawiamy obsługę wszystkich instalacji - zajmuje to ok. 30–45 min</li>
              <li>Wyjazd! Jesteśmy dostępni telefonicznie przez cały czas wynajmu</li>
            </ul>
          </div>

          <Link href="/#fleet" className={styles.cta}>Sprawdź dostępne kampery →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
