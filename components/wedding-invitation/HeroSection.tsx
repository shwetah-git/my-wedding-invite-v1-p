'use client'

import { useEffect, useState } from 'react'
import { LotusPattern, FloralDivider } from './LotusPattern'
import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin']
})

import { Pinyon_Script } from 'next/font/google'

const pinyon = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
})

interface HeroSectionProps {
  isVisible: boolean
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setMounted(true)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/OurPhotoTogether.png"
        className={`flex inset-0 max-w-2xl justify-center h-full object-cover transition-all duration-[4000ms] ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
        alt="Wedding background"
      />

      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-Golden/30 via-Golden/10 to-Golden/30"/>
      
      {/* Floating petals */}
      <div className="petals absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${12 + Math.random() * 10}s`
              }}
            ></span>
          ))}
        </div>

      {/* Sparkle Layer */}
      <div className="sparkles absolute inset-0"></div>

      <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[18%] sm:bottom-[20%] md:bottom-[22%] w-[90%] max-w-xl text-center">
        {/* Main content */}
        <div className={`space-y-6 transition-all duration-1700 ${mounted ? 'opacity-100 translate-y-0 delay-[1200ms]' : 'opacity-0 translate-y-6'}`}>
          {/* Main message*/} 
          <div className="space-y-4">
            <h2 className={`${pinyon.className} text-3xl sm:text-4xl md:text-4xl text-transparent leading-tight bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300`}>
              ✦The joy of two souls united in love✦
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
