import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Westside, Jacksonville FL | Suburban Living Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Westside, Jacksonville FL. Specialized suburban living cleaning for residential properties with family safety focus. House washing, roof cleaning, driveway restoration, and family-safe cleaning. Serving Westside Estates, Westside Gardens, Westside Park. Free estimates available.',
  keywords: 'pressure washing Westside Jacksonville FL, pressure washing Westside Jacksonville, house washing Westside, roof cleaning Westside, driveway cleaning Westside, suburban pressure washing Westside, family pressure washing Westside, family-safe cleaning Westside, soft wash Westside',
  openGraph: {
    title: 'Pressure Washing Westside, Jacksonville FL | Suburban Living Specialists',
    description: 'Professional pressure washing services in Westside, Jacksonville FL. Specialized suburban living cleaning for residential properties with family safety focus.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/westside',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/westside',
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

export default function WestsideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
