import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { initializeFaceLandmarker } from './vision/faceLandmarker'

import LandingPage from './pages/LandingPage'
import LiveSessionPage from './pages/LiveSessionPage'
import DashboardPage from './pages/DashboardPage'
import AnalyticsPage from './pages/AnalyticsPage'
import AppShell from './components/layout/AppShell'
import HistoryPage from './pages/HistoryPage'
import SettingsPage from './pages/SettingsPage'

function App() {

  useEffect(() => {
    initializeFaceLandmarker()
      .then(() => {
        console.log('✅ Face Landmarker initialized successfully')
      })
      .catch((error) => {
        console.error('❌ Face Landmarker initialization failed:', error)
      })
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>

        {/* Public landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Application pages */}
        <Route element={<AppShell />}>
          <Route path="/session" element={<LiveSessionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App