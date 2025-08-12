import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pressure Washing Neptune Beach, FL | Coastal Community Specialists | Jax FL Pressure Washing',
  description: 'Professional pressure washing services in Neptune Beach, FL. Specialized coastal cleaning for salt air, humidity, and beachfront properties. House washing, roof cleaning, driveway restoration, and commercial services. Serving Neptune Beach Oceanfront, Central Neptune Beach, South Neptune Beach. Free estimates available.',
  keywords: 'pressure washing Neptune Beach FL, pressure washing Neptune Beach Florida, house washing Neptune Beach, roof cleaning Neptune Beach, driveway cleaning Neptune Beach, commercial pressure washing Neptune Beach, coastal property cleaning Neptune Beach, salt air cleaning Neptune Beach, beachfront home washing Neptune Beach, soft wash Neptune Beach',
  openGraph: {
    title: 'Pressure Washing Neptune Beach, FL | Coastal Community Specialists',
    description: 'Professional pressure washing services in Neptune Beach, FL. Specialized coastal cleaning for salt air, humidity, and beachfront properties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/locations/neptune-beach',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/locations/neptune-beach',
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

export default function NeptuneBeachLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
