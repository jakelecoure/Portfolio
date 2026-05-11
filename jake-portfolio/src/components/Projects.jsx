import { ExternalLink, Github } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PROJECTS = [
  {
    id: 1,
    title: 'LiDAR & Radar Drone Mount',
    subtitle: 'CAD Design · Mechanical Engineering',
    description:
      'Designed and modelled a custom drone-mounted sensor bracket to securely integrate LiDAR and radar systems. Optimized geometry for weight reduction, structural stability, and vibration minimization during flight. Prototype fabricated via 3D printing with iterative testing.',
    tech: ['AutoCAD', 'Onshape', '3D Printing', 'CAD', 'Prototyping'],
    icon: '',
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
    icon: '🌱',
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
      'Led the marketing display for a remotely operated underwater vehicle at MATE\'s national competition. Combined mechanical design, embedded systems, and team coordination to build a functional subsea robot.',
    tech: ['ROV Design', 'Team Leadership', 'CAD', 'Systems Integration'],
    icon: '',
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

function TechChip({ label }) {
  return (
    <span className="
      inline-block px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide
      dark:bg-[#0a0a0a] bg-gray-100
      dark:text-[#555] text-gray-400
      dark:border border border-transparent dark:border-[#1e1e1e] border-gray-200
    ">
      {label}
    </span>
  )
}

function ProjectCard({ project, index }) {
  return (
    <div
      className={`
        project-card group relative rounded-2xl overflow-hidden
        dark:bg-[#111] bg-white
        dark:border border dark:border-[#1e1e1e] border-gray-200
        reveal reveal-delay-${Math.min(index + 1, 5)}
      `}
    >
      {/* Top bar */}
      <div className="h-[2px] w-full dark:bg-[#222] bg-gray-200" />

      {/* Header */}
      <div className="p-6 dark:bg-[#111] bg-gray-50">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl dark:bg-[#1a1a1a] bg-white dark:border border dark:border-[#222] border-gray-200">
            {project.icon}
          </div>
          {project.badge && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full dark:bg-[#1a1a1a] bg-gray-200 dark:text-[#888] text-gray-600 dark:border border dark:border-[#2a2a2a] border-gray-300">
              {project.badge}
            </span>
          )}
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest dark:text-[#555] text-gray-400 mb-1">
          {project.subtitle}
        </div>
        <h3 className="font-display font-700 text-xl dark:text-white text-gray-900 leading-snug">
          {project.title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 pt-4">
        <p className="dark:text-[#999] text-gray-500 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs dark:text-[#999] text-gray-400">
              <span className="w-1 h-1 rounded-full flex-shrink-0 dark:bg-[#444] bg-gray-300" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => <TechChip key={t} label={t} />)}
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium dark:text-[#555] text-gray-400 hover:dark:text-white hover:text-gray-900 transition-colors"
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
              className="flex items-center gap-1.5 text-sm font-medium dark:text-white text-gray-900 transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs dark:text-[#333] text-gray-300 italic">
              Physical / hardware project
            </span>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:bg-white/[0.02] bg-black/[0.02]" />
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 dark:bg-[#0a0a0a] bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-16">
          <p className="dark:text-[#555] text-gray-400 text-sm font-semibold tracking-widest uppercase mb-3">
            02 &nbsp;/&nbsp; Projects
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-display font-800 dark:text-white text-gray-900"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: '1.2' }}
            >
              What I've built.
            </h2>
            <p className="dark:text-[#555] text-gray-400 text-sm max-w-sm md:text-right">
              A mix of CAD design, embedded systems, and competition engineering.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="reveal reveal-delay-4 mt-12 text-center">
          <p className="dark:text-[#333] text-gray-300 text-sm">
            More projects in progress — check back soon or{' '}
            <a href="#contact" className="dark:text-[#666] text-gray-500 hover:dark:text-white hover:text-gray-900 underline">reach out</a> to learn more.
          </p>
        </div>

      </div>
    </section>
  )
}
