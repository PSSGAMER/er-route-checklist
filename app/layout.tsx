import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'Elden Ring Route Checklist',
  description: 'A complete walkthrough checklist for Base Elden Ring.',
  generator: 'me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  )
}
