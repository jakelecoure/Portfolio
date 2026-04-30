import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg"
    >
      {/* Grid dots */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 mt-16
            dark:border dark:border-[#222] border border-gray-200
            dark:bg-[#111] bg-gray-100
            dark:text-[#666] text-gray-500
            text-sm font-medium
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="w-1.5 h-1.5 rounded-full dark:bg-[#444] bg-gray-400" />
          Available for Co-op &amp; Internship Opportunities
        </div>

        {/* Name */}
        <h1
          className={`
            font-display font-800 leading-none tracking-tight mb-6
            text-5xl sm:text-7xl md:text-[88px]
            dark:text-white text-gray-900
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          Jake LeCoure
        </h1>

        {/* Tagline */}
        <p
          className={`
            dark:text-[#555] text-gray-400 mb-4
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{
            transitionDelay: '0.35s',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            lineHeight: '2.5',
            paddingBottom: '0.25rem',
          }}
        >
          Process Engineering Student &nbsp;·&nbsp; Varsity Athlete
        </p>

        {/* Bio */}
        <p
          className={`
            max-w-2xl mx-auto dark:text-[#444] text-gray-500
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{
            transitionDelay: '0.5s',
            fontSize: '1rem',
            lineHeight: '2.2',
            paddingBottom: '0.25rem',
            marginBottom: '2.5rem',
          }}
        >
          2nd-year Co-op student at Memorial University of Newfoundland, currently
          gaining real-world experience at DOF Subsea in offshore engineering
          operations, CAD design, and subsea systems.
        </p>

        {/* CTAs */}
        <div
          className={`
            flex flex-col sm:flex-row items-center justify-center gap-4 mb-16
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: '0.65s' }}
        >
          <button
            onClick={() => scrollTo('projects')}
            className="
              group flex items-center gap-2 px-7 py-3.5 rounded-xl
              dark:bg-white bg-gray-900
              dark:text-gray-900 text-white
              font-semibold text-sm
              hover:opacity-90
              transition-all duration-200
            "
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="
              flex items-center gap-2 px-7 py-3.5 rounded-xl
              dark:border border dark:border-[#222] border border-gray-200
              dark:text-[#555] text-gray-500
              dark:hover:text-white hover:text-gray-900
              dark:hover:border-[#444] hover:border-gray-400
              transition-all duration-200 text-sm font-medium
            "
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>

        {/* Socials */}
        <div
          className={`
            flex items-center justify-center gap-4
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: '0.8s' }}
        >
          {[
            { icon: <Github size={18} />,   href: 'https://github.com',                        label: 'GitHub'   },
            { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/jake-lecoure',  label: 'LinkedIn' },
            { icon: <Mail size={18} />,     href: 'mailto:jplecoure@mun.ca',                   label: 'Email'    },
          ].map((s) => (
            
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="
                w-10 h-10 rounded-lg flex items-center justify-center
                dark:bg-[#111] bg-gray-100
                dark:border border dark:border-[#222] border-gray-200
                dark:text-[#555] text-gray-400
                dark:hover:text-white hover:text-gray-900
                dark:hover:border-[#444] hover:border-gray-400
                transition-all duration-200
              "
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
