import { Metadata } from "next"
import DesignsGallery from "./DesignsGallery"

// Our Designs data
const designsData = {
  title: "Our Designs",
  images: [
    "/designs/AphiHoodie. (1).webp",
    "/designs/ThetaTank.webp",
    "/designs/AphiHoodie (1).webp",
    "/designs/AphiPants.webp",
    "/designs/ThetaTankpng.webp",
    "/designs/AphiHoodie.webp",
    "/designs/EvansScholarsHoodie.webp",
    "/designs/EvansScholarsPants.webp",
    "/designs/KKGHoodie (2).webp",
    "/designs/KKGHoodie (3).webp",
    "/designs/FishPants.webp",
    "/designs/SigChiHoodie.webp",
    "/designs/KKGHoodie.webp",
    "/designs/KKGPants.webp",
    "/designs/KKGHoodie (1).webp",
    "/designs/KKGPants (1).webp",
    "/designs/SigChiHoodie (1).webp",
    "/designs/SigChiHoodie5.webp",
    "/designs/UMichSigChiHoodie.webp",
  ],
  captions: [
    "ALPHA PHI HOODIE DESIGN ALT",
    "THETA TANK DESIGN",
    "ALPHA PHI HOODIE DESIGN",
    "ALPHA PHI PANTS DESIGN",
    "THETA TANK DESIGN ALT",
    "ALPHA PHI HOODIE DESIGN VARIANT",
    "EVANS SCHOLARS HOODIE DESIGN",
    "EVANS SCHOLARS PANTS DESIGN",
    "KAPPA KAPPA GAMMA HOODIE V2",
    "KAPPA KAPPA GAMMA HOODIE V3",
    "FISH PANTS DESIGN",
    "SIGMA CHI HOODIE DESIGN ALT",
    "KAPPA KAPPA GAMMA HOODIE",
    "KAPPA KAPPA GAMMA PANTS",
    "KAPPA KAPPA GAMMA HOODIE ALT",
    "KAPPA KAPPA GAMMA PANTS ALT",
    "SIGMA CHI HOODIE DESIGN",
    "SIGMA CHI HOODIE DESIGN V5",
    "SIGMA CHI HOODIE",
  ]
}

export const metadata: Metadata = {
  title: 'Our Designs | Couture by Ikigai',
  description: 'Explore our custom design portfolio featuring unique merchandise and apparel designs for organizations and universities.',
}

export default function OurDesignsPage() {
  return (
    <DesignsGallery 
      images={designsData.images}
      captions={designsData.captions}
      title={designsData.title}
    />
  )
}
