'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DayPicker } from 'react-day-picker'
import type { DateRange } from 'react-day-picker'
import { pl } from 'date-fns/locale'
import { format } from 'date-fns'
import { IconSearch } from '@/components/icons'
import styles from './SearchBar.module.css'

function formatDate(d: Date) {
  return format(d, 'd MMM', { locale: pl })
}

export function SearchBar() {
  const router = useRouter()
  const [range, setRange] = useState<DateRange | undefined>()
  const [calOpen, setCalOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setCalOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [])

  function handleSelect(r: DateRange | undefined) {
    setRange(r)
    if (r?.from && r?.to) {
      setCalOpen(false)
    }
  }

  function handleClear(e: React.MouseEvent) {
    e.stopPropagation()
    setRange(undefined)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setCalOpen(false)
    if (range?.from && range?.to) {
      const od = format(range.from, 'yyyy-MM-dd')
      const to = format(range.to, 'yyyy-MM-dd')
      router.push(`/szukaj?od=${od}&do=${to}`)
    } else {
      document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const fromLabel = range?.from ? formatDate(range.from) : 'Odbiór kampera'
  const toLabel = range?.to ? formatDate(range.to) : 'Data zwrotu'
  const hasRange = range?.from || range?.to

  return (
    <div className={styles.wrapper} ref={wrapRef}>
      <form className={styles.bar} onSubmit={handleSubmit}>
        <button
          type="button"
          className={`${styles.field} ${!range?.from ? styles.placeholder : ''}`}
          onClick={() => setCalOpen(v => !v)}
          aria-label="Wybierz daty"
        >
          <span className={styles.fieldLabel}>Kiedy jedziesz?</span>
          <span className={styles.fieldValue}>
            {range?.from && range?.to
              ? `${formatDate(range.from)} → ${formatDate(range.to)}`
              : range?.from
                ? `${formatDate(range.from)} → ?`
                : 'Wybierz daty'}
          </span>
        </button>

        <div className={styles.divider} />

        {hasRange && (
          <button type="button" className={styles.clearBtn} onClick={handleClear}>
            ✕
          </button>
        )}

        <button type="submit" className={styles.searchBtn}>
          <IconSearch size={18} />
          <span>Szukaj</span>
        </button>
      </form>

      {calOpen && (
        <div className={styles.calPopup}>
          <DayPicker
            mode="range"
            numberOfMonths={2}
            selected={range}
            onSelect={handleSelect}
            locale={pl}
            weekStartsOn={1}
            disabled={{ before: new Date() }}
            showOutsideDays={false}
          />
        </div>
      )}
    </div>
  )
}
