import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Atlantic Beach, FL | Beachfront Property Specialists | Jax FL Pressure Washing',
  description: 'Beachfront pressure washing services in Atlantic Beach, FL. Coastal property specialists for salt air, humidity, and coastal weather challenges. House washing, roof cleaning, driveway restoration, and deck cleaning. Serving Atlantic Beach Oceanfront, Central, North, and South areas. Free estimates available.',
  keywords: 'pressure washing Atlantic Beach FL, pressure washing Atlantic Beach Jacksonville, beachfront property cleaning Atlantic Beach, coastal home washing Atlantic Beach, salt air cleaning Atlantic Beach, house washing Atlantic Beach, roof cleaning Atlantic Beach, driveway cleaning Atlantic Beach, coastal pressure washing Jacksonville, beachfront home cleaning Atlantic Beach',
  openGraph: {
    title: 'Pressure Washing Atlantic Beach, FL | Beachfront Property Specialists',
    description: 'Beachfront pressure washing services in Atlantic Beach, FL. Coastal property specialists for salt air and humidity challenges.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/atlantic-beach',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/atlantic-beach',
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

export default function AtlanticBeachLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
