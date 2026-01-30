'use client'

import { motion } from 'framer-motion'

export function PhilosophyDetail() {
  return (
    <section className="py-24 bg-sovereign-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
            The Conduit488 Name, Decoded
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Conduit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-item"
          >
            <h3 className="text-2xl font-bold text-sovereign-900 mb-4">
              Conduit
            </h3>
            <p className="text-sovereign-600 leading-relaxed">
              A channel of transmission. Not a black box that hides, but a glass 
              conduit that reveals. Raw data enters one end; refined, trustworthy 
              intelligence emerges from the other. You see every step of the journey.
            </p>
          </motion.div>

          {/* The 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-item"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-terracotta">4</span>
              <h3 className="text-2xl font-bold text-sovereign-900">
                Four Core Ethos
              </h3>
            </div>
            <ul className="space-y-2 text-sovereign-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <strong>Transparency</strong> — Show the work
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <strong>Explainability</strong> — Make it comprehensible
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <strong>Trust</strong> — Earn it, don't claim it
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <strong>Usability</strong> — Make it accessible
              </li>
            </ul>
          </motion.div>

          {/* The first 8 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-item"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-blue-600">8</span>
              <h3 className="text-2xl font-bold text-sovereign-900">
                The Journey
              </h3>
            </div>
            <p className="text-sovereign-600 leading-relaxed mb-4">
              We take data from <strong>0.4</strong> (the grey zone of ambiguity) 
              and refine it to <strong>0.8</strong> (actionable confidence).
            </p>
            <p className="text-sm text-sovereign-500 italic">
              Why 0.8 and not 0.99? Because we're honest. We work with AI, and 
              we understand its limitations.
            </p>
          </motion.div>

          {/* The second 8 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bento-item"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-emerald-600">8</span>
              <h3 className="text-2xl font-bold text-sovereign-900">
                The Promise
              </h3>
            </div>
            <p className="text-sovereign-600 leading-relaxed">
              Our sustained commitment to continuously provide trusted data that 
              improves usability. We don't deliver data and walk away. We refine, 
              iterate, and earn your trust—again and again.
            </p>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-sovereign-900 text-white text-center">
            <p className="text-lg leading-relaxed">
              <strong className="text-terracotta">Together, 488 means:</strong> Four 
              principles guiding a journey from ambiguity (0.4) to confidence (0.8), 
              with a sustained promise to provide trusted data that improves usability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
