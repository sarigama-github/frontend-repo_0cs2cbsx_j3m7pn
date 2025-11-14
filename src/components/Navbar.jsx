import { Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/70 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Artha HW
          </a>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-zinc-700 hover:text-indigo-600 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/50 hover:bg-white/70 border border-zinc-200 text-zinc-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md bg-white/70 hover:bg-white text-zinc-800 border border-zinc-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
