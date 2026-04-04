import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { createServiceClient } from '@/lib/supabase-server'
import styles from './page.module.css'

interface Props {
  searchParams: { booking_id?: string; payment_intent?: string; payment_intent_client_secret?: string; redirect_status?: string }
}

export default async function ConfirmationPage({ searchParams }: Props) {
  const { booking_id, redirect_status } = searchParams

  // Stripe redirects with redirect_status=succeeded on success
  const isSuccess = redirect_status === 'succeeded' || redirect_status === undefined

  let booking = null
  if (booking_id) {
    try {
      const supabase = createServiceClient()
      const { data } = await supabase
        .from('bookings')
        .select('*, campers(name)')
        .eq('id', booking_id)
        .single()
      booking = data
    } catch {
      // ignore
    }
  }

  if (!isSuccess) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={`${styles.card} ${styles.error}`}>
              <div className={styles.icon}>❌</div>
              <h1 className={styles.title}>Płatność nieudana</h1>
              <p className={styles.subtitle}>Coś poszło nie tak. Spróbuj ponownie.</p>
              <Link href="/" className={styles.btn}>Wróć do strony głównej</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.icon}>✅</div>
            <h1 className={styles.title}>Rezerwacja potwierdzona!</h1>
            {booking ? (
              <>
                <p className={styles.subtitle}>
                  Dziękujemy, <strong>{booking.user_name}</strong>!<br />
                  Twoja rezerwacja kampera <strong>{booking.campers?.name}</strong> jest potwierdzona.
                </p>
                <div className={styles.details}>
                  <div className={styles.detailRow}>
                    <span>Termin</span>
                    <strong>{booking.date_from} — {booking.date_to}</strong>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Kwota</span>
                    <strong>{booking.total_price} zł</strong>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Email</span>
                    <strong>{booking.user_email}</strong>
                  </div>
                </div>
                <p className={styles.note}>
                  Potwierdzenie zostało wysłane na {booking.user_email}. Skontaktujemy się z Tobą przed odbiorem kampera.
                </p>
              </>
            ) : (
              <p className={styles.subtitle}>Twoja płatność została zrealizowana pomyślnie.</p>
            )}
            <Link href="/" className={styles.btn}>Wróć do strony głównej</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
