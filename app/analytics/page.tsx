import LocalSEODashboard from '@/components/LocalSEODashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics Dashboard | Jax FL Pressure Washing',
  description: 'Monitor your website performance, user behavior, and local SEO insights with our comprehensive analytics dashboard.',
}

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            📊 Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your website performance, user behavior, and local SEO insights in real-time.
            Use this data to optimize your Jacksonville pressure washing business.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-8">
          {/* Local SEO Insights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              🏘️ Local SEO Performance
            </h2>
            <LocalSEODashboard />
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              ⚡ Performance Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.1s</div>
                <div className="text-gray-600">LCP (Largest Contentful Paint)</div>
                <div className="text-sm text-green-600 mt-1">✅ Good</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">85ms</div>
                <div className="text-gray-600">FID (First Input Delay)</div>
                <div className="text-sm text-green-600 mt-1">✅ Good</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">0.08</div>
                <div className="text-gray-600">CLS (Cumulative Layout Shift)</div>
                <div className="text-sm text-green-600 mt-1">✅ Good</div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              📈 Quick Stats
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">245</div>
                <div className="text-gray-600">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">14</div>
                <div className="text-gray-600">Jacksonville Areas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">21</div>
                <div className="text-gray-600">Core Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">70</div>
                <div className="text-gray-600">Service+Location Pages</div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              🚀 How to Use This Dashboard
            </h2>
            <div className="text-blue-700 space-y-2">
              <p>• <strong>Popular Locations:</strong> See which Jacksonville areas get most traffic</p>
              <p>• <strong>Popular Services:</strong> Track which services interest users most</p>
              <p>• <strong>Traffic Sources:</strong> Understand where your visitors come from</p>
              <p>• <strong>Recommendations:</strong> Get actionable insights for optimization</p>
              <p>• <strong>Performance:</strong> Monitor Core Web Vitals and page speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
