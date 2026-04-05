import { IconUsers, IconBed, IconShower, IconKitchen, IconYear } from '@/components/icons'
import type { CamperSpecs } from '@/lib/types'
import styles from './Specs.module.css'

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
