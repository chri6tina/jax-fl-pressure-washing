import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roof Cleaning Jacksonville FL | Professional Roof Maintenance | Jax FL Pressure Washing',
  description: 'Professional roof cleaning and maintenance services in Jacksonville FL. Safe, gentle cleaning for all roof types including asphalt, tile, metal, and slate. Free estimates available.',
  keywords: 'roof cleaning Jacksonville FL, roof maintenance Jacksonville, asphalt shingle cleaning Jacksonville, tile roof cleaning Jacksonville, metal roof cleaning Jacksonville, gutter cleaning Jacksonville, moss removal Jacksonville',
  openGraph: {
    title: 'Roof Cleaning Jacksonville FL | Professional Roof Maintenance',
    description: 'Professional roof cleaning and maintenance services in Jacksonville FL. Safe, gentle cleaning for all roof types.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/roof-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/roof-cleaning',
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

export default function RoofCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
