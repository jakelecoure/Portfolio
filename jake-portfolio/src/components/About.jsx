import { useScrollReveal } from '../hooks/useScrollReveal'

const SKILLS = {
  'CAD & Engineering': ['AutoCAD', 'Onshape', 'DraftSight'],
  'Programming & Tools': ['Python', 'Excel', 'Microsoft Office'],
  'Soft Skills': [
    'Team Collaboration', 'Adaptability', 'Reliability',
    'Time Management', 'Communication',
  ],
}

const CERTS = [
  { label: 'National Lifeguard'       },
  { label: 'Standard First Aid & AED' },
  { label: 'WHMIS'                    },
  { label: "Valid Driver's License"   },
]

const INTERESTS = [
  'Swimming', 'Golfing', 'Travelling',
  'Hiking', 'Running', 'Snowboarding', 'Basketball',
]

function Badge({ label }) {
  return <span className="skill-badge">{label}</span>
}

function CertCard({ label }) {
  return (
    <div className="
      flex items-center px-4 py-3 rounded-xl
      dark:bg-[#111] bg-white
      mono-border
      dark:text-[#888] text-gray-600
      text-sm font-medium
    ">
      {label}
    </div>
  )
}

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 dark:bg-[#0d0d0d] bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="dark:text-[#555] text-gray-400 text-sm font-semibold tracking-widest uppercase mb-3">
            01 &nbsp;/&nbsp; About
          </p>
          <h2
            className="font-display font-800 dark:text-white text-gray-900"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: '2', paddingBottom: '0.25rem' }}
          >
            Engineering student with{' '}
            <span className="dark:text-white text-gray-900">hands-on offshore</span> experience.
          </h2>
        </div>

        {/* Two-column */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — Bio */}
          <div>
            <div className="reveal reveal-delay-1 space-y-5 dark:text-[#aaa] text-gray-500 leading-relaxed text-[15px]">
              <p>
                I'm a 2nd-year Process Engineering student at{' '}
                Memorial University of Newfoundland,
                currently on co-op with{' '}
                DOF Subsea in St. John's, NL.
              </p>
              <p>
                My work at DOF spans subsea intervention planning, ROV operations, CAD-based deck layout
                design, and SIMOPS coordination for international offshore projects, giving me hands-on
                exposure to real-world engineering in high-stakes environments.
              </p>
              <p>
                Outside the office, I'm a varsity swimmer and 6× provincial record holder, a pursuit that has shaped my discipline, resilience, and ability to perform under pressure.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-2 mt-10 grid grid-cols-3 gap-4">
              {[
                { value: '6×',   label: 'Provincial Records' },
                { value: '2nd',  label: 'Year Engineering'   },
                { value: '2029', label: 'Graduation (BEng)'  },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl text-center dark:bg-[#111] bg-white mono-border"
                >
                  <div className="text-2xl font-display font-800 dark:text-white text-gray-900 mb-0.5">{s.value}</div>
                  <div className="text-xs dark:text-[#555] text-gray-400 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills + Certs */}
          <div className="space-y-8">
            {Object.entries(SKILLS).map(([category, items], i) => (
              <div key={category} className={`reveal reveal-delay-${i + 2}`}>
                <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#444] text-gray-400 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => <Badge key={item} label={item} />)}
                </div>
              </div>
            ))}

            <div className="reveal reveal-delay-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#444] text-gray-400 mb-3">
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {CERTS.map((c) => <CertCard key={c.label} {...c} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="reveal reveal-delay-3 mt-16 pt-8 border-t dark:border-[#1e1e1e] border-gray-200">
          <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#444] text-gray-400 mb-4">
            Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-xl text-sm
                  dark:bg-[#111] bg-white
                  dark:text-[#666] text-gray-500
                  dark:border border dark:border-[#1e1e1e] border-gray-200
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
