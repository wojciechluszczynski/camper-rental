import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookingHero } from '@/components/home/BookingHero'
import { createServiceClient } from '@/lib/supabase-server'
import type { Camper } from '@/lib/types'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Wynajem Kamperów — Kamperownia',
  description: 'Wynajmij kampera w Polsce i Europie. Wybierz termin, sprawdź dostępność i zarezerwuj online w 5 minut. BLIK, Visa, Apple Pay.',
}

export default async function HomePage() {
  let campers: Camper[] = []
  try {
    const supabase = createServiceClient()
    const { data } = await supabase
      .from('campers')
      .select('*')
      .eq('active', true)
      .order('price_per_day', { ascending: true })
    campers = (data as Camper[]) ?? []
  } catch {
    // Supabase not configured yet
  }

  return (
    <>
      <Header />
      <main>
        <BookingHero campers={campers} />
      </main>
      <Footer />
    </>
  )
}
