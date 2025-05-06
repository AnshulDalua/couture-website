import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import OptimizedImage from "@/app/components/OptimizedImage"

// Feature data
const features = [
  {
    id: "2025-lookbook",
    title: "2025 COLLECTION",
    date: "MARCH 23, 2025",
    image: "/lookbook/19000034.webp",
  },
  {
    id: "2025-clients",
    title: "2025 CLIENTS",
    date: "APRIL 10, 2025",
    image: "/lookbook/Couture-AXO-22.webp",
  },
  // {
  //   id: "artist-series",
  //   title: "ARTIST SERIES",
  //   date: "JANUARY 20, 2024",
  //   image:
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//87566EB3-8B8E-4238-AF38-3B9641F08E78.png",
  // },
  // {
  //   id: "archive-collection",
  //   title: "ARCHIVE COLLECTION",
  //   date: "DECEMBER 5, 2023",
  //   image:
  //     "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//475848642_645182244597226_8001403319392807816_n.png",
  // },
  // {
  //   id: "essentials-collection",
  //   title: "ESSENTIALS COLLECTION",
  //   date: "ONGOING",
  //   image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//IMG_2127.png",
  // },
]

export const metadata: Metadata = {
  title: 'Lookbook | Couture by Ikigai',
  description: 'Explore our lookbook featuring high quality custom merchandise and premium apparel for organizations and universities.',
}

export default function FeaturesPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">LOOKBOOK</h1>

      {/* Feature Grid - Simple, clean layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
        {features.map((feature, index) => (
          <Link href={`/lookbook/${feature.id}`} key={feature.id} className="block group">
            <OptimizedImage
              src={feature.image ?? "/placeholder.svg"}
              alt={`${feature.title} - High quality custom merchandise lookbook`}
              priority={index < 2}
              fetchPriority={index < 2 ? "high" : "auto"}
              sizes="(max-width: 768px) 100vw, 50vw"
              aspectRatio="aspect-[4/3]"
              containerClassName="w-full overflow-hidden"
              className="transition-transform duration-700 group-hover:scale-105"
              loadingStrategy={index < 2 ? "eager" : "progressive"}
            />
            <div className="w-full">
              <div className="mt-2 text-right">
                <h2 className="text-[10px] uppercase font-medium italic text-gray-500">{feature.title}</h2>
                <p className="text-[10px] mt-0.5 italic text-gray-500">{feature.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
