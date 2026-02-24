import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'University Merch | Couture by Ikigai',
  description: 'Custom merchandise for colleges and universities. Premium apparel for student organizations, Greek life, cultural orgs, and more.',
  keywords: ['university merch', 'college custom apparel', 'student organization merch', 'Greek life merch', 'campus custom clothing'],
}

const universityPages = [
  {
    slug: 'michigan-fraternities',
    title: 'Michigan Fraternities',
    description: 'Custom merch for Michigan fraternity chapters—matching sweatsets, hoodies, and premium apparel',
    image: '/lookbook/19000034.webp',
  },
  {
    slug: 'penn-state-sororities',
    title: 'Penn State Sororities',
    description: 'Custom merch for Penn State sorority chapters—matching sweatsets, hoodies, and premium apparel',
    image: '/lookbook/19000034.webp',
  },
  {
    slug: 'ucla-cultural-orgs',
    title: 'UCLA Cultural Organizations',
    description: 'Custom merch for Asian American, Hispanic, Black, and multicultural orgs at UCLA',
    image: '/lookbook/19000034.webp',
  },
];

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-sm uppercase mb-8 tracking-wider text-center">University Merch</h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {universityPages.map((page, index) => (
            <Link href={`/universities/${page.slug}`} key={page.slug} className="group block">
              <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 4}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase font-medium tracking-wide">{page.title}</h3>
                <p className="text-xs mt-1 text-gray-600">{page.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
