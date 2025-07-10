import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL('https://couturebyikigai.com'),
  title: {
    default: 'COUTURE BY IKIGAI - High Quality Custom Merch',
    template: '%s | COUTURE BY IKIGAI',
  },
  description: "Couture by Ikigai - Premium, custom-designed merchandise including hoodies, t-shirts, and more. Not normal merch.",
  keywords: ['high quality merch', 'best merch', 'custom hoodies', 'custom merch', 'university merch', 'premium custom apparel'],
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'COUTURE BY IKIGAI - High Quality Custom Merch',
    description: "Premium, custom-designed merchandise. Not normal merch.",
    images: '/website_preview.png',
    url: 'https://couturebyikigai.com',
    siteName: 'COUTURE BY IKIGAI',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COUTURE BY IKIGAI - High Quality Custom Merch',
    description: 'Premium, custom-designed merchandise. Not normal merch.',
    images: ['/website_preview.png'],
  },
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

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9WVFLS4CL0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9WVFLS4CL0');
          `}
        </Script>

        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1388049735679585');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1388049735679585&ev=PageView&noscript=1"
          />
        </noscript>
        
        <Script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VicFLw"
          strategy="afterInteractive"
        />

        {/* <Script id="klaviyo-callback" strategy="afterInteractive">
          {`
            window._klOnFormSubmit = window._klOnFormSubmit || [];
            window._klOnFormSubmit.push(function(form, data) {
             console.log('Klaviyo form submitted:', form.id, data);
             if (typeof window.fbq === 'function') {
               window.fbq('track', 'Lead', {
                 content_name: 'KlaviyoForm_' + form.id,
               });
             }
           });
         `}
       </Script> */}
            
      </body>
    </html>
  )
}