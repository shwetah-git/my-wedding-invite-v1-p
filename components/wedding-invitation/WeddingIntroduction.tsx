'use client'

import Image from 'next/image'
import { useState } from 'react'
import { pinyon } from '@/app/font'

{/*
const pinyon = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})*/}

interface WeddingIntroductionProps {
  onOpen: () => void
}

export function WeddingIntroduction({ onOpen }: WeddingIntroductionProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setPressed(true)
    setIsOpening(true)

    const audio = document.getElementById('bg-music') as HTMLAudioElement
    if (audio) {
      audio.volume = 0.7
      audio.play().catch(err => console.log(err))
    }

    setTimeout(() => { // navigation happens AFTER animation
      onOpen()
    }, 300)
  }

  

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-x-hidden transition-colors duration-[300ms]"
      style={{
        backgroundImage: 'url(/cherished-moments-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /*backgroundAttachment: 'fixed'*/
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      

      <div className={`relative z-10 transition-all duration-[1000ms] ease-in-out ${isAnimating ? 'opacity-0 scale-95 blur-lg' : 'opacity-100 scale-100 blur-0'}`}>
        
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-14">
          {/* Decorative top lotus flowers 
          <div className="flex gap-8">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl md:text-3xl">✦</span>
              
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-2xl md:text-3xl">✦</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl md:text-3xl">✦</span>
            </div>
          </div>*/}
          {/*<audio ref={audioRef} src="/AnandiGopalInstrumental.mp3" loop />*/}
          {/* Wedding Seal Image */}
          <button
            onClick={handleClick}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            /*className="relative items-center flex w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl transition-all duration-300
            hover:shadow-xl hover:scale-105 active:scale-95 focus-visible:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 cursor-pointer group"*/
            className={`relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 
              rounded-full overflow-hidden shadow-2xl 
              transition-all duration-500
              [animation:goldPulse_3s_ease-in-out_infinite] sm:[animation:none]
              ${pressed ? 'scale-95 brightness-110' : 'scale-100'}
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
              className="object-cover group-hover:brightness-110 group-active:brightness-110 active:brightness-120
              transition-all duration-500"
              priority
            />
            {/* Decorative border animation */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300" />
          </button>

          {/* Text Content */}
          <div className="text-center space-y-4 md:space-y-6 max-w-md mt-4 px-2 sm:px-0">
            <h2 className={`${pinyon.className} text-4xl sm:text-5xl md:text-6xl leading-snug text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700`}>
                  Wedding Invitation
            </h2>
            <div className="ornament-divider" />            
          </div>
          {/* Decorative bottom elements 
          <div className="flex gap-8 mt-8">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary/20"/>
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/20" />
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent/20" />
          </div>*/}
        </div>
      </div>
      
    </div>
  
  )
}


