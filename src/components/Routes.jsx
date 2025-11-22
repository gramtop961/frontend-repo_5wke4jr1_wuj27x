import { Routes, Route } from 'react-router-dom'
import App from '../App'
import { HomePage, DashboardPage, MarketPredictionPage, PortfolioIntelligencePage, AIReasoningPage, WatchlistPage, SearchPage, NotificationsPage, LoginPage, OnboardingPage } from './Pages'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/market" element={<MarketPredictionPage />} />
      <Route path="/portfolio" element={<PortfolioIntelligencePage />} />
      <Route path="/ai" element={<AIReasoningPage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  )
}
