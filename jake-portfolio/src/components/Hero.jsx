import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

/* Floating particle component */
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(0,200,255,0.6), transparent)',
        ...style,
      }}
    />
  )
}

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
      className="relative min-h-screen flex flex-col items-center overflow-visible justify-center hero-bg dark:hero-bg bg-gray-50"
    >
      {/* ── Background grid dots ── */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* ── Glow orbs ── */}
      <div
        className="glow-orb absolute animate-glow-pulse"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,180,255,0.12) 0%, transparent 70%)',
          top: '-10%', right: '-5%',
          animationDelay: '0s',
        }}
      />
      <div
        className="glow-orb absolute animate-glow-pulse"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(0,100,180,0.15) 0%, transparent 70%)',
          bottom: '5%', left: '-8%',
          animationDelay: '1.5s',
        }}
      />

      {/* ── Floating particles ── */}
      {[
        { width: '4px', height: '4px', top: '20%', left: '15%',  animationDelay: '0s',   animation: 'float 7s ease-in-out infinite' },
        { width: '3px', height: '3px', top: '60%', left: '80%',  animationDelay: '2s',   animation: 'float 9s ease-in-out infinite' },
        { width: '5px', height: '5px', top: '35%', left: '90%',  animationDelay: '1s',   animation: 'float 6s ease-in-out infinite' },
        { width: '3px', height: '3px', top: '75%', left: '25%',  animationDelay: '3s',   animation: 'float 8s ease-in-out infinite' },
        { width: '4px', height: '4px', top: '10%', left: '65%',  animationDelay: '0.5s', animation: 'float 10s ease-in-out infinite' },
      ].map((p, i) => <Particle key={i} style={p} />)}

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 mt-16
            border border-reactor/30 bg-reactor/5 text-reactor text-sm font-medium
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-reactor animate-pulse" />
          Available for Co-op &amp; Internship Opportunities
        </div>

        {/* Name */}
        <h1
          className={`
            font-display font-800 leading-none tracking-tight mb-6
            text-5xl sm:text-7xl md:text-[88px]
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="dark:text-white text-gray-900">Jake </span>
          <span className="dark:text-white text-gray-900">LeCoure</span>
        </h1>

        {/* Tagline */}
        <p
          className={`
            dark:text-[#8892b0] text-gray-500 mb-4
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
            max-w-2xl mx-auto text-base md:text-lg leading-loose mb-10
            dark:text-[#6b7280] text-gray-400
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ 
            transitionDelay: '0.5s',
            lineHeight: '2.2',
            paddingBottom: '0.25rem',
          }}
        >
          2nd-year Co-op student at Memorial University of Newfoundland, currently gaining real-world
          experience at DOF Subsea in offshore engineering operations, CAD design, and subsea systems.
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
              bg-reactor text-[#06060f] font-semibold text-sm
              hover:bg-reactor-glow
              transition-all duration-200
              shadow-reactor hover:shadow-reactor-lg
            "
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="
              flex items-center gap-2 px-7 py-3.5 rounded-xl
              border dark:border-dark-border border-gray-300
              dark:text-[#8892b0] text-gray-600
              dark:hover:border-reactor/40 hover:border-reactor/40
              dark:hover:text-reactor hover:text-reactor
              transition-all duration-200 text-sm font-medium
            "
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>

        {/* Social row */}
        <div
          className={`
            flex items-center justify-center gap-4
            transition-all duration-700
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: '0.8s' }}
        >
          {[
            {
              icon: <Github size={18} />,
              href: 'https://github.com',
              label: 'GitHub',
            },
            {
              icon: <Linkedin size={18} />,
              href: 'https://www.linkedin.com/in/jake-lecoure',
              label: 'LinkedIn',
            },
            {
              icon: <Mail size={18} />,
              href: 'mailto:jplecoure@mun.ca',
              label: 'Email',
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="
                w-10 h-10 rounded-lg flex items-center justify-center
                dark:bg-dark-card bg-gray-100
                dark:border border dark:border-dark-border border-gray-200
                dark:text-[#6b7280] text-gray-500
                hover:text-reactor dark:hover:text-reactor
                dark:hover:border-reactor/30 hover:border-reactor/30
                transition-all duration-200
              "
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1.5
          dark:text-[#3a3a5c] text-gray-300
          hover:text-reactor transition-colors duration-200
          animate-float
        "
        style={{ animationDuration: '3s' }}
      >
        <span className="text-xs tracking-widest uppercase font-medium opacity-60">Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  )
}
