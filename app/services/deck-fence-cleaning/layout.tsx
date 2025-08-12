import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deck & Fence Cleaning Jacksonville FL | Professional Outdoor Care | Jax FL Pressure Washing',
  description: 'Professional deck and fence cleaning services in Jacksonville FL. Extend lifespan, prevent damage, and restore beauty with gentle, effective cleaning methods. Free estimates available.',
  keywords: 'deck cleaning Jacksonville FL, fence cleaning Jacksonville, wood deck restoration Jacksonville, composite deck cleaning Jacksonville, deck sealing Jacksonville, fence sealing Jacksonville',
  openGraph: {
    title: 'Deck & Fence Cleaning Jacksonville FL | Professional Outdoor Care',
    description: 'Professional deck and fence cleaning services in Jacksonville FL. Extend lifespan, prevent damage, and restore beauty.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/deck-fence-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/deck-fence-cleaning',
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

export default function DeckFenceCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
