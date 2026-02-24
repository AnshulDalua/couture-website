import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Underground Printing Alternative: Premium Greek Life Merch That Actually Lasts | Couture by Ikigai',
  description: 'Looking beyond Underground Printing? Discover why Couture offers better quality, design support, and pricing for sorority and fraternity merch.',
  keywords: ['Underground Printing alternative', 'Underground Printing vs', 'Underground Printing review', 'Ann Arbor custom merch', 'Michigan Greek life merch'],
  openGraph: {
    title: 'Underground Printing Alternative: Better Quality, Better Price',
    description: 'Looking beyond Underground Printing? Discover why Couture offers better quality and design support.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Underground Printing alternative' }],
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/blog" className="text-xs uppercase">← BACK TO JOURNAL</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-xs uppercase font-medium mb-4">Underground Printing Alternative: Premium Greek Life Merch That Actually Lasts</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 24, 2026</p>
            <p className="text-xs">5 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Underground Printing alternative" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">Underground Printing is everywhere in Ann Arbor. They have 30+ locations, they've been around forever, and every chapter knows the name. So why are more and more sororities and fraternities looking for an alternative?</p>

          <p className="text-xs mb-6">We hear the same complaints over and over. Here's why chapters are making the switch to Couture:</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">1. Quality That Doesn't Feel Cheap</h2>
          <p className="text-xs mb-6">Underground uses standard blanks—like everyone else. They're not bad, but they're not premium either. You get what you pay for: decent for a semester, then maybe not.</p>

          <p className="text-xs mb-6">We use 420 GSM heavyweight fabric—the same weight as luxury streetwear. When you compare them side by side, the difference is obvious. Our merch doesn't just look better; it feels better. And it lasts.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">2. Actual Design Help (Not Just Templates)</h2>
          <p className="text-xs mb-6">Underground offers design services, but they operate at scale—which means you're often working with someone who's rushing through your project to get to the next one. And they charge for every revision.</p>

          <p className="text-xs mb-6">Our design support is included. We'll work with you until the design is right. No per-revision fees. No template shortcuts. We want you to love the final product.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">3. More Flexible Minimums</h2>
          <p className="text-xs mb-6">Underground has typical minimums of 24-48 pieces per style. That's fine for big chapter orders, but what if you're a smaller org, or you just want to test a design before committing to 50?</p>

          <p className="text-xs mb-6">We can go as low as 12 pieces per style. More flexibility, less risk.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">4. Same Local Presence, Better Service</h2>
          <p className="text-xs mb-6">We're also based in Ann Arbor. We understand the Michigan Greek life scene. We know the chapter dynamics, the rush timelines, the events that matter.</p>

          <p className="text-xs mb-6">But we operate leaner, which means more personal attention on every order. You're not a number in a queue—you're a chapter we want to make look good.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">5. Competitive Pricing</h2>
          <p className="text-xs mb-6">Without 30+ store locations and massive overhead, we can price competitively—often undercutting Underground while delivering better quality. Get a quote and compare.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">The Bottom Line</h2>
          <p className="text-xs mb-6">Underground Printing isn't bad—they're a solid option for basic stuff. But if you want premium quality, actual design support, and better service, Couture is the move.</p>

          <p className="text-xs mb-6">We're not trying to be the biggest. We're trying to be the best. And our repeat chapter rate suggests we're doing something right.</p>
        </div>
      </article>
    </div>
  )
}
