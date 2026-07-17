import { useEffect, useState } from 'react'
import { Menu, Mountain, X } from 'lucide-react'

const links = [
  { label: 'Kits', href: '#kits' },
  { label: 'How It Works', href: '#how' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Journal', href: '#journal' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'bg-[#fbfaf5]/90 shadow-lg shadow-[#2e3a2a]/10 backdrop-blur-md'
            : 'bg-white/10 backdrop-blur-sm'
        }`}
      >
        <a
          href="#top"
          className={`flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em] transition-colors ${
            scrolled ? 'text-[#2e3a2a]' : 'text-white'
          }`}
        >
          <Mountain className="h-5 w-5" strokeWidth={2.4} />
          Nomad Gear
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-[13px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60 ${
                scrolled ? 'text-[#2e3a2a]' : 'text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#kits"
            className={`hidden rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5 sm:block ${
              scrolled
                ? 'bg-[#5c6f50] text-white hover:bg-[#2e3a2a]'
                : 'bg-white text-[#2e3a2a] hover:bg-[#f5f2ea]'
            }`}
          >
            Book Gear
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`md:hidden ${scrolled ? 'text-[#2e3a2a]' : 'text-white'}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-[#fbfaf5]/95 p-4 shadow-xl backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#2e3a2a] hover:bg-[#e9ece2]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
