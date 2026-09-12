function VisionHud() {
    return (
        <div className="relative h-105 w-full max-w-130 overflow-hidden rounded-2xl border border-primary-glow/20 bg-surface/40 backdrop-blur-md">

            {/* HUD grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(201,42,69,0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,42,69,0.45) 1px, transparent 1px)
          `,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Top-left bracket */}
            <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-primary-glow/70" />

            {/* Top-right bracket */}
            <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-primary-glow/70" />

            {/* Bottom-left bracket */}
            <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-primary-glow/70" />

            {/* Bottom-right bracket */}
            <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-primary-glow/70" />


            {/* Vision status */}
            <div className="absolute left-8 top-8 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(127,207,169,0.8)]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-success">
                        AI Vision Active
                    </span>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted-dark">
                    Processing: Local
                </span>
            </div>


            {/* Tracking status */}
            <div className="absolute bottom-7 right-7 max-w-24 text-right sm:right-8">
                <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-primary-glow sm:text-[9px] sm:tracking-[0.2em]">
                    Face Detected
                </div>

                <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.1em] text-muted-dark sm:text-[8px] sm:tracking-[0.15em]">
                    Tracking Active
                </div>
            </div>

            {/* Face ambient glow */}
<div className="pointer-events-none absolute left-1/2 top-[43%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-glow/10 blur-3xl" />


            {/* Face tracking outline */}
            <div
                className="
          absolute
          left-1/2
          top-[43%]
          h-56
          w-42
          -translate-x-1/2
          -translate-y-1/2
          rounded-[45%]
          border
          border-primary-glow/30
        "
            />


            {/* Landmark connections */}
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Left eye → nose */}
                <line
                    x1="36"
                    y1="32"
                    x2="50"
                    y2="44"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    className="text-primary-glow/40"
                />

                {/* Right eye → nose */}
                <line
                    x1="64"
                    y1="32"
                    x2="50"
                    y2="44"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    className="text-primary-glow/40"
                />

                {/* Nose → left mouth */}
                <line
                    x1="50"
                    y1="44"
                    x2="41"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    className="text-primary-glow/40"
                />

                {/* Nose → right mouth */}
                <line
                    x1="50"
                    y1="44"
                    x2="59"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    className="text-primary-glow/40"
                />

                {/* Mouth connection */}
                <line
                    x1="41"
                    y1="60"
                    x2="59"
                    y2="60"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    className="text-primary-glow/40"
                />
            </svg>


            {/* Facial landmark points */}

            {/* Left eye */}
            <div className="absolute left-[36%] top-[32%] h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(201,42,69,0.9)] animate-[pulse-point_2s_ease-in-out_infinite]" />

            {/* Right eye */}
            <div className="absolute left-[64%] top-[32%] h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(201,42,69,0.9)] animate-[pulse-point_2s_ease-in-out_infinite]" />

            {/* Nose */}
            <div className="absolute left-1/2 top-[44%] -translate-x-1/2">
                <div className="h-1.5 w-1.5 animate-[pulse-point_2s_ease-in-out_infinite] rounded-full bg-primary-glow shadow-[0_0_10px_rgba(201,42,69,0.9)]" />
            </div>

            {/* Left mouth */}
            <div className="absolute left-[41%] top-[60%] h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(201,42,69,0.9)] animate-[pulse-point_2s_ease-in-out_infinite]" />

            {/* Right mouth */}
            <div className="absolute left-[59%] top-[60%] h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(201,42,69,0.9)] animate-[pulse-point_2s_ease-in-out_infinite]" />


            {/* Focus score */}
            <div className="absolute bottom-7 left-7 flex items-center gap-3 sm:left-8">

                {/* Score ring */}
                <div className="relative h-14 w-14 shrink-0">
                    <svg
                        className="h-full w-full -rotate-90"
                        viewBox="0 0 64 64"
                    >
                        {/* Background ring */}
                        <circle
                            cx="32"
                            cy="32"
                            r="27"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary-glow/10"
                        />

                        {/* Progress ring */}
                        <circle
                            cx="32"
                            cy="32"
                            r="27"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="169.65"
                            strokeDashoffset="22"
                            className="text-primary-glow"
                        />
                    </svg>

                    {/* Score */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-[11px] font-semibold text-foreground">
                            87%
                        </span>
                    </div>
                </div>

                {/* Score information */}
                <div className="max-w-20">
                    <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-primary-glow sm:text-[9px] sm:tracking-[0.2em]">
                        Focus Score
                    </div>

                    <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.1em] text-muted-dark sm:text-[8px] sm:tracking-[0.15em]">
                        High Focus
                    </div>
                </div>
            </div>


            {/* Scanning beam */}
            <div className="pointer-events-none absolute left-6 right-6 top-0 h-px animate-[scan_4s_ease-in-out_infinite] bg-primary-glow/60 shadow-[0_0_12px_rgba(201,42,69,0.7)]" />

        </div>
    )
}

export default VisionHud