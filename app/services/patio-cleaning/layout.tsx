import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patio Cleaning Jacksonville FL | Professional Outdoor Living | Jax FL Pressure Washing',
  description: 'Professional patio cleaning services in Jacksonville FL. Transform your outdoor space, remove stains, and enhance outdoor living with specialized cleaning and sealing. Free estimates available.',
  keywords: 'patio cleaning Jacksonville FL, outdoor living Jacksonville, patio restoration Jacksonville, patio sealing Jacksonville, stain removal Jacksonville, concrete patio cleaning Jacksonville',
  openGraph: {
    title: 'Patio Cleaning Jacksonville FL | Professional Outdoor Living',
    description: 'Professional patio cleaning services in Jacksonville FL. Transform your outdoor space, remove stains, and enhance outdoor living.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/patio-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/patio-cleaning',
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

export default function PatioCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
