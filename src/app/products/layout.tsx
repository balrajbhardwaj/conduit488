import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Conduit488 Products',
    default: 'Products | Conduit488',
  },
  description: 'Explore Conduit488\'s product suite: Ascent for education, Resonance for insights, Lens for market intelligence, and Sentinel for consulting.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
