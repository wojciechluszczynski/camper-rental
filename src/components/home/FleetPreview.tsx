import type { Camper } from '@/lib/types'
import { CamperCard } from './CamperCard'
import styles from './FleetPreview.module.css'

interface Props {
  campers: Camper[]
  dateFrom?: Date | null
  dateTo?: Date | null
  searching?: boolean
}

export function FleetPreview({ campers, dateFrom, dateTo, searching }: Props) {
  return (
    <section id="fleet" className={styles.section}>
      <div className={styles.inner}>
        {searching ? (
          <p className={styles.searching}>Sprawdzamy dostępność...</p>
        ) : campers.length === 0 ? (
          <div className={styles.empty}>
            <p>Brak dostępnych kamperów w wybranym terminie.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {campers.map(camper => (
              <CamperCard
                key={camper.id}
                camper={camper}
                dateFrom={dateFrom}
                dateTo={dateTo}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
