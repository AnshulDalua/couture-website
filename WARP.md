# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is the website for Couture by Ikigai (couturebyikigai.com), a custom merchandise e-commerce platform. The site focuses on high-quality custom apparel and premium merchandise for organizations, clubs, and universities.

## Common Development Commands

### Development Server
```bash
npm run dev          # Start development server on http://localhost:3000
```

### Build and Production
```bash
npm run build        # Build the application for production
npm start           # Start production server (requires build first)
```

### Code Quality
```bash
npm run lint        # Run ESLint for code quality checks
npx tsc --noEmit    # Type-check TypeScript without emitting files
```

### Database Management (Prisma)
```bash
npx prisma generate  # Generate Prisma client after schema changes
npx prisma db push   # Push schema changes to database
npx prisma studio    # Open Prisma Studio for database inspection
npx prisma migrate dev # Create and apply new migration
```

### Testing Commands
Note: No test setup is currently configured in this project.

## Tech Stack Architecture

### Core Framework
- **Next.js 15.1.0** with App Router architecture
- **React 19** with TypeScript for type safety
- **Tailwind CSS** for styling with custom design system

### Data Layer
- **Prisma ORM** with PostgreSQL database
- **Supabase** for database hosting and file storage
- Form submissions stored in: `ContactFormSubmission` and `OrderFormSubmission` models

### UI Components
- **Radix UI** primitives for accessible component foundation
- **shadcn/ui** component system (configured in `components.json`)
- **Framer Motion** for animations and page transitions
- **Lucide React** for icons

### Key Integrations
- **Google Analytics & Facebook Pixel** for tracking (configured in root layout)
- **Klaviyo** for email marketing
- **Supabase Storage** for design file uploads

## Project Structure

### App Router Structure
```
app/
├── layout.tsx          # Root layout with analytics, fonts, SEO
├── page.tsx           # Homepage with rotating hero images
├── globals.css        # Global styles and CSS variables
├── sitemap.ts         # Sitemap generation
└── [various pages]/   # Route-based pages (products, order, about-us, etc.)
```

### Key Directories
- `components/` - Reusable React components (header, footer, modals)
- `lib/` - Utility functions (database, Supabase, form handlers)
- `hooks/` - Custom React hooks (mobile detection, toast notifications)
- `prisma/` - Database schema and configuration
- `public/` - Static assets (images, fonts, icons)
- `styles/` - Additional CSS files

## Important Configuration Files

### Database & Services
- `prisma/schema.prisma` - Database schema with contact forms, orders, and design files
- `lib/supabase.ts` - Supabase client configuration and file upload logic
- Environment variables needed: `DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Build Configuration  
- `next.config.mjs` - Extensive Next.js configuration with redirects, image optimization, security headers
- `tailwind.config.ts` - Tailwind customization with Stussy font family and custom color scheme
- `tsconfig.json` - TypeScript configuration with path aliases (`@/*` maps to root)

## Development Guidelines

### Form Handling Pattern
The codebase uses a consistent pattern for form submissions:
1. Client-side forms collect data with validation
2. Server actions in `lib/` directory handle database operations
3. File uploads go through Supabase with error fallbacks
4. Database operations use Prisma with proper error handling

### Image Optimization
- Homepage uses rotating hero images from `/homepage/` directory
- Images are optimized with Next.js Image component
- Supabase CDN handles remote images with configured patterns
- Critical images are preloaded in the layout

### Styling Approach
- Tailwind-first approach with CSS variables for theming
- Custom `Stussy` font family for brand consistency
- Responsive design with mobile-first approach
- Component-level styling with Radix UI integration

### SEO & Performance
- Comprehensive meta tags and OpenGraph configuration in root layout
- Image optimization with multiple formats (WebP, AVIF)
- Long-term caching headers for static assets
- Critical CSS inlined for above-the-fold content

## Data Models

### Core Database Entities
```typescript
ContactFormSubmission {
  id, name, email, message, timestamps
}

OrderFormSubmission {
  id, name, email, phoneNumber, organization, university?, projectDetails, timestamps
  designFiles: DesignFile[] // One-to-many relationship
}

DesignFile {
  id, fileName, fileUrl?, filePath?, fileSize?, fileType?, timestamps
  orderFormSubmissionId // Foreign key
}
```

## URL Routing Structure
The site uses extensive redirect configuration for SEO purposes:
- Legacy `/shop` → `/products`
- Old `/projects/*` → `/products/*`
- Centralized `/faq` → `/support/faq`
- Blog post redirects consolidated to main `/blog` page

## Key Environment Requirements
- Node.js with npm for package management
- PostgreSQL database (hosted on Supabase)
- Supabase project for storage and database hosting
- Environment variables for database and service connections
