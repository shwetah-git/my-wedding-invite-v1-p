'use client'

import { useRef } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // expose globally (simple approach)
  if (typeof window !== 'undefined') {
    ;(window as any).bgMusic = audioRef
  }

  return (
    <audio
      ref={audioRef}
      id="bg-music"
      src="/AnandiGopalInstrumental.mp3"
      loop
      preload="auto"
    />
  )
}