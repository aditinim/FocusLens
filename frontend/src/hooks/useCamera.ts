import { useRef, useState } from 'react'

function useCamera() {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const [isCameraActive, setIsCameraActive] = useState(false)
    const [cameraError, setCameraError] = useState<string | null>(null)
    const startCamera = async () => {
        try {
            setCameraError(null)

            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            })

            if (videoRef.current) {
                videoRef.current.srcObject = stream
                setIsCameraActive(true)

                return true
            }

            stream.getTracks().forEach((track) => track.stop())

            return false
        } catch (error) {
            console.error('Camera access failed:', error)

            setIsCameraActive(false)
            setCameraError(
                'Camera access was denied or unavailable.'
            )

            return false
        }
    }

    const stopCamera = () => {
        const stream = videoRef.current?.srcObject as MediaStream | null

        if (stream) {
            stream.getTracks().forEach((track) => track.stop())
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null
        }

        setIsCameraActive(false)
    }

    return {
        videoRef,
        startCamera,
        stopCamera,
        isCameraActive,
        cameraError,
    }
}

export default useCamera