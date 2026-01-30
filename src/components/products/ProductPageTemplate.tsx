'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, BarChart3, Eye, Shield, Check } from 'lucide-react'

interface ProductData {
  name: string
  tagline: string
  description: string
  status: string
  launch: string
  color: 'amber' | 'emerald' | 'purple'
  features: { title: string; description: string }[]
  useCases: string[]
}

const iconMap = {
  amber: BarChart3,
  emerald: Eye,
  purple: Shield
}

const colorStyles = {
  amber: { 
    gradient: 'from-amber-500 to-amber-600',
    glow: '#F59E0B',
    icon: 'text-amber-600',
    iconBg: 'bg-amber-100',
    badge: 'bg-amber-500/20 text-amber-300',
    border: 'hover:border-amber-300'
  },
  emerald: { 
    gradient: 'from-emerald-500 to-emerald-600',
    glow: '#10B981',
    icon: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    badge: 'bg-emerald-500/20 text-emerald-300',
    border: 'hover:border-emerald-300'
  },
  purple: { 
    gradient: 'from-purple-500 to-purple-600',
    glow: '#8B5CF6',
    icon: 'text-purple-600',
    iconBg: 'bg-purple-100',
    badge: 'bg-purple-500/20 text-purple-300',
    border: 'hover:border-purple-300'
  }
}

export function ProductPageTemplate({ product }: { product: ProductData }) {
  const styles = colorStyles[product.color]
  const Icon = iconMap[product.color]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-sovereign-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div 
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-20"
          style={{ backgroundColor: styles.glow }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${styles.gradient} bg-opacity-20 flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`${styles.badge} font-bold tracking-widest uppercase text-sm px-3 py-1 rounded-full`}>
                {product.status} • {product.launch}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {product.name}
            </h1>
            <p className="text-2xl font-medium mb-6" style={{ color: styles.glow }}>
              {product.tagline}
            </p>
            <p className="text-lg text-sovereign-400 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/contact?product=${product.name.toLowerCase().split(' ').pop()}`} 
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {product.status === 'Now Available' ? 'Start a Conversation' : 'Request Early Access'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/products" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
              Key Capabilities
            </h2>
            <p className="text-lg text-sovereign-600 max-w-2xl mx-auto">
              Built on the Glass Box philosophy—transparent, explainable, trustworthy, and usable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-sovereign-50 border border-sovereign-200 ${styles.border} transition-colors`}
              >
                <h3 className="text-lg font-bold text-sovereign-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sovereign-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-sovereign-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
                Who It's For
              </h2>
              <p className="text-lg text-sovereign-600 mb-8">
                {product.name} is designed for teams who need more than promises—they need proof.
              </p>
              <ul className="space-y-4">
                {product.useCases.map((useCase, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className={`w-5 h-5 ${styles.icon} flex-shrink-0 mt-0.5`} />
                    <span className="text-sovereign-700">{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-sovereign-900 text-white"
            >
              <h3 className="text-xl font-bold mb-4">The 488 Promise</h3>
              <p className="text-sovereign-400 leading-relaxed mb-6">
                Every {product.name} deployment adheres to our core standards: 
                we won't claim 99% confidence when 80% is the honest answer, 
                and we'll always show you exactly how we arrived at every conclusion.
              </p>
              <div className="flex items-center gap-2 text-sm" style={{ color: styles.glow }}>
                <Calendar className="w-4 h-4" />
                {product.status === 'Now Available' 
                  ? 'Available for engagement now' 
                  : `Expected ${product.launch}`
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sovereign-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-15"
          style={{ backgroundColor: styles.glow }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {product.status === 'Now Available' 
                ? 'Ready to Start?' 
                : 'Interested in Early Access?'
              }
            </h2>
            <p className="text-lg text-sovereign-400 mb-8 max-w-2xl mx-auto">
              {product.status === 'Now Available'
                ? 'Let\'s discuss your unique data challenges and how Sentinel can help.'
                : 'Join our early access programme to shape the product and be first to benefit.'
              }
            </p>

            <Link 
              href={`/contact?product=${product.name.toLowerCase().split(' ').pop()}`} 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              {product.status === 'Now Available' ? 'Start a Conversation' : 'Request Early Access'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
