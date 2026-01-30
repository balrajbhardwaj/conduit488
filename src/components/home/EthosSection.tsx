'use client'

import { motion } from 'framer-motion'
import { Eye, Lightbulb, Handshake, Zap } from 'lucide-react'

const ethos = [
  {
    icon: Eye,
    title: 'Transparency',
    tagline: 'Show the work',
    description: 'No black boxes. Every system we build exposes its internals. You see the data sources, the transformations, the confidence levels. If we can\'t show it, we don\'t ship it.',
    color: 'blue'
  },
  {
    icon: Lightbulb,
    title: 'Explainability',
    tagline: 'Make it comprehensible',
    description: 'Intelligence is useless if only data scientists understand it. We translate complexity into narratives that empower decision-makers at every level.',
    color: 'amber'
  },
  {
    icon: Handshake,
    title: 'Trust',
    tagline: 'Earn it, don\'t claim it',
    description: 'Trust isn\'t a marketing message. It\'s a verifiable state. We build audit trails, validation layers, and human checkpoints that prove our confidence is earned.',
    color: 'emerald'
  },
  {
    icon: Zap,
    title: 'Usability',
    tagline: 'Make it accessible',
    description: 'The most sophisticated analysis means nothing if people can\'t act on it. We obsess over reducing friction, eliminating jargon, making data genuinely useful for everyone.',
    color: 'purple'
  }
]

const colorStyles = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'hover:border-blue-300'
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    border: 'hover:border-amber-300'
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    border: 'hover:border-emerald-300'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'hover:border-purple-300'
  }
}

export function EthosSection() {
  return (
    <section className="py-24 bg-sovereign-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
            The Principles That Govern Everything We Build
          </h2>
          <p className="text-lg text-sovereign-600">
            These four aren't separate goals. They're a sequence: Transparency creates 
            Explainability, which builds Trust, which unlocks Usability.
          </p>
        </div>

        {/* Ethos Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {ethos.map((item, index) => {
            const styles = colorStyles[item.color as keyof typeof colorStyles]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bento-item ${styles.border} group`}
              >
                <div className={`w-14 h-14 rounded-xl ${styles.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${styles.icon}`} />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-sovereign-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-terracotta font-medium">
                    "{item.tagline}"
                  </p>
                </div>

                <p className="text-sovereign-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Flow diagram */}
        <div className="mt-16 flex items-center justify-center gap-4 flex-wrap">
          {ethos.map((item, index) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-white border border-sovereign-200 text-sovereign-700 font-medium">
                {item.title}
              </div>
              {index < ethos.length - 1 && (
                <div className="text-sovereign-400">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
