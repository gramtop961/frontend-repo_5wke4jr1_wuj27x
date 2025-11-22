import { Hero } from './Hero'
import Nav from './Nav'
import ChromeBar from './Chrome'
import { ProbabilityCone, RiskHeatmap, VolatilityRadar, PerformanceRings, SafeScoreGauge, AIInsightCards, MiniSentiment, TickerGrid, DoMDepth, AllocationSphere, StressSliders, ScenarioArcs, ReasoningNodes, WatchGrid } from './Widgets'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0E11] text-slate-100">
      <Nav />
      <ChromeBar />
      <main className="pt-24 pl-24 sm:pl-28 pr-6 pb-10">
        {children}
      </main>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0E11]">
      <Nav />
      <ChromeBar />
      <Hero />
      <section className="px-6 sm:px-10 lg:px-16 -mt-10">
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 space-y-4">
            <SafeScoreGauge />
            <AIInsightCards />
            <TickerGrid />
          </div>
          <div className="space-y-4">
            <VolatilityRadar />
            <MiniSentiment />
          </div>
        </div>
      </section>
    </div>
  )
}

export function DashboardPage() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4 space-y-4">
          <ProbabilityCone />
          <RiskHeatmap />
          <TickerGrid />
        </div>
        <div className="lg:col-span-2 space-y-4">
          <VolatilityRadar />
          <PerformanceRings />
        </div>
      </div>
    </Layout>
  )
}

export function MarketPredictionPage() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <ProbabilityCone />
          <ScenarioArcs />
          <DoMDepth />
        </div>
        <div className="space-y-4">
          <RiskHeatmap />
          <VolatilityRadar />
        </div>
      </div>
    </Layout>
  )
}

export function PortfolioIntelligencePage() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <AllocationSphere />
          <StressSliders />
        </div>
        <div className="lg:col-span-2 space-y-4">
          <ScenarioArcs />
          <PerformanceRings />
          <WatchGrid />
        </div>
      </div>
    </Layout>
  )
}

export function AIReasoningPage() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <AIInsightCards />
          <ReasoningNodes />
        </div>
        <div className="space-y-4">
          <MiniSentiment />
          <VolatilityRadar />
        </div>
      </div>
    </Layout>
  )
}

export function WatchlistPage() {
  return (
    <Layout>
      <WatchGrid />
    </Layout>
  )
}

export function SearchPage() {
  return (
    <Layout>
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <div className="text-sm text-slate-300">Type to search across assets, wallets, models, and insights.</div>
      </div>
    </Layout>
  )
}

export function NotificationsPage() {
  return (
    <Layout>
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-3">
        {[...Array(5)].map((_,i)=> (
          <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-transparent p-4">
            <div className="text-sm font-semibold text-slate-100">Signal {i+1}</div>
            <div className="text-xs text-slate-300">Threshold crossed on monitored metric. Review risk posture.</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0B0E11] grid place-items-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(0,200,255,0.15)]">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-300/20 text-cyan-200 font-extrabold tracking-wider">GQ</div>
          <div className="mt-3 text-xl font-semibold text-slate-100">Sign in to GothamQuant</div>
          <div className="text-xs text-slate-400">Elite access. Precision guaranteed.</div>
        </div>
        <div className="space-y-3">
          <input placeholder="Email" className="w-full rounded-2xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/40" />
          <input type="password" placeholder="Password" className="w-full rounded-2xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/40" />
          <button className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 text-sm font-semibold shadow-[0_0_30px_rgba(56,189,248,0.45)]">Enter Terminal</button>
          <div className="text-center text-xs text-slate-400">New? <a className="text-cyan-300 hover:text-cyan-200" href="/onboarding">Start onboarding</a></div>
        </div>
      </div>
    </div>
  )
}

export function OnboardingPage() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-4">
        {["Connect Brokerage","Link Wallets","Select Risk Profile"].map((t,i)=> (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-slate-100 mb-1">{t}</div>
            <div className="text-xs text-slate-300">Step {i+1} of 3</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
