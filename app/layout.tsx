import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "COUTURE by Ikigai - High Quality Merchandise",
  description: "Couture by Ikigai offers premium, custom-designed apparel including heavyweight hoodies, crewnecks, and more for organizations and individuals.",
  keywords: ["couture", "apparel", "custom clothing", "heavyweight hoodie", "merchandise", "ikigai"],
  robots: "index, follow",
  openGraph: {
    title: "COUTURE by Ikigai - High Quality Merchandise",
    description: "Premium, custom-designed apparel for organizations and individuals.",
    url: "https://couturebyikigai.com",
    siteName: "COUTURE by Ikigai",
    images: [
      {
        url: "https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-24.jpg",
        width: 1200,
        height: 630,
        alt: "COUTURE by Ikigai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COUTURE by Ikigai - High Quality Merchandise",
    description: "Premium, custom-designed apparel for organizations and individuals.",
    images: ["https://dcnyckkspvcivlaetfie.supabase.co/storage/v1/object/public/ikigai/homepage/Couture-AXO-24.jpg"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://dcnyckkspvcivlaetfie.supabase.co" />
        <link rel="dns-prefetch" href="https://dcnyckkspvcivlaetfie.supabase.co" />
      </head>
      <body className="font-stussy">
        <Header />
        <main className="pt-[65px] pb-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}