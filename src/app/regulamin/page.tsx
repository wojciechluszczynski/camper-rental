import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Regulamin wynajmu - Kamperownia',
  description: 'Regulamin wynajmu kamperów Kamperownia. Warunki rezerwacji, płatności, kaucja i zasady użytkowania.',
}

export default function ReguaminPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Regulamin
          </p>
          <h1 className={styles.h1}>Regulamin wynajmu kamperów</h1>
          <p className={styles.lead}>
            Niniejszy regulamin określa zasady wynajmu kamperów od firmy Kamperownia z siedzibą w Rzeszowie (Lubelska 50, 35-233 Rzeszów).
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>§1. Rezerwacja i płatność</h2>
            <ul className={styles.ul}>
              <li>Rezerwacja zostaje potwierdzona po dokonaniu płatności online (BLIK, karta, przelew).</li>
              <li>Cena wynajmu jest podawana w złotych polskich za dobę i obejmuje ubezpieczenie OC/AC.</li>
              <li>Kaucja zwrotna wynosi 3000 zł - pobierana przy odbiorze kampera, zwracana do 3 dni roboczych po zdaniu bez szkód.</li>
              <li>Przy rezygnacji na więcej niż 14 dni przed terminem zwracamy 100% płatności. Przy krótszym czasie - 50%.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>§2. Odbiór i zdanie kampera</h2>
            <ul className={styles.ul}>
              <li>Odbiór kamperów odbywa się pod adresem: Lubelska 50, 35-233 Rzeszów, w godzinach 8:00–16:00.</li>
              <li>Przy odbiorze wymagane jest okazanie prawa jazdy kategorii B oraz dokumentu tożsamości.</li>
              <li>Najemca podpisuje protokół zdawczo-odbiorczy dokumentujący stan pojazdu.</li>
              <li>Kamper należy zwrócić czysty, z pełnym zbiornikiem paliwa i opróżnionymi zbiornikami wodnymi.</li>
              <li>Opóźnienie zwrotu bez wcześniejszego uzgodnienia skutkuje naliczeniem opłaty za dodatkową dobę.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>§3. Zasady użytkowania</h2>
            <ul className={styles.ul}>
              <li>Kierować kampera może wyłącznie osoba wskazana w umowie, posiadająca prawo jazdy kategorii B.</li>
              <li>Zakaz palenia tytoniu i e-papierosów wewnątrz kampera.</li>
              <li>Zwierzęta dozwolone po wcześniejszym uzgodnieniu (dopłata 100 zł).</li>
              <li>Jazda poza granicami Polski możliwa po uprzednim poinformowaniu nas - obowiązuje Green Card.</li>
              <li>Wszelkie szkody należy zgłosić niezwłocznie pod numer +48 500 818 172.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>§4. Kontakt</h2>
            <p className={styles.p}>
              W sprawach regulaminowych prosimy o kontakt: <a href="mailto:kontakt@">kontakt@</a> lub telefonicznie <a href="tel:+48500818172">+48 500 818 172</a>.
            </p>
          </div>

          <Link href="/#fleet" className={styles.cta}>Sprawdź dostępność kamperów</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
