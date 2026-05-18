const packages = [
  {
    name: 'Bathroom Refresh',
    price: 'From $8,500',
    timeline: '7–10 days',
    popular: false,
    features: [
      'New vanity, toilet & faucet',
      'Tile surround or tub surround',
      'Lighting & mirror upgrade',
      'Paint & trim touch-ups',
    ],
  },
  {
    name: 'Kitchen Express',
    price: 'From $14,900',
    timeline: '10–14 days',
    popular: true,
    features: [
      'Cabinet refacing or new fronts',
      'Quartz or laminate counters',
      'Backsplash installation',
      'Sink, faucet & hardware',
      'Appliance cutout adjustments',
    ],
  },
  {
    name: 'Full Bath Remodel',
    price: 'From $16,500',
    timeline: '12–16 days',
    popular: false,
    features: [
      'Layout optimization',
      'Walk-in shower or tub conversion',
      'Heated floors (optional)',
      'Premium tile & glass enclosure',
      'Full electrical & plumbing updates',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Transparent pricing
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Packages with no hidden fees
          </h2>
          <p className="mt-4 text-slate-600">
            Every package includes labor, disposal, permits where required, and a written
            fixed-price contract before work begins.
          </p>
        </header>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <li
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                pkg.popular
                  ? 'border-brand-500 bg-slate-950 text-white shadow-xl shadow-brand-500/20 lg:scale-105'
                  : 'border-slate-200 bg-white text-slate-900 shadow-lg'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
              <p
                className={`mt-2 font-display text-3xl font-extrabold ${pkg.popular ? 'text-brand-400' : 'text-brand-600'}`}
              >
                {pkg.price}
              </p>
              <p className={`mt-1 text-sm ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                Timeline: {pkg.timeline}
              </p>
              <ul className={`mt-6 flex-1 space-y-3 text-sm ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className={pkg.popular ? 'text-brand-400' : 'text-brand-600'}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`mt-8 block rounded-full py-3.5 text-center text-sm font-bold transition ${
                  pkg.popular
                    ? 'bg-brand-500 text-white hover:bg-brand-400'
                    : 'bg-slate-900 text-white hover:bg-brand-600'
                }`}
              >
                Get a custom quote
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-slate-500">
          Final price depends on room size and material selections. All quotes are itemized and
          guaranteed in writing.
        </p>
      </div>
    </section>
  )
}