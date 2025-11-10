import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Company Merch | Startup & Corporate Apparel",
  description: "Premium custom merch for startups, tech companies, and corporate teams. High-quality branded apparel that your team will actually want to wear.",
  openGraph: {
    title: "Custom Company Merch | Startup & Corporate Apparel",
    description: "Premium custom merch for startups, tech companies, and corporate teams. High-quality branded apparel that your team will actually want to wear.",
  },
}

export default function CompanyMerchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl uppercase tracking-wide mb-4">
            NOT NORMAL COMPANY MERCH
          </h1>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We design, manufacture, and deliver premium custom apparel for startups, tech companies, and corporate teams. 
            Every piece is made in-house on our premium blanks—branded merch your team will actually want to wear.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="relative aspect-[3/4]">
            <Image
              src="/reviews/2.webp"
              alt="Custom company branded hoodie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/reviews/9.webp"
              alt="Custom startup team apparel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/reviews/5.webp"
              alt="Custom corporate team merch"
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
            WHY COMPANIES CHOOSE US
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-wide mb-3">FULL DESIGN COLLABORATION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Work directly with our in-house design team to create branded apparel that reflects your 
                company's personality and values. No templates—just thoughtful design that goes beyond the logo.
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
                We use heavyweight, luxury-grade fabrics—the same materials as premium streetwear brands. 
                Your team deserves better than cheap promotional products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wide mb-10 text-center">
          OUR WORK
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative aspect-square">
            <Image
              src="/lookbook/black_1.webp"
              alt="Custom company hoodie design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/lookbook/brown_1.webp"
              alt="Custom startup apparel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/lookbook/red_1.webp"
              alt="Custom corporate team merch"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/lookbook/white_1.webp"
              alt="Custom company branded apparel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </section> */}

      {/* Use Cases */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wide mb-10 text-center">
            PERFECT FOR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-black p-6 bg-white">
              <h3 className="text-xs uppercase tracking-wide mb-3">NEW HIRE WELCOME KITS</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Make day one memorable with premium welcome packages. Show new team members 
                they're joining something special with thoughtfully designed branded apparel.
              </p>
            </div>
            
            <div className="border border-black p-6 bg-white">
              <h3 className="text-xs uppercase tracking-wide mb-3">TEAM BUILDING & OFFSITES</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Create cohesion with matching team apparel for retreats, offsites, and company 
                events. Build culture through shared identity.
              </p>
            </div>
            
            <div className="border border-black p-6 bg-white">
              <h3 className="text-xs uppercase tracking-wide mb-3">CONFERENCES & TRADE SHOWS</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Stand out at industry events with professional, eye-catching branded apparel. 
                Turn your team into walking brand ambassadors.
              </p>
            </div>
            
            <div className="border border-black p-6 bg-white">
              <h3 className="text-xs uppercase tracking-wide mb-3">PRODUCT LAUNCHES</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Celebrate milestones with exclusive limited-edition merch. Create buzz and 
                reward your team for their hard work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wide mb-10 text-center">
          WHO WE WORK WITH
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-center mb-10">
          <div className="uppercase tracking-wide">Tech Startups</div>
          <div className="uppercase tracking-wide">SaaS Companies</div>
          <div className="uppercase tracking-wide">Consulting Firms</div>
          <div className="uppercase tracking-wide">Creative Agencies</div>
          <div className="uppercase tracking-wide">Finance Teams</div>
          <div className="uppercase tracking-wide">Healthcare Orgs</div>
          <div className="uppercase tracking-wide">Retail Brands</div>
          <div className="uppercase tracking-wide">Non-Profits</div>
        </div>

        <div className="text-center">
          <Link
            href="/order"
            className="inline-block bg-black text-white px-12 py-4 uppercase text-sm tracking-widest hover:bg-gray-900 transition-colors duration-300"
          >
            START YOUR ORDER
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm leading-relaxed mb-6 italic">
            "Finally, company merch that doesn't end up in the back of the closet. Our team 
            actually wears these hoodies on weekends. The quality and design are leagues above 
            typical corporate swag."
          </p>
          <p className="text-xs uppercase tracking-wide">— EIGENLAYER HEAD OF MARKETING</p>
        </div>
      </section>
    </div>
  )
}
