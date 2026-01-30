# Conduit488 Website - AI Coding Agent Instructions

## Project Overview
Marketing website for Conduit488, a data engineering company focused on transparent, explainable AI. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Emphasizes the "488 Philosophy" (4 ethos + 0.4→0.8 + sustained delivery) and "Glass Box Philosophy" (transparent internal structures).

## Architecture

### Page Structure Pattern
Pages follow a **composition pattern** where route files import and compose section components:
```tsx
// src/app/products/ascent/page.tsx
export default function AscentPage() {
  return (
    <>
      <AscentHero />
      <AscentFeatures />
      <AscentVerification />
      <AscentCTA />
    </>
  )
}
```

### Component Organization
- **Feature-based**: `components/{feature}/ComponentName.tsx`
  - `components/home/` - Homepage sections (HeroSection, PhilosophySection, etc.)
  - `components/products/` - Product page components
  - `components/products/ascent/` - Product-specific components
  - `components/layout/` - Global layout (Navigation, Footer)
- **Shared patterns**: `components/products/ProductPageTemplate.tsx` for product pages

### Import Aliases
Use `@/*` for all imports: `import { cn } from '@/lib/utils'`

## Design System

### Colors (Tailwind Custom Palette)
- **sovereign**: Primary brand blue (`#0f172a`) - 50-950 scale
- **terracotta**: Accent orange (`#B85C38`) - 50-900 scale, used for CTAs and emphasis
- **ember**: Deeper terracotta variant (`#8B4026`)

### Product Color System
Products use color coding with coordinated styles (gradient, glow, icon, badge):
```tsx
const colorStyles = {
  amber: { gradient: 'from-amber-500 to-amber-600', glow: '#F59E0B', ... },
  emerald: { gradient: 'from-emerald-500 to-emerald-600', glow: '#10B981', ... },
  purple: { gradient: 'from-purple-500 to-purple-600', glow: '#8B5CF6', ... }
}
```

### Utility Classes
- `.glass-card` / `.glass-card-dark` - Glass morphism with backdrop blur
- `.bento-item` / `.bento-item-dark` - Bento grid cards with hover effects
- `cn()` utility (`@/lib/utils`) - Combines clsx + tailwind-merge for conditional classes

## Key Patterns

### Navigation Structure
Navigation dropdown data in [src/components/layout/Navigation.tsx](src/components/layout/Navigation.tsx#L11-L20) with products including badges (launch dates):
```tsx
const navigation = [
  { name: 'Products', href: '#', children: [
    { name: 'Conduit Ascent', href: '/products/ascent', badge: 'April 2026' },
    // ... more products
  ]},
  // ... other nav items
]
```

### Animation Pattern (Framer Motion)
Components prefixed with `motion.` for entry animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Metadata Pattern
Use Next.js metadata API in route files:
```tsx
export const metadata: Metadata = {
  title: 'Page Title | Conduit488',
  description: '...',
}
```

Template inheritance via nested layouts (see [src/app/products/layout.tsx](src/app/products/layout.tsx)).

## Development Workflow

### Commands
- `npm run dev` - Start dev server (default: http://localhost:3000)
- `npm run build` - Production build
- `npm run lint` - ESLint check

### Component Creation
1. Create feature-specific directory if needed
2. Use 'use client' directive for interactive components (useState, useEffect, Framer Motion)
3. Export named component matching filename
4. Import and compose in route page file

### Client vs Server Components
- **Client**: Navigation dropdowns, animations (Framer Motion), canvas effects, form interactions
- **Server**: Static content sections, page compositions, metadata

## Brand Voice & Content
- Emphasize **transparency** and **honest limitations** over perfection claims
- Reference "488 Philosophy": 4 ethos (Transparency, Explainability, Trust, Usability) + 0.4→0.8 confidence journey + sustained commitment
- "Glass Box" metaphor: showing internal structures (not black box AI)
- Avoid absolutist language ("100% accurate") - prefer confidence ranges

## Product Suite
1. **Ascent** (Hero Product, April 2026) - K-12 education, verified curriculum alignment
2. **Resonance** (May 2026) - Customer sentiment & signal analysis
3. **Lens** (August 2026) - Market intelligence for traders
4. **Sentinel** (Consulting) - Enterprise data governance

## Assets
Logo files expected in `public/`: `logo.svg`, `logo-white.svg`, `favicon.ico`. Logo design: isometric 3D "C" with glass panels, terracotta glow (see [public/README.md](public/README.md)).

## Performance Optimizations
- Package imports optimized: `lucide-react`, `framer-motion` (see [next.config.js](next.config.js#L6))
- Image formats: AVIF, WebP
- Font: Inter with `display: swap`
