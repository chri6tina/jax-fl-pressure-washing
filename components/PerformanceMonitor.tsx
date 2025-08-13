'use client'

import { useEffect, useState } from 'react'
import { trackPagePerformance } from '@/utils/analytics'

interface PerformanceMonitorProps {
  pageName: string;
}

export default function PerformanceMonitor({ pageName }: PerformanceMonitorProps) {
  const [performanceData, setPerformanceData] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setPerformanceData((prev: any) => ({
              ...prev,
              LCP: entry.startTime
            }))
          }
          
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEntry & { processingStart: number };
            setPerformanceData((prev: any) => ({
              ...prev,
              FID: firstInputEntry.processingStart - entry.startTime
            }))
          }
          
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as PerformanceEntry & { value: number };
            setPerformanceData((prev: any) => ({
              ...prev,
              CLS: (prev?.CLS || 0) + layoutShiftEntry.value
            }))
          }
        })
      })

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (error) {
        console.warn('Performance monitoring not supported:', error)
      }

      // Track page load time
      const trackLoadTime = () => {
        const loadTime = performance.now()
        const coreWebVitals = {
          LCP: performanceData?.LCP || 0,
          FID: performanceData?.FID || 0,
          CLS: performanceData?.CLS || 0
        }
        
        trackPagePerformance(pageName, loadTime, coreWebVitals)
      }

      if (document.readyState === 'complete') {
        trackLoadTime()
      } else {
        window.addEventListener('load', trackLoadTime)
      }

      return () => {
        observer.disconnect()
        window.removeEventListener('load', trackLoadTime)
      }
    }
  }, [pageName, performanceData])

  return null
}