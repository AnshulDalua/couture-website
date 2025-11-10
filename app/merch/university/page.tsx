import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom University Organization Merch | Student Club Apparel",
  description: "Premium custom merch for university clubs, student organizations, and campus groups. High-quality hoodies, sweatpants, and apparel that represents your organization.",
  openGraph: {
    title: "Custom University Organization Merch | Student Club Apparel",
    description: "Premium custom merch for university clubs, student organizations, and campus groups. High-quality hoodies, sweatpants, and apparel that represents your organization.",
  },
}

export default function UniversityMerchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl uppercase tracking-wide mb-4">
            NOT NORMAL CAMPUS MERCH
          </h1>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We design, manufacture, and deliver premium custom apparel for student organizations, clubs, and campus groups. 
            Every piece is made in-house on our premium blanks—from concept to delivery, we handle it all.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="relative aspect-[3/4]">
            <Image
              src="/reviews/4.webp"
              alt="Custom university organization hoodie"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/reviews/revv1.webp"
              alt="Custom student organization apparel"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/reviews/revv2.webp"
              alt="Custom campus club merch"
              fill
              className="object-contain"
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
            WHY STUDENT ORGANIZATIONS CHOOSE US
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-wide mb-3">FULL DESIGN COLLABORATION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Work directly with our in-house design team to create custom designs that reflect your 
                organization's mission and values. No templates—just unique merch for your group.
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
                Student-friendly pricing without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wide mb-10 text-center">
          DESIGNS WE MADE FOR SCHOOL CLUBS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative aspect-square">
            <Image
              src="/designs/EvansScholarsHoodie.webp"
              alt="Evans Scholars custom hoodie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/EvansScholarsPants.webp"
              alt="Evans Scholars custom sweatpants"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/SigChiHoodie.webp"
              alt="Custom student organization apparel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/designs/UMichSigChiHoodie.webp"
              alt="Custom campus club hoodie"
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
            <div className="uppercase tracking-wide">Consulting Clubs</div>
            <div className="uppercase tracking-wide">Business Orgs</div>
            <div className="uppercase tracking-wide">Cultural Groups</div>
            <div className="uppercase tracking-wide">Academic Societies</div>
            <div className="uppercase tracking-wide">Sports Clubs</div>
            <div className="uppercase tracking-wide">Service Orgs</div>
            <div className="uppercase tracking-wide">Honor Societies</div>
            <div className="uppercase tracking-wide">Student Government</div>
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
