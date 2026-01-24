'use client'

export default function OurStory() {
  return (
    <section className="py-20 sm:py-32 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Decorative Top */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-[1px] bg-white/20" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/50">Our Story</span>
          <div className="w-12 sm:w-16 h-[1px] bg-white/20" />
        </div>

        {/* Narrative Quote */}
        <blockquote className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif leading-relaxed mb-8 sm:mb-12 px-2">
          <span className="text-white/80">He thought she was the one.</span>
          <br />
          <span className="text-white/60 italic">She knew he was a keeper.</span>
        </blockquote>

        {/* Story Details */}
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto px-2">
          <p>
            What started as a chance meeting blossomed into a beautiful journey
            of love, laughter, and endless conversations.
          </p>
          <p>
            Now, surrounded by our families and friends, we are ready to begin
            the next chapter of our story together.
          </p>
        </div>

        {/* Decorative Bottom */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-6 sm:w-8 h-[1px] bg-white/20" />
          <span className="text-white/30">✦</span>
          <div className="w-6 sm:w-8 h-[1px] bg-white/20" />
        </div>
      </div>
    </section>
  )
}
