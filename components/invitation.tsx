'use client'

import CountdownTimer from './countdown-timer'

// Helper function to generate Google Calendar URL
const generateCalendarUrl = (event: {
  title: string
  date: string
  startTime: string
  endTime: string
  location: string
  description: string
}) => {
  const formatDate = (dateStr: string, timeStr: string) => {
    // Convert to YYYYMMDDTHHMMSS format
    const [day, month, year] = dateStr.split('-')
    const [hours, minutes] = timeStr.split(':')
    return `${year}${month}${day}T${hours}${minutes}00`
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${formatDate(event.date, event.startTime)}/${formatDate(event.date, event.endTime)}`,
    location: event.location,
    details: event.description,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

// Google Maps URLs for venues
const VENUE_MAPS = {
  tenkasi: 'https://www.google.com/maps/search/?api=1&query=Salaipudur+Tenkasi+Tamil+Nadu+India',
  pvMahal: 'https://www.google.com/maps/search/?api=1&query=PV+Mahal+Pollachi+Tamil+Nadu+India',
}

export default function Invitation() {
  const events = [
    {
      title: 'Nalangu (Haldi) Ceremony - Yashwanth & Tamilselvam Wedding',
      date: '16-06-2026',
      startTime: '09:00',
      endTime: '12:00',
      location: 'Salaipudur, Tenkasi, Tamil Nadu, India',
      description: 'The auspicious turmeric paste ceremony symbolizing purity & beauty',
    },
    {
      title: 'Urumaru Kattu Seeru - Yashwanth & Tamilselvam Wedding',
      date: '16-06-2026',
      startTime: '11:00',
      endTime: '13:00',
      location: 'Salaipudur, Tenkasi, Tamil Nadu, India',
      description: 'Ceremonial turban tying by the groom\'s father',
    },
    {
      title: 'Mugurtha Aarusi - Yashwanth & Tamilselvam Wedding',
      date: '16-06-2026',
      startTime: '18:00',
      endTime: '21:00',
      location: 'Salaipudur, Tenkasi, Tamil Nadu, India',
      description: 'Traditional blessing ceremony invoking divine grace',
    },
    {
      title: 'Muhurtham - Yashwanth & Tamilselvam Wedding',
      date: '17-06-2026',
      startTime: '09:00',
      endTime: '10:30',
      location: 'Salaipudur, Tenkasi, Tamil Nadu, India',
      description: 'The most sacred Muhurtham ritual - the binding of two souls',
    },
    {
      title: 'Grand Reception - Yashwanth & Tamilselvam Wedding',
      date: '21-06-2026',
      startTime: '18:00',
      endTime: '20:00',
      location: 'PV Mahal, Pollachi, Tamil Nadu, India',
      description: 'An evening of celebration with family & friends',
    },
  ]

  return (
    <div className="bg-background min-h-screen py-12 px-4 relative z-10">
      {/* Main Invitation Card */}
      <div className="max-w-3xl mx-auto">
        {/* Decorative Top Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 animate-slide-in-down" />

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in-up">
          <CountdownTimer />
        </div>

        {/* Invitation Card */}
        <div className="bg-white/50 glass-morphism rounded-lg p-8 md:p-16 mb-12 animate-fade-in-up hover-lift group">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-in-down">
            <div className="text-sm tracking-widest text-gold font-light uppercase mb-6">
              Together with their families
            </div>
            <div className="text-sm tracking-widest text-gold font-light uppercase mb-6">
              ✨ Honour your presence at the wedding of ✨
            </div>
          </div>

          {/* Names */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-2 animate-slide-in-left animate-text-shimmer">
              Yashwanth Rathnam S
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-4 animate-scale-in" />
            <p className="text-muted-foreground mb-6 animate-fade-in">and</p>
            <h2 className="text-5xl md:text-6xl font-serif text-foreground animate-slide-in-right animate-text-shimmer">
              Tamilselvam C
            </h2>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-8" />

          {/* Main Event */}
          <div className="text-center mb-12 animate-rotate-in">
            <div className="mb-8">
              <h3 className="text-lg font-light text-foreground mb-4 animate-stagger-1">
                In the auspicious union of marriage
              </h3>
              <p className="text-2xl md:text-3xl font-serif text-foreground mb-8 animate-stagger-2 animate-text-shimmer">
                🪷 Muhurtham 🪷
              </p>
              <p className="text-primary font-light tracking-wide mb-4 animate-stagger-3">
                17th Tuesday, June
              </p>
              <p className="text-primary font-light tracking-wide mb-2 animate-stagger-4">
                2026 A.D.
              </p>
              <p className="text-primary font-light tracking-wide mb-4 animate-stagger-5">
                Morning Hour: 9:00 A.M. - 10:30 A.M.
              </p>
              <a
                href={VENUE_MAPS.tenkasi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-foreground font-light mt-6 animate-scale-in hover:text-primary transition-colors group/link"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-primary group-hover/link:animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Sacred Location: Tenkasi Salaipudur
                </span>
                <span className="block text-sm text-muted-foreground">Tamil Nadu, India</span>
                <span className="text-xs text-primary underline">View on Google Maps →</span>
              </a>

              {/* Add to Calendar Button */}
              <div className="mt-6">
                <a
                  href={generateCalendarUrl(events[3])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-light hover:shadow-lg transition-all duration-300 hover-lift"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Calendar
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-12" />

          {/* Engagement Ceremony */}
          <div className="mb-12 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg animate-slide-in-left hover-lift transition-smooth">
            <p className="text-center text-sm text-primary font-light tracking-wide mb-3">
              💍 Engagement Ceremony - Ring Exchange 💍
            </p>
            <p className="text-center text-lg font-serif text-foreground mb-2">
              Engagement Ring Exchange
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Date: Tuesday, 28th January, 2026
            </p>
            <a
              href={VENUE_MAPS.tenkasi}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-muted-foreground mb-3 hover:text-primary transition-colors"
            >
              📍 Location: Tenkasi Salaipudur, Tamil Nadu, India
              <span className="block text-xs text-primary underline mt-1">View on Maps →</span>
            </a>
            <p className="text-center text-sm text-muted-foreground italic">
              The blessed beginning of our eternal journey together
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-12" />

          {/* Pre-Wedding Events */}
          <div className="mb-12">
            <h4 className="text-center text-lg font-serif text-foreground mb-8 animate-slide-in-down animate-text-shimmer">
              🎊 Wedding Week Celebrations 🎊
            </h4>

            <div className="space-y-6">
              {/* June 16 Morning Events */}
              <div className="glass-morphism rounded-lg p-6 hover-lift hover-glow transition-smooth animate-stagger-1">
                <p className="text-primary font-light tracking-wide text-center mb-2">
                  Day 1: Monday, 16th June, 2026 | Morning Ceremony
                </p>
                <h5 className="text-center text-lg font-serif text-foreground mb-3">
                  💛 1st Ritual: Nalangu (Haldi) 💛
                </h5>
                <p className="text-center text-sm text-muted-foreground mb-2">
                  The auspicious turmeric paste ceremony symbolizing purity & beauty
                </p>
                <h5 className="text-center text-md font-serif text-foreground mb-2">
                  👑 2nd Ritual: Urumaru Kattu Seeru 👑
                </h5>
                <p className="text-center text-sm text-muted-foreground">
                  Ceremonial turban tying by the groom's father, bestowing blessings
                </p>
                <a
                  href={VENUE_MAPS.tenkasi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-muted-foreground mt-3 hover:text-primary transition-colors"
                >
                  📍 Location: Tenkasi Salaipudur
                  <span className="text-xs text-primary ml-2">(View Maps)</span>
                </a>
                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href={generateCalendarUrl(events[0])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Add Nalangu
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a
                    href={generateCalendarUrl(events[1])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Add Seeru
                  </a>
                </div>
              </div>

              {/* June 16 Evening Event */}
              <div className="glass-morphism rounded-lg p-6 hover-lift hover-glow transition-smooth animate-stagger-2">
                <p className="text-primary font-light tracking-wide text-center mb-2">
                  Day 1: Monday, 16th June, 2026 | Evening Ceremony
                </p>
                <h5 className="text-center text-lg font-serif text-foreground mb-3">
                  🙏 3rd Ritual: Mugurtha Aarusi (Muhurtha Puja) 🙏
                </h5>
                <p className="text-center text-sm text-muted-foreground">
                  Traditional blessing ceremony invoking divine grace & auspicious blessings for the union
                </p>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  ⏰ Time: Late Evening (After Sunset)
                </p>
                <a
                  href={VENUE_MAPS.tenkasi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  📍 Location: Tenkasi Salaipudur
                  <span className="text-xs text-primary ml-2">(View Maps)</span>
                </a>
                <div className="flex justify-center mt-4">
                  <a
                    href={generateCalendarUrl(events[2])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Add to Calendar
                  </a>
                </div>
              </div>

              {/* June 17 Main Event */}
              <div className="glass-morphism rounded-lg p-6 border border-primary/50 hover-lift hover-glow transition-smooth animate-stagger-3 animate-glow-pulse">
                <p className="text-primary font-light tracking-wide text-center mb-2">
                  Day 2: Tuesday, 17th June, 2026 | 9:00 A.M. - 10:30 A.M.
                </p>
                <h5 className="text-center text-lg font-serif text-foreground mb-3">
                  🪷 4th & Final Ritual: Muhurtham 🪷
                </h5>
                <p className="text-center text-sm text-muted-foreground mb-2">
                  The most sacred & auspicious Muhurtham ritual
                </p>
                <p className="text-center text-sm text-muted-foreground font-light italic">
                  "The binding of two souls into one eternal bond"
                </p>
                <a
                  href={VENUE_MAPS.tenkasi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-muted-foreground mt-3 hover:text-primary transition-colors"
                >
                  📍 Location: Tenkasi Salaipudur
                  <span className="text-xs text-primary ml-2">(View Maps)</span>
                </a>
              </div>

              {/* Reception */}
              <div className="glass-morphism rounded-lg p-6 hover-lift hover-glow transition-smooth animate-stagger-4">
                <p className="text-primary font-light tracking-wide text-center mb-2">
                  Day 3: Saturday, 21st June, 2026 | 6:00 P.M. - 8:00 P.M.
                </p>
                <h5 className="text-center text-lg font-serif text-foreground mb-3">
                  🎉 Grand Reception & Dinner Celebration 🎉
                </h5>
                <p className="text-center text-sm text-muted-foreground">
                  An evening of celebration, feasting, and joyous moments with beloved family & friends
                </p>
                <a
                  href={VENUE_MAPS.pvMahal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-muted-foreground mt-3 hover:text-primary transition-colors"
                >
                  📍 Venue: PV Mahal, Pollachi<br />
                  📍 State: Tamil Nadu, India
                  <span className="block text-xs text-primary underline mt-1">View on Google Maps →</span>
                </a>
                <div className="flex justify-center mt-4">
                  <a
                    href={generateCalendarUrl(events[4])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Add to Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-12" />

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dress Code */}
            <div className="text-center animate-stagger-1 hover-scale transition-smooth p-4">
              <h4 className="text-primary font-light uppercase text-sm tracking-widest mb-3 animate-bounce-gentle">
                Dress Code
              </h4>
              <p className="text-foreground font-light text-sm">
                Traditional Indian Attire
              </p>
              <p className="text-muted-foreground text-xs font-light mt-2">
                (Sarees, Dhotis, Kurthas, or Formal Wear)
              </p>
            </div>

            {/* Cuisine */}
            <div className="text-center animate-stagger-2 hover-scale transition-smooth p-4">
              <h4 className="text-primary font-light uppercase text-sm tracking-widest mb-3 animate-bounce-gentle">
                Cuisine
              </h4>
              <p className="text-foreground font-light text-sm">
                Traditional Tamil Cuisine & Multi-Cuisine Options Available
              </p>
            </div>

            {/* Ceremony Venue */}
            <div className="text-center animate-stagger-3 hover-scale transition-smooth p-4">
              <h4 className="text-primary font-light uppercase text-sm tracking-widest mb-3 animate-bounce-gentle">
                Ceremony Venue
              </h4>
              <a
                href={VENUE_MAPS.tenkasi}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                <p className="text-foreground font-light mb-2 text-sm">
                  Tenkasi Salaipudur
                </p>
                <p className="text-muted-foreground text-xs font-light">
                  Tamil Nadu, India
                </p>
                <p className="text-primary text-xs underline mt-1">View on Maps</p>
              </a>
            </div>

            {/* Reception Venue */}
            <div className="text-center animate-stagger-4 hover-scale transition-smooth p-4">
              <h4 className="text-primary font-light uppercase text-sm tracking-widest mb-3 animate-bounce-gentle">
                Reception Venue
              </h4>
              <a
                href={VENUE_MAPS.pvMahal}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                <p className="text-foreground font-light mb-2 text-sm">
                  PV Mahal
                </p>
                <p className="text-muted-foreground text-xs font-light">
                  Pollachi, Tamil Nadu
                </p>
                <p className="text-primary text-xs underline mt-1">View on Maps</p>
              </a>
            </div>

            {/* Parking */}
            <div className="text-center animate-stagger-1 hover-scale transition-smooth p-4">
              <h4 className="text-primary font-light uppercase text-sm tracking-widest mb-3 animate-bounce-gentle">
                Parking
              </h4>
              <p className="text-foreground font-light text-sm">
                Ample Parking Available at Venue
              </p>
            </div>

            {/* Guest Accommodations */}
            <div className="text-center animate-stagger-2 hover-scale transition-smooth p-4">
              <h4 className="text-primary font-light uppercase text-sm tracking-widest mb-3 animate-bounce-gentle">
                Accommodations
              </h4>
              <p className="text-foreground font-light text-sm">
                Hotel Details & Packages Available
              </p>
              <p className="text-muted-foreground text-xs font-light mt-2">
                Contact RSVP for hotel assistance
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-12" />

          {/* RSVP Section */}
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg animate-stagger-3 hover-lift transition-smooth">
            <h4 className="text-primary font-light uppercase text-sm tracking-widest mb-3 animate-bounce-gentle animate-glow-pulse">
              Kindly RSVP by June 1st, 2026
            </h4>
            <p className="text-foreground font-light mb-2 text-sm">
              Please confirm your attendance at your earliest convenience
            </p>
            <p className="text-muted-foreground text-sm font-light">
              Click on the RSVP tab above to respond
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-12" />

          {/* Closing */}
          <div className="text-center animate-fade-in">
            <p className="text-muted-foreground font-light italic animate-text-shimmer">
              Together, we look forward to celebrating this auspicious occasion<br />
              with you and your family
            </p>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-in-down" />
      </div>
    </div>
  )
}
