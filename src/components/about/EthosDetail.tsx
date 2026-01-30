'use client'

import { motion } from 'framer-motion'
import { Eye, Lightbulb, Handshake, Zap, ArrowRight } from 'lucide-react'

const ethosDetails = [
  {
    icon: Eye,
    title: 'Transparency',
    tagline: 'Show the work, not just the result.',
    description: 'Every system exposes its internals. You see data sources, transformation logic, and confidence calculations. If we can\'t show it, we don\'t ship it.',
    color: 'blue'
  },
  {
    icon: Lightbulb,
    title: 'Explainability',
    tagline: 'Make the complex comprehensible.',
    description: 'Raw intelligence is useless if only specialists can read it. We translate technical outputs into narratives that empower decision-makers at every level—from boardroom to front line.',
    color: 'amber'
  },
  {
    icon: Handshake,
    title: 'Trust',
    tagline: 'Earn it through verification, not claims.',
    description: 'Trust isn\'t a sentiment—it\'s a verifiable state. We build immutable audit trails, validation checkpoints, and human review layers that prove our confidence is earned.',
    color: 'emerald'
  },
  {
    icon: Zap,
    title: 'Usability',
    tagline: 'Intelligence for everyone, not just experts.',
    description: 'The most sophisticated analysis means nothing if people can\'t act on it. We obsess over reducing cognitive load—eliminating jargon, simplifying interfaces, making data genuinely useful for the general public.',
    color: 'purple'
  }
]

const colorStyles = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-200' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' }
}

export function EthosDetail() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
            The Flow: How Trust Emerges
          </h2>
          <p className="text-lg text-sovereign-600">
            These four aren't separate goals. They're a sequence. Each one enables the next.
          </p>
        </div>

        {/* Detailed ethos cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {ethosDetails.map((item, index) => {
            const styles = colorStyles[item.color as keyof typeof colorStyles]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl bg-white border ${styles.border} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl ${styles.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-8 h-8 ${styles.icon}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-sovereign-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-terracotta font-medium mb-4">
                      "{item.tagline}"
                    </p>
                    <p className="text-sovereign-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Flow indicator */}
                  {index < ethosDetails.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-10">
                      <ArrowRight className="w-5 h-5 text-sovereign-300 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Flow summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-sovereign-50 border border-sovereign-200 max-w-3xl mx-auto"
        >
          <p className="text-lg text-sovereign-700 text-center leading-relaxed">
            <strong className="text-sovereign-900">Transparency</strong> creates the raw material for{' '}
            <strong className="text-sovereign-900">Explainability</strong>. When you can see the data, 
            you can explain the reasoning. <strong className="text-sovereign-900">Explainability</strong> builds{' '}
            <strong className="text-sovereign-900">Trust</strong>. When you understand why something works, 
            you can rely on it. <strong className="text-sovereign-900">Trust</strong> unlocks{' '}
            <strong className="text-sovereign-900">Usability</strong>. When you trust the intelligence, 
            you'll actually use it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
