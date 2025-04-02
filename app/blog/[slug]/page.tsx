import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/lib/blog';

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPosts().find((post) => post.id === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | COUTURE by Ikigai',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | COUTURE by Ikigai`,
    description: post.excerpt,
    keywords: ["custom merch", "high quality merch", "custom hoodies", "university apparel", "best merch", ...post.keywords || []],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://couturebyikigai.com/blog/${post.id}`,
      siteName: 'COUTURE by Ikigai',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPosts().find((post) => post.id === params.slug);
  
  if (!post) {
    notFound();
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
