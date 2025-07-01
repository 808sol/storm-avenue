"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { initSmoothScroll } from "@/lib/smoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Register service worker for PWA functionality
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          // Service worker registered successfully
        })
        .catch((registrationError) => {
          // Service worker registration failed
          if (process.env.NODE_ENV === 'development') {
            console.error('SW registration failed: ', registrationError);
          }
        });
    }
  }, []);

  // Initialize smooth scrolling
  useEffect(() => {
    initSmoothScroll();
  }, []);

  // Page transition effect
  useEffect(() => {
    // Start transition
    setIsTransitioning(true);

    // Reset scroll position smoothly
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    // End transition after animation
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Page Transition Overlay */}
      <div
        className={`fixed inset-0 bg-black pointer-events-none z-[200] transition-opacity duration-300 ${
          isTransitioning ? 'opacity-30' : 'opacity-0'
        }`}
      />

      {/* Main Content with Fade Transition */}
      <div
        className={`antialiased transition-all duration-300 ${
          isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        {children}
      </div>
    </>
  );
}
