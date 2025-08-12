import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Jacksonville FL | Health Compliance & Fire Safety | Jax FL Pressure Washing',
  description: 'Professional restaurant cleaning services in Jacksonville FL. Ensure health compliance, enhance customer attraction, and maintain fire safety. Free estimates available.',
  keywords: 'restaurant cleaning Jacksonville FL, kitchen exhaust cleaning Jacksonville, restaurant maintenance Jacksonville, health code compliance Jacksonville, fire safety Jacksonville, outdoor dining cleaning Jacksonville',
  openGraph: {
    title: 'Restaurant Cleaning Jacksonville FL | Health Compliance & Fire Safety',
    description: 'Professional restaurant cleaning services in Jacksonville FL. Ensure health compliance, enhance customer attraction, and maintain fire safety.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/restaurant-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/restaurant-cleaning',
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

export default function RestaurantCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
