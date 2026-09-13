import banner from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="block text-slate-900">Build Your Ideal</span>
          <span className="block brand-gradient-text">Development Stack</span>
        </h1>

        <p className="mt-6 text-slate-600 text-base md:text-lg max-w-md">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="brand-gradient-bg text-white font-medium px-6 py-3 rounded-full text-sm"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="border border-slate-300 text-slate-800 font-medium px-6 py-3 rounded-full text-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={banner}
          alt="Isometric illustration of a development stack"
          className="w-72 md:w-96"
        />
      </div>
    </section>
  )
}
