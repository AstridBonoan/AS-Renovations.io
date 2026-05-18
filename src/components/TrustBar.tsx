const badges = ['Licensed & Insured', 'Fixed-Price Quotes', '500+ Projects', 'Financing Available']

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-center text-sm font-semibold text-slate-700 sm:px-6">
        {badges.map((badge) => (
          <li key={badge} className="flex items-center gap-2">
            <span className="text-brand-500" aria-hidden>
              ✓
            </span>
            {badge}
          </li>
        ))}
      </ul>
    </section>
  )
}