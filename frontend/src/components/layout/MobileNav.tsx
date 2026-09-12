import { NavLink } from 'react-router-dom'

function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-surface/90 px-3 py-2 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-4 gap-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[10px] transition-all ${
              isActive
                ? 'bg-primary/15 text-foreground'
                : 'text-muted hover:bg-primary/10 hover:text-foreground'
            }`
          }
        >
          <span className="text-sm">⌂</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/session"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[10px] transition-all ${
              isActive
                ? 'bg-primary/15 text-foreground'
                : 'text-muted hover:bg-primary/10 hover:text-foreground'
            }`
          }
        >
          <span className="text-sm">◉</span>
          Session
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[10px] transition-all ${
              isActive
                ? 'bg-primary/15 text-foreground'
                : 'text-muted hover:bg-primary/10 hover:text-foreground'
            }`
          }
        >
          <span className="text-sm">⌁</span>
          Analytics
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[10px] transition-all ${
              isActive
                ? 'bg-primary/15 text-foreground'
                : 'text-muted hover:bg-primary/10 hover:text-foreground'
            }`
          }
        >
          <span className="text-sm">◷</span>
          History
        </NavLink>
      </div>
    </nav>
  )
}

export default MobileNav