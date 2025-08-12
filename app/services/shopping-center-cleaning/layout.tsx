import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Center Cleaning Jacksonville FL | Retail Center Care | Jax FL Pressure Washing',
  description: 'Professional shopping center cleaning services in Jacksonville FL. Increase foot traffic, enhance brand image, and maintain professional standards. Free estimates available.',
  keywords: 'shopping center cleaning Jacksonville FL, retail center cleaning Jacksonville, shopping mall cleaning Jacksonville, storefront cleaning Jacksonville, retail maintenance Jacksonville, shopping center maintenance Jacksonville',
  openGraph: {
    title: 'Shopping Center Cleaning Jacksonville FL | Retail Center Care',
    description: 'Professional shopping center cleaning services in Jacksonville FL. Increase foot traffic, enhance brand image, and maintain professional standards.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jaxflpressurewashing.com/services/shopping-center-cleaning',
    siteName: 'Jax FL Pressure Washing',
  },
  alternates: {
    canonical: 'https://jaxflpressurewashing.com/services/shopping-center-cleaning',
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

export default function ShoppingCenterCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
