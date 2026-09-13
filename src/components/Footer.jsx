import logoText from '../assets/logo-text.png'
import { IconGithub, IconTwitter, IconLinkedin } from './icons'

const columns = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <img src={logoText} alt="Dev Stack" className="h-8" />
          <p className="mt-4 text-sm text-slate-500 max-w-xs">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-5 flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="GitHub"><IconGithub className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter"><IconTwitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn"><IconLinkedin className="w-5 h-5" /></a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-slate-900">{col.title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-800">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
