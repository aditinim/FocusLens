import { useState } from 'react'
import CameraPanel from '../components/session/CameraPanel'
import SessionMetrics from '../components/session/SessionMetrics'
import FocusScore from '../components/session/FocusScore'
import SessionControls from '../components/session/SessionControls'
import useCamera from '../hooks/useCamera'
import { initializeFaceLandmarker, analyzeFrame } from '../vision/faceLandmarker'

function LiveSessionPage() {
    const [isSessionActive, setIsSessionActive] = useState(false)

    const {
        videoRef,
        startCamera,
        stopCamera,
        isCameraActive,
        cameraError,
    } = useCamera()

    const testFaceDetection = () => {
        if (!videoRef.current) {
            return
        }

        const result = analyzeFrame(videoRef.current)

        console.log('🧠 MediaPipe result:', result)

        if (result?.faceLandmarks.length) {
            const landmarks = result.faceLandmarks[0]

            console.log('📍 Number of landmarks:', landmarks.length)
            console.log('📍 First landmark:', landmarks[0])
            console.log('📍 First five landmarks:', landmarks.slice(0, 5))
        }
    }

    return (
        <div className="min-h-screen p-6 lg:p-10">
            <div className="mx-auto max-w-7xl">
                <header>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow">
                        Live Vision
                    </p>

                    <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                        Focus Session
                    </h1>

                    <p className="mt-2 text-sm text-muted">
                        Real-time attention monitoring powered by local computer vision.
                    </p>
                </header>

                <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_320px]">
                    <CameraPanel
                        videoRef={videoRef}
                        isCameraActive={isCameraActive}
                        cameraError={cameraError}
                    />

                    <FocusScore />
                </div>

                <div className="mt-4">
                    <SessionMetrics />
                </div>

                <div className="mt-6">
                    <SessionControls
                        isSessionActive={isSessionActive}
                        onStart={async () => {
                            const started = await startCamera()

                            if (started) {
                                await initializeFaceLandmarker()

                                setIsSessionActive(true)

                                setTimeout(() => {
                                    testFaceDetection()
                                }, 1000)
                            }
                        }}
                        onEnd={() => {
                            stopCamera()
                            setIsSessionActive(false)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default LiveSessionPage