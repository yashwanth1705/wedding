'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 py-16 sm:py-20">

      {/* Elegant Header Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">

        {/* Top Decorative Line */}
        <div className="w-16 sm:w-24 h-[1px] bg-white/50 mb-6 sm:mb-8 animate-scale-in" />

        {/* Pre-title */}
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 text-white/60 animate-fade-in">
          Together with their families
        </p>

        {/* Names - Stacked Elegantly */}
        <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight animate-fade-in-up leading-tight whitespace-nowrap">
            Yashwanth Rathnam S
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/60 animate-scale-in">
            &
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight animate-fade-in-up leading-tight whitespace-nowrap" style={{ animationDelay: '0.2s' }}>
            Tamilselvam C
          </h1>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="w-8 sm:w-12 h-[1px] bg-white/30" />
          <span className="text-base sm:text-lg">✦</span>
          <div className="w-8 sm:w-12 h-[1px] bg-white/30" />
        </div>

        {/* Date Display - Clean Typography */}
        <div className="space-y-2 sm:space-y-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest">
            JUNE 17, 2026
          </p>
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/60">
            Tenkasi, Tamil Nadu
          </p>
        </div>

        {/* Countdown to Wedding */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 w-full animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-3 sm:mb-4">
            Celebrating in
          </p>
          <CountdownDisplay />
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce-gentle">
        <p className="text-xs uppercase tracking-widest text-white/50">Scroll</p>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>

      {/* Subtle Background Elements */}
      <div
        className="absolute top-20 right-5 sm:right-10 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full blur-3xl -z-10"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-20 left-5 sm:left-10 w-40 sm:w-80 h-40 sm:h-80 bg-white/5 rounded-full blur-3xl -z-10"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      />
    </section>
  )
}

function CountdownDisplay() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-06-17T09:00:00+05:30')

    const calculateTime = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 text-center">
      <div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif">{timeLeft.days}</p>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mt-1">Days</p>
      </div>
      <div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif">{timeLeft.hours}</p>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mt-1">Hours</p>
      </div>
      <div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif">{timeLeft.minutes}</p>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mt-1">Min</p>
      </div>
      <div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif">{timeLeft.seconds}</p>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mt-1">Sec</p>
      </div>
    </div>
  )
}
