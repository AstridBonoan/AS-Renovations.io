import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success'

export default function QuoteForm() {
  const [status, setStatus] = useState<FormState>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    window.setTimeout(() => {
      setStatus('success')
      form.reset()
    }, 800)
  }

  return (
    <section id="quote" className="bg-brand-600 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <header className="text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-200">
              Free quote — 24hr response
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              Lock in your remodel slot today
            </h2>
            <p className="mt-4 text-brand-100">
              Tell us about your project. A renovation specialist will call you within one
              business day with a fixed-price estimate.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-brand-50">
              <li>✓ No-pressure consultation</li>
              <li>✓ Written, itemized quote</li>
              <li>✓ Financing options available</li>
            </ul>
          </header>

          {status === 'success' ? (
            <aside className="rounded-2xl bg-white p-8 text-center shadow-xl sm:p-10">
              <p className="text-4xl">🎉</p>
              <h3 className="font-display mt-4 text-2xl font-bold text-slate-900">
                You&apos;re on the list!
              </h3>
              <p className="mt-2 text-slate-600">
                We&apos;ll reach out within 24 hours. Check your phone — we move fast.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-semibold text-brand-600 underline"
              >
                Submit another request
              </button>
            </aside>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Name *</span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 focus:ring-2"
                    placeholder="Jane Smith"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Phone *</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 focus:ring-2"
                    placeholder="(555) 123-4567"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Email *</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 focus:ring-2"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-sm font-medium text-slate-700">
                    Project type *
                  </span>
                  <select
                    required
                    name="project"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="kitchen">Kitchen remodel</option>
                    <option value="bathroom">Bathroom remodel</option>
                    <option value="both">Kitchen + bathroom</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-sm font-medium text-slate-700">
                    Timeline
                  </span>
                  <select
                    name="timeline"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 focus:ring-2"
                    defaultValue="asap"
                  >
                    <option value="asap">As soon as possible</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">Within 3 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-sm font-medium text-slate-700">
                    Project details
                  </span>
                  <textarea
                    name="details"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 focus:ring-2"
                    placeholder="Room size, must-haves, budget range..."
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-4 w-full rounded-full bg-brand-500 py-4 text-base font-bold text-white shadow-lg transition hover:bg-brand-600 disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : 'Get My Free Quote Now'}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                By submitting, you agree to be contacted about your project. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}