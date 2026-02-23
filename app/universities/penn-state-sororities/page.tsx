import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom Penn State Sorority Merch | Couture by Ikigai',
  description: 'Premium custom sorority merchandise for Penn State chapters. Matching hoodies, sweatsets, and apparel that your sisters will actually want to wear.',
  keywords: ['custom sorority merch Penn State', 'Penn State sorority custom hoodies', 'PSU sorority merchandise', 'Penn State Greek life merch', 'custom sorority apparel Penn State'],
  openGraph: {
    title: 'Custom Penn State Sorority Merch | Couture by Ikigai',
    description: 'Premium custom sorority merchandise for Penn State chapters. Matching hoodies, sweatsets, and apparel that your sisters will actually want to wear.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Custom Penn State sorority merch' }],
  },
}

export default function PennStateSororitiesPage() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">← BACK TO UNIVERSITIES</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom Penn State Sorority Merch That Actually Gets Worn</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 23, 2026</p>
            <p className="text-xs">5 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom Penn State sorority merch" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">Penn State's Greek life scene is one of the largest in the country, with over 50 sororities calling University Park home. From the iconic "University Park" sprawled across campus to the tight-knit sisterhoods that define the Penn State experience, every chapter deserves merch that represents their identity with pride. But here's the thing most chapter officers discover the hard way: not all custom sorority merchandise is created equal.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Why Penn State Sororities Choose Couture</h2>
          <p className="text-xs mb-6">We've worked with dozens of Penn State sororities—from established Panhellenic chapters to newer colonies finding their footing. What they all have in common is a desire for apparel that feels premium, looks professional, and actually gets worn beyond just formal events.</p>

          <p className="text-xs mb-6">The Penn State campus presents unique considerations for sorority merchandise. With cold winters that stretch from November through March, heavy-weight hoodies and sweatsets aren't just nice to have—they're essential. Your sisters are walking from classes to the HUB, braving the elements at Beaver Stadium events, and hanging out at houses that can get drafty. Merch that feels substantial enough for everyday wear wins.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What Penn State Chapters Actually Order</h2>
          <p className="text-xs mb-6">Based on our experience with Penn State sororities, there are a few go-to products that consistently perform well:</p>

          <p className="text-xs mb-6"><strong>Matching Sweatsets:</strong> The gold standard for Penn State sororities. A matching hoodie and jogger combo in your chapter's colors creates that instant visual unity that looks incredible on Bid Day, philanthropy events, and chapter sisterhoods. We've done custom sweatsets for Alpha Phi, Kappa Kappa Gamma, and Delta Gamma chapters at PSU—all with designs that sisters actually reach for.</p>

          <p className="text-xs mb-6"><strong>Quarter-Zip Pullovers:</strong> Perfect for those in-between weather days when a full hoodie feels like too much. These work great for recruitment events where you want to look put-together but still cohesive.</p>

          <p className="text-xs mb-6"><strong>Chapter Letters on Premium Blanks:</strong> The classic approach never goes out of style. We source heavyweight blanks—think 420 GSM fabric similar to what you'd find at high-end streetwear brands—so the letters drape properly rather than looking cheap or flimsy.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Considerations for Penn State</h2>
          <p className="text-xs mb-6">Penn State has a distinctive visual identity, and your sorority merch should complement it rather than compete with it. Here's what works:</p>

          <p className="text-xs mb-6"><strong>Chapter Letters:</strong> Big, bold, across the chest or centered on the back. This is the most popular choice for a reason—it instantly identifies your chapter and creates that instant recognition.</p>

          <p className="text-xs mb-6"><strong>Penn State Reference:</strong> Some chapters incorporate subtle nods to the university—the Nittany Lion, "Penn State" text, or class years. Keep it minimal though; you want your chapter identity to be the star.</p>

          <p className="text-xs mb-6"><strong>Chapter Symbols:</strong> If your sorority has a recognizable symbol or mascot, embroidered details add a premium touch. Just don't overdo it—a little goes a long way.</p>

          <p className="text-xs mb-6"><strong>Class Years:</strong> Especially popular for new member classes or graduation cohorts. "Class of 2028" sleeve text creates a sense of belonging and marks a specific moment in your chapter's history.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">The Penn State Greek Life Timeline</h2>
          <p className="text-xs mb-6">Timing matters when ordering sorority merchandise at Penn State. Here's what chapter officers need to know:</p>

          <p className="text-xs mb-6"><strong>Fall Semester:</strong> Bid Day in August is the biggest ordering push. Chapters want matching apparel for new members—typically 50-150 pieces depending on chapter size. Order by early July at the latest to ensure delivery before Bid Day.</p>

          <p className="text-xs mb-6"><strong>Spring Semester:</strong> Recruitment happens in January, so that's another peak period. Many chapters also order for spring formals, sisterhood events, and philanthropy initiatives.</p>

          <p className="text-xs mb-6"><strong>Year-Round:</strong> Chapters reorder throughout the year for events, officer transitions, and to accommodate growing memberships.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Quality That Lasts</h2>
          <p className="text-xs mb-6">The difference between merch that ends up in closets and merch that gets worn comes down to quality. We use heavyweight fabrics, reinforced stitching, and premium printing/embroidery techniques that hold up wash after wash.</p>

          <p className="text-xs mb-6">Penn State sisters are busy—classes, involvements, internships. They don't have time for merch that pills, fades, or loses its shape after a few wears. Our pieces are built to last through four years of campus life and beyond.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Ready to Design Your Chapter Merch?</h2>
          <p className="text-xs mb-6">If you're a Penn State sorority officer looking to order custom merch, we'd love to hear what you're envisioning. We've worked with chapters across the Penn State Greek community, and we know what designs resonate.</p>

          <p className="text-xs mb-6">Here's how it works: reach out with your chapter name, what type of merch you're interested in, and any design ideas you have. We'll get you a custom mockup within a few days. No pressure, no commitment—just a look at what your chapter merch could actually look like.</p>

          <p className="text-xs mb-6">Your sisters deserve apparel that makes them proud to represent your chapter. Let's make it happen.</p>
        </div>
      </article>
    </div>
  )
}
