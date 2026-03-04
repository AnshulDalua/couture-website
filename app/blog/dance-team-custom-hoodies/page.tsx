import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'DANCE TEAM CUSTOM HOODIES: THE COMPLETE GUIDE FOR COMPETITION AND SHOWTEAM APPAREL IN 2026',
  description: 'Learn how to order premium custom hoodies for your dance team or competition squad. Discover 420 GSM heavyweight quality, design tips, and how to create merch your team will actually want to wear.',
  keywords: ['dance team custom hoodies', 'competition dance team apparel', 'showteam custom hoodies', 'dance crew merchandise', 'hip hop crew merch', 'college dance team hoodies', 'dance team sweatshirts'],
}

export default function BlogPost() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/blog" className="text-xs uppercase">← BACK TO JOURNAL</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">DANCE TEAM CUSTOM HOODIES: THE COMPLETE GUIDE FOR COMPETITION AND SHOWTEAM APPAREL IN 2026</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">MARCH 1, 2026</p>
            <p className="text-xs">8 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Dance team custom hoodies" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">Your dance team deserves hoodies that keep up with your intensity. Not the thin, flimsy stuff that falls apart after two washes. We're talking 420 GSM heavyweight — the same fabric weight that streetwear brands like Supreme use. Hoodies that actually mean something when you throw them on before you hit the stage.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Why 420 GSM Matters for Dance Teams</h2>
          <p className="text-xs mb-6">Most custom merch companies offer 200-300 GSM fleece. It's cheap, it's thin, and it shows. After a few cycles through the laundry, pilling, fading, and that weird stretched-out look become the norm. Your team deserves better.</p>
          <p className="text-xs mb-6">420 GSM heavyweight fabric holds up. The print stays crisp. The color doesn't wash out. And when you're traveling to competitions, traveling to shows, or just repping your crew on campus, your gear should look as tight as your performances.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Custom Design Options That Actually Work</h2>
          <p className="text-xs mb-6">Dance teams need designs that move with you. That means:</p>
          <p className="text-xs mb-6"><strong>Bold graphics that don't get lost.</strong> When you're performing under stage lights, small logos disappear. Big, clean designs read from the audience.</p>
          <p className="text-xs mb-6"><strong>Team names and crew identifiers front and center.</strong> Whether you go with your crew name, your school, or a unique tagline, make it pop.</p>
          <p className="text-xs mb-6"><strong>Matching colors that tie into your team's aesthetic.</strong> We'll match your exact Pantone colors so your hoodies look cohesive with your other performance gear.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Matching Sets: Hoodies + Joggers</h2>
          <p className="text-xs mb-6">More teams are going with full matching sets — heavyweight hoodies + straightcut sweatpants in the same fabric and color. It looks professional, it photographs better, and it builds that team identity that sets you apart from every other crew on the stage.</p>
          <p className="text-xs mb-6">Plus, when you're backstage at competitions waiting for your slot, a matching sweatset with your crew on it just hits different.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">How Many to Order?</h2>
          <p className="text-xs mb-6">Most dance teams order anywhere from 12 to 50+ pieces depending on roster size. We've worked with teams who do:</p>
          <p className="text-xs mb-6">• <strong>Full team orders</strong> — everyone gets matching hoodies + joggers for competitions</p>
          <p className="text-xs mb-6">• <strong>Leadership/ officers</strong> — just the captain and officers to distinguish roles</p>
          <p className="text-xs mb-6">• <strong>Alumni editions</strong> — special designs for alumni who come back to support</p>
          <p className="text-xs mb-6">Minimum order is 12 pieces, which works for most mid-sized crews. For bigger teams or multiple styles, we can accommodate.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Support Included</h2>
          <p className="text-xs mb-6">You don't need to be a designer. Tell us what you want — your team name, colors, any imagery or vibe you're going for — and we'll mock up options. Most teams go through 2-3 rounds of revisions and end up with something they love.</p>
          <p className="text-xs mb-6">We've designed for hip hop crews, collegiate dance teams, competition squads, and studio groups. We know what works on fabric, what prints well, and what looks good from center stage.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What to Do Next</h2>
          <p className="text-xs mb-6">Ready to get your team in something that actually represents the work you put in? Here's how this works:</p>
          <p className="text-xs mb-6">1. <strong>Tell us about your team</strong> — roster size, colors, design ideas</p>
          <p className="text-xs mb-6">2. <strong>We mock up designs</strong> — usually within 3-5 business days</p>
          <p className="text-xs mb-6">3. <strong>You approve</strong> — we don't print until you're 100% good</p>
          <p className="text-xs mb-6">4. <strong>Production + delivery</strong> — 2-3 weeks total from approval</p>
          <p className="text-xs mb-6">Get a quote at <Link href="/order" className="underline">couturebyikigai.com/order</Link> or slide into our DMs. Let's make hoodies your team actually wants to wear.</p>
        </div>
      </article>
    </div>
  )
}
