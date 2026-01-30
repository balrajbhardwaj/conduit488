'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * OPTION 1: Journey Visualization
 * Shows particles flowing from 0.4 (chaos/ambiguity) to 0.8 (confidence)
 * - Four colored pillars at bottom = 4 core principles
 * - Particles rising along diagonal = the confidence journey (0.4→0.8)
 * - Infinity symbol at top = sustained commitment (second 8)
 */

export function PhilosophyAnimationOption1() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    let progress = 0
    const speed = 0.002

    interface Particle {
      x: number
      y: number
      targetY: number
      speed: number
      size: number
      alpha: number
      color: string
      phase: number
    }

    const particles: Particle[] = []
    const particleCount = 60

    const principleColors = ['#B85C38', '#3b82f6', '#10B981', '#f59e0b']

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: height * 0.7 + Math.random() * 20,
        targetY: height * 0.3,
        speed: 0.3 + Math.random() * 0.5,
        size: 2 + Math.random() * 3,
        alpha: 0.4 + Math.random() * 0.4,
        color: principleColors[Math.floor(Math.random() * principleColors.length)],
        phase: Math.random() * Math.PI * 2
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      progress += speed
      if (progress > 1) progress = 0

      // Draw the four pillars (4 principles)
      const pillarWidth = width / 6
      const pillarSpacing = width / 5
      const startX = pillarSpacing / 2

      principleColors.forEach((color, i) => {
        const x = startX + i * pillarSpacing
        const pillarHeight = 40 + Math.sin(progress * Math.PI * 2 + i) * 10

        const gradient = ctx.createLinearGradient(x, height - pillarHeight, x, height)
        gradient.addColorStop(0, color + '80')
        gradient.addColorStop(1, color + '20')

        ctx.fillStyle = gradient
        ctx.fillRect(x - pillarWidth / 2, height - pillarHeight, pillarWidth, pillarHeight)

        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.strokeRect(x - pillarWidth / 2, height - pillarHeight, pillarWidth, pillarHeight)
      })

      // Draw journey line
      ctx.strokeStyle = '#64748b40'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.moveTo(0, height * 0.7)
      ctx.lineTo(width, height * 0.3)
      ctx.stroke()
      ctx.setLineDash([])

      // Labels
      ctx.font = '14px Inter, sans-serif'
      ctx.fillStyle = '#64748b'
      ctx.fillText('0.4', 10, height * 0.7)
      ctx.fillText('0.8', width - 35, height * 0.3)

      // Animate particles
      particles.forEach((particle) => {
        const journeyProgress = (particle.x / width) * progress
        particle.y = height * 0.7 - (height * 0.4) * journeyProgress + 
                     Math.sin(particle.phase + progress * Math.PI * 4) * 15

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particle.x - 20, particle.y + 10)
        ctx.strokeStyle = particle.color + '20'
        ctx.lineWidth = particle.size / 2
        ctx.stroke()

        particle.phase += 0.02
      })

      // Infinity symbol
      const centerX = width / 2
      const centerY = height * 0.15
      const radius = 30
      
      ctx.strokeStyle = '#10B981'
      ctx.lineWidth = 3
      ctx.beginPath()
      
      for (let t = 0; t < Math.PI * 2; t += 0.01) {
        const x = centerX + (radius * Math.sin(t)) / (1 + Math.cos(t) * Math.cos(t))
        const y = centerY + (radius * Math.sin(t) * Math.cos(t)) / (1 + Math.cos(t) * Math.cos(t))
        
        if (t === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      ctx.shadowBlur = 10 + Math.sin(progress * Math.PI * 4) * 5
      ctx.shadowColor = '#10B981'
      ctx.stroke()
      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full h-64 rounded-2xl overflow-hidden bg-sovereign-900 border border-sovereign-700"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-4 text-2xl font-bold text-white">
            <span className="text-terracotta">4</span>
            <span className="text-blue-400">8</span>
            <span className="text-emerald-400">8</span>
          </div>
          <div className="text-sm text-white/60 font-medium">
            Principles → Journey → Promise
          </div>
        </div>
      </div>
    </motion.div>
  )
}
