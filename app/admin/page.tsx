import LocalSEODashboard from '@/components/LocalSEODashboard'
import AdminProtected from '@/components/AdminProtected'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Jax FL Pressure Washing',
  description: 'Administrative dashboard for monitoring website performance, user behavior, and business insights.',
}

export default function AdminDashboard() {
  return (
    <AdminProtected>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Admin Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  📊 Business Analytics Dashboard
                </h1>
                <p className="text-gray-600">
                  Monitor your Jacksonville pressure washing business performance in real-time.
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Last updated</div>
                <div className="text-lg font-semibold text-gray-800">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-800">245</div>
                  <div className="text-gray-600">Total Pages</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏘️</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-800">14</div>
                  <div className="text-gray-600">Jacksonville Areas</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧽</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-800">21</div>
                  <div className="text-gray-600">Core Services</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-800">70</div>
                  <div className="text-gray-600">Service+Location</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Local SEO Insights */}
            <div className="lg:col-span-2">
              <LocalSEODashboard />
            </div>

            {/* Performance & Alerts */}
            <div className="space-y-6">
              {/* Performance Metrics */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ⚡ Performance Metrics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">LCP</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">2.1s</div>
                      <div className="text-sm text-green-600">✅ Good</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">FID</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">85ms</div>
                      <div className="text-sm text-green-600">✅ Good</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="text-gray-700">CLS</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-600">0.08</div>
                      <div className="text-sm text-green-600">✅ Good</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  📝 Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">New contact form submission</span>
                    <span className="text-xs text-gray-400 ml-auto">2m ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Page performance improved</span>
                    <span className="text-xs text-gray-400 ml-auto">15m ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">High traffic from Mandarin area</span>
                    <span className="text-xs text-gray-400 ml-auto">1h ago</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ⚡ Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    📊 View Full Analytics
                  </button>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    📧 Check Contact Forms
                  </button>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    🔍 SEO Health Check
                  </button>
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                    📱 Performance Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎯 Business Insights & Recommendations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">📈 Top Performing Areas</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Mandarin:</strong> Highest conversion rate (3.6%)</li>
                  <li>• <strong>Ponte Vedra:</strong> Premium market, high intent</li>
                  <li>• <strong>Riverside:</strong> Growing interest, good potential</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🚀 Optimization Opportunities</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Focus content on <strong>House Washing</strong> (85% interest)</li>
                  <li>• Improve <strong>Deck & Fence Cleaning</strong> visibility</li>
                  <li>• Enhance <strong>Google Search</strong> presence</li>
                  <li>• Target <strong>Arlington</strong> and <strong>Atlantic Beach</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminProtected>
  )
}
