import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom Ink Alternative: Why Couture is the Better Choice for Greek Life Merch | Couture by Ikigai',
  description: 'Looking for a Custom Ink alternative? Discover why Couture by Ikigai offers better quality, faster turnaround, and actual design support for Greek life merch.',
  keywords: ['Custom Ink alternative', 'Custom Ink vs', 'Printful alternative', 'custom apparel alternative to Custom Ink', 'better than Custom Ink', 'Greek merch company'],
  openGraph: {
    title: 'Custom Ink Alternative: Why Couture is the Better Choice',
    description: 'Looking for a Custom Ink alternative? Discover why Couture by Ikigai offers better quality and actual design support.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Custom Ink alternative' }],
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
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom Ink Alternative: Why Couture is the Better Choice for Greek Life Merch</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 24, 2026</p>
            <p className="text-xs">6 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom Ink alternative" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">If you're researching Custom Ink alternatives, you're probably frustrated. Maybe their prices are higher than you expected. Maybe the design process was slower than promised. Or maybe you just want someone who actually understands what Greek life merch should look like.</p>

          <p className="text-xs mb-6">We get it. That's why dozens of chapters have switched to Couture from Custom Ink this year alone. Here's why:</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">1. We Actually Understand Greek Life</h2>
          <p className="text-xs mb-6">Custom Ink is a generalist. They print for everyone—schools, businesses, events, you name it. There's nothing wrong with that, but it means they don't understand the specific needs of sororities and fraternities.</p>

          <p className="text-xs mb-6">We've worked with 150+ University of Michigan chapters alone. We know that rush week has a deadline. We know that bid day needs to be perfect. We know your chapter letters need to look clean and professional, not like a afterthought. When you work with us, you're working with people who get it.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">2. Premium Quality (420 GSM vs Their Standard Blanks)</h2>
          <p className="text-xs mb-6">This is where the difference is immediately obvious. Custom Ink uses standard 8-10 oz blanks—the same thing everyone else uses. They're fine for a one-time event t-shirt, but they don't hold up.</p>

          <p className="text-xs mb-6">We use 420 GSM heavyweight fabric. That's the same weight you'd find at Supreme, Fear of God, or any premium streetwear brand. When your chapter shows up in matching sweatsets, people notice the quality. When they throw them in the wash, they stay looking good.</p>

          <p className="text-xs mb-6">Here's the thing: cheap merch gets thrown away. Premium merch gets worn. Which one represents your chapter better?</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">3. Full Design Support Included</h2>
          <p className="text-xs mb-6">Custom Ink offers design services, but they charge for it—and the turnaround can be slow. With us, design support is included. We'll work with you to create something your chapter will actually want to wear.</p>

          <p className="text-xs mb-6">Not sure what you want? That's fine. Tell us your chapter's vibe, colors, and any ideas you have, and we'll mock up options. We'll revise until it's right. No extra fees, no stress.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">4. Faster Turnaround</h2>
          <p className="text-xs mb-6">Custom Ink's standard turnaround is 2-3 weeks, and that's before any design revisions. Need something for bid day in two weeks? Good luck.</p>

          <p className="text-xs mb-6">We typically turn around orders in 10-14 days from design approval. During off-peak seasons, we can often do faster. Your chapter president doesn't need another reason to stress—we make this easy.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">5. Competitive Pricing</h2>
          <p className="text-xs mb-6">You'd think premium quality means premium prices, but our pricing is competitive with Custom Ink—sometimes even less. We don't have their overhead (30+ store locations, massive marketing budgets), so we can pass those savings to you.</p>

          <p className="text-xs mb-6">Get a quote and compare. We're confident you'll be surprised.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">The Bottom Line</h2>
          <p className="text-xs mb-6">Custom Ink isn't a bad choice—they're fine for basic stuff. But if you want merch that actually represents your chapter, with quality that lasts and design support that doesn't nickel-and-dime you, we're the better choice.</p>

          <p className="text-xs mb-6">We've helped hundreds of chapters get merch they love. We'd love to help yours too.</p>

          <p className="text-xs mb-6">Ready to see the difference? Get a quote or reach out to chat about your design. We're here to help.</p>
        </div>
      </article>
    </div>
  )
}
