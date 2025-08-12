import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Southside, Jacksonville FL | Suburban Excellence Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Southside, Jacksonville FL. Specialized suburban excellence cleaning for commercial and residential properties. House washing, roof cleaning, driveway restoration, and commercial services. Serving Southside Estates, Southside Business District, Southside Residential. Free estimates available.',
  keywords: 'pressure washing Southside Jacksonville FL, pressure washing Southside Jacksonville, house washing Southside, roof cleaning Southside, driveway cleaning Southside, suburban pressure washing Southside, commercial pressure washing Southside, residential pressure washing Southside, soft wash Southside',
  openGraph: {
    title: 'Pressure Washing Southside, Jacksonville FL | Suburban Excellence Specialists',
    description: 'Professional pressure washing services in Southside, Jacksonville FL. Specialized suburban excellence cleaning for commercial and residential properties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/southside',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/southside',
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

export default function SouthsideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
