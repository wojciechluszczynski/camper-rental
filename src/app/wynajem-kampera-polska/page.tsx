import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Polska — Kamperownia',
  description: 'Wynajem kamperów na wyjazdy po Polsce. Morze, góry, jeziora — odkryj Polskę na własnych zasadach. Rezerwacja online.',
}

export default function PolskaPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera Polska
          </p>
          <h1 className={styles.h1}>Wynajem kampera Polska</h1>
          <p className={styles.lead}>
            Polska kamperem to setki możliwości — Bałtyk, Tatry, Mazury, Bieszczady. Pełna wolność trasy, nocleg tam gdzie chcesz, śniadanie z widokiem na jezioro lub morze.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Najpopularniejsze trasy po Polsce</h2>
            <p className={styles.p}>Nasi klienci najchętniej wybierają:</p>
            <ul className={styles.ul}>
              <li><strong>Bałtyk:</strong> Świnoujście → Kołobrzeg → Trójmiasto (7–10 dni)</li>
              <li><strong>Mazury:</strong> Giżycko, Mikołajki, Ryn — jeziora i cisza (4–7 dni)</li>
              <li><strong>Bieszczady:</strong> Połoniny, Cisna, San — dzika przyroda (5–8 dni)</li>
              <li><strong>Tatry i Podhale:</strong> Zakopane, Doliny, Krupówki (3–5 dni)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Ile kosztuje wynajem kampera po Polsce?</h2>
            <p className={styles.p}>
              Cena doby wynajmu zaczyna się od 350 zł. Tydzień podróży kamperem po Polsce to wydatek porównywalny z wynajęciem mieszkania wakacyjnego — ale z dużo większą swobodą. Paliwo to jedyny dodatkowy koszt.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jakie kempingi są w Polsce?</h2>
            <p className={styles.p}>
              Polska posiada ponad 200 kempingów kategoryzowanych przez PTTK. Wiele z nich działa całorocznie. Korzystamy z serwisu ACSI i Camping.info, które polecamy do planowania trasy.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Zarezerwuj kampera</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
