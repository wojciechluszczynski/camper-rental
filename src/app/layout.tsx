import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kamperownia — Wynajem Kamperów',
  description: 'Wynajem kamperów na wakacje. Zarezerwuj swój kamper już dziś!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
