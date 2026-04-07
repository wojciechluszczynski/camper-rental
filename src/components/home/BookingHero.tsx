'use client'
import { useState } from 'react'
import type { Camper } from '@/lib/types'
import { SearchBar } from './SearchBar'
import { CamperFilters, filterCampers } from './CamperFilters'
import type { FilterKey } from './CamperFilters'
import { FleetPreview } from './FleetPreview'
import styles from './BookingHero.module.css'

interface Props {
  campers: Camper[]
}

export function BookingHero({ campers }: Props) {
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = filterCampers(campers, filter)

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <h1 className={styles.headline}>
            Wynajmij kampera<br />
            <span className={styles.highlight}>z Rzeszowa</span>
          </h1>
          <p className={styles.subtitle}>
            Wybierz termin i sprawdź dostępność. Rezerwacja online w 5 minut.
          </p>
          <SearchBar />
          <div className={styles.trust}>
            <span className={styles.trustBadge}>50+ zadowolonych klientów</span>
            <span className={styles.trustBadge}>Ocena 5.0</span>
            <span className={styles.trustBadge}>BLIK · Visa · Apple Pay</span>
          </div>
        </div>
      </section>
      <CamperFilters active={filter} onChange={setFilter} />
      <FleetPreview campers={filtered} />
    </>
  )
}
