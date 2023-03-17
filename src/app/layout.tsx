import './globals.css'

import { Titillium_Web } from 'next/font/google'
const poppins = Titillium_Web({ subsets: ['latin'], weight: ['300', '400','600', '700'], variable: '--font-poppins' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
