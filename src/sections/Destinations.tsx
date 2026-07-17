import { useRef, type CSSProperties } from 'react'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'

type Dest = {
  name: string
  region: string
  img: string
  note: string
  rotate: string
}

const dests: Dest[] = [
  {
    name: 'Mirror Lake',
    region: 'British Columbia',
    img: '/images/dest-lake.jpg',
    note: 'Glass water at dawn',
    rotate: '-2deg',
  },
  {
    name: 'Whispering Pines',
    region: 'Oregon',
    img: '/images/dest-forest.jpg',
    note: 'Sunbeams + pine sap',
    rotate: '1deg',
  },
  {
    name: 'The Dune Field',
    region: 'Mojave Desert',
    img: '/images/dest-desert.jpg',
    note: 'Milky Way, nightly',
    rotate: '-1deg',
  },
  {
    name: 'Point Reyes Coast',
    region: 'California',
    img: '/images/dest-coast.jpg',
    note: 'Cliffs above the surf',
    rotate: '2deg',
  },
  {
    name: 'Wildflower Basin',
    region: 'Colorado',
    img: '/images/dest-meadow.jpg',
    note: 'Peak bloom in July',
    rotate: '-2deg',
  },
]

export default function Destinations() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section id="destinations" className="overflow-hidden bg-[#2e3a2a] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.3em] text-[#b6c4a6]">
              Destination inspiration
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#f5f2ea] sm:text-5xl">
              Where to point
              <br />
              the car this weekend.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll destinations left"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5f2ea]/30 text-[#f5f2ea] transition-all hover:bg-[#f5f2ea] hover:text-[#2e3a2a]"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll destinations right"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5f2ea]/30 text-[#f5f2ea] transition-all hover:bg-[#f5f2ea] hover:text-[#2e3a2a]"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-6 pt-4 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
      >
        {dests.map((d, i) => (
          <div
            key={d.name}
            className="reveal w-[270px] shrink-0 snap-center sm:w-[300px]"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <figure
              className="polaroid group rounded-md bg-[#fbfaf5] p-3 pb-4"
              style={{ '--rot': d.rotate } as CSSProperties}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.region}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-1.5 pt-3">
                <p className="font-hand text-[26px] font-semibold leading-none text-[#232b20]">
                  {d.name}
                </p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#232b20]/50">
                    <MapPin className="h-3.5 w-3.5" /> {d.region}
                  </span>
                  <span className="text-[12px] font-semibold italic text-[#5c6f50]">
                    {d.note}
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}

        {/* End card */}
        <a
          href="#book"
          className="reveal flex w-[270px] shrink-0 snap-center flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-[#f5f2ea]/25 text-[#f5f2ea]/70 transition-colors hover:border-[#f5f2ea]/60 hover:text-[#f5f2ea] sm:w-[300px]"
        >
          <span className="font-hand text-3xl">Your spot here</span>
          <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em]">
            Book a kit <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </section>
  )
}
