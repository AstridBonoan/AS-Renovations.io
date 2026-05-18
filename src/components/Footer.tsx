export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <p className="font-display text-lg font-bold text-white">
          AS <span className="text-brand-500">Renovations</span>
        </p>
        <p className="text-sm">
          Fast kitchen & bathroom remodels · Licensed & insured · Greater Toronto Area
        </p>
        <p className="text-sm">© {year} AS Renovations. All rights reserved.</p>
      </div>
    </footer>
  )
}