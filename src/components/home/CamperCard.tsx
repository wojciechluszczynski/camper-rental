import Link from 'next/link'
import type { Camper } from '@/lib/types'
import styles from './CamperCard.module.css'

interface Props {
  camper: Camper
}

export function CamperCard({ camper }: Props) {
  const { specs } = camper
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {camper.images.length > 0 ? (
          <img src={camper.images[0]} alt={camper.name} />
        ) : (
          <div className={styles.imagePlaceholder}>🚐</div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{camper.name}</h3>
          <div className={styles.price}>
            <span className={styles.priceAmount}>{camper.price_per_day} zł</span>
            <span className={styles.priceUnit}>/doba</span>
          </div>
        </div>
        <p className={styles.description}>{camper.description}</p>
        <div className={styles.specs}>
          <span className={styles.spec}>👥 {specs.seats} osób</span>
          <span className={styles.spec}>🛏 {specs.sleeping_spots} miejsc snu</span>
          <span className={styles.spec}>📅 {specs.year}</span>
          {specs.bathroom && <span className={styles.spec}>🚿 Łazienka</span>}
          {specs.kitchen && <span className={styles.spec}>🍳 Kuchnia</span>}
        </div>
        <Link href={`/kamper/${camper.slug}`} className={styles.btn}>
          Sprawdź dostępność
        </Link>
      </div>
    </div>
  )
}
