'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { IconCalendar, IconSearch } from '@/components/icons'
import styles from './SearchBar.module.css'

interface Props {
  onSearch: (from: Date | null, to: Date | null) => void
}

export function SearchBar({ onSearch }: Props) {
  const today = format(new Date(), 'yyyy-MM-dd')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSearch(from ? new Date(from) : null, to ? new Date(to) : null)
  }

  function handleClear() {
    setFrom('')
    setTo('')
    onSearch(null, null)
  }

  return (
    <form className={styles.bar} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>
          <IconCalendar size={16} />
          Odbior
        </label>
        <input
          className={styles.input}
          type="date"
          min={today}
          value={from}
          onChange={e => setFrom(e.target.value)}
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.field}>
        <label className={styles.label}>
          <IconCalendar size={16} />
          Zwrot
        </label>
        <input
          className={styles.input}
          type="date"
          min={from || today}
          value={to}
          onChange={e => setTo(e.target.value)}
        />
      </div>
      <div className={styles.actions}>
        {(from || to) && (
          <button type="button" className={styles.clearBtn} onClick={handleClear}>
            Wyczysc
          </button>
        )}
        <button type="submit" className={styles.searchBtn}>
          <IconSearch size={18} />
          Szukaj
        </button>
      </div>
    </form>
  )
}
