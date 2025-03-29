import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Feature data
const featuresData = {
  "2025-lookbook": {
    title: "2025 COLLECTION",
    date: "MARCH 23, 2025",
    content: [
          ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/19000034.JPG",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/346048sinh002946-R1-069-33.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/346048sinh002946-R1-065-31.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/sinh001485-R1-025-11.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/lookbook/339344sin002250-R1-017-7.jpg",
    ],
  },
  "2025-clients": {
    title: "2025 CLIENTS",
    date: "FEBRUARY 15, 2024",
    content: [
          ],
    images: [
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-22.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-26.jpg",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/GEC5PTe8uxKZavqgo3m795moqU0.webp",
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/KJRAgt7DZiKyfgWFlAFbqMIopQ.avif",
    ],
  },
  // "artist-series": {
  //   title: "ARTIST SERIES",
  //   date: "JANUARY 20, 2024",
  //   content: [
  //     "Our Artist Series represents our commitment to supporting creative communities and fostering meaningful collaborations.",
  //     "Each release features limited edition pieces developed in partnership with artists who share our values and aesthetic sensibilities.",
  //     "These collaborations allow us to explore new creative territories while providing a platform for artists to reach new audiences through wearable art.",
  //   ],
  //   images: [
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//87566EB3-8B8E-4238-AF38-3B9641F08E78.png",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//4.jpg",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//1.jpg",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//9.jpg",
  //   ],
  // },
  // "archive-collection": {
  //   title: "ARCHIVE COLLECTION",
  //   date: "DECEMBER 5, 2023",
  //   content: [
  //     "The Archive Collection pays homage to our rich history by reintroducing iconic designs from our past catalogs.",
  //     "Each piece has been carefully selected for its cultural significance and enduring appeal, then faithfully reproduced with the same attention to detail as the originals.",
  //     "This collection allows both longtime supporters and new customers to experience the designs that helped establish our reputation for quality and innovation.",
  //   ],
  //   images: [
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//475848642_645182244597226_8001403319392807816_n.png",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//9.jpg",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//1.jpg",
  //   ],
  // },
  // "essentials-collection": {
  //   title: "ESSENTIALS COLLECTION",
  //   date: "ONGOING",
  //   content: [
  //     "The Essentials Collection forms the foundation of our brand philosophy: timeless design, superior quality, and versatile styling.",
  //     "Each piece is crafted from carefully selected materials and constructed to withstand daily wear while maintaining its shape and finish.",
  //     "These are the garments you'll reach for again and again, designed to complement rather than compete with your existing wardrobe.",
  //   ],
  //   images: [
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//IMG_2127.png",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg",
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg",
  //   ],
  // },
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const feature = featuresData[params.slug as keyof typeof featuresData]

  if (!feature) {
    notFound()
  }

  return (
    <div className="px-6 py-8">
      {/* Back Link */}
      <div className="mb-8">
        <Link href="/lookbook" className="text-xs uppercase">
          ← BACK TO LOOKBOOK
        </Link>
      </div>

      {/* Title and Date */}
      <div className="mb-8">
        <h1 className="text-sm uppercase font-medium">{feature.title}</h1>
        <p className="text-xs mt-1">{feature.date}</p>
      </div>

      {/* Images and Content */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Hero Image */}
        <div className="w-full">
          <img
            src={feature.images[0] || "/placeholder.svg"}
            alt={feature.title}
            className="w-full"
          />
        </div>

        {/* First paragraph */}
        {feature.content[0] && <p className="text-xs max-w-2xl">{feature.content[0]}</p>}

        {/* Second image */}
        <div className="w-full">
          <img
            src={feature.images[1] || "/placeholder.svg"}
            alt={`${feature.title} image 2`}
            className="w-full"
          />
        </div>

        {/* Second paragraph */}
        {feature.content[1] && <p className="text-xs max-w-2xl">{feature.content[1]}</p>}

        {/* Third image */}
        <div className="w-full">
          <img
            src={feature.images[2] || "/placeholder.svg"}
            alt={`${feature.title} image 3`}
            className="w-full"
          />
        </div>

        {/* Third paragraph */}
        {feature.content[2] && <p className="text-xs max-w-2xl">{feature.content[2]}</p>}

        {/* Fourth image (if available) */}
        {feature.images[3] && (
          <div className="w-full">
            <img
              src={feature.images[3] || "/placeholder.svg"}
              alt={`${feature.title} image 4`}
              className="w-full"
            />
          </div>
        )}

        {/* Fifth image (if available) */}
        {feature.images[4] && (
          <div className="w-full">
            <img
              src={feature.images[4] || "/placeholder.svg"}
              alt={`${feature.title} image 5`}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}
