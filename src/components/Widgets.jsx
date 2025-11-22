import { motion } from 'framer-motion'

export function ProbabilityCone() {
  return (
    <div className="relative h-40 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_60%)] border border-white/10">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="cone" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path d="M 20 180 C 180 160, 240 60, 380 20 L 380 180 Z" fill="url(#cone)" opacity="0.25" />
        <path d="M 20 180 C 150 150, 240 80, 380 40" stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="2" fill="none" />
        <path d="M 20 180 C 160 165, 260 90, 380 60" stroke="#60a5fa" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
        <path d="M 20 180 C 170 170, 280 110, 380 90" stroke="#f59e0b" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
        <path d="M 20 180 C 180 180, 300 140, 380 120" stroke="#ef4444" strokeOpacity="0.6" strokeWidth="2" fill="none" />
      </svg>
      <div className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider text-slate-300/80">Probability Cones</div>
    </div>
  )
}

export function RiskHeatmap() {
  const rows = 6
  const cols = 18
  const cells = Array.from({ length: rows * cols })
  return (
    <div className="relative rounded-2xl border border-white/10 p-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
      <div className="grid grid-cols-18 gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
        {cells.map((_, i) => {
          const v = Math.sin(i * 0.7) * Math.cos(i * 0.23)
          const heat = Math.abs(v)
          const hue = 200 - heat * 200
          const alpha = 0.15 + heat * 0.8
          return (
            <div key={i} className="aspect-[1/1] rounded" style={{ backgroundColor: `hsla(${hue}, 90%, 55%, ${alpha})`, boxShadow: `0 0 12px hsla(${hue}, 90%, 55%, ${alpha * 0.5})` }} />
          )
        })}
      </div>
      <div className="absolute bottom-2 left-3 text-[10px] uppercase tracking-wider text-slate-300/80">Risk Heatmap</div>
    </div>
  )
}

export function VolatilityRadar() {
  const spokes = 9
  return (
    <div className="relative rounded-2xl border border-white/10 p-3 bg-white/5 overflow-hidden">
      <svg viewBox="0 0 200 200" className="w-full h-48">
        <defs>
          <radialGradient id="rad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#rad)" />
        {[...Array(spokes)].map((_, i) => {
          const angle = (i / spokes) * Math.PI * 2
          const x = 100 + Math.cos(angle) * 85
          const y = 100 + Math.sin(angle) * 85
          return <line key={i} x1="100" y1="100" x2={x} y2={y} stroke="rgba(148,163,184,0.35)" />
        })}
        {[40, 70, 90].map((r, i) => (
          <circle key={i} cx="100" cy="100" r={r} stroke="rgba(148,163,184,0.25)" fill="none" />
        ))}
        <motion.circle
          cx="100" cy="100" r="86"
          stroke="#22d3ee" strokeOpacity="0.6" fill="none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
      <div className="absolute bottom-2 left-3 text-[10px] uppercase tracking-wider text-slate-300/80">Volatility Radar</div>
    </div>
  )
}

export function PerformanceRings() {
  const items = [
    { label: 'Equities', val: 0.72, color: '#60a5fa' },
    { label: 'Crypto', val: 0.58, color: '#22d3ee' },
    { label: 'Rates', val: 0.44, color: '#f59e0b' },
    { label: 'FX', val: 0.36, color: '#ef4444' },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((it) => (
        <div key={it.label} className="rounded-2xl border border-white/10 p-4 bg-white/5 text-center">
          <div className="mx-auto w-24 h-24 relative">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <circle cx="60" cy="60" r="50" stroke="rgba(148,163,184,0.25)" strokeWidth="10" fill="none" />
              <motion.circle
                cx="60" cy="60" r="50" stroke={it.color} strokeWidth="10" fill="none" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: it.val }}
                transition={{ duration: 1.4 }}
                style={{ pathLength: it.val }}
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-slate-200 font-semibold">{Math.round(it.val*100)}%</div>
          </div>
          <div className="mt-2 text-[11px] uppercase tracking-wider text-slate-300/90">{it.label}</div>
        </div>
      ))}
    </div>
  )
}

export function SafeScoreGauge() {
  return (
    <div className="relative rounded-2xl border border-white/10 p-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] overflow-hidden">
      <div className="text-[11px] uppercase tracking-wider text-slate-300 mb-2">SafeScore</div>
      <div className="relative h-36">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          <defs>
            <linearGradient id="risk" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M20,100 A80,80 0 0,1 180,100" stroke="url(#risk)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <motion.circle cx="100" cy="100" r="80" fill="none" stroke="url(#risk)" strokeOpacity="0.25" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
          <motion.circle cx="100" cy="100" r="40" fill="url(#glow)" animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ transformOrigin: 'center' }} />
          <motion.circle cx="100" cy="100" r="80" fill="none" stroke="#22d3ee" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="4 6" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }} style={{ transformOrigin: 'center' }} />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-slate-50">82</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-300/90">Calm → Watch</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AIInsightCards() {
  const items = [
    { title: 'Regime Shift', body: 'Volatility clustering indicates transition to mixed momentum/mean-reversion regime in large-cap tech.' },
    { title: 'News Impact', body: 'CPI surprise drives short-lived liquidity vacuum; spreads normalize in ~36m.' },
    { title: 'On-chain Heat', body: 'Wallet cohort M3 accumulating; CEX outflows spike 12%. Potential supply shock.' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((it, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.06 }} className="rounded-2xl border border-white/10 p-4 bg-white/5">
          <div className="text-sm font-semibold text-slate-100 mb-1">{it.title}</div>
          <div className="text-xs text-slate-300">{it.body}</div>
        </motion.div>
      ))}
    </div>
  )
}

export function MiniSentiment() {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
      <div className="text-[11px] uppercase tracking-wider text-slate-300 mb-2">Sentiment</div>
      <div className="flex items-end gap-1 h-16">
        {[...Array(28)].map((_, i) => (
          <div key={i} className="w-2 rounded" style={{ height: `${10 + Math.abs(Math.sin(i*0.7))*50}px`, background: `linear-gradient(180deg, rgba(34,211,238,0.5), rgba(96,165,250,0.4))`, boxShadow: '0 0 14px rgba(34,211,238,0.35)' }} />
        ))}
      </div>
    </div>
  )
}

export function TickerGrid() {
  const items = ['AAPL','NVDA','MSFT','TSLA','ETH','BTC','SOL','AMZN','META','NQ','SPY','GLD']
  return (
    <div className="rounded-2xl border border-white/10 p-3 bg-white/5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((t,i) => (
          <div key={t} className="group rounded-xl border border-white/10 p-3 bg-gradient-to-br from-white/5 to-white/0 hover:from-cyan-500/5 transition-all">
            <div className="flex items-center justify-between text-slate-200 text-sm font-semibold">
              <span>{t}</span>
              <span className={`${i%3===0? 'text-emerald-400':'text-rose-400'}`}>{i%3===0? '+1.8%':'-0.6%'}</span>
            </div>
            <div className="mt-2 h-8 w-full overflow-hidden">
              <svg viewBox="0 0 120 32" className="w-full h-full">
                <path d="M0,22 L20,10 40,18 60,8 80,16 100,6 120,14" stroke={i%3===0? '#34d399':'#fb7185'} strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="mt-2 h-2 w-full bg-slate-700/40 rounded">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded" style={{ width: `${40 + (i*4)%60}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DoMDepth() {
  return (
    <div className="rounded-2xl border border-white/10 p-3 bg-white/5">
      <div className="text-[11px] uppercase tracking-wider text-slate-300 mb-2">Depth of Market</div>
      <div className="grid grid-cols-2 gap-2">
        {[...Array(2)].map((_, side) => (
          <div key={side} className="h-20 bg-slate-800/60 rounded overflow-hidden relative">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute left-0 right-0 h-[10%]" style={{ top: `${i*10}%`, background: `linear-gradient(90deg, rgba(${side?250:34}, ${side?60:211}, ${side?80:238}, ${0.05 + i*0.02}), transparent)` }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function AllocationSphere() {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
      <div className="text-[11px] uppercase tracking-wider text-slate-300 mb-2">Allocation Sphere</div>
      <div className="relative h-64">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.3),rgba(96,165,250,0.25)_30%,transparent_65%)] border border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.25)_inset]" />
        {[...Array(18)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full bg-cyan-300" style={{ left: `${10 + (i*5)%80}%`, top: `${10 + (i*12)%70}%`, boxShadow: '0 0 12px rgba(34,211,238,0.9)' }} />
        ))}
      </div>
    </div>
  )
}

export function StressSliders() {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
      <div className="text-[11px] uppercase tracking-wider text-slate-300 mb-3">Stress Test</div>
      {['Rates','Liquidity','Volatility','Credit'].map((k,i) => (
        <div key={k} className="mb-3">
          <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
            <span>{k}</span>
            <span className="text-slate-400">{20 + i*15}%</span>
          </div>
          <div className="h-2 rounded bg-slate-700/50">
            <div className="h-full rounded bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${20 + i*15}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ScenarioArcs() {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
      <div className="text-[11px] uppercase tracking-wider text-slate-300 mb-2">Scenario Outcomes</div>
      <svg viewBox="0 0 400 140" className="w-full h-28">
        {[
          { c: '#22d3ee', y: 120 },
          { c: '#60a5fa', y: 110 },
          { c: '#f59e0b', y: 100 },
          { c: '#ef4444', y: 90 },
        ].map((a,i) => (
          <path key={i} d={`M20,${a.y} C 150,${a.y-40} 250,${a.y-40} 380,${a.y}`} stroke={a.c} strokeOpacity="0.7" strokeWidth="2" fill="none" />
        ))}
      </svg>
    </div>
  )
}

export function ReasoningNodes() {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
      <div className="text-[11px] uppercase tracking-wider text-slate-300 mb-2">AI Reasoning</div>
      <div className="relative h-48">
        {[...Array(12)].map((_,i)=> (
          <div key={i} className="absolute w-2 h-2 rounded-full bg-cyan-300" style={{ left: `${10 + (i*8)%80}%`, top: `${10 + (i*14)%70}%`, boxShadow: '0 0 10px rgba(34,211,238,0.9)' }} />
        ))}
        {[...Array(10)].map((_,i)=> (
          <div key={i} className="absolute h-px bg-cyan-400/30" style={{ left: `${10 + (i*6)%70}%`, top: `${20 + (i*9)%60}%`, width: `${20 + (i*7)%40}%`, transform: `rotate(${(i*13)%50-25}deg)` }} />
        ))}
      </div>
    </div>
  )
}

export function WatchGrid() {
  return (
    <div className="rounded-2xl border border-white/10 p-3 bg-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[...Array(8)].map((_,i)=> (
          <div key={i} className="rounded-xl border border-white/10 p-3 bg-gradient-to-br from-white/5 to-transparent">
            <div className="flex items-center justify-between text-slate-200 text-sm">
              <span>Asset {i+1}</span>
              <span className={`${i%2? 'text-emerald-400':'text-rose-400'}`}>{i%2? '+0.9%':'-0.4%'}</span>
            </div>
            <div className="mt-2 h-8">
              <svg viewBox="0 0 120 32" className="w-full h-full">
                <path d="M0,22 L20,16 40,24 60,10 80,18 100,8 120,12" stroke={i%2? '#34d399':'#fb7185'} strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
