export const dynamic = 'force-dynamic'

import { createServiceClient } from '@/lib/supabase-server'
import type { Camper, Booking } from '@/lib/types'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CamperCard } from '@/components/home/CamperCard'
import styles from './page.module.css'

interface PageProps {
  searchParams: Promise<{ od?: string; do?: string }>
}

export default async function SzukajPage({ searchParams }: PageProps) {
  const params = await searchParams
  const od = params.od ?? ''
  const dateTo = params.do ?? ''

  const supabase = createServiceClient()

  const { data: campers } = await supabase
    .from('campers')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: true })

  const allCampers: Camper[] = campers ?? []

  let availableCampers = allCampers
  let hasValidDates = false

  if (od && dateTo) {
    hasValidDates = true

    const { data: bookings } = await supabase
      .from('bookings')
      .select('camper_id, date_from, date_to')
      .eq('status', 'paid')
      .lte('date_from', dateTo)
      .gte('date_to', od)

    const bookedCamperIds = new Set<string>(
      (bookings ?? []).map((b: Pick<Booking, 'camper_id'>) => b.camper_id)
    )

    availableCampers = allCampers.filter(c => !bookedCamperIds.has(c.id))
  }

  const linkSearchParams =
    od && dateTo ? `?od=${od}&do=${dateTo}` : ''

  function formatDatePL(iso: string) {
    if (!iso) return ''
    const [y, m, d] = iso.split('-')
    return `${d}.${m}.${y}`
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            {hasValidDates ? (
              <>
                <h1 className={styles.title}>Dostępne kampery</h1>
                <p className={styles.subtitle}>
                  Termin: <strong>{formatDatePL(od)}</strong> – <strong>{formatDatePL(dateTo)}</strong>
                  {' · '}
                  {availableCampers.length === 0
                    ? 'Brak wolnych kamperów'
                    : `${availableCampers.length} ${availableCampers.length === 1 ? 'kamper' : availableCampers.length < 5 ? 'kampery' : 'kamperów'}`}
                </p>
              </>
            ) : (
              <>
                <h1 className={styles.title}>Wszystkie kampery</h1>
                <p className={styles.subtitle}>
                  Podaj daty na stronie głównej, aby sprawdzić dostępność
                </p>
              </>
            )}
          </div>

          {availableCampers.length === 0 && hasValidDates ? (
            <div className={styles.empty}>
              <p>Niestety wszystkie kampery są zajęte w wybranym terminie.</p>
              <a href="/" className={styles.backLink}>Wróć i wybierz inne daty</a>
            </div>
          ) : (
            <div className={styles.grid}>
              {availableCampers.map(camper => (
                <CamperCard
                  key={camper.id}
                  camper={camper}
                  linkSearchParams={linkSearchParams}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
