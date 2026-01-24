'use client'

import Cursor from '@/components/cursor'
import FlowerFall from '@/components/snowfall'
import Hero from '@/components/hero'
import OurStory from '@/components/our-story'
import Venues from '@/components/venues'
import Gallery from '@/components/gallery'
import RSVP from '@/components/rsvp'

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative selection:bg-white selection:text-black cursor-none">
      {/* Custom cursor - hidden on touch devices */}
      <div className="hidden md:block">
        <Cursor />
      </div>
      <FlowerFall />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Our Story Section */}
      <OurStory />

      {/* 3. Celebrations & Ceremonies Combined */}
      <Venues />

      {/* 4. Photo Gallery */}
      <Gallery />

      {/* 5. RSVP Section */}
      <section id="rsvp" className="py-12 sm:py-20 bg-neutral-900">
        <RSVP />
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 text-center text-xs sm:text-sm text-white/40 border-t border-white/10 bg-black px-4">
        <p>Made with love for Yashwanth Rathnam S & Tamilselvam C</p>
        <p className="mt-2 text-white/20">June 17, 2026 • Tenkasi</p>
      </footer>
    </main>
  )
}
