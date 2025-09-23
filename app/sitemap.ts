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
    url: '/our-designs',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/about-us',
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
  {
    url: '/blog',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
]

// Define support pages - UPDATED with missing pages
const supportPages = [
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
    url: '/support/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.6,
  },
  {
    url: '/support/reviews',
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
    url: '/support/terms',
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
    url: '/support/shipping',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.5,
  },
]

// Define dynamic product pages - COMPLETE list
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

// Define lookbook pages - UPDATED with sub-pages
const lookbookPages = [
  {
    url: '/lookbook',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/lookbook/2025-lookbook',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
]

// Define blog posts - COMPLETE list including all from crawl data
const blogPosts = [
  {
    url: '/blog/why-high-quality-custom-merch-matters',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/blog/top-university-merch-trends-2025',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/blog/best-merch-in-berkeley',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/blog/from-concert-tees-to-streetwear-how-merch-became-fashion',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/blog/modern-merch-tech-pod-shopify-social-media',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/blog/what-makes-custom-merch-high-quality-2025',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.7,
  },
  {
    url: '/blog/why-we-wear-merch-psychology-behind-custom-apparel',
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
    ...blogPosts,
  ]

  // Add the base URL to each page
  return allPages.map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
  }))
}