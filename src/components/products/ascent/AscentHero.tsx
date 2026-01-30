'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Check, ArrowDown } from 'lucide-react'

export function AscentHero() {
  return (
    <section className="pt-32 pb-20 bg-sovereign-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div 
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-20"
        style={{ backgroundColor: '#3B82F6' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">
                Hero Product • April 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conduit Ascent
            </h1>
            <p className="text-2xl text-blue-300 font-medium mb-6">
              Verified K-12 Learning
            </p>
            <p className="text-lg text-sovereign-400 leading-relaxed mb-8">
              AI-assisted education that parents and teachers can actually trust. 
              Every question mapped to UK National Curriculum standards with 
              transparent confidence scores and human verification.
            </p>

            {/* Key benefits */}
            <ul className="space-y-3 mb-8">
              {[
                'Curriculum-aligned questions for KS1-KS4',
                'Every question carries a confidence score',
                'Human teachers verify AI-generated content',
                'Parents see exactly what children are learning'
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-sovereign-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#features" 
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Explore Features
                <ArrowDown className="w-4 h-4" />
              </a>
              <a 
                href="/contact" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Request Early Access
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Question card mockup */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-sovereign-400">Maths • KS2 • Year 5</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    0.87 Confidence
                  </span>
                </div>
                <p className="text-white text-lg mb-6">
                  A shop sells apples in bags of 6. If Sarah buys 4 bags, 
                  how many apples does she have?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['20', '24', '10', '28'].map((answer, i) => (
                    <button
                      key={i}
                      className={`p-4 rounded-xl border ${i === 1 ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-white/5 border-white/20 text-sovereign-300'} font-medium`}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-sovereign-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Verified by 3 teachers • Aligned to NC Objective 5N2b
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
