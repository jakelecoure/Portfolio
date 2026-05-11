export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="
      dark:bg-[#0d0d0d] bg-gray-50
      border-t dark:border-[#1e1e1e] border-gray-200
      py-8
    ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg dark:bg-[#111] bg-gray-100 dark:border border dark:border-[#222] border-gray-200 flex items-center justify-center">
            <svg viewBox="0 0 100 100" width="14" height="14">
              <text x="50" y="76" textAnchor="middle" fontFamily="Georgia,serif" fontSize="64" fontWeight="700" fill="#888888" letterSpacing="-6">JL</text>
              <circle cx="83" cy="22" r="7" fill="#888888"/>
            </svg>
          </div>
          <span className="font-display font-700 text-sm dark:text-white text-gray-900">
            Jake<span className="dark:text-[#333] text-gray-300">.</span>
          </span>
        </div>

        {/* Copy */}
        <p className="text-xs dark:text-[#333] text-gray-400 text-center">
          © {year} Jake LeCoure · Built with React + Vite + Tailwind CSS
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs dark:text-[#444] text-gray-400 hover:dark:text-white hover:text-gray-900 transition-colors animated-underline"
        >
          Back to top ↑
        </button>

      </div>
    </footer>
  )
}
