'use client'

import { motion } from 'framer-motion'

export function WhyPointEight() {
  return (
    <section className="py-24 bg-white" id="philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
              The 488 Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
              Why 0.8, Not 0.99?
            </h2>
            
            <div className="prose prose-lg text-sovereign-600">
              <p>
                There's a reason we don't promise 99% accuracy. It's not because 
                we can't—it's because we won't lie.
              </p>
              <p>
                We work with AI. We know its strengths: pattern recognition, scale, 
                consistency. We also know its weaknesses: hallucination, context 
                blindness, overconfidence in its own outputs.
              </p>
              <p>
                When we say our target is <strong className="text-sovereign-900">0.8</strong>, 
                we're making a statement: we'd rather give you an honest 80% confidence 
                than a fabricated 99%. We'd rather acknowledge the 20% we're uncertain 
                about than hide it behind marketing polish.
              </p>
              <p>
                That's what the "Glass Box" means. Not just transparency in our 
                outputs—but honesty about our limitations.
              </p>
              <p>
                And the <strong className="text-sovereign-900">second 8</strong>? 
                That's our promise: we'll keep working on that 20%. Not to claim 
                perfection, but to get better, perpetually. To provide trusted data 
                that improves usability—again and again.
              </p>
            </div>
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto">
              {/* Confidence visualization */}
              <div className="relative w-full h-full rounded-3xl bg-sovereign-50 border border-sovereign-200 p-8 overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />
                
                <div className="relative z-10 h-full flex flex-col justify-center">
                  {/* 0.99 - crossed out */}
                  <div className="mb-8 text-center">
                    <span className="text-6xl font-bold text-sovereign-300 line-through decoration-red-400 decoration-4">
                      0.99
                    </span>
                    <p className="text-sm text-sovereign-400 mt-2">
                      The lie we refuse to tell
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-sovereign-200 mb-8" />

                  {/* 0.8 - highlighted */}
                  <div className="text-center">
                    <span className="text-7xl font-bold text-terracotta">
                      0.8
                    </span>
                    <p className="text-sm text-sovereign-600 mt-2 font-medium">
                      Honest confidence you can trust
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-8">
                    <div className="h-3 bg-sovereign-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-terracotta to-terracotta-400 rounded-full"
                        style={{ width: '80%' }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-sovereign-500">
                      <span>0.4 (Ambiguity)</span>
                      <span>0.8 (Confidence)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
