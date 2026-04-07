import Link from 'next/link'
import type { Camper } from '@/lib/types'
import { IconUsers, IconBed, IconYear, IconShower, IconKitchen, IconChevronRight } from '@/components/icons'
import styles from './CamperCard.module.css'

interface Props {
  camper: Camper
  linkSearchParams?: string
}

export function CamperCard({ camper, linkSearchParams = '' }: Props) {
  const { specs } = camper

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {camper.images.length > 0 ? (
          <img src={camper.images[0]} alt={camper.name} />
        ) : (
          <img src="/camper-placeholder.svg" alt={camper.name} className={styles.placeholderImg} />
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

        <Link href={`/kamper/${camper.slug}${linkSearchParams}`} className={styles.btn}>
          Sprawdź i zarezerwuj
          <IconChevronRight size={16} />
        </Link>
      </div>
    </div>
  )
}
