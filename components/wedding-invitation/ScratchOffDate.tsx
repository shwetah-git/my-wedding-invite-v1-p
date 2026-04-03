'use client'

import { useEffect, useRef, useState } from 'react'
import { FloralDivider } from './LotusPattern'
//import { pinyon } from '@/app/font'

interface ScratchOffDateProps {
  day?: string
  month?: string
  year?: string
  time?: string
}

export function ScratchOffDate({
  day = '4',
  month = 'May',
  year = '2026',
  time = 'At 04:30 PM'
}: ScratchOffDateProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scratchCountRef = useRef(0)
  const [isRevealed, setIsRevealed] = useState(false)
  const [revealPercentage, setRevealPercentage] = useState(0)
  const [isDrawing, setIsDrawing] = useState(false)

  /** Resize-safe canvas setup */
  const setupCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.parentElement?.getBoundingClientRect()
    if (!rect) return

    canvas.width = rect.width
    canvas.height = rect.height

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, '#d4af37')
    gradient.addColorStop(0.5, '#f5e6a7')
    gradient.addColorStop(1, '#caa93f')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#111010ff'
    ctx.font = `${Math.max(14, canvas.width * 0.04)}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Scratch to reveal the date', canvas.width / 2, canvas.height / 2)
  }

  useEffect(() => {

    setupCanvas()
    window.addEventListener('resize', setupCanvas)
    return () => window.removeEventListener('resize', setupCanvas)
  }, [])

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()

    const actualX = x - rect.left
    const actualY = y - rect.top

    /** Responsive scratch radius */
    const radius = Math.max(25, canvas.width * 0.06)

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(actualX, actualY, radius, 0, Math.PI * 2)
    ctx.fill()

    scratchCountRef.current++

    if (scratchCountRef.current % 8 === 0) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      let transparent = 0
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) transparent++
      }

      const percentage = (transparent / (data.length / 4)) * 100
      setRevealPercentage(percentage)

      if (percentage > 30) {
        setIsRevealed(true)
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    scratch(e.clientX, e.clientY)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    scratch(e.clientX, e.clientY)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const touch = e.touches[0]
    scratch(touch.clientX, touch.clientY)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const touch = e.touches[0]
    scratch(touch.clientX, touch.clientY)
  }

  const handleTouchEnd = () => {
    setIsDrawing(false)
  }

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-2xl mx-auto">
        {/*Header*/}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary mb-3 sm:mb-4">
            The Big Day
          </h2>
          <FloralDivider />
        </div>
        <div className="realtive seal-wrapper">
          <div className='seal-border'>

        {/* Scratch Card Container */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-12 shadow-lg border border-primary/10 space-y-6 sm:space-y-8">
          <p className="text-center text-foreground/70 text-xs sm:text-sm md:text-base px-2">
            Reveal our special date by scratching the card below
          </p>

          {/* Scratch-off Canvas */}
          <div className="relative bg-white rounded-xl overflow-hidden shadow-md h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]">
            {/* Date Display - Hidden under scratch */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 px-4">
              <div className={`text-center space-y-3 transition-all duration-1800 ${isRevealed ? 'blur-0 opacity-100' : 'blur-xl opacity-20'}`}>
                <p className={`date-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight break-words text-transparent bg-clip-text bg-gradient-to-r 
                  from-yellow-700 via-yellow-400 to-yellow-700`} 
                  style={{ fontFamily: 'Pinyon Script, cursive', 
                  WebkitTextStroke: '0.3px currentColor',
                  textShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                      {day} {month} {year}
                    </p>

                    <p className={`date-time text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r 
                    from-yellow-800 via-yellow-400 to-yellow-800`} 
                    style={{ fontFamily: 'Pinyon Script, cursive', 
                  WebkitTextStroke: '0.3px currentColor',
                  textShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                      {time}
                    </p>
                
              </div>
              {/* Celebration message when revealed */}
              {isRevealed && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 30 }).map((_, i) => {

                    const angle = Math.random() * 360
                    const distance = 150 + Math.random() * 200

                    const x = Math.cos(angle) * distance
                    const y = Math.sin(angle) * distance

                    return (
                      <span
                        key={i}
                        className="burst-petal"
                        style={{
                          '--x': `${x}px`,
                          '--y': `${y}px`
                        } as React.CSSProperties}
                      />
                    )
                  })}
                </div>
              )}
            </div>

            {/* Scratch Canvas */}
            <canvas
              ref={canvasRef}
              className={`absolute inset-0 w-full h-full cursor-pointer touch-none ${isRevealed ? 'opacity-0 pointer-events-none' : ''
                } transition-opacity duration-500`}
              /*onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}*/
              onMouseDown={(e) => {
                    setIsDrawing(true)
                    scratch(e.clientX, e.clientY)
                  }}
                  onMouseMove={(e) => isDrawing && scratch(e.clientX, e.clientY)}
                  onMouseUp={() => setIsDrawing(false)}
                  onMouseLeave={() => setIsDrawing(false)}
                  onTouchStart={(e) => {
                    setIsDrawing(true)
                    scratch(e.touches[0].clientX, e.touches[0].clientY)
                  }}
                  onTouchMove={(e) =>
                    isDrawing && scratch(e.touches[0].clientX, e.touches[0].clientY)
                  }
                  onTouchEnd={() => setIsDrawing(false)}
            />
          </div>

          {/* Progress indicator */}
          {!isRevealed && (
            <div className="space-y-2">
              <div className="w-full bg-primary/20 rounded-full h-2">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${revealPercentage}%` }}
                />
              </div>
              <p className="text-center text-xs text-foreground/60">
                Keep scratching...
              </p>
            </div>
          )}

          {/* Success message */}
          {isRevealed && (
            <p className="text-center font-serif text-xl sm:text-2xl md:text-3xl text-primary">
                  🎉 Mark your calendars! 🎉
                </p>
          )}
          </div>
        </div>
        </div>

        {/* Decorative footer */}
        <FloralDivider className="mt-12" />
      </div>
    </section>
  )
}
