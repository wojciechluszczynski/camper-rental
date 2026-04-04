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
            Dostepny
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{camper.name}</h3>
          <div className={styles.price}>
            {totalPrice ? (
              <>
                <span className={styles.priceAmount}>{totalPrice} zl</span>
                <span className={styles.priceUnit}>za {days} {days === 1 ? 'dobe' : days < 5 ? 'doby' : 'dob'}</span>
              </>
            ) : (
              <>
                <span className={styles.priceAmount}>{camper.price_per_day} zl</span>
                <span className={styles.priceUnit}>/doba</span>
              </>
            )}
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.specs}>
          <span className={styles.spec}>
            <IconUsers size={14} />
            {specs.seats} osob
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
              Lazienka
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
          Sprawdz dostepnosc
          <IconChevronRight size={16} />
        </Link>
      </div>
    </div>
  )
}
