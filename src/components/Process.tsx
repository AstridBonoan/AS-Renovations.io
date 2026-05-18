const steps = [
  {
    step: '01',
    title: 'Free in-home consult',
    desc: 'We measure, discuss your vision, and give you a fixed-price quote within 24 hours — no surprises later.',
    time: 'Day 1',
  },
  {
    step: '02',
    title: 'Design & materials locked',
    desc: 'Choose from curated finishes. We order everything upfront so your project never stalls waiting on supplies.',
    time: 'Days 2–3',
  },
  {
    step: '03',
    title: 'Fast-track demolition & prep',
    desc: 'Our dedicated crews protect your home, rip out the old, and prep surfaces in days — not weeks.',
    time: 'Days 4–5',
  },
  {
    step: '04',
    title: 'Install & final walkthrough',
    desc: 'Cabinets, tile, fixtures — installed to code. You sign off on a spotless, move-in-ready space.',
    time: 'Days 6–14',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Simple process
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            From quote to finished room in as little as 7 days
          </h2>
          <p className="mt-4 text-slate-400">
            No endless contractor delays. Our system is built for speed without cutting corners.
          </p>
        </header>

        <ol className="mt-12 space-y-6">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8"
            >
              <span className="font-display text-4xl font-extrabold text-brand-500/80">
                {item.step}
              </span>
              <article className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
                    {item.time}
                  </span>
                </div>
                <p className="mt-2 text-slate-400">{item.desc}</p>
              </article>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-center sm:text-left">
          <a
            href="#quote"
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-brand-100"
          >
            Start with a free consult →
          </a>
        </p>
      </div>
    </section>
  )
}