import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home, Gauge, Radar, Activity, BrainCircuit, Wallet, FlaskConical, Bell, Search, LogIn } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/dashboard', label: 'Dashboard', icon: Gauge },
  { to: '/market', label: 'Market', icon: Radar },
  { to: '/portfolio', label: 'Portfolio', icon: Activity },
  { to: '/ai', label: 'AI Reasoning', icon: BrainCircuit },
  { to: '/watchlist', label: 'Watchlist', icon: Wallet },
  { to: '/lab', label: 'Quant Lab', icon: FlaskConical },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/login', label: 'Login', icon: LogIn },
]

export function Layout({ children, title }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#0B0E11] text-slate-100 relative overflow-hidden">
      {/* Holographic ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/3 -left-1/3 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-30" style={{background:'radial-gradient(closest-side, rgba(56,189,248,0.25), transparent)'}} />
        <div className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-30" style={{background:'radial-gradient(closest-side, rgba(99,102,241,0.25), transparent)'}} />
      </div>

      {/* Carbon fiber subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light" style={{backgroundImage:'radial-gradient(circle at 25px 25px, #1a1f26 2px, transparent 0)', backgroundSize:'50px 50px'}} />

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="hidden md:flex md:flex-col w-20 xl:w-72 border-r border-white/5/10 bg-black/20 backdrop-blur-xl">
          <div className="px-4 xl:px-6 py-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-[0_0_30px_rgba(56,189,248,0.45)]" />
            <div className="hidden xl:block">
              <div className="text-lg font-semibold tracking-wide">GothamQuant</div>
              <div className="text-xs text-slate-400">AI Financial Intelligence</div>
            </div>
          </div>
          <nav className="mt-2 flex-1 space-y-1 px-2 xl:px-4">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `group flex items-center gap-3 xl:gap-4 rounded-xl px-3 xl:px-4 py-3 transition-all relative ${isActive ? 'bg-white/5 text-cyan-300' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>
                {({ isActive }) => (
                  <>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-300' : 'text-slate-400 group-hover:text-white'}`} />
                    <span className="hidden xl:block text-sm font-medium">{label}</span>
                    {isActive && (
                      <motion.span layoutId="navGlow" className="absolute inset-0 rounded-xl" initial={false} animate={{ boxShadow: 'inset 0 0 0 1px rgba(34,211,238,0.25), 0 0 24px rgba(34,211,238,0.15)' }} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 xl:p-6 text-xs text-slate-500">v1.0 • Neural Edge</div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="sticky top-0 z-40 bg-black/30 backdrop-blur-xl border-b border-white/5">
            <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
              <div>
                <h1 className="text-lg sm:text-2xl font-semibold tracking-tight text-white">{title}</h1>
                <p className="text-[11px] sm:text-xs text-slate-400">Operative Mode: Quantum Predictive</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input placeholder="Search markets, wallets, models" className="bg-transparent outline-none text-sm placeholder:text-slate-500" />
                </div>
                <button className="relative px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  <Bell className="w-5 h-5 text-slate-300" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                </button>
              </div>
            </div>
          </div>

          <main className="p-4 sm:p-6 xl:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
