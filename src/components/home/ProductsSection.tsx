'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, BarChart3, LineChart, Shield, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'ascent',
    icon: GraduationCap,
    name: 'Conduit Ascent',
    tagline: 'Learning Intelligence',
    description: 'AI-generated education content with radical transparency. Every question carries a confidence score. Parents see the work. Children see progress.',
    badge: 'Launching April 2026',
    badgeType: 'hero',
    color: 'amber',
    href: '/products/ascent'
  },
  {
    id: 'resonance',
    icon: BarChart3,
    name: 'Conduit Resonance',
    tagline: 'Customer Intelligence',
    description: 'Your customers leave signals everywhere—but they\'re scattered across silos. Resonance creates a unified "Golden Record" and turns fragmented data into harmonized intelligence.',
    badge: 'Launching May 2026',
    badgeType: 'upcoming',
    color: 'emerald',
    href: '/products/resonance'
  },
  {
    id: 'lens',
    icon: LineChart,
    name: 'Conduit Lens',
    tagline: 'Market Intelligence',
    description: 'Financial markets are noisy. Lens cuts through with ML-powered analysis that explains the "why" behind market moves—white-box insight, not black-box predictions.',
    badge: 'Launching August 2026',
    badgeType: 'upcoming',
    color: 'violet',
    href: '/products/lens'
  },
  {
    id: 'sentinel',
    icon: Shield,
    name: 'Conduit Sentinel',
    tagline: 'Governance & Compliance',
    description: 'Regulatory reporting shouldn\'t be a mystery. Sentinel brings glass-box governance to transaction reporting, capital controls, and compliance workflows.',
    badge: 'Consulting-Led',
    badgeType: 'consulting',
    color: 'blue',
    href: '/products/sentinel'
  }
]

const colorStyles = {
  amber: {
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    border: 'group-hover:border-amber-300',
    badge: 'bg-terracotta/10 text-terracotta border-terracotta/20'
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    border: 'group-hover:border-emerald-300',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  violet: {
    bg: 'bg-violet-50',
    icon: 'text-violet-600',
    border: 'group-hover:border-violet-300',
    badge: 'bg-violet-50 text-violet-700 border-violet-200'
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'group-hover:border-blue-300',
    badge: 'bg-sovereign-100 text-sovereign-600 border-sovereign-200'
  }
}

export function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
            What We're Building
          </h2>
          <p className="text-lg text-sovereign-600">
            Conduit488 is an incubator. We identify structural problems in how 
            industries use data, and we build venture-scale platforms to solve them. 
            Four pillars. Four industries. One standard of transparency.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const styles = colorStyles[product.color as keyof typeof colorStyles]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={product.href}
                  className={`block bento-item ${styles.border} group h-full relative overflow-hidden`}
                >
                  {/* Background accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${styles.bg} rounded-bl-full -mr-8 -mt-8 transition-all group-hover:w-40 group-hover:h-40`} />

                  <div className="relative z-10">
                    {/* Badge */}
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${styles.badge} mb-6`}>
                      {product.badge}
                    </span>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-sovereign-900 group-hover:text-terracotta transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-sovereign-500">
                          {product.tagline}
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <product.icon className={`w-6 h-6 ${styles.icon}`} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sovereign-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Link */}
                    <span className="inline-flex items-center text-sm font-semibold text-sovereign-900 group-hover:text-terracotta transition-colors">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="mt-16 p-6 rounded-2xl bg-sovereign-50 border border-sovereign-200">
          <h4 className="text-sm font-bold text-sovereign-900 uppercase tracking-wider mb-4 text-center">
            Launch Roadmap
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {products.filter(p => p.badgeType !== 'consulting').map((product, index) => (
              <div key={product.id} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  product.badgeType === 'hero' ? 'bg-terracotta' : 'bg-sovereign-300'
                }`} />
                <span className="text-sm text-sovereign-600">
                  <strong className="text-sovereign-900">{product.name.split(' ')[1]}</strong>
                  {' · '}
                  {product.badge.replace('Launching ', '')}
                </span>
                {index < products.filter(p => p.badgeType !== 'consulting').length - 1 && (
                  <div className="hidden sm:block w-8 h-px bg-sovereign-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
