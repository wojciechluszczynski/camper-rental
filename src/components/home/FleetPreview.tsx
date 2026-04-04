import type { Camper } from '@/lib/types'
import { CamperCard } from './CamperCard'
import styles from './FleetPreview.module.css'

interface Props {
  campers: Camper[]
}

export function FleetPreview({ campers }: Props) {
  return (
    <section id="fleet" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Nasza flota</h2>
          <p className={styles.subtitle}>Wybierz kamper idealny dla siebie i ruszaj w drogę</p>
        </div>
        <div className={styles.grid}>
          {campers.map(camper => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>
      </div>
    </section>
  )
}
