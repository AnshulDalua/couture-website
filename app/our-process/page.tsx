import Image from "next/image"
import Link from "next/link"

export default function OurProcessPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-sm uppercase px-6 pt-8 pb-2">OUR PROCESS</h1>

      <div className="px-6">
        <p className="text-xs text-gray-600 mb-6">
          From concept to delivery in 2-3 weeks.{' '}
          <Link href="/order" className="underline font-semibold">
            Request your order
          </Link>{' '}
          to get started.
        </p>

        {/* All steps in horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col">
            <div className="relative h-[50vh] md:h-[60vh] mb-4">
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/process/Screenshot%202025-03-24%20at%207.56.35%20PM.png"
                alt="Design process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="py-4">
              <h2 className="text-sm uppercase font-medium mb-4">1. Share Your Vision</h2>
              <p className="text-xs">
              Receive your digital render - Once you approve, we’ll start production.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <div className="relative h-[50vh] md:h-[60vh] mb-4">
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/process/PHOTO-2025-02-20-06-13-41-removebg-preview.png"
                alt="Material selection"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="py-4">
              <h2 className="text-sm uppercase font-medium mb-4">2. High quality production </h2>
              <p className="text-xs">
              We start manufacturing your designs using embroidery, screenprint and hot press.            
                </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <div className="relative h-[50vh] md:h-[60vh] mb-4">
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-24.jpg"
                alt="Production process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="py-4">
              <h2 className="text-sm uppercase font-medium mb-4">3. DELIVERY </h2>
              <p className="text-xs">
              Expect your order at your doorstep in 2-3 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}