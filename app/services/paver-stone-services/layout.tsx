import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paver & Stone Services Jacksonville FL | Professional Paver Cleaning & Sealing | Jax FL Pressure Washing',
  description: 'Professional paver and stone cleaning services in Jacksonville FL. Restore beauty, extend lifespan, and protect your investment with advanced cleaning and sealing technology. Free estimates available.',
  keywords: 'paver cleaning Jacksonville FL, stone cleaning Jacksonville, paver sealing Jacksonville, paver restoration Jacksonville, stone walkway cleaning Jacksonville, paver driveway cleaning Jacksonville',
  openGraph: {
    title: 'Paver & Stone Services Jacksonville FL | Professional Paver Cleaning & Sealing',
    description: 'Professional paver and stone cleaning services in Jacksonville FL. Restore beauty, extend lifespan, and protect your investment.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/paver-stone-services',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/paver-stone-services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PaverStoneServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
