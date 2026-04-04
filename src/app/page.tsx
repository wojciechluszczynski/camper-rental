import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { FleetPreview } from '@/components/home/FleetPreview'
import { HowItWorks } from '@/components/home/HowItWorks'
import { createServiceClient } from '@/lib/supabase-server'
import type { Camper } from '@/lib/types'

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
        <Hero />
        <FleetPreview campers={campers} />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
