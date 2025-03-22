import Image from "next/image"

export default function OurProcessPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">OUR PROCESS</h1>

      <div className="max-w-3xl mx-auto">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-sm mb-4">
            At IKIGAI, we believe in creating high-quality, sustainable products that stand the test of time. Our process is rooted in craftsmanship, attention to detail, and respect for the environment.
          </p>
          <div className="relative aspect-[16/9] w-full mb-4">
            <Image
              src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//7.jpg"
              alt="Our workshop"
              fill
              style={{ objectFit: "cover" }}
              className="w-full"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm uppercase font-medium mb-2">1. DESIGN</h2>
              <p className="text-xs">
                Every piece begins in our design studio, where our team of designers draws inspiration from art, culture, and everyday life. We sketch, prototype, and refine until we've created something that embodies our aesthetic while maintaining functionality and comfort.
              </p>
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//3.jpg"
                alt="Design process"
                fill
                style={{ objectFit: "cover" }}
                className="w-full"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-2">
              <h2 className="text-sm uppercase font-medium mb-2">2. MATERIALS</h2>
              <p className="text-xs">
                We source only the highest quality materials, prioritizing sustainability and ethical production. From organic cotton to recycled polyester, we carefully select each fabric based on its environmental impact, durability, and feel.
              </p>
            </div>
            <div className="relative aspect-square w-full md:order-1">
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//4.jpg"
                alt="Material selection"
                fill
                style={{ objectFit: "cover" }}
                className="w-full"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm uppercase font-medium mb-2">3. PRODUCTION</h2>
              <p className="text-xs">
                Our garments are crafted in small batches by skilled artisans who take pride in their work. We maintain close relationships with our manufacturing partners to ensure fair labor practices and quality control at every stage of production.
              </p>
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//5.jpg"
                alt="Production process"
                fill
                style={{ objectFit: "cover" }}
                className="w-full"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-2">
              <h2 className="text-sm uppercase font-medium mb-2">4. QUALITY CONTROL</h2>
              <p className="text-xs">
                Before any product reaches our customers, it undergoes rigorous quality checks. We inspect stitching, materials, and overall construction to ensure that every piece meets our high standards and will provide lasting value.
              </p>
            </div>
            <div className="relative aspect-square w-full md:order-1">
              <Image
                src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//6.jpg"
                alt="Quality control"
                fill
                style={{ objectFit: "cover" }}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="mt-16">
          <h2 className="text-sm uppercase font-medium mb-4">OUR COMMITMENT TO SUSTAINABILITY</h2>
          <p className="text-xs mb-4">
            Sustainability isn't just a buzzword for us—it's a core value that guides every decision we make. We're constantly working to reduce our environmental footprint through:
          </p>
          <ul className="text-xs list-disc pl-4 mb-8">
            <li className="mb-2">Using organic and recycled materials whenever possible</li>
            <li className="mb-2">Minimizing waste in our production process</li>
            <li className="mb-2">Reducing packaging and using recyclable materials</li>
            <li className="mb-2">Supporting carbon offset programs</li>
            <li className="mb-2">Designing timeless pieces that won't go out of style</li>
          </ul>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai//2.jpg"
              alt="Sustainability"
              fill
              style={{ objectFit: "cover" }}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 