import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40" style={{background:'radial-gradient(closest-side, rgba(56,189,248,0.35), transparent)'}} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-40" style={{background:'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent)'}} />
      </div>

      <div className="relative grid lg:grid-cols-2 gap-10">
        <div>
          <motion.h2 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            GothamQuant
          </motion.h2>
          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl">
            A next-generation AI financial intelligence platform that fuses quant precision with luxury-grade design. Operate with clarity, speed, and trust.
          </motion.p>
          <div className="mt-6 flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30 transition shadow-[0_0_20px_rgba(34,211,238,0.2)]">Launch Dashboard</button>
            <button className="px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition">Explore Predictions</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* SafeScore meter placeholder */}
          <div className="col-span-1 bg-black/40 rounded-2xl border border-white/10 p-4">
            <div className="text-xs text-slate-400">SafeScore</div>
            <div className="mt-3 aspect-square rounded-full bg-gradient-to-br from-blue-500/20 to-red-500/20 border border-white/10 relative">
              <div className="absolute inset-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl font-semibold text-white">82</div>
              </div>
            </div>
          </div>
          {/* Volatility radar */}
          <div className="col-span-1 bg-black/40 rounded-2xl border border-white/10 p-4">
            <div className="text-xs text-slate-400">Volatility Radar</div>
            <div className="mt-3 aspect-square rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-30">
                {Array.from({length:16}).map((_,i)=> (
                  <div key={i} className="border border-white/5" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.2)]" />
              </div>
            </div>
          </div>
          {/* Performance rings */}
          <div className="col-span-2 bg-black/40 rounded-2xl border border-white/10 p-4">
            <div className="text-xs text-slate-400">Multi-market Performance</div>
            <div className="mt-4 flex items-center gap-6">
              {["Equities","Crypto","FX"].map((label,idx)=> (
                <div key={label} className="relative">
                  <div className="w-20 h-20 rounded-full border-2" style={{borderColor: idx===0? '#22d3ee' : idx===1? '#a78bfa' : '#34d399'}} />
                  <div className="absolute inset-0 rounded-full" style={{boxShadow:'0 0 30px rgba(255,255,255,0.05) inset'}} />
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
