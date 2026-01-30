'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'Deep-dive audits to map operational inefficiencies and structural gaps in how industries use data.'
  },
  {
    number: '02',
    title: 'Architect',
    description: 'Design the governance standards and technical frameworks for a transparent, trustworthy solution.'
  },
  {
    number: '03',
    title: 'Scale',
    description: 'Spin out independent, venture-scale platforms for mass adoption—solving the problem permanently.'
  }
]

export function FoundrySection() {
  return (
    <section className="py-24 bg-sovereign-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full filter blur-[150px] opacity-10"
        style={{ backgroundColor: '#B85C38' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
              The Foundry Model
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From Consulting to Commercial Scale
            </h2>
            <p className="text-lg text-sovereign-400 leading-relaxed mb-8">
              Traditional consulting solves a problem once. Conduit488 solves it permanently.
            </p>
            <p className="text-sovereign-400 leading-relaxed">
              Our unique model uses consulting engagements as "Paid R&D"—identifying 
              structural gaps in industries and filling them with scalable platforms. 
              Every product we build starts with a real problem we've solved for a client.
            </p>
          </div>

          {/* Steps visualization */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 group"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-terracotta/50 group-hover:bg-terracotta/5 transition-colors">
                  <span className="text-2xl font-bold text-sovereign-500 group-hover:text-terracotta transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-terracotta transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sovereign-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Connection lines */}
            <div className="hidden lg:block absolute left-[2.5rem] top-[calc(4rem+24px)] w-px h-[calc(100%-8rem)] bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
