import { Metadata } from 'next'

export interface PageMetadataProps {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  openGraphImage?: string
  structuredData?: object
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  openGraphImage = '/hero_section.png',
  structuredData
}: PageMetadataProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Jax FL Pressure Washing' }],
    creator: 'Jax FL Pressure Washing',
    publisher: 'Jax FL Pressure Washing',
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
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Jax FL Pressure Washing',
      images: [
        {
          url: openGraphImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [openGraphImage],
    },
    verification: {
      google: 'your-google-verification-code', // Add your Google verification code
    },
    other: {
      'geo.region': 'US-FL',
      'geo.placename': 'Jacksonville',
      'geo.position': '30.3322;-81.6557',
      'ICBM': '30.3322, -81.6557',
    },
  }
}

export function generateStructuredData({
  type,
  data
}: {
  type: 'LocalBusiness' | 'Service' | 'WebPage'
  data: any
}) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Jax FL Pressure Washing',
    url: 'https://jaxflpressurewashing.com',
    telephone: '+19044563851',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3322,
      longitude: -81.6557,
    },
    areaServed: [
      'Arlington',
      'Atlantic Beach',
      'Avondale',
      'Eastside',
      'Jacksonville Beach',
      'Mandarin',
      'Neptune Beach',
      'Northside',
      'Ortega',
      'Ponte Vedra',
      'Riverside',
      'San Marco',
      'Southside',
      'Westside'
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.3322,
        longitude: -81.6557,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pressure Washing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'House Washing',
            description: 'Professional house washing and soft-wash services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Driveway Cleaning',
            description: 'Concrete and paver driveway cleaning services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Cleaning',
            description: 'Safe roof cleaning and maintenance services',
          },
        },
      ],
    },
  }

  return {
    ...baseStructuredData,
    ...data,
  }
}
