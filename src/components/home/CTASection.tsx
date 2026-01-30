'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-sovereign-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-sovereign-900 mb-6">
          Ready to Build Trust in Your Data?
        </h2>
        <p className="text-xl text-sovereign-600 mb-10 max-w-2xl mx-auto">
          Whether you're preparing for 11+ exams, analyzing markets, or managing 
          customer data—we build transparent AI that earns your confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary group">
            Start the Conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center justify-center px-6 py-3 bg-sovereign-900 text-white font-semibold rounded-lg hover:bg-sovereign-800 transition-colors"
          >
            Learn About Our Philosophy
          </Link>
        </div>

        {/* Trust statement */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-sovereign-200 shadow-sm">
          <blockquote className="text-lg text-sovereign-700 italic">
            "We don't claim to be perfect. We claim to be transparent about our 
            confidence, honest about our limitations, and relentless in our improvement."
          </blockquote>
          <p className="mt-4 text-sm text-sovereign-500 font-medium">
            — The Conduit488 Promise
          </p>
        </div>
      </div>
    </section>
  )
}
