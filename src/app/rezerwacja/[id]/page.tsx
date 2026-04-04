import { redirect } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PaymentForm } from '@/components/booking/PaymentForm'
import { createServiceClient } from '@/lib/supabase-server'
import styles from './page.module.css'

interface Props {
  params: Promise<{ id: string }>
}

export default async function PaymentPage({ params }: Props) {
  const { id } = await params
  const supabase = createServiceClient()

  let booking = null
  try {
    const { data } = await supabase
      .from('bookings')
      .select('*, campers(id, name, slug, price_per_day)')
      .eq('id', id)
      .single()
    booking = data
  } catch {
    redirect('/')
  }

  if (!booking || booking.status !== 'pending') {
    redirect('/')
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Podsumowanie rezerwacji</h1>
          <div className={styles.layout}>
            <div className={styles.summary}>
              <div className={styles.summaryCard}>
                <h2 className={styles.summaryTitle}>Twoja rezerwacja</h2>
                <div className={styles.summaryRow}>
                  <span>Kamper</span>
                  <strong>{booking.campers?.name}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Od</span>
                  <strong>{booking.date_from}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Do</span>
                  <strong>{booking.date_to}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Rezerwujący</span>
                  <strong>{booking.user_name}</strong>
                </div>
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                  <span>Do zapłaty</span>
                  <strong className={styles.totalAmount}>{booking.total_price} zł</strong>
                </div>
              </div>
            </div>
            <div className={styles.payment}>
              <PaymentForm bookingId={booking.id} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
