import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom Sorority Merch USC | Couture by Ikigai',
  description: 'Premium custom sorority merchandise for USC Trojan sororities. Matching sweatsets, hoodies, and apparel designed for Greek life at University of Southern California.',
  keywords: ['custom sorority merch USC', 'USC sorority merchandise', 'Greek life apparel USC', 'USC Greek life hoodies', 'Trojan sorority custom clothing'],
  openGraph: {
    title: 'Custom Sorority Merch USC | Couture by Ikigai',
    description: 'Premium custom sorority merchandise for USC Trojan sororities. Matching sweatsets, hoodies, and apparel designed for Greek life at University of Southern California.',
    images: [
      {
        url: '/lookbook/339344sin002250-R1-035-16.webp',
        width: 1200,
        height: 630,
        alt: 'USC Trojan sorority merch',
      }
    ],
  },
}

export default function USC SororitiesPage() {

  return (
    <div className="min-h-screen px-6 py-8">

      <div className="mb-8">
        <Link href="/universities" className="text-xs uppercase">
          ← BACK TO UNIVERSITIES
        </Link>
      </div>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom Sorority Merch USC — Rep Your Chapter in Style</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">MARCH 6, 2026</p>
            <p className="text-xs">6 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image
              src="/lookbook/339344sin002250-R1-035-16.webp"
              alt="USC Trojan sorority merchandise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          </div>
        </header>

        <div className="prose prose-sm max-w-none">
  <p className="text-xs mb-6">
    USC. The University of Southern California. Where Trojan pride runs deep, the weather's always perfect, and your Instagram feed is basically a highlight reel of palm trees and sunset photos. Whether you're a freshman navigating your first semester at University Park or a senior counting down the days until graduation, there's one thing every USC sorority girl knows: you need merch that actually represents your chapter — not some generic sweatshirt you ordered from a website that doesn't get it.
  </p>

  <p className="text-xs mb-6">
    Let's be real. Greek life at USC is a whole vibe. With over 30 sororities on campus, from the traditional Panhellenic chapters to the cultural interest houses, there's a unique energy here. You're not just joining a sorority — you're joining a community, a sisterhood, and honestly, a whole aesthetic. And that aesthetic extends far beyond the days of recruitment. It's in the matching hoodies you wear to football games, the crewnecks you rock to chapter meetings, and the custom tees you design for philanthropy events.
  </p>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">WHY GENERIC MERCH DOESN'T CUT IT</h2>

  <p className="text-xs mb-6">
    We've all seen it — the sad, thin-blank sweatshirts with a tiny Greek letter printed on the chest that fades after three washes. The rushed designs thrown together the night before bid day. The批量 order from a print shop that doesn't understand that your letters matter, your colors are specific, and your chapter has a reputation to uphold. At a campus like USC, where appearances matter and school spirit is woven into the fabric of student life, your merch needs to hit different.
  </p>

  <p className="text-xs mb-6">
    Here's the thing: when you're repping your sorority, you're not just representing yourself. You're representing your chapter, your sisters, and the legacy that came before you. That deserves more than a last-minute order from a basic supplier. It deserves premium quality, thoughtful design, and apparel that makes you actually want to wear it — not just because you have to, but because it looks fire.
  </p>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">WHAT COUTURE BY IKIGAI BRINGS TO USC SORORITIES</h2>

  <p className="text-xs mb-6">
    We're not your typical print shop. Couture by Ikigai specializes in premium, high-quality custom apparel made specifically for college organizations. We get what USC Greek life is about because we've worked with chapters across campus — from Kappa Kappa Gamma to Delta Gamma, from Chi Omega to Alpha Phi, and everyone in between. We know the Panhellenic culture, we understand the prestige of Trojan Greek life, and we know how to make merch your sisters will actually wear beyond recruitment season.
  </p>

  <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image
              src="/lookbook/19000034.webp"
              alt="Premium USC sorority sweatsets"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>

  <p className="text-xs mb-6">
    What we offer:
  </p>

  <ul className="text-xs mb-6 list-disc pl-4">
    <li className="mb-2">420 GSM heavyweight hoodies and crewnecks that actually last — no thin, cheap blanks</li>
    <li className="mb-2">Full-color embroidery and premium printing options that make your letters pop</li>
    <li className="mb-2">Custom design support — work with our team to bring your vision to life</li>
    <li className="mb-2">Flexible minimums for chapter-wide orders, big/little reveals, and philanthropy events</li>
    <li className="mb-2">Fast turnaround times designed for student timelines and Greek life schedules</li>
  </ul>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">MERCH FOR EVERY OCCASION</h2>

  <p className="text-xs mb-6">
    USC sororities need custom merch for more than just recruitment. Think about it: big-little reveal hoodies, philanthropy event t-shirts, senior farewell apparel, retreat sweatsets, executive board crewnecks, formal matching dresses — the list goes on. And each of these moments deserves apparel that's intentional, well-designed, and worth keeping.
  </p>

  <p className="text-xs mb-6">
    We've helped chapters create:
  </p>

  <ul className="text-xs mb-6 list-disc pl-4">
    <li className="mb-2">Matching big-little reveal packages that sisters actually want to wear</li>
    <li className="mb-2">Philanthropy event merch that donors are excited to take home</li>
    <li className="mb-2">Executive board apparel that shows leadership pride</li>
    <li className="mb-2">Senior legacy pieces that girls wear long after graduation</li>
  </ul>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">HOW IT WORKS</h2>

  <ol className="text-xs mb-6 list-decimal pl-4">
    <li className="mb-2">Share your design idea or let our design team create something from scratch</li>
    <li className="mb-2">Receive a custom mockup and pricing quote</li>
    <li className="mb-2">Approve the design and place your bulk order</li>
    <li className="mb-2">Production and delivery straight to your chapter house or campus address</li>
  </ol>

  <p className="text-xs mb-6">
    No confusing processes, no hidden fees, no generic templates. Just premium sorority merch that your chapter deserves.
  </p>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">CONCLUSION: REP YOUR CHAPTER RIGHT</h2>

  <p className="text-xs mb-6">
    At USC, you're part of something bigger than yourself. Your sorority is your family away from home, your support system, and your crew for four years (and beyond). The merch you wear should reflect that pride — not just check a box.
  </p>

  <p className="text-xs mb-6">
    Don't settle for generic. Don't settle for cheap blanks. Don't settle for designs that don't capture what your chapter is about. At Couture by Ikigai, we're here to help USC sororities create custom merch that sisters are proud to wear — whether you're heading to a football game, walking across the stage at graduation, or justRepresenting your letters around campus. Your chapter deserves better than basic. Let us help you create merch that actually means something.
  </p>

</div>


      </article>
    </div>
  )
}
