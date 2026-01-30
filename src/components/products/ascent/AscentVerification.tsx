'use client'

import { motion } from 'framer-motion'
import { Bot, User, CheckCircle, ArrowRight } from 'lucide-react'

const verificationSteps = [
  {
    icon: Bot,
    label: 'AI Generation',
    description: 'Advanced language models create curriculum-aligned questions at scale.'
  },
  {
    icon: User,
    label: 'Teacher Review',
    description: 'Qualified educators verify accuracy, appropriateness, and curriculum alignment.'
  },
  {
    icon: CheckCircle,
    label: 'Confidence Assignment',
    description: 'Each question receives a transparent confidence score based on review consensus.'
  }
]

export function AscentVerification() {
  return (
    <section className="py-24 bg-sovereign-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sovereign-900 mb-6">
            The Verification Pipeline
          </h2>
          <p className="text-lg text-sovereign-600 max-w-2xl mx-auto">
            We don't just generate questions—we validate them. Every piece of content 
            passes through our three-stage verification process.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          {verificationSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex-1 max-w-xs w-full"
            >
              <div className="p-6 rounded-2xl bg-white border border-sovereign-200 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-sovereign-900 mb-2">
                  {step.label}
                </h3>
                <p className="text-sm text-sovereign-600">
                  {step.description}
                </p>
              </div>
              {index < verificationSteps.length - 1 && (
                <div className="hidden md:flex justify-center py-4">
                  <ArrowRight className="w-6 h-6 text-sovereign-300 rotate-90 md:rotate-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50,000+', label: 'Questions in Library' },
            { value: '100%', label: 'Curriculum Coverage' },
            { value: '3+', label: 'Teacher Reviews Each' },
            { value: '0.85', label: 'Average Confidence Score' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white border border-sovereign-200"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-sovereign-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
