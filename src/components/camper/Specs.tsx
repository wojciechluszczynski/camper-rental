import type { CamperSpecs } from '@/lib/types'
import styles from './Specs.module.css'

interface Props {
  specs: CamperSpecs
}

export function Specs({ specs }: Props) {
  const items = [
    { icon: '👥', label: 'Miejsca siedzące', value: `${specs.seats} osób` },
    { icon: '🛏', label: 'Miejsca do spania', value: `${specs.sleeping_spots} miejsc` },
    { icon: '📏', label: 'Długość', value: `${specs.length_m} m` },
    { icon: '📅', label: 'Rok produkcji', value: String(specs.year) },
    { icon: '⚙️', label: 'Skrzynia biegów', value: specs.transmission },
    { icon: '🍳', label: 'Kuchnia', value: specs.kitchen ? 'Tak' : 'Nie' },
    { icon: '🚿', label: 'Łazienka', value: specs.bathroom ? 'Tak' : 'Nie' },
  ]

  return (
    <div className={styles.specs}>
      <h2 className={styles.title}>Specyfikacja</h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.icon}>{item.icon}</span>
            <div>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.value}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
