import { ArrowDown, Star, Tent, Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="A tent pitched beside a misty alpine lake at dawn"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c2419]/80 via-[#1c2419]/20 to-[#1c2419]/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
        <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.3em] text-[#cdd8c2]">
          Camping gear rental — delivered anywhere
        </p>
        <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Leave the city.
          <br />
          Keep the comfort.
        </h1>
        <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/85">
          Premium camping kits, packed by people who actually camp. Book in two
          minutes, and we'll have it at your door before Friday.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#kits"
            className="rounded-full bg-[#f5f2ea] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#2e3a2a] transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Browse Kits
          </a>
          <a
            href="#destinations"
            className="rounded-full border border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            See Destinations
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-white/85">
          <span className="flex items-center gap-2.5 text-sm font-semibold">
            <Tent className="h-4.5 w-4.5 text-[#b6c4a6]" /> 120+ curated kits
          </span>
          <span className="flex items-center gap-2.5 text-sm font-semibold">
            <Truck className="h-4.5 w-4.5 text-[#b6c4a6]" /> Free 48h delivery
          </span>
          <span className="flex items-center gap-2.5 text-sm font-semibold">
            <Star className="h-4.5 w-4.5 fill-[#b6c4a6] text-[#b6c4a6]" /> 4.9 from 6,200+ trips
          </span>
        </div>
      </div>

      <a
        href="#kits"
        aria-label="Scroll to kits"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white md:block"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
