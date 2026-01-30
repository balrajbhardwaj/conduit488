import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact | Begin the Conversation',
  description: 'Connect with Conduit488 to explore how we can help transform your data challenges into trusted intelligence.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}
