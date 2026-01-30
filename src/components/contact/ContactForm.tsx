'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const domainInterests = [
  'Conduit Ascent (Education)',
  'Conduit Resonance (Insights)',
  'Conduit Lens (Market Intelligence)',
  'Conduit Sentinel (Consulting)',
  'Custom Data Solution',
  'Partnership Opportunity',
  'Other'
]

export function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    domain: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormState('success')
  }

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-sovereign-900 mb-4">
          Message Received
        </h3>
        <p className="text-sovereign-600">
          Thank you for reaching out. We'll review your inquiry and respond within 
          48 hours. In the meantime, feel free to explore our products.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Identity */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-sovereign-700 mb-2">
            Your Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-sovereign-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
            placeholder="Full name"
          />
        </div>

        {/* Coordinates */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-sovereign-700 mb-2">
            Email Address <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-sovereign-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
            placeholder="you@organization.com"
          />
        </div>

        {/* Affiliation */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-sovereign-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-sovereign-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
            placeholder="Company or institution name"
          />
        </div>

        {/* Domain Interest */}
        <div>
          <label htmlFor="domain" className="block text-sm font-medium text-sovereign-700 mb-2">
            Domain of Interest <span className="text-terracotta">*</span>
          </label>
          <select
            id="domain"
            required
            value={formData.domain}
            onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-sovereign-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all appearance-none bg-white"
          >
            <option value="">Select your area of interest</option>
            {domainInterests.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        {/* Briefing */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-sovereign-700 mb-2">
            Your Message <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-sovereign-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
            placeholder="Tell us about your data challenges or what you're hoping to achieve..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {formState === 'submitting' ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>

        <p className="text-sm text-sovereign-500 text-center">
          We typically respond within 48 hours.
        </p>
      </form>
    </motion.div>
  )
}
