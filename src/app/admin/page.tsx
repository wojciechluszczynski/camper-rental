import { createServiceClient } from '@/lib/supabase-server'
import styles from './page.module.css'

type BookingRow = {
  id: string
  user_name: string
  user_email: string
  user_phone: string
  date_from: string
  date_to: string
  total_price: number
  status: 'pending' | 'paid' | 'cancelled'
  created_at: string
  campers: { name: string } | null
}

const statusLabel: Record<string, string> = {
  pending: 'Oczekuje',
  paid: 'Opłacona',
  cancelled: 'Anulowana',
}

const statusClass: Record<string, string> = {
  pending: 'statusPending',
  paid: 'statusPaid',
  cancelled: 'statusCancelled',
}

export default async function AdminPage() {
  let bookings: BookingRow[] = []
  let camperCount = 0

  try {
    const supabase = createServiceClient()

    const [bookingsRes, campersRes] = await Promise.all([
      supabase
        .from('bookings')
        .select('*, campers(name)')
        .order('created_at', { ascending: false }),
      supabase
        .from('campers')
        .select('id', { count: 'exact', head: true })
        .eq('active', true),
    ])

    bookings = (bookingsRes.data ?? []) as BookingRow[]
    camperCount = campersRes.count ?? 0
  } catch {
    // Supabase not configured
  }

  const paidBookings = bookings.filter(b => b.status === 'paid')
  const totalRevenue = paidBookings.reduce((sum, b) => sum + b.total_price, 0)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Panel administracyjny</h1>
        <p className={styles.subtitle}>Kamperownia</p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>{bookings.length}</div>
            <div className={styles.statLabel}>Wszystkich rezerwacji</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>{paidBookings.length}</div>
            <div className={styles.statLabel}>Opłaconych</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>{totalRevenue.toLocaleString('pl-PL')} zł</div>
            <div className={styles.statLabel}>Przychód</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>{camperCount}</div>
            <div className={styles.statLabel}>Kamperów</div>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Kamper</th>
                <th>Klient</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Od</th>
                <th>Do</th>
                <th>Kwota</th>
                <th>Status</th>
                <th>Data rez.</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan={9} className={styles.empty}>Brak rezerwacji</td>
                </tr>
              ) : (
                bookings.map(b => (
                  <tr key={b.id}>
                    <td>{b.campers?.name ?? '-'}</td>
                    <td>{b.user_name}</td>
                    <td><a href={`mailto:${b.user_email}`}>{b.user_email}</a></td>
                    <td>{b.user_phone}</td>
                    <td>{b.date_from}</td>
                    <td>{b.date_to}</td>
                    <td className={styles.price}>{b.total_price} zł</td>
                    <td>
                      <span className={`${styles.status} ${styles[statusClass[b.status] ?? '']}`}>
                        {statusLabel[b.status] ?? b.status}
                      </span>
                    </td>
                    <td className={styles.date}>{new Date(b.created_at).toLocaleDateString('pl-PL')}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
