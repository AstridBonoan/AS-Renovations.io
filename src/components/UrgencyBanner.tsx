export default function UrgencyBanner() {
  return (
    <div className="bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white">
      <span className="inline-flex flex-wrap items-center justify-center gap-2">
        <span className="animate-pulse rounded bg-white/20 px-2 py-0.5 text-xs uppercase tracking-wider">
          Limited slots
        </span>
        Only 3 install crews available this month — book your free quote today
      </span>
    </div>
  )
}