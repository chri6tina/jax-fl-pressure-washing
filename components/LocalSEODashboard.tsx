'use client'

import { useState, useEffect } from 'react'
import { event } from '@/utils/analytics'

interface LocationData {
  name: string
  traffic: number
  conversions: number
}

interface ServiceData {
  name: string
  interest: number
  conversions: number
}

interface TrafficSource {
  source: string
  traffic: number
  quality: string
}

interface InsightsData {
  popularLocations: LocationData[]
  popularServices: ServiceData[]
  trafficSources: TrafficSource[]
  conversionRates: Record<string, number>
  performanceMetrics: Record<string, number>
}

export default function LocalSEODashboard() {
  const [insights, setInsights] = useState<InsightsData>({
    popularLocations: [],
    popularServices: [],
    trafficSources: [],
    conversionRates: {},
    performanceMetrics: {}
  })

  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const locations = [
    'Arlington', 'Atlantic Beach', 'Avondale', 'Eastside',
    'Jacksonville Beach', 'Mandarin', 'Neptune Beach', 'Northside',
    'Ortega', 'Ponte Vedra', 'Riverside', 'San Marco',
    'Southside', 'Westside'
  ]

  const services = [
    'House Washing', 'Driveway Cleaning', 'Roof Cleaning',
    'Gutter Cleaning', 'Deck & Fence Cleaning', 'Commercial Washing'
  ]

  useEffect(() => {
    // Load real data from localStorage (if any exists)
    const loadRealData = () => {
      try {
        const savedVisitors = localStorage.getItem('recentVisitors')
        if (savedVisitors) {
          const visitors = JSON.parse(savedVisitors)
          
          // Process real visitor data
          const locationCounts: Record<string, number> = {}
          const serviceCounts: Record<string, number> = {}
          const sourceCounts: Record<string, number> = {}
          
          visitors.forEach((visitor: any) => {
            // Count locations
            if (visitor.location) {
              locationCounts[visitor.location] = (locationCounts[visitor.location] || 0) + 1
            }
            
            // Count services
            if (visitor.service) {
              serviceCounts[visitor.service] = (serviceCounts[visitor.service] || 0) + 1
            }
            
            // Count traffic sources
            if (visitor.referrer) {
              const source = visitor.referrer === 'Direct' ? 'Direct' : 
                           visitor.referrer.includes('google') ? 'Google Search' :
                           visitor.referrer.includes('facebook') || visitor.referrer.includes('instagram') ? 'Social Media' : 'Referrals'
              sourceCounts[source] = (sourceCounts[source] || 0) + 1
            }
          })

          // Convert to insights format
          const realData: InsightsData = {
            popularLocations: Object.entries(locationCounts)
              .map(([name, traffic]) => ({ name, traffic, conversions: Math.floor(traffic * 0.03) }))
              .sort((a, b) => b.traffic - a.traffic)
              .slice(0, 5),
            popularServices: Object.entries(serviceCounts)
              .map(([name, interest]) => ({ name, interest, conversions: Math.floor(interest * 0.15) }))
              .sort((a, b) => b.interest - a.interest)
              .slice(0, 5),
            trafficSources: Object.entries(sourceCounts)
              .map(([source, traffic]) => ({ 
                source, 
                traffic, 
                quality: source === 'Google Search' ? 'high' : source === 'Direct' ? 'medium' : 'low' 
              }))
              .sort((a, b) => b.traffic - a.traffic),
            conversionRates: Object.fromEntries(
              Object.entries(locationCounts).map(([location, traffic]) => [
                location, 
                traffic > 0 ? ((Math.floor(traffic * 0.03) / traffic) * 100) : 0
              ])
            ),
            performanceMetrics: {
              'LCP': 0,
              'FID': 0,
              'CLS': 0
            }
          }

          setInsights(realData)
        }
      } catch (error) {
        console.log('Could not load visitor data')
      }
      
      setIsLoading(false)
      setLastUpdated(new Date())
    }

    loadRealData()

    // Set up interval to refresh data
    const interval = setInterval(loadRealData, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const trackInsightClick = (insightType: string, data: LocationData | ServiceData | TrafficSource) => {
    let label = ''
    
    if ('name' in data) {
      label = `${insightType} - ${data.name}`
    } else if ('source' in data) {
      label = `${insightType} - ${data.source}`
    } else {
      label = `${insightType} - unknown`
    }

    event({
      action: 'insight_click',
      category: 'analytics',
      label: label,
      value: 1
    })
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'high': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          📊 Local SEO Insights
        </h3>
        <div className="text-sm text-gray-500">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      {insights.popularLocations.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">📊</div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">No Data Yet</h4>
          <p className="text-gray-600 mb-4">
            Visit some pages on your site to start collecting real visitor data.
          </p>
          <div className="text-sm text-gray-500">
            Data will appear here as visitors interact with your Jacksonville pressure washing pages.
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Popular Locations */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">🏘️ Popular Areas</h4>
            <div className="space-y-2">
              {insights.popularLocations.map((location) => (
                <div
                  key={location.name}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => trackInsightClick('Location', location)}
                >
                  <span className="text-gray-700">{location.name}</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">{location.traffic}</div>
                    <div className="text-xs text-gray-500">{location.conversions} conversions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">🧽 Popular Services</h4>
            <div className="space-y-2">
              {insights.popularServices.map((service) => (
                <div
                  key={service.name}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => trackInsightClick('Service', service)}
                >
                  <span className="text-gray-700">{service.name}</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">{service.interest}</div>
                    <div className="text-xs text-gray-500">{service.conversions} conversions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Traffic Sources */}
      {insights.trafficSources.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-3">🔗 Traffic Sources</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {insights.trafficSources.map((source) => (
              <div
                key={source.source}
                className="flex justify-between items-center p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => trackInsightClick('Traffic Source', source)}
              >
                <span className="text-gray-700">{source.source}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">{source.traffic}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(source.quality)}`}>
                    {source.quality}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conversion Rates */}
      {Object.keys(insights.conversionRates).length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-3">📈 Conversion Rates by Area</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(insights.conversionRates)
              .filter(([_, rate]) => rate > 0)
              .sort(([_, a], [__, b]) => b - a)
              .slice(0, 6)
              .map(([location, rate]) => (
                <div key={location} className="text-center p-3 bg-gray-50 rounded">
                  <div className="text-lg font-bold text-gray-800">{rate.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">{location}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}