import { Metadata } from "next"
import DesignsGallery from "./DesignsGallery"

// Our Designs data with descriptions
interface DesignItem {
  image: string
  caption: string
  description: string
}

const designsData: {
  title: string
  designs: DesignItem[]
} = {
  title: "Our Designs",
  designs: [
    {
      image: "/designs/AphiHoodie. (1).webp",
      caption: "ALPHA PHI HOODIE DESIGN ALT",
      description: "Alternative design for Alpha Phi featuring custom embroidered details and premium heavyweight cotton blend. This design showcases our signature aesthetic with modern typography and clean lines."
    },
    {
      image: "/designs/ThetaTank.webp",
      caption: "THETA TANK DESIGN",
      description: "Custom tank top design created for Theta sorority with breathable fabric and contemporary styling. Perfect for casual wear and chapter events with a focus on comfort and durability."
    },
    {
      image: "/designs/AphiHoodie (1).webp",
      caption: "ALPHA PHI HOODIE DESIGN",
      description: "Premium hoodie design for Alpha Phi incorporating their brand colors and custom graphics. Made with our signature heavyweight fleece for ultimate comfort and longevity."
    },
    {
      image: "/designs/AphiPants.webp",
      caption: "ALPHA PHI PANTS DESIGN",
      description: "Coordinating sweatpants design to complement the Alpha Phi hoodie collection. Features custom embroidery and relaxed fit for everyday comfort."
    },
    {
      image: "/designs/ThetaTankpng.webp",
      caption: "THETA TANK DESIGN ALT",
      description: "Alternative tank design variation featuring different graphic placement and styling options. Demonstrates our flexibility in creating multiple design concepts for the same organization."
    },
    {
      image: "/designs/AphiHoodie.webp",
      caption: "ALPHA PHI HOODIE DESIGN VARIANT",
      description: "Another variation of the Alpha Phi hoodie showcasing different graphic treatments and color combinations while maintaining brand consistency."
    },
    {
      image: "/designs/EvansScholarsHoodie.webp",
      caption: "EVANS SCHOLARS HOODIE DESIGN",
      description: "Custom hoodie design for Evans Scholars featuring their unique branding and organizational pride. Crafted with attention to detail and organizational values."
    },
    {
      image: "/designs/EvansScholarsPants.webp",
      caption: "EVANS SCHOLARS PANTS DESIGN",
      description: "Matching sweatpants design for Evans Scholars collection, maintaining consistency with the hoodie design while offering versatile styling options."
    },
    {
      image: "/designs/KKGHoodie (2).webp",
      caption: "KAPPA KAPPA GAMMA HOODIE V2",
      description: "Second iteration of Kappa Kappa Gamma hoodie design, refined based on feedback and incorporating enhanced design elements for maximum impact."
    },
    {
      image: "/designs/KKGHoodie (3).webp",
      caption: "KAPPA KAPPA GAMMA HOODIE V3",
      description: "Third design concept for Kappa Kappa Gamma, showcasing our iterative design process and commitment to finding the perfect aesthetic for each client."
    },
    {
      image: "/designs/FishPants.webp",
      caption: "FISH PANTS DESIGN",
      description: "Unique sweatpants design featuring custom fish graphics and playful typography. Demonstrates our ability to create fun, memorable designs that stand out."
    },
    {
      image: "/designs/SigChiHoodie.webp",
      caption: "SIGMA CHI HOODIE DESIGN ALT",
      description: "Alternative Sigma Chi hoodie design showcasing different graphic approaches while maintaining the fraternity's core brand elements and values."
    },
    {
      image: "/designs/KKGHoodie.webp",
      caption: "KAPPA KAPPA GAMMA HOODIE",
      description: "Original Kappa Kappa Gamma hoodie design featuring classic styling with modern updates. Balances tradition with contemporary fashion sensibilities."
    },
    {
      image: "/designs/KKGPants.webp",
      caption: "KAPPA KAPPA GAMMA PANTS",
      description: "Coordinating sweatpants for the KKG collection, designed to work seamlessly with the hoodie while standing strong as a standalone piece."
    },
    {
      image: "/designs/KKGHoodie (1).webp",
      caption: "KAPPA KAPPA GAMMA HOODIE ALT",
      description: "Alternative hoodie design for Kappa Kappa Gamma featuring different color schemes and graphic treatments to provide multiple options for the organization."
    },
    {
      image: "/designs/KKGPants (1).webp",
      caption: "KAPPA KAPPA GAMMA PANTS ALT",
      description: "Alternative sweatpants design variation offering different styling options while maintaining the high-quality standards our clients expect."
    },
    {
      image: "/designs/SigChiHoodie (1).webp",
      caption: "SIGMA CHI HOODIE DESIGN",
      description: "Classic Sigma Chi hoodie design embodying the fraternity's heritage and values through thoughtful typography and color selection."
    },
    {
      image: "/designs/SigChiHoodie5.webp",
      caption: "SIGMA CHI HOODIE DESIGN V5",
      description: "Fifth iteration of Sigma Chi hoodie design, representing our thorough design process and commitment to achieving the perfect final product."
    },
    {
      image: "/designs/UMichSigChiHoodie.webp",
      caption: "SIGMA CHI HOODIE",
      description: "University of Michigan Sigma Chi chapter hoodie design, incorporating both university and fraternity branding in a cohesive, stylish design."
    }
  ]
}

export const metadata: Metadata = {
  title: 'Our Designs | Couture by Ikigai',
  description: 'Explore our custom design portfolio featuring unique merchandise and apparel designs for organizations and universities.',
}

export default function OurDesignsPage() {
  return (
    <DesignsGallery 
      designs={designsData.designs}
      title={designsData.title}
    />
  )
}
