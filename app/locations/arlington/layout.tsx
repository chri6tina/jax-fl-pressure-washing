import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Arlington, Jacksonville FL | Suburban Family Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Arlington, Jacksonville FL. Specialized suburban family cleaning for residential properties with family safety focus. House washing, roof cleaning, driveway restoration, and family-safe cleaning. Serving Arlington Heights, Arlington Estates, Arlington Park. Free estimates available.',
  keywords: 'pressure washing Arlington Jacksonville FL, pressure washing Arlington Jacksonville, house washing Arlington, roof cleaning Arlington, driveway cleaning Arlington, suburban pressure washing Arlington, family pressure washing Arlington, family-safe cleaning Arlington, soft wash Arlington',
  openGraph: {
    title: 'Pressure Washing Arlington, Jacksonville FL | Suburban Family Specialists',
    description: 'Professional pressure washing services in Arlington, Jacksonville FL. Specialized suburban family cleaning for residential properties with family safety focus.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/arlington',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/arlington',
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

export default function ArlingtonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
