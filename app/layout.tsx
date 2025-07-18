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
      <head>
        {/* Inline critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              font-size: 12px;
              letter-spacing: 0.5px;
              margin: 0;
              padding: 0;
              background: white;
              color: black;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .hero-container {
              height: calc(100vh - 120px);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }
            .hero-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
            .hero-text {
              position: absolute;
              bottom: 4rem;
              right: 1.5rem;
              z-index: 10;
              text-align: right;
              color: white;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            }
            .hero-title {
              font-size: 3rem;
              font-weight: bold;
              text-transform: uppercase;
              line-height: 1;
              margin: 0;
            }
            @media (min-width: 769px) {
              .hero-title {
                font-size: 4rem;
                white-space: nowrap;
              }
            }
            /* Header critical styles */
            .fixed {
              position: fixed;
            }
            .top-0 {
              top: 0;
            }
            .left-0 {
              left: 0;
            }
            .right-0 {
              right: 0;
            }
            .z-50 {
              z-index: 50;
            }
            .bg-white {
              background-color: white;
            }
            .border-b {
              border-bottom-width: 1px;
            }
            .border-gray-200 {
              border-color: #e5e7eb;
            }
          `
        }} />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/homepage/v1.webp" as="image" />
        
        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//static.klaviyo.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.klaviyo.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.facebook.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
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
