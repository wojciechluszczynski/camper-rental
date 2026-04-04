'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DayPicker } from 'react-day-picker'
import type { DateRange } from 'react-day-picker'
import { format, differenceInCalendarDays } from 'date-fns'
import { pl } from 'date-fns/locale'
import 'react-day-picker/style.css'
import styles from './BookingForm.module.css'

interface Props {
  camperId: string
  camperName: string
  pricePerDay: number
  bookedRanges: { from: Date; to: Date }[]
  initialRange?: { from: Date; to: Date }
}

interface FormData {
  name: string
  email: string
  phone: string
}

export function BookingForm({ camperId, camperName, pricePerDay, bookedRanges, initialRange }: Props) {
  const router = useRouter()
  const [range, setRange] = useState<DateRange | undefined>(initialRange)
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const days = range?.from && range?.to
    ? differenceInCalendarDays(range.to, range.from) + 1
    : 0
  const totalPrice = days * pricePerDay

  const disabledDays = [
    { before: new Date() },
    ...bookedRanges,
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!range?.from || !range?.to) {
      setError('Wybierz termin rezerwacji')
      return
    }
    if (!form.name || !form.email || !form.phone) {
      setError('Wypełnij wszystkie pola')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          camper_id: camperId,
          user_email: form.email,
          user_name: form.name,
          user_phone: form.phone,
          date_from: format(range.from, 'yyyy-MM-dd'),
          date_to: format(range.to, 'yyyy-MM-dd'),
          total_price: totalPrice,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Błąd rezerwacji')

      // Store client_secret for payment page
      sessionStorage.setItem(`booking_secret_${data.booking_id}`, data.client_secret)
      router.push(`/rezerwacja/${data.booking_id}`)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.calendarWrap}>
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          disabled={disabledDays}
          numberOfMonths={1}
          locale={pl}
          className={styles.calendar}
        />
      </div>

      {days > 0 && (
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span>{days} {days === 1 ? 'doba' : days < 5 ? 'doby' : 'dób'} × {pricePerDay} zł</span>
            <strong>{totalPrice} zł</strong>
          </div>
          {range?.from && range?.to && (
            <div className={styles.dates}>
              {format(range.from, 'd MMM', { locale: pl })} – {format(range.to, 'd MMM yyyy', { locale: pl })}
            </div>
          )}
        </div>
      )}

      <div className={styles.fields}>
        <input
          className={styles.input}
          type="text"
          placeholder="Imię i nazwisko"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Adres email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          required
        />
        <input
          className={styles.input}
          type="tel"
          placeholder="Numer telefonu"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          required
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button
        type="submit"
        className={styles.submit}
        disabled={loading || days === 0}
      >
        {loading ? 'Przetwarzanie...' : days > 0 ? `Zarezerwuj za ${totalPrice} zł` : 'Wybierz termin'}
      </button>
    </form>
  )
}
