const stats = [
  { value: '7–14', label: 'Day avg. remodel' },
  { value: '500+', label: 'Projects done' },
  { value: '4.9★', label: 'Client rating' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
              Fast kitchen & bathroom remodels
            </p>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your dream kitchen or bath —{' '}
              <span className="text-brand-400">done in weeks</span>, not months
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              AS Renovations specializes in rapid, high-quality kitchen and bathroom
              transformations. Fixed timelines, transparent pricing, zero surprise fees.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-500/40 transition hover:bg-brand-400 hover:shadow-brand-400/30"
              >
                Get My Free Quote →
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-4 text-base font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                See Before & After
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              ✓ Response within 24 hours &nbsp;·&nbsp; ✓ No obligation &nbsp;·&nbsp; ✓
              Licensed & insured
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d4046?w=800&q=80&auto=format&fit=crop"
                alt="Modern renovated kitchen with clean countertops and cabinetry"
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 rounded-xl border border-white/10 bg-slate-850 px-4 py-3 shadow-xl sm:-left-6">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Next available crew
              </p>
              <p className="font-display text-lg font-bold text-brand-400">Starts in 12 days</p>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:gap-8 sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}