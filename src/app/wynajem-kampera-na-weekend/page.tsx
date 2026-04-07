import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera na Weekend - Kamperownia',
  description: 'Wynajem kampera na weekend od 3 dób. Ruszaj w piątek wieczorem i wróć w niedzielę - Bieszczady, Tatry, Roztocze w zasięgu ręki.',
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
            Odbiór w piątek po pracy, powrót w niedzielę wieczorem. Z Rzeszowa możesz dotrzeć kamperem w Bieszczady, Tatry lub Roztocze - i zdążyć na poniedziałek do pracy.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Weekendowe destynacje z Rzeszowa</h2>
            <p className={styles.p}>
              <strong>Bieszczady (ok. 90 km):</strong> W piątek wieczorem odbierasz kampera, w 1,5 h jesteś nad Jeziorem Solińskim lub w Ustrzykach Dolnych. Weekend na szlakach, z noclegiem w kamperze. Powrót w niedzielę po południu - spokojnie.
            </p>
            <p className={styles.p}>
              <strong>Roztocze (ok. 130 km):</strong> Jeden z najpiękniejszych parków krajobrazowych w Polsce - sosny, stawy, rezerwat żubrów. Campingi czynne od maja, ceny przystępne. Idealne miejsce na spokojny reset.
            </p>
            <p className={styles.p}>
              <strong>Pieniny i Dunajec (ok. 160 km):</strong> Spływ Dunajcem, zamek w Czorsztynie, widoki na Tatry z Sokolicy. Weekend wypełniony atrakcjami, nocleg w kamperze w Sromowcach lub Krościenku.
            </p>
            <p className={styles.p}>
              <strong>Tatry (ok. 210 km):</strong> Ambitniejsza opcja - wyjeżdżasz w piątek wczesnym popołudniem, nocujesz w Kościelisku lub pod Zakopanem. Sobota: szlaki. Niedziela: powrót.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Kampery idealne na weekend</h2>
            <p className={styles.p}>
              Na krótkie wyjazdy polecamy mniejsze i zwrotniejsze modele z naszej floty - łatwiej nimi manewrować na wąskich górskich drogach i znaleźć miejsce parkingowe. Nasze kampery do 7 m długości to idealny wybór na 2–4 osoby.
            </p>
            <ul className={styles.ul}>
              <li>Długość do 7 m - wjedziesz wszędzie</li>
              <li>Pełna kuchnia i łazienka - komfort jak w hotelu</li>
              <li>Ogrzewanie postojowe - nie martwisz się o nocne temperatury</li>
              <li>Panele solarne - prąd bez potrzeby podłączania do sieci</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Ile kosztuje weekend w kamperze?</h2>
            <p className={styles.p}>
              Minimalna długość wynajmu wynosi <strong>3 doby</strong> (piątek–niedziela lub sobota–poniedziałek). Ceny zaczynają się od 390 zł/dobę, czyli od ok. 1 170 zł za cały weekend dla maksymalnie 6 osób.
            </p>
            <p className={styles.p}>
              Camping na weekend to dodatkowe 40–80 zł/noc, paliwo ok. 150–250 zł na trasę w obie strony. Łącznie weekendowy wypad kamperem dla 4 osób wychodzi często taniej niż hotel + restauracje.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jak zarezerwować kamper na weekend?</h2>
            <ul className={styles.ul}>
              <li>Wybierz termin na stronie głównej - sprawdź dostępność w kalendarzu</li>
              <li>Podaj datę od piątku do poniedziałku (3 doby) lub dłużej</li>
              <li>Zapłać online - BLIK, karta, Apple Pay, Google Pay</li>
              <li>Potwierdzenie dostajesz na e-mail w ciągu kilku minut</li>
            </ul>
          </div>

          <Link href="/#fleet" className={styles.cta}>Sprawdź dostępne kampery →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
