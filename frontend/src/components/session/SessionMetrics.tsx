type MetricProps = {
  label: string
  value: string
  detail?: string
}

function Metric({
  label,
  value,
  detail,
}: MetricProps) {
  return (
    <div className="rounded-xl border border-white/5 bg-surface/50 p-4">
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-dark">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold text-foreground">
        {value}
      </p>

      {detail && (
        <p className="mt-1 text-xs text-muted">
          {detail}
        </p>
      )}
    </div>
  )
}

function SessionMetrics() {
  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <Metric
        label="Session Time"
        value="00:00"
      />

      <Metric
        label="Focused"
        value="00:00"
        detail="0%"
      />

      <Metric
        label="Distracted"
        value="00:00"
        detail="0%"
      />

      <Metric
        label="Distractions"
        value="0"
      />
    </section>
  )
}

export default SessionMetrics