import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Greek Life Merch | Custom Sorority & Fraternity Apparel",
  description: "Elevate your chapter's style with custom Greek life merch. High-quality hoodies, sweatpants, and apparel designed exclusively for sororities and fraternities.",
  openGraph: {
    title: "Premium Greek Life Merch | Custom Sorority & Fraternity Apparel",
    description: "Elevate your chapter's style with custom Greek life merch. High-quality hoodies, sweatpants, and apparel designed exclusively for sororities and fraternities.",
  },
}

export default function GreekMerchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl uppercase tracking-wide mb-4">
            NOT NORMAL GREEK MERCH
          </h1>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We design, manufacture, and deliver premium custom apparel exclusively for sororities and fraternities. 
            Every piece is made in-house on our premium blanks—no middlemen, just quality.
          </p>
        </div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="relative aspect-[3/4]">
            <Image
              src="/lookbook/Couture-AXO-26.webp"
              alt="Custom Kappa Kappa Gamma hoodie design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/lookbook/axo-yellow.webp"
              alt="Custom Alpha Phi hoodie design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/lookbook/Couture-AXO-22.webp"
              alt="Custom Kappa Alpha Theta tank design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Link
            href="/order"
            className="inline-block bg-black text-white px-12 py-4 uppercase text-sm tracking-widest hover:bg-gray-900 transition-colors duration-300"
          >
            START YOUR ORDER
          </Link>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wide mb-10 text-center">
            WHY CHAPTERS CHOOSE US
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-wide mb-3">FULL DESIGN COLLABORATION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Work directly with our in-house design team from concept to final mockup. 
                We bring your vision to life—no templates, no limitations, just your chapter's unique style.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wide mb-3">IN-HOUSE MANUFACTURING</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Everything is made in our facility on premium custom blanks. We control quality at every 
                step—from cutting and printing to embroidery and finishing. No outsourcing, ever.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wide mb-3">PREMIUM CUSTOM BLANKS</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We use only the highest quality heavyweight fabrics—the same materials as luxury streetwear brands. 
                Built to last through countless wears, washes, and chapter events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wide mb-10 text-center">
          RECENT CHAPTER DESIGNS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative aspect-square">
            <Image
              src="/designs/KKGHoodie (1).webp"
              alt="Sigma Chi custom hoodie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/AphiHoodie.webp"
              alt="Kappa Kappa Gamma custom sweatpants"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/AphiPants.webp"
              alt="Alpha Phi custom sweatpants"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/ThetaTank.webp"
              alt="Kappa Kappa Gamma custom hoodie design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-wide mb-8">PERFECT FOR</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs mb-10">
            <div className="uppercase tracking-wide">Rush Week</div>
            <div className="uppercase tracking-wide">Bid Day</div>
            <div className="uppercase tracking-wide">Formals</div>
            <div className="uppercase tracking-wide">Philanthropy Events</div>
            <div className="uppercase tracking-wide">Game Days</div>
            <div className="uppercase tracking-wide">Chapter Retreats</div>
            <div className="uppercase tracking-wide">Big/Little Reveal</div>
            <div className="uppercase tracking-wide">Everyday Wear</div>
          </div>

          <Link
            href="/order"
            className="inline-block bg-black text-white px-12 py-4 uppercase text-sm tracking-widest hover:bg-gray-900 transition-colors duration-300"
          >
            START YOUR ORDER
          </Link>
        </div>
      </section>

    </div>
  )
}
