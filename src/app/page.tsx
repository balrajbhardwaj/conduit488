import { HeroSection } from '@/components/home/HeroSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { EthosSection } from '@/components/home/EthosSection'
import { ProductsSection } from '@/components/home/ProductsSection'
import { FoundrySection } from '@/components/home/FoundrySection'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <EthosSection />
      <ProductsSection />
      <FoundrySection />
      <CTASection />
    </>
  )
}
