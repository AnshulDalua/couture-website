import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom NYU A Cappella Merch | Couture by Ikigai',
  description: 'Premium custom merchandise for NYU a cappella groups. Matching hoodies, sweatsets, and apparel that your group will actually want to wear.',
  keywords: ['custom a cappella merch NYU', 'NYU a cappella custom hoodies', 'New York University a cappella merchandise', 'NYU a cappella group apparel', 'custom a cappella sweatshirts NYU'],
  openGraph: {
    title: 'Custom NYU A Cappella Merch | Couture by Ikigai',
    description: 'Premium custom merchandise for NYU a cappella groups. Matching hoodies, sweatsets, and apparel that your group will actually want to wear.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Custom NYU a cappella merch' }],
  },
}

export default function NYUAcappellaPage() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">← BACK TO UNIVERSITIES</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom NYU A Cappella Merch That Actually Gets Worn</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 26, 2026</p>
            <p className="text-xs">7 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom NYU a cappella merch" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">New York University boasts one of the most vibrant a cappella scenes in the country. From the Grammy-nominated talents of the NYU a cappella groups that have competed on national stages to the smaller collegiate groups building their local following, the NYU a cappella community is a cornerstone of the university's musical identity. Whether you're part of a longstanding tradition like The Nymphs, Rhythm, or One APIs, or a newer group carving out your niche in the Greenwich Village music scene, your group deserves merchandise that represents your sound and your brand with pride.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Why NYU A Cappella Groups Choose Couture</h2>
          <p className="text-xs mb-6">We've worked with a cappella groups across the NYU campus—from established groups with decades of history to newer ensembles building their reputation. What unites them all is a desire for apparel that feels premium, looks professional, and actually gets worn beyond just gig nights and performances.</p>

          <p className="text-xs mb-6">The NYU environment presents unique considerations for a cappella merchandise. Manhattan's weather swings from humid summer heat to bitter winter cold, and your group needs apparel that works year-round. Whether you're performing at the skirll, walking through Washington Square Park, or heading to gigs across the city, your merch needs to be versatile enough for everyday wear while still looking polished enough for the stage.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What NYU A Cappella Groups Actually Order</h2>
          <p className="text-xs mb-6">Based on our experience with NYU a cappella groups, here are the products that consistently perform well:</p>

          <p className="text-xs mb-6"><strong>Matching Sweatsets:</strong> The gold standard for a cappella groups. A matching hoodie and jogger combo in your group's colors creates instant visual unity—perfect for concerts, recruitment events, and music video shoots. We've done custom sweatsets for NYU groups with bold designs that members actually reach for.</p>

          <p className="text-xs mb-6"><strong>Performance T-Shirts:</strong> For gig nights and performances, custom t-shirts with your group's name, logo, or album art create a cohesive look on stage. Premium blanks with quality prints ensure you look professional under the lights.</p>

          <p className="text-xs mb-6"><strong>Premium Crewnecks and Hoodies:</strong> The classic approach. Heavyweight blanks—so the design drapes properly rather than looking cheap or flimsy. Perfect for late-night rehearsal sessions in the Kimmel Center or walking between classes.</p>

          <p className="text-xs mb-6"><strong>Custom Hats and Caps:</strong> Embroidered dad hats and beanies with your group's name or logo are perfect for everyday wear, outdoor performances, and NYC street style. They're also great for merch tables at concerts.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Considerations for NYU A Cappella</h2>
          <p className="text-xs mb-6">NYU has a distinctive visual identity, and your a cappella merch should reflect your group's unique brand while complementing the NYU aesthetic:</p>

          <p className="text-xs mb-6"><strong>Group Name and Logo:</strong> Make your group's name the star. Bold, across the chest or centered on the back. Your logo should be crisp and recognizable—embroidered details add a premium touch.</p>

          <p className="text-xs mb-6"><strong>NYI Reference:</strong> Some groups incorporate subtle nods to NYU—the violet color, "NYU" text, or Washington Square Park imagery. Keep it minimal though; you want your group identity to be the star.</p>

          <p className="text-xs mb-6"><strong>Founding Year:</strong> If your group has a historic founding date, adding it to your merch creates a sense of legacy and pride. Many NYU a cappella groups date back decades, and that history matters.</p>

          <p className="text-xs mb-6"><strong>Song Titles or Album Names:</strong> If your group has released music, incorporating song titles or album art into your merch creates a deeper connection with your fans and members.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">The NYU A Cappella Timeline</h2>
          <p className="text-xs mb-6">Timing matters when ordering a cappella merchandise at NYU. Here's what group leaders need to know:</p>

          <p className="text-xs mb-6"><strong>Fall Semester:</strong> Recruitment season kicks off in September, with groups looking to add new members. Matching apparel for new members creates instant team unity—typically 20-50 pieces depending on group size. Order by early August to ensure delivery.</p>

          <p className="text-xs mb-6"><strong>Spring Semester:</strong> Concert season peaks in February through May, with many groups releasing new music or hosting semester shows. That's when merchandise demand spikes—order by December for spring shows.</p>

          <p className="text-xs mb-6"><strong>Year-Round:</strong> Groups reorder throughout the year for events, album releases, and to accommodate growing memberships.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Quality That Lasts</h2>
          <p className="text-xs mb-6">The difference between merch that ends up in closets and merch that gets worn comes down to quality. We use heavyweight fabrics, reinforced stitching, and premium printing/embroidery techniques that hold up wash after wash.</p>

          <p className="text-xs mb-6">NYU a cappella members are busy—classes, rehearsals, gigs, and performances. They don't have time for merch that pills, fades, or loses its shape after a few wears. Our pieces are built to last through four years of campus life and beyond.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Ready to Design Your Group Merch?</h2>
          <p className="text-xs mb-6">If you're an NYU a cappella group leader looking to order custom merch, we'd love to hear what you're envisioning. We've worked with groups across the NYU a cappella community, and we know what designs resonate with the NYC music scene.</p>

          <p className="text-xs mb-6">Here's how it works: reach out with your group name, what type of merch you're interested in, and any design ideas you have. We'll get you a custom mockup within a few days. No pressure, no commitment—just a look at what your group merch could actually look like.</p>

          <p className="text-xs mb-6">Your members deserve apparel that makes them proud to represent your group. Let's make it happen.</p>
        </div>
      </article>
    </div>
  )
}
