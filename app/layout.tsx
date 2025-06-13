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
        
        {/* <Script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VicFLw"
          strategy="afterInteractive"
        />

        <Script id="klaviyo-callback" strategy="afterInteractive">
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