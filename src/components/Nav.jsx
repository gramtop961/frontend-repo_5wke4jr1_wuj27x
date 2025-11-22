import { NavLink } from 'react-router-dom'
import { Home, Activity, Atom, LineChart, Briefcase, Compass, Bell, Search, LogIn, FlaskConical } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/dashboard', label: 'Dashboard', icon: Activity },
  { to: '/market', label: 'Market', icon: LineChart },
  { to: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { to: '/ai', label: 'AI', icon: Atom },
  { to: '/lab', label: 'Quant Lab', icon: FlaskConical },
  { to: '/watchlist', label: 'Watchlist', icon: Compass },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/notifications', label: 'Alerts', icon: Bell },
  { to: '/login', label: 'Login', icon: LogIn },
]

export default function Nav() {
  return (
    <aside className="fixed left-4 top-4 bottom-4 z-40">
      <div className="h-full w-18 sm:w-20 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,180,255,0.1)] overflow-hidden">
        <div className="p-3 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-300/20 shadow-[inset_0_0_30px_rgba(0,255,255,0.15),0_0_25px_rgba(0,200,255,0.25)] flex items-center justify-center text-cyan-300 font-bold tracking-wider">GQ</div>
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <nav className="flex flex-col gap-1 w-full">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `group relative flex items-center justify-center mx-1 my-0.5 rounded-2xl p-3 transition-all ${isActive ? 'bg-cyan-400/10 border border-cyan-300/30 shadow-[0_0_16px_rgba(0,255,255,0.25)]' : 'border border-white/5 hover:border-cyan-300/20 hover:bg-white/5'}`}
                title={label}
              >
                <Icon className="w-5 h-5 text-slate-300 group-hover:text-cyan-300 transition-colors" />
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-xl bg-slate-900/90 border border-white/10 px-3 py-1 text-xs text-slate-200 opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden lg:block">
                  {label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}
