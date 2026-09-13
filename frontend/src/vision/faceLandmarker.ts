import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision'

let faceLandmarker: FaceLandmarker | null = null

export async function initializeFaceLandmarker() {
  if (faceLandmarker) {
    return faceLandmarker
  }

  const vision = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm',
  )

  faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: '/models/face_landmarker.task',
    },
    runningMode: 'VIDEO',
    numFaces: 1,
  })

  return faceLandmarker
}

export function getFaceLandmarker() {
  return faceLandmarker
}

export function analyzeFrame(video: HTMLVideoElement) {
  const landmarker = getFaceLandmarker()

  if (!landmarker) {
    console.log('❌ Face Landmarker is not initialized yet')
    return null
  }


  const result = landmarker.detectForVideo(video, performance.now())

  return result
}