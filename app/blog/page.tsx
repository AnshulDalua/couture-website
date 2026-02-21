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
    slug: 'custom-letterman-jackets-college-guide',
    title: 'CUSTOM LETTERMAN JACKETS: THE COMPLETE GUIDE FOR COLLEGE ORGANIZATIONS IN 2026',
    date: 'FEBRUARY 21, 2026',
    excerpt: 'Everything you need to know about ordering custom letterman jackets for your fraternity, sorority, or college club. Learn about varsity jacket styles, embroidery options, and how to design letter jackets your members will treasure.',
    image: '/lookbook/19000034.webp',
    readTime: '9 MIN READ',
    featured: true,
  },
  {
    slug: 'custom-crewnecks-ultimate-guide',
    title: 'THE COMPLETE GUIDE TO CUSTOM CREWNECKS IN 2026',
    date: 'FEBRUARY 21, 2026',
    excerpt: 'Everything you need to know about ordering custom crewnecks and sweatshirts—embroidery, printing options, fabric weights, and how to design crewneck merch your group will love.',
    image: '/lookbook/19000034.webp',
    readTime: '8 MIN READ',
    featured: true,
  },
  {
    slug: 'custom-caps-hats-ultimate-guide',
    title: 'THE COMPLETE GUIDE TO CUSTOM CAPS & HATS IN 2026',
    date: 'FEBRUARY 20, 2026',
    excerpt: 'Everything you need to know about ordering custom caps and hats—embroidery, printing options, fabric choices, and how to design merch your group will actually wear.',
    image: '/lookbook/19000034.webp',
    readTime: '7 MIN READ',
    featured: true,
  },
  {
    slug: 'custom-greek-life-sweatsets-guide',
    title: 'THE ULTIMATE GUIDE TO CUSTOM GREEK LIFE SWEATSETS IN 2026',
    date: 'FEBRUARY 19, 2026',
    excerpt: 'Everything you need to know about ordering custom sorority and fraternity sweatsets—matching hoodies and sweatpants that your chapter will actually want to wear.',
    image: '/lookbook/19000034.webp',
    readTime: '6 MIN READ',
    featured: true,
  },
  {
    slug: 'startup-team-hoodies-ultimate-guide',
    title: 'STARTUP TEAM HOODIES: THE ULTIMATE GUIDE TO CUSTOM COMPANY MERCH IN 2026',
    date: 'FEBRUARY 19, 2026',
    excerpt: 'Learn how to create premium startup team hoodies and custom company merch that builds company culture, impresses investors, and creates lasting brand impressions.',
    image: '/lookbook/19000034.webp',
    readTime: '6 MIN READ',
    featured: true,
  },
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
  {
    slug: 'best-merch-in-berkeley',
    title: 'Custom Merch for UC Berkeley Done Right',
    date: 'JUNE 14, 2025',
    excerpt: 'Discover how Couture helps UC Berkeley clubs, frats, and cultural orgs create custom, high-quality merch in bulk.',
    image: '/lookbook/339344sin002250-R1-035-16.webp',
    readTime: '4 MIN READ',
    featured: false,
  },
  {
    slug: 'from-concert-tees-to-streetwear-how-merch-became-fashion',
    title: 'How Merch Became Fashion: From Concert Tees to Streetwear Drops',
    date: 'JULY 4, 2025',
    excerpt: 'Explore the cultural shift that turned fan merch into fashion statements—from vintage concert tees to creator-led streetwear drops.',
    image: '/homepage/aryani.webp',
    readTime: '5 MIN READ',
    featured: false,
  },
  {
    slug: 'modern-merch-tech-pod-shopify-social-media',
    title: 'The Tech Behind Modern Merch: Shopify, Print on Demand, Social Media',
    date: 'JULY 4, 2025',
    excerpt: 'Explore the essential tools, platforms, and production workflows creators use to build merch lines that feel like real fashion brands—from POD to DTC e-commerce.',
    image: '/lookbook/Couture-AXO-26.webp',
    readTime: '5 MIN READ',
    featured: false,
  },
  {
    slug: 'what-makes-custom-merch-high-quality-2025',
    title: 'What Makes Custom Merch High Quality in 2025',
    date: 'JULY 7, 2025',
    excerpt: 'A technical breakdown of what actually makes custom merch feel premium, from fabric GSM to Pantone matching and print method comparisons.',
    image: '/lookbook/19000016.webp',
    readTime: '5 MIN READ',
    featured: false,
  },
  {
    slug: 'why-we-wear-merch-psychology-behind-custom-apparel',
    title: 'Why We Wear Merch: The Psychology Behind Custom Apparel',
    date: 'JULY 1, 2025',
    excerpt: 'Explore the psychology of merch—how identity, memory, social proof, and exclusivity influence why people wear custom apparel.',
    image: '/lookbook/clubhous.webp',
    readTime: '8 MIN READ',
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-sm uppercase mb-8 tracking-wider text-center">Journal</h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
              <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 4} // Prioritize loading for the first few images
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase font-medium tracking-wide">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
