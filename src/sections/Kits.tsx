import { ArrowRight, Puzzle, Users } from 'lucide-react'

type Kit = {
  name: string
  img: string
  price: number
  sleeps: string
  pieces: string
  blurb: string
  tags: string[]
  popular?: boolean
}

const kits: Kit[] = [
  {
    name: 'Weekend Light Kit',
    img: '/images/kit-weekend.jpg',
    price: 42,
    sleeps: 'Sleeps 2',
    pieces: '9 pieces',
    blurb: 'Everything two people need for a spontaneous Friday escape.',
    tags: ['2P tent', 'Sleep set', 'Cook kit'],
    popular: true,
  },
  {
    name: 'Solo Trekker Kit',
    img: '/images/kit-solo.jpg',
    price: 28,
    sleeps: 'Sleeps 1',
    pieces: '7 pieces',
    blurb: 'A featherweight one-person setup for long trails and quiet mornings.',
    tags: ['1P tent', '45L pack', 'Pad + quilt'],
  },
  {
    name: 'Family Basecamp Kit',
    img: '/images/kit-family.jpg',
    price: 65,
    sleeps: 'Sleeps 5',
    pieces: '16 pieces',
    blurb: 'A canvas palace with room for the kids, the dog, and the board games.',
    tags: ['Bell tent', 'Camp kitchen', 'Lanterns'],
  },
  {
    name: 'Lakeside Comfort Kit',
    img: '/images/kit-lakeside.jpg',
    price: 24,
    sleeps: 'Add-on',
    pieces: '6 pieces',
    blurb: 'Low chairs, warm blankets and a cooler — slow evenings by the water.',
    tags: ['2 chairs', 'Blankets', 'Cooler'],
  },
  {
    name: 'Ultralight Thru-Hiker Kit',
    img: '/images/kit-ultralight.jpg',
    price: 34,
    sleeps: 'Sleeps 1',
    pieces: '8 pieces',
    blurb: 'Under 7 kg total. Built for big miles and alpine starts.',
    tags: ['Pole tent', 'Quilt', 'Titanium cook'],
  },
  {
    name: 'Alpine Pro Kit',
    img: '/images/kit-alpine.jpg',
    price: 58,
    sleeps: 'Sleeps 2',
    pieces: '11 pieces',
    blurb: 'Four-season shelter and cold-rated sleep for high, wild places.',
    tags: ['4-season tent', '-18°C bags', 'Snow anchors'],
  },
]

export default function Kits() {
  return (
    <section id="kits" className="bg-[#f5f2ea] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.3em] text-[#5c6f50]">
              The kits
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#232b20] sm:text-5xl">
              Rent the kit.
              <br />
              Own the weekend.
            </h2>
          </div>
          <p className="max-w-sm text-base font-medium leading-relaxed text-[#232b20]/60">
            No closets full of gear you use twice a year. Every kit is cleaned,
            checked and packed by our crew — ready to pitch.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {kits.map((kit, i) => (
            <article
              key={kit.name}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_10px_rgba(35,43,32,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(35,43,32,0.22)]"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={kit.img}
                  alt={kit.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                {/* Price tag */}
                <span className="absolute left-4 top-4 rounded-xl bg-[#fbfaf5]/95 px-3.5 py-2 text-sm font-extrabold tracking-tight text-[#2e3a2a] shadow-md backdrop-blur-sm">
                  ${kit.price}
                  <span className="ml-1 text-[11px] font-semibold uppercase tracking-wide text-[#2e3a2a]/55">
                    / day
                  </span>
                </span>
                {kit.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#5c6f50] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-md">
                    Most booked
                  </span>
                )}
                {/* Book Now reveal */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5 opacity-0 translate-y-14 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href="#book"
                    className="rounded-full bg-[#2e3a2a] px-7 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-xl transition-colors hover:bg-[#5c6f50]"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-extrabold tracking-tight text-[#232b20]">
                  {kit.name}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-[13px] font-semibold text-[#232b20]/55">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" /> {kit.sleeps}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Puzzle className="h-4 w-4" /> {kit.pieces}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[15px] font-medium leading-relaxed text-[#232b20]/65">
                  {kit.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {kit.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#e9ece2] px-3 py-1 text-[12px] font-semibold text-[#4a5d43]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#5c6f50] transition-colors hover:text-[#2e3a2a]"
          >
            Browse all 120+ kits <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
