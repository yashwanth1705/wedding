'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      // Wedding date: June 17, 2026, 9:00 AM IST
      const weddingDate = new Date('2026-06-17T09:00:00+05:30')
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="py-8 px-4">
      <div className="text-center mb-6 animate-slide-in-down">
        <p className="text-sm tracking-widest text-gold font-light uppercase mb-2">
          Counting Down To Our Special Day
        </p>
        <p className="text-xs text-muted-foreground">
          June 17, 2026 • Muhurtham Ceremony
        </p>
      </div>

      <div className="flex justify-center gap-3 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className={`glass-morphism rounded-lg p-3 md:p-5 min-w-[70px] md:min-w-[90px] text-center hover-lift transition-smooth animate-stagger-${index + 1}`}
          >
            <div className="relative">
              <span className="text-3xl md:text-5xl font-serif text-foreground countdown-number">
                {String(unit.value).padStart(2, '0')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none rounded" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider font-light">
              {unit.label}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .countdown-number {
          background: linear-gradient(180deg, var(--foreground) 0%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  )
}
