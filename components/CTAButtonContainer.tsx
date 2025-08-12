'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CTAButtonContainerProps {
  children: ReactNode
  className?: string
}

const CTAButtonContainer = ({ children, className = "" }: CTAButtonContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default CTAButtonContainer
