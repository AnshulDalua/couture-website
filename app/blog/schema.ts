import { Metadata } from 'next'

type ArticleSchemaProps = {
  title: string
  description: string
  date: string
  author?: string
  image?: string
  url: string
}

export function generateArticleSchema({
  title,
  description,
  date,
  author = 'Couture by Ikigai',
  image = '/lookbook/19000034.webp',
  url
}: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `https://couturebyikigai.com${image}`,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Couture by Ikigai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://couturebyikigai.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }
}

export function generateBreadcrumbSchema(name: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://couturebyikigai.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://couturebyikigai.com/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: name,
        item: url
      }
    ]
  }
}
