import { Briefcase, GraduationCap, Award, Users } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ── Data ── */
const EXPERIENCE = [
  {
    type: 'work',
    icon: <Briefcase size={16} />,
    role: 'Engineering Student — Co-op',
    org: 'DOF Subsea',
    location: 'St. John\'s, NL',
    period: 'January 2025 – Present',
    color: '#00c8ff',
    bullets: [
      'Supported offshore operations for subsea intervention, including ROV-based repair of a drill centre system',
      'Developed and revised deck layouts and lift plans using CAD to improve operational efficiency and safety',
      'Contributed to SIMOPS planning for international offshore projects, coordinating simultaneous activities across teams',
      'Wrote task plans and testing procedures for subsea equipment, ensuring compliance with operational standards',
      'Participated in daily engineering and operations meetings, providing updates and identifying risks in ongoing work',
      'Worked directly with offshore crews, gaining hands-on exposure to real-time problem solving in high-risk environments',
    ],
  },
  {
    type: 'edu',
    icon: <GraduationCap size={16} />,
    role: 'Bachelor of Engineering & Applied Science',
    org: 'Memorial University of Newfoundland',
    location: 'St. John\'s, NL',
    period: '2023 – 2029 (Expected)',
    color: '#7dd3fc',
    detail: 'Co-op Program · Process Engineering · 2nd Year · Class of 2029',
    bullets: [
      'Co-op integrated program with real-world engineering placements each year',
      'Focus on process systems, thermodynamics, fluid mechanics, and CAD design',
    ],
  },
]

const AWARDS = [
  { title: 'Transforming Our Horizons Entrance Scholarship',   amount: '$6,000', org: 'Memorial University' },
  { title: 'Swimming NL / Memorial University Bursary',        amount: '$1,500', org: 'Swimming NL' },
  { title: 'Centenary of Responsible Government Scholarship',  amount: '$1,000', org: 'Government of NL' },
  { title: '1st Place — Marketing Display',                    amount: 'National', org: 'MATE ROV Competition' },
  { title: 'Excellence Award in Mathematics',                   amount: '2022–2024', org: 'Gander Collegiate' },
]

const EXTRA = [
  {
    title: 'Varsity Swimmer',
    org: 'Memorial University of Newfoundland',
    period: '2023 – Present',
    icon: '',
    bullets: [
      '6× provincial record holder · 2× school record holder',
      'Maintain 20+ hour training weeks alongside full academic schedule',
      'Demonstrates discipline, perseverance, and elite time management',
    ],
  },
  {
    title: 'Volunteer — Swim For Hope Fundraiser',
    org: 'Dr. H. Bliss Murphy Cancer Centre',
    period: '2015 – Present',
    icon: '',
    bullets: ['Annual fundraising swim event supporting cancer research and care in NL'],
  },
  {
    title: 'Volunteer Basketball Coach',
    org: 'Elementary & Jr. High School',
    period: '2022 – 2024',
    icon: '',
    bullets: ['Coached youth basketball, developing leadership and communication skills'],
  },
]

/* ── Timeline entry ── */
function TimelineEntry({ entry, index, isLast }) {
  return (
    <div className={`relative pl-10 ${!isLast ? 'pb-10' : ''} reveal reveal-delay-${Math.min(index + 1, 5)}`}>
      {/* Vertical line */}
      {!isLast && <div className="timeline-line" />}

      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-9 h-9 rounded-xl flex items-center justify-center"
        style={{
          background: `${entry.color}15`,
          border: `1px solid ${entry.color}35`,
          color: entry.color,
        }}
      >
        {entry.icon}
      </div>

      {/* Content */}
      <div
        className="
          p-5 rounded-2xl
          dark:bg-dark-card bg-white
          reactor-border
        "
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="font-display font-700 text-base dark:text-white text-gray-900">
              {entry.role}
            </h3>
            <p className="text-sm font-medium" style={{ color: entry.color }}>
              {entry.org}
              <span className="dark:text-[#6b7280] text-gray-400 font-normal"> · {entry.location}</span>
            </p>
          </div>
          <span className="
            flex-shrink-0 text-xs px-3 py-1 rounded-full
            dark:bg-dark-bg bg-gray-100
            dark:text-[#6b7280] text-gray-500
            dark:border border dark:border-dark-border border-gray-200
          ">
            {entry.period}
          </span>
        </div>

        {entry.detail && (
          <p className="text-xs italic dark:text-[#8892b0] text-gray-500 mb-3">{entry.detail}</p>
        )}

        <ul className="space-y-1.5">
          {entry.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm dark:text-[#8892b0] text-gray-600 leading-relaxed">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: entry.color }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 dark:bg-dark-surface bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-reactor text-sm font-semibold tracking-widest uppercase mb-3">
            03 &nbsp;/&nbsp; Experience
          </p>
          <h2 className="font-display font-800 text-3xl md:text-5xl dark:text-white text-gray-900 leading-tight">
            Where I've <span className="text-gradient">worked & learned</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">

          {/* Left — Timeline */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-8">
              Work &amp; Education
            </h3>
            <div>
              {EXPERIENCE.map((entry, i) => (
                <TimelineEntry
                  key={entry.org}
                  entry={entry}
                  index={i}
                  isLast={i === EXPERIENCE.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right — Awards + Extracurriculars */}
          <div className="space-y-10">

            {/* Awards */}
            <div className="reveal reveal-delay-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-4 flex items-center gap-2">
                <Award size={12} className="text-reactor" />
                Awards &amp; Recognition
              </h3>
              <div className="space-y-2">
                {AWARDS.map((award) => (
                  <div
                    key={award.title}
                    className="
                      flex items-start gap-3 p-3 rounded-xl
                      dark:bg-dark-card bg-white
                      dark:border border dark:border-dark-border border-gray-200
                      hover:dark:border-reactor/25 hover:border-reactor/25
                      transition-colors
                    "
                  >
                    <div className="w-8 h-8 rounded-lg bg-reactor/10 flex items-center justify-center flex-shrink-0">
                      <Award size={13} className="text-reactor" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium dark:text-[#ccd6f6] text-gray-800 leading-snug">
                        {award.title}
                      </p>
                      <p className="text-[11px] dark:text-[#6b7280] text-gray-400 mt-0.5">
                        {award.org} · <span className="text-reactor">{award.amount}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra-curriculars */}
            <div className="reveal reveal-delay-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-4 flex items-center gap-2">
                <Users size={12} className="text-reactor" />
                Extra-Curriculars &amp; Volunteering
              </h3>
              <div className="space-y-3">
                {EXTRA.map((item) => (
                  <div
                    key={item.title}
                    className="
                      p-4 rounded-xl
                      dark:bg-dark-card bg-white
                      dark:border border dark:border-dark-border border-gray-200
                    "
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{item.icon}</span>
                      <span className="font-display font-600 text-sm dark:text-white text-gray-900">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-reactor mb-2">{item.org} · {item.period}</p>
                    {item.bullets.map((b, i) => (
                      <p key={i} className="text-xs dark:text-[#6b7280] text-gray-500 leading-relaxed">
                        {b}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
