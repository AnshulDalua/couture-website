import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom Sorority Merch Michigan | Couture by Ikigai',
  description: 'Premium custom sorority merch at University of Michigan. Matching sweatsets, hoodies, and apparel for Michigan sorority chapters.',
  keywords: ['custom sorority merch Michigan', 'University of Michigan sorority apparel', 'Michigan Greek life merch', 'custom sorority hoodies Ann Arbor', 'sorority rush gear Michigan'],
  openGraph: {
    title: 'Custom Sorority Merch Michigan | Couture by Ikigai',
    description: 'Premium custom sorority merch at University of Michigan. Matching sweatsets, hoodies, and apparel for Michigan sorority chapters.',
    images: [
      {
        url: '/lookbook/339344sin002250-R1-035-16.webp',
        width: 1200,
        height: 630,
        alt: 'Michigan sorority custom merch',
      }
    ],
  },
}

export default function BlogPost() {

  return (
    <div className="min-h-screen px-6 py-8">

      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">
          ← BACK TO UNIVERSITIES
        </Link>
      </div>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom Sorority Merch for Michigan — Rep Your Chapter in Style</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">MARCH 5, 2026</p>
            <p className="text-xs">5 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image
              src="/lookbook/339344sin002250-R1-035-16.webp"
              alt="Michigan sorority custom merch"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          </div>
        </header>

        <div className="prose prose-sm max-w-none">
  <p className="text-xs mb-6">
    Ann Arbor. The Diag. Friday night games at the Big House. Late-night pizza from Pizza House. And of course — the sororities. Michigan's Greek life scene is one of the largest in the country, with over 30 Panhellenic chapters calling campus home. From Alpha Phi to Zeta Tau Alpha, thousands of Michigan women wear their letters with pride throughout their college years and long after graduation.
  </p>

  <p className="text-xs mb-6">
    But here's the thing: not all sorority merch is created equal. Walk around campus in September during recruitment, and you'll see a sea of identical basic tees — thin blanks, faded prints, designs that look like they were knocked out in 10 minutes. Every chapter wants matching outfits for bid day, yet most end up settling for whatever the cheapest print shop can deliver.
  </p>

  <p className="text-xs mb-6">
    That's not the vibe. Your sorority deserves better. Your sisters deserve merch that actually feels special — that people want to wear not just because they have to, but because it represents something worth showing off.
  </p>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">WHY MICHIGAN SORORITIES CHOOSE COUTURE</h2>

  <p className="text-xs mb-6">
    We're Couture by Ikigai, and we specialize in premium custom apparel for college organizations — especially Greek life at schools like Michigan. We know the culture. We know what matters: quality that lasts, designs that actually look good, and production timelines that work for student budgets and schedules.
  </p>

  <p className="text-xs mb-6">
    What makes us different from the typical print shops that target college campuses:
  </p>

  <ul className="text-xs mb-6 list-disc pl-4">
    <li className="mb-2"><strong>420 GSM heavyweight hoodies</strong> — These aren't the paper-thin blanks you'll find elsewhere. Our hoodies are thick, cozy, and built to last. Your sisters will actually want to live in them.</li>
    <li className="mb-2"><strong>Premium crewnecks and sweatshirts</strong> — Matching crewnecks for formal events, parent weekends, or just Tuesday vibes. We use high-quality blanks that hold up wash after wash.</li>
    <li className="mb-2"><strong>Fully customizable designs</strong> — Your chapter's letters, colors, symbols, and philanthropies. We work with your exec board to create designs that feel unique to your sisterhood — not a templated logo plopped on a generic sweatshirt.</li>
    <li className="mb-2"><strong>Flexible minimums</strong> — Whether you need 20 shirts for a recruitment event or 200 for bid day, we can accommodate. No arbitrary minimum order requirements.</li>
    <li className="mb-2"><strong>Fast turnaround</strong> — We know sorority life moves fast. Recruitment deadlines, philanthropy events, formals — you need merch when you need it. We prioritize student timelines.</li>
  </ul>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">WHAT TO GET FOR YOUR SORORITY</h2>

  <p className="text-xs mb-6">
    Every Michigan sorority has a few staple items that never go out of style:
  </p>

  <ul className="text-xs mb-6 list-disc pl-4">
    <li className="mb-2"><strong>Bid Day tees</strong> — The ultimate recruitment merch. Custom shirts for your new member class that they'll actually wear outside of the chapter house.</li>
    <li className="mb-2"><strong>Matching sweatsets</strong> — Hoodies + joggers or crewnecks + shorts. The go-to look for sisterhood events, philanthropy walks, and casual campus days.</li>
    <li className="mb-2"><strong>Letterman-style crewnecks</strong> — Classic, nostalgic, and perfect for alumni events or formal occasions. Puff print, embroidery options available.</li>
    <li className="mb-2"><strong>Philanthropy event merch</strong> — If your chapter hosts events like Dance Marathon, Take Back the Night, or other fundraisers, custom merch for attendees and participants makes a difference.</li>
    <li className="mb-2"><strong>Executive board hoodies</strong> — Your exec board represents the chapter. Premium matching hoodies for your e-board create unity and make leadership visible.</li>
  </ul>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">MICHIGAN GREEK LIFE: THE NUMBERS</h2>

  <p className="text-xs mb-6">
    Michigan's Panhellenic Association oversees one of the biggest Greek communities in the nation. With over 30 sororities and thousands of members, the competition for recruitment is real. What helps a chapter stand out? Identity. Culture. And yes — the merch.
  </p>

  <p className="text-xs mb-6">
    Chapters with high-quality, distinctive apparel report stronger sisterhood cohesion and better recruitment outcomes. When new members see that your chapter has put thought into its identity — from the way you present yourselves to the clothes you wear — it signals professionalism, pride, and a real community.
  </p>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">HOW IT WORKS</h2>

  <ol className="text-xs mb-6 list-decimal pl-4">
    <li className="mb-2"><strong>Connect with us</strong> — Tell us about your chapter, your colors, your vision. Even just a rough idea or reference images help.</li>
    <li className="mb-2"><strong>Design mockups</strong> — We create digital mockups of your merch so you can see exactly what it'll look like before you order.</li>
    <li className="mb-2"><strong>Pricing + quantities</strong> — We break down costs based on your order size. No hidden fees, no surprises.</li>
    <li className="mb-2"><strong>Production</strong> — Once you approve, we produce your order with careful attention to quality.</li>
    <li className="mb-2"><strong>Delivery</strong> — We ship directly to your chapter house or campus address.</li>
  </ol>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">READY TO REP YOUR CHAPTER?</h2>

  <p className="text-xs mb-6">
    Your sorority is more than letters on a shirt. It's a sisterhood, a community, a four-year (and lifelong) connection. The merch you wear should reflect that. Skip the cheap blanks and templated designs — get something your sisters will actually want to keep.
  </p>

  <p className="text-xs mb-6">
    Couture by Ikigai is ready to help your Michigan sorority create custom apparel that hits different. Premium quality. Real design work. Timelines that work for student life.
  </p>

  <p className="text-xs mb-6">
    Drop us a message, share your ideas, and let's make merch your chapter will actually be proud to wear. Go Blue — and go in style.
  </p>

</div>


      </article>
    </div>
  )
}
