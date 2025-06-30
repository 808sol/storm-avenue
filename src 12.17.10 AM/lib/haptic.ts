// Haptic feedback utility for mobile devices
export const haptic = {
  // Light haptic feedback for button taps
  light: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
  },

  // Medium haptic feedback for important actions
  medium: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(20)
    }
  },

  // Strong haptic feedback for confirmations
  strong: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([30, 10, 30])
    }
  },

  // Success pattern
  success: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([10, 20, 10, 20, 50])
    }
  },

  // Error pattern
  error: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 50, 50])
    }
  }
}
