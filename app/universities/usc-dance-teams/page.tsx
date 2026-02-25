import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom USC Dance Team Merch | Couture by Ikigai',
  description: 'Premium custom dance team merchandise for USC Trojan dance teams. Matching hoodies, sweatsets, and apparel that your team will actually want to wear.',
  keywords: ['custom dance team merch USC', 'USC dance team custom hoodies', 'University of Southern California dance merch', 'USC Trojan dance team merchandise', 'custom dance team apparel Los Angeles'],
  openGraph: {
    title: 'Custom USC Dance Team Merch | Couture by Ikigai',
    description: 'Premium custom dance team merchandise for USC Trojan dance teams. Matching hoodies, sweatsets, and apparel that your team will actually want to wear.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Custom USC dance team merch' }],
  },
}

export default function USCDanceTeamsPage() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">← BACK TO UNIVERSITIES</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom USC Dance Team Merch That Turns Heads</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 25, 2026</p>
            <p className="text-xs">6 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom USC dance team merch" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">The University of Southern California boasts one of the most vibrant dance communities in the country. From the famed USC Dance Marathon to the competitive Trojan dance teams representing at basketball games and pep rallies, the dance scene at USC is as diverse as it is talented. Whether you're part of a competitive dance team, a recreational dance organization, or a cultural dance troupe, having custom merch that represents your crew is essential. But here's what team leaders quickly discover: cheap, generic merchandise doesn't cut it. Your dancers deserve better.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Why USC Dance Teams Choose Couture</h2>
          <p className="text-xs mb-6">We've worked with numerous dance teams and dance organizations at USC—from competitive teams competing at national levels to recreational groups just looking to build community through movement. What unites them all is a desire for apparel that feels premium, looks professional, and actually gets worn beyond just practice and performances.</p>

          <p className="text-xs mb-6">Los Angeles presents unique considerations for dance team merchandise. The Southern California weather means your merch needs to be versatile—lightweight enough for outdoor events and performances, but still stylish enough to wear around campus or at Trojan football games. Your dancers are representing USC at venues across LA, from the Galen Center to downtown LA events, so your merch needs to make a statement.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What USC Dance Teams Actually Order</h2>
          <p className="text-xs mb-6">Based on our experience with USC dance teams, there are a few go-to products that consistently perform well:</p>

          <p className="text-xs mb-6"><strong>Matching Sweatsets:</strong> The gold standard for USC dance teams. A matching hoodie and jogger combo in your team's colors creates that instant visual unity that looks incredible at competitions, team events, and campus functions. We've done custom sweatsets for various USC dance organizations—all with designs that dancers actually reach for.</p>

          <p className="text-xs mb-6"><strong>Performance Tees:</strong> Lightweight, breathable tees perfect for practice, warm-ups, and casual wear. Custom printing with your team name, logo, or choreography themes makes these stand out.</p>

          <p className="text-xs mb-6"><strong>Premium Crewnecks and Hoodies:</strong> The classic approach. Heavyweight blanks—so the design drapes properly rather than looking cheap or flimsy. Perfect for those early morning practices or late-night rehearsal sessions.</p>

          <p className="text-xs mb-6"><strong>Custom Caps and Hats:</strong> Embroidered dad hats and snapbacks with your team name are perfect for outdoor events, competitions, and everyday wear. They're also great for building team identity—dancers love taking home something tangible.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Considerations for USC Dance</h2>
          <p className="text-xs mb-6">USC has a distinctive visual identity, and your dance team merch should complement it rather than compete with it. Here's what works:</p>

          <p className="text-xs mb-6"><strong>Trojan Motifs:</strong> Some teams incorporate subtle nods to the university—the Trojan helmet, "USC" text, or cardinal/red colors. Keep it minimal though; you want your team identity to be the star.</p>

          <p className="text-xs mb-6"><strong>Movement Imagery:</strong> Dance is about movement, and incorporating dynamic elements like silhouettes, flowy lines, or choreography-inspired graphics adds visual interest that represents what your team does.</p>

          <p className="text-xs mb-6"><strong>Team Name:</strong> Big, bold, across the chest or centered on the back. This is the most popular choice for a reason—it instantly identifies your team and creates recognition.</p>

          <p className="text-xs mb-6"><strong>Competition Years:</strong> Adding competition years or season dates creates a sense of history and accomplishment. Many teams love to look back at where they've been.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">The USC Dance Calendar</h2>
          <p className="text-xs mb-6">Timing matters when ordering dance team merchandise at USC. Here's what team leaders need to know:</p>

          <p className="text-xs mb-6"><strong>Fall Semester:</strong> The school year kicks off with Welcome Week and club fairs, followed by the USC Dance Marathon. Teams want matching apparel for new member recruitment—typically 20-80 pieces depending on team size. Order by early August to ensure delivery.</p>

          <p className="text-xs mb-6"><strong>Winter Semester:</strong> Competition season ramps up, so that's another peak ordering period. Many teams also order for spring showcases, end-of-year performances, and team banquets.</p>

          <p className="text-xs mb-6"><strong>Year-Round:</strong> Teams reorder throughout the year for events, officer transitions, and to accommodate growing memberships.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Quality That Lasts</h2>
          <p className="text-xs mb-6">The difference between merch that ends up in closets and merch that gets worn comes down to quality. We use heavyweight fabrics, reinforced stitching, and premium printing/embroidery techniques that hold up wash after wash.</p>

          <p className="text-xs mb-6">USC dancers are busy—classes, rehearsals, performances. They don't have time for merch that pills, fades, or loses its shape after a few wears. Our pieces are built to last through four years of campus life and beyond.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Ready to Design Your Team Merch?</h2>
          <p className="text-xs mb-6">If you're a USC dance team leader looking to order custom merch, we'd love to hear what you're envisioning. We've worked with dance organizations across the USC campus, and we know what designs resonate.</p>

          <p className="text-xs mb-6">Here's how it works: reach out with your team name, what type of merch you're interested in, and any design ideas you have. We'll get you a custom mockup within a few days. No pressure, no commitment—just a look at what your team merch could actually look like.</p>

          <p className="text-xs mb-6">Your dancers deserve apparel that makes them proud to represent your team. Let's make it happen.</p>
        </div>
      </article>
    </div>
  )
}
