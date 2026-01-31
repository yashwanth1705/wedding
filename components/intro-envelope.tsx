'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
    onOpen: () => void
}

export default function IntroEnvelope({ onOpen }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)

    const handleOpen = () => {
        setIsOpen(true)
        onOpen()
        // Allow main content to be interactive after animation
        setTimeout(() => {
            setIsVisible(false)
            // Enable scrolling on the body
            document.body.style.overflow = 'auto'
        }, 1500)
    }

    const [stars, setStars] = useState<any[]>([])

    useEffect(() => {
        // Generate stars only on client side to avoid hydration mismatch
        const generatedStars = [...Array(100)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            initialOpacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            shouldTwinkle: Math.random() > 0.4, // Only 60% of stars will twinkle
        }))
        setStars(generatedStars)
    }, [])

    useEffect(() => {
        // Disable scroll when the intro is visible
        if (isVisible) {
            document.body.style.overflow = 'hidden'
        }
    }, [isVisible])

    if (!isVisible) return null

    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
                >
                    {/* Starry Night Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
                        {/* Generate Stars */}
                        {/* Generate Stars (Client-Side Only) */}
                        {stars.map((star, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-white rounded-full"
                                initial={{ opacity: star.initialOpacity, scale: 0.8 }}
                                animate={star.shouldTwinkle ? {
                                    opacity: [star.initialOpacity, 1, star.initialOpacity],
                                    scale: [0.8, 1.2, 0.8]
                                } : {}}
                                transition={star.shouldTwinkle ? {
                                    duration: star.duration,
                                    repeat: Infinity,
                                    delay: star.delay,
                                    ease: "easeInOut"
                                } : {}}
                                style={{
                                    top: star.top,
                                    left: star.left,
                                    width: star.width,
                                    height: star.height,
                                }}
                            />
                        ))}
                    </div>

                    {/* Add Twinkle Keyframes */}


                    {/* Ambient Glow (reduced) */}
                    <div className="absolute inset-0 pointer-events-none z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-white/5 rounded-full blur-[100px]" />
                    </div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        onClick={handleOpen}
                        className="relative cursor-pointer group"
                    >
                        {/* Envelope Container */}
                        <div className="relative w-[300px] h-[200px] sm:w-[500px] sm:h-[320px] bg-[#1a1a1a] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-xl border border-white/5">

                            {/* Comet Border Effect */}
                            <div className="absolute inset-0 z-0 opacity-50">
                                {/* Top Runner */}
                                <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer-x" />
                                {/* Bottom Runner */}
                                <div className="absolute bottom-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-full animate-shimmer-x" style={{ animationDelay: '1.5s' }} />
                                {/* Right Runner */}
                                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent -translate-y-full animate-shimmer-y" style={{ animationDelay: '0.75s' }} />
                                {/* Left Runner */}
                                <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent translate-y-full animate-shimmer-y" style={{ animationDelay: '2.25s' }} />
                            </div>

                            {/* Inner Border to create the "track" feel */}
                            <div className="absolute inset-[1px] bg-[#1a1a1a] z-0 rounded-xl" />

                            {/* Envelope Flap - Lighter for contrast (catching light) */}
                            <div
                                className="absolute top-0 left-0 w-full h-1/2 bg-[#222] border-b border-l border-r border-white/10 z-20 origin-top transition-transform duration-700 ease-in-out shadow-lg"
                                style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
                            />

                            {/* Envelope Body (Bottom) - Darker */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#151515] border-t border-white/5 z-10 rounded-b-xl">
                                {/* Black Border accent inside */}
                                <div className="absolute inset-2 border border-black/80 rounded-b-lg opacity-50" />
                            </div>

                            {/* Gold Wax Seal - CENTERED */}
                            <div className="absolute top-1/2 left-1/2 z-30 flex flex-col items-center" style={{ transform: 'translate(-50%, -50%)' }}>
                                <div className="relative">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA8C2C] shadow-lg flex items-center justify-center border-4 border-[#8B7355]/30 relative z-10"
                                    >
                                        {/* Inner detail of the seal */}
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#8B7355]/40 flex items-center justify-center">
                                            <span className="text-[#5C4D35] font-serif text-xl sm:text-2xl font-bold">YT</span>
                                        </div>
                                    </motion.div>

                                    {/* Text positioned absolutely */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max animate-pulse">
                                        <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.3em]">Click to Open</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
