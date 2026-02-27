import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom UChicago Sports Club Merch | Couture by Ikigai',
  description: 'Premium custom merchandise for UChicago sports clubs. Matching hoodies, sweatsets, and apparel that your team will pride in wearing.',
  keywords: ['custom sports club merch UChicago', 'UChicago sports club custom hoodies', 'University of Chicago club sports merch', 'UChicago intramural merch', 'custom club athletics apparel Chicago'],
  openGraph: {
    title: 'Custom UChicago Sports Club Merch | Couture by Ikigai',
    description: 'Premium custom merchandise for UChicago sports clubs. Matching hoodies, sweatsets, and apparel that your team will pride in wearing.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Custom UChicago sports club merch' }],
  },
}

export default function UChicagoSportsClubsPage() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">← BACK TO UNIVERSITIES</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom UChicago Sports Club Merch That Brings Your Team Together</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 27, 2026</p>
            <p className="text-xs">6 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom UChicago sports club merch" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">The University of Chicago has one of the most vibrant club sports scenes in the country. Whether you're competing in the Midwest Conference, battling it out in intramural leagues, or just gathering your crew for weekly practices, there's something powerful about representing your team in matching apparel. At Couture by Ikigai, we've worked with countless UChicago sports clubs to create merch that players actually want to wear—not just on game day, but around campus and beyond.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Why UChicago Sports Clubs Choose Couture</h2>
          <p className="text-xs mb-6">UChicago athletes know what it means to balance academics and athletics. The quarter system moves fast, midterms hit hard, and game days are precious. When you're investing in team merchandise, you want pieces that genuinely reflect your team's identity and that members are proud to wear. We've helped club teams across dozens of sports—from ultimate frisbee and rugby to soccer, volleyball, and rowing—create custom apparel that hits different.</p>

          <p className="text-xs mb-6">Chicago weather doesn't mess around. Those crisp autumn afternoons on the Midway can quickly become bitter winter cold, and spring often feels like an extension of winter. Heavyweight hoodies, crewnecks, and matching sweatsets aren't optional—they're essential. Your team is walking to practice at Ratner, cheering from the stands at home games, and repping your colors around Hyde Park. Merch that feels substantial enough for everyday wear wins every time.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What UChicago Club Teams Actually Order</h2>
          <p className="text-xs mb-6">Based on our experience with UChicago sports clubs, there are a few go-to products that consistently perform well:</p>

          <p className="text-xs mb-6"><strong>Matching Sweatsets:</strong> The gold standard for team unity. A matching hoodie and jogger combo in your team's colors creates that instant visual cohesion that looks incredible on game days, team dinners, and end-of-season celebrations. We've done custom sweatsets for UChicago ultimate frisbee teams, rugby squads, and soccer clubs—all with designs that players actually reach for.</p>

          <p className="text-xs mb-6"><strong>Premium Hoodies and Crewnecks:</strong> The classic approach. Heavyweight blanks—so the letters and graphics drape properly rather than looking cheap or flimsy. Perfect for layering under jackets during cold Chicago winters or wearing to late-night study sessions after practice.</p>

          <p className="text-xs mb-6"><strong>Custom Tank Tops and Tees:</strong> Essential for spring and summer seasons. Whether you're competing in outdoor tournaments or playing indoor sports, lightweight custom tees and tanks keep your team looking sharp when temperatures rise.</p>

          <p className="text-xs mb-6"><strong>Team Caps and Beanies:</strong> Embroidered hats and beanies with your team name or logo are perfect for Chicago's unpredictable weather. They're also great for travel tournaments—prospective opponents always notice when a team shows up looking professional.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Considerations for UChicago</h2>
          <p className="text-xs mb-6">UChicago has a distinctive aesthetic, and your team merch should complement it rather than compete with it. Here's what works:</p>

          <p className="text-xs mb-6"><strong>Team Names and Logos:</strong> Big, bold, across the chest or centered on the back. Your team identity should be the star—make it instantly recognizable.</p>

          <p className="text-xs mb-6"><strong>Chicago Reference:</strong> Some teams incorporate subtle nods to the city—the Chicago flag, "UChicago" text, or the iconic Quadrangle. Keep it minimal though; you want your team identity to take center stage.</p>

          <p className="text-xs mb-6"><strong>Year or Season:</strong> Adding a season or year to your merch creates a sense of history and tradition. Many teams love having commemorative pieces from championship seasons or memorable tournaments.</p>

          <p className="text-xs mb-6"><strong>Mascot Elements:</strong> If your sport or team has a recognizable symbol, custom embroidered details add a premium touch. Just don't overdo it—a little goes a long way.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">The UChicago Club Sports Timeline</h2>
          <p className="text-xs mb-6">Timing matters when ordering club sports merchandise at UChicago. Here's what team captains and officers need to know:</p>

          <p className="text-xs mb-6"><strong>Fall Semester:</strong> The fall season is prime time for many club sports—ultimate frisbee, soccer, and rugby are in full swing. Teams want matching apparel for the season kickoff, typically ordering 20-80 pieces depending on roster size. Order by early September at the latest to ensure delivery before the first games.</p>

          <p className="text-xs mb-6"><strong>Winter Season:</strong> Indoor sports like volleyball and basketball need custom apparel for winter tournaments. This is also a great time for teams to order hoodies and sweatsets for cold-weather games and practices at Ratner.</p>

          <p className="text-xs mb-6"><strong>Spring Semester:</strong> Spring brings outdoor sports back—baseball, softball, lacrosse, and track are in full swing. Many teams also order for end-of-year banquets and senior celebrations.</p>

          <p className="text-xs mb-6"><strong>Year-Round:</strong> Teams reorder throughout the year for new members, tournaments, and to replace worn-out gear.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Quality That Lasts</h2>
          <p className="text-xs mb-6">The difference between merch that ends up in closets and merch that gets worn comes down to quality. We use heavyweight fabrics, reinforced stitching, and premium printing and embroidery techniques that hold up wash after wash.</p>

          <p className="text-xs mb-6">UChicago athletes are busy—classes, problem sets, research, and practice. They don't have time for merch that pills, fades, or loses its shape after a few wears. Our pieces are built to last through four years of campus life and beyond—alumni will still be reaching for that championship hoodie years later.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Ready to Design Your Team Merch?</h2>
          <p className="text-xs mb-6">If you're a UChicago sports club captain or officer looking to order custom merch, we'd love to hear what you're envisioning. We've worked with clubs across the UChicago athletic community, and we know what designs resonate with collegiate athletes.</p>

          <p className="text-xs mb-6">Here's how it works: reach out with your team name, what type of merch you're interested in, and any design ideas you have. We'll get you a custom mockup within a few days. No pressure, no commitment—just a look at what your team merch could actually look like.</p>

          <p className="text-xs mb-6">Your team deserves apparel that makes everyone proud to represent your club. Let's make it happen.</p>
        </div>
      </article>
    </div>
  )
}
