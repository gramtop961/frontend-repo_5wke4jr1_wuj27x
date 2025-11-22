import { motion } from 'framer-motion'

export function Page({ title, children, subtitle }) {
  return (
    <div className="relative min-h-screen bg-[#0B0E11] text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_110%_120%,rgba(168,85,247,0.06),transparent_60%)]" />

      <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0B0E11]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-50">{title}</h2>
              {subtitle && <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-2">
              <input placeholder="Search markets, wallets, models..." className="hidden sm:block rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10" />
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 grid grid-cols-12 gap-4">
        {children}
      </main>

      <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-10 pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} GothamQuant. Engineered for precision.
      </motion.footer>
    </div>
  )
}
