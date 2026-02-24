import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata  title: 'Custom Michigan Fraternity Merch | Couture by Ikigai',
  description: 'Premium custom fraternity merchandise for Michigan fraternities. Matching hoodies, sweatsets, and apparel that your brothers will actually want to wear.',
  keywords: ['custom fraternity merch Michigan', 'Michigan fraternity custom hoodies', 'UMich Greek life merch', 'University of Michigan fraternity merchandise', 'custom fraternity apparel Ann Arbor'],
  openGraph: {
    title: 'Custom Michigan Fraternity Merch | Couture by Ikigai',
    description: 'Premium custom fraternity merchandise for Michigan fraternities. Matching hoodies, sweatsets, and apparel that your brothers will actually want to wear.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Custom Michigan fraternity merch' }],
  },
}

export default function MichiganFraternitiesPage() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">← BACK TO UNIVERSITIES</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom Michigan Fraternity Merch That Actually Gets Worn</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 24, 2026</p>
            <p className="text-xs">6 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom Michigan fraternity merch" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">The University of Michigan's Greek system is legendary—with over 60 fraternity chapters and a presence that spans nearly every corner of campus, the Michigan Greek community is one of the most vibrant in the nation. From the historic houses along Washtenaw Avenue to the newer chapters finding their home in Ann Arbor, every fraternity deserves merch that represents their brotherhood with pride. But here's what chapter officers quickly discover: ordering cheap, generic merchandise is a false economy. Your brothers deserve better.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Why Michigan Fraternities Choose Couture</h2>
          <p className="text-xs mb-6">We've worked with dozens of Michigan fraternities—from decades-old chapters with rich traditions to newer colonies building their legacy. What unites them all is a desire for apparel that feels premium, looks professional, and actually gets worn beyond just formal events and recruitment weekends.</p>

          <p className="text-xs mb-6">The Ann Arbor campus presents unique considerations for fraternity merchandise. Michigan weather is famously unpredictable—those crisp autumn days can suddenly give way to bitter winter cold, and spring often feels like an extension of winter. Heavy-weight hoodies, crewnecks, and sweatsets aren't just nice to have—they're essential. Your brothers are walking to classes on the Diag, braving the elements at Big House events, and representing their chapter around town. Merch that feels substantial enough for everyday wear wins.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What Michigan Chapters Actually Order</h2>
          <p className="text-xs mb-6">Based on our experience with Michigan fraternities, there are a few go-to products that consistently perform well:</p>

          <p className="text-xs mb-6"><strong>Matching Sweatsets:</strong> The gold standard for Michigan fraternities. A matching hoodie and jogger combo in your chapter's colors creates that instant visual unity that looks incredible on Bid Day, philanthropy events, and house functions. We've done custom sweatsets for Sigma Chi, Delta Kappa Epsilon, and Phi Kappa Psi chapters at U-M—all with designs that brothers actually reach for.</p>

          <p className="text-xs mb-6"><strong>Letterman Jackets:</strong> For those looking to make a statement, custom letterman jackets bring a timeless, collegiate aesthetic that never goes out of style. Perfect for formal events, alumni gatherings, or just flexing on campus.</p>

          <p className="text-xs mb-6"><strong>Premium Crewnecks and Hoodies:</strong> The classic approach. Heavyweight blanks—think 420 GSM fabric similar to what you'd find at high-end streetwear brands—so the letters drape properly rather than looking cheap or flimsy.</p>

          <p className="text-xs mb-6"><strong>Custom Caps and Hats:</strong> Embroidered dad hats and snapbacks with chapter letters are perfect for summer events, tailgates, and everyday wear. They're also great for recruitment—prospective new members love taking home something tangible.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Considerations for Michigan</h2>
          <p className="text-xs mb-6">Michigan has a distinctive visual identity, and your fraternity merch should complement it rather than compete with it. Here's what works:</p>

          <p className="text-xs mb-6"><strong>Chapter Letters:</strong> Big, bold, across the chest or centered on the back. This is the most popular choice for a reason—it instantly identifies your chapter and creates that instant recognition.</p>

          <p className="text-xs mb-6"><strong>Michigan Reference:</strong> Some chapters incorporate subtle nods to the university—the Block M, "Michigan" text, or graduation years. Keep it minimal though; you want your chapter identity to be the star.</p>

          <p className="text-xs mb-6"><strong>Founding Year:</strong> If your chapter has a historic founding date, adding it to your merch creates a sense of legacy and pride. Many Michigan chapters date back to the 1800s, and that history matters.</p>

          <p className="text-xs mb-6"><strong>Chapter Symbols:</strong> If your fraternity has a recognizable symbol or mascot, embroidered details add a premium touch. Just don't overdo it—a little goes a long way.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">The Michigan Greek Life Timeline</h2>
          <p className="text-xs mb-6">Timing matters when ordering fraternity merchandise at Michigan. Here's what chapter officers need to know:</p>

          <p className="text-xs mb-6"><strong>Fall Semester:</strong> Bid Day in August is the biggest ordering push. Chapters want matching apparel for new members—typically 50-150 pieces depending on chapter size. Order by early July at the latest to ensure delivery before Bid Day.</p>

          <p className="text-xs mb-6"><strong>Spring Semester:</strong> Recruitment happens in January, so that's another peak period. Many chapters also order for spring formals, philanthropy initiatives, and house events.</p>

          <p className="text-xs mb-6"><strong>Year-Round:</strong> Chapters reorder throughout the year for events, officer transitions, and to accommodate growing memberships.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Quality That Lasts</h2>
          <p className="text-xs mb-6">The difference between merch that ends up in closets and merch that gets worn comes down to quality. We use heavyweight fabrics, reinforced stitching, and premium printing/embroidery techniques that hold up wash after wash.</p>

          <p className="text-xs mb-6">Michigan brothers are busy—classes, internships, football Saturdays. They don't have time for merch that pills, fades, or loses its shape after a few wears. Our pieces are built to last through four years of campus life and beyond.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Ready to Design Your Chapter Merch?</h2>
          <p className="text-xs mb-6">If you're a Michigan fraternity officer looking to order custom merch, we'd love to hear what you're envisioning. We've worked with chapters across the Michigan Greek community, and we know what designs resonate.</p>

          <p className="text-xs mb-6">Here's how it works: reach out with your chapter name, what type of merch you're interested in, and any design ideas you have. We'll get you a custom mockup within a few days. No pressure, no commitment—just a look at what your chapter merch could actually look like.</p>

          <p className="text-xs mb-6">Your brothers deserve apparel that makes them proud to represent your chapter. Let's make it happen.</p>
        </div>
      </article>
    </div>
  )
}
