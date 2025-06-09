"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return <div className="antialiased">{children}</div>;
}
