'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaKeyboard, FaEye, FaEyeSlash, FaFont, FaTextHeight } from 'react-icons/fa'

export default function AccessibilityNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [focusVisible, setFocusVisible] = useState(false)

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(prefersReducedMotion)
    
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true'
    const savedLargeText = localStorage.getItem('largeText') === 'true'
    
    setHighContrast(savedHighContrast)
    setLargeText(savedLargeText)
    
    // Apply saved preferences
    if (savedHighContrast) document.documentElement.classList.add('high-contrast')
    if (savedLargeText) document.documentElement.classList.add('large-text')
  }, [])

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('highContrast', newValue.toString())
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }

  const toggleLargeText = () => {
    const newValue = !largeText
    setLargeText(newValue)
    localStorage.setItem('largeText', newValue.toString())
    
    if (newValue) {
      document.documentElement.classList.add('large-text')
    } else {
      document.documentElement.classList.remove('large-text')
    }
  }

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion)
    // This would typically be handled by CSS media queries
  }

  const showFocusIndicators = () => {
    setFocusVisible(true)
    document.documentElement.classList.add('focus-visible')
    
    setTimeout(() => {
      setFocusVisible(false)
      document.documentElement.classList.remove('focus-visible')
    }, 3000)
  }

  const skipToMainContent = () => {
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skipToNavigation = () => {
    const navigation = document.querySelector('nav')
    if (navigation) {
      navigation.focus()
      navigation.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Skip Links - Screen Reader Only */}
      <div className="sr-only">
        <a href="#main-content" onClick={skipToMainContent} className="skip-link">
          Skip to main content
        </a>
        <a href="#navigation" onClick={skipToNavigation} className="skip-link">
          Skip to navigation
        </a>
      </div>

      {/* Accessibility Toolbar */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50"
          aria-label="Toggle accessibility options"
          aria-expanded={isVisible}
        >
          <FaEye className="text-xl" />
        </button>
      </div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-20 z-40 bg-white rounded-lg shadow-2xl p-6 w-80 max-w-[90vw]"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
          >
            <h2 id="accessibility-panel-title" className="text-xl font-bold text-gray-800 mb-4">
              Accessibility Options
            </h2>
            
            <div className="space-y-4">
              {/* High Contrast */}
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors duration-200 ${
                  highContrast 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-gray-300 hover:border-primary'
                }`}
                aria-pressed={highContrast}
              >
                <span className="flex items-center">
                  <FaEye className="mr-3" />
                  High Contrast
                </span>
                <span className="text-sm">{highContrast ? 'ON' : 'OFF'}</span>
              </button>

              {/* Large Text */}
              <button
                onClick={toggleLargeText}
                className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors duration-200 ${
                  largeText 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-gray-300 hover:border-primary'
                }`}
                aria-pressed={largeText}
              >
                <span className="flex items-center">
                  <FaTextHeight className="mr-3" />
                  Large Text
                </span>
                <span className="text-sm">{largeText ? 'ON' : 'OFF'}</span>
              </button>

              {/* Reduced Motion */}
              <button
                onClick={toggleReducedMotion}
                className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors duration-200 ${
                  reducedMotion 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-gray-300 hover:border-primary'
                }`}
                aria-pressed={reducedMotion}
              >
                <span className="flex items-center">
                  <FaEyeSlash className="mr-3" />
                  Reduced Motion
                </span>
                <span className="text-sm">{reducedMotion ? 'ON' : 'OFF'}</span>
              </button>

              {/* Show Focus */}
              <button
                onClick={showFocusIndicators}
                className="w-full flex items-center justify-between p-3 rounded-lg border-2 border-gray-300 hover:border-primary transition-colors duration-200"
              >
                <span className="flex items-center">
                  <FaKeyboard className="mr-3" />
                  Show Focus
                </span>
                <span className="text-sm">Click to show</span>
              </button>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Keyboard Shortcuts</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><kbd className="bg-white px-2 py-1 rounded border">Tab</kbd> Navigate</li>
                <li><kbd className="bg-white px-2 py-1 rounded border">Enter</kbd> Activate</li>
                <li><kbd className="bg-white px-2 py-1 rounded border">Space</kbd> Toggle</li>
                <li><kbd className="bg-white px-2 py-1 rounded border">Escape</kbd> Close</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}