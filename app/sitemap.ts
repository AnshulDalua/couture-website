import { MetadataRoute } from 'next'

// Define the base URL for the site
const baseUrl = 'https://couturebyikigai.com'

// Define the change frequency types for type safety
const changeFrequencies = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'] as const
type ChangeFrequency = typeof changeFrequencies[number]

// Define the main pages of the website
const mainPages = [
  {
    url: '/',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 1.0,
  },
  {
    url: '/products',
    lastModified: new Date(),
    changeFrequency: 'daily' as ChangeFrequency,
    priority: 0.9,
  },
  {
    url: '/lookbook',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/our-process',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/order',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/support',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.6,
  },
]

// Define support pages
const supportPages = [
  {
    url: '/support/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.5,
  },
  {
    url: '/support/faq',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.6,
  },
  {
    url: '/support/pricing',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/support/privacy',
    lastModified: new Date(),
    changeFrequency: 'yearly' as ChangeFrequency,
    priority: 0.3,
  },
  {
    url: '/support/returns',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.5,
  },
  {
    url: '/support/reviews',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.6,
  },
  {
    url: '/support/shipping',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.5,
  },
  {
    url: '/support/shipping-returns',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.5,
  },
  {
    url: '/support/terms',
    lastModified: new Date(),
    changeFrequency: 'yearly' as ChangeFrequency,
    priority: 0.3,
  },
]

// Define dynamic product pages
const productPages = [
  {
    url: '/products/heavyweight-hoodie',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/products/heavyweight-crewneck',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/products/classic-quarterzip',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/products/straightcut-sweatpants',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/products/classic-tshirt',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
]

// Define lookbook pages
const lookbookPages = [
  {
    url: '/lookbook/2025-lookbook',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/lookbook/2025-clients',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
]

// Export the sitemap function
export default function sitemap(): MetadataRoute.Sitemap {
  // Combine all pages
  const allPages = [
    ...mainPages,
    ...supportPages,
    ...productPages,
    ...lookbookPages,
  ]

  // Add the base URL to each page
  return allPages.map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
  }))
}
