type SessionControlsProps = {
  isSessionActive: boolean
  onStart: () => void
  onEnd: () => void
}

function SessionControls({
  isSessionActive,
  onStart,
  onEnd,
}: SessionControlsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-dark">
          Session Control
        </p>

        <p className="mt-1 text-xs text-muted">
          {isSessionActive
            ? 'Focus analysis is currently running.'
            : 'Start a session to begin local vision analysis.'}
        </p>
      </div>

      <div className="flex gap-3">
        {!isSessionActive && (
          <button
            type="button"
            onClick={onStart}
            className="rounded-lg border border-primary-glow/30 bg-primary/10 px-5 py-2.5 text-sm text-foreground transition-all hover:border-primary-glow/50 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(201,42,69,0.12)]"
          >
            Start Session
          </button>
        )}

        {isSessionActive && (
          <button
            type="button"
            onClick={onEnd}
            className="rounded-lg border border-danger/30 bg-danger/5 px-5 py-2.5 text-sm text-danger transition-all hover:bg-danger/10"
          >
            End Session
          </button>
        )}
      </div>
    </div>
  )
}

export default SessionControls