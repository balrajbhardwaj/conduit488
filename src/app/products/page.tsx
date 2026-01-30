import Link from 'next/link'
import { ArrowRight, GraduationCap, BarChart3, Eye, Shield } from 'lucide-react'

const products = [
  {
    slug: 'ascent',
    name: 'Conduit Ascent',
    tagline: 'Verified K-12 Learning',
    description: 'AI-assisted education with human-verified curriculum alignment.',
    icon: GraduationCap,
    status: 'Hero Product',
    launch: 'April 2026',
    color: 'blue'
  },
  {
    slug: 'resonance',
    name: 'Conduit Resonance',
    tagline: 'Explainable Insights',
    description: 'Sentiment and signal analysis with transparent methodology.',
    icon: BarChart3,
    status: 'Coming Soon',
    launch: 'May 2026',
    color: 'amber'
  },
  {
    slug: 'lens',
    name: 'Conduit Lens',
    tagline: 'Market Intelligence',
    description: 'Trade signal aggregation with confidence-weighted alerts.',
    icon: Eye,
    status: 'Coming Soon',
    launch: 'August 2026',
    color: 'emerald'
  },
  {
    slug: 'sentinel',
    name: 'Conduit Sentinel',
    tagline: 'Strategic Consulting',
    description: 'Bespoke data solutions for complex enterprise challenges.',
    icon: Shield,
    status: 'Now Available',
    launch: 'Ongoing',
    color: 'purple'
  }
]

const colorStyles = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', badge: 'bg-amber-100 text-amber-800' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-800' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800' }
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-sovereign-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full filter blur-[150px] opacity-10"
          style={{ backgroundColor: '#B85C38' }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Products
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Four Pillars of Trust
          </h1>
          <p className="text-xl text-sovereign-400 leading-relaxed max-w-2xl mx-auto">
            Each product embodies our commitment to transparency, explainability, 
            trust, and usability. Different domains, unified philosophy.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const styles = colorStyles[product.color as keyof typeof colorStyles]
              return (
                <Link 
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group block p-8 rounded-2xl bg-white border border-sovereign-200 hover:border-terracotta/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl ${styles.bg} flex items-center justify-center`}>
                      <product.icon className={`w-8 h-8 ${styles.icon}`} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${styles.badge}`}>
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-sovereign-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-terracotta font-medium mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-sovereign-600 mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-sovereign-500">
                      {product.launch}
                    </span>
                    <span className="text-terracotta group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
