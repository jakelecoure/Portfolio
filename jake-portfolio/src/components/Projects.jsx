import { ExternalLink, Github, Layers, Cpu } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ── Project data ── */
const PROJECTS = [
  {
    id: 1,
    title: 'LiDAR & Radar Drone Mount',
    subtitle: 'CAD Design · Mechanical Engineering',
    description:
      'Designed and modelled a custom drone-mounted sensor bracket to securely integrate LiDAR and radar systems. Optimized geometry for weight reduction, structural stability, and vibration minimization during flight. Prototype fabricated via 3D printing with iterative testing.',
    tech: ['AutoCAD', 'Onshape', '3D Printing', 'CAD', 'Prototyping'],
    icon: '',
    gradient: 'from-reactor/20 to-blue-900/20',
    accent: '#00c8ff',
    github: 'https://github.com',
    demo: null,
    highlights: [
      'Weight-optimized geometry',
      'Vibration-damping design',
      'Iterative prototype testing',
    ],
  },
  {
    id: 2,
    title: 'Smart Irrigation Control System',
    subtitle: 'Embedded Systems · Arduino',
    description:
      'Designed and built an automated irrigation system using moisture and motion sensors to optimize water usage. Programmed control logic to trigger a servo-actuated valve system based on real-time environmental inputs. Features LCD user interface and audio alert system.',
    tech: ['Arduino', 'C++', 'Sensor Integration', 'Servo Control', 'LCD Interface'],
    icon: '',
    gradient: 'from-green-900/20 to-teal-900/20',
    accent: '#34d399',
    github: 'https://github.com',
    demo: null,
    highlights: [
      'Real-time moisture sensing',
      'Servo-actuated valve control',
      'LCD + buzzer feedback loop',
    ],
  },
  {
    id: 3,
    title: 'MATE ROV Competition',
    subtitle: 'Robotics · Team Project',
    description:
      'Led the marketing display for a remotely operated underwater vehicle (ROV) at MATE\'s national competition. The project combined mechanical design, embedded systems, and team coordination to build a functional subsea robot.',
    tech: ['ROV Design', 'Team Leadership', 'CAD', 'Systems Integration'],
    icon: '',
    gradient: 'from-purple-900/20 to-reactor/10',
    accent: '#a78bfa',
    github: null,
    demo: null,
    badge: '1st Place — Marketing Display',
    highlights: [
      'National 1st place — marketing',
      'Subsea robot systems integration',
      'Cross-functional team coordination',
    ],
  },
]

/* ── Tech chip ── */
function TechChip({ label }) {
  return (
    <span className="
      inline-block px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide
      dark:bg-dark-bg bg-gray-100
      dark:text-[#6b7280] text-gray-500
      dark:border border border-transparent dark:border-dark-border border-gray-200
    ">
      {label}
    </span>
  )
}

/* ── Project Card ── */
function ProjectCard({ project, index }) {
  return (
    <div
      className={`
        project-card group relative rounded-2xl overflow-hidden
        dark:bg-dark-card bg-white
        dark:border border dark:border-dark-border border-gray-200
        shadow-card-dark dark:shadow-card-dark shadow-card-light
        reveal reveal-delay-${Math.min(index + 1, 5)}
      `}
    >
      {/* Gradient top bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
        style={{ background: `linear-gradient(90deg, ${project.accent}50, ${project.accent}15)` }}
      />

      {/* Header */}
      <div className={`p-6 bg-gradient-to-br ${project.gradient}`}>
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}25` }}
          >
            {project.icon}
          </div>
          {project.badge && (
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: `${project.accent}15`,
                border: `1px solid ${project.accent}30`,
                color: project.accent,
              }}
            >
              {project.badge}
            </span>
          )}
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: project.accent }}>
          {project.subtitle}
        </div>
        <h3 className="font-display font-700 text-xl dark:text-white text-gray-900 leading-snug">
          {project.title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 pt-4">
        <p className="dark:text-[#6b7280] text-gray-500 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs dark:text-[#8892b0] text-gray-500">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => <TechChip key={t} label={t} />)}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 text-sm font-medium
                dark:text-[#6b7280] text-gray-500
                hover:text-reactor transition-colors
              "
            >
              <Github size={14} />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-reactor hover:text-reactor-glow transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs dark:text-[#3a3a5c] text-gray-300 italic">
              Physical / hardware project
            </span>
          )}
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="
          absolute inset-0 rounded-2xl pointer-events-none opacity-0
          group-hover:opacity-100 transition-opacity duration-500
        "
        style={{ boxShadow: `inset 0 0 40px ${project.accent}08` }}
      />
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 dark:bg-dark-bg bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-reactor text-sm font-semibold tracking-widest uppercase mb-3">
            02 &nbsp;/&nbsp; Projects
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-800 text-3xl md:text-5xl dark:text-white text-gray-900 leading-tight">
              What I've <span className="dark:text-white text-gray-900">built</span>.
            </h2>
            <p className="dark:text-[#6b7280] text-gray-500 text-sm max-w-sm md:text-right">
              A mix of CAD design, embedded systems, and competition engineering.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects note */}
        <div className="reveal reveal-delay-4 mt-12 text-center">
          <p className="dark:text-[#3a3a5c] text-gray-300 text-sm">
            More projects in progress — check back soon or{' '}
            <a href="#contact" className="text-reactor hover:underline">reach out</a> to learn more.
          </p>
        </div>

      </div>
    </section>
  )
}
