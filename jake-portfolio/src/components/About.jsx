import { useScrollReveal } from '../hooks/useScrollReveal'

/* ── Data ── */
const SKILLS = {
  'CAD & Engineering': ['AutoCAD', 'Onshape', 'DraftSight'],
  'Programming & Tools': ['Python', 'Excel', 'Microsoft Office'],
  'Soft Skills': [
    'Team Collaboration', 'Adaptability', 'Reliability',
    'Time Management', 'Communication',
  ],
}

const CERTS = [
  { label: 'National Lifeguard',         icon: '' },
  { label: 'Standard First Aid & AED',   icon: '' },
  { label: 'WHMIS',                      icon: ''  },
  { label: "Valid Driver's License",     icon: '' },
]

const INTERESTS = [
  ' Swimming', ' Golfing', ' Travelling',
  ' Hiking', ' Running', ' Snowboarding', ' Basketball',
]

/* ── Skill badge ── */
function Badge({ label }) {
  return <span className="skill-badge">{label}</span>
}

/* ── Cert card ── */
function CertCard({ icon, label }) {
  return (
    <div className="
      flex items-center gap-3 px-4 py-3 rounded-xl
      dark:bg-dark-card bg-white
      reactor-border
      dark:text-[#ccd6f6] text-gray-700
      text-sm font-medium
    ">
      <span className="text-xl">{icon}</span>
      {label}
    </div>
  )
}

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 dark:bg-dark-surface bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-reactor text-sm font-semibold tracking-widest uppercase mb-3">
            01 &nbsp;/&nbsp; About
          </p>
          <h2 className="font-display font-800 text-3xl md:text-5xl dark:text-white text-gray-900 leading-tight">
            Engineer by training,<br />
            <span className="text-gradient">problem-solver</span> by nature.
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — Bio */}
          <div>
            <div className="reveal reveal-delay-1 space-y-5 dark:text-[#8892b0] text-gray-600 leading-relaxed text-[15px]">
              <p>
                I'm a 2nd-year Process Engineering student at{' '}
                <span className="text-reactor font-medium">Memorial University of Newfoundland</span>,
                currently on co-op with{' '}
                <span className="text-reactor font-medium">DOF Subsea</span> in St. John's, NL.
              </p>
              <p>
                My work at DOF spans subsea intervention planning, ROV operations, CAD-based deck layout
                design, and SIMOPS coordination for international offshore projects — giving me hands-on
                exposure to real-world engineering in high-stakes environments.
              </p>
              <p>
                Outside the office, I'm a varsity swimmer and{' '}
                <span className="dark:text-[#ccd6f6] text-gray-800 font-medium">
                  6× provincial record holder
                </span>{' '}
                — a pursuit that's shaped my discipline, resilience, and ability to perform under pressure.
              </p>
            </div>

            {/* Quick stats */}
            <div className="reveal reveal-delay-2 mt-10 grid grid-cols-3 gap-4">
              {[
                { value: '6×',    label: 'Provincial Records'    },
                { value: '2nd',   label: 'Year Engineering'      },
                { value: '2029',  label: 'Graduation (BEng)'     },
              ].map((s) => (
                <div
                  key={s.label}
                  className="
                    p-4 rounded-xl text-center
                    dark:bg-dark-card bg-white
                    reactor-border
                  "
                >
                  <div className="text-2xl font-display font-800 text-reactor mb-0.5">{s.value}</div>
                  <div className="text-xs dark:text-[#6b7280] text-gray-500 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills + Certs */}
          <div className="space-y-8">

            {/* Skills */}
            {Object.entries(SKILLS).map(([category, items], i) => (
              <div key={category} className={`reveal reveal-delay-${i + 2}`}>
                <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => <Badge key={item} label={item} />)}
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="reveal reveal-delay-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-3">
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {CERTS.map((c) => <CertCard key={c.label} {...c} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Interests strip */}
        <div className="reveal reveal-delay-3 mt-16 pt-8 border-t dark:border-dark-border border-gray-200">
          <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-4">
            Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-xl text-sm
                  dark:bg-dark-card bg-white
                  dark:text-[#8892b0] text-gray-600
                  dark:border border dark:border-dark-border border-gray-200
                "
              >
                {i}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
