import { useState } from 'react'
import { images } from '../lib/assets'

type Project = {
  id: string
  room: 'Kitchen' | 'Bathroom'
  location: string
  days: number
  before: string
  after: string
}

const projects: Project[] = [
  {
    id: 'k1',
    room: 'Kitchen',
    location: 'Oakville',
    days: 10,
    before: images.gallery.k1Before,
    after: images.gallery.k1After,
  },
  {
    id: 'b1',
    room: 'Bathroom',
    location: 'Mississauga',
    days: 7,
    before: images.gallery.b1Before,
    after: images.gallery.b1After,
  },
  {
    id: 'k2',
    room: 'Kitchen',
    location: 'Brampton',
    days: 12,
    before: images.gallery.k2Before,
    after: images.gallery.k2After,
  },
  {
    id: 'b2',
    room: 'Bathroom',
    location: 'Toronto',
    days: 9,
    before: images.gallery.b2Before,
    after: images.gallery.b2After,
  },
]

function CompareCard({ project }: { project: Project }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={showAfter ? project.after : project.before}
          alt={`${project.room} remodel in ${project.location} — ${showAfter ? 'after' : 'before'}`}
          className="h-full w-full object-cover transition duration-500"
          width={600}
          height={450}
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {showAfter ? 'After' : 'Before'}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <section>
          <p className="font-display font-bold text-slate-900">{project.room}</p>
          <p className="text-sm text-slate-500">
            {project.location} · {project.days} days
          </p>
        </section>
        <button
          type="button"
          onClick={() => setShowAfter(!showAfter)}
          className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          {showAfter ? 'View Before' : 'View After'}
        </button>
      </div>
    </article>
  )
}

export default function BeforeAfterGallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Real results
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Before & after transformations
          </h2>
          <p className="mt-4 text-slate-600">
            Tap any project to flip between before and after. Every remodel completed on
            schedule.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <CompareCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href="#quote"
            className="inline-flex rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
          >
            I want results like these — get my quote
          </a>
        </p>
      </div>
    </section>
  )
}