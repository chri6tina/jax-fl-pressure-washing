'use client'

import { useState, useEffect } from 'react'
import { event } from '@/utils/analytics'

interface LocationData {
  name: string;
  traffic: number;
  conversions: number;
}

interface ServiceData {
  name: string;
  interest: number;
  conversions: number;
}

interface TrafficSource {
  source: string;
  traffic: number;
  quality: string;
}

interface InsightsData {
  popularLocations: LocationData[];
  popularServices: ServiceData[];
  trafficSources: TrafficSource[];
  conversionRates: Record<string, number>;
  performanceMetrics: Record<string, number>;
}

export default function LocalSEODashboard() {
  const [insights, setInsights] = useState<InsightsData>({
    popularLocations: [],
    popularServices: [],
    trafficSources: [],
    conversionRates: {},
    performanceMetrics: {}
  })

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
    // Simulate data collection (replace with real analytics data)
    const mockData: InsightsData = {
      popularLocations: [
        { name: 'Mandarin', traffic: 1250, conversions: 45 },
        { name: 'Ponte Vedra', traffic: 980, conversions: 38 },
        { name: 'Riverside', traffic: 890, conversions: 32 },
        { name: 'Arlington', traffic: 750, conversions: 28 },
        { name: 'Atlantic Beach', traffic: 680, conversions: 25 }
      ],
      popularServices: [
        { name: 'House Washing', interest: 85, conversions: 12 },
        { name: 'Driveway Cleaning', interest: 72, conversions: 8 },
        { name: 'Roof Cleaning', interest: 68, conversions: 6 },
        { name: 'Gutter Cleaning', interest: 45, conversions: 4 },
        { name: 'Deck & Fence Cleaning', interest: 38, conversions: 3 }
      ],
      trafficSources: [
        { source: 'Google Search', traffic: 65, quality: 'high' },
        { source: 'Direct', traffic: 20, quality: 'medium' },
        { source: 'Social Media', traffic: 10, quality: 'medium' },
        { source: 'Referrals', traffic: 5, quality: 'low' }
      ],
      conversionRates: {
        'Mandarin': 3.6,
        'Ponte Vedra': 3.9,
        'Riverside': 3.6,
        'Arlington': 3.7,
        'Atlantic Beach': 3.7
      },
      performanceMetrics: {
        'LCP': 2.1,
        'FID': 85,
        'CLS': 0.08
      }
    }

    setInsights(mockData)
  }, [])

  const trackInsightClick = (insightType: string, data: LocationData | ServiceData | TrafficSource) => {
    let label = '';
    
    if ('name' in data) {
      label = `${insightType} - ${data.name}`;
    } else if ('source' in data) {
      label = `${insightType} - ${data.source}`;
    } else {
      label = `${insightType} - unknown`;
    }
    
    event({
      action: 'insight_click',
      category: 'analytics',
      label: label,
      value: 1
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        📊 Local SEO Insights Dashboard
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Popular Locations */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            🏘️ Popular Locations
          </h3>
          <div className="space-y-2">
            {insights.popularLocations.map((location, index) => (
              <div
                key={location.name}
                className="flex justify-between items-center p-2 bg-white rounded cursor-pointer hover:bg-blue-100 transition-colors"
                onClick={() => trackInsightClick('location', location)}
              >
                <span className="font-medium text-gray-700">{location.name}</span>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{location.traffic} visits</div>
                  <div className="text-xs text-blue-600">{location.conversions} conversions</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            🧽 Popular Services
          </h3>
          <div className="space-y-2">
            {insights.popularServices.map((service, index) => (
              <div
                key={service.name}
                className="flex justify-between items-center p-2 bg-white rounded cursor-pointer hover:bg-green-100 transition-colors"
                onClick={() => trackInsightClick('service', service)}
              >
                <span className="font-medium text-gray-700">{service.name}</span>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{service.interest}% interest</div>
                  <div className="text-xs text-green-600">{service.conversions} conversions</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-purple-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">
            🌐 Traffic Sources
          </h3>
          <div className="space-y-2">
            {insights.trafficSources.map((source, index) => (
              <div
                key={source.source}
                className="flex justify-between items-center p-2 bg-white rounded cursor-pointer hover:bg-purple-100 transition-colors"
                onClick={() => trackInsightClick('traffic_source', source)}
              >
                <span className="font-medium text-gray-700">{source.source}</span>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{source.traffic}%</div>
                  <div className={`text-xs ${source.quality === 'high' ? 'text-green-600' : source.quality === 'medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                    {source.quality} quality
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
          💡 Recommendations
        </h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Focus on <strong>Mandarin</strong> and <strong>Ponte Vedra</strong> - highest conversion rates</li>
          <li>• Optimize <strong>House Washing</strong> content - most popular service</li>
          <li>• Improve <strong>Google Search</strong> presence - highest quality traffic</li>
          <li>• Enhance <strong>Deck & Fence Cleaning</strong> - lower interest but high potential</li>
        </ul>
      </div>
    </div>
  )
}