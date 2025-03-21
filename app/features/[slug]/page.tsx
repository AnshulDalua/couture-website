import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Feature data
const featuresData = {
  "spring-24-lookbook": {
    title: "SPRING '24 COLLECTION",
    date: "MARCH 10, 2024",
    content: [
      "Our Spring '24 collection represents a thoughtful evolution of our core aesthetic, blending timeless silhouettes with contemporary details.",
      "Each piece is crafted with meticulous attention to quality and designed to integrate seamlessly into your existing wardrobe.",
      "This season, we've focused on versatile layering pieces that transition effortlessly between seasons and occasions.",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//6.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//3.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
    ],
  },
  "world-tour": {
    title: "WORLD TOUR",
    date: "FEBRUARY 15, 2024",
    content: [
      "Our World Tour initiative celebrates our global community and the diverse cultures that inspire our designs.",
      "Each location features exclusive pieces that reflect the local aesthetic while maintaining our distinctive design language.",
      "From Tokyo to New York, Paris to Sydney, our World Tour connects fashion enthusiasts across continents through shared appreciation for quality craftsmanship and timeless style.",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//19000025.png",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//8.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//10.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//4.jpg",
    ],
  },
  "artist-series": {
    title: "ARTIST SERIES",
    date: "JANUARY 20, 2024",
    content: [
      "Our Artist Series represents our commitment to supporting creative communities and fostering meaningful collaborations.",
      "Each release features limited edition pieces developed in partnership with artists who share our values and aesthetic sensibilities.",
      "These collaborations allow us to explore new creative territories while providing a platform for artists to reach new audiences through wearable art.",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//87566EB3-8B8E-4238-AF38-3B9641F08E78.png",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//4.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//1.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//9.jpg",
    ],
  },
  "archive-collection": {
    title: "ARCHIVE COLLECTION",
    date: "DECEMBER 5, 2023",
    content: [
      "The Archive Collection pays homage to our rich history by reintroducing iconic designs from our past catalogs.",
      "Each piece has been carefully selected for its cultural significance and enduring appeal, then faithfully reproduced with the same attention to detail as the originals.",
      "This collection allows both longtime supporters and new customers to experience the designs that helped establish our reputation for quality and innovation.",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//475848642_645182244597226_8001403319392807816_n.png",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//9.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//1.jpg",
    ],
  },
  "essentials-collection": {
    title: "ESSENTIALS COLLECTION",
    date: "ONGOING",
    content: [
      "The Essentials Collection forms the foundation of our brand philosophy: timeless design, superior quality, and versatile styling.",
      "Each piece is crafted from carefully selected materials and constructed to withstand daily wear while maintaining its shape and finish.",
      "These are the garments you'll reach for again and again, designed to complement rather than compete with your existing wardrobe.",
    ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//IMG_2127.png",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg",
    ],
  },
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const feature = featuresData[params.slug as keyof typeof featuresData]

  if (!feature) {
    notFound()
  }

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link href="/features" className="text-xs uppercase">
          ← BACK TO FEATURES
        </Link>
      </div>

      {/* Title and Date */}
      <div className="mb-8">
        <h1 className="text-sm uppercase font-medium">{feature.title}</h1>
        <p className="text-xs mt-1">{feature.date}</p>
      </div>

      {/* Hero Image */}
      <div className="mb-8">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={feature.images[0] || "/placeholder.svg"}
            alt={feature.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* Content and Images - Alternating */}
      <div className="space-y-8">
        {/* First paragraph */}
        <p className="text-xs max-w-2xl">{feature.content[0]}</p>

        {/* Second image */}
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={feature.images[1] || "/placeholder.svg"}
            alt={`${feature.title} image 2`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Second paragraph */}
        {feature.content[1] && <p className="text-xs max-w-2xl">{feature.content[1]}</p>}

        {/* Third image */}
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={feature.images[2] || "/placeholder.svg"}
            alt={`${feature.title} image 3`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Third paragraph */}
        {feature.content[2] && <p className="text-xs max-w-2xl">{feature.content[2]}</p>}

        {/* Fourth image (if available) */}
        {feature.images[3] && (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={feature.images[3] || "/placeholder.svg"}
              alt={`${feature.title} image 4`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        {/* Fifth image (if available) */}
        {feature.images[4] && (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={feature.images[4] || "/placeholder.svg"}
              alt={`${feature.title} image 5`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>

      {/* Share Links */}
      <div className="mt-12 pt-8 border-t border-[#ececec]">
        <p className="text-xs uppercase mb-2">SHARE</p>
        <div className="flex space-x-4">
          <a href="#" className="text-xs uppercase">
            FACEBOOK
          </a>
          <a href="#" className="text-xs uppercase">
            TWITTER
          </a>
          <a href="#" className="text-xs uppercase">
            PINTEREST
          </a>
        </div>
      </div>
    </div>
  )
}

