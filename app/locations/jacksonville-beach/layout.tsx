import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Jacksonville Beach, FL | Coastal Property Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Jacksonville Beach, FL. Specialized coastal cleaning for salt air, humidity, and beachfront properties. House washing, roof cleaning, driveway restoration, and commercial services. Serving Jacksonville Beach, Ponte Vedra Beach, Atlantic Beach, Neptune Beach. Free estimates available.',
  keywords: 'pressure washing Jacksonville Beach FL, pressure washing Jacksonville Beach Jacksonville, house washing Jacksonville Beach, roof cleaning Jacksonville Beach, driveway cleaning Jacksonville Beach, commercial pressure washing Jacksonville Beach, coastal property cleaning Jacksonville Beach, salt air cleaning Jacksonville Beach, beachfront home washing Jacksonville Beach, soft wash Jacksonville Beach',
  openGraph: {
    title: 'Pressure Washing Jacksonville Beach, FL | Coastal Property Specialists',
    description: 'Professional pressure washing services in Jacksonville Beach, FL. Specialized coastal cleaning for salt air, humidity, and beachfront properties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/jacksonville-beach',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/jacksonville-beach',
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

export default function JacksonvilleBeachLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
