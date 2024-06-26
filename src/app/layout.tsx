import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import DarkModeProvider from '@/components/theme/DarkModeProvider'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swift Contrast',
  description:
    'A lightweight color picker with real-time WCAG contrast analysis for accessible and inclusive design decisions.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <body className={inter.className}>
      <DarkModeProvider>
        <Navbar />
        <main id='main' className='p-2'>
          {children}
          <Analytics />
        </main>
        <Footer />
      </DarkModeProvider>
    </body>
  </html>
)

export default RootLayout
