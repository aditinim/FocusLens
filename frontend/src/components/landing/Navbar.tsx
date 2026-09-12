function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_12px_rgba(201,42,69,0.8)]" />

        <span className="text-sm font-semibold tracking-[0.25em] text-foreground">
          FOCUSLENS
        </span>
      </div>

      {/* Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <button className="text-sm text-muted transition-colors hover:text-foreground">
          Dashboard
        </button>

        <button className="text-sm text-muted transition-colors hover:text-foreground">
          Analytics
        </button>

        <button className="rounded-lg border border-primary-glow/30 bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:border-primary-glow/50 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(201,42,69,0.12)]">
          Start Session
        </button>
      </div>
    </nav>
  )
}

export default Navbar