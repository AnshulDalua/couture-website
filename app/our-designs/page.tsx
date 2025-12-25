import { Metadata } from "next"
import DesignsGallery from "./DesignsGallery"
import WinterRushCountdown from "@/app/components/WinterRushCountdown"

// Our Designs data with descriptions
interface DesignItem {
  image: string
  caption: string
  printStyle: string
  organization: string
}

const designsData: {
  title: string
  designs: DesignItem[]
} = {
  title: "Our Designs",
  designs: [
    {
      image: "/designs/A Chi O Tank.webp",
      caption: "AXO `RABBIT` TANK CONCEPT",
      printStyle: "EMBRODIERY",
      organization: "ALPHA CHI OMEGA"
    },
    {
      image: "/designs/KKGHoodie (1).webp",
      caption: "KKG `KEY` HOODIE CONCEPT",
      printStyle: "PUFF PRINT",
      organization: "KAPPA KAPPA GAMMA"
    },
    {
      image: "/designs/ThetaTank.webp",
      caption: "THETA `STAR` TANK CONCEPT",
      printStyle: "SCREEN PRINT",
      organization: "KAPPA ALPHA THETA"
    },
    {
      image: "/designs/AphiHoodie.webp",
      caption: "APHI `FLOWER` HOODIE CONCEPT",
      printStyle: "SCREEN PRINT",
      organization: "ALPHA PHI"
    },
    {
      image: "/designs/AphiHoodie. (1).webp",
      caption: "APHI EMBROIRDERED TEXT DESIGN CONCEPT",
      printStyle: "EMBROIDERY",
      organization: "ALPHA PHI"
    },
    {
      image: "/designs/AphiPants (1).webp",
      caption: "APHI `STAR` SWEAT CONCEPT",
      printStyle: "EMBROIDERY",
      organization: "ALPHA PHI"
    },
    {
      image: "/designs/AphiHoodie (1)(2).webp",
      caption: "ALPHA PHI HOODIE DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "ALPHA PHI"
    },
    {
      image: "/designs/AphiPants.webp",
      caption: "ALPHA PHI PANTS DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "ALPHA PHI"
    },
    {
      image: "/designs/DZ Tank.webp",
      caption: "DELTA ZETA TANK",
      printStyle: "SCREEN PRINT",
      organization: "DELTA ZETA"
    },
    {
      image: "/designs/EvansScholarsHoodie.webp",
      caption: "EVANS SCHOLARS HOODIE",
      printStyle: "SCREEN PRINT",
      organization: "EVANS SCHOLARS"
    },
    {
      image: "/designs/EvansScholarsPants.webp",
      caption: "EVANS SCHOLARS PANTS",
      printStyle: "SCREEN PRINT",
      organization: "EVANS SCHOLARS"
    },
    {
      image: "/designs/FishPants.webp",
      caption: "FISH PANTS DESIGN",
      printStyle: "EMBROIDERY",
      organization: "KKG"
    },
    {
      image: "/designs/Girls Varsity tennis.webp",
      caption: "GIRLS VARSITY TENNIS",
      printStyle: "SCREEN PRINT",
      organization: "VARSITY TENNIS"
    },
    {
      image: "/designs/KKG Tank.webp",
      caption: "KAPPA KAPPA GAMMA TANK",
      printStyle: "SCREEN PRINT",
      organization: "Kappa Kappa Gamma"
    },
    {
      image: "/designs/Accapella.webp",
      caption: "GIMBLE ACAPELLA GROUP DESIGN CONCEPT",
      printStyle: "EMBROIDERY",
      organization: "GIMBLE ACAPELLA GROUP"
    },
    {
      image: "/designs/KKGHoodie.webp",
      caption: "KAPPA KAPPA GAMMA HOODIE",
      printStyle: "PUFF PRINT",
      organization: "KAPPA KAPPA GAMMA"
    },
    {
      image: "/designs/KKGHoodie (2).webp",
      caption: "KAPPA KAPPA GAMMA HOODIE V2",
      printStyle: "EMBROIDERY",
      organization: "KAPPA KAPPA GAMMA"
    },
    {
      image: "/designs/KKGHoodie (3).webp",
      caption: "KAPPA KAPPA GAMMA `FISH` HOODIE",
      printStyle: "SCREEN PRINT",
      organization: "KAPPA KAPPA GAMMA"
    },
    {
      image: "/designs/KKGOLF back-35.webp",
      caption: "KKG GOLF BACK DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "KAPPA KAPPA GAMMA"
    },
    {
      image: "/designs/KKGolf Front.webp",
      caption: "KKG GOLF FRONT DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "Kappa Kappa Gamma"
    },
    {
      image: "/designs/KKGPants.webp",
      caption: "KAPPA KAPPA GAMMA SWEATS",
      printStyle: "PUFF PRINT",
      organization: "KAPPA KAPPA GAMMA"
    },
    {
      image: "/designs/KKGPants (1).webp",
      caption: "KAPPA KAPPA GAMMA SWEATS",
      printStyle: "PUFF PRINT",
      organization: "KAPPA KAPPA GAMMA"
    },
    {
      image: "/designs/NSHSSLA.webp",
      caption: "NSHSSLA DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "NSHSSLA"
    },
    {
      image: "/designs/Pi Phi Tank.webp",
      caption: "PI BETA PHI `ROCKSTAR` TANK",
      printStyle: "SCREEN PRINT",
      organization: "Pi BETA PHI"
    },
    {
      image: "/designs/PiPhi.webp",
      caption: "PI BETA PHI DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "PI BETA PHI"
    },
    {
      image: "/designs/Reach Consulting Group.webp",
      caption: "REACH CONSULTING GROUP `STREETWEAR` DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "REACH CONSULTING GROUP"
    },
    {
      image: "/designs/ReachConsultingGroupT-shirts.webp",
      caption: "REACH CONSULTING TEE DESIGN",
      printStyle: "SCREEN PRINT",
      organization: "REACH CONSULTING GROUP"
    },
    {
      image: "/designs/SeniorSetDG (1).webp",
      caption: "DELTA GAMMA SENIOR SET",
      printStyle: "EMBROIDERY",
      organization: "DELTA GAMMA"
    },
    {
      image: "/designs/SigChiHoodie.webp",
      caption: "SIGMA CHI HOODIE",
      printStyle: "EMBROIDERY",
      organization: "SIGMA CHI"
    },
    {
      image: "/designs/SigChiHoodie (1).webp",
      caption: "SIGMA CHI HOODIE DESIGN CONCEPT",
      printStyle: "PUFF PRINT",
      organization: "SIGMA CHI"
    },
    {
      image: "/designs/SigChiHoodie5.webp",
      caption: "SIGMA CHI HOODIE DESIGN CONCEPT",
      printStyle: "EMBROIDERY",
      organization: "Sigma Chi"
    },
    {
      image: "/designs/ThetaTankpng.webp",
      caption: "THETA TANK AND BOY SHORTS",
      printStyle: "SCREEN PRINT",
      organization: "KAPPA ALPHA THETA"
    },
    {
      image: "/designs/UMichSigChiHoodie.webp",
      caption: "U-MICH SIGMA CHI HOODIE",
      printStyle: "EMBROIDERY",
      organization: "SIGMA CHI"
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
