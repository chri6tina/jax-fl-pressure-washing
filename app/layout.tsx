import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jax FL Pressure Washing - Professional & Eco-Friendly Cleaning Services',
  description: 'Professional pressure washing and soft-wash services in Jacksonville, Florida. Eco-friendly, licensed, and insured. House washing, driveway cleaning, roof cleaning, and more.',
  keywords: 'pressure washing, Jacksonville, Florida, house washing, driveway cleaning, roof cleaning, eco-friendly',
  authors: [{ name: 'Jax FL Pressure Washing' }],
  openGraph: {
    title: 'Jax FL Pressure Washing - Professional & Eco-Friendly Cleaning Services',
    description: 'Professional pressure washing and soft-wash services in Jacksonville, Florida.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
