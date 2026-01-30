import type { Metadata } from 'next'
import { ProductPageTemplate } from '@/components/products/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Conduit Lens | Market Intelligence',
  description: 'Trade signal aggregation with confidence-weighted alerts. See through the noise to actionable intelligence.',
}

export default function LensPage() {
  return (
    <ProductPageTemplate
      product={{
        name: 'Conduit Lens',
        tagline: 'Market Intelligence',
        description: 'Trading and market signals aggregated, verified, and delivered with honest confidence weightings. Cut through noise to find signal.',
        status: 'Coming Soon',
        launch: 'August 2026',
        color: 'emerald',
        features: [
          {
            title: 'Multi-Source Aggregation',
            description: 'Combine signals from diverse sources into unified, weighted intelligence.'
          },
          {
            title: 'Confidence Weighting',
            description: 'Every alert carries its reliability score. Know which signals to prioritize.'
          },
          {
            title: 'Noise Filtering',
            description: 'AI-powered filtering that surfaces genuine signals, not false positives.'
          },
          {
            title: 'Historical Verification',
            description: 'See how past signals performed. We track our accuracy over time.'
          },
          {
            title: 'Customizable Thresholds',
            description: 'Set your own confidence thresholds for different decision types.'
          },
          {
            title: 'Real-Time Updates',
            description: 'Confidence scores adjust as new information arrives. Static reports are dead.'
          }
        ],
        useCases: [
          'Investment teams managing complex signal landscapes',
          'Risk officers needing real-time market intelligence',
          'Trading desks requiring verified, actionable alerts',
          'Research analysts aggregating multiple data sources'
        ]
      }}
    />
  )
}
