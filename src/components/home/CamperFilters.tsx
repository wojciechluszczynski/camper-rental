'use client'
import type { Camper } from '@/lib/types'
import {
  IconCatAll,
  IconCatWeekend,
  IconCatFamily,
  IconCatCouple,
  IconCatSolar,
  IconCatNew,
} from '@/components/icons/category-icons'
import styles from './CamperFilters.module.css'

export type FilterKey = 'all' | 'weekend' | 'family' | 'couple' | 'solar' | 'new'

interface FilterDef {
  key: FilterKey
  label: string
  Icon: React.ComponentType<{ size?: number }>
}

const FILTERS: FilterDef[] = [
  { key: 'all', label: 'Wszystkie', Icon: IconCatAll },
  { key: 'weekend', label: 'Na weekend', Icon: IconCatWeekend },
  { key: 'couple', label: 'Dla par', Icon: IconCatCouple },
  { key: 'family', label: 'Dla rodziny', Icon: IconCatFamily },
  { key: 'solar', label: 'Z solarami', Icon: IconCatSolar },
  { key: 'new', label: 'Nowe 2025', Icon: IconCatNew },
]

export function filterCampers(campers: Camper[], filter: FilterKey): Camper[] {
  switch (filter) {
    case 'couple':
      return campers.filter(c => c.specs.sleeping_spots <= 4)
    case 'family':
      return campers.filter(c => c.specs.sleeping_spots >= 5)
    case 'solar':
      return campers.filter(c =>
        c.description.toLowerCase().includes('solar') ||
        c.name.toLowerCase().includes('solar') ||
        c.description.toLowerCase().includes('słoneczn')
      )
    case 'new':
      return campers.filter(c => c.specs.year >= 2025)
    case 'weekend':
      return campers.filter(c => c.specs.length_m < 7)
    default:
      return campers
  }
}

interface Props {
  active: FilterKey
  onChange: (key: FilterKey) => void
}

export function CamperFilters({ active, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {FILTERS.map(({ key, label, Icon }) => (
          <button
            key={key}
            className={`${styles.pill} ${active === key ? styles.active : ''}`}
            onClick={() => onChange(key)}
            type="button"
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
