const CACHE_NAME = 'storm-avenue-v1'
const urlsToCache = [
  '/',
  '/about-us',
  '/gallery',
  '/contact-us',
  '/sa-logo.png',
  '/hero-background.jpg',
  '/residential.jpg',
  '/commercial.jpg',
  '/roof-inspection-custom.jpg',
  '/manifest.json'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
