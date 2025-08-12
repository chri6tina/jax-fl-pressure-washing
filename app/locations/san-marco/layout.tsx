import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing San Marco, Jacksonville FL | Historic Building Specialists | Jax FL Pressure Washing',
  description: 'Historic building pressure washing services in San Marco, Jacksonville FL. Urban property specialists for historic buildings, cultural landmarks, and commercial properties. Preservation-focused cleaning with modern techniques. Serving San Marco Square, Historic District, Business District. Free estimates available.',
  keywords: 'pressure washing San Marco Jacksonville, pressure washing San Marco FL, historic building washing San Marco, urban property cleaning San Marco, commercial building washing San Marco, preservation cleaning San Marco, cultural landmark cleaning Jacksonville, architectural restoration San Marco, soft wash historic buildings Jacksonville',
  openGraph: {
    title: 'Pressure Washing San Marco, Jacksonville FL | Historic Building Specialists',
    description: 'Historic building pressure washing services in San Marco, Jacksonville. Urban property specialists for cultural landmarks and architectural preservation.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/san-marco',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/san-marco',
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

export default function SanMarcoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
