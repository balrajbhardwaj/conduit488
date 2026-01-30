'use client'

import { motion } from 'framer-motion'
import { BookOpen, Shield, LineChart, Users, Eye, Sparkles } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Curriculum Mapped',
    description: 'Every question directly linked to UK National Curriculum objectives. No guesswork—just precise alignment.'
  },
  {
    icon: Shield,
    title: 'Confidence Scoring',
    description: 'Each question displays its reliability score. If we\'re uncertain, we tell you.'
  },
  {
    icon: Users,
    title: 'Human Verification',
    description: 'Qualified teachers review AI-generated content before it reaches students.'
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Clear visualizations show learning gaps and growth over time.'
  },
  {
    icon: Eye,
    title: 'Parent Transparency',
    description: 'Parents see curriculum coverage, not just scores. Understand what your child is actually learning.'
  },
  {
    icon: Sparkles,
    title: 'Adaptive Learning',
    description: 'Questions adjust to student ability while maintaining curriculum alignment.'
  }
]

export function AscentFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
            Education You Can Trust
          </h2>
          <p className="text-lg text-sovereign-600 max-w-2xl mx-auto">
            Ascent brings the Glass Box philosophy to learning—every feature 
            designed around transparency, explainability, and earned trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-sovereign-50 border border-sovereign-200 hover:border-blue-300 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-sovereign-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sovereign-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
