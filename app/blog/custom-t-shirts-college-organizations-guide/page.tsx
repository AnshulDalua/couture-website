import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom T-Shirts: The Complete Guide for College Organizations in 2026 | Couture by Ikigai',
  description: 'Learn how to order premium custom t-shirts for your fraternity, sorority, or college organization. Explore fabric options, printing techniques, and design tips for t-shirts your group will actually wear.',
  keywords: ['custom t-shirts', 'custom tshirts bulk', 'college organization merch', 'fraternity t-shirts', 'sorority t-shirts', 'custom apparel'],
  openGraph: {
    title: 'Custom T-Shirts: The Complete Guide for College Organizations in 2026',
    description: 'Learn how to order premium custom t-shirts for your fraternity, sorority, or college organization.',
    images: [{ url: '/lookbook/19000034.webp', width: 1200, height: 630, alt: 'Custom t-shirts for college organizations' }],
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
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom T-Shirts: The Complete Guide for College Organizations in 2026</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">FEBRUARY 23, 2026</p>
            <p className="text-xs">8 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image src="/lookbook/19000034.webp" alt="Custom t-shirts for college organizations" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority />
          </div>
        </header>
        <div className="prose prose-sm max-w-none">
          <p className="text-xs mb-6">Custom t-shirts are the backbone of college organization merchandise. Whether you're rushing a new fraternity class, promoting a campus event, or creating unity gear for your sorority, the right t-shirt can make or break your merch game. After designing thousands of custom t-shirts for student organizations, here's everything you need to know to get it right.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Fabric Matters More Than You Think</h2>
          <p className="text-xs mb-6">Not all t-shirts are created equal. The biggest mistake we see student orgs make is going cheap on fabric, only to end up with shirts that shrink, fade, or feel like sandpaper after two washes.</p>
          
          <p className="text-xs mb-6">For college organizations, we recommend looking at fabric weight measured in GSM (grams per square meter). A standard cheap t-shirt comes in around 150-180 GSM. Premium t-shirts like the ones we use start at 180-220 GSM, giving you that thicker, more substantial feel that actually holds up over time.</p>
          
          <p className="text-xs mb-6">Cotton blend vs. 100% cotton is another consideration. Ring-spun cotton gives you that buttery soft feel, while polyester blends offer better moisture wicking for athletes or outdoor events. Most organizations go with a premium ring-spun cotton for that classic, comfortable feel members will actually want to wear.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Printing Techniques Explained</h2>
          <p className="text-xs mb-6">The printing technique you choose affects both the look and durability of your custom t-shirts. Here are your main options:</p>
          
          <p className="text-xs mb-6"><strong>Screen Printing</strong> is the gold standard for bulk orders. It produces vibrant, long-lasting prints and becomes more cost-effective as your quantity increases. For Greek organizations ordering 50+ shirts, screen printing is almost always the move.</p>
          
          <p className="text-xs mb-6"><strong>Direct-to-Film (DTF)</strong> printing has become increasingly popular for smaller batches or more detailed designs. It allows for full-color printing without the setup costs of screen printing, making it great for one-off events or smaller chapters.</p>
          
          <p className="text-xs mb-6"><strong>Embroidery</strong> works best for chest logos or small details, giving a premium, textured look. It's more expensive per shirt but adds that upscale feel perfect for formal events or officer shirts.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Design Tips That Actually Work</h2>
          <p className="text-xs mb-6">We've seen thousands of designs. The best ones share a few common traits:</p>
          
          <p className="text-xs mb-6"><strong>Keep it simple.</strong> The most iconic fraternity and sorority shirts use minimal designs. Your letters or organization name should be the star, not a cluttered mess of clipart.</p>
          
          <p className="text-xs mb-6"><strong>Choose colors strategically.</strong> Pick colors that complement your organization's brand. Don't just default to black if that's not your org's color. The right color palette makes shirts feel cohesive and premium.</p>
          
          <p className="text-xs mb-6"><strong>Think about placement.</strong> Center chest prints are most versatile. Full back prints work for events but get less wear in everyday life. Consider front pocket prints for a subtle, wearable option.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">How Many Should You Order?</h2>
          <p className="text-xs mb-6">This is where a lot of organizations overspend or underspend. Here's a rough guide:</p>
          
          <p className="text-xs mb-6">For <strong>rush or recruitment events</strong>, plan for 100% of your active membership plus 10-15% extra for future new members. You'd rather have a few extras than turn someone away.</p>
          
          <p className="text-xs mb-6">For <strong>big events</strong> like formals, mixers, or homecoming, calculate based on expected attendance and order 10% extra for damaged or lost shirts.</p>
          
          <p className="text-xs mb-6">For <strong>merch tables</strong>, start smaller (25-50 shirts) and reorder based on demand. It's better to run out and create urgency than sit on inventory.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Budgeting Without Compromising Quality</h2>
          <p className="text-xs mb-6">Quality custom t-shirts don't have to break your organization budget. Here's how to maximize value:</p>
          
          <p className="text-xs mb-6">First, order in bulk. The price per shirt drops significantly at 50, 100, and 200 unit thresholds. Second, simplify your design. More colors means more setup costs. Third, choose standard sizes. Custom size runs add significant costs.</p>
          
          <p className="text-xs mb-6">At Couture by Ikigai, we work with student organizations to find the sweet spot between quality and budget. Our 420 GSM heavyweight t-shirts might cost slightly more upfront, but members wear them for years instead of months—making them actually cheaper in the long run.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Making T-Shirts People Actually Wear</h2>
          <p className="text-xs mb-6">The best test of good merch is whether people wear it outside your events. Here's what we've learned from working with hundreds of college organizations:</p>
          
          <p className="text-xs mb-6">Quality is the number one factor. When someone gets a premium t-shirt that feels great and looks great, they reach for it again and again. Cheap shirts get relegated to gym clothes or forgotten in the back of closets.</p>
          
          <p className="text-xs mb-6">Design matters too. A clean, simple design with good color contrast looks professional and wearable. Overly busy designs with too many colors or tiny text come across as amateur.</p>
          
          <p className="text-xs mb-6">Finally, give people a reason to wear it. The best t-shirts represent something people are proud of—a chapter they're excited about, an event they attended, or a brotherhood/sisterhood that means something to them.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Ready to Design Your Custom T-Shirts</h2>
          <p className="text-xs mb-6">Getting started is easy. Think about your organization's colors, gather your design ideas (or let us help you create something from scratch), and decide on quantity. Our team has designed custom t-shirts for hundreds of fraternities, sororities, and college clubs, and we know what works for student organizations.</p>
          
          <p className="text-xs mb-6">The right custom t-shirts do more than just look good—they build unity, create lasting memories, and represent your organization every time someone wears them. Invest in quality, keep your design simple, and your members will thank you for years to come.</p>
        </div>
      </article>
    </div>
  )
}
