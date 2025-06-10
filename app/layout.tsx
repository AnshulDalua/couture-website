import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "COUTURE",
  description: "Couture by Ikigai - High quality merchandise",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    images: '/website_preview.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-stussy">
        <Header />
        <main className="pt-[65px] pb-[60px]">{children}</main>
        <Footer />
        <Script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VicFLw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}