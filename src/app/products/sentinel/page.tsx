import type { Metadata } from 'next'
import { ProductPageTemplate } from '@/components/products/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Conduit Sentinel | Strategic Consulting',
  description: 'Bespoke data solutions for complex enterprise challenges. When standard products aren\'t enough.',
}

export default function SentinelPage() {
  return (
    <ProductPageTemplate
      product={{
        name: 'Conduit Sentinel',
        tagline: 'Strategic Consulting',
        description: 'When your data challenges don\'t fit standard products, Sentinel provides bespoke solutions built on the same Glass Box principles.',
        status: 'Now Available',
        launch: 'Ongoing',
        color: 'purple',
        features: [
          {
            title: 'Diagnostic Assessment',
            description: 'We start by understanding your unique data landscape—challenges, opportunities, and constraints.'
          },
          {
            title: 'Custom Architecture',
            description: 'Solutions designed specifically for your context, not off-the-shelf retrofits.'
          },
          {
            title: 'Build & Transfer',
            description: 'We build solutions you own. No vendor lock-in, no recurring dependencies.'
          },
          {
            title: 'Knowledge Transfer',
            description: 'Your team learns to maintain and extend what we build. We work ourselves out of a job.'
          },
          {
            title: 'Ongoing Partnership',
            description: 'Available for continued support as your data needs evolve.'
          },
          {
            title: 'Glass Box Compliance',
            description: 'Every solution adheres to our transparency, explainability, trust, and usability standards.'
          }
        ],
        useCases: [
          'Organizations with unique data verification needs',
          'Enterprises requiring custom AI governance frameworks',
          'Companies transitioning from black-box to transparent systems',
          'Teams building internal data platforms who need expert guidance'
        ]
      }}
    />
  )
}
