import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section id="book" className="relative flex min-h-[72vh] items-center justify-center overflow-hidden">
      <img
        src="/images/cta.jpg"
        alt="A tent in a wildflower meadow beneath mountain peaks"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1c2419]/55" />

      <div className="reveal relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.3em] text-[#cdd8c2]">
          This weekend is still available
        </p>
        <h2 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl">
          Your next weekend is already packed.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg font-medium leading-relaxed text-white/85">
          Book by Thursday noon and your kit ships the same day. The wild is
          closer than your inbox makes it feel.
        </p>
        <a
          href="#kits"
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#f5f2ea] px-9 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#2e3a2a] transition-all hover:-translate-y-0.5 hover:bg-white"
        >
          Book Your Kit <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
