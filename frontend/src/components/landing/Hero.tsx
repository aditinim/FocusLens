function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-8 py-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 max-w-4xl">
        {/* System label */}
        <div className="mb-7 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_14px_rgba(201,42,69,0.8)]" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary-glow">
            FocusLens // Vision System
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-7xl md:text-8xl">
          See Your
          <br />

          <span className="text-primary-glow [text-shadow:0_0_35px_rgba(201,42,69,0.3)]">
            Focus.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
          Real-time attention analytics powered by computer vision.
          Your camera stays on your device. Your visual data stays private.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl border border-primary-glow/50 bg-primary/20 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/30 hover:shadow-[0_0_30px_rgba(201,42,69,0.15)]">
            Start Focus Session
          </button>

          <button className="rounded-xl border border-muted-dark/30 bg-white/2 px-6 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:border-muted-dark/50 hover:bg-white/5 hover:text-foreground">
            Explore Analytics
          </button>
        </div>

        {/* System information */}
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/5 pt-5 text-[10px] uppercase tracking-[0.18em] text-muted-dark">
          <span className="text-success">
            ● Processing Locally
          </span>

          <span>
            Privacy Mode Active
          </span>

          <span>
            Vision Engine Ready
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero