import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Europa - Kamperownia',
  description: 'Wynajem kamperów na wyjazdy do Europy. Chorwacja, Włochy, Skandynawia, Alpy - ruszaj z Rzeszowa w świat. Green Card i pełne ubezpieczenie w cenie.',
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
          <h1 className={styles.h1}>Wynajem kampera - wyjazdy do Europy</h1>
          <p className={styles.lead}>
            Nasze kampery możesz zabrać za granicę. Chorwacja, Włochy, Niemcy, Skandynawia - jedź gdzie marzysz, z pełnym ubezpieczeniem i Green Card.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Dokąd można pojechać?</h2>
            <p className={styles.p}>
              Nasze kampery są objęte ubezpieczeniem OC i AC na terenie całej Europy (z Green Card). Wyjeżdżając za granicę, informujesz nas z wyprzedzeniem - przygotujemy dokumenty i omówimy specyfikę danego kraju.
            </p>
            <ul className={styles.ul}>
              <li><strong>Chorwacja</strong> - 10–14 dób, Dalmacja, Riwiera Makarska, Istria. Campingi z widokiem na Adriatyk.</li>
              <li><strong>Włochy</strong> - 12–21 dób, Toskania, Dolomity, Sycylia. Kraj stworzony dla kamperów.</li>
              <li><strong>Niemcy i Austria</strong> - 7–10 dób, Bawaria, Berchtesgaden, Schwarzwald. Rozwinięta infrastruktura camperowa.</li>
              <li><strong>Skandynawia</strong> - 14–21 dób, Norwegia, Szwecja, fiordy. Jeden z najpiękniejszych kamperowych kierunków świata.</li>
              <li><strong>Francja i Szwajcaria</strong> - 10–14 dób, Alpy Francuskie, Lazurowe Wybrzeże, Mont Blanc.</li>
              <li><strong>Słowacja i Czechy</strong> - 5–7 dób, Tatry Słowackie, Praga, Słowacki Raj. Idealne na pierwszy zagraniczny wyjazd.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Co musisz wiedzieć o wyjeździe za granicę?</h2>
            <ul className={styles.ul}>
              <li><strong>Green Card</strong> - dokument potwierdzający ubezpieczenie OC za granicą. Dostaniesz go przy odbiorze kampera.</li>
              <li><strong>Winiety</strong> - w niektórych krajach (Austria, Szwajcaria, Czechy, Słowacja) wymagane są winiety autostradowe. Sprawdź przed wyjazdem.</li>
              <li><strong>Opłaty za camping</strong> - w Chorwacji i Włoszech campingi są droższe niż w Polsce (60–120 EUR/noc). Zaplanuj budżet.</li>
              <li><strong>Paliwo</strong> - najtańsze w Polsce i Słowacji, najdroższe w Norwegii i Szwajcarii.</li>
              <li><strong>Limity prędkości</strong> - każdy kraj ma inne przepisy dla pojazdów powyżej 3,5 t. Nasze kampery są do 3,5 t - obowiązują przepisy jak dla samochodów osobowych.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Najlepsze trasy do Chorwacji</h2>
            <p className={styles.p}>
              Rzeszów → Kraków → Bratysława → Zagreb → Split → Dubrownik (ok. 1 600 km w jedną stronę). Pełna trasa na 14 dób: Split, wyspy Hvar i Brač, Park Narodowy Krka, Plitvice - każde miejsce różne, każde urzekające.
            </p>
            <p className={styles.p}>
              Alternatywa: Rzeszów → Wiedeń → Klagenfurt → Triest → Istria. Spokojniejsza, mniej zatłoczona część Chorwacji z pięknymi campingami przy morzu.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Formalności i warunki</h2>
            <ul className={styles.ul}>
              <li>Poinformuj nas o wyjeździe za granicę minimum 3 dni przed wyjazdem</li>
              <li>Wymagane prawo jazdy kategorii B, wiek min. 23 lata przy wyjeździe zagranicznym</li>
              <li>Minimalna długość wynajmu zagranicznego: 7 dób</li>
              <li>Kaucja standardowa: 3 000 zł</li>
            </ul>
          </div>

          <Link href="/#fleet" className={styles.cta}>Sprawdź dostępne kampery →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
