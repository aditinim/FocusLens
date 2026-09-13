function FocusScore() {
  const score = 87

  return (
    <section className="rounded-2xl border border-primary-glow/20 bg-surface/60 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-dark">
            Current Focus
          </p>

          <p className="mt-1 text-sm text-muted">
            Real-time attention score
          </p>
        </div>

        <span className="rounded-full border border-success/20 bg-success/5 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-success">
          High Focus
        </span>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-primary-glow/20">
          <div className="absolute inset-2 rounded-full border border-primary-glow/10" />

          <div className="text-center">
            <p className="text-4xl font-semibold text-foreground">
              {score}%
            </p>

            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              Focus Score
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FocusScore