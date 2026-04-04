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
}

export default async function CamperPage({ params }: Props) {
  const { slug } = await params
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
