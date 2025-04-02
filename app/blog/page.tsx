import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "COUTURE Blog | Custom Merch Insights & University Apparel Trends",
  description: "Discover the latest in high quality custom merch, university apparel trends, and premium custom hoodies for organizations. Expert insights from COUTURE by Ikigai.",
  keywords: ["custom merch", "high quality merch", "custom hoodies", "university apparel", "best merch", "premium apparel"],
  openGraph: {
    title: "COUTURE Blog | Custom Merch Insights & University Apparel Trends",
    description: "Discover the latest in high quality custom merch, university apparel trends, and premium custom hoodies for organizations.",
    url: "https://couturebyikigai.com/blog",
    siteName: "COUTURE by Ikigai",
    images: [
      {
        url: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-24.jpg",
        width: 1200,
        height: 630,
        alt: "COUTURE by Ikigai Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

// Blog categories
const categories = [
  { id: "merch-insights", name: "MERCH INSIGHTS" },
  { id: "university-trends", name: "UNIVERSITY TRENDS" },
  { id: "design-tips", name: "DESIGN TIPS" },
  { id: "client-stories", name: "CLIENT STORIES" },
]

// Blog posts data
const blogPosts = [
  {
    id: "why-high-quality-custom-merch-matters",
    title: "Why High Quality Custom Merch Matters for Your Organization",
    excerpt: "Discover why investing in premium custom hoodies and apparel can transform your organization's identity and member experience.",
    date: "April 1, 2025",
    category: "merch-insights",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-24.jpg",
    featured: true,
  },
  {
    id: "top-university-merch-trends-2025",
    title: "Top University Merch Trends for 2025",
    excerpt: "Explore the latest trends in university apparel and custom merchandise that are dominating campuses across America.",
    date: "March 28, 2025",
    category: "university-trends",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/19000008.JPG",
    featured: true,
  },
  {
    id: "custom-hoodies-design-guide",
    title: "The Ultimate Guide to Designing Custom Hoodies",
    excerpt: "Learn expert tips for creating standout custom hoodies that perfectly represent your organization's identity.",
    date: "March 15, 2025",
    category: "design-tips",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/sinh001485-R1-027-12.jpg",
  },
  {
    id: "ann-arbor-university-apparel-guide",
    title: "Ann Arbor's Ultimate University Apparel Guide",
    excerpt: "Discover the best custom merch options for organizations in Ann Arbor and why local sourcing matters.",
    date: "March 10, 2025",
    category: "university-trends",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/346048sinh002946-R1-057-27.jpg",
  },
  {
    id: "sustainable-custom-merch",
    title: "Sustainable Approaches to Custom Merchandise",
    excerpt: "How COUTURE is leading the way in sustainable, high-quality custom apparel production.",
    date: "February 25, 2025",
    category: "merch-insights",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-22.jpg",
  },
  {
    id: "bloomington-organization-merch-success",
    title: "How Bloomington Organizations Are Elevating Their Merch Game",
    excerpt: "Case studies of successful custom merchandise strategies from top Bloomington university organizations.",
    date: "February 18, 2025",
    category: "client-stories",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/clubs/IMG_2456.png",
  },
]

export default function BlogPage() {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <h1 className="text-sm uppercase mb-10">BLOG</h1>
      
      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="text-xs uppercase mb-6 border-b border-[#ececec] pb-2">FEATURED</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts
            .filter(post => post.featured)
            .map(post => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group block">
                <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority={post.id === "why-high-quality-custom-merch-matters"}
                    loading={post.id === "why-high-quality-custom-merch-matters" ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="mb-2">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-xs text-gray-500 mx-2">•</span>
                  <span className="text-xs uppercase">{categories.find(c => c.id === post.category)?.name}</span>
                </div>
                <h3 className="text-sm font-medium mb-2 group-hover:underline">{post.title}</h3>
                <p className="text-xs text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
        </div>
      </div>
      
      {/* Categories */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-4">
          <Link href="/blog" className="text-xs uppercase py-1 px-3 border border-black bg-black text-white">
            ALL
          </Link>
          {categories.map(category => (
            <Link 
              href={`/blog/category/${category.id}`} 
              key={category.id}
              className="text-xs uppercase py-1 px-3 border border-[#ececec] hover:border-black transition-colors duration-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* All Posts */}
      <div>
        <h2 className="text-xs uppercase mb-6 border-b border-[#ececec] pb-2">ALL POSTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group block">
              <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="mb-2">
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="text-xs text-gray-500 mx-2">•</span>
                <span className="text-xs uppercase">{categories.find(c => c.id === post.category)?.name}</span>
              </div>
              <h3 className="text-sm font-medium mb-2 group-hover:underline">{post.title}</h3>
              <p className="text-xs text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
