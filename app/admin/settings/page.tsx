'use client'

import { useState, useEffect } from 'react'
import AdminProtected from '@/components/AdminProtected'
import { notificationSounds, notificationPreferences } from '@/utils/notification-sounds'

interface Visitor {
  id: string
  timestamp: Date
  page: string
  userAgent: string
  referrer: string
  ip?: string
  location?: string
  service?: string
}

export default function AdminSettings() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [soundType, setSoundType] = useState('ding')
  const [desktopNotifications, setDesktopNotifications] = useState(false)
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [refreshInterval, setRefreshInterval] = useState(30)

  useEffect(() => {
    // Load saved preferences
    const prefs = notificationPreferences.getPreferences()
    setSoundEnabled(prefs.soundEnabled)
    setSoundType(prefs.soundType)
    setDesktopNotifications(prefs.desktopEnabled)

    // Check notification permission
    if ('Notification' in window) {
      setNotificationsEnabled(Notification.permission === 'granted')
    }

    // Load recent visitors from localStorage (if any)
    const savedVisitors = localStorage.getItem('recentVisitors')
    if (savedVisitors) {
      try {
        setVisitors(JSON.parse(savedVisitors))
      } catch (error) {
        console.log('Could not load saved visitors')
      }
    }

    // Set up auto-refresh if enabled
    let interval: NodeJS.Timeout
    if (autoRefresh) {
      interval = setInterval(() => {
        // Simulate new visitor data (in real app, this would come from your analytics)
        const newVisitor: Visitor = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date(),
          page: '/services/house-washing/mandarin',
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
          referrer: 'https://www.google.com',
          location: 'Mandarin',
          service: 'House Washing'
        }
        setVisitors(prev => [newVisitor, ...prev.slice(0, 19)]) // Keep last 20
      }, refreshInterval * 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval])

  // Save visitors to localStorage
  useEffect(() => {
    localStorage.setItem('recentVisitors', JSON.stringify(visitors))
  }, [visitors])

  const enableNotifications = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      setNotificationsEnabled(permission === 'granted')
      setDesktopNotifications(permission === 'granted')
      
      if (permission === 'granted') {
        // Show test notification
        new Notification('🔔 Notifications Enabled!', {
          body: 'You will now receive alerts when visitors arrive',
          icon: '/new_logo_v2.png'
        })
      }
    }
  }

  const testNotification = () => {
    if (notificationsEnabled) {
      const testVisitor: Visitor = {
        id: 'test',
        timestamp: new Date(),
        page: '/test-page',
        userAgent: 'Test Browser',
        referrer: 'Test',
        location: 'Mandarin',
        service: 'House Washing'
      }
      
      // Show desktop notification
      if (desktopNotifications) {
        new Notification('🚿 Test Visitor Alert!', {
          body: `${testVisitor.location} - ${testVisitor.service} - ${testVisitor.page}`,
          icon: '/new_logo_v2.png',
          badge: '/new_logo_v2.png'
        })
      }

      // Play sound
      if (soundEnabled) {
        switch (soundType) {
          case 'ding':
            notificationSounds.playDing()
            break
          case 'chime':
            notificationSounds.playChime()
            break
          case 'bell':
            notificationSounds.playBell()
            break
        }
      }

      // Add to visitors list
      setVisitors(prev => [testVisitor, ...prev.slice(0, 19)])
    }
  }

  const testAllSounds = () => {
    notificationSounds.testAll()
  }

  const savePreferences = () => {
    notificationPreferences.setPreferences({
      soundEnabled,
      soundType,
      desktopEnabled: desktopNotifications
    })
    
    // Show success message
    alert('Preferences saved successfully!')
  }

  const clearVisitors = () => {
    if (confirm('Are you sure you want to clear all visitor data?')) {
      setVisitors([])
      localStorage.removeItem('recentVisitors')
    }
  }

  const exportVisitors = () => {
    const dataStr = JSON.stringify(visitors, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `visitors-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <AdminProtected>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  ⚙️ Admin Settings
                </h1>
                <p className="text-gray-600">
                  Configure visitor notifications, sound preferences, and system settings.
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Notification Settings */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🔔 Notification Settings
                </h3>
                
                <div className="space-y-4">
                  {/* Desktop Notifications */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Desktop Notifications</span>
                    <button
                      onClick={enableNotifications}
                      className={`px-3 py-1 rounded text-sm font-medium ${
                        notificationsEnabled 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                      }`}
                    >
                      {notificationsEnabled ? 'Enabled' : 'Enable'}
                    </button>
                  </div>

                  {/* Sound Notifications */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Sound Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={soundEnabled}
                        onChange={(e) => setSoundEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {/* Sound Type */}
                  {soundEnabled && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sound Type
                      </label>
                      <select
                        value={soundType}
                        onChange={(e) => setSoundType(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="ding">🔔 Ding (Default)</option>
                        <option value="chime">🎵 Chime</option>
                        <option value="bell">🔔 Bell</option>
                      </select>
                    </div>
                  )}

                  {/* Auto Refresh */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Auto Refresh</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={autoRefresh}
                        onChange={(e) => setAutoRefresh(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {/* Refresh Interval */}
                  {autoRefresh && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Refresh Interval (seconds)
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="300"
                        value={refreshInterval}
                        onChange={(e) => setRefreshInterval(parseInt(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )}

                  {/* Test Buttons */}
                  <div className="space-y-2 pt-4">
                    <button
                      onClick={testNotification}
                      disabled={!notificationsEnabled}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      🔊 Test Notification
                    </button>
                    
                    <button
                      onClick={testAllSounds}
                      disabled={!soundEnabled}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      🎵 Test All Sounds
                    </button>

                    <button
                      onClick={savePreferences}
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700"
                    >
                      💾 Save Preferences
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  📊 Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Visitors</span>
                    <span className="font-semibold">{visitors.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Today's Visitors</span>
                    <span className="font-semibold">
                      {visitors.filter(v => 
                        v.timestamp.toDateString() === new Date().toDateString()
                      ).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Notifications</span>
                    <span className="font-semibold">
                      {notificationsEnabled ? '✅ Enabled' : '❌ Disabled'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sound</span>
                    <span className="font-semibold">
                      {soundEnabled ? '🔊 On' : '🔇 Off'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visitor Data */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    👥 Recent Visitors
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={exportVisitors}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
                    >
                      📥 Export
                    </button>
                    <button
                      onClick={clearVisitors}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700"
                    >
                      🗑️ Clear
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {visitors.map((visitor) => (
                    <div key={visitor.id} className="p-4 bg-gray-50 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 mb-1">
                            {visitor.location ? `${visitor.location} - ` : ''}
                            {visitor.service ? visitor.service : visitor.page}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            📍 {visitor.page}
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>🕐 {visitor.timestamp.toLocaleString()}</span>
                            <span>{visitor.referrer !== 'Direct' ? '🔗 ' + visitor.referrer : '📍 Direct'}</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 ml-4">
                          {visitor.referrer !== 'Direct' ? '🔗' : '📍'}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {visitors.length === 0 && (
                    <div className="text-center text-gray-500 text-sm py-8">
                      <div className="text-4xl mb-2">👀</div>
                      <div>No visitors yet...</div>
                      <div className="text-xs mt-2">Visit some pages to see visitor data</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminProtected>
  )
}
