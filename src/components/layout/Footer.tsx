import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Github } from 'lucide-react'

const footerNavigation = {
  products: [
    { name: 'Conduit Ascent', href: '/products/ascent' },
    { name: 'Conduit Resonance', href: '/products/resonance' },
    { name: 'Conduit Lens', href: '/products/lens' },
    { name: 'Conduit Sentinel', href: '/products/sentinel' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'The 488 Philosophy', href: '/about#philosophy' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-sovereign-950 text-sovereign-400 border-t border-white/5 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo-icon.png"
                  alt="Conduit488"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-white">
                CONDUIT<span className="text-terracotta">488</span>
              </span>
            </Link>
            <p className="text-sm text-sovereign-500 leading-relaxed mb-6">
              Engineering Reliable Data to Earn Your Trust. We build transparent 
              AI platforms where every insight shows its confidence level.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@conduit488.com" 
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm hover:text-terracotta transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm hover:text-terracotta transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-sm text-sovereign-300 mb-3">
                Partnership & Inquiries
              </p>
              <a 
                href="mailto:hello@conduit488.com"
                className="text-sm flex items-center gap-2 text-white hover:text-terracotta transition-colors"
              >
                <Mail className="w-4 h-4 text-terracotta" />
                hello@conduit488.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sovereign-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Conduit488. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-xs text-sovereign-600 hover:text-sovereign-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
