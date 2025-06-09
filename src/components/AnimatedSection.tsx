'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'slide-up' | 'scale-in'
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        {
          'opacity-0 translate-y-8': !isVisible && animation === 'slide-up',
          'opacity-100 translate-y-0': isVisible && animation === 'slide-up',
          'opacity-0': !isVisible && animation === 'fade-in',
          'opacity-100': isVisible && animation === 'fade-in',
          'opacity-0 scale-95': !isVisible && animation === 'scale-in',
          'opacity-100 scale-100': isVisible && animation === 'scale-in',
        },
        className
      )}
    >
      {children}
    </div>
  )
}
