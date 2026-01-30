'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated data flow visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system for data flow
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
      color: string
    }> = []

    const colors = ['#B85C38', '#64748b', '#3b82f6']

    const createParticle = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      return {
        x: Math.random() * width * 0.3,
        y: Math.random() * height,
        vx: 0.5 + Math.random() * 1,
        vy: (Math.random() - 0.5) * 0.5,
        size: 2 + Math.random() * 3,
        alpha: 0.3 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx
        p.y += p.vy

        // Reset if off screen
        if (p.x > width) {
          particles[i] = createParticle()
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()

        // Draw trail
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x - 20, p.y)
        ctx.strokeStyle = p.color
        ctx.lineWidth = p.size * 0.5
        ctx.globalAlpha = p.alpha * 0.3
        ctx.stroke()
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-sovereign-900 overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        
        {/* Animated canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60"
        />
        
        {/* Gradient orbs */}
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-20 animate-pulse-slow"
          style={{ backgroundColor: '#B85C38' }}
        />
        <div 
          className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full filter blur-[100px] opacity-10"
          style={{ backgroundColor: '#3b82f6' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-terracotta" />
            <span className="text-sm text-sovereign-300">
              Conduit Ascent launching April 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-slide-up">
            Honest Intelligence.
            <br />
            <span className="text-gradient">Built for Trust.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-sovereign-400 max-w-2xl mb-10 font-light leading-relaxed animate-slide-up animation-delay-150">
            We don't promise perfect AI. We promise transparent AI—where every 
            insight shows its confidence, every decision reveals its reasoning, 
            and every limitation is acknowledged.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
            <Link href="/contact" className="btn-primary group">
              Start the Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="btn-secondary">
              Explore the Lab
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 animate-slide-up animation-delay-500">
          <StatItem value="4" label="Core Ethos" />
          <StatItem value="0.4" label="Where We Start" />
          <StatItem value="0.8" label="Where We Land" />
          <StatItem value="∞" label="Always Improving" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-sovereign-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-sovereign-500 to-transparent" />
      </div>
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-sovereign-500 uppercase tracking-widest">{label}</div>
    </div>
  )
}
