import { Metadata } from "next"
import DesignsGallery from "./DesignsGallery"
import WinterRushCountdown from "@/app/components/WinterRushCountdown"

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
      image: "/designs/A Chi O Tank.webp",
      caption: "ALPHA CHI OMEGA TANK",
      description: "Custom tank top design for Alpha Chi Omega featuring their signature branding and colors. Perfect for warm weather events and casual chapter gatherings."
    },
    {
      image: "/designs/Accapella.webp",
      caption: "ACAPELLA GROUP DESIGN",
      description: "Custom apparel design for an acapella group showcasing musical elements and group identity. Demonstrates our versatility in designing for diverse organizations beyond Greek life."
    },
    {
      image: "/designs/AphiHoodie. (1).webp",
      caption: "ALPHA PHI HOODIE DESIGN ALT",
      description: "Alternative design for Alpha Phi featuring custom embroidered details and premium heavyweight cotton blend. This design showcases our signature aesthetic with modern typography and clean lines."
    },
    // {
    //   image: "/designs/AphiHoodie (1).webp",
    //   caption: "ALPHA PHI HOODIE VARIANT",
    //   description: "Another Alpha Phi hoodie variation with unique graphic treatments and color combinations while maintaining brand consistency and sorority pride."
    // },
    {
      image: "/designs/AphiPants (1).webp",
      caption: "ALPHA PHI PANTS ALT",
      description: "Alternative sweatpants design for Alpha Phi offering different styling options while maintaining the high-quality standards our clients expect."
    },
    {
      image: "/designs/AphiHoodie.webp",
      caption: "ALPHA PHI HOODIE CLASSIC",
      description: "Classic Alpha Phi hoodie design featuring timeless styling with modern updates. Balances tradition with contemporary fashion sensibilities."
    },
    {
      image: "/designs/AphiHoodie (1)(2).webp",
      caption: "ALPHA PHI HOODIE DESIGN",
      description: "Premium hoodie design for Alpha Phi incorporating their brand colors and custom graphics. Made with our signature heavyweight fleece for ultimate comfort and longevity."
    },
    {
      image: "/designs/AphiPants.webp",
      caption: "ALPHA PHI PANTS DESIGN",
      description: "Coordinating sweatpants design to complement the Alpha Phi hoodie collection. Features custom embroidery and relaxed fit for everyday comfort."
    },
    {
      image: "/designs/DZ Tank.webp",
      caption: "DELTA ZETA TANK",
      description: "Custom tank top design for Delta Zeta sorority with breathable fabric and contemporary styling. Perfect for casual wear and chapter events."
    },
    {
      image: "/designs/EvansScholarsHoodie.webp",
      caption: "EVANS SCHOLARS HOODIE",
      description: "Custom hoodie design for Evans Scholars featuring their unique branding and organizational pride. Crafted with attention to detail and organizational values."
    },
    {
      image: "/designs/EvansScholarsPants.webp",
      caption: "EVANS SCHOLARS PANTS",
      description: "Matching sweatpants design for Evans Scholars collection, maintaining consistency with the hoodie design while offering versatile styling options."
    },
    {
      image: "/designs/FishPants.webp",
      caption: "FISH PANTS DESIGN",
      description: "Unique sweatpants design featuring custom fish graphics and playful typography. Demonstrates our ability to create fun, memorable designs that stand out."
    },
    {
      image: "/designs/Girls Varsity tennis.webp",
      caption: "GIRLS VARSITY TENNIS",
      description: "Custom athletic apparel design for a girls varsity tennis team. Combines performance functionality with stylish team branding for competitive athletes."
    },
    {
      image: "/designs/KKG Tank.webp",
      caption: "KAPPA KAPPA GAMMA TANK",
      description: "Lightweight tank top design for Kappa Kappa Gamma featuring their iconic branding. Perfect for workouts, warm weather, and casual chapter events."
    },
    {
      image: "/designs/KKGHoodie.webp",
      caption: "KAPPA KAPPA GAMMA HOODIE",
      description: "Original Kappa Kappa Gamma hoodie design featuring classic styling with modern updates. Balances tradition with contemporary fashion sensibilities."
    },
    {
      image: "/designs/KKGHoodie (1).webp",
      caption: "KAPPA KAPPA GAMMA HOODIE ALT",
      description: "Alternative hoodie design for Kappa Kappa Gamma featuring different color schemes and graphic treatments to provide multiple options for the organization."
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
      image: "/designs/KKGOLF back-35.webp",
      caption: "KKG GOLF BACK DESIGN",
      description: "Back design detail for Kappa Kappa Gamma golf apparel, featuring custom graphics and branding elements specifically tailored for athletic wear."
    },
    {
      image: "/designs/KKGolf Front.webp",
      caption: "KKG GOLF FRONT DESIGN",
      description: "Front design for Kappa Kappa Gamma golf apparel, combining performance functionality with elegant sorority branding for athletic events."
    },
    {
      image: "/designs/KKGPants.webp",
      caption: "KAPPA KAPPA GAMMA PANTS",
      description: "Coordinating sweatpants for the KKG collection, designed to work seamlessly with the hoodie while standing strong as a standalone piece."
    },
    {
      image: "/designs/KKGPants (1).webp",
      caption: "KAPPA KAPPA GAMMA PANTS ALT",
      description: "Alternative sweatpants design variation offering different styling options while maintaining the high-quality standards our clients expect."
    },
    {
      image: "/designs/NSHSSLA.webp",
      caption: "NSHSS LA DESIGN",
      description: "Custom design for National Society of High School Scholars Los Angeles chapter. Showcases our ability to create professional designs for academic honor societies."
    },
    {
      image: "/designs/Pi Phi Tank.webp",
      caption: "PI BETA PHI TANK",
      description: "Custom tank top design for Pi Beta Phi sorority featuring their distinctive branding and colors. Ideal for casual wear and warm weather chapter events."
    },
    {
      image: "/designs/PiPhi.webp",
      caption: "PI BETA PHI DESIGN",
      description: "Premium apparel design for Pi Beta Phi incorporating their brand identity and sorority values through thoughtful design elements and color selection."
    },
    {
      image: "/designs/Reach Consulting Group.webp",
      caption: "REACH CONSULTING GROUP",
      description: "Professional apparel design for Reach Consulting Group. Demonstrates our expertise in creating sophisticated designs for business and professional organizations."
    },
    {
      image: "/designs/ReachConsultingGroupT-shirts.webp",
      caption: "REACH CONSULTING T-SHIRTS",
      description: "Custom t-shirt design for Reach Consulting Group featuring clean, professional branding perfect for business casual settings and networking events."
    },
    {
      image: "/designs/SeniorSetDG (1).webp",
      caption: "DELTA GAMMA SENIOR SET",
      description: "Special senior collection design for Delta Gamma sorority, commemorating the graduating class with custom graphics and meaningful design elements."
    },
    {
      image: "/designs/SigChiHoodie.webp",
      caption: "SIGMA CHI HOODIE ALT",
      description: "Alternative Sigma Chi hoodie design showcasing different graphic approaches while maintaining the fraternity's core brand elements and values."
    },
    {
      image: "/designs/SigChiHoodie (1).webp",
      caption: "SIGMA CHI HOODIE DESIGN",
      description: "Classic Sigma Chi hoodie design embodying the fraternity's heritage and values through thoughtful typography and color selection."
    },
    {
      image: "/designs/SigChiHoodie5.webp",
      caption: "SIGMA CHI HOODIE V5",
      description: "Fifth iteration of Sigma Chi hoodie design, representing our thorough design process and commitment to achieving the perfect final product."
    },
    {
      image: "/designs/ThetaTank.webp",
      caption: "THETA TANK DESIGN",
      description: "Custom tank top design created for Theta sorority with breathable fabric and contemporary styling. Perfect for casual wear and chapter events with a focus on comfort and durability."
    },
    {
      image: "/designs/ThetaTankpng.webp",
      caption: "THETA TANK ALT",
      description: "Alternative tank design variation featuring different graphic placement and styling options. Demonstrates our flexibility in creating multiple design concepts for the same organization."
    },
    // {
    //   image: "/designs/ThetaTankpng (1).webp",
    //   caption: "THETA TANK VARIANT",
    //   description: "Another Theta tank variation showcasing different design approaches while maintaining sorority branding and identity throughout the collection."
    // },
    {
      image: "/designs/UMichSigChiHoodie.webp",
      caption: "U-MICH SIGMA CHI HOODIE",
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
    <>
      <WinterRushCountdown />
      <DesignsGallery 
        designs={designsData.designs}
        title={designsData.title}
      />
    </>
  )
}
