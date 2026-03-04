import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'UC Berkeley Custom Merch | Couture by Ikigai',
  description: 'Premium custom merchandise for UC Berkeley organizations. Greek life, cultural orgs, clubs, and student groups. 420 GSM heavyweight quality.',
  keywords: ['UC Berkeley custom merch', 'Berkeley Greek life hoodies', 'Cal student organization apparel', 'Berkeley cultural org merch', 'UC Berkeley club custom clothing'],
}

export default function Page() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">← BACK TO UNIVERSITIES</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">UC BERKELEY CUSTOM MERCH: PREMIUM APPAREL FOR CAL ORGANIZATIONS</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">MARCH 2026</p>
            <p className="text-xs">READ TIME: 5 MIN</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="UC Berkeley custom merch" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">UC Berkeley has one of the most active student organization scenes in the country. From Greek life to cultural orgs, from club sports to a cappella groups, Cal students know how to represent. But most custom merch options are garbage — thin prints on cheap fleece that fade after a few washes.</p>
          <p className="text-xs mb-6">We're different. 420 GSM heavyweight fabric. Prints that last. Designs your org actually wants to wear.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Greek Life at Cal</h2>
          <p className="text-xs mb-6">Whether you're in a fraternity house on Channing Way or a sorority down in Berkeley Oaks, you need gear that represents. We've worked with Cal Greek chapters on hoodies, crewnecks, sweatsets, and more.</p>
          <p className="text-xs mb-6">Rush season, bid day, philanthropy events — we've got you covered. Minimum 12 pieces, full design support included.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Cultural Organizations</h2>
          <p className="text-xs mb-6">Berkeley's cultural org scene is unmatched. From APAM (Asian Pacific American Mentors) to Black Student Union, from MEChA to CASA, these orgs deserve merch that actually looks good.</p>
          <p className="text-xs mb-6">We'll match your org's colors exactly. Bold prints that work on 420 GSM heavyweight. Your design, your vibe, your merch.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Club Sports & Athletics</h2>
          <p className="text-xs mb-6">Cal club sports teams need matching gear that holds up. Whether you're on the rugby pitch, the rowing team, or the cricket club, we make hoodies and sweatsets that last.</p>
          <p className="text-xs mb-6">Team captains and officers — get quotes for full roster orders. We've got sizing from XS to 3XL.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What Sets Us Apart</h2>
          <p className="text-xs mb-6"><strong>420 GSM heavyweight.</strong> Most custom merch is 200-300 GSM. Ours is nearly double the weight. It feels premium. It lasts.</p>
          <p className="text-xs mb-6"><strong>Full design support.</strong> You don't need a designer. Tell us your idea, we mock it up.</p>
          <p className="text-xs mb-6"><strong>Nationwide shipping.</strong> We ship anywhere in the US. Parents alums can also order.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Get Started</h2>
          <p className="text-xs mb-6">Ready to get your Cal org in something actually worth wearing?</p>
          <p className="text-xs mb-6">Head to <Link href="/order" className="underline">couturebyikigai.com/order</Link> or DM us. Tell us about your org, how many pieces you need, and what you're thinking design-wise.</p>
        </div>
      </article>
    </div>
  )
}
