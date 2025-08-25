// components/CallToAction.tsx
export default function CallToAction() {
  const items = Array.from({ length: 8 })

  return (
    <section className="py-24 bg-background">
      <div className="relative flex overflow-hidden">
        {/* First track */}
        <div className="flex shrink-0 animate-marquee gap-16 text-5xl md:text-7xl font-medium">
          {items.map((_, index) => (
            <div key={`a-${index}`} className="flex items-center gap-10">
              <span className="text-orange-400">&#10038;</span>
              <span>Enter For Free Today!</span>
            </div>
          ))}
        </div>

        {/* Second track (duplicate for seamless loop) */}
        <div className="flex shrink-0 animate-marquee gap-16 text-5xl md:text-7xl font-medium">
          {items.map((_, index) => (
            <div key={`b-${index}`} className="flex items-center gap-10">
              <span className="text-orange-400">&#10038;</span>
              <span>Enter For Free Today!</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
