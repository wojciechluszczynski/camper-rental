'use client'
import { useState } from 'react'
import { IconCamper } from '@/components/icons'
import styles from './Gallery.module.css'

interface Props {
  images: string[]
  name: string
}

export function Gallery({ images, name }: Props) {
  const [active, setActive] = useState(0)

  if (images.length === 0) {
    return (
      <div className={styles.placeholder}>
        <IconCamper size={48} />
        <p>{name}</p>
      </div>
    )
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <img src={images[active]} alt={`${name} — zdjęcie ${active + 1}`} />
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={img} alt={`${name} ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
