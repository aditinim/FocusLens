function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <p className="text-primary-glow text-sm tracking-[0.3em] uppercase">
          FocusLens // Vision System
        </p>

        <h1 className="mt-4 text-7xl font-bold tracking-tight">
          See Your{" "}
          <span className="text-primary-glow">
            Focus.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-muted text-lg">
          Real-time attention analytics powered by computer vision.
        </p>

        <button className="mt-8 rounded-xl border border-primary-glow/40 bg-primary/20 px-6 py-3 font-semibold text-foreground transition hover:bg-primary/30 hover:shadow-[0_0_30px_rgba(201,42,69,0.15)]">
          Start Focus Session
        </button>
      </div>
    </div>
  )
}

export default App