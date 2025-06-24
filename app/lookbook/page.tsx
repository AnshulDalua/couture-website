import Image from "next/image"
import { Metadata } from "next"
import OptimizedImage from "@/app/components/OptimizedImage"

// Combined lookbook data
const lookbookData = {
  title: "2025 LOOKBOOK",
  images: [
    "/homepage/clubhouse.webp",
    "/lookbook/19000034.webp",
    "/lookbook/Couture-AXO-22.webp",
    "/lookbook/346048sinh002946-R1-065-31.webp",
    "/lookbook/Couture-AXO-26.webp",
    "/lookbook/sinh001485-R1-025-11.webp",
    "/lookbook/GEC5PTe8uxKZavqgo3m795moqU0.webp",
    "/lookbook/KJRAgt7DZiKyfgWFlAFbqMIopQ.webp",
    "/lookbook/339344sin002250-R1-035-16.webp",
    "/lookbook/NjIQS8yGyr46mzcULQwyoq2nCE.webp",
    "/lookbook/19000029.webp",
    "/homepage/aryani.webp"
  ],
  captions: [
    "CLUBHOUSE IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN RED",
    "VICTORIA IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN RED",
    "ALPHA CHI OMEGA - CUSTOM EMBROIDERED SWEATSUIT IN BLACK",
    "ZHARIA IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN BABY BLUE",
    "ALPHA CHI OMEGA - CUSTOM EMBROIDERED SWEATSUIT IN RED",
    "ARY IN OUR HEAVYWEIGHT CREWNECK AND STRAIGHTCUT SWEATPANTS IN BLACK",
    "MICHIGAN ATLAS DIGITAL - CUSTOM SCREENPRINTED HEAVYWEIGHT HOODIE IN GREY",
    "MICHIGAN NET IMPACT - CUSTOM SCREENPRINTED HEAVYWEIGHT HOODIE IN NAVY",
    "JANSEN IN OUR HEAVYWEIGHT HOODIE AND STRAIGHTCUT SWEATPANTS IN GREY",
    "PI SIGMA EPSILON - CUSTOM SCREENPRINTED HEAVYWEIGHT HOODIE IN BLACK",
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
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">LOOKBOOK</h1>
      
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lookbookData.images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3]">
              <OptimizedImage
                src={image}
                alt={lookbookData.captions[index]}
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, 50vw"
                aspectRatio="aspect-[4/3]"
                containerClassName="w-full h-full object-cover"
                className="transition-transform duration-700 hover:scale-105"
                loadingStrategy={index < 2 ? "eager" : "progressive"}
              />
              <p className="text-xs mt-2">{lookbookData.captions[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
