import './globals.css'

import { Montserrat } from 'next/font/google'
//const poppins = Titillium_Web({ subsets: ['latin'], weight: ['300', '400','600', '700'], variable: '--font-poppins' })
const poppins = Montserrat({ subsets: ['latin'], weight: ['300', '400','600', '700'], variable: '--font-poppins' })

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <head />
      <body>
          {children}
      </body>
    </html>
  )
}

export default RootLayout;