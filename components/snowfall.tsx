'use client'

import { useEffect, useRef, useState } from 'react'

const FLOWERS = ['🌸', '🌺', '🌼', '💮', '🪷', '✿']
const PETAL_COUNT = 40
const GRAVITY = 0.5
const FRICTION = 0.98
const WIND = 0.1
const MOUSE_INFLUENCE_RADIUS = 150
const MOUSE_REPEL_FORCE = 5

interface PetalState {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  size: number
  opacity: number
  emoji: string
}

export default function FlowerFall() {
  const containerRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number | null>(null)
  const petalsRef = useRef<PetalState[]>([])
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 })
  // Use state only for initial render to mount the divs, then manipulate DOM directly for performance
  const [mounted, setMounted] = useState(false)

  // Initialize petals
  useEffect(() => {
    if (typeof window === 'undefined') return

    const initialPetals: PetalState[] = []
    for (let i = 0; i < PETAL_COUNT; i++) {
      initialPetals.push(createPetal(i, window.innerWidth, window.innerHeight, true))
    }
    petalsRef.current = initialPetals
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Handle touch move for mobile interactivity
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [])

  const createPetal = (id: number, width: number, height: number, randomY: boolean = false): PetalState => {
    return {
      id,
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -50,
      vx: (Math.random() - 0.5) * 2, // -1 to 1
      vy: Math.random() * 1.5 + 0.5, // 0.5 to 2 (slower fall)
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      size: Math.random() * 10 + 8, // 8 to 18px (smaller)
      opacity: Math.random() * 0.5 + 0.5,
      emoji: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
    }
  }

  const animate = () => {
    if (!containerRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight
    const mouse = mouseRef.current

    petalsRef.current.forEach((petal, index) => {
      // Physics calculations

      // Calculate distance to mouse
      const dx = petal.x - mouse.x
      const dy = petal.y - mouse.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Mouse Interaction (Repel)
      if (distance < MOUSE_INFLUENCE_RADIUS) {
        const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS
        const angle = Math.atan2(dy, dx)

        petal.vx += Math.cos(angle) * force * MOUSE_REPEL_FORCE
        petal.vy += Math.sin(angle) * force * MOUSE_REPEL_FORCE
      }

      // Gravity and Friction
      petal.vy += GRAVITY * 0.05 // Reduced gravity effect
      petal.vx += (Math.random() - 0.5) * WIND // Random sway

      // Apply drag/friction
      petal.vx *= FRICTION
      petal.vy *= FRICTION

      // Limit terminal velocity
      const maxSpeed = 3
      const speed = Math.sqrt(petal.vx * petal.vx + petal.vy * petal.vy)
      if (speed > maxSpeed) {
        petal.vx = (petal.vx / speed) * maxSpeed
        petal.vy = (petal.vy / speed) * maxSpeed
      }

      // Update position
      petal.x += petal.vx
      petal.y += petal.vy
      petal.rotation += petal.rotationSpeed

      // Boundary Check (Reset if moving off bottom)
      if (petal.y > height + 50) {
        Object.assign(petal, createPetal(petal.id, width, height))
      }

      // Wrap around sides
      if (petal.x > width + 20) petal.x = -20
      if (petal.x < -20) petal.x = width + 20

      // Direct DOM manipulation
      const el = containerRef.current?.children[index] as HTMLElement
      if (el) {
        el.style.transform = `translate3d(${petal.x}px, ${petal.y}px, 0) rotate(${petal.rotation}deg)`
      }
    })

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (mounted) {
      requestRef.current = requestAnimationFrame(animate)
      // Handle resize
      const handleResize = () => {
        // Could reset petals or adjust bounds, but straightforward wrapping handles it generally
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[100] overflow-hidden"
    >
      {petalsRef.current.map((petal) => (
        <div
          key={petal.id}
          className="absolute will-change-transform select-none"
          style={{
            left: 0,
            top: 0,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            // Initial transform to prevent FOUC
            transform: `translate3d(${petal.x}px, ${petal.y}px, 0) rotate(${petal.rotation}deg)`
          }}
        >
          {petal.emoji}
        </div>
      ))}
    </div>
  )
}
