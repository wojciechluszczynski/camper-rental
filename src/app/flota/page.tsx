import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { createServiceClient } from '@/lib/supabase-server'
import { IconUsers, IconBed, IconYear, IconShower, IconKitchen } from '@/components/icons'
import type { Camper } from '@/lib/types'
import styles from './page.module.css'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Nasza Flota - Kamperownia',
  description:
    'Poznaj nasze 7 kamperów. Porównaj specyfikacje, ceny i wyposażenie. Znajdź idealny kamper dla siebie.',
}

const TABLE_ROWS: { label: string; key: keyof typeof ROW_EXTRACTORS }[] = [
  { label: 'Cena/doba', key: 'price_per_day' },
  { label: 'Miejsca siedzące', key: 'seats' },
  { label: 'Miejsca sypialne', key: 'sleeping_spots' },
  { label: 'Rok produkcji', key: 'year' },
  { label: 'Długość (m)', key: 'length_m' },
  { label: 'Silnik', key: 'engine' },
  { label: 'Zbiornik wody (l)', key: 'water_tank_l' },
  { label: 'Szara woda (l)', key: 'grey_water_l' },
  { label: 'Panel solar (W)', key: 'solar_w' },
  { label: 'Lodówka (l)', key: 'fridge_l' },
  { label: 'Łazienka', key: 'bathroom' },
  { label: 'Kuchnia', key: 'kitchen' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ROW_EXTRACTORS = {
  price_per_day: (c: Camper) => `${c.price_per_day} zł`,
  seats: (c: Camper) => c.specs?.seats ?? '-',
  sleeping_spots: (c: Camper) => c.specs?.sleeping_spots ?? '-',
  year: (c: Camper) => c.specs?.year ?? '-',
  length_m: (c: Camper) => c.specs?.length_m ? `${c.specs.length_m} m` : '-',
  engine: (c: Camper) => c.specs?.engine ?? '-',
  water_tank_l: (c: Camper) => c.specs?.water_tank_l ?? '-',
  grey_water_l: (c: Camper) => c.specs?.grey_water_l ?? '-',
  solar_w: (c: Camper) => c.specs?.solar_w ?? '-',
  fridge_l: (c: Camper) => c.specs?.fridge_l ?? '-',
  bathroom: (c: Camper) => c.specs?.bathroom ? 'Tak' : 'Nie',
  kitchen: (c: Camper) => c.specs?.kitchen ? 'Tak' : 'Nie',
}

function isBoolRow(key: string) {
  return key === 'bathroom' || key === 'kitchen'
}
function isPriceRow(key: string) {
  return key === 'price_per_day'
}

export default async function FlotaPage() {
  const supabase = createServiceClient()

  const { data } = await supabase
    .from('campers')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: true })

  const campers: Camper[] = data ?? []

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Kamperownia</p>
            <h1 className={styles.heroTitle}>Nasza Flota</h1>
            <p className={styles.heroSub}>
              {campers.length} kamperów do wyboru - każdy gotowy do drogi. Sprawdź specyfikacje,
              porównaj wyposażenie i zarezerwuj swój ulubiony.
            </p>
          </div>
        </section>

        {/* ── Cards grid ── */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {campers.map((camper) => {
                return (
                  <article key={camper.id} className={styles.card}>
                    <div className={styles.cardImage}>
                      {camper.images?.[0] ? (
                        <Image
                          src={camper.images[0]}
                          alt={camper.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={styles.cardImg}
                        />
                      ) : (
                        <div className={styles.cardImgPlaceholder} />
                      )}
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardHeader}>
                        <h2 className={styles.cardName}>{camper.name}</h2>
                        <div className={styles.cardPrice}>
                          <span className={styles.priceAmount}>{camper.price_per_day} zł</span>
                          <span className={styles.priceUnit}>/doba</span>
                        </div>
                      </div>

                      <p className={styles.cardDesc}>{camper.description}</p>

                      <ul className={styles.specList}>
                        {camper.specs?.seats && (
                          <li className={styles.specItem}>
                            <span className={styles.specIcon}><IconUsers size={13} /></span>
                            {camper.specs.seats} os.
                          </li>
                        )}
                        {camper.specs?.sleeping_spots && (
                          <li className={styles.specItem}>
                            <span className={styles.specIcon}><IconBed size={13} /></span>
                            {camper.specs.sleeping_spots} miejsc
                          </li>
                        )}
                        {camper.specs?.year && (
                          <li className={styles.specItem}>
                            <span className={styles.specIcon}><IconYear size={13} /></span>
                            {camper.specs.year}
                          </li>
                        )}
                        {camper.specs?.length_m && (
                          <li className={styles.specItem}>
                            <span className={styles.specIcon}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4"/>
                              </svg>
                            </span>
                            {camper.specs.length_m} m
                          </li>
                        )}
                        {camper.specs?.bathroom && (
                          <li className={styles.specItem}>
                            <span className={styles.specIcon}><IconShower size={13} /></span>
                            Lazienka
                          </li>
                        )}
                        {camper.specs?.kitchen && (
                          <li className={styles.specItem}>
                            <span className={styles.specIcon}><IconKitchen size={13} /></span>
                            Kuchnia
                          </li>
                        )}
                        {camper.specs?.transmission && (
                          <li className={styles.specItem}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                              <path d="M12 7v4M10 11H5M14 11h5M5 17v-4M19 17v-4"/>
                            </svg>
                            {camper.specs.transmission}
                          </li>
                        )}
                      </ul>

                      <Link href={`/kamper/${camper.slug}`} className={styles.cardBtn}>
                        Zarezerwuj
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className={styles.section} id="porownaj">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Porównaj kampery</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={`${styles.th} ${styles.thSticky}`}>Parametr</th>
                    {campers.map((c) => (
                      <th key={c.id} className={styles.th}>
                        <Link href={`/kamper/${c.slug}`} className={styles.tableNameLink}>
                          {c.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ label, key }) => (
                    <tr key={key} className={styles.tr}>
                      <td className={`${styles.td} ${styles.tdSticky} ${styles.tdLabel}`}>
                        {label}
                      </td>
                      {campers.map((c) => {
                        const val = ROW_EXTRACTORS[key](c)
                        const isPrice = isPriceRow(key)
                        const isBool = isBoolRow(key)
                        const isPositive = isBool && val === 'Tak'
                        const isNegative = isBool && val === 'Nie'
                        return (
                          <td
                            key={c.id}
                            className={[
                              styles.td,
                              isPrice ? styles.tdPrice : '',
                              isPositive ? styles.tdYes : '',
                              isNegative ? styles.tdNo : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            {String(val)}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                  <tr className={styles.tr}>
                    <td className={`${styles.td} ${styles.tdSticky} ${styles.tdLabel}`} />
                    {campers.map((c) => (
                      <td key={c.id} className={styles.td}>
                        <Link href={`/kamper/${c.slug}`} className={styles.tableBtn}>
                          Zarezerwuj
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
