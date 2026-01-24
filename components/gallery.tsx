'use client'

import { useState, useEffect } from 'react'

export default function Gallery() {
    const photos = [
        { src: '/engagement.jpg', alt: 'Engagement Ceremony', caption: 'The Ring Exchange' },
        { src: '/nalangu.jpg', alt: 'Nalangu Ceremony', caption: 'Haldi Celebration' },
        { src: '/seeru.png', alt: 'Urumaru Kattu Seeru', caption: 'Sacred Turban' },
        { src: '/mugurtha.jpg', alt: 'Mugurtha Aarusi', caption: 'Divine Blessings' },
        { src: '/muhurtham.png', alt: 'Muhurtham', caption: 'The Sacred Union' },
        { src: '/reception.jpg', alt: 'Reception', caption: 'Grand Celebration' },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % photos.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [isPaused, photos.length])

    return (
        <section className="py-16 sm:py-24 px-4 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/50 mb-3 sm:mb-4">
                        Captured Moments
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-4 sm:mb-6">Gallery</h2>
                    <div className="w-16 sm:w-24 h-[1px] bg-white/30 mx-auto" />
                </div>

                {/* Grid Gallery - Responsive: 2 cols on mobile, 3 on tablet+ */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/5] overflow-hidden bg-neutral-800"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${activeIndex === index ? 'grayscale-0' : 'grayscale'
                                    }`}
                            />

                            {/* Active Indicator */}
                            {activeIndex === index && !isPaused && (
                                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse" />
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-6">
                                <div>
                                    <p className="text-white font-serif text-sm sm:text-xl">{photo.caption}</p>
                                    <p className="text-white/60 text-xs sm:text-sm mt-1">{photo.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                    {photos.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white w-4 sm:w-6' : 'bg-white/30 w-1.5 sm:w-2'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
