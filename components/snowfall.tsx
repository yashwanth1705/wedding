'use client'

import { useEffect, useState } from 'react'

interface Petal {
    id: number
    left: number
    size: number
    duration: number
    delay: number
    opacity: number
    rotate: number
    flower: string
}

const FLOWERS = ['🌸', '🌺', '🌼', '💮', '🪷', '✿']

export default function FlowerFall() {
    const [petals, setPetals] = useState<Petal[]>([])

    useEffect(() => {
        const petalList: Petal[] = []
        const count = 40

        for (let i = 0; i < count; i++) {
            petalList.push({
                id: i,
                left: Math.random() * 100,
                size: Math.random() * 10 + 10, // 10-20px
                duration: Math.random() * 10 + 12, // 12-22s fall time
                delay: Math.random() * 8,
                opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7 opacity
                rotate: Math.random() * 360,
                flower: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
            })
        }

        setPetals(petalList)
    }, [])

    return (
        <>
            <style jsx global>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg) translateX(30px);
            opacity: 0;
          }
        }
        
        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(15px);
          }
        }
      `}</style>

            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 100,
                    overflow: 'hidden',
                }}
            >
                {petals.map((petal) => (
                    <div
                        key={petal.id}
                        style={{
                            position: 'absolute',
                            top: '-30px',
                            left: `${petal.left}%`,
                            fontSize: `${petal.size}px`,
                            opacity: petal.opacity,
                            animation: `petalFall ${petal.duration}s linear ${petal.delay}s infinite`,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                        }}
                    >
                        {petal.flower}
                    </div>
                ))}
            </div>
        </>
    )
}
