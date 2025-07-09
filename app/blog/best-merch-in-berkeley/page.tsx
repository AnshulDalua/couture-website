import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Custom Merch for UC Berkeley Done Right',
  description: 'Discover how Couture helps UC Berkeley clubs, frats, and cultural orgs create custom, high-quality merch in bulk.',
  keywords: ['UC Berkeley custom merch', 'high quality merch', 'Greek life clothing','custom college apparel'],
  openGraph: {
    title: 'Custom Merch for UC Berkeley Done Right',
    description: 'Discover how Couture helps UC Berkeley clubs, frats, and cultural orgs create custom, high-quality merch in bulk.',
    images: [
      {
        url: '/lookbook/339344sin002250-R1-035-16.webp',
        width: 1200,
        height: 630,
        alt: 'UC Berkeley student merch hoodie',
      }
    ],
  },
}

export default function BlogPost() {

  return (
    <div className="min-h-screen px-6 py-8">

      <div className="mb-8">
        <Link href="/blog" className="text-xs uppercase">
          ← BACK TO JOURNAL
        </Link>
      </div>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">Custom Merch for UC Berkeley Done Right</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">JUNE 14, 2025</p>
            <p className="text-xs">4 MIN READ</p>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image
              src="/lookbook/339344sin002250-R1-035-16.webp"
              alt="UC Berkeley companile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          </div>
        </header>

        <div className="prose prose-sm max-w-none">
  <p className="text-xs mb-6">
    Berkeley. The home of Nobel laureates (and their free parking spaces), late-night boba runs, and 8 a.m. lectures you swore you wouldn’t skip. The good times. I'm sure everyone remembers their first week of GBO — that mix of excitement, imposter syndrome, and the surreal moment you realize: *I'm finally here.*
  </p>

  <p className="text-xs mb-6">
    Whether you were running on three hours of sleep during the first couple weeks, making friends in your res hall lounge, or skipping orientation just to aimlessly wander around, there was one thing you probably noticed right away: the hoodies. the crewnecks. Cal merch. Everywhere. Gold block letters. Bear logos. GO BEARS. 
  </p>

  <p className="text-xs mb-6">
    Here, what you wear says more than just "I go to Berkeley." It says what you are a part of — your major department, your co-op, your club, your sorority, and your culture. Merch is more than clothing here — it’s how we show who we are and what we belong to.
  </p>

  <p className="text-xs mb-6">
    And there’s no shortage of belonging on this campus. Home to over 1,000 student organizations, from cultural orgs like PASS and BSU to professional clubs like Blueprint and Venture Strategy Solutions. Frats and sororities. Dance teams. Pre-med societies. Queer orgs. Political coalitions. Everyone’s repping something.
  </p>

  <p className="text-xs mb-6">
    But here’s the problem: the merch doesn’t always match the vibe. Bland or overused designs. Thin blanks. Sizing issues. I've seen some orgs just settle for templated sweatshirts that feel like an afterthought. You wear it once, and it ends up in the back of your closet gathering dust.
  </p>

  <div className="relative h-[50vh] md:h-[60vh] mb-8">
            <Image
              src="/blog/UC-Berkeley-companile.jpg"
              alt="UC Berkeley companile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          </div>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">REP YOUR ORG RIGHT</h2>

  <p className="text-xs mb-6">
    That’s where Couture by Ikigai comes in. We’re not just another print shop. We specialize in high quality and fully customizable apparel made <strong>by students</strong> and <strong> for students</strong>. We want the opportunity to help your and your org represent who you are.
  </p>

  <p className="text-xs mb-6">
    What we offer:
  </p>

  <ul className="text-xs mb-6 list-disc pl-4">
    <li className="mb-2">Premium 400gsm + blanks (hoodies, crews, and tees that last)</li>
    <li className="mb-2">Full design support — we work with you to make your vision real</li>
    <li className="mb-2">Flexible minimums and fast production for student timelines</li>
  </ul>

  <p className="text-xs mb-6">
    Whether it’s rush gear, club hoodies, or limited-edition drops for culture week, we help you make merch that actually feels like your org — and that your members are proud to wear.
  </p>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">HOW IT WORKS</h2>

  <ol className="text-xs mb-6 list-decimal pl-4">
    <li className="mb-2">Upload your design or idea</li>
    <li className="mb-2">We mock it up + send pricing</li>
    <li className="mb-2">Bulk production + delivery to your door</li>
  </ol>

  <p className="text-xs mb-6">
    No storefronts. No markups. Just custom merch — built for Bears, by people who actually get what Berkeley orgs are about.
  </p>

  <h2 className="text-xs uppercase font-medium mt-12 mb-4">CONCLUSION: MERCH THAT MEANS SOMETHING</h2>

  <p className="text-xs mb-6">
    At a school like Berkeley — where students belong to multiple communities at once — the clothes we wear carry meaning. When your organization invests in high-quality, thoughtful merch, you’re not just placing an order. You’re building culture, creating memories, and giving people something they’ll hold onto long after graduation.
  </p>

  <p className="text-xs mb-6">
    The real value of great merch doesn’t come from clicks or margins — it comes from the stories. From alumni who still wear their exec hoodie at reunions. From members who feel seen because their culture week drop actually reflected who they are. From the moments your community feels connected by more than just a logo.
  </p>

  <p className="text-xs mb-6">
    In a campus overflowing with potential and pride, your org deserves merch that reflects that. Make sure your next drop is one worth remembering.
  </p>

</div>


      </article>
    </div>
  )
}
