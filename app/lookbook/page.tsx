import Image from "next/image"
import { Metadata } from "next"
import OptimizedImage from "@/app/components/OptimizedImage"

// Combined lookbook data
const lookbookData = {
  title: "Looks",
  images: [
    "/homepage/clubhouse.webp",
    "/lookbook/19000034.webp",
    "/lookbook/Couture-AXO-22.webp",
    "/lookbook/346048sinh002946-R1-065-31.webp",
    "/lookbook/Couture-AXO-26.webp",
    "/lookbook/sinh001485-R1-025-11.webp",
    // "/lookbook/GEC5PTe8uxKZavqgo3m795moqU0.webp",
    // "/lookbook/KJRAgt7DZiKyfgWFlAFbqMIopQ.webp",
    "/lookbook/clubhous.webp",
    // "/lookbook/NjIQS8yGyr46mzcULQwyoq2nCE.webp",
    "/lookbook/19000029.webp",
    "/homepage/aryani.webp"
  ],
  captions: [
    "CLUBHOUSE IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN GREEN",
    "VICTORIA IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN RED",
    "ALPHA CHI OMEGA - CUSTOM EMBROIDERED SWEATSUIT IN BLACK",
    "ZHARIA IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN BABY BLUE",
    "ALPHA CHI OMEGA - CUSTOM EMBROIDERED SWEATSUIT IN RED",
    "ARY IN OUR HEAVYWEIGHT CREWNECK AND STRAIGHTCUT SWEATPANTS IN BLACK",
    // "MICHIGAN ATLAS DIGITAL - CUSTOM SCREENPRINTED HEAVYWEIGHT HOODIE IN GREY",
    // "MICHIGAN NET IMPACT - CUSTOM SCREENPRINTED HEAVYWEIGHT HOODIE IN NAVY",
    "CLUBHOUSE IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN GREEN",
    // "PI SIGMA EPSILON - CUSTOM SCREENPRINTED HEAVYWEIGHT HOODIE IN BLACK",
    "VICTORIA IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN RED",
    "ARY AND ANI IN OUR HEAVYWEIGHT HOODIE IN BLUE AND YELLOW"
  ]
}

export const metadata: Metadata = {
  title: '2025 Lookbook | Couture by Ikigai',
  description: 'Explore our 2025 collection featuring high quality custom merchandise and premium apparel for organizations and universities.',
}

export default function LookbookPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-12">
      <h1 className="text-center text-sm uppercase tracking-wider mb-12">{lookbookData.title}</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {lookbookData.images.map((image, index) => {
          if (image.startsWith('//')) return null;

          return (
            <div key={index}>
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <OptimizedImage
                  src={image}
                  alt={lookbookData.captions[index] || 'Lookbook image'}
                  priority={index < 8}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  containerClassName="w-full h-full"
                  className="object-contain w-full h-full transition-transform duration-700 hover:scale-105"
                  loadingStrategy={index < 8 ? "eager" : "progressive"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
