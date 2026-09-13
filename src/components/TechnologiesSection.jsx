import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechCard from './TechCard'
import YourStack from './YourStack'

export default function TechnologiesSection() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const isAdded = (id) => stack.some((t) => t.id === id)

  const handleAdd = (tech) => {
    if (isAdded(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  const handleRemove = (id) => {
    const tech = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if (tech) toast.info(`${tech.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-3 text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      {loading ? (
        <div className="mt-12 text-center text-slate-400 text-sm">
          Loading technologies…
        </div>
      ) : (
        <div className="mt-10 grid md:grid-cols-[1fr_320px] gap-6 items-start">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                added={isAdded(tech.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </section>
  )
}
