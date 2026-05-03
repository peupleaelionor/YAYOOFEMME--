import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://fmmyy.com'

  const staticPages = [
    { url: '/', priority: 1 },
    { url: '/style', priority: 0.9 },
    { url: '/beauty', priority: 0.9 },
    { url: '/gifts', priority: 0.9 },
    { url: '/perfume', priority: 0.9 },
    { url: '/deals', priority: 0.8 },
    { url: '/guides', priority: 0.8 },
    { url: '/products', priority: 0.7 },
    { url: '/pricing', priority: 0.8 },
    { url: '/business', priority: 0.6 },
  ]

  return staticPages.map(({ url, priority }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: url === '/deals' ? 'weekly' : 'monthly',
    priority,
  }))
}
