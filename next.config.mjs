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
      { source: '/reviews', destination: '/', permanent: true },
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
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    serverActions: {
      bodySizeLimit: '10mb', // Increase the body size limit to 10MB
    },
  },
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
