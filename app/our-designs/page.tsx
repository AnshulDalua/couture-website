import Image from "next/image"
import { Metadata } from "next"
import OptimizedImage from "@/app/components/OptimizedImage"

// Our Designs data
const designsData = {
  title: "Our Designs",
  images: [
    "/designs/ThetaTankpng.webp",
    "/designs/ThetaTank.webp",
    "/designs/AphiHoodie (1).webp",
    
    "/designs/AphiPants.webp",
    "/designs/AphiHoodie. (1).webp",
    "/designs/AphiHoodie.webp",
    "/designs/AphiPants.webp",
    "/designs/EvansScholarsPants.webp",
    "/designs/KKGHoodie.webp",
    "/designs/SigChiHoodie (1).webp",
    "/designs/SigChiHoodie.webp",
    "/designs/SigChiHoodie5.webp",
    "/designs/UMichSigChiHoodie.webp",
  ],
  captions: [
    "THETA TANK DESIGN",
    "THETA TANK DESIGN ALT",
    "ALPHA PHI HOODIE DESIGN",
    "ALPHA PHI HOODIE DESIGN ALT",
    "ALPHA PHI HOODIE DESIGN VARIANT",
    "ALPHA PHI HOODIE DESIGN",
    "ALPHA PHI PANTS DESIGN",
    "EVANS SCHOLARS PANTS DESIGN",
    "KAPPA KAPPA GAMMA HOODIE",
    "SIGMA CHI HOODIE DESIGN",
    "SIGMA CHI HOODIE DESIGN ALT",
    "SIGMA CHI HOODIE DESIGN V5",
    "UMICH SIGMA CHI HOODIE",
  ]
}

export const metadata: Metadata = {
  title: 'Our Designs | Couture by Ikigai',
  description: 'Explore our custom design portfolio featuring unique merchandise and apparel designs for organizations and universities.',
}

export default function OurDesignsPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-sm uppercase px-6 py-8">{designsData.title}</h1>
      <div className="px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {designsData.images.map((image, index) => {
            if (image.startsWith('//')) return null;

            return (
              <div key={index}>
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <OptimizedImage
                    src={image}
                    alt={designsData.captions[index] || 'Design image'}
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
