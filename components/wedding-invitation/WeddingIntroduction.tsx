'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
//import { pinyon } from '@/app/font'

interface WeddingIntroductionProps {
  onOpen: () => void
  onStart: () => void
}

export function WeddingIntroduction({ onOpen, onStart }: WeddingIntroductionProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [mounted, setMounted] = useState(false)

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  
  const handleClick = () => {
    setIsAnimating(true)
    setPressed(true)
    setIsOpening(true)
    
    const audio = document.getElementById('bg-music') as HTMLAudioElement
    if (audio) {
      audio.volume = 0.9
      audio.play().catch(err => console.log(err))
    }
    onStart();
    setTimeout(() => { // navigation happens AFTER animation
      onOpen()
    }, 3000)

    setIsEnvelopeOpen(true)
  }

  

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-x-hidden"
    >

      {/*<Image src="/OurPhotoTogether.png" alt="preload" fill priority className="hidden"/>*/}
      
      {/* Background Overlay
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" /> */}

      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-Golden/30 via-Golden/10 to-Golden/30"/>

      {/* Envelope Split Panels */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full min-w-0 bg-gradient-to-b from-Golden/60 via-Golden/20 to-Golden/60 transition-transform 
          duration-3000 ease-in-out will-change-transform z-10 backdrop-blur-sm ${
          isEnvelopeOpen ? '-translate-x-full rotate-y-12 origin-left' : ''}`} 
          style={{
          backgroundImage: 'url(/733-left-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          }}
      />
      <div
        className={`absolute top-0 right-0 w-1/2 h-full min-w-0 bg-gradient-to-b from-Golden/60 via-Golden/20 to-Golden/60 transition-transform 
          duration-3000 ease-in-out will-change-transform z-10 backdrop-blur-sm ${
          isEnvelopeOpen ? 'translate-x-full rotate-y-12 origin-right' : ''}`}
          style={{
          backgroundImage: 'url(/733-right-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          }}
      />
      {/* Soft gradient overlay for readability 
      <div className="absolute inset-0 bg-gradient-to-b from-Golden/30 via-Golden/10 to-Golden/30"/>*/}

      <div className={`relative z-10 transition-all duration-[2000ms] ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-14">
          
          <div className="flex gap-8 relative z-20">
            <h1 className={`text-sm sm:text-base md:text-lg leading-snug text-transparent text-center bg-clip-text 
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 transition-all duration-2000 ease-out
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: 'Great Vibes, cursive' }}>
              Tap on the below seal to open the invitation</h1>
          </div>
          
          {/* Wedding Seal Image */}
          <button
            onClick={handleClick}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 max-w-[90vw] max-h-[90vw] 
              rounded-full overflow-hidden shadow-2xl 
              transition-all duration-300
              [animation:goldPulse_3s_ease-in-out_infinite] sm:[animation:none]
              ${pressed ? 'scale-95 brightness-120' : 'scale-100'}
              sm:hover:scale-105 sm:hover:shadow-xl
              active:scale-95
              focus-visible:scale-105
              focus:outline-none focus:ring-4 focus:ring-primary/50 
              cursor-pointer group`}
            aria-label="Click to open wedding invitation"
          >
            <Image
              src="/wedding-seal.jpg"
              alt="Wedding Seal"
              fill
              className="object-cover group-hover:brightness-120 group-active:brightness-110 active:brightness-130
              transition-all duration-300"
              priority
            />
            {/* Decorative border animation */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300" />
          </button>

          {/* Text Content */}
          <div className="text-center space-y-4 md:space-y-6 max-w-md mt-4 px-2 sm:px-0">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl leading-snug text-transparent bg-clip-text 
              bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300`} style={{ fontFamily: 'Pinyon Script, cursive' }}>
                  Wedding Invitation
            </h2>
            <div className="ornament-divider" />            
          </div>
        </div>
      </div>
      
    </div>
  
  )
}


