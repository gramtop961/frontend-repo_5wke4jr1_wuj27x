import { motion } from 'framer-motion'
import { Brain, Gauge, ShieldCheck, Activity, Radar, ChartNoAxesCombined, LineChart, Flame } from 'lucide-react'

export function SafeScore() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative col-span-12 md:col-span-4 rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_0%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="flex items-center justify-between"><h3 className="text-slate-200 font-semibold">SafeScore</h3><ShieldCheck className="w-5 h-5 text-cyan-300"/></div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="relative">
          <div className="aspect-square rounded-full bg-gradient-to-br from-cyan-500/15 to-rose-500/15 border border-white/10 shadow-[inset_0_0_40px_rgba(56,189,248,0.25),0_0_24px_rgba(244,63,94,0.2)] flex items-center justify-center">
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 120 120" className="absolute inset-0">
                <defs>
                  <linearGradient id="risk" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#ef4444"/>
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="46" stroke="url(#risk)" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray="290" strokeDashoffset="90" />
                <circle cx="60" cy="60" r="38" fill="rgba(15,23,42,0.6)"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-50">82</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Moderate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: 'Credit', v: 0.82 },
            { label: 'Market', v: 0.63 },
            { label: 'Liquidity', v: 0.74 },
            { label: 'Operational', v: 0.56 },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex justify-between text-[11px] text-slate-400"><span>{row.label}</span><span className="text-slate-300">{Math.round(row.v*100)}%</span></div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" style={{ width: `${row.v*100}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function PredictionDashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="relative col-span-12 md:col-span-8 rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_circle_at_80%_-10%,rgba(34,197,94,0.07),transparent_60%)]" />
      <div className="flex items-center justify-between"><h3 className="text-slate-200 font-semibold">AI Prediction Dashboard</h3><Brain className="w-5 h-5 text-emerald-300"/></div>
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-7">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-white/10 relative overflow-hidden">
            <svg viewBox="0 0 600 340" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="cone" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#7c3aed"/>
                </linearGradient>
              </defs>
              <path d="M40 260 C 160 120, 260 140, 560 200" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M40 260 C 160 160, 260 180, 560 250" stroke="#7c3aed" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M40 260 C 160 140, 260 150, 560 220" stroke="url(#cone)" strokeWidth="3" fill="none" opacity="0.9" />
              {Array.from({ length: 15 }).map((_, i) => (
                <circle key={i} cx={60 + i*36} cy={180 + Math.sin(i/2)*20} r="1.4" fill="#22d3ee" opacity="0.6" />
              ))}
            </svg>
            <div className="absolute bottom-3 left-3 text-[10px] text-slate-400">Probability cones • Live</div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl p-4 bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-slate-300 text-sm"><Radar className="w-4 h-4 text-cyan-300"/> Volatility radar</div>
            <div className="mt-3 h-28 rounded-lg bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 border border-white/10 relative overflow-hidden">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="absolute bottom-0 w-[8%] bg-gradient-to-t from-cyan-500 to-blue-500/80 rounded-t" style={{ left: `${i*6}%`, height: `${20 + Math.sin(i*0.7)*20 + 40}%`, opacity: 0.9 }} />
              ))}
            </div>
          </div>
          <div className="rounded-xl p-4 bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-slate-300 text-sm"><ChartNoAxesCombined className="w-4 h-4 text-rose-300"/> Risk heatmap</div>
            <div className="mt-3 grid grid-cols-6 gap-1">
              {Array.from({ length: 36 }).map((_, i) => {
                const v = Math.abs(Math.sin(i*1.7))
                const color = `rgba(${Math.round(255*v)}, ${Math.round(100*(1-v))}, ${Math.round(150*(1-v))}, 0.9)`
                return <div key={i} className="aspect-square rounded-sm" style={{ backgroundColor: color }} />
              })}
            </div>
          </div>
          <div className="rounded-xl p-4 bg-white/5 border border-white/10 col-span-2">
            <div className="flex items-center gap-2 text-slate-300 text-sm"><LineChart className="w-4 h-4 text-emerald-300"/> Performance rings</div>
            <div className="mt-3 flex items-center gap-6">
              {[68, 82, 44].map((v, idx) => (
                <div key={idx} className="relative w-20 h-20">
                  <svg viewBox="0 0 100 100" className="absolute inset-0">
                    <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
                    <circle cx="50" cy="50" r="38" stroke={idx===1? '#22c55e' : idx===0? '#38bdf8' : '#f43f5e'} strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray="240" strokeDashoffset={240 - (v/100)*240} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-200 text-sm font-semibold">{v}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function NarrativePanel() {
  const insights = [
    { title: 'Macro pulse', text: 'Yields stabilizing while growth beta regains momentum. AI infra leading risk-on tone.' },
    { title: 'Flow signals', text: 'Stable net inflows in mega-cap tech; on-chain activity spikes in L2 ecosystems.' },
    { title: 'Vol regime', text: 'Surface compressing; skew normalizing. Short-dated gamma subdued.' },
  ]
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="relative col-span-12 rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_100%_100%,rgba(168,85,247,0.06),transparent_60%)]" />
      <div className="flex items-center justify-between"><h3 className="text-slate-200 font-semibold">AI Narrative</h3><Flame className="w-5 h-5 text-fuchsia-300"/></div>
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-3">
          {insights.map((i, idx) => (
            <div key={idx} className="rounded-2xl p-4 bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <div className="text-slate-300 font-semibold text-sm">{i.title}</div>
              <div className="text-slate-400 text-xs mt-1">{i.text}</div>
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
            <div className="text-slate-300 text-sm">Sentiment</div>
            <div className="mt-3 h-28 relative">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="absolute bottom-0 w-[3%] bg-gradient-to-t from-emerald-400 to-cyan-400 rounded" style={{ left: `${i*3.2}%`, height: `${40 + Math.sin(i*0.4)*30 + 20}%`, opacity: 0.8 }} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-2xl p-4 bg-white/5 border border-white/10 h-full">
            <div className="text-slate-300 text-sm">Reasoning graph</div>
            <div className="mt-3 h-40 relative">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="absolute" style={{ left: `${10 + i*10}%`, top: `${20 + Math.cos(i)*10}%` }}>
                  <div className="w-3 h-3 rounded-full bg-fuchsia-400 shadow-[0_0_16px_rgba(244,114,182,0.7)]" />
                </div>
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <svg key={i} className="absolute" style={{ left: `${12 + i*10}%`, top: `${22 + Math.cos(i)*10}%` }} width="60" height="20">
                  <line x1="0" y1="10" x2="60" y2="10" stroke="rgba(244,114,182,0.6)" strokeWidth="1" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function MarketWatch() {
  const rows = Array.from({ length: 10 }).map((_, i) => ({
    symbol: ['AAPL','MSFT','NVDA','TSLA','AMZN','META','BTC','ETH','SOL','QQQ'][i],
    price: (100 + Math.sin(i)*25 + i*8).toFixed(2),
    move: (Math.cos(i*1.3)*2).toFixed(2),
    liquidity: Math.abs(Math.sin(i*0.8)),
  }))
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative col-span-12 rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_circle_at_0%_100%,rgba(56,189,248,0.06),transparent_60%)]" />
      <div className="flex items-center justify-between"><h3 className="text-slate-200 font-semibold">Market Watch</h3><Activity className="w-5 h-5 text-cyan-300"/></div>
      <div className="mt-3 grid grid-cols-12 text-[12px] text-slate-400">
        <div className="col-span-3">Symbol</div>
        <div className="col-span-3">Price</div>
        <div className="col-span-3">Move</div>
        <div className="col-span-3">Liquidity</div>
      </div>
      <div className="mt-2 divide-y divide-white/5">
        {rows.map((r) => (
          <div key={r.symbol} className="grid grid-cols-12 py-2 items-center text-sm">
            <div className="col-span-3 text-slate-200 font-medium">{r.symbol}</div>
            <div className="col-span-3 text-slate-300">{r.price}</div>
            <div className={`col-span-3 ${parseFloat(r.move) >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{r.move}%</div>
            <div className="col-span-3">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600" style={{ width: `${r.liquidity*100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
