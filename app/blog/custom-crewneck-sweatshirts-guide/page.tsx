import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'CUSTOM CREWNECK SWEATSHIRTS: THE COMPLETE GUIDE IN 2026',
  description: 'Learn how to order premium custom crewneck sweatshirts for your organization. From fabric quality to design tips, discover how to create crewneck merch your group will actually want to wear.',
  keywords: ['custom crewneck', 'crewneck sweatshirt', 'custom crewneck sweatshirts', 'embroidered crewneck', 'bulk crewneck', 'crewneck merch', 'college crewneck', 'Greek life crewneck'],
}

export default function BlogPost() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/blog" className="text-xs uppercase">← BACK TO JOURNAL</Link>
      </div>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">CUSTOM CREWNECK SWEATSHIRTS: THE COMPLETE GUIDE IN 2026</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">MARCH 5, 2026</p>
            <p className="text-xs">8 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom crewneck sweatshirts" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">Crewnecks are the forgotten hero of custom merch. Everyone talks about hoodies, but a great crewneck hits different — cleaner, more polished, and somehow more wearable than its hooded counterpart.</p>
          <p className="text-xs mb-6">This guide covers everything you need to know about ordering premium custom crewnecks in 2026.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Why Crewnecks Work</h2>
          <p className="text-xs mb-6">Here's the thing about crewnecks: they're versatile. You can wear them to the office, to class, to a casual dinner, or layering under a jacket. They're the one piece of merch that works in almost any context.</p>
          <p className="text-xs mb-6">Hoodies are great, but they're intentionally casual. A quality crewneck walks the line between comfortable and put-together. That's why you'll see crewnecks on professionals, students, and creatives alike.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Fabric Quality Matters</h2>
          <p className="text-xs mb-6">Most custom crewnecks are made with 200-300 GSM fleece. It's thin, it pills, and after a few washes, it looks like what it is — cheap event merch.</p>
          <p className="text-xs mb-6">We use 420 GSM heavyweight fabric — the same weight used by premium streetwear brands. The difference is immediately noticeable: thicker feel, better structure, prints that actually last.</p>
          <p className="text-xs mb-6">When your crewneck feels substantial, you wear it more. When it lasts longer, it becomes part of your organization's identity rather than something discarded after one use.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Embroidery vs. Printing</h2>
          <p className="text-xs mb-6"><strong>Embroidery</strong> gives that premium, textured look. Thread stitching into the fabric feels high-end and lasts essentially forever. It's perfect for logos, Greek letters, and designs that don't need fine detail.</p>
          <p className="text-xs mb-6"><strong>Screen printing</strong> is better for complex designs, photographs, or when you need full-color reproduction. Modern inks are durable and flexible — they won't crack after a few wears.</p>
          <p className="text-xs mb-6">Many organizations choose embroidery for their primary logo and printing for event-specific designs. We can do both — just tell us what you're thinking.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Tips</h2>
          <p className="text-xs mb-6"><strong>Keep it simple.</strong> Crewnecks show off clean designs best. Your organization name, a simple logo, maybe a founding year. That's it.</p>
          <p className="text-xs mb-6"><strong>Pick 2-3 colors max.</strong> Use your organization's brand colors. More colors = more expensive and harder to read from a distance.</p>
          <p className="text-xs mb-6"><strong>Placement matters.</strong> Chest left is classic. Full back is great for events. Just make sure it's readable.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">How Many to Order</h2>
          <p className="text-xs mb-6">Minimum order is 12 pieces, which works for small organizations. Bulk pricing kicks in at higher quantities:</p>
          <p className="text-xs mb-6">• 12-30 pieces — Great for small clubs, officer boards, or event-specific orders</p>
          <p className="text-xs mb-6">• 30-75 pieces — Typical for medium-sized organizations</p>
          <p className="text-xs mb-6">• 75+ pieces — Large chapters, conference teams, or organizations ordering for multiple events</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">What to Do Next</h2>
          <p className="text-xs mb-6">Ready to get custom crewnecks for your organization?</p>
          <p className="text-xs mb-6">1. <strong>Decide on quantity</strong> — How many do you need?</p>
          <p className="text-xs mb-6">2. <strong>Gather design ideas</strong> — Logo, colors, any specific elements</p>
          <p className="text-xs mb-6">3. <strong>Choose embroidery or printing</strong> — We can advise based on your design</p>
          <p className="text-xs mb-6">4. <strong>Get a quote</strong> — Head to <Link href="/order" className="underline">couturebyikigai.com/order</Link> or DM us</p>
          <p className="text-xs mb-6">We'll mock up designs at no cost. You approve, we print. Simple.</p>
        </div>
      </article>
    </div>
  )
}
