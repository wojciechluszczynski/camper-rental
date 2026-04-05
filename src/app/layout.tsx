import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kamperownia — Wynajem Kamperów Rzeszów',
  description: 'Wynajem kamperów w Rzeszowie. Flota Chausson, Rimor, Bürstner. Rezerwacja online, odbiór Lubelska 50. BLIK, Visa, Apple Pay.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
