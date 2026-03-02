import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Northwestern Custom Merch | Couture by Ikigai',
  description: 'Premium custom merchandise for Northwestern organizations. Greek life, cultural orgs, clubs, and student groups. 420 GSM heavyweight quality.',
  keywords: ['Northwestern custom merch', 'NU Greek life hoodies', 'Northwestern student organization apparel', 'NU cultural org merch', 'Northwestern club custom clothing'],
}

export default function Page() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">← BACK TO UNIVERSITIES</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">NORTHWESTERN CUSTOM MERCH: PREMIUM APPAREL FOR WILDCAT ORGANIZATIONS</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">MARCH 2026</p>
            <p className="text-xs">READ TIME: 5 MIN</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Northwestern custom merch" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">Northwestern has a massive student org scene — Greek life on Sheridan Road, cultural orgs through the Multicultural Center, club sports, a cappella groups, the list goes on. But finding quality custom merch in Evanston is tough.</p>
          <p className="text-xs mb-6">We're here to fix that. 420 GSM heavyweight fabric. Prints that actually last. Designs Wildcats are proud to wear.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Greek Life at Northwestern</h2>
          <p className="text-xs mb-6">Whether you're in a fraternity house on Sherman or a sorority in the Village, you need merch that represents. We've worked with NU chapters on hoodies, crewnecks, sweatsets, and custom designs.</p>
          <p className="text-xs mb-6">Rush, bid day, philanthropy events — we've got you covered. Minimum 12 pieces, full design support included.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Cultural Organizations</h2>
          <p className="text-xs mb-6">From the Asian American Alliance to the Black Student Union, from MEChA to the Native American Student Organization, Northwestern's cultural orgs are some of the most active. Get merch that matches your org's energy.</p>
          <p className="text-xs mb-6">We'll match your exact colors. Bold prints on premium heavyweight. Your design, your vibe.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Club Sports & Athletics</h2>
          <p className="text-xs mb-6">NU club sports deserve gear that keeps up. Rugby, lacrosse, ultimate frisbee, rowing — whatever your team, we make matching hoodies and sweatsets that actually hold up.</p>
          <p className="text-xs mb-6">Full roster orders, XS to 3XL, team discounts available.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What Sets Us Apart</h2>
          <p className="text-xs mb-6"><strong>420 GSM heavyweight.</strong> Nearly double what most custom merch companies use. Premium feel, lasts for years.</p>
          <p className="text-xs mb-6"><strong>Full design support.</strong> Tell us your idea, we mock it up. No designer needed.</p>
          <p className="text-xs mb-6"><strong>Nationwide shipping.</strong> We ship anywhere. Alumni and parents can order too.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Get Started</h2>
          <p className="text-xs mb-6">Ready to get your Northwestern org in something actually worth wearing?</p>
          <p className="text-xs mb-6">Head to <Link href="/order" className="underline">couturebyikigai.com/order</Link> or DM us. Tell us about your org and we'll get you a quote.</p>
        </div>
      </article>
    </div>
  )
}
