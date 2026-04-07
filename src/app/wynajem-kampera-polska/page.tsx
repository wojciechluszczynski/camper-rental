import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera w Polsce - Kamperownia',
  description: 'Wynajem kamperów na podróże po całej Polsce. Bałtyk, Mazury, Tatry, Bieszczady - jedź gdzie chcesz. Rezerwacja online, pełne wyposażenie, ubezpieczenie w cenie.',
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
            Wynajem kampera w Polsce
          </p>
          <h1 className={styles.h1}>Wynajem kampera - podróże po całej Polsce</h1>
          <p className={styles.lead}>
            Polska kamperami stoi. Tysiące kilometrów wybrzeża, jezior, lasów i gór - dostępne bez rezerwacji hotelu, bez ograniczeń. Nasz kamper to Twój dom na kółkach.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Dlaczego warto wybrać kampera na Polskę?</h2>
            <p className={styles.p}>
              Polska to kraj stworzony do turystyki kamperowej. Rozwinięta sieć campingów, dzikie miejsca postojowe nad jeziorami i rzekami, brak limitów prędkości na autostradach dla pojazdów do 3,5 t - to wszystko sprawia, że podróżowanie kamperem jest tu wyjątkowo wygodne i tanie.
            </p>
            <p className={styles.p}>
              Porównując koszty: 7-dniowy wynajem kampera dla 4 osób (ok. 3 500 zł) plus camping (ok. 700 zł) daje koszt noclegów ok. 1 050 zł na osobę - często taniej niż hotele przy porównywalnym komforcie. A do tego pełna wolność trasy.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Najpopularniejsze trasy po Polsce</h2>
            <p className={styles.p}>
              <strong>Bałtyk z zachodu na wschód (7–10 dób):</strong> Szczecin → Kołobrzeg → Trójmiasto → Hel → Łeba → Ustka. Najpiękniejsze plaże, klify w Wolinie, mierzeja helska - klasyczna trasa dla miłośników morza.
            </p>
            <p className={styles.p}>
              <strong>Mazurska Pętla (5–7 dób):</strong> Olsztyn → Mrągowo → Mikołajki → Giżycko → Węgorzewo → Kętrzyn. Kraina Wielkich Jezior Mazurskich z setkami campingów bezpośrednio przy wodzie.
            </p>
            <p className={styles.p}>
              <strong>Polska Południowa (7–10 dób):</strong> Rzeszów → Bieszczady → Pieniny → Tatry → Babia Góra → Karkonosze. Pełny przekrój polskich gór w jednej trasie.
            </p>
            <p className={styles.p}>
              <strong>Warmia i Mazury + Suwalszczyzna (5–7 dób):</strong> Jeden z najpiękniejszych i najmniej zatłoczonych zakątków Polski. Augustów, Wigry, Suwałki - spokój i natura w czystej postaci.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Polecane campingi w Polsce</h2>
            <ul className={styles.ul}>
              <li><strong>Camping Mielno (Zachodniopomorskie)</strong> - bezpośrednio przy plaży, rozbudowana infrastruktura</li>
              <li><strong>Camping Waypoint Mrągowo (Mazury)</strong> - przystań jachtowa, widok na jezioro</li>
              <li><strong>Camping Harenda Zakopane (Tatry)</strong> - u podnóża Gubałówki, widok na Giewont</li>
              <li><strong>Camping Bieszczady Lesko</strong> - spokojne miejsce, idealne jako baza wypadowa</li>
              <li><strong>Camping Augustów (Suwalszczyzna)</strong> - nad jeziorem Białym, blisko Kanału Augustowskiego</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Warunki wynajmu na teren Polski</h2>
            <ul className={styles.ul}>
              <li>Brak ograniczeń kilometrowych na terenie Polski</li>
              <li>Ubezpieczenie OC i AC w cenie - ważne na terenie całej Polski</li>
              <li>Minimalna długość wynajmu: 3 doby</li>
              <li>Wymagane prawo jazdy kategorii B (min. 2 lata)</li>
              <li>Wiek kierowcy: min. 21 lat</li>
            </ul>
          </div>

          <Link href="/#fleet" className={styles.cta}>Sprawdź dostępne kampery →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
