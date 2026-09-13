import { IconClose } from './icons'

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="border border-slate-200 rounded-2xl p-5 h-fit md:sticky md:top-24">
      <h3 className="font-bold text-lg text-slate-900">Your Stack</h3>
      <p className="text-sm text-slate-400 mt-1">
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-slate-200 rounded-xl py-8 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border border-slate-200 rounded-xl px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-medium text-slate-900">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
              </div>
              <button
                aria-label={`Remove ${tech.name}`}
                onClick={() => onRemove(tech.id)}
                className="text-slate-400 hover:text-slate-700"
              >
                <IconClose className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full py-2.5 rounded-xl text-sm font-medium border border-rose-200 text-rose-500 hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}
