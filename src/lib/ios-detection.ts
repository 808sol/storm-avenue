// iOS Device Detection Utilities

export const isIOS = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

export const isIPhone = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /iPhone/.test(navigator.userAgent);
};

export const isIPad = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /iPad/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

export const getIOSVersion = (): number | null => {
  if (!isIOS()) return null;

  const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return null;
};

export const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(userAgent);
};

export const isStandalone = (): boolean => {
  if (typeof window === 'undefined') return false;

  const nav = window.navigator as Navigator & { standalone?: boolean };
  return nav.standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches;
};

// iPhone Model Detection
export const getIPhoneModel = (): string | null => {
  if (!isIPhone()) return null;

  const width = window.screen.width;
  const height = window.screen.height;
  const ratio = window.devicePixelRatio;

  // iPhone 15/14/13/12 Pro Max
  if (width === 428 && height === 926 && ratio === 3) {
    return 'iPhone Pro Max';
  }

  // iPhone 15/14/13/12 Pro
  if (width === 390 && height === 844 && ratio === 3) {
    return 'iPhone Pro';
  }

  // iPhone 15/14/13/12 Mini
  if (width === 375 && height === 812 && ratio === 3) {
    return 'iPhone Mini';
  }

  // iPhone SE (2nd/3rd gen), iPhone 6/7/8
  if (width === 375 && height === 667 && ratio === 2) {
    return 'iPhone SE/6/7/8';
  }

  // iPhone SE (1st gen)
  if (width === 320 && height === 568 && ratio === 2) {
    return 'iPhone SE (1st gen)';
  }

  return 'iPhone';
};

// Viewport utilities
export const hasNotch = (): boolean => {
  if (!isIOS()) return false;

  // Check for CSS env() support and safe area insets
  const hasEnvSupport = CSS.supports('padding-top', 'env(safe-area-inset-top)');
  if (!hasEnvSupport) return false;

  // iPhones with notch have safe area insets > 20px
  const testEl = document.createElement('div');
  testEl.style.paddingTop = 'env(safe-area-inset-top)';
  document.body.appendChild(testEl);
  const hasNotch = parseInt(window.getComputedStyle(testEl).paddingTop) > 20;
  document.body.removeChild(testEl);

  return hasNotch;
};

// Touch event utilities
export const supportsTouchEvents = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Orientation utilities
export const getOrientation = (): 'portrait' | 'landscape' => {
  if (typeof window === 'undefined') return 'portrait';

  return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
};

export const lockOrientation = async (orientation: 'portrait' | 'landscape' | 'any'): Promise<void> => {
  if ('orientation' in screen && 'lock' in screen.orientation) {
    try {
      const screenOrientation = screen.orientation as ScreenOrientation & {
        lock: (orientation: string) => Promise<void>;
      };
      await screenOrientation.lock(orientation);
    } catch (error) {
      console.warn('Orientation lock not supported:', error);
    }
  }
};

// Performance utilities
export const getDeviceMemory = (): number | undefined => {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return nav.deviceMemory;
};

export const getHardwareConcurrency = (): number => {
  return navigator.hardwareConcurrency || 1;
};

// Network utilities
interface NetworkInformation {
  effectiveType?: string;
}

export const getNetworkType = (): string | undefined => {
  const nav = navigator as Navigator & {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  };

  const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
  return connection?.effectiveType;
};

// Haptic feedback
interface HapticWindow extends Window {
  haptic?: {
    light: () => void;
    medium: () => void;
    heavy: () => void;
  };
}

export const triggerHapticFeedback = (style: 'light' | 'medium' | 'heavy' = 'light'): void => {
  if (!isIOS()) return;

  // Use the existing haptic utility
  if (typeof window !== 'undefined' && 'haptic' in window) {
    const hapticWindow = window as HapticWindow;
    if (hapticWindow.haptic && style in hapticWindow.haptic) {
      hapticWindow.haptic[style]();
    }
  }
};

// Safe area utilities
export const getSafeAreaInsets = () => {
  if (typeof window === 'undefined') return { top: 0, right: 0, bottom: 0, left: 0 };

  const computedStyle = getComputedStyle(document.documentElement);

  return {
    top: parseInt(computedStyle.getPropertyValue('--sat') || '0'),
    right: parseInt(computedStyle.getPropertyValue('--sar') || '0'),
    bottom: parseInt(computedStyle.getPropertyValue('--sab') || '0'),
    left: parseInt(computedStyle.getPropertyValue('--sal') || '0')
  };
};

// Initialize safe area CSS variables
export const initSafeAreaVariables = (): void => {
  if (typeof window === 'undefined') return;

  const updateVariables = () => {
    document.documentElement.style.setProperty('--sat', `${window.screen.height - window.innerHeight}px`);
    document.documentElement.style.setProperty('--sab', '0px');
    document.documentElement.style.setProperty('--sal', '0px');
    document.documentElement.style.setProperty('--sar', '0px');
  };

  updateVariables();
  window.addEventListener('resize', updateVariables);
  window.addEventListener('orientationchange', updateVariables);
};
