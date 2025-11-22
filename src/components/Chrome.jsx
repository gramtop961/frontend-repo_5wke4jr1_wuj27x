import { useState } from 'react'
import { Search, Bell, User, Settings } from 'lucide-react'

export default function ChromeBar() {
  const [q, setQ] = useState('')
  return (
    <header className="fixed left-0 right-0 top-0 z-30 pl-24 pr-6 sm:pl-28">
      <div className="mt-4 rounded-3xl border border-white/10 bg-[rgba(12,15,18,0.75)] backdrop-blur-xl shadow-[0_0_60px_rgba(0,200,255,0.08)]">
        <div className="flex items-center gap-3 px-4 sm:px-6 py-3">
          <div className="hidden md:flex items-center gap-2 text-slate-300/90 text-xs tracking-widest uppercase">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            GothamQuant
          </div>
          <div className="flex-1" />
          <div className="relative max-w-lg flex-1 hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search tickers, wallets, models…"
              className="w-full rounded-2xl bg-white/5 border border-white/10 pl-9 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/40 focus:ring-0"
            />
          </div>
          <button className="relative p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5 text-slate-200" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </button>
          <button className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <Settings className="w-5 h-5 text-slate-200" />
          </button>
          <div className="ml-1 inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-2xl border border-white/10 bg-white/5">
            <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-cyan-500/40 to-blue-600/40 border border-white/20" />
            <span className="text-xs text-slate-200 hidden sm:block">Operator</span>
            <User className="w-4 h-4 text-slate-300" />
          </div>
        </div>
      </div>
    </header>
  )
}
