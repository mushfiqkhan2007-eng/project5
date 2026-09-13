import { useState } from 'react'
import logoText from '../assets/logo-text.png'
import { IconMenu, IconClose } from './icons'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Desktop / tablet navbar */}
        <div className="hidden md:flex items-center justify-between h-20">
          <img src={logoText} alt="Dev Stack" className="h-8" />

          <nav className="flex items-center gap-8">
            {links.map((link, i) => (
              <a
                key={link}
                href="#"
                className={
                  i === 0
                    ? 'text-pink-600 font-medium text-sm'
                    : 'text-slate-700 hover:text-slate-900 text-sm'
                }
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-700 text-sm">Sign In</a>
            <a
              href="#"
              className="brand-gradient-bg text-white text-sm font-medium px-5 py-2 rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile navbar: hamburger | logo | auth buttons */}
        <div className="flex md:hidden items-center justify-between h-16">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="p-2 -ml-2"
          >
            {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>

          <img src={logoText} alt="Dev Stack" className="h-7" />

          <div className="flex items-center gap-3">
            <a href="#" className="text-slate-700 text-xs">Sign In</a>
            <a
              href="#"
              className="brand-gradient-bg text-white text-xs font-medium px-3 py-1.5 rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {links.map((link, i) => (
              <a
                key={link}
                href="#"
                className={
                  i === 0
                    ? 'text-pink-600 font-medium text-sm'
                    : 'text-slate-700 text-sm'
                }
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
