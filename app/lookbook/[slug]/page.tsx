import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import OptimizedImage from "@/app/components/OptimizedImage"

// Feature data
const featuresData = {
  "2025-lookbook": {
    title: "2025 COLLECTION",
    date: "MARCH 23, 2025",
    content: [
          ],
    images: [
      "/lookbook/19000034.webp",
      "/lookbook/346048sinh002946-R1-065-31.webp",
      "/lookbook/sinh001485-R1-025-11.webp",
      "/lookbook/19000016.webp",
      "/lookbook/339344sin002250-R1-035-16.webp",
      "/lookbook/19000029.webp",
      "/lookbook/346048sinh002946-R1-077-37.webp"
    ],
  },
  "2025-clients": {
    title: "2025 CLIENTS",  
    date: "APRIL 10, 2025",
    content: [
          ],
    images: [
      "/lookbook/Couture-AXO-22.webp",
      "/lookbook/Couture-AXO-26.webp",
      "/lookbook/GEC5PTe8uxKZavqgo3m795moqU0.webp",
      "/lookbook/KJRAgt7DZiKyfgWFlAFbqMIopQ.webp",
      "/lookbook/NjIQS8yGyr46mzcULQwyoq2nCE.webp",
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const feature = featuresData[params.slug as keyof typeof featuresData]

  if (!feature) {
    return {
      title: "Lookbook Not Found",
    }
  }

  return {
    title: `${feature.title} | Couture by Ikigai`,
    description: `View our ${feature.title.toLowerCase()} featuring high quality custom merchandise and premium apparel.`,
  }
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const feature = featuresData[params.slug as keyof typeof featuresData]

  // Determine if this is a full-image (contain) page
  const showFullImage = params.slug === '2025-lookbook'
  const forceAspectCover = params.slug === '2025-clients'

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
      <div className={`space-y-12 mx-auto ${showFullImage || forceAspectCover ? 'max-w-7xl md:max-w-[90vw]' : 'max-w-5xl'}`}>
        {/* Hero Image */}
        <div className="w-full">
          <OptimizedImage
            src={feature.images[0] ?? "/placeholder.svg"}
            alt={`${feature.title} - High quality custom merchandise`}


            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 1200px"
            aspectRatio={showFullImage ? undefined : "aspect-[4/3] md:aspect-[3/2]"}
            loadingStrategy="eager"
            fitMode={forceAspectCover ? 'cover' : (showFullImage ? 'contain' : 'cover')}
          />
        </div>

        {/* First paragraph */}
        {feature.content[0] && <p className="text-xs max-w-2xl">{feature.content[0]}</p>}

        {/* Second image */}
        <div className="w-full">
          <OptimizedImage
            src={feature.images[1] ?? "/placeholder.svg"}
            alt={`${feature.title} - Premium custom hoodies and apparel`}


            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 1200px"
            aspectRatio={showFullImage ? undefined : "aspect-[4/3] md:aspect-[3/2]"}
            loadingStrategy="eager"
            fitMode={forceAspectCover ? 'cover' : (showFullImage ? 'contain' : 'cover')}
          />
        </div>

        {/* Second paragraph */}
        {feature.content[1] && <p className="text-xs max-w-2xl">{feature.content[1]}</p>}

        {/* Third image */}
        <div className="w-full">
          <OptimizedImage
            src={feature.images[2] ?? "/placeholder.svg"}
            alt={`${feature.title} - Best custom merchandise designs`}


            sizes="(max-width: 768px) 100vw, 1200px"
            aspectRatio={showFullImage ? undefined : "aspect-[4/3] md:aspect-[3/2]"}
            loadingStrategy="progressive"
            fitMode={forceAspectCover ? 'cover' : (showFullImage ? 'contain' : 'cover')}
          />
        </div>

        {/* Third paragraph */}
        {feature.content[2] && <p className="text-xs max-w-2xl">{feature.content[2]}</p>}

        {/* Fourth image (if available) */}
        {feature.images[3] && (
          <div className="w-full">
            <OptimizedImage
              src={feature.images[3] ?? "/placeholder.svg"}
              alt={`${feature.title} - Custom organization apparel`}


              sizes="(max-width: 768px) 100vw, 1200px"
              aspectRatio={showFullImage ? undefined : "aspect-[4/3] md:aspect-[3/2]"}
              loadingStrategy="progressive"
              fitMode={forceAspectCover ? 'cover' : (showFullImage ? 'contain' : 'cover')}
            />
          </div>
        )}

        {/* Fifth image (if available) */}
        {feature.images[4] && (
          <div className="w-full">
            <OptimizedImage
              src={feature.images[4] ?? "/placeholder.svg"}
              alt={`${feature.title} - University custom merchandise`}


              sizes="(max-width: 768px) 100vw, 1200px"
              aspectRatio={showFullImage ? undefined : "aspect-[4/3] md:aspect-[3/2]"}
              loadingStrategy="progressive"
              fitMode={forceAspectCover ? 'cover' : (showFullImage ? 'contain' : 'cover')}
            />
          </div>
        )}

        {/* Sixth image (if available) */}
        {feature.images[5] && (
          <div className="w-full">
            <OptimizedImage
              src={feature.images[5] ?? "/placeholder.svg"}
              alt={`${feature.title} - University custom merchandise`}


              sizes="(max-width: 768px) 100vw, 1200px"
              aspectRatio={showFullImage ? undefined : "aspect-[4/3] md:aspect-[3/2]"}
              loadingStrategy="progressive"
              fitMode={forceAspectCover ? 'cover' : (showFullImage ? 'contain' : 'cover')}
            />
          </div>
        )}

        {feature.images[6] && (
          <div className="w-full">
            <OptimizedImage
              src={feature.images[6] ?? "/placeholder.svg"}
              alt={`${feature.title} - University custom merchandise`}


              sizes="(max-width: 768px) 100vw, 1200px"
              aspectRatio={showFullImage ? undefined : "aspect-[4/3] md:aspect-[3/2]"}
              loadingStrategy="progressive"
              fitMode={forceAspectCover ? 'cover' : (showFullImage ? 'contain' : 'cover')}
            />
          </div>
        )}
      </div>
    </div>
  )
}