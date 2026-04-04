'use client'
import { useState } from 'react'
import type { Camper } from '@/lib/types'
import { SearchBar } from './SearchBar'
import { FleetPreview } from './FleetPreview'
import styles from './BookingHero.module.css'

interface Props {
  campers: Camper[]
}

export function BookingHero({ campers }: Props) {
  const [dateFrom, setDateFrom] = useState<Date | null>(null)
  const [dateTo, setDateTo] = useState<Date | null>(null)

  function handleSearch(from: Date | null, to: Date | null) {
    setDateFrom(from)
    setDateTo(to)
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <h1 className={styles.headline}>Wynajmij kampera<br /><span className={styles.highlight}>w Polsce i Europie</span></h1>
          <p className={styles.subtitle}>Wybierz termin i sprawdź dostępność. Rezerwacja online w 5 minut.</p>
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
      <FleetPreview campers={campers} dateFrom={dateFrom} dateTo={dateTo} />
    </>
  )
}
