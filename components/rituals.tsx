export default function Rituals() {
  const rituals = [
    {
      name: 'Nalangu (Haldi)',
      description:
        'A vibrant celebration where yellow turmeric water is ceremonially poured. The golden liquid symbolizes purification, prosperity, and the bride\'s natural beauty being enhanced for this auspicious occasion.',
      color: 'from-yellow-400/20 to-amber-600/20',
    },
    {
      name: 'Urumaru Kattu Seeru',
      description:
        'The father of the groom ceremonially ties a turban on his head. This sacred act bestows family blessings, honor, and responsibility upon the groom as he enters married life.',
      color: 'from-amber-400/20 to-orange-600/20',
    },
    {
      name: 'Mugurtha Aarusi',
      description:
        'A traditional blessing ceremony performed by elders and priests. Divine grace and auspicious blessings are invoked for the couple\'s happiness, prosperity, and longevity together.',
      color: 'from-red-400/20 to-pink-600/20',
    },
    {
      name: 'Thali Tying',
      description:
        'The most sacred ritual where the groom ties the Thali around the bride\'s neck. This sacred knot symbolizes the eternal bond of marriage, the union of two souls, and a commitment that transcends lifetimes.',
      color: 'from-rose-400/20 to-pink-600/20',
    },
  ]

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
            Sacred Rituals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of timeless traditions that celebrate our love and the
            values we hold dear
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rituals.map((ritual, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`relative group overflow-hidden rounded-xl p-8 h-full
                  bg-gradient-to-br ${ritual.color}
                  border border-primary/20
                  transition-all duration-300
                  hover:border-primary/40 hover:shadow-lg
                `}
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform duration-300 group-hover:scale-150" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif text-foreground mb-3">
                    {ritual.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {ritual.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional details section */}
        <div className="mt-20 glass-morphism rounded-xl p-12 text-center">
          <h3 className="text-3xl font-serif text-foreground mb-4">
            Dress Code
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Semi-Formal Attire | Black Tie Optional
          </p>
          <p className="text-muted-foreground">
            We celebrate tradition and elegance. Please honor this special day
            with your finest attire.
          </p>
        </div>
      </div>
    </section>
  )
}
