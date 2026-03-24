'use client'

import { useEffect, useState } from 'react'
//import { pinyon } from '@/app/font'
import Image from 'next/image'
import { useMemo } from 'react'

interface HeroSectionProps {
  isVisible: boolean
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

useEffect(() => {
  if (!isVisible) return

  const timer = setTimeout(() => {
    setMounted(true)
    setIsAnimating(true)
  }, 400)

  return () => clearTimeout(timer)
}, [isVisible])

  const [petals, setPetals] = useState<any[]>([])
  useEffect(() => {
  const generated = Array.from({ length: 40 }).map(() => ({
    left: `${Math.random() * 100}%`,
    duration: `${12 + Math.random() * 10}s`,
    delay: `${Math.random() * 5}s`,
  }))

  setPetals(generated)
}, [])


  return (
    <section className={`relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden`}>
      
      {/* Background Image */}
      <img
        src="/OurPhotoTogether.png"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full min-w-0 min-h-0 object-cover object-[center_20%] justify-center 
          transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isAnimating ? "opacity-100 scale-100 blur-0" : "opacity-50 scale-115 blur-sm"}`}
        alt="Wedding background"
      />


      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-Golden/30 via-Golden/10 to-Golden/30"/>

        <div className="petals absolute inset-0 pointer-events-none">
          {petals.map((petal, i) => (
            <span
              key={i}
              style={{
                left: petal.left,
                top: 0,
                animationDuration: petal.duration,
                animationDelay: petal.delay,
              }}
            />
          ))}
        </div>

      {/* Sparkle Layer */}
      <div className="sparkles absolute inset-0"></div>

      <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[18%] sm:bottom-[20%] md:bottom-[22%] w-[90%] max-w-xl text-center min-w-0">
        {/* Main content */}
        <div className={`space-y-6 transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${mounted ? 'opacity-100 delay-[800ms]' : 'opacity-0'}`}>
          {/* Main message*/} 
          <div className="space-y-4">
            <h2 className={`text-3xl sm:text-4xl md:text-4xl text-transparent leading-tight 
              bg-clip-text bg-gradient-to-r from-white via-white to-white`} 
              style={{ fontFamily: 'Pinyon Script, cursive',WebkitTextStroke: '0.3px currentColor',
                  textShadow: '0 4px 8px rgba(0,0,0,0.2)' }
              }>
              ✦The joy of two souls united in love✦
            </h2>
          </div>
        </div>
      </div>

      <div className=" scroll-indicator arrow"></div>

    </section>

    
  )
}
