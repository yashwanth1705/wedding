'use client'

import { useEffect, useRef, useState } from 'react'

// Google Maps URLs for venues
const VENUE_MAPS = {
    tenkasi: 'https://www.google.com/maps/search/?api=1&query=Salaipudur+Tenkasi+Tamil+Nadu+India',
    pvMahal: 'https://www.google.com/maps/search/?api=1&query=PV+Mahal+Pollachi+Tamil+Nadu+India',
}

export default function Venues() {
    const ceremonies = [
        {
            event: 'Engagement',
            date: 'Wednesday, January 28th, 2026',
            time: 'Auspicious Hour',
            venue: 'Family Residence',
            address: 'Salaipudur, Tenkasi, Tamil Nadu',
            mapLink: VENUE_MAPS.tenkasi,
            description: 'An intimate gathering where the couple exchanges rings, marking the official beginning of their journey together.',
            image: '/engagement.jpg'
        },
        {
            event: 'Nalangu (Haldi)',
            date: 'Tuesday, June 16th, 2026',
            time: '9:00 AM - 12:00 PM',
            venue: 'Family Residence',
            address: 'Salaipudur, Tenkasi, Tamil Nadu',
            mapLink: VENUE_MAPS.tenkasi,
            description: 'The joyous turmeric ceremony where the bride is anointed with sacred yellow paste, symbolizing purity and blessings.',
            image: '/nalangu.jpg'
        },
        {
            event: 'Urumaru Kattu Seeru',
            date: 'Tuesday, June 16th, 2026',
            time: '11:00 AM - 1:00 PM',
            venue: 'Family Residence',
            address: 'Salaipudur, Tenkasi, Tamil Nadu',
            mapLink: VENUE_MAPS.tenkasi,
            description: 'The sacred turban-tying ceremony where the groom receives blessings and is welcomed into his new responsibilities.',
            image: '/seeru.png'
        },
        {
            event: 'Mugurtha Aarusi',
            date: 'Tuesday, June 16th, 2026',
            time: '6:00 PM - 9:00 PM',
            venue: 'Family Residence',
            address: 'Salaipudur, Tenkasi, Tamil Nadu',
            mapLink: VENUE_MAPS.tenkasi,
            description: 'A divine blessing ceremony with sacred chants and prayers invoking prosperity and happiness for the couple.',
            image: '/mugurtha.jpg'
        },
        {
            event: 'Muhurtham',
            date: 'Wednesday, June 17th, 2026',
            time: '9:00 AM - 10:30 AM',
            venue: 'Wedding Mandapam',
            address: 'Salaipudur, Tenkasi, Tamil Nadu',
            mapLink: VENUE_MAPS.tenkasi,
            description: 'The most sacred moment when the groom ties the Thali around the bride\'s neck, sealing their eternal bond of marriage.',
            image: '/muhurtham.png',
            isMain: true
        },
        {
            event: 'Grand Reception',
            date: 'Sunday, June 21st, 2026',
            time: '6:00 PM - 8:00 PM',
            venue: 'PV Mahal',
            address: 'Pollachi, Tamil Nadu',
            mapLink: VENUE_MAPS.pvMahal,
            description: 'A grand celebration honoring the newlyweds with music, dance, and festivities surrounded by loved ones.',
            image: '/reception.jpg'
        }
    ]

    return (
        <section className="py-16 sm:py-24 px-4 bg-black text-white">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-20">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/50 mb-3 sm:mb-4">
                        Join Us For
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-4 sm:mb-6">The Celebrations</h2>
                    <div className="w-16 sm:w-24 h-[1px] bg-white/30 mx-auto" />
                </div>

                {/* Events Grid */}
                <div className="space-y-0">
                    {ceremonies.map((ceremony, index) => (
                        <CeremonyCard key={index} ceremony={ceremony} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface CeremonyCardProps {
    ceremony: {
        event: string
        date: string
        time: string
        venue: string
        address: string
        mapLink: string
        description: string
        image: string
        isMain?: boolean
    }
    index: number
}

function CeremonyCard({ ceremony, index }: CeremonyCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                } else {
                    setIsInView(false)
                }
            },
            { threshold: 0.3 }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const showColor = isInView || isHovered

    return (
        <div
            ref={cardRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${ceremony.isMain ? 'bg-white/5' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <div className={`relative h-72 sm:h-80 lg:h-96 overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                    src={ceremony.image}
                    alt={ceremony.event}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ${showColor ? 'grayscale-0 scale-105' : 'grayscale'
                        }`}
                />
                {ceremony.isMain && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest bg-white text-black">
                        Main Event
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-2">
                    {ceremony.date}
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4">{ceremony.event}</h3>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                    {ceremony.description}
                </p>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                        <span className="text-white/40 text-sm">⏰</span>
                        <span className="text-sm sm:text-base text-white/80">{ceremony.time}</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                        <span className="text-white/40 text-sm">📍</span>
                        <div>
                            <p className="text-sm sm:text-base text-white/80">{ceremony.venue}</p>
                            <p className="text-xs sm:text-sm text-white/50">{ceremony.address}</p>
                        </div>
                    </div>
                </div>

                <a
                    href={ceremony.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest border-b border-white/50 pb-1 hover:border-white transition-colors w-fit"
                >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View on Maps
                </a>
            </div>
        </div>
    )
}
