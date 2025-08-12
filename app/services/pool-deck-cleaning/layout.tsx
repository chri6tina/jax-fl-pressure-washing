import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pool Deck Cleaning Jacksonville FL | Professional Pool Safety | Jax FL Pressure Washing',
  description: 'Professional pool deck cleaning services in Jacksonville FL. Eliminate slippery surfaces, prevent accidents, and restore beauty with specialized cleaning and sealing. Free estimates available.',
  keywords: 'pool deck cleaning Jacksonville FL, pool safety Jacksonville, algae removal Jacksonville, pool deck sealing Jacksonville, slippery pool deck Jacksonville, pool deck restoration Jacksonville',
  openGraph: {
    title: 'Pool Deck Cleaning Jacksonville FL | Professional Pool Safety',
    description: 'Professional pool deck cleaning services in Jacksonville FL. Eliminate slippery surfaces, prevent accidents, and restore beauty.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/pool-deck-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/pool-deck-cleaning',
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

export default function PoolDeckCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
