import { Zap } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="
      dark:bg-dark-surface bg-gray-50
      border-t dark:border-dark-border border-gray-200
      py-8
    ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-reactor/10 border border-reactor/30 flex items-center justify-center">
            <Zap size={13} className="text-reactor" />
          </div>
          <span className="font-display font-700 text-sm dark:text-white text-gray-900">
            Jake<span className="text-reactor">.</span>
          </span>
        </div>

        {/* Copy */}
        <p className="text-xs dark:text-[#3a3a5c] text-gray-400 text-center">
          © {year} Jake LeCoure · Built with React + Vite + Tailwind CSS
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="
            text-xs dark:text-[#6b7280] text-gray-500
            hover:text-reactor transition-colors
            animated-underline
          "
        >
          Back to top ↑
        </button>

      </div>
    </footer>
  )
}
