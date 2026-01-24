'use client'

import { useState } from 'react'

export default function Events() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const events = [
    {
      id: 1,
      date: 'Monday, June 16th',
      time: 'Morning',
      title: 'Nalangu (Haldi)',
      location: 'Tenkasi Salaipudur',
      description:
        'A vibrant celebration where yellow turmeric water is poured as a sacred blessing, symbolizing purification and beauty.',
      icon: '💛',
    },
    {
      id: 2,
      date: 'Monday, June 16th',
      time: 'Morning',
      title: 'Urumaru Kattu Seeru',
      location: 'Tenkasi Salaipudur',
      description:
        'The father ceremonially ties the turban, bestowing blessings and family honor upon the groom.',
      icon: '👑',
    },
    {
      id: 3,
      date: 'Monday, June 16th',
      time: 'Evening',
      title: 'Mugurtha Aarusi',
      location: 'Tenkasi Salaipudur',
      description:
        'A traditional blessing ceremony, seeking divine grace and auspicious blessings for the couple.',
      icon: '🙏',
    },
    {
      id: 4,
      date: 'Tuesday, June 17th',
      time: '9:00 AM - 10:30 AM',
      title: 'Thali Tying & Marriage',
      location: 'Tenkasi Salaipudur',
      description:
        'The sacred tying of the Thali, the most significant ritual symbolizing the eternal bond of marriage.',
      icon: '💍',
    },
  ]

  return (
    <section className="py-24 px-4 bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Wedding Events
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`group relative glass-morphism backdrop-blur-xl p-8 rounded-xl transition-all duration-300 cursor-pointer h-full
                  ${
                    hoveredCard === event.id
                      ? 'transform -translate-y-2 shadow-2xl'
                      : 'shadow-lg'
                  }
                `}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{event.icon}</div>

                {/* Date Badge */}
                <div className="text-sm tracking-widest text-gold uppercase mb-3 font-light">
                  {event.date}
                </div>

                {/* Time */}
                <div className="text-sm text-muted-foreground mb-4">{event.time}</div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-foreground mb-3">
                  {event.title}
                </h3>

                {/* Location */}
                <p className="text-primary text-sm mb-4 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Hover accent */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 pointer-events-none transition-opacity duration-300 ${
                    hoveredCard === event.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
