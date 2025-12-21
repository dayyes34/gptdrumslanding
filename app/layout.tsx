import type { Metadata } from 'next'
import { Rubik, Bebas_Neue } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'gptDrums',
  description: 'gptDrums landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${rubik.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  )
}


