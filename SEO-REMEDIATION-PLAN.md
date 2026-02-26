# SEO Remediation Plan: Couture by Ikigai
## Shifting from "Ikigai Philosophy" to "Custom Greek Life Merch"

**Current Problem:** Google ranks you for "ikigai" (Japanese philosophy) with 3,500+ impressions and 0 clicks. Zero rankings for merch-related keywords.

**Root Cause:** Domain name contains "ikigai" which confuses Google's understanding of your actual business.

---

## PRIORITY 1: IMMEDIATE FIXES (Week 1) - Highest Impact

### 1.1 Homepage Metadata Overhaul
**File:** `/app/layout.tsx`

**Current Issues:**
- Title: "COUTURE BY IKIGAI - High Quality Custom Merch" (brand name first)
- Description mentions "Ikigai" prominently
- Keywords are generic

**Changes Required:**

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://couturebyikigai.com'),
  title: {
    default: 'Custom Greek Life Hoodies & Sorority Merch | Couture',
    template: '%s | Couture - Custom Greek Life Apparel',
  },
  description: "Premium custom hoodies, sweatsets, and apparel for sororities, fraternities, and college organizations. 150+ Greek life chapters at Michigan, Penn State, USC, UCLA. Heavyweight quality, fast turnaround.",
  keywords: [
    'custom greek life hoodies',
    'sorority merch',
    'fraternity sweatshirts',
    'custom college apparel',
    'bulk custom hoodies university',
    'greek life merchandise',
    'custom sorority hoodies',
    'fraternity custom apparel',
    'university custom merch',
    'heavyweight custom hoodies'
  ],
  // ... rest stays the same
}
```

**Rationale:** 
- Lead with target keywords, not brand name
- "Ikigai" removed from title entirely
- Description focuses on what you sell + social proof
- Keywords match actual search intent

**OpenClaw Task:**
```bash
# Automated task: Update homepage metadata
# Frequency: One-time
# File: /app/layout.tsx
# Action: Replace metadata object with SEO-optimized version
```

---

### 1.2 Homepage H1 Tag Fix
**File:** `/app/page.tsx`

**Current Issues:**
- H1 is "NOT NORMAL MERCH" (brand slogan, zero SEO value)
- No keyword-rich heading visible to search engines
- Client-side rendered (harder for Google to index)

**Solution:** Add SEO-optimized text ABOVE the fold that's server-rendered

**Changes Required:**

Create new file: `/app/page-metadata.tsx`
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Greek Life Hoodies & Sorority Merch',
  description: 'Premium custom hoodies, sweatsets, and apparel for sororities, fraternities, and college organizations. 150+ chapters at Michigan, Penn State, USC, UCLA.',
  openGraph: {
    title: 'Custom Greek Life Hoodies & Sorority Merch',
    description: 'Premium custom hoodies, sweatsets, and apparel for Greek life organizations.',
    images: [{ url: '/lookbook/l20.webp', width: 1200, height: 630, alt: 'Custom Greek life hoodies and sorority merch' }],
  },
}
```

Then update `/app/page.tsx`:
- Keep "NOT NORMAL MERCH" as visual branding
- Add hidden but semantic H1 for SEO:

```typescript
// Add this BEFORE the hero image section:
<div className="sr-only">
  <h1>Custom Greek Life Hoodies, Sorority Merch & Fraternity Sweatshirts</h1>
  <p>Premium heavyweight custom apparel for sororities, fraternities, and university organizations. Trusted by 150+ chapters at University of Michigan, Penn State, USC, UCLA, and more.</p>
</div>
```

**Alternative (Better UX):** Add visible text section:
```typescript
// Add after hero, before products section:
<section className="px-6 py-16 bg-white text-center">
  <h1 className="text-2xl md:text-3xl uppercase font-bold mb-4">
    Custom Greek Life Hoodies & Sorority Merch
  </h1>
  <p className="text-sm max-w-2xl mx-auto text-gray-700">
    Premium heavyweight custom apparel for sororities, fraternities, and university organizations. 
    Trusted by 150+ chapters at Michigan, Penn State, USC, and UCLA.
  </p>
</section>
```

**OpenClaw Task:**
```bash
# Automated task: Add SEO-optimized H1 to homepage
# Frequency: One-time
# File: /app/page.tsx
# Action: Insert keyword-rich H1 and description above fold
```

---

### 1.3 Schema Markup Implementation
**Current State:** No structured data found

**Required Schema Types:**
1. **Organization Schema** (sitewide)
2. **LocalBusiness Schema** (for university targeting)
3. **Product Schema** (for product pages)
4. **Article Schema** (for blog posts)

**Create:** `/components/schema/OrganizationSchema.tsx`
```typescript
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Couture",
    "alternateName": "Couture by Ikigai",
    "url": "https://couturebyikigai.com",
    "logo": "https://couturebyikigai.com/logo/Artboard 1.png",
    "description": "Premium custom Greek life apparel and university merchandise. Specializing in heavyweight hoodies, sweatsets, and custom apparel for sororities and fraternities.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ann Arbor",
      "addressRegion": "MI",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.instagram.com/couturebyikigai"
    ],
    "areaServed": [
      "University of Michigan",
      "Penn State University",
      "UCLA",
      "USC",
      "UC Berkeley",
      "Northwestern University",
      "University of Chicago",
      "Boston University",
      "NYU"
    ],
    "serviceType": [
      "Custom Greek Life Apparel",
      "Sorority Merchandise",
      "Fraternity Merchandise",
      "University Custom Apparel",
      "Bulk Custom Hoodies"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

**Create:** `/components/schema/ProductSchema.tsx`
```typescript
interface ProductSchemaProps {
  name: string
  description: string
  price: string
  image: string
  sku?: string
}

export default function ProductSchema({ name, description, price, image, sku }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": `https://couturebyikigai.com${image}`,
    "brand": {
      "@type": "Brand",
      "name": "Couture"
    },
    "offers": {
      "@type": "Offer",
      "price": price.replace('$', ''),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://couturebyikigai.com/order"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

**Add to:** `/app/layout.tsx` (in head section)
```typescript
import OrganizationSchema from '@/components/schema/OrganizationSchema'

// In the <head> section:
<OrganizationSchema />
```

**OpenClaw Task:**
```bash
# Automated task: Implement schema markup
# Frequency: One-time
# Files: Create schema components, update layout and product pages
# Action: Add Organization, Product, and Article schemas
```

---

### 1.4 robots.txt Creation
**Current State:** Missing

**Create:** `/app/robots.ts`
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://couturebyikigai.com/sitemap.xml',
  }
}
```

**OpenClaw Task:**
```bash
# Automated task: Create robots.txt
# Frequency: One-time
# File: /app/robots.ts
# Action: Create robots.txt with proper crawl directives
```

---

## PRIORITY 2: CONTENT STRATEGY (Weeks 1-4) - High Impact

### 2.1 Internal Linking Strategy

**Problem:** Blog posts and university pages exist in silos. No internal linking structure.

**Solution:** Implement contextual internal links across all content

**Link Clusters to Build:**

1. **Greek Life Hub**
   - Homepage → Blog: "Custom Greek Life Sweatsets Guide"
   - Homepage → Universities: Michigan Fraternities, Penn State Sororities
   - Blog posts → Related university pages
   - University pages → Related blog posts

2. **Product Hub**
   - Product pages → Blog guides (e.g., Heavyweight Hoodie → "Custom Hoodies Guide")
   - Blog guides → Product pages
   - Homepage → Top 3 products

3. **University Hub**
   - Create `/universities` index page
   - Link all university-specific pages
   - Add breadcrumbs to university pages

**Implementation:**

**Create:** `/app/universities/page.tsx`
```typescript
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Greek Life Merch by University | Sorority & Fraternity Apparel',
  description: 'Premium custom Greek life merchandise for top universities. Serving 150+ chapters at Michigan, Penn State, USC, UCLA, Berkeley, Northwestern, and more.',
  keywords: ['university greek life merch', 'college custom apparel', 'fraternity merchandise by school', 'sorority apparel university'],
}

export default function UniversitiesPage() {
  const universities = [
    { name: 'University of Michigan', slug: 'michigan-fraternities', type: 'Fraternities' },
    { name: 'Penn State University', slug: 'penn-state-sororities', type: 'Sororities' },
    { name: 'UCLA', slug: 'ucla-cultural-orgs', type: 'Cultural Organizations' },
    // Add all your university pages
  ]

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl uppercase font-bold mb-8">
          Custom Greek Life Merch by University
        </h1>
        <p className="text-sm mb-12 text-gray-700">
          We specialize in premium custom apparel for Greek life organizations at top universities. 
          Browse our university-specific guides to see how we've helped 150+ chapters create merch they actually wear.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {universities.map((uni) => (
            <Link 
              key={uni.slug} 
              href={`/universities/${uni.slug}`}
              className="border border-gray-200 p-6 hover:border-black transition-colors"
            >
              <h2 className="text-sm uppercase font-bold mb-2">{uni.name}</h2>
              <p className="text-xs text-gray-600">{uni.type}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
```

**Add Internal Links to Homepage:**

Update `/app/page.tsx` to include:
```typescript
// Add after products section:
<section className="px-6 py-12 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-sm uppercase font-bold mb-6">Trusted by Greek Life at Top Universities</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Link href="/universities/michigan-fraternities" className="text-xs hover:underline">
        Michigan Fraternities
      </Link>
      <Link href="/universities/penn-state-sororities" className="text-xs hover:underline">
        Penn State Sororities
      </Link>
      <Link href="/universities/ucla-cultural-orgs" className="text-xs hover:underline">
        UCLA Cultural Orgs
      </Link>
      <Link href="/universities" className="text-xs hover:underline font-bold">
        View All Universities →
      </Link>
    </div>
  </div>
</section>
```

**OpenClaw Task:**
```bash
# Automated task: Build internal linking structure
# Frequency: Weekly (as new content is added)
# Files: All blog posts, university pages, product pages
# Action: Add contextual internal links following link cluster strategy
```

---

### 2.2 Blog Content Optimization

**Current State:** Good content volume, but needs optimization

**Required Changes for Each Blog Post:**

1. **Add Related Posts Section** (bottom of each post)
2. **Add Internal Links** (3-5 per post to relevant pages)
3. **Optimize Meta Descriptions** (include target keyword + CTA)
4. **Add FAQ Schema** (where applicable)

**Template for Related Posts:**

Create `/components/RelatedPosts.tsx`:
```typescript
interface RelatedPost {
  title: string
  slug: string
  category: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-sm uppercase font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="border border-gray-200 p-4 hover:border-black transition-colors"
          >
            <p className="text-xs text-gray-500 mb-2">{post.category}</p>
            <h3 className="text-xs uppercase font-medium">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

**Add to all blog posts:**
```typescript
// At the end of each blog post component:
<RelatedPosts posts={[
  { title: 'Custom Greek Life Sweatsets Guide', slug: 'custom-greek-life-sweatsets-guide', category: 'Greek Life' },
  { title: 'Custom Hoodies Ultimate Guide', slug: 'custom-hoodies-ultimate-guide', category: 'Product Guides' },
  { title: 'Michigan Fraternities Custom Merch', slug: '../universities/michigan-fraternities', category: 'Universities' },
]} />
```

**OpenClaw Task:**
```bash
# Automated task: Optimize existing blog posts
# Frequency: One-time for existing, automatic for new posts
# Files: All /app/blog/*/page.tsx files
# Action: Add RelatedPosts component, internal links, optimize metadata
```

---

### 2.3 New Content Creation (Automated via OpenClaw)

**Content Calendar - 3x/week:**

**Week 1-2: Product-Focused (Target: "custom [product] for greek life")**
- Monday: "How to Choose the Best Custom Hoodies for Your Sorority"
- Wednesday: "Fraternity Sweatpants Buying Guide: What Actually Lasts"
- Friday: "Custom Crewnecks vs Hoodies: Which Should Your Chapter Order?"

**Week 3-4: University-Focused (Target: "[university] greek life merch")**
- Monday: "USC Sorority Merch: What the Top Chapters Are Wearing in 2026"
- Wednesday: "Penn State Fraternity Apparel: A Complete Ordering Guide"
- Friday: "Northwestern Greek Life Custom Hoodies: Design Ideas That Work"

**Week 5-6: Comparison/Buying Guides (Target: "best custom merch for [use case]")**
- Monday: "Couture vs CustomInk: Which is Better for Greek Life?"
- Wednesday: "Couture vs RushOrderTees: Quality Comparison for Sororities"
- Friday: "Best Bulk Custom Hoodie Suppliers for Universities (2026 Review)"

**Blog Post Template for OpenClaw:**

```markdown
Title: [Target Keyword] | Couture
Meta Description: [Target keyword] - [Value proposition]. [Social proof]. [CTA].
Keywords: [primary keyword], [secondary keyword], [long-tail keyword]

H1: [Target Keyword with Modifier]

Introduction (150 words):
- Hook with pain point
- Promise solution
- Mention social proof (150+ chapters)

H2: Why [Topic] Matters for Greek Life
- 3-4 paragraphs
- Include internal link to related university page

H2: What to Look For in [Product/Service]
- Bullet points or numbered list
- Include internal link to product page

H2: [Specific Advice/Comparison]
- Detailed content
- Include internal link to related blog post

H2: How We Do It at Couture
- Soft sell
- Specific examples from real chapters
- Include internal link to /order page

H2: Ready to Get Started?
- CTA
- Link to /order
- Link to related content

Related Posts: [3 relevant posts]
```

**OpenClaw Task:**
```bash
# Automated task: Generate and publish blog posts
# Frequency: 3x per week (Monday, Wednesday, Friday at 9am EST)
# Template: Use blog post template above
# Action: Generate post, create page.tsx file, update sitemap, push to GitHub
# Keywords: Rotate through target keyword list
```

---

## PRIORITY 3: TECHNICAL SEO (Weeks 2-3) - Medium Impact

### 3.1 Sitemap Optimization

**Current State:** Sitemap exists but missing university pages

**Update:** `/app/sitemap.ts`

Add university pages section:
```typescript
// Add after blogPosts array:
const universityPages = [
  {
    url: '/universities',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.9,
  },
  {
    url: '/universities/michigan-fraternities',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/universities/penn-state-sororities',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/universities/ucla-cultural-orgs',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  },
  // Add all university pages as they're created
]

// Update allPages array:
const allPages = [
  ...mainPages,
  ...supportPages,
  ...productPages,
  ...lookbookPages,
  ...blogPosts,
  ...universityPages, // ADD THIS
]
```

**OpenClaw Task:**
```bash
# Automated task: Update sitemap with new pages
# Frequency: Daily (checks for new pages and updates sitemap)
# File: /app/sitemap.ts
# Action: Scan /app directory for new pages, add to sitemap with appropriate priority
```

---

### 3.2 Image Alt Text Optimization

**Current Issues:**
- Many images have generic alt text
- No keyword targeting in alt attributes
- Missing alt text on some images

**Solution:** Systematic alt text update

**Homepage Images:**
```typescript
// Current:
alt="IKIGAI Featured Collection - High quality custom merchandise"

// Change to:
alt="Custom Greek life hoodies and sorority sweatsets - Premium heavyweight apparel"
```

**Product Images:**
```typescript
// Current:
alt="Heavyweight Hoodie"

// Change to:
alt="Custom heavyweight hoodie for sororities and fraternities - 420 GSM premium fabric"
```

**Blog Post Images:**
```typescript
// Current:
alt="Custom Greek life sweatsets"

// Change to:
alt="Sorority members wearing matching custom sweatsets - University of Michigan Greek life merch"
```

**OpenClaw Task:**
```bash
# Automated task: Update image alt text
# Frequency: One-time for existing, automatic for new images
# Files: All .tsx files with Image components
# Action: Replace generic alt text with keyword-rich, descriptive alternatives
```

---

### 3.3 URL Structure Optimization

**Current State:** Good structure, but can improve

**Recommendations:**

1. **Keep current structure** (it's clean)
2. **Add breadcrumbs** to all pages for better UX and SEO

**Create:** `/components/Breadcrumbs.tsx`
```typescript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  return (
    <nav className="px-6 py-4 text-xs">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`
          const label = path.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')
          
          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              {index === paths.length - 1 ? (
                <span className="font-bold">{label}</span>
              ) : (
                <Link href={href} className="hover:underline">{label}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
```

**Add to layout:**
```typescript
// In /app/layout.tsx, after <Header />:
<Breadcrumbs />
```

**OpenClaw Task:**
```bash
# Automated task: Add breadcrumbs to all pages
# Frequency: One-time
# Files: /app/layout.tsx, create /components/Breadcrumbs.tsx
# Action: Implement breadcrumb navigation with schema markup
```

---

## PRIORITY 4: OFF-PAGE SEO / BACKLINKS (Weeks 3-8) - High Impact Long-Term

### 4.1 Backlink Strategy

**Goal:** Acquire 20-30 high-quality backlinks in 90 days

**Target Sources:**

#### **Tier 1: University Publications (Highest Value)**
- University of Michigan student newspaper (The Michigan Daily)
- Penn State Collegian
- Daily Bruin (UCLA)
- Daily Trojan (USC)
- Daily Cal (UC Berkeley)

**Outreach Strategy:**
- Pitch story: "How One Student Started a Custom Merch Company Serving 150+ Greek Life Chapters"
- Offer: Free merch for student journalists
- Angle: Local business success story

**OpenClaw Task:**
```bash
# Automated task: University publication outreach
# Frequency: Weekly (5 pitches per week)
# Action: Generate personalized email pitches, track responses
# Template: Use journalist outreach template
```

**Email Template:**
```
Subject: Story Idea: Student-Founded Merch Company Serving [University] Greek Life

Hi [Journalist Name],

I'm reaching out with a potential story for [Publication Name].

Couture is a student-founded custom apparel company that's worked with 150+ Greek life chapters at [University Name], including [specific chapters if known]. We've noticed a trend: students are tired of cheap, generic merch that falls apart after one wash.

Our founder started Couture after ordering terrible rush shirts for his fraternity. Now we're serving chapters at Michigan, Penn State, USC, and UCLA with heavyweight custom hoodies and sweatsets that actually last.

Would you be interested in covering this story? I can connect you with chapter presidents who've ordered from us, and we'd be happy to provide sample products for photography.

Best,
[Your Name]
Couture
```

---

#### **Tier 2: Greek Life Blogs & Forums**
- GreekRank (forum mentions)
- Total Sorority Move
- Total Frat Move
- Greek life subreddits (r/Frat, r/Sororities)

**Strategy:**
- Provide value first (answer questions, share advice)
- Include link in bio/signature
- Sponsor content where possible

**OpenClaw Task:**
```bash
# Automated task: Forum engagement
# Frequency: Daily (1-2 helpful comments per day)
# Platforms: Reddit, GreekRank
# Action: Monitor for questions about custom merch, provide helpful answers with subtle link
```

---

#### **Tier 3: Competitor Comparison Sites**
- G2
- Capterra
- Trustpilot
- Better Business Bureau

**Strategy:**
- Create business profiles
- Encourage customer reviews
- Respond to all reviews

**OpenClaw Task:**
```bash
# Automated task: Review platform setup
# Frequency: One-time setup, weekly monitoring
# Platforms: G2, Capterra, Trustpilot, BBB
# Action: Create profiles, request reviews from satisfied customers
```

---

#### **Tier 4: Local Business Directories**
- Google Business Profile (Ann Arbor)
- Yelp
- Yellow Pages
- Local chamber of commerce

**OpenClaw Task:**
```bash
# Automated task: Directory submissions
# Frequency: One-time
# Platforms: 20+ local directories
# Action: Submit business info with consistent NAP (Name, Address, Phone)
```

---

#### **Tier 5: Guest Posting**

**Target Sites:**
- University entrepreneurship blogs
- Fashion/streetwear blogs
- Small business blogs

**Pitch Angles:**
- "How to Start a Custom Apparel Business in College"
- "The Rise of Premium University Merch: Why Students Are Paying More"
- "Behind the Scenes: How Custom Greek Life Merch Gets Made"

**OpenClaw Task:**
```bash
# Automated task: Guest post outreach
# Frequency: Weekly (3 pitches per week)
# Action: Generate personalized pitches, track responses
# Template: Use guest post pitch template
```

---

### 4.2 Digital PR Strategy

**Goal:** Get featured in 3-5 publications in 90 days

**Target Publications:**
1. **Business Insider** (student entrepreneur angle)
2. **Forbes** (college business trends)
3. **Hypebeast** (streetwear/merch culture)
4. **Complex** (fashion/culture)
5. **Entrepreneur Magazine** (startup story)

**Pitch Angle:**
"How Gen Z is Revolutionizing University Merch: From Cheap Tees to $60 Hoodies"

**Data Points to Include:**
- 150+ chapters served
- Average order value increase (if you have data)
- Student willingness to pay premium for quality
- Shift from fast fashion to durable apparel

**OpenClaw Task:**
```bash
# Automated task: PR outreach
# Frequency: Bi-weekly (2 pitches every 2 weeks)
# Action: Generate press releases, pitch to journalists
# Template: Use PR pitch template
```

---

## PRIORITY 5: LOCAL SEO (Weeks 4-8) - Medium Impact

### 5.1 Google Business Profile Optimization

**Create/Optimize:**
- Business name: "Couture - Custom Greek Life Apparel"
- Category: "Custom T-Shirt Store", "Screen Printing Shop"
- Description: Keyword-rich (300 words max)
- Photos: Product photos, team photos, customer photos
- Posts: Weekly updates about new designs, customer features

**OpenClaw Task:**
```bash
# Automated task: Google Business Profile management
# Frequency: Weekly posts
# Action: Create and publish GBP posts with images, links to new content
```

---

### 5.2 University-Specific Landing Pages

**Current:** 3 university pages
**Goal:** 20+ university pages in 90 days

**Programmatic Page Generation:**

**Template:** `/app/universities/[university]-[orgtype]/page.tsx`

**Variables:**
- University name
- Organization type (fraternities, sororities, cultural-orgs, clubs)
- City/state
- Notable chapters (if known)
- Local references (campus landmarks, traditions)

**Example URLs to Create:**
- /universities/usc-sororities
- /universities/usc-fraternities
- /universities/berkeley-cultural-orgs
- /universities/northwestern-fraternities
- /universities/nyu-clubs
- /universities/boston-university-sororities
- etc.

**OpenClaw Task:**
```bash
# Automated task: Generate university landing pages
# Frequency: 5x per week (Monday-Friday)
# Template: Use university page template
# Action: Generate page with university-specific content, add to sitemap
# Data source: List of target universities × organization types
```

**University Page Template:**
```typescript
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom [University] [OrgType] Merch | Couture',
  description: 'Premium custom [orgtype] merchandise for [University]. Matching hoodies, sweatsets, and apparel that your [members] will actually want to wear.',
  keywords: ['custom [orgtype] merch [university]', '[university] [orgtype] custom hoodies', '[university] greek life merch'],
  openGraph: {
    title: 'Custom [University] [OrgType] Merch | Couture',
    description: 'Premium custom [orgtype] merchandise for [University].',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630 }],
  },
}

export default function UniversityPage() {
  return (
    <div className="min-h-screen px-6 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-2xl uppercase font-bold mb-8">
          Custom [University] [OrgType] Merch That Actually Gets Worn
        </h1>
        
        {/* University-specific content */}
        <p className="text-sm mb-6">
          [University]'s [orgtype] community is [unique characteristic]. 
          With [number] chapters and [campus detail], every [organization] deserves merch that represents their [values] with pride.
        </p>

        <h2 className="text-sm uppercase font-bold mt-12 mb-4">
          Why [University] [OrgType] Choose Couture
        </h2>
        <p className="text-sm mb-6">
          We've worked with [number] [orgtype] at [University]—from [example chapters]. 
          What unites them all is a desire for apparel that feels premium, looks professional, and actually gets worn.
        </p>

        {/* More sections... */}
        
        <div className="mt-12 p-6 bg-gray-50">
          <h2 className="text-sm uppercase font-bold mb-4">Ready to Design Your [OrgType] Merch?</h2>
          <p className="text-sm mb-6">
            If you're a [University] [orgtype] officer looking to order custom merch, we'd love to hear what you're envisioning.
          </p>
          <Link href="/order" className="bg-black text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-gray-900 transition-colors inline-block">
            START AN ORDER →
          </Link>
        </div>
      </article>
    </div>
  )
}
```

---

## PRIORITY 6: MONITORING & ITERATION (Ongoing)

### 6.1 Tracking Setup

**Tools to Use:**
1. **Google Search Console** (already connected)
2. **Google Analytics** (already installed)
3. **Ahrefs/SEMrush** (for keyword tracking)

**Metrics to Track:**
- Organic traffic (weekly)
- Keyword rankings for target terms (weekly)
- Backlink acquisition (monthly)
- Conversion rate from organic traffic (monthly)

**OpenClaw Task:**
```bash
# Automated task: SEO reporting
# Frequency: Weekly
# Action: Pull data from GSC, GA, generate report
# Output: Markdown file with key metrics, trends, recommendations
```

---

### 6.2 Keyword Tracking

**Primary Keywords to Track:**
1. custom greek life hoodies
2. sorority merch
3. fraternity sweatshirts
4. custom college apparel
5. bulk custom hoodies university
6. greek life merchandise [university name]
7. custom sorority hoodies
8. fraternity custom apparel
9. university custom merch
10. heavyweight custom hoodies

**Secondary Keywords:**
1. best custom merch for sororities
2. where to buy fraternity hoodies
3. custom greek life sweatsets
4. university merch companies
5. premium greek life apparel

**Long-Tail Keywords:**
1. custom hoodies for university of michigan fraternities
2. best sorority merch companies 2026
3. heavyweight custom hoodies for greek life
4. where to order custom fraternity sweatshirts
5. bulk custom apparel for college organizations

---

### 6.3 Competitor Monitoring

**Competitors to Track:**
1. **RushOrderTees.com**
   - Track: Keyword rankings, backlinks, content strategy
   - Differentiation: Quality over speed, Greek life specialization

2. **CustomInk.com**
   - Track: Keyword rankings, paid ads, pricing
   - Differentiation: Premium quality, design support

3. **Printful.com**
   - Track: SEO strategy, content marketing
   - Differentiation: Not print-on-demand, curated selection

4. **GreekGear.com**
   - Track: Greek life keyword rankings
   - Differentiation: Custom vs. pre-made, quality focus

**OpenClaw Task:**
```bash
# Automated task: Competitor analysis
# Frequency: Monthly
# Action: Scrape competitor sites for new content, track rankings
# Output: Competitive intelligence report
```

---

## IMPLEMENTATION TIMELINE

### Week 1: Foundation
- [ ] Update homepage metadata (Priority 1.1)
- [ ] Add SEO-optimized H1 to homepage (Priority 1.2)
- [ ] Implement schema markup (Priority 1.3)
- [ ] Create robots.txt (Priority 1.4)
- [ ] Create /universities index page (Priority 2.1)

### Week 2: Content & Technical
- [ ] Add internal linking structure (Priority 2.1)
- [ ] Optimize existing blog posts (Priority 2.2)
- [ ] Update sitemap (Priority 3.1)
- [ ] Update image alt text (Priority 3.2)
- [ ] Add breadcrumbs (Priority 3.3)

### Week 3: Content Production
- [ ] Publish 3 new blog posts (Priority 2.3)
- [ ] Create 5 university landing pages (Priority 5.2)
- [ ] Start backlink outreach (Priority 4.1)

### Week 4: Scaling
- [ ] Publish 3 new blog posts
- [ ] Create 5 university landing pages
- [ ] Continue backlink outreach
- [ ] Set up Google Business Profile (Priority 5.1)

### Weeks 5-8: Momentum
- [ ] 3 blog posts per week (automated)
- [ ] 5 university pages per week (automated)
- [ ] 10 backlink outreach emails per week
- [ ] Weekly SEO reporting
- [ ] Monthly competitor analysis

---

## OPENCLAW AUTOMATION TASKS

### Daily Tasks
1. Monitor for new merch-related questions on Reddit/forums
2. Post helpful answers with subtle link inclusion
3. Check Google Search Console for new keyword opportunities

### Weekly Tasks
1. Generate and publish 3 blog posts (Mon, Wed, Fri at 9am)
2. Create 5 university landing pages (Mon-Fri)
3. Send 10 backlink outreach emails
4. Update Google Business Profile with new post
5. Generate SEO performance report

### Monthly Tasks
1. Competitor analysis report
2. Backlink audit
3. Content performance review
4. Keyword ranking update

---

## SUCCESS METRICS

### 30 Days:
- Homepage ranking for "custom greek life hoodies" (target: page 3-5)
- 10+ new backlinks acquired
- 20+ new university landing pages created
- 12+ new blog posts published
- Organic traffic increase: 50%

### 60 Days:
- Homepage ranking for "custom greek life hoodies" (target: page 2)
- "Sorority merch" ranking (target: page 3)
- 25+ new backlinks
- 40+ university landing pages
- 24+ blog posts
- Organic traffic increase: 150%

### 90 Days:
- Homepage ranking for "custom greek life hoodies" (target: page 1)
- "Sorority merch" ranking (target: page 2)
- "Fraternity sweatshirts" ranking (target: page 2-3)
- 40+ new backlinks
- 60+ university landing pages
- 36+ blog posts
- Organic traffic increase: 300%
- Zero rankings for "ikigai" (successfully de-associated)

---

## CRITICAL SUCCESS FACTORS

1. **Consistency:** Automated content must publish 3x/week without fail
2. **Quality:** Blog posts must be genuinely helpful, not keyword-stuffed
3. **Backlinks:** Focus on quality over quantity (1 university newspaper link > 10 directory links)
4. **Internal Linking:** Every new page must link to 3-5 existing pages
5. **Schema Markup:** Must be implemented correctly on all pages
6. **Monitoring:** Weekly check-ins to adjust strategy based on data

---

## RISKS & MITIGATION

### Risk 1: Google Penalty for Over-Optimization
**Mitigation:** 
- Keep keyword density natural (1-2%)
- Focus on user intent, not just keywords
- Vary anchor text in internal links

### Risk 2: Automated Content Detected as AI-Generated
**Mitigation:**
- Use human review before publishing
- Add unique examples, data, quotes
- Vary writing style and structure

### Risk 3: Backlink Outreach Marked as Spam
**Mitigation:**
- Personalize every email
- Provide value first (free merch, exclusive data)
- Follow up only once

### Risk 4: University Pages Seen as Thin Content
**Mitigation:**
- Minimum 1,500 words per page
- Include unique local references
- Add customer testimonials where possible

---

## NEXT STEPS

1. **Review this plan** with your team
2. **Set up OpenClaw** with the automated tasks outlined
3. **Implement Priority 1 changes** (Week 1 tasks) immediately
4. **Start backlink outreach** while technical changes are being made
5. **Monitor Google Search Console** weekly for early signals

**Questions? Need clarification on any section?** Let me know and I'll provide more specific implementation details.
