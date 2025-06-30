import { useEffect, useRef } from 'react'

interface SwipeHandlers {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
}

export function useSwipeGesture(
  elementRef: React.RefObject<HTMLElement>,
  handlers: SwipeHandlers,
  threshold = 50
) {
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const touchEnd = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleTouchStart = (e: TouchEvent) => {
      touchEnd.current = null
      touchStart.current = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      touchEnd.current = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY
      }
    }

    const handleTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return

      const deltaX = touchStart.current.x - touchEnd.current.x
      const deltaY = touchStart.current.y - touchEnd.current.y
      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      if (Math.max(absDeltaX, absDeltaY) < threshold) return

      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0 && handlers.onSwipeLeft) {
          handlers.onSwipeLeft()
        } else if (deltaX < 0 && handlers.onSwipeRight) {
          handlers.onSwipeRight()
        }
      } else {
        // Vertical swipe
        if (deltaY > 0 && handlers.onSwipeUp) {
          handlers.onSwipeUp()
        } else if (deltaY < 0 && handlers.onSwipeDown) {
          handlers.onSwipeDown()
        }
      }
    }

    element.addEventListener('touchstart', handleTouchStart)
    element.addEventListener('touchmove', handleTouchMove)
    element.addEventListener('touchend', handleTouchEnd)

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [elementRef, handlers, threshold])
}
