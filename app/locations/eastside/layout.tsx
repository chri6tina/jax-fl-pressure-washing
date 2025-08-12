import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Eastside, Jacksonville FL | Urban Excellence Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Eastside, Jacksonville FL. Specialized urban excellence cleaning for commercial and residential properties. House washing, roof cleaning, driveway restoration, and urban cleaning. Serving Eastside Business District, Eastside Residential, Eastside Commercial. Free estimates available.',
  keywords: 'pressure washing Eastside Jacksonville FL, pressure washing Eastside Jacksonville, house washing Eastside, roof cleaning Eastside, driveway cleaning Eastside, urban pressure washing Eastside, commercial pressure washing Eastside, residential pressure washing Eastside, soft wash Eastside',
  openGraph: {
    title: 'Pressure Washing Eastside, Jacksonville FL | Urban Excellence Specialists',
    description: 'Professional pressure washing services in Eastside, Jacksonville FL. Specialized urban excellence cleaning for commercial and residential properties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/eastside',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/eastside',
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

export default function EastsideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
