'use client'

import { motion } from 'framer-motion'
import { PhilosophyAnimationOption1 } from './PhilosophyAnimationOption1'

export function PhilosophySection() {
  return (
    <section className="py-24 bg-white border-b border-sovereign-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
            The 488 Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
            Why We're Called 488
          </h2>
          <p className="text-lg text-sovereign-600 leading-relaxed">
            We promise certainty with reliability.
          </p>
        </div>

        {/* Animated visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <PhilosophyAnimationOption1 />
        </div>

        {/* Philosophy breakdown */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* The 4 */}
          <PhilosophyCard
            number="4"
            title="Four Core Ethos"
            description="Transparency, Explainability, Trust, and Usability. These aren't marketing words—they're engineering requirements. Every system must demonstrate all four before it ships."
            color="terracotta"
          />

          {/* The first 8 */}
          <PhilosophyCard
            number="8"
            title="The Journey"
            description="We take data from 0.4 (ambiguity) to 0.8 (confidence). Not 0.99. Not 'perfect.' We'd rather show an honest 80% than a fabricated 99%."
            color="blue"
            subtitle="0.4 → 0.8"
          />

          {/* The second 8 */}
          <PhilosophyCard
            number="8"
            title="The Promise"
            description="Our sustained commitment to continuously provide trusted data that improves usability. We refine, iterate, and earn your trust—again and again."
            color="emerald"
            subtitle="∞"
          />
        </div>

        {/* Summary statement */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-sovereign-50 border border-sovereign-200">
            <p className="text-lg text-sovereign-700 text-center leading-relaxed">
              <strong className="text-sovereign-900">Together, 488 means:</strong> Four principles 
              guiding a journey from ambiguity (0.4) to confidence (0.8), with a sustained 
              promise to provide trusted data that improves usability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhilosophyCard({
  number,
  title,
  description,
  color,
  subtitle
}: {
  number: string
  title: string
  description: string
  color: 'terracotta' | 'blue' | 'emerald'
  subtitle?: string
}) {
  const colorClasses = {
    terracotta: 'from-terracotta to-terracotta-600 text-terracotta',
    blue: 'from-blue-500 to-blue-600 text-blue-600',
    emerald: 'from-emerald-500 to-emerald-600 text-emerald-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="bento-item h-full">
        {/* Number badge */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[color].split(' ').slice(0, 2).join(' ')} mb-6`}>
          <span className="text-2xl font-bold text-white">{number}</span>
        </div>

        {subtitle && (
          <div className={`text-sm font-mono ${colorClasses[color].split(' ').pop()} mb-2`}>
            {subtitle}
          </div>
        )}

        <h3 className="text-xl font-bold text-sovereign-900 mb-3">
          {title}
        </h3>

        <p className="text-sovereign-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
