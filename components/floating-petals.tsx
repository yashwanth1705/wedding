'use client'

import { useEffect, useState } from 'react'

interface Petal {
    id: number
    left: number
    animationDuration: number
    animationDelay: number
    size: number
    opacity: number
    rotation: number
    type: 'rose' | 'marigold' | 'jasmine'
}

export default function FloatingPetals() {
    const [petals, setPetals] = useState<Petal[]>([])

    useEffect(() => {
        const petalTypes: Array<'rose' | 'marigold' | 'jasmine'> = ['rose', 'marigold', 'jasmine']

        const generatedPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDuration: 8 + Math.random() * 12,
            animationDelay: Math.random() * 10,
            size: 10 + Math.random() * 15,
            opacity: 0.3 + Math.random() * 0.4,
            rotation: Math.random() * 360,
            type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
        }))

        setPetals(generatedPetals)
    }, [])

    const getPetalColor = (type: string) => {
        switch (type) {
            case 'rose':
                return '#e8a0a0' // Soft pink
            case 'marigold':
                return '#f5b942' // Golden orange
            case 'jasmine':
                return '#f5f0e1' // Cream white
            default:
                return '#e8a0a0'
        }
    }

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="absolute petal-fall"
                    style={{
                        left: `${petal.left}%`,
                        animationDuration: `${petal.animationDuration}s`,
                        animationDelay: `${petal.animationDelay}s`,
                        opacity: petal.opacity,
                        transform: `rotate(${petal.rotation}deg)`,
                    }}
                >
                    <svg
                        width={petal.size}
                        height={petal.size}
                        viewBox="0 0 24 24"
                        fill={getPetalColor(petal.type)}
                    >
                        {petal.type === 'rose' && (
                            <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 2 6.5 5 8.5.5-3 2.5-5.5 5-5.5s4.5 2.5 5 5.5c3-2 5-5 5-8.5 0-5.5-4.5-10-10-10z" />
                        )}
                        {petal.type === 'marigold' && (
                            <ellipse cx="12" cy="12" rx="8" ry="10" />
                        )}
                        {petal.type === 'jasmine' && (
                            <circle cx="12" cy="12" r="8" />
                        )}
                    </svg>
                </div>
            ))}

            <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes sway {
          0%, 100% {
            margin-left: 0;
          }
          25% {
            margin-left: 30px;
          }
          75% {
            margin-left: -30px;
          }
        }

        .petal-fall {
          animation: fall linear infinite, sway ease-in-out infinite;
          animation-duration: inherit;
        }
      `}</style>
        </div>
    )
}
