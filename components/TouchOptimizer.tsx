'use client'

import { useEffect } from 'react'

// Touch interaction optimizations for mobile
export default function TouchOptimizer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Prevent double-tap zoom on buttons and links
      const preventDoubleTapZoom = (e: TouchEvent) => {
        if (e.target instanceof HTMLElement) {
          const tagName = e.target.tagName.toLowerCase()
          if (tagName === 'button' || tagName === 'a' || e.target.closest('button') || e.target.closest('a')) {
            e.preventDefault()
            e.target.click()
          }
        }
      }

      // Add touch-action CSS to prevent unwanted gestures
      const addTouchActions = () => {
        const style = document.createElement('style')
        style.textContent = `
          button, a, .btn-primary, .btn-secondary {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          
          .touch-scroll {
            touch-action: pan-y;
            -webkit-overflow-scrolling: touch;
          }
          
          .no-touch-scroll {
            touch-action: none;
          }
        `
        document.head.appendChild(style)
      }

      // Optimize scroll performance
      const optimizeScroll = () => {
        const style = document.createElement('style')
        style.textContent = `
          * {
            -webkit-overflow-scrolling: touch;
          }
          
          .smooth-scroll {
            scroll-behavior: smooth;
          }
          
          @media (prefers-reduced-motion: reduce) {
            .smooth-scroll {
              scroll-behavior: auto;
            }
          }
        `
        document.head.appendChild(style)
      }

      // Add event listeners
      document.addEventListener('touchend', preventDoubleTapZoom, { passive: false })
      addTouchActions()
      optimizeScroll()

      // Cleanup
      return () => {
        document.removeEventListener('touchend', preventDoubleTapZoom)
      }
    }
  }, [])

  return null
}