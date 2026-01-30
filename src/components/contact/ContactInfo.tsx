'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* What to expect */}
      <div className="p-8 rounded-2xl bg-sovereign-50 border border-sovereign-200">
        <h3 className="text-lg font-bold text-sovereign-900 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-terracotta" />
          What to Expect
        </h3>
        <ul className="space-y-3 text-sovereign-600">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
            <span>A genuine conversation, not a sales pitch</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
            <span>Honest assessment of whether we can help</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
            <span>Clear explanation of our approach and methodology</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
            <span>Transparent discussion of timelines and investment</span>
          </li>
        </ul>
      </div>

      {/* Contact details */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-sovereign-100 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-sovereign-600" />
          </div>
          <div>
            <h4 className="font-semibold text-sovereign-900">Email</h4>
            <a 
              href="mailto:hello@conduit488.com" 
              className="text-terracotta hover:underline"
            >
              hello@conduit488.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-sovereign-100 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-sovereign-600" />
          </div>
          <div>
            <h4 className="font-semibold text-sovereign-900">Location</h4>
            <p className="text-sovereign-600">
              London, United Kingdom<br />
              <span className="text-sm text-sovereign-500">Working globally, remotely</span>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-sovereign-100 flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-sovereign-600" />
          </div>
          <div>
            <h4 className="font-semibold text-sovereign-900">Response Time</h4>
            <p className="text-sovereign-600">
              Within 48 hours<br />
              <span className="text-sm text-sovereign-500">Monday – Friday, GMT</span>
            </p>
          </div>
        </div>
      </div>

      {/* Trust statement */}
      <div className="p-6 rounded-2xl bg-sovereign-900 text-white">
        <p className="text-sovereign-300 leading-relaxed">
          <span className="text-white font-semibold">"Trust isn't a sentiment—</span>
          it's a verifiable state. Our first conversation is about understanding 
          your challenge, not closing a deal."
        </p>
      </div>
    </motion.div>
  )
}
