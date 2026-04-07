import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { IconPhone, IconMail, IconPin } from '@/components/icons'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Kontakt - Kamperownia',
  description: 'Skontaktuj się z Kamperownia. Wynajem kamperów Rzeszów - telefon, e-mail, adres. Odpowiadamy w ciągu kilku godzin.',
}

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Kontakt
          </p>

          <h1 className={styles.h1}>Kontakt</h1>
          <p className={styles.lead}>
            Masz pytania dotyczące rezerwacji, dostępności lub warunków wynajmu? Odezwij się - odpowiadamy w ciągu kilku godzin.
          </p>

          {/* Map */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=21.9840%2C50.0269%2C22.0240%2C50.0469&layer=mapnik&marker=50.0369%2C22.0040"
              style={{ border: 0 }}
              width="100%"
              height="400"
              title="Lokalizacja Kamperownia"
              loading="lazy"
            />
          </div>
          <div className={styles.mapLinkRow}>
            <a
              href="https://maps.google.com/?q=Lubelska+50,+35-233+Rzeszów"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Otwórz w Google Maps →
            </a>
          </div>

          {/* Contact cards - 3 columns */}
          <div className={styles.cards}>
            <a href="tel:+48500818172" className={styles.card}>
              <span className={styles.cardIcon}><IconPhone size={22} /></span>
              <div>
                <p className={styles.cardLabel}>Telefon</p>
                <p className={styles.cardValue}>+48 500 818 172</p>
                <p className={styles.cardNote}>Pn–Pt 8:00–18:00, Sb 9:00–14:00</p>
              </div>
            </a>

            <a href="mailto:kontakt@" className={styles.card}>
              <span className={styles.cardIcon}><IconMail size={22} /></span>
              <div>
                <p className={styles.cardLabel}>E-mail</p>
                <p className={styles.cardValue}>kontakt@</p>
                <p className={styles.cardNote}>Odpowiadamy w ciągu 2–4 godzin</p>
              </div>
            </a>

            <div className={styles.card}>
              <span className={styles.cardIcon}><IconPin size={22} /></span>
              <div>
                <p className={styles.cardLabel}>Adres (odbiór kamperów)</p>
                <p className={styles.cardValue}>Lubelska 50, 35-233 Rzeszów</p>
                <p className={styles.cardNote}>Odbiór Pn–Pt 8:00–16:00, Sb 9:00–13:00</p>
              </div>
            </div>
          </div>

          {/* Bottom grid: hours + FAQ */}
          <div className={styles.bottomGrid}>
            {/* Hours */}
            <div className={styles.hours}>
              <h2 className={styles.sectionTitle}>Godziny pracy</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Poniedziałek – Piątek</td>
                    <td>8:00 – 18:00</td>
                  </tr>
                  <tr>
                    <td>Sobota</td>
                    <td>9:00 – 14:00</td>
                  </tr>
                  <tr>
                    <td>Niedziela</td>
                    <td>Zamknięte*</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.hoursNote}>* Odbiory w niedzielę możliwe po wcześniejszym uzgodnieniu</p>
            </div>

            {/* FAQ */}
            <div className={styles.faq}>
              <h2 className={styles.sectionTitle}>Najczęstsze pytania</h2>

              <div className={styles.faqItem}>
                <h3>Jak zarezerwować kampera?</h3>
                <p>Wybierz termin i kamper na stronie głównej, uzupełnij dane kontaktowe i zapłać online. Potwierdzenie dostaniesz na e-mail.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>Czy można odebrać kampera poza godzinami pracy?</h3>
                <p>Odbiory po godzinach i w niedzielę są możliwe po wcześniejszym uzgodnieniu telefonicznym. Prosimy o kontakt minimum dzień wcześniej.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>Jaka kaucja jest wymagana?</h3>
                <p>Kaucja zwrotna wynosi 3 000 zł. Pobierana jest przy odbiorze kampera i zwracana w ciągu 3 dni roboczych po oddaniu bez szkód.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>Czy potrzebuję specjalnego prawa jazdy?</h3>
                <p>Nie - wystarczy prawo jazdy kategorii B. Nasze kampery mają dopuszczalną masę całkowitą do 3,5 t.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>Czy mogę pojechać za granicę?</h3>
                <p>Tak, po wcześniejszym poinformowaniu nas. Wyjeżdżając za granicę, obowiązuje Green Card - dostaniesz ją przy odbiorze.</p>
              </div>
            </div>
          </div>

          <Link href="/#fleet" className={styles.cta}>
            Zobacz dostępne kampery →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
