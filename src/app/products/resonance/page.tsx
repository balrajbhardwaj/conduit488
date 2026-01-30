import type { Metadata } from 'next'
import { ProductPageTemplate } from '@/components/products/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Conduit Resonance | Explainable Insights',
  description: 'Sentiment and signal analysis with transparent methodology. Understand not just what the data says, but why.',
}

export default function ResonancePage() {
  return (
    <ProductPageTemplate
      product={{
        name: 'Conduit Resonance',
        tagline: 'Explainable Insights',
        description: 'Sentiment and signal analysis that doesn\'t hide behind black-box algorithms. Every insight comes with its reasoning chain visible.',
        status: 'Coming Soon',
        launch: 'May 2026',
        color: 'amber',
        features: [
          {
            title: 'Transparent Methodology',
            description: 'See exactly how we arrived at each conclusion. No hidden weights, no mysterious algorithms.'
          },
          {
            title: 'Signal Decomposition',
            description: 'Break down complex signals into component factors you can understand and verify.'
          },
          {
            title: 'Confidence Gradients',
            description: 'Know not just the insight, but how certain we are—and why.'
          },
          {
            title: 'Source Attribution',
            description: 'Every conclusion links back to its source data. Verify anything.'
          },
          {
            title: 'Narrative Generation',
            description: 'Transform complex analysis into clear, actionable briefings for any audience.'
          },
          {
            title: 'Audit Trails',
            description: 'Complete history of how each insight evolved as new data arrived.'
          }
        ],
        useCases: [
          'Strategic planning teams needing verified market intelligence',
          'Risk managers requiring explainable assessments',
          'Executives who need to understand the "why" behind recommendations',
          'Compliance teams requiring audit trails for data-driven decisions'
        ]
      }}
    />
  )
}
