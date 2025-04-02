import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: "Top University Merch Trends for 2025 | COUTURE by Ikigai",
  description: "Explore the latest trends in university apparel and custom merchandise that are dominating campuses across America.",
  keywords: [
    "university merch trends", 
    "custom college apparel", 
    "trendy custom hoodies", 
    "university organization merchandise", 
    "campus fashion trends",
    "greek life apparel",
    "student organization merch",
    "best university hoodies",
    "custom university apparel",
    "college merchandise design"
  ],
  openGraph: {
    title: "Top University Merch Trends for 2025 | COUTURE by Ikigai",
    description: "Explore the latest trends in university apparel and custom merchandise that are dominating campuses across America.",
    url: "https://couturebyikigai.com/blog/top-university-merch-trends-2025",
    siteName: "COUTURE by Ikigai",
    images: [
      {
        url: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/19000008.JPG",
        width: 1200,
        height: 630,
        alt: "University Merch Trends 2025 by COUTURE",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function BlogPost() {
  const post = getBlogPosts().find((post) => post.id === "top-university-merch-trends-2025");
  
  if (!post) {
    return (
      <div className="px-6 py-8 max-w-3xl mx-auto">
        <p>Blog post not found.</p>
      </div>
    );
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = getBlogPosts()
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <article className="px-6 py-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/blog" className="text-xs uppercase hover:underline">
          ← Back to Blog
        </Link>
      </div>
      
      <div className="mb-6">
        <span className="text-xs text-gray-500">{post.date}</span>
        <span className="text-xs text-gray-500 mx-2">•</span>
        <span className="text-xs uppercase">{post.categoryName}</span>
      </div>
      
      <h1 className="text-xl font-medium mb-6">{post.title}</h1>
      
      <div className="relative aspect-[16/9] w-full mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      
      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xs uppercase mb-6 border-b border-[#ececec] pb-2">RELATED POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group block">
                <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <h3 className="text-sm font-medium mb-2 group-hover:underline">{relatedPost.title}</h3>
                <p className="text-xs text-gray-600">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
