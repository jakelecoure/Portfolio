import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, Zap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const { dark, setDark } = useTheme()
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActive] = useState('')

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active section highlight */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'dark:bg-dark-bg/80 bg-white/80 backdrop-blur-xl border-b dark:border-dark-border border-gray-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-lg bg-reactor/10 border border-reactor/30 flex items-center justify-center group-hover:bg-reactor/20 transition-colors">
            <Zap size={16} className="text-reactor" />
          </div>
          <span className="font-display font-700 text-[15px] dark:text-white text-gray-900 tracking-tight">
            Jake<span className="text-reactor">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`
                relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                animated-underline
                ${activeSection === link.href.slice(1)
                  ? 'text-reactor'
                  : 'dark:text-[#8892b0] text-gray-500 hover:dark:text-white hover:text-gray-900'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark/Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="
              w-9 h-9 rounded-lg flex items-center justify-center
              dark:bg-dark-card bg-gray-100
              dark:hover:bg-dark-hover hover:bg-gray-200
              dark:text-[#8892b0] text-gray-500
              hover:text-reactor dark:hover:text-reactor
              transition-all duration-200
            "
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Resume download */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="
              hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              bg-reactor/10 border border-reactor/25 text-reactor
              hover:bg-reactor/20 hover:border-reactor/50
              transition-all duration-200
            "
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center dark:bg-dark-card bg-gray-100 dark:text-[#8892b0] text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          dark:bg-dark-surface/95 bg-white/95 backdrop-blur-xl
          border-b dark:border-dark-border border-gray-200
          ${menuOpen ? 'max-h-64 py-4' : 'max-h-0'}
        `}
      >
        <nav className="flex flex-col px-6 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`
                px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${activeSection === link.href.slice(1)
                  ? 'text-reactor dark:bg-reactor/5 bg-reactor/5'
                  : 'dark:text-[#8892b0] text-gray-600 dark:hover:text-white hover:text-gray-900'}
              `}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="mt-2 px-4 py-3 rounded-lg text-sm font-medium text-center bg-reactor/10 border border-reactor/25 text-reactor"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}
