import Image from "next/image"
import { Metadata } from "next"
import OptimizedImage from "@/app/components/OptimizedImage"

// Our Designs data
const designsData = {
  title: "Our Designs",
  images: [
    "/designs/AphiHoodie. (1).webp",
    "/designs/ThetaTank.webp",
    "/designs/AphiHoodie (1).webp",
    "/designs/AphiPants.webp",
    "/designs/ThetaTankpng.webp",
    "/designs/AphiHoodie.webp",
    "/designs/EvansScholarsHoodie.webp",
    "/designs/EvansScholarsPants.webp",
    "/designs/KKGHoodie (2).webp",
    "/designs/KKGHoodie (3).webp",
    "/designs/FishPants.webp",
    "/designs/SigChiHoodie.webp",
    "/designs/KKGHoodie.webp",
    "/designs/KKGPants.webp",
    "/designs/KKGHoodie (1).webp",
    "/designs/KKGPants (1).webp",
    "/designs/SigChiHoodie (1).webp",
    "/designs/SigChiHoodie5.webp",
    "/designs/UMichSigChiHoodie.webp",
  ],
  captions: [
    "THETA TANK DESIGN",
    "THETA TANK DESIGN ALT",
    "THETA TANK DESIGN VARIANT",
    "ALPHA PHI HOODIE DESIGN",
    "ALPHA PHI HOODIE DESIGN ALT",
    "ALPHA PHI HOODIE DESIGN VARIANT",
    "ALPHA PHI PANTS DESIGN",
    "EVANS SCHOLARS HOODIE DESIGN",
    "EVANS SCHOLARS PANTS DESIGN",
    "FISH PANTS DESIGN",
    "KAPPA KAPPA GAMMA HOODIE",
    "KAPPA KAPPA GAMMA HOODIE ALT",
    "KAPPA KAPPA GAMMA HOODIE V2",
    "KAPPA KAPPA GAMMA HOODIE V3",
    "KAPPA KAPPA GAMMA PANTS",
    "KAPPA KAPPA GAMMA PANTS ALT",
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
