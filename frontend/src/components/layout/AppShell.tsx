import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import MobileNav from './MobileNav'

function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <MobileNav />

      <main className="min-h-screen pb-20 lg:ml-64 lg:pb-0">
        <Outlet />
      </main>
    </div>
  )
}

export default AppShell