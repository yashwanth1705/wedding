'use client'

import { useState } from 'react'

export default function CeremonyVideos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const ceremonies = [
    {
      id: 0,
      title: 'Engagement',
      subtitle: 'Ring Exchange Ceremony',
      date: 'Tuesday, 28th January, 2026',
      time: 'Auspicious Hour',
      description: 'The blessed beginning of our eternal journey together.',
      details: 'This joyous occasion marks the official announcement of the union.',
      image: '/engagement.jpg',
    },
    {
      id: 1,
      title: 'Nalangu (Haldi)',
      subtitle: 'The Golden Turmeric Ritual',
      date: 'Monday, 16th June | Morning',
      time: '9:00 A.M. onwards',
      description: 'Yellow turmeric water is ceremonially poured upon the bride.',
      details: 'A vibrant ceremony symbolizing purity and beauty enhancement.',
      image: '/nalangu.jpg',
    },
    {
      id: 2,
      title: 'Urumaru Kattu Seeru',
      subtitle: 'The Sacred Turban Tying',
      date: 'Monday, 16th June | Morning',
      time: '11:00 A.M. onwards',
      description: 'The father of the groom ceremonially ties a sacred turban.',
      details: 'Symbolizes the transition to married life and acceptance of responsibilities.',
      image: '/seeru.png',
    },
    {
      id: 3,
      title: 'Mugurtha Aarusi',
      subtitle: 'The Divine Blessing Ceremony',
      date: 'Monday, 16th June | Evening',
      time: 'After Sunset',
      description: 'Traditional blessing ceremony invoking divine grace.',
      details: 'Sacred chants and rituals fill the evening with spiritual energy.',
      image: '/mugurtha.jpg',
    },
    {
      id: 4,
      title: 'Muhurtham',
      subtitle: 'The Sacred Knot',
      date: 'Tuesday, 17th June | 9:00 A.M.',
      time: 'Morning Hour',
      description: 'The groom ties the Thali, symbolizing the eternal bond.',
      details: 'The most sacred ritual binding two souls in love and devotion.',
      image: '/muhurtham.png',
    },
    {
      id: 5,
      title: 'Reception',
      subtitle: 'Grand Finale',
      date: 'Saturday, 21st June | 6:00 P.M.',
      time: 'Evening Celebration',
      description: 'A grand celebration to honor the newlyweds with music and joy.',
      details: 'Join us for an evening of festivities celebrating their union.',
      image: '/reception.jpg',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {ceremonies.map((ceremony) => (
        <div
          key={ceremony.id}
          className="group cursor-none flex flex-col gap-6"
          onMouseEnter={() => setActiveVideo(ceremony.id)}
          onMouseLeave={() => setActiveVideo(null)}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src={ceremony.image}
              alt={ceremony.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          </div>

          {/* Minimal Content */}
          <div className="space-y-2 text-center md:text-left transition-opacity duration-300">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-black/10 pb-4 mb-4">
              <h3 className="text-2xl font-serif">{ceremony.title}</h3>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">{ceremony.time}</p>
            </div>

            <p className="text-lg font-light leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {ceremony.description}
            </p>

            <p className="text-xs uppercase tracking-widest pt-4 opacity-50">
              {ceremony.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
