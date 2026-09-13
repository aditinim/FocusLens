import type { RefObject } from 'react'

type CameraPanelProps = {
  videoRef: RefObject<HTMLVideoElement | null>
  isCameraActive: boolean
  cameraError: string | null
}

function CameraPanel({
  videoRef,
  isCameraActive,
  cameraError,
}: CameraPanelProps) {
  return (
    <section className="relative aspect-video overflow-hidden rounded-2xl border border-primary-glow/20 bg-surface/60 backdrop-blur-md">
      {/* Camera video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="h-full w-full object-cover"
      />

      {/* Camera status */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isCameraActive
              ? 'bg-success shadow-[0_0_8px_rgba(127,207,169,0.8)]'
              : cameraError
                ? 'bg-danger shadow-[0_0_8px_rgba(239,68,68,0.8)]'
                : 'bg-primary-glow shadow-[0_0_8px_rgba(201,42,69,0.8)]'
          }`}
        />

        <span
          className={`font-mono text-[9px] uppercase tracking-[0.18em] ${
            isCameraActive
              ? 'text-success'
              : cameraError
                ? 'text-danger'
                : 'text-muted'
          }`}
        >
          {isCameraActive
            ? 'Camera Active'
            : cameraError
              ? 'Camera Error'
              : 'Camera Offline'}
        </span>
      </div>

      {/* Camera error */}
      {cameraError && !isCameraActive && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-sm text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-danger">
              Camera Access Required
            </p>

            <p className="mt-2 text-sm text-muted">
              {cameraError}
            </p>
          </div>
        </div>
      )}

      {/* Camera offline */}
      {!isCameraActive && !cameraError && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow">
              Vision Feed
            </p>

            <p className="mt-2 text-sm text-muted">
              Start a session to activate the camera.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default CameraPanel