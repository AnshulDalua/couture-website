import Image from "next/image"
import { Metadata } from "next"
import OptimizedImage from "@/app/components/OptimizedImage"

// Combined lookbook data
const lookbookData = {
  title: "Lookbook",
  images: [
    "/lookbook/l40.webp",
    "/lookbook/Couture-AXO-26.webp",
    "/lookbook/l20.webp",
    "/lookbook/346048sinh002946-R1-065-31.webp",
    "/homepage/aryani.webp",
    "/lookbook/19000034.webp",
    "/lookbook/l29.webp",
    "/homepage/clubhouse.webp",
    "/lookbook/l25.webp",
    // "/lookbook/l13.webp",
    "/lookbook/l7.webp",
    // "/lookbook/346048sinh002946-R1-065-31.webp",
    "/lookbook/l24.webp",
    "/lookbook/Couture-AXO-22.webp",
    "/lookbook/l11.webp",
    "/lookbook/l1.webp",
    "/lookbook/19000032.webp",
    // "/lookbook/l23.webp",
    "/homepage/janssen1.webp",
    // "/lookbook/l22.webp",
    "/lookbook/l9.webp",
"/lookbook/l12.webp",
    "/lookbook/19000029.webp",
    "/lookbook/clubhous.webp",
    "/lookbook/l10.webp",
    "/lookbook/l26.webp",
    "/lookbook/sinh001485-R1-025-11.webp",
    "/lookbook/l2.webp",
  ],
  captions: [
    "CLUBHOUSE IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN GREEN",
    "VICTORIA IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN RED",
    "ALPHA CHI OMEGA - CUSTOM EMBROIDERED SWEATSUIT IN BLACK",
    "ZHARIA IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN BABY BLUE",
    "ALPHA CHI OMEGA - CUSTOM EMBROIDERED SWEATSUIT IN RED",
    "ARY IN OUR HEAVYWEIGHT CREWNECK AND STRAIGHTCUT SWEATPANTS IN BLACK",
    "LOOKBOOK COLLECTION - DESIGN 1",
    "LOOKBOOK COLLECTION - DESIGN 2",
    "LOOKBOOK COLLECTION - DESIGN 3",
    "LOOKBOOK COLLECTION - DESIGN 4",
    "CLUBHOUSE IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN GREEN",
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
    <div className="min-h-screen">
      <h1 className="text-sm uppercase px-6 py-8">{lookbookData.title}</h1>
      <div className="px-6">
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
    </div>
  )
}
