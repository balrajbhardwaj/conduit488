import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { PhilosophyDetail } from '@/components/about/PhilosophyDetail'
import { EthosDetail } from '@/components/about/EthosDetail'
import { WhyPointEight } from '@/components/about/WhyPointEight'

export const metadata: Metadata = {
  title: 'About | The Glass Box Philosophy',
  description: 'Learn about Conduit488\'s commitment to transparency, explainability, trust, and usability in AI and data systems.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyPointEight />
      <PhilosophyDetail />
      <EthosDetail />
    </>
  )
}
