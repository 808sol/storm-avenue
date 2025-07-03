import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://storm-avenue.vercel.app'
  const currentDate = new Date()

  // Priority cities for SEO
  const priorityCities = [
    'brandon',
    'madison',
    'ridgeland',
    'flowood',
    'clinton'
  ]

  // All service cities
  const allCities = [
    ...priorityCities,
    'jackson',
    'florence',
    'oak-grove',
    'vicksburg',
    'brookhaven',
    'hattiesburg',
    'petal',
    'mccomb',
    'columbia',
    'hazlehurst',
    'crystal-springs',
    'pearl',
    'byram'
  ]

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Generate city-specific URLs for better local SEO (these can be virtual/redirects)
  const cityPages = allCities.map((city) => ({
    url: `${baseUrl}#${city}-ms-roofing`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: priorityCities.includes(city) ? 0.85 : 0.6,
  }))

  return [...staticPages, ...cityPages]
}
