import { useState } from 'react'
import { Send, Github, Linkedin, Mail, MapPin, Phone, CheckCircle, Loader } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SOCIALS = [
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    handle: 'jake-lecoure',
    href: 'https://www.linkedin.com/in/jake-lecoure',
    color: '#0a66c2',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    handle: 'github.com/jakelecoure',
    href: 'https://github.com',
    color: '#6e7681',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    handle: 'jplecoure@mun.ca',
    href: 'mailto:jplecoure@mun.ca',
    color: '#00c8ff',
  },
]

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
      const res = await fetch('https://formspree.io/f/meevzdlv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  if (res.ok) {
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  } else {
    setStatus('error')
  }
}

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 dark:bg-dark-bg bg-white relative overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,200,255,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-reactor text-sm font-semibold tracking-widest uppercase mb-3">
            04 &nbsp;/&nbsp; Contact
          </p>
          <h2 className="font-display font-800 text-3xl md:text-5xl dark:text-white text-gray-900 leading-tight mb-4">
            Let's <span className="text-gradient">connect</span>.
          </h2>
          <p className="dark:text-[#6b7280] text-gray-500 max-w-xl mx-auto text-base">
            Whether you have a co-op opportunity, want to collaborate on a project,
            or just want to say hello — my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-16">

          {/* Left — Form */}
          <div className="reveal reveal-delay-1">
            <div className="
              p-6 md:p-8 rounded-2xl
              dark:bg-dark-card bg-gray-50
              dark:border border dark:border-dark-border border-gray-200
            ">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-reactor mb-4" />
                  <h3 className="font-display font-700 text-xl dark:text-white text-gray-900 mb-2">
                    Message sent!
                  </h3>
                  <p className="dark:text-[#6b7280] text-gray-500 text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-reactor hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className="reactor-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="reactor-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      className="reactor-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="
                      w-full flex items-center justify-center gap-2.5
                      py-3.5 px-6 rounded-xl
                      bg-reactor text-[#06060f] font-semibold text-sm
                      hover:bg-reactor-glow active:scale-[0.98]
                      transition-all duration-200
                      shadow-reactor hover:shadow-reactor-lg
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — Info + Socials */}
          <div className="reveal reveal-delay-2 flex flex-col gap-6">

            {/* Info cards */}
            {[
              { icon: <MapPin size={16} />, label: 'Location', value: "St. John's, NL, Canada" },
              { icon: <Mail size={16} />,   label: 'Email',    value: 'jplecoure@mun.ca',      href: 'mailto:jplecoure@mun.ca' },
              { icon: <Phone size={16} />,  label: 'Phone',    value: '(709) 424-1566',         href: 'tel:7094241566' },
            ].map((info) => (
              <div
                key={info.label}
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  dark:bg-dark-card bg-gray-50
                  dark:border border dark:border-dark-border border-gray-200
                "
              >
                <div className="w-9 h-9 rounded-lg bg-reactor/10 border border-reactor/20 flex items-center justify-center text-reactor flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs dark:text-[#6b7280] text-gray-400 mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-medium dark:text-[#ccd6f6] text-gray-800 hover:text-reactor transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium dark:text-[#ccd6f6] text-gray-800">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="border-t dark:border-dark-border border-gray-200" />

            {/* Socials */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#6b7280] text-gray-400 mb-4">
                Find me online
              </h3>
              <div className="space-y-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-3 p-3.5 rounded-xl group
                      dark:bg-dark-card bg-gray-50
                      dark:border border dark:border-dark-border border-gray-200
                      dark:hover:border-reactor/30 hover:border-reactor/30
                      transition-all duration-200
                    "
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ background: `${s.color}15`, color: s.color }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xs dark:text-[#6b7280] text-gray-400">{s.label}</p>
                      <p className="text-sm font-medium dark:text-[#ccd6f6] text-gray-700 group-hover:text-reactor transition-colors">
                        {s.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
