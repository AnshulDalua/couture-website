import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This middleware adds proper cache-control headers to static assets
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const url = request.nextUrl.pathname

  // Add cache-control headers for static assets
  if (
    url.includes('/_next/image') || 
    url.includes('/_next/static') ||
    url.endsWith('.jpg') || 
    url.endsWith('.jpeg') || 
    url.endsWith('.png') || 
    url.endsWith('.webp') || 
    url.endsWith('.avif') || 
    url.endsWith('.svg') || 
    url.endsWith('.ico') || 
    url.endsWith('.css') || 
    url.endsWith('.js')
  ) {
    // Cache static assets for 1 year (31536000 seconds)
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

// Only run middleware on paths that include static assets
export const config = {
  matcher: [
    '/_next/image/:path*',
    '/_next/static/:path*',
    '/:path*.jpg',
    '/:path*.jpeg',
    '/:path*.png',
    '/:path*.webp',
    '/:path*.avif',
    '/:path*.svg',
    '/:path*.ico',
    '/:path*.css',
    '/:path*.js',
  ],
}
