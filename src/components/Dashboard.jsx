import { motion } from 'framer-motion'

function Card({ title, children }){
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/[0.03]" />
      <div className="relative p-4 sm:p-5">
        <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-3">{title}</div>
        {children}
      </div>
    </div>
  )
}

export default function Dashboard(){
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid xl:grid-cols-3 gap-4 sm:gap-6">
        <Card title="Probability Cones">
          <div className="aspect-[3/2] rounded-xl bg-black/40 border border-white/10">
            <div className="relative w-full h-full">
              <div className="absolute inset-4">
                <svg viewBox="0 0 400 240" className="w-full h-full">
                  <defs>
                    <linearGradient id="coneA" x1="0" x2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M20 200 Q 150 60 380 200" fill="url(#coneA)" stroke="#22d3ee55" />
                  <path d="M20 200 Q 150 110 380 200" fill="none" stroke="#22d3ee33" />
                  <path d="M20 200 Q 150 150 380 200" fill="none" stroke="#22d3ee22" />
                </svg>
              </div>
            </div>
          </div>
        </Card>
        <Card title="Risk Heatmap">
          <div className="aspect-[3/2] grid grid-cols-8 gap-[2px] bg-white/10 p-[2px] rounded-xl">
            {Array.from({length:64}).map((_,i)=>{
              const v = Math.sin(i*3.3)*0.5+0.5
              const hue = 200 - v*180
              return <div key={i} className="rounded-[6px]" style={{background:`hsl(${hue} 90% ${30+v*40}%)`, boxShadow:'inset 0 0 12px rgba(0,0,0,0.35)'}} />
            })}
          </div>
        </Card>
        <Card title="Volatility Radar">
          <div className="aspect-[3/2] rounded-xl bg-black/40 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-cyan-400/30" />
              <div className="absolute w-32 h-32 rounded-full border border-cyan-400/20" />
              <div className="absolute w-16 h-16 rounded-full border border-cyan-400/10" />
            </div>
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }} className="absolute left-1/2 top-1/2 origin-left">
              <div className="w-24 h-[2px] bg-cyan-400/60 shadow-[0_0_12px_#22d3ee]" />
            </motion.div>
          </div>
        </Card>
      </div>

      <div className="grid xl:grid-cols-3 gap-4 sm:gap-6">
        <Card title="SafeScore Meter">
          <div className="aspect-[3/2] flex items-center justify-center">
            <div className="relative w-52 h-52">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-red-500/20" />
              <div className="absolute inset-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl" />
              <motion.div initial={{rotate:-90}} animate={{rotate: 120}} transition={{duration:2}} className="absolute left-1/2 top-1/2 w-1 h-24 bg-gradient-to-b from-cyan-400 to-red-400 origin-bottom" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-semibold">82</div>
              </div>
            </div>
          </div>
        </Card>
        <Card title="Performance Rings">
          <div className="aspect-[3/2] flex items-center justify-center gap-8">
            {[['Equities','#22d3ee'],['Crypto','#a78bfa'],['FX','#34d399']].map(([label,color])=> (
              <div key={label} className="relative">
                <div className="w-28 h-28 rounded-full" style={{border:`6px solid ${color}`}} />
                <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Narrative Insights">
          <div className="space-y-3">
            {['Rate cuts probability rising','Liquidity rotation to large-cap tech','Crypto risk premia tightening'].map((t,i)=> (
              <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-sm text-slate-200">{t}</div>
                <div className="mt-2 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
