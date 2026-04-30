import { useState } from 'react'
import { Send, Github, Linkedin, Mail, MapPin, Phone, CheckCircle, Loader } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SOCIALS = [
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    handle: 'jake-lecoure',
    href: 'https://www.linkedin.com/in/jake-lecoure',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    handle: 'github.com/jakelecoure',
    href: 'https://github.com',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    handle: 'jplecoure@mun.ca',
    href: 'mailto:jplecoure@mun.ca',
  },
]

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

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

  const openLink = (href) => {
    if (href.startsWith('mailto')) {
      window.location.href = href
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 dark:bg-[#0a0a0a] bg-white">
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="reveal mb-16 text-center">
          <p className="dark:text-[#555] text-gray-400 text-sm font-semibold tracking-widest uppercase mb-3">
            04 &nbsp;/&nbsp; Contact
          </p>
          <h2
            className="font-display font-800 dark:text-white text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: '1.2' }}
          >
            Let's connect.
          </h2>
          <p className="dark:text-[#555] text-gray-400 max-w-xl mx-auto text-base">
            Whether you have a co-op opportunity, want to collaborate on a project,
            or just want to say hello — my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-16">

          <div className="reveal reveal-delay-1">
            <div className="p-6 md:p-8 rounded-2xl dark:bg-[#111] bg-gray-50 dark:border border dark:border-[#1e1e1e] border-gray-200">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="dark:text-white text-gray-900 mb-4" />
                  <h3 className="font-display font-700 text-xl dark:text-white text-gray-900 mb-2">
                    Message sent!
                  </h3>
                  <p className="dark:text-[#555] text-gray-400 text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm dark:text-[#666] text-gray-500 hover:dark:text-white hover:text-gray-900 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest dark:text-[#444] text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className="mono-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest dark:text-[#444] text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="mono-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest dark:text-[#444] text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      className="mono-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="
                      w-full flex items-center justify-center gap-2.5
                      py-3.5 px-6 rounded-xl
                      dark:bg-white bg-gray-900
                      dark:text-gray-900 text-white
                      font-semibold text-sm
                      hover:opacity-90 active:scale-[0.98]
                      transition-all duration-200
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

          <div className="reveal reveal-delay-2 flex flex-col gap-6">

            {[
              { icon: <MapPin size={16} />, label: 'Location', value: "St. John's, NL, Canada", href: null },
              { icon: <Mail size={16} />,   label: 'Email',    value: 'jplecoure@mun.ca',       href: 'mailto:jplecoure@mun.ca' },
              { icon: <Phone size={16} />,  label: 'Phone',    value: '(709) 424-1566',          href: 'tel:7094241566' },
            ].map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-4 rounded-xl dark:bg-[#111] bg-gray-50 dark:border border dark:border-[#1e1e1e] border-gray-200"
              >
                <div className="w-9 h-9 rounded-lg dark:bg-[#1a1a1a] bg-gray-200 flex items-center justify-center dark:text-[#666] text-gray-500 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs dark:text-[#444] text-gray-400 mb-0.5">{info.label}</p>
                  {info.href ? (
                    <button
                      onClick={() => openLink(info.href)}
                      className="text-sm font-medium dark:text-[#aaa] text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors"
                    >
                      {info.value}
                    </button>
                  ) : (
                    <p className="text-sm font-medium dark:text-[#aaa] text-gray-700">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="border-t dark:border-[#1e1e1e] border-gray-200" />

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest dark:text-[#444] text-gray-400 mb-4">
                Find me online
              </h3>
              <div className="space-y-3">
                {SOCIALS.map((s) => (
                  <div
                    key={s.label}
                    onClick={() => openLink(s.href)}
                    className="
                      flex items-center gap-3 p-3.5 rounded-xl group cursor-pointer
                      dark:bg-[#111] bg-gray-50
                      dark:border border dark:border-[#1e1e1e] border-gray-200
                      hover:dark:border-[#333] hover:border-gray-400
                      transition-all duration-200
                    "
                  >
                    <div className="w-8 h-8 rounded-lg dark:bg-[#1a1a1a] bg-gray-200 flex items-center justify-center flex-shrink-0 dark:text-[#666] text-gray-500">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xs dark:text-[#444] text-gray-400">{s.label}</p>
                      <p className="text-sm font-medium dark:text-[#888] text-gray-600 group-hover:dark:text-white group-hover:text-gray-900 transition-colors">
                        {s.handle}
                      </p>
                    </div>
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
