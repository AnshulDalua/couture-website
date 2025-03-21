import Image from "next/image"
import Link from "next/link"

// Feature data
const features = [
  {
    id: "spring-24-lookbook",
    title: "SPRING '24 COLLECTION",
    date: "MARCH 10, 2024",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg",
  },
  {
    id: "world-tour",
    title: "WORLD TOUR",
    date: "FEBRUARY 15, 2024",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//19000025.png",
  },
  {
    id: "artist-series",
    title: "ARTIST SERIES",
    date: "JANUARY 20, 2024",
    image:
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//87566EB3-8B8E-4238-AF38-3B9641F08E78.png",
  },
  {
    id: "archive-collection",
    title: "ARCHIVE COLLECTION",
    date: "DECEMBER 5, 2023",
    image:
      "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//475848642_645182244597226_8001403319392807816_n.png",
  },
  {
    id: "essentials-collection",
    title: "ESSENTIALS COLLECTION",
    date: "ONGOING",
    image: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//IMG_2127.png",
  },
]

export default function FeaturesPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">FEATURES</h1>

      {/* Feature Grid - Simple, clean layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
        {features.map((feature) => (
          <Link href={`/features/${feature.id}`} key={feature.id} className="block group">
            <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                className="group-hover:scale-105"
              />
            </div>
            <h2 className="text-sm uppercase font-medium">{feature.title}</h2>
            <p className="text-xs mt-1">{feature.date}</p>
          </Link>
        ))}
      </div>

      {/* Archive Link */}
      <div className="mt-16 text-center">
        <Link href="/features/archive" className="stussy-button inline-block">
          VIEW ARCHIVE
        </Link>
      </div>
    </div>
  )
}

