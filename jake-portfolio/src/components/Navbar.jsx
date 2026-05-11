import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          ? 'dark:bg-[#0a0a0a]/90 bg-white/90 backdrop-blur-xl border-b dark:border-[#1e1e1e] border-gray-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between relative">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-lg dark:bg-[#111] bg-gray-100 dark:border border dark:border-[#222] border-gray-200 flex items-center justify-center">
            <svg viewBox="0 0 100 100" width="18" height="18">
              <text x="50" y="76" textAnchor="middle" fontFamily="Georgia,serif" fontSize="64" fontWeight="700" fill="#888888" letterSpacing="-6">JL</text>
              <circle cx="83" cy="22" r="7" fill="#888888"/>
            </svg>
          </div>
          <span className="font-display font-700 text-[15px] dark:text-white text-gray-900 tracking-tight">
            Jake<span className="dark:text-[#555] text-gray-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                animated-underline
                ${activeSection === link.href.slice(1)
                  ? 'dark:text-white text-gray-900'
                  : 'dark:text-[#555] text-gray-400 hover:dark:text-white hover:text-gray-900'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="
              w-9 h-9 rounded-lg flex items-center justify-center
              dark:bg-[#111] bg-gray-100
              dark:border border dark:border-[#222] border-gray-200
              dark:text-[#555] text-gray-400
              hover:dark:text-white hover:text-gray-900
              transition-all duration-200
            "
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="
              hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              dark:bg-white bg-gray-900
              dark:text-gray-900 text-white
              hover:opacity-90
              transition-all duration-200
            "
          >
            Hire Me
          </a>

          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center dark:bg-[#111] bg-gray-100 dark:text-[#555] text-gray-400"
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
          dark:bg-[#0a0a0a]/95 bg-white/95 backdrop-blur-xl
          border-b dark:border-[#1e1e1e] border-gray-200
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
                  ? 'dark:text-white text-gray-900'
                  : 'dark:text-[#555] text-gray-500 hover:dark:text-white hover:text-gray-900'}
              `}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="mt-2 px-4 py-3 rounded-lg text-sm font-medium text-center dark:bg-white bg-gray-900 dark:text-gray-900 text-white"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}
