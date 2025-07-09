import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'What Makes Custom Merch High Quality in 2025',
  description: 'A technical breakdown of what actually makes custom merch feel premium, from fabric GSM to Pantone matching and print method comparisons.',
  keywords: ['high quality custom merch', 'how merch is made', 'merch design process', 'screenprint vs dtg', 'what makes good merch'],
  openGraph: {
    title: 'What Makes Custom Merch High Quality?',
    description: 'A technical breakdown of what actually makes custom merch feel premium, from fabric GSM to Pantone matching and print method comparisons.',
    images: [
      {
        url: '/lookbook/19000016.webp',
        width: 1200,
        height: 630,
        alt: 'Close-up of premium custom hoodie stitching and label',
      }
    ],
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mb-8">
        <Link href="/blog" className="text-xs uppercase">
          ← BACK TO JOURNAL
        </Link>
      </div>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-sm md:text-base uppercase font-medium mb-4">What Actually Makes Custom Merch "High Quality"?</h1>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs">JULY 7, 2025</p>
            <p className="text-xs">5 MIN READ</p>
          </div>
        </header>
          <div className="relative h-[50vh] md:h-[80vh] mb-8">
            <Image
              src="/lookbook/19000016.webp"
              alt="High quality custom merchandise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          </div>


        <div className="prose prose-sm max-w-none">
          <p className="text-xs">Custom merch isn’t just a t-shirt with a logo printed on it. When done properly, it becomes a garment people actually choose to wear—repeatedly—not just once at a club event or giveaway. But what <em>exactly</em> makes merch feel and look “high quality”? This article breaks down the key factors that determine whether your merch ends up in someone’s weekly wardrobe—or their donation pile.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">1. Fabric Weight: Why GSM Matters</h2>
          <p className="text-xs">Ever noticed how some hoodies feel light and flimsy, while others feel structured and substantial? That difference often comes down to <strong>GSM</strong>—grams per square meter—a standard measure of fabric weight. The higher the GSM, the thicker and more durable the material.</p>
          <ul>
            <li>Standard Hoodie: ~280 GSM</li>
            <li>Premium Hoodie: 400+ GSM</li>
          </ul>
          <p className="text-xs">A heavier GSM typically means better insulation, smoother drape, and greater longevity after repeated washes. Lighter garments may be cheaper, but they tend to pill, stretch, or lose shape more quickly.</p>
          <p style={{ marginBottom: '20px' }} className="text-xs"><strong>Pro tip:</strong> Printing high-detail designs on low-GSM fabric compromises the final product. Thin fabrics absorb ink differently and may distort prints over time.</p>

          <div className="mb-8">
            <Image
            src="/blog/gsm.png"
            alt="GSM"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg"
            priority
            />
            <p style={{ fontSize: '0.85em', color: '#666' }}>
              Image from <a href="https://stonemountainfabric.com" target="_blank" rel="noopener noreferrer">stonemountainfabric.com</a>
            </p>
          </div>
          <h2 className="text-xs uppercase font-medium mt-12 mb-4">2. Cut and Fit: The Silent Differentiator</h2>
          <p className="text-xs">Fabric quality sets the foundation, but <strong>fit</strong> determines wearability and perceived value. The base garment—or “blank”—varies significantly in cut and silhouette.</p>
          <ul>
            <li><strong>Boxy fit:</strong> Popular in streetwear for a relaxed look</li>
            <li><strong>Slim fit:</strong> Preferred in more structured or professional contexts</li>
            <li><strong>Details:</strong> Drop shoulders, ribbed waistbands, and clean necklines enhance visual quality</li>
          </ul>
          <p className="text-xs">Even the best graphic loses appeal if printed on a poorly fitted blank. Sizing consistency and thoughtful construction matter.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">3. Print Method: Screenprint vs. DTG vs. Embroidery</h2>
          <p className="text-xs">The production method you choose has direct consequences for durability, detail, and cost. Here's how the three major print methods compare:</p>
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pros</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cons</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Screenprint</td>
                  <td className="px-6 py-4">Bold designs, large batches</td>
                  <td className="px-6 py-4">Vibrant, long-lasting</td>
                  <td className="px-6 py-4">High setup costs for small runs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">DTG</td>
                  <td className="px-6 py-4">Full-color art, low quantities</td>
                  <td className="px-6 py-4">High detail, low minimums</td>
                  <td className="px-6 py-4">Less vibrant on dark fabrics</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Embroidery</td>
                  <td className="px-6 py-4">Logos, patches, premium feel</td>
                  <td className="px-6 py-4">Durable, tactile</td>
                  <td className="px-6 py-4">No gradients or photo realism</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">DTF</td>
                  <td className="px-6 py-4">Full-color designs, mixed fabrics</td>
                  <td className="px-6 py-4">Vibrant colors, soft feel, works on dark fabrics</td>
                  <td className="px-6 py-4">Higher cost than screen printing, requires heat press</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mb-6" style={{ marginBottom: '20px' }}>This detailed table compares their methods, highlighting their strengths and limitations.</p>
          <div className="mb-8">
            <div style={{ filter: 'brightness(1.1) contrast(1.05)' }}>
              <Image
                src="/blog/table2.png"
                alt="detailed comparison between DTG, "
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            <p style={{ fontSize: '0.85em', color: '#666', filter:'brightness(1.5)' }}>
              Image from <a href="https://screenprintingmag.com" target="_blank" rel="noopener noreferrer">screenprintingmag.com</a>
            </p>
          </div>
          <h2 className="text-xs uppercase font-medium mt-12 mb-4">4. Color Accuracy: Why Pantone Matching Matters</h2>
          <p className="text-xs">If your logo includes a precise brand color, Pantone Color Matching ensures that it prints exactly as intended. Without it, you risk inconsistent hues across batches or substrates.</p>
          <p className="text-xs">Professional shops use Pantone guides to align colors across cotton, polyester, and blends—an essential for organizations with brand guidelines or repeat orders.</p>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">5. Labeling, Stitching, and Final Touches</h2>
          <div className="mb-8">
            <div style={{ filter: 'brightness(1.1) contrast(1.05)' }}>
              <Image
                src="/blog/stitching.jpg"
                alt="closeup of stitching quality merch"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
          <p className="text-xs">Subtle finishing elements can dramatically shift how your merch is perceived:</p>
          <ul>
            <li><strong>Labeling:</strong> Woven tags or heat-transfer neck labels add professionalism</li>
            <li><strong>Stitching:</strong> Double-stitch hems and reinforced seams increase durability</li>
            <li><strong>Packaging:</strong> Folded garments in polybags or custom-branded mailers create a polished customer experience</li>
          </ul>

          <h2 className="text-xs uppercase font-medium mt-12 mb-4">Conclusion: Quality Is a Chain, Not a Single Link</h2>
          <p className="text-xs">High-quality merch is the result of alignment across fabric, fit, printing, finishing, and consistency. Neglecting any one of these components weakens the final product. Whether you're creating apparel for a club, startup, or creator drop, quality starts with asking better questions early in the process.</p>
          <p className="text-xs">If your goal is to make something people actively choose to wear, not just accept for free, then build with intention—and know the technical tradeoffs along the way.</p>
        </div>
      </article>
    </div>
  )
}
