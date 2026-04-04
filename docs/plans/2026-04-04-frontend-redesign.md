# Frontend Redesign — Booking-First + SEO Subpages

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the hero landing page with a booking-first search UI (date range picker → camper cards), add 4 SEO subpages, and replace all emoji placeholders with proper SVG icons throughout.

**Architecture:** The homepage becomes a client-component shell that holds a date range state; the search bar (DateRangePicker) passes dates down to CamperCard components that show per-stay price and an availability badge. SEO subpages are static server components with thin content + structured data. All emoji are extracted into a single `src/components/icons/` module of inline SVG components.

**Tech Stack:** Next.js 16 App Router, React 19, CSS Modules, react-day-picker v9, date-fns, existing Supabase + Stripe backend (untouched).

---

## Task 1: Create SVG icon components (replaces all emoji)

**Files:**
- Create: `src/components/icons/index.tsx`

**Step 1: Write the file**

```tsx
// src/components/icons/index.tsx
// All icons are 20×20 inline SVGs unless noted. strokeWidth=1.75, stroke=currentColor, fill=none.

export function IconCamper({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="9" width="17" height="10" rx="2"/>
      <path d="M18 9l3 4v6h-3V9z"/>
      <circle cx="5.5" cy="19.5" r="1.5"/>
      <circle cx="15.5" cy="19.5" r="1.5"/>
      <path d="M1 14h17"/>
    </svg>
  )
}

export function IconUsers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

export function IconBed({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4"/>
      <path d="M2 9h20v9H2z"/>
      <path d="M2 18v2"/>
      <path d="M22 18v2"/>
      <path d="M7 9v4"/>
      <rect x="7" y="9" width="5" height="4" rx="1"/>
    </svg>
  )
}

export function IconCalendar({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  )
}

export function IconCard({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2"/>
      <path d="M1 10h22"/>
    </svg>
  )
}

export function IconShower({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l2 2"/>
      <path d="M6 6a5 5 0 0 1 7.07 0l5 5"/>
      <path d="M10 14l-1 6"/>
      <path d="M14 14l1 6"/>
      <path d="M8 17h8"/>
    </svg>
  )
}

export function IconKitchen({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2h18v4H3z"/>
      <path d="M3 6v16h18V6"/>
      <path d="M12 6v16"/>
      <path d="M3 12h9"/>
      <circle cx="6" cy="9" r="1"/>
    </svg>
  )
}

export function IconMail({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}

export function IconPhone({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.91-8.18A2 2 0 0 1 3.68 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export function IconPin({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export function IconStar({ size = 20, filled = false }: { size?: number; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export function IconChevronRight({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  )
}

export function IconSearch({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  )
}

export function IconCheck({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export function IconYear({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export function IconBlik({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M6 9v6M10 9v6M14 9v6"/>
      <path d="M14 9h4M14 12h3M14 15h4"/>
    </svg>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/icons/index.tsx
git commit -m "feat: add SVG icon components to replace all emoji"
```

---

## Task 2: Redesign Header — logo + minimal nav, no emoji

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Header.module.css`

**Step 1: Update Header.tsx**

Replace the entire file content:

```tsx
import Link from 'next/link'
import { IconCamper } from '@/components/icons'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <IconCamper size={22} />
          <span>Kamperownia</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#fleet">Kamery</Link>
          <Link href="/#jak-to-dziala">Jak to działa</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <Link href="/#fleet" className={styles.cta}>Zarezerwuj</Link>
      </div>
    </header>
  )
}
```

**Step 2: Update Header.module.css**

Replace entire file:

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
}

.inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
  height: 64px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 1.125rem;
  color: var(--color-primary);
  flex-shrink: 0;
}

.logo svg { color: var(--color-primary); }

.nav {
  display: flex;
  gap: 24px;
  margin-left: auto;
}

.nav a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color 0.15s;
}

.nav a:hover { color: var(--color-text); }

.cta {
  background: var(--color-primary);
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 10px 20px;
  border-radius: var(--radius);
  transition: background 0.15s;
  flex-shrink: 0;
}

.cta:hover { background: var(--color-primary-dark); }

@media (max-width: 640px) {
  .nav { display: none; }
}
```

**Step 3: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Header.module.css
git commit -m "feat: redesign header with SVG logo icon, sticky blur"
```

---

## Task 3: Redesign Footer — SVG icons, payment methods

**Files:**
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/Footer.module.css`

**Step 1: Update Footer.tsx**

```tsx
import Link from 'next/link'
import { IconMail, IconPhone, IconPin, IconCamper } from '@/components/icons'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="kontakt" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <IconCamper size={20} />
            <span>Kamperownia</span>
          </div>
          <p className={styles.tagline}>Twoja przygoda zaczyna się tutaj.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Kontakt</h4>
          <ul className={styles.contactList}>
            <li>
              <IconMail size={16} />
              <a href="mailto:kontakt@kamperownia.pl">kontakt@kamperownia.pl</a>
            </li>
            <li>
              <IconPhone size={16} />
              <a href="tel:+48500000000">+48 500 000 000</a>
            </li>
            <li>
              <IconPin size={16} />
              <span>Warszawa, Polska</span>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Strony</h4>
          <ul className={styles.linkList}>
            <li><Link href="/wynajem-kampera-warszawa">Wynajem — Warszawa</Link></li>
            <li><Link href="/wynajem-kampera-polska">Wynajem — Polska</Link></li>
            <li><Link href="/wynajem-kampera-na-weekend">Wynajem na weekend</Link></li>
            <li><Link href="/wynajem-kampera-europa">Wynajem — Europa</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Płatności</h4>
          <div className={styles.payments}>
            <span className={styles.payBadge}>BLIK</span>
            <span className={styles.payBadge}>Visa</span>
            <span className={styles.payBadge}>Mastercard</span>
            <span className={styles.payBadge}>Apple Pay</span>
            <span className={styles.payBadge}>Google Pay</span>
            <span className={styles.payBadge}>P24</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Kamperownia. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}
```

**Step 2: Update Footer.module.css**

```css
.footer {
  background: var(--color-primary-dark);
  color: #E5F0EA;
  padding-top: clamp(40px, 6vw, 64px);
}

.inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad) 48px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 1.125rem;
  color: white;
  margin-bottom: 12px;
}

.tagline {
  font-size: 0.875rem;
  color: #A8C5B0;
  line-height: 1.6;
  max-width: 220px;
}

.colTitle {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #A8C5B0;
  margin-bottom: 16px;
}

.contactList, .linkList {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contactList li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
}

.contactList svg { flex-shrink: 0; color: #A8C5B0; }

.contactList a, .contactList span { color: #E5F0EA; }
.contactList a:hover { color: white; text-decoration: underline; }

.linkList li { font-size: 0.875rem; }
.linkList a { color: #A8C5B0; transition: color 0.15s; }
.linkList a:hover { color: white; }

.payments {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.payBadge {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #E5F0EA;
}

.bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 20px var(--container-pad);
  max-width: var(--container-max);
  margin: 0 auto;
}

.bottom p {
  font-size: 0.8125rem;
  color: #A8C5B0;
}

@media (max-width: 768px) {
  .inner { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .inner { grid-template-columns: 1fr; }
}
```

**Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx src/components/layout/Footer.module.css
git commit -m "feat: redesign footer with SVG icons, 4-column layout, SEO links"
```

---

## Task 4: Booking-first homepage — SearchBar component

**Files:**
- Create: `src/components/home/SearchBar.tsx`
- Create: `src/components/home/SearchBar.module.css`

**Step 1: Create SearchBar.tsx**

This is a client component. It renders two date inputs (from/to) and a search button. On submit it calls `onSearch(from, to)`.

```tsx
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
          Odbiór
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
            Wyczyść
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
```

**Step 2: Create SearchBar.module.css**

```css
.bar {
  display: flex;
  align-items: stretch;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  max-width: 640px;
  width: 100%;
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  min-width: 0;
}

.label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-muted);
  margin-bottom: 4px;
}

.label svg { color: var(--color-primary); }

.input {
  border: none;
  outline: none;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text);
  font-family: inherit;
  background: transparent;
  width: 100%;
  cursor: pointer;
}

.input::-webkit-calendar-picker-indicator {
  opacity: 0.5;
  cursor: pointer;
}

.divider {
  width: 1px;
  background: var(--color-border);
  margin: 12px 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 10px 8px;
}

.clearBtn {
  background: none;
  border: none;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  padding: 8px 10px;
  border-radius: var(--radius);
  cursor: pointer;
  white-space: nowrap;
}

.clearBtn:hover { background: var(--color-surface); }

.searchBtn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-primary);
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 12px 20px;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
}

.searchBtn:hover { background: var(--color-primary-dark); }

@media (max-width: 600px) {
  .bar {
    flex-direction: column;
    border-radius: var(--radius);
  }
  .divider { width: auto; height: 1px; margin: 0 12px; }
  .actions { padding: 12px; }
  .searchBtn { flex: 1; justify-content: center; }
}
```

**Step 3: Commit**

```bash
git add src/components/home/SearchBar.tsx src/components/home/SearchBar.module.css
git commit -m "feat: add SearchBar component with date range inputs"
```

---

## Task 5: Update CamperCard — SVG icons, date-aware pricing

**Files:**
- Modify: `src/components/home/CamperCard.tsx`
- Modify: `src/components/home/CamperCard.module.css`

**Step 1: Update CamperCard.tsx**

```tsx
import Link from 'next/link'
import { differenceInCalendarDays, format } from 'date-fns'
import type { Camper } from '@/lib/types'
import { IconUsers, IconBed, IconYear, IconShower, IconKitchen, IconChevronRight } from '@/components/icons'
import styles from './CamperCard.module.css'

interface Props {
  camper: Camper
  dateFrom?: Date | null
  dateTo?: Date | null
}

export function CamperCard({ camper, dateFrom, dateTo }: Props) {
  const { specs } = camper

  const days = dateFrom && dateTo
    ? differenceInCalendarDays(dateTo, dateFrom) + 1
    : 0
  const totalPrice = days > 0 ? days * camper.price_per_day : null

  const searchParams = dateFrom && dateTo
    ? `?od=${format(dateFrom, 'yyyy-MM-dd')}&do=${format(dateTo, 'yyyy-MM-dd')}`
    : ''

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {camper.images.length > 0 ? (
          <img src={camper.images[0]} alt={camper.name} />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
        {days > 0 && (
          <div className={styles.availBadge}>
            <span className={styles.availDot} />
            Dostępny
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{camper.name}</h3>
          <div className={styles.price}>
            {totalPrice ? (
              <>
                <span className={styles.priceAmount}>{totalPrice} zł</span>
                <span className={styles.priceUnit}>za {days} {days === 1 ? 'dobę' : days < 5 ? 'doby' : 'dób'}</span>
              </>
            ) : (
              <>
                <span className={styles.priceAmount}>{camper.price_per_day} zł</span>
                <span className={styles.priceUnit}>/doba</span>
              </>
            )}
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.specs}>
          <span className={styles.spec}>
            <IconUsers size={14} />
            {specs.seats} osób
          </span>
          <span className={styles.spec}>
            <IconBed size={14} />
            {specs.sleeping_spots} miejsc
          </span>
          <span className={styles.spec}>
            <IconYear size={14} />
            {specs.year}
          </span>
          {specs.bathroom && (
            <span className={styles.spec}>
              <IconShower size={14} />
              Łazienka
            </span>
          )}
          {specs.kitchen && (
            <span className={styles.spec}>
              <IconKitchen size={14} />
              Kuchnia
            </span>
          )}
        </div>

        <Link href={`/kamper/${camper.slug}${searchParams}`} className={styles.btn}>
          Sprawdź dostępność
          <IconChevronRight size={16} />
        </Link>
      </div>
    </div>
  )
}
```

**Step 2: Update CamperCard.module.css**

```css
.card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.image {
  aspect-ratio: 16/9;
  background: var(--color-surface);
  overflow: hidden;
  position: relative;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.imagePlaceholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
}

.availBadge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border-radius: 100px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: var(--shadow);
}

.availDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-primary);
}

.body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 8px;
}

.name {
  font-size: 1.125rem;
  font-weight: 700;
}

.price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
}

.priceAmount {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.2;
}

.priceUnit {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.description {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 16px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.spec {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8125rem;
  background: var(--color-surface);
  border-radius: 100px;
  padding: 4px 10px;
  color: var(--color-text-muted);
}

.spec svg { color: var(--color-primary); flex-shrink: 0; }

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center;
  background: var(--color-primary);
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 12px;
  border-radius: var(--radius);
  transition: background 0.15s;
  margin-top: auto;
}

.btn:hover { background: var(--color-primary-dark); }
```

**Step 3: Commit**

```bash
git add src/components/home/CamperCard.tsx src/components/home/CamperCard.module.css
git commit -m "feat: update CamperCard with SVG icons and date-aware pricing"
```

---

## Task 6: Booking-first FleetPreview — accepts dates

**Files:**
- Modify: `src/components/home/FleetPreview.tsx`
- Modify: `src/components/home/FleetPreview.module.css`

**Step 1: Update FleetPreview.tsx**

```tsx
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
```

**Step 2: Update FleetPreview.module.css**

```css
.section {
  padding: clamp(32px, 6vw, 64px) 0 clamp(48px, 8vw, 96px);
  background: var(--color-surface);
}

.inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.empty {
  text-align: center;
  padding: 64px 0;
  color: var(--color-text-muted);
}

.searching {
  text-align: center;
  padding: 64px 0;
  color: var(--color-text-muted);
  font-style: italic;
}
```

**Step 3: Commit**

```bash
git add src/components/home/FleetPreview.tsx src/components/home/FleetPreview.module.css
git commit -m "feat: FleetPreview accepts dates for per-stay pricing"
```

---

## Task 7: Delete Hero and HowItWorks; create booking-first homepage hero section

**Files:**
- Create: `src/components/home/BookingHero.tsx`
- Create: `src/components/home/BookingHero.module.css`
- Delete: `src/components/home/Hero.tsx`
- Delete: `src/components/home/Hero.module.css`
- Delete: `src/components/home/HowItWorks.tsx`
- Delete: `src/components/home/HowItWorks.module.css`

**Step 1: Create BookingHero.tsx**

This is a client component — it owns the date state and passes it down.

```tsx
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
```

**Step 2: Create BookingHero.module.css**

```css
.hero {
  background: linear-gradient(160deg, #F0FDF4 0%, #DCFCE7 60%, #F0FDF4 100%);
  padding: clamp(48px, 8vw, 96px) 0 clamp(32px, 5vw, 56px);
}

.inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.headline {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
}

.highlight { color: var(--color-primary); }

.subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  max-width: 480px;
  line-height: 1.6;
}

.trust {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  flex-wrap: wrap;
  justify-content: center;
}

.dot { opacity: 0.4; }
```

**Step 3: Delete old files**

```bash
rm src/components/home/Hero.tsx src/components/home/Hero.module.css
rm src/components/home/HowItWorks.tsx src/components/home/HowItWorks.module.css
```

**Step 4: Commit**

```bash
git add src/components/home/BookingHero.tsx src/components/home/BookingHero.module.css
git add -u
git commit -m "feat: replace hero+HowItWorks with booking-first BookingHero"
```

---

## Task 8: Update app/page.tsx — use BookingHero

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace page.tsx**

```tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookingHero } from '@/components/home/BookingHero'
import { createServiceClient } from '@/lib/supabase-server'
import type { Camper } from '@/lib/types'

export const metadata = {
  title: 'Wynajem Kamperów — Kamperownia',
  description: 'Wynajmij kampera w Polsce i Europie. Wybierz termin, sprawdź dostępność i zarezerwuj online w 5 minut. BLIK, Visa, Apple Pay.',
}

export default async function HomePage() {
  let campers: Camper[] = []
  try {
    const supabase = createServiceClient()
    const { data } = await supabase
      .from('campers')
      .select('*')
      .eq('active', true)
      .order('price_per_day', { ascending: true })
    campers = (data as Camper[]) ?? []
  } catch {
    // Supabase not configured yet
  }

  return (
    <>
      <Header />
      <main>
        <BookingHero campers={campers} />
      </main>
      <Footer />
    </>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update homepage to use booking-first BookingHero"
```

---

## Task 9: Create 4 SEO subpages

Each subpage is a simple static server component. Create them all in one pass.

**Files:**
- Create: `src/app/wynajem-kampera-warszawa/page.tsx`
- Create: `src/app/wynajem-kampera-polska/page.tsx`
- Create: `src/app/wynajem-kampera-na-weekend/page.tsx`
- Create: `src/app/wynajem-kampera-europa/page.tsx`
- Create: `src/app/seo-page.module.css` (shared styles)

**Step 1: Create shared SEO page styles**

```css
/* src/app/seo-page.module.css */
.page {
  max-width: 760px;
  margin: 0 auto;
  padding: clamp(40px, 6vw, 80px) var(--container-pad);
}

.breadcrumb {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 32px;
}

.breadcrumb a { color: var(--color-primary); }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb span { margin: 0 6px; opacity: 0.4; }

.h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}

.lead {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 40px;
}

.h2 {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text);
  margin-bottom: 16px;
}

.ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.ul li {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text);
  margin-bottom: 4px;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-primary);
  color: white;
  font-weight: 700;
  font-size: 1.0625rem;
  padding: 16px 32px;
  border-radius: var(--radius);
  transition: background 0.15s;
  margin-top: 16px;
}

.cta:hover { background: var(--color-primary-dark); }
```

**Step 2: Create Warszawa page**

```tsx
// src/app/wynajem-kampera-warszawa/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Warszawa — Kamperownia',
  description: 'Wynajem kampera z Warszawy. Odbiór w Warszawie i okolicach, pełne wyposażenie, BLIK i karty. Zarezerwuj online.',
}

export default function WarsawPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera Warszawa
          </p>
          <h1 className={styles.h1}>Wynajem kampera Warszawa</h1>
          <p className={styles.lead}>
            Planujesz wyjazd z Warszawy? Odbierz kampera bezpośrednio w stolicy lub okolicach i ruszaj w drogę — do Polski, Niemiec, Skandynawii lub gdziekolwiek pragniesz.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Dlaczego wynajem kampera z Warszawy?</h2>
            <p className={styles.p}>
              Warszawa to doskonały punkt startowy dla podróżników kamperowych. Bliskość autostrady A2 i S8 pozwala w kilka godzin dotrzeć nad Bałtyk, w Bieszczady lub do Niemiec. Nasz parking odbioru mieści się w łatwo dostępnym miejscu, z bezpłatnym parkingiem i możliwością przyjazdu komunikacją miejską.
            </p>
            <ul className={styles.ul}>
              <li>Odbiór i zdanie kampera w Warszawie</li>
              <li>Możliwość odbioru w weekendy i dni świąteczne</li>
              <li>Pełne instrukcje obsługi przy odbiorze</li>
              <li>Ubezpieczenie AC/OC w cenie</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Co zawiera wynajem?</h2>
            <p className={styles.p}>
              Nasze kampery wyjeżdżają w pełni wyposażone: pościel, ręczniki, kompletna kuchnia (lodówka, kuchenka, naczynia), łazienka z prysznicem, ogrzewanie. Żadnych ukrytych opłat za wyposażenie.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jak zarezerwować?</h2>
            <p className={styles.p}>
              Wybierz termin na stronie głównej, sprawdź dostępność i zapłać online — BLIK, kartą, Apple Pay lub Google Pay. Potwierdzenie otrzymasz na e-mail w ciągu kilku minut.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Sprawdź dostępność</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

**Step 3: Create Polska page**

```tsx
// src/app/wynajem-kampera-polska/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Polska — Kamperownia',
  description: 'Wynajem kamperów na wyjazdy po Polsce. Morze, góry, jeziora — odkryj Polskę na własnych zasadach. Rezerwacja online.',
}

export default function PolskaPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera Polska
          </p>
          <h1 className={styles.h1}>Wynajem kampera Polska</h1>
          <p className={styles.lead}>
            Polska kamperem to setki możliwości — Bałtyk, Tatry, Mazury, Bieszczady. Pełna wolność trasy, nocleg tam gdzie chcesz, śniadanie z widokiem na jezioro lub morze.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Najpopularniejsze trasy po Polsce</h2>
            <p className={styles.p}>Nasi klienci najchętniej wybierają:</p>
            <ul className={styles.ul}>
              <li><strong>Bałtyk:</strong> Świnoujście → Kołobrzeg → Trójmiasto (7–10 dni)</li>
              <li><strong>Mazury:</strong> Giżycko, Mikołajki, Ryn — jeziora i cisza (4–7 dni)</li>
              <li><strong>Bieszczady:</strong> Połoniny, Cisna, San — dzika przyroda (5–8 dni)</li>
              <li><strong>Tatry i Podhale:</strong> Zakopane, Doliny, Krupówki (3–5 dni)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Ile kosztuje wynajem kampera po Polsce?</h2>
            <p className={styles.p}>
              Cena doby wynajmu zaczyna się od 350 zł. Tydzień podróży kamperem po Polsce to wydatek porównywalny z wynajęciem mieszkania wakacyjnego — ale z dużo większą swobodą. Paliwo to jedyny dodatkowy koszt.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Jakie kempingi są w Polsce?</h2>
            <p className={styles.p}>
              Polska posiada ponad 200 kempingów kategoryzowanych przez PTTK. Wiele z nich działa całorocznie. Korzystamy z serwisu ACSI i Camping.info, które polecamy do planowania trasy.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Zarezerwuj kampera</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

**Step 4: Create Weekend page**

```tsx
// src/app/wynajem-kampera-na-weekend/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera na Weekend — Kamperownia',
  description: 'Krótki wynajem kampera na weekend lub długi weekend. Minimum 2 doby. Sprawdź dostępność i zarezerwuj na już.',
}

export default function WeekendPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera na weekend
          </p>
          <h1 className={styles.h1}>Wynajem kampera na weekend</h1>
          <p className={styles.lead}>
            Nie potrzebujesz tygodniowego urlopu, żeby uciec z miasta. Wynajem kampera na 2–3 dni to idealny sposób na szybką regenerację i przygodę w długi weekend.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Weekendowe destynacje z Warszawy</h2>
            <ul className={styles.ul}>
              <li><strong>Kampinos:</strong> 40 km od centrum, kempingi na skraju puszczy</li>
              <li><strong>Mazury:</strong> 3 h jazdy — jezioro Śniardwy, Niegocin</li>
              <li><strong>Roztocze:</strong> 4 h — rezerwat, spokój, dzikie rzeki</li>
              <li><strong>Góry Świętokrzyskie:</strong> 3 h — szlaki, widoki, brak tłumów</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Minimum wynajmu</h2>
            <p className={styles.p}>
              Minimalna długość wynajmu to 2 doby. Odbiór możliwy w piątek od 14:00, zdanie w niedzielę do 18:00 — idealne na klasyczny weekend.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Czy kamper jest odpowiedni na krótki wyjazd?</h2>
            <p className={styles.p}>
              Zdecydowanie tak. Kamper eliminuje potrzebę rezerwacji hotelu czy Airbnb. Jeden pojazd = transport + nocleg + kuchnia. Na weekendzie to duża wygoda dla rodziny lub pary.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Sprawdź dostępność na weekend</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

**Step 5: Create Europa page**

```tsx
// src/app/wynajem-kampera-europa/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import styles from '../seo-page.module.css'

export const metadata: Metadata = {
  title: 'Wynajem Kampera Europa — Kamperownia',
  description: 'Wynajem kampera na wyjazd do Europy — Niemcy, Skandynawia, Włochy, Chorwacja. Bez ograniczeń kilometrów. Rezerwacja online.',
}

export default function EuropaPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.page}>
          <p className={styles.breadcrumb}>
            <Link href="/">Strona główna</Link>
            <span>/</span>
            Wynajem kampera Europa
          </p>
          <h1 className={styles.h1}>Wynajem kampera Europa</h1>
          <p className={styles.lead}>
            Kamper to najlepsza forma zwiedzania Europy. Bez hoteli, bez kompromisów co do trasy, bez pośpiechu. Wynajmij u nas i jedź — do Skandynawii, Włoch, Chorwacji, gdziekolwiek chcesz.
          </p>

          <div className={styles.section}>
            <h2 className={styles.h2}>Popularne trasy europejskie</h2>
            <ul className={styles.ul}>
              <li><strong>Skandynawia:</strong> Oslo, fiordy norweskie, Lofoty (3–4 tygodnie)</li>
              <li><strong>Niemcy i Austria:</strong> Bawaria, Alpy, Dolina Renu (10–14 dni)</li>
              <li><strong>Włochy:</strong> Toskania, Rzym, Cinque Terre, Sycylia (2–3 tygodnie)</li>
              <li><strong>Chorwacja:</strong> wybrzeże Dalmacji, wyspy, parki narodowe (1–2 tygodnie)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Czy można wyjechać za granicę?</h2>
            <p className={styles.p}>
              Tak — nasze kampery posiadają zielone karty ubezpieczeniowe ważne na terenie całej Europy. Brak ograniczeń kilometrów na trasach europejskich. Wymagamy jedynie powiadomienia o kierunku wyjazdu.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.h2}>Ile kosztuje miesiąc w Europie kamperem?</h2>
            <p className={styles.p}>
              Przy wynajmie powyżej 14 dób oferujemy korzystniejsze stawki. Skontaktuj się z nami, aby otrzymać indywidualną wycenę na dłuższy wyjazd europejski.
            </p>
          </div>

          <Link href="/" className={styles.cta}>Sprawdź dostępność</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

**Step 6: Commit all SEO pages**

```bash
git add src/app/seo-page.module.css \
  src/app/wynajem-kampera-warszawa/page.tsx \
  src/app/wynajem-kampera-polska/page.tsx \
  src/app/wynajem-kampera-na-weekend/page.tsx \
  src/app/wynajem-kampera-europa/page.tsx
git commit -m "feat: add 4 SEO subpages (Warszawa, Polska, Weekend, Europa)"
```

---

## Task 10: Update CamperPage — pass dates from URL to BookingForm

**Files:**
- Modify: `src/app/kamper/[slug]/page.tsx`

When the user clicks a card after selecting dates on the homepage, we pass `?od=&do=` params. Read them and pre-fill the BookingForm.

**Step 1: Update the page**

```tsx
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Gallery } from '@/components/camper/Gallery'
import { Specs } from '@/components/camper/Specs'
import { BookingForm } from '@/components/camper/BookingForm'
import { createServiceClient } from '@/lib/supabase-server'
import type { Camper, Booking } from '@/lib/types'
import styles from './page.module.css'

interface Props {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ od?: string; do?: string }>
}

export default async function CamperPage({ params, searchParams }: Props) {
  const { slug } = await params
  const { od, do: dateTo } = await searchParams
  const supabase = createServiceClient()

  const { data: camper } = await supabase
    .from('campers')
    .select('*')
    .eq('slug', slug)
    .eq('active', true)
    .single()

  if (!camper) notFound()

  const { data: bookings } = await supabase
    .from('bookings')
    .select('date_from, date_to')
    .eq('camper_id', camper.id)
    .eq('status', 'paid')

  const bookedRanges = (bookings ?? []).map((b: Pick<Booking, 'date_from' | 'date_to'>) => ({
    from: new Date(b.date_from),
    to: new Date(b.date_to),
  }))

  const initialRange = od && dateTo ? { from: new Date(od), to: new Date(dateTo) } : undefined

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <Gallery images={(camper as Camper).images} name={(camper as Camper).name} />
              <Specs specs={(camper as Camper).specs} />
            </div>
            <div className={styles.right}>
              <div className={styles.stickyBox}>
                <div className={styles.priceHeader}>
                  <h1 className={styles.camperName}>{(camper as Camper).name}</h1>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>{(camper as Camper).price_per_day} zł</span>
                    <span className={styles.priceUnit}>/doba</span>
                  </div>
                </div>
                <p className={styles.description}>{(camper as Camper).description}</p>
                <BookingForm
                  camperId={(camper as Camper).id}
                  camperName={(camper as Camper).name}
                  pricePerDay={(camper as Camper).price_per_day}
                  bookedRanges={bookedRanges}
                  initialRange={initialRange}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  try {
    const supabase = createServiceClient()
    const { data: campers } = await supabase.from('campers').select('slug').eq('active', true)
    return (campers ?? []).map((c: { slug: string }) => ({ slug: c.slug }))
  } catch {
    return []
  }
}
```

**Step 2: Update BookingForm to accept initialRange prop**

In `src/components/camper/BookingForm.tsx`, add `initialRange` to Props and use it as useState initial value:

```tsx
interface Props {
  camperId: string
  camperName: string
  pricePerDay: number
  bookedRanges: { from: Date; to: Date }[]
  initialRange?: { from: Date; to: Date }
}

export function BookingForm({ camperId, camperName, pricePerDay, bookedRanges, initialRange }: Props) {
  const router = useRouter()
  const [range, setRange] = useState<DateRange | undefined>(initialRange)
  // ... rest unchanged
```

**Step 3: Commit**

```bash
git add src/app/kamper/[slug]/page.tsx src/components/camper/BookingForm.tsx
git commit -m "feat: pass date params from homepage search to booking form"
```

---

## Task 11: Fix Specs component — replace emoji with SVG icons

**Files:**
- Modify: `src/components/camper/Specs.tsx`

**Step 1: Read and update Specs.tsx**

Replace emoji spec icons with the SVG components:

```tsx
import { IconUsers, IconBed, IconShower, IconKitchen, IconYear } from '@/components/icons'
import styles from './Specs.module.css'
import type { CamperSpecs } from '@/lib/types'

interface Props { specs: CamperSpecs }

export function Specs({ specs }: Props) {
  return (
    <div className={styles.specs}>
      <h2 className={styles.title}>Specyfikacja</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <IconUsers size={20} />
          <div>
            <span className={styles.label}>Miejsca</span>
            <span className={styles.value}>{specs.seats} osób</span>
          </div>
        </div>
        <div className={styles.item}>
          <IconBed size={20} />
          <div>
            <span className={styles.label}>Sypialnia</span>
            <span className={styles.value}>{specs.sleeping_spots} miejsc</span>
          </div>
        </div>
        <div className={styles.item}>
          <IconYear size={20} />
          <div>
            <span className={styles.label}>Rocznik</span>
            <span className={styles.value}>{specs.year}</span>
          </div>
        </div>
        {specs.bathroom && (
          <div className={styles.item}>
            <IconShower size={20} />
            <div>
              <span className={styles.label}>Łazienka</span>
              <span className={styles.value}>Tak</span>
            </div>
          </div>
        )}
        {specs.kitchen && (
          <div className={styles.item}>
            <IconKitchen size={20} />
            <div>
              <span className={styles.label}>Kuchnia</span>
              <span className={styles.value}>Tak</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/camper/Specs.tsx
git commit -m "feat: replace emoji in Specs with SVG icons"
```

---

## Task 12: Final check — read docs, verify build

**Step 1: Check the Next.js 16 docs for any breaking changes**

```bash
ls node_modules/next/dist/docs/ 2>/dev/null | head -20
```

**Step 2: Run build**

```bash
npm run build 2>&1 | tail -30
```

Fix any TypeScript or build errors.

**Step 3: Take screenshot in preview**

Start the server and take a screenshot to confirm the booking-first layout renders correctly.

**Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: resolve build warnings and type errors"
```

---

## Task 13: Push branch and open PR

```bash
git push origin claude/eager-swanson
```

Open PR at: https://github.com/wojciechluszczynski/camper-rental/pull/new/claude/eager-swanson
