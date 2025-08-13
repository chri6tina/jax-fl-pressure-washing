'use client'

import { useEffect, useState } from 'react'
import { event } from '@/utils/analytics'

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

export default function VisitorNotifier() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  useEffect(() => {
    // Check if user is admin (simple check for now)
    const checkAdmin = () => {
      const adminStatus = localStorage.getItem('adminAuthenticated')
      setIsAdmin(adminStatus === 'true')
    }

    checkAdmin()

    // Request notification permission
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission()
        setNotificationsEnabled(permission === 'granted')
      }
    }

    requestNotificationPermission()

    // Track current page visit
    const trackPageVisit = () => {
      const visitor: Visitor = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        location: extractLocationFromPath(window.location.pathname),
        service: extractServiceFromPath(window.location.pathname)
      }

      // Add to local state
      setVisitors(prev => [visitor, ...prev.slice(0, 9)]) // Keep last 10

      // Send to analytics
      event({
        action: 'page_visit',
        category: 'engagement',
        label: visitor.page,
        value: 1
      })

      // Show notification if admin and enabled
      if (isAdmin && notificationsEnabled) {
        showVisitorNotification(visitor)
      }

      // Play sound notification
      playNotificationSound()
    }

    // Track page visit on load
    trackPageVisit()

    // Track page visits on navigation
    const handleRouteChange = () => {
      setTimeout(trackPageVisit, 100) // Small delay to ensure new page is loaded
    }

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange)
    
    // Custom event for Next.js route changes
    window.addEventListener('routeChange', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('routeChange', handleRouteChange)
    }
  }, [isAdmin, notificationsEnabled])

  const extractLocationFromPath = (path: string): string | undefined => {
    // Extract location from URL patterns like /services/house-washing/arlington
    const locationMatch = path.match(/\/([^\/]+)$/)
    if (locationMatch) {
      const location = locationMatch[1]
      const locations = [
        'arlington', 'atlantic-beach', 'avondale', 'eastside',
        'jacksonville-beach', 'mandarin', 'neptune-beach', 'northside',
        'ortega', 'ponte-vedra', 'riverside', 'san-marco',
        'southside', 'westside'
      ]
      if (locations.includes(location)) {
        return location.charAt(0).toUpperCase() + location.slice(1)
      }
    }
    return undefined
  }

  const extractServiceFromPath = (path: string): string | undefined => {
    // Extract service from URL patterns like /services/house-washing/arlington
    const serviceMatch = path.match(/\/services\/([^\/]+)/)
    if (serviceMatch) {
      const service = serviceMatch[1]
      return service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
    return undefined
  }

  const showVisitorNotification = (visitor: Visitor) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('🚿 New Visitor Alert!', {
        body: `${visitor.location ? visitor.location + ' - ' : ''}${visitor.service ? visitor.service + ' - ' : ''}${visitor.page}`,
        icon: '/new_logo_v2.png',
        badge: '/new_logo_v2.png',
        tag: 'visitor-notification',
        requireInteraction: false,
        silent: false
      })

      // Auto-close after 5 seconds
      setTimeout(() => notification.close(), 5000)

      // Click to focus window
      notification.onclick = () => {
        window.focus()
        notification.close()
      }
    }
  }

  const playNotificationSound = () => {
    try {
      // Create audio context for notification sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Create a pleasant notification sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1)
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2)

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.log('Audio notification not supported')
    }
  }

  const enableNotifications = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      setNotificationsEnabled(permission === 'granted')
      
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
      showVisitorNotification(testVisitor)
      playNotificationSound()
    }
  }

  // Only show admin controls if user is admin
  if (!isAdmin) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Notification Controls */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-80">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          🔔 Visitor Notifications
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Desktop Notifications</span>
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

          <button
            onClick={testNotification}
            disabled={!notificationsEnabled}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🔊 Test Notification
          </button>

          <div className="text-xs text-gray-500">
            {notificationsEnabled 
              ? '✅ You will receive alerts for new visitors'
              : '⚠️ Enable notifications to get visitor alerts'
            }
          </div>
        </div>
      </div>

      {/* Recent Visitors */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          👥 Recent Visitors
        </h3>
        
        <div className="space-y-2">
          {visitors.map((visitor) => (
            <div key={visitor.id} className="p-2 bg-gray-50 rounded text-sm">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">
                    {visitor.location ? `${visitor.location} - ` : ''}
                    {visitor.service ? visitor.service : visitor.page}
                  </div>
                  <div className="text-xs text-gray-500">
                    {visitor.timestamp.toLocaleTimeString()}
                  </div>
                </div>
                <div className="text-xs text-gray-400 ml-2">
                  {visitor.referrer !== 'Direct' ? '🔗' : '📍'}
                </div>
              </div>
            </div>
          ))}
          
          {visitors.length === 0 && (
            <div className="text-center text-gray-500 text-sm py-4">
              No visitors yet...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
