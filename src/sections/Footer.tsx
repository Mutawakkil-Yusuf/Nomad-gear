import { ArrowRight, Instagram, Mountain, Twitter, Youtube } from 'lucide-react'

const explore = ['All kits', 'Weekend Light', 'Family Basecamp', 'Alpine Pro', 'Gift cards']
const support = ['Delivery & pickup', 'Cleaning promise', 'Damage policy', 'FAQ', 'Contact us']

export default function Footer() {
  return (
    <footer id="journal" className="bg-[#232b20] py-16 text-[#f5f2ea]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em]">
              <Mountain className="h-5 w-5 text-[#8a9a7b]" strokeWidth={2.4} />
              Nomad Gear
            </a>
            <p className="mt-5 max-w-xs text-[15px] font-medium leading-relaxed text-[#f5f2ea]/60">
              Premium camping equipment rental for people who'd rather own
              memories than gear. Packed in Portland, OR.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f2ea]/20 text-[#f5f2ea]/70 transition-all hover:border-[#8a9a7b] hover:text-[#8a9a7b]"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#8a9a7b]">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l}>
                  <a href="#kits" className="text-[15px] font-medium text-[#f5f2ea]/65 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#8a9a7b]">Support</p>
            <ul className="mt-4 space-y-2.5">
              {support.map((l) => (
                <li key={l}>
                  <a href="#how" className="text-[15px] font-medium text-[#f5f2ea]/65 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#8a9a7b]">
              The Field Notes
            </p>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#f5f2ea]/60">
              One email a month: new kits, secret campsites, zero spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex overflow-hidden rounded-full border border-[#f5f2ea]/20 focus-within:border-[#8a9a7b]"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full bg-transparent px-5 py-3 text-sm font-medium text-white placeholder:text-[#f5f2ea]/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center bg-[#5c6f50] px-5 text-white transition-colors hover:bg-[#8a9a7b]"
              >
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#f5f2ea]/12 pt-8 text-[13px] font-medium text-[#f5f2ea]/45">
          <p>© {new Date().getFullYear()} Nomad Gear Co. All rights reserved.</p>
          <p>Made for the wild — return it dirty.</p>
        </div>
      </div>
    </footer>
  )
}
