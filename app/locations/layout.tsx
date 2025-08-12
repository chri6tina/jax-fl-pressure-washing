import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Service Areas Jacksonville FL | 14+ Locations | Jax FL Pressure Washing',
  description: 'Professional pressure washing services throughout Jacksonville, Florida and surrounding areas. Serving Jacksonville Beach, Ponte Vedra, Mandarin, San Marco, Atlantic Beach, Riverside, Southside, and more. Local experts for residential and commercial properties. Free estimates available.',
  keywords: 'pressure washing Jacksonville FL, pressure washing service areas Jacksonville, pressure washing Jacksonville Beach, pressure washing Ponte Vedra, pressure washing Mandarin, pressure washing San Marco, pressure washing Atlantic Beach, pressure washing Riverside Jacksonville, pressure washing Southside Jacksonville, local pressure washing Jacksonville, pressure washing near me Jacksonville',
  openGraph: {
    title: 'Pressure Washing Service Areas Jacksonville FL | 14+ Locations',
    description: 'Professional pressure washing services throughout Jacksonville, Florida and surrounding areas. Local experts for residential and commercial properties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations',
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

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
