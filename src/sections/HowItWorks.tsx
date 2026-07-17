import { CalendarCheck, PackageOpen, Undo2 } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: CalendarCheck,
    title: 'Pick your kit',
    text: 'Choose a curated kit and your dates. Two minutes, no account needed, free cancellation up to 48h before.',
  },
  {
    n: '02',
    icon: PackageOpen,
    title: 'We deliver, you go',
    text: 'Your kit arrives cleaned, checked and weather-sealed — at home or straight to the trailhead.',
  },
  {
    n: '03',
    icon: Undo2,
    title: 'Return it dirty',
    text: 'Seriously. Mud, pine needles, marshmallow — we handle the deep clean. Just drop it back or book a pickup.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#fbfaf5] py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal relative">
          <img
            src="/images/moment.jpg"
            alt="An enamel mug warming over a campfire"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_24px_50px_-16px_rgba(35,43,32,0.3)]"
          />
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#5c6f50] px-6 py-5 text-white shadow-xl sm:-right-6">
            <p className="text-3xl font-black tracking-tight">6,200+</p>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/75">
              Trips outfitted
            </p>
          </div>
        </div>

        <div>
          <p className="reveal mb-4 text-[13px] font-bold uppercase tracking-[0.3em] text-[#5c6f50]">
            How it works
          </p>
          <h2 className="reveal text-4xl font-black tracking-tight text-[#232b20] sm:text-5xl">
            Easier than borrowing
            <br />
            from a friend.
          </h2>

          <div className="mt-10 space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="reveal flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9ece2] text-[#4a5d43]">
                  <s.icon className="h-5.5 w-5.5" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#8a9a7b]">
                    Step {s.n}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold tracking-tight text-[#232b20]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-[15px] font-medium leading-relaxed text-[#232b20]/60">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
