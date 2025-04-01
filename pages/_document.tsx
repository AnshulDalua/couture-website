import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://dcnyckkspvcivlaetfie.supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://dcnyckkspvcivlaetfie.supabase.co" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/stussy.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Meta tags for better SEO */}
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        
        {/* Performance optimization */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
