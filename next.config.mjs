let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // General Pages
      { source: '/support/shipping-returns', destination: '/support/faq', permanent: true },
      { source: '/request-order', destination: '/order', permanent: true },
      { source: '/shop', destination: '/products', permanent: true },
      { source: '/faq', destination: '/support/faq', permanent: true },

      // Old Product Pages
      { source: '/projects/heavyweight-crewneck', destination: '/products/heavyweight-crewneck', permanent: true },
      { source: '/projects/heavyweight-hoodie', destination: '/products/heavyweight-hoodie', permanent: true },
      { source: '/projects/sweatpants', destination: '/products/sweatpants', permanent: true },
      { source: '/projects/quarter-zip', destination: '/products/quarter-zip', permanent: true },

      // Old Blog Posts (redirect to main blog page)
      { source: '/blog/why-merch-matters', destination: '/blog', permanent: true },
      { source: '/blog/guide-to-custom-hoodies', destination: '/blog', permanent: true },
      { source: '/blog/comprehensive-guide-to-hoodies', destination: '/blog', permanent: true },
      { source: '/blog/perfect-club-merch', destination: '/blog', permanent: true },
      { source: '/blog/10-creative-customizations', destination: '/blog', permanent: true },
      { source: '/blog/essentials-blend-comfort', destination: '/blog', permanent: true },
      { source: '/blog/trending-designs-2024', destination: '/blog', permanent: true },
      { source: '/blog/getting-high-quality-hoodies', destination: '/blog', permanent: true },
      { source: '/blog/design-101', destination: '/blog', permanent: true },
      { source: '/blog/chose-perfect-merch-for-your-company', destination: '/blog', permanent: true },
      { source: '/blog/touch-of-elegance', destination: '/blog', permanent: true },
      { source: '/blog/5-tools', destination: '/blog', permanent: true },
      { source: '/blog/design-personal-style', destination: '/blog', permanent: true },
      { source: '/blog/custom-essentials', destination: '/blog', permanent: true },

      // Redirects from Google Search Console report
      { source: '/gallery', destination: '/lookbook', permanent: true },
      { source: '/support/returns', destination: '/support/faq', permanent: true },
      { source: '/support/shipping', destination: '/support/faq', permanent: true },
      { source: '/lookbook/2025-clients', destination: '/lookbook', permanent: true },
      { source: '/lookbook/2025-lookbook', destination: '/lookbook', permanent: true },

      // Redirects for test/duplicate blog posts from GSC report
      { source: '/blog/test', destination: '/blog', permanent: true },
      { source: '/blog/custom-hoodie-5', destination: '/blog', permanent: true },
      { source: '/blog/custom-hoodie-5-copy', destination: '/blog', permanent: true }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dcnyckkspvcivlaetfie.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico))$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:js|css))$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  compress: true,
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    serverActions: {
      bodySizeLimit: '10mb', // Increase the body size limit to 10MB
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  transpilePackages: [],
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
