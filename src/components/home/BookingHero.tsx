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
  const [dateFrom, setDateFrom] = useState<Date | null>(null)
  const [dateTo, setDateTo] = useState<Date | null>(null)
  const [filter, setFilter] = useState<FilterKey>('all')

  function handleSearch(from: Date | null, to: Date | null) {
    setDateFrom(from)
    setDateTo(to)
  }

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
          <SearchBar onSearch={handleSearch} />
          <div className={styles.trust}>
            <span>50+ zadowolonych klientów</span>
            <span className={styles.dot}>·</span>
            <span>Ocena 5★</span>
            <span className={styles.dot}>·</span>
            <span>BLIK / Visa / Apple Pay</span>
          </div>
        </div>
      </section>
      <CamperFilters active={filter} onChange={setFilter} />
      <FleetPreview campers={filtered} dateFrom={dateFrom} dateTo={dateTo} />
    </>
  )
}
