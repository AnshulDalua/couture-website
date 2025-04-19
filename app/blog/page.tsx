import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog | Couture by Ikigai',
  description: 'Insights on high quality custom merchandise, premium apparel design, and the latest trends in custom hoodies and organization merch.',
  keywords: ['high quality merch', 'best merch', 'custom hoodie', 'custom merchandise', 'premium apparel'],
}

// Blog post data
const blogPosts = [
  {
    slug: 'why-high-quality-custom-merch-matters',
    title: 'WHY HIGH QUALITY CUSTOM MERCH MATTERS FOR YOUR ORGANIZATION',
    date: 'APRIL 15, 2025',
    excerpt: 'Discover why investing in premium custom merchandise elevates your organization\'s brand and creates lasting impressions that standard apparel simply cannot match.',
    image: '/lookbook/19000034.webp',
    readTime: '5 MIN READ',
    featured: true,
  },
  {
    slug: 'top-university-merch-trends-2025',
    title: 'TOP UNIVERSITY MERCHANDISE TRENDS FOR 2025',
    date: 'APRIL 10, 2025',
    excerpt: 'Explore the cutting-edge trends shaping university merchandise in 2025, from sustainable materials to innovative customization techniques.',
    image: '/lookbook/Couture-AXO-22.webp',
    readTime: '4 MIN READ',
    featured: true,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen px-6 py-8">
      <h1 className="text-sm uppercase mb-8">JOURNAL</h1>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="text-xs uppercase mb-6">FEATURED</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
              <div className="relative h-[50vh] md:h-[40vh] mb-4 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xs uppercase font-medium">{post.title}</h3>
                <span className="text-[10px] uppercase">{post.readTime}</span>
              </div>
              <p className="text-xs mb-2">{post.date}</p>
              <p className="text-xs text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="text-xs uppercase mb-6">ALL POSTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
              <div className="relative h-[30vh] mb-4 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xs uppercase font-medium">{post.title}</h3>
                <span className="text-[10px] uppercase">{post.readTime}</span>
              </div>
              <p className="text-xs mb-2">{post.date}</p>
              <p className="text-xs text-gray-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
