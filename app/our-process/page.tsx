import Image from "next/image"

export default function OurProcessPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-sm uppercase px-6 py-8">OUR PROCESS</h1>

      <div className="space-y-32">
        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8">
            <h2 className="text-sm uppercase font-medium mb-4">1. DESIGN</h2>
            <p className="text-xs max-w-md">
              Every piece begins in our design studio, where our team of designers draws inspiration from art, culture, and everyday life. We sketch, prototype, and refine until we've created something that embodies our aesthetic while maintaining functionality and comfort.
            </p>
          </div>
          <div className="relative h-[70vh] md:h-screen">
            <Image
              src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/process/Screenshot%202025-03-24%20at%207.56.35%20PM.png"
              alt="Design process"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8 md:order-2">
            <h2 className="text-sm uppercase font-medium mb-4">2. MATERIALS</h2>
            <p className="text-xs max-w-md">
              We source only the highest quality materials, prioritizing sustainability and ethical production. From organic cotton to recycled polyester, we carefully select each fabric based on its environmental impact, durability, and feel.
            </p>
          </div>
          <div className="relative h-[70vh] md:h-screen md:order-1">
            <Image
              src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/process/PHOTO-2025-02-20-06-13-41-removebg-preview.png"
              alt="Material selection"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8">
            <h2 className="text-sm uppercase font-medium mb-4">3. PRODUCTION</h2>
            <p className="text-xs max-w-md">
              Our garments are crafted in small batches by skilled artisans who take pride in their work. We maintain close relationships with our manufacturing partners to ensure fair labor practices and quality control at every stage of production.
            </p>
          </div>
          <div className="relative h-[70vh] md:h-screen">
            <Image
              src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-24.jpg"
              alt="Production process"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}