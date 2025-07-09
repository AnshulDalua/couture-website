import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'How Merch Became Fashion: From Concert Tees to Streetwear Drops',
  description: 'Explore the cultural shift that turned fan merch into fashion statements—from vintage concert tees to creator-led streetwear drops.',
  keywords: ['merch fashion evolution', 'creator streetwear', 'Kanye Yeezus merch', 'Gen Z fashion drops', 'print on demand clothing'],
  openGraph: {
    title: 'How Merch Became Fashion: From Concert Tees to Streetwear Drops',
    description: 'Explore the cultural shift that turned fan merch into fashion statements—from vintage concert tees to creator-led streetwear drops.',
    images: [
      {
        url: '/homepage/aryani.webp',
        width: 1200,
        height: 630,
        alt: 'Yeezus merch as fashion',
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
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">How Merch Became Fashion: From Concert Tees to Streetwear Drops</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">JULY 4, 2025</p>
            <p className="text-xs">5 MIN READ</p>
          </div>
          <div className="mb-8">
              <Image
              src="/homepage/aryani.webp"
              alt="bold graphic hoodie in urban streetwear setting"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>

        </header>

        <div className="prose prose-sm max-w-none">

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">A Little Historical Context.</h2>
          <p className="text-xs mb-6">
            Merch. When folks before Gen Z think of merchandise, they think once in a while concert tees, branded toys aimed at kids, or small souvenirs—memorabilia associated with a particular fandom. The 1980s saw a surge in global rock tours with bands like AC/DC, Metallica, and Guns N' Roses selling concert tees, which were typically black, oversized, and graphic-heavy. Though iconic, they were often worn not for fashion or style but rather as a badge that said, "I was there."
          </p>

          <p className="text-xs mb-6">
            As pop culture expanded, we observed the tremendous opportunity in commercial mass licensing through brands that have an existing dedicated fan base. By 1985, Star Wars had generated 2.5 billion in merchandise sales, ranging from action figures and lunchboxes to branded pajamas and posters. This kind of success proved that merch is no longer just an afterthought—it could be a commercial business that doesn't solely rely on occasional events.
          </p>
          <p className="text-xs mb-6">
            With FCC deregulation in children's program rules in the early '80s, this gave rise to shows like G.I. Joe and TMNT that essentially function as 20-minute toy commercials. This became the ideal business model in which cartoon and merchandise worked symbiotically to drive sales—a masterclass in content-to-commerce strategy. Merch became the foundation, not the fringe.
          </p>

          <p className="text-xs mb-6">
            By the 1990s and early 2000s, merch became synonymous with mainstream licensing in which every brand is inevitably tied to some product. Through it all, merch remained tied to fandom, not fashion. It was often aimed towards kids or churned out as a simple logo on cheap mass-produced blanks. Merch was predictable, derivative, and creatively marginalized. However, over the past decade, a series of cultural shifts challenged that definition—that merch could be more than just a low-effort byproduct of fandom.
          </p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Merch X Streetwear: Kanye’s Yeezus Tour Merch</h2>
          <div className="mb-8">
              <Image
              src="/blog/kanye-yeezus-merch.png"
              alt="Kanye Yeezus tour merch Native Skull Tee"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
            <p style={{ fontSize: '0.85em', color: '#666' }}>
              Image from <a href="https://parisaint.com" target="_blank" rel="noopener noreferrer">parisaint.com</a>
            </p>
          </div>
          <p className="text-xs mb-6">
            When Kanye West launched his Yeezus tour in 2013, he didn’t just release tour tees—he reimagined what merch could be. The designs, created in collaboration with artist Wes Lang, could only be described as gritty, gothic, and controversial. They featured skeletons, religious symbols, and Confederate flags—not to reflect Kanye directly, but to evoke a darker America, rooted in rebellion and death. Further, the shirts were oversized and distressed, drawing from vintage biker and streetwear aesthetics. It became more than just a tour or a brand. They were about vibe and vision.
          </p>

          <p className="text-xs mb-6">
            What made Yeezus merch different was how they were sold and worn. The pieces weren’t mass-produced but rather released in limited runs through exclusive pop-ups in cities like NY and LA—not just at venues. Fashion media like GQ and Hypebeast took interest and covered the drop instead of just music blogs. Fans didn’t just collect the merch; they styled it, resold it, and treated it as a flex. Relying on scarcity, hype, and identity, Yeezus merch lived in the same breath as big brands like Supreme or Palace.
          </p>

          <p className="text-xs mb-6">
            Kanye’s Yeezus merch wasn’t the first to blur the line between fashion and fandom—but it was a cultural proof of concept. It showed the world, especially other artists and creators, that merch could be:
          </p>

          <ul className="text-xs mb-6 list-disc pl-4">
            <li>A design-forward product</li>
            <li>A fashion item—not just a souvenir</li>
            <li>A standalone expression of brand, style, and identity</li>
          </ul>

          <p className="text-xs mb-6">
            The effect was immediate. Travis Scott took the formula and expanded it, launching sprawling merch collections that aligned with his album drops. His Astroworld capsules pulled from skate culture, psychedelia, and vintage Americana—and later included collabs with McDonald’s, Nike, and Dior.
          </p>

          <p className="text-xs mb-6">
            Tyler, the Creator built Golf Wang into a colorful, nostalgic brand that started as merch and became its own fashion house. Even Frank Ocean, known for his mystique, launched Homer—a luxury jewelry brand that operates like an art project but still shares merch DNA: identity over utility.
          </p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Merch Becomes Fashion</h2>
          <div className="mb-8">
              <Image
              src="/blog/couture_ending1.jpeg"
              alt="Couture high quality custom merch professional photoshoot"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
          <p className="text-xs mb-6">
            What Yeezus made desirable, technology made accessible.
          </p>

          <p className="text-xs mb-6">
            By the mid-2010s, platforms like Printful, Teespring, and Shopify enabled individuals to launch a fashion-adjacent merch brand. Print-on-demand services eliminated the need for inventory. Shopify and e-commerce tools made online stores turnkey. Social media turned audiences into customers.
          </p>

          <p className="text-xs mb-6">
            This democratization meant that small creators, YouTubers, podcasters, and really any individual could drop merch with the same mechanics Kanye used: aesthetic-first, intentionally limited, and community-driven.
          </p>

          <p>
            Today, merch is no longer relegated to the back of your closet. It's :
          </p>
          <ul className="text-xs mb-6 list-disc pl-4">
            <li>worn as a uniform that signals community and taste</li>
            <li>styled and photographed for Instagram, TikTok, and resale platforms</li>
            <li>designed with fashion in mind, even if it's technically "fan gear"</li>
          </ul>

          <p className="text-xs mb-6">
            From limited-run drops from content creators to your favorite anime hoodie on Shopify, merch has become a vehicle for self-expression. Merch is no longer a byproduct of fame; it’s a blueprint for it.
          </p>

          <p className="text-xs mb-6">
            Want to learn how creators are using print-on-demand and e-commerce to launch their own merch brands? Read the next section for a breakdown of the tools behind the movement.
          </p>

        </div>
      </article>
    </div>
  )
}
