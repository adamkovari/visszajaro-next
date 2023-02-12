import './globals.css'

import { Poppins } from '@next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-poppins' })

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
