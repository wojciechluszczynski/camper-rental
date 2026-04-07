import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Polityka prywatności - Kamperownia',
  description: 'Polityka prywatności serwisu Kamperownia. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.',
}

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Polityka prywatności
          </p>
          <h1 className={styles.h1}>Polityka prywatności</h1>
          <p className={styles.lead}>
            Administratorem danych osobowych jest Kamperownia, Lubelska 50, 35-233 Rzeszów. Poniżej opisujemy, jak przetwarzamy Twoje dane zgodnie z RODO.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jakie dane zbieramy?</h2>
            <ul className={styles.ul}>
              <li>Dane identyfikacyjne: imię, nazwisko, numer telefonu, adres e-mail.</li>
              <li>Dane rezerwacji: termin wynajmu, wybrany kamper, adres dostawy (jeśli podano).</li>
              <li>Dane płatności: obsługiwane przez Stripe - nie przechowujemy numerów kart.</li>
              <li>Dane techniczne: adres IP, typ przeglądarki (logi serwera).</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>W jakim celu przetwarzamy dane?</h2>
            <ul className={styles.ul}>
              <li>Realizacja rezerwacji i umowy wynajmu (podstawa prawna: art. 6 ust. 1 lit. b RODO).</li>
              <li>Kontakt w sprawach rezerwacji (podstawa prawna: prawnie uzasadniony interes).</li>
              <li>Newsletter - tylko za Twoją zgodą, z możliwością wycofania w każdej chwili.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Twoje prawa</h2>
            <p className={styles.p}>
              Masz prawo dostępu, sprostowania, usunięcia i przenoszenia danych, a także prawo do sprzeciwu i ograniczenia przetwarzania. Skontaktuj się z nami pod adresem <a href="mailto:kontakt@">kontakt@</a>.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Pliki cookies</h2>
            <p className={styles.p}>
              Używamy niezbędnych plików cookie do działania serwisu. Nie stosujemy cookies śledzących ani reklamowych bez Twojej zgody.
            </p>
          </div>

          <Link href="/#fleet" className={styles.cta}>Sprawdź dostępność kamperów</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
