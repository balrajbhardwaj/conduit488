'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Products',
    href: '#',
    children: [
      { name: 'Conduit Ascent', href: '/products/ascent', description: 'AI-powered education platform', badge: 'April 2026' },
      { name: 'Conduit Resonance', href: '/products/resonance', description: 'Customer intelligence platform', badge: 'May 2026' },
      { name: 'Conduit Lens', href: '/products/lens', description: 'Market intelligence for traders', badge: 'August 2026' },
      { name: 'Conduit Sentinel', href: '/products/sentinel', description: 'Governance & compliance', badge: 'Consulting' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-sovereign-900/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Conduit488"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="ml-3 flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">
                CONDUIT<span className="text-terracotta">488</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    onMouseEnter={() => setProductsOpen(true)}
                    className={cn(
                      'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all',
                      'text-sovereign-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      'ml-1 w-4 h-4 transition-transform',
                      productsOpen && 'rotate-180'
                    )} />
                  </button>

                  {/* Dropdown */}
                  {productsOpen && (
                    <div
                      onMouseLeave={() => setProductsOpen(false)}
                      className="absolute top-full left-0 mt-2 w-80 bg-sovereign-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-slide-down"
                    >
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-start p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-white group-hover:text-terracotta transition-colors">
                                  {child.name}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-terracotta/10 text-terracotta border border-terracotta/20">
                                  {child.badge}
                                </span>
                              </div>
                              <p className="text-xs text-sovereign-400 mt-0.5">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all',
                    pathname === item.href
                      ? 'text-white bg-white/10'
                      : 'text-sovereign-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}

            <Link href="/contact" className="btn-primary ml-4">
              Start Conversation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sovereign-900 border-t border-white/10 shadow-2xl animate-slide-down">
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="space-y-2">
                  <span className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-sovereign-500">
                    {item.name}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="flex items-center justify-between px-4 py-3 text-sovereign-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <span>{child.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-terracotta/10 text-terracotta">
                        {child.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-sovereign-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-4">
              <Link href="/contact" className="btn-primary w-full">
                Start Conversation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
