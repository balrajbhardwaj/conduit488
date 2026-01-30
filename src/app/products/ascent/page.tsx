import type { Metadata } from 'next'
import { AscentHero } from '@/components/products/ascent/AscentHero'
import { AscentFeatures } from '@/components/products/ascent/AscentFeatures'
import { AscentVerification } from '@/components/products/ascent/AscentVerification'
import { AscentCTA } from '@/components/products/ascent/AscentCTA'

export const metadata: Metadata = {
  title: 'Conduit Ascent | Verified K-12 Learning',
  description: 'AI-assisted education with human-verified curriculum alignment. Every question mapped to UK National Curriculum standards with transparent confidence scores.',
}

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
