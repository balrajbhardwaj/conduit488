export function ContactHero() {
  return (
    <section className="pt-32 pb-20 bg-sovereign-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-15"
        style={{ backgroundColor: '#B85C38' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Begin the Conversation
        </h1>
        <p className="text-xl text-sovereign-400 leading-relaxed max-w-2xl mx-auto">
          Whether you're exploring a data challenge or ready to build something 
          transformative, we're here to listen. No sales pitch—just honest dialogue 
          about what's possible.
        </p>
      </div>
    </section>
  )
}
