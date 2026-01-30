'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

export function AscentCTA() {
  return (
    <section className="py-24 bg-sovereign-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-15"
        style={{ backgroundColor: '#3B82F6' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Launching April 2026
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Among the First
          </h2>
          <p className="text-lg text-sovereign-400 mb-8 max-w-2xl mx-auto">
            Join our early access programme to shape the future of transparent 
            education technology. Schools and parents welcome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?product=ascent" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Request Early Access
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
  )
}
