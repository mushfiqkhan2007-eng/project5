import { IconStar } from './icons'

const badgeColors = {
  Popular: 'bg-blue-50 text-blue-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-orange-50 text-orange-600',
  Essential: 'bg-sky-50 text-sky-600',
  Standard: 'bg-emerald-50 text-emerald-600',
  'Top SQL': 'bg-sky-50 text-sky-600',
  Cache: 'bg-rose-50 text-rose-600',
  Ubiquitous: 'bg-amber-50 text-amber-600',
  Robust: 'bg-rose-50 text-rose-600',
  Modern: 'bg-cyan-50 text-cyan-600',
  Containers: 'bg-sky-50 text-sky-600',
}

export default function TechCard({ tech, added, onAdd }) {
  const badgeClass = badgeColors[tech.badge] || 'bg-slate-100 text-slate-600'

  return (
    <div className="border border-slate-200 rounded-2xl p-5 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-lg text-slate-900">{tech.name}</h3>
      <p className="mt-2 text-sm text-slate-500 flex-1">{tech.description}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="bg-slate-100 px-2.5 py-1 rounded-md">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-slate-800">
          <IconStar className="w-3.5 h-3.5 text-amber-400" />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        className={`mt-5 w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
          added
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {added ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}
