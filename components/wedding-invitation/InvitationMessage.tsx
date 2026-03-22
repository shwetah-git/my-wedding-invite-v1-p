'use client'

import { LotusPattern, FloralDivider } from './LotusPattern'
//import { pinyon } from '@/app/font'

export function InvitationMessage() {
  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-2xl mx-auto">
        {/* CARD */}
        <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-primary/10 space-y-6 sm:space-y-8 overflow-hidden">
          {/* Floating petals */}
          <div className="petals-2 absolute inset-0 pointer-events-none">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${12 + Math.random() * 10}s`
                  }}
                ></span>
              ))}
            </div>
          {/* Decorative header */}
          <div className="flex justify-center">
            <LotusPattern size="md" color="primary" />
          </div>

          {/* Main invitation text */}
          <div className="space-y-5 sm:space-y-6 text-center">
            <p className="font-serif text-base text-lg md:text-xl text-foreground/80 leading-relaxed px-2">
              You are cordially invited to share in the sacred union of
            </p>

            <div className="py-2 sm:py-4">
              <p className={`text-3xl sm:text-4xl md:text-5xl leading-tight break-words mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 
                via-yellow-400 to-yellow-700`} style={{ fontFamily: 'Pinyon Script, cursive' }}>
                Ms. Shweta Hegade
              </p>
              <p className="text-xs sm:text-sm text-foreground/60 mb-3 px-2">
                daughter of Mr. and Mrs. Uttam Pralhad Hegade
              </p>

              <p className="text-lg sm:text-xl text-primary/60 font-serif">
                &
              </p>

              <p className={`text-3xl sm:text-4xl md:text-5xl leading-tight break-words mt-3 mb-2 text-transparent bg-clip-text bg-gradient-to-r 
                from-yellow-700 via-yellow-400 to-yellow-700`} style={{ fontFamily: 'Pinyon Script, cursive' }}>
                Mr. Tejas Pandhare
              </p>
              <p className="text-xs sm:text-sm text-foreground/60 px-2">
                son of Mr. and Mrs. Suresh Dattu Pandhare
              </p>
            </div>

            <FloralDivider className="my-4 sm:my-6" />

            {/* Traditional blessing */}
            <div className="space-y-3 sm:space-y-4 px-2 sm:px-4">

              <p className="text-sm sm:text-base md:text-lg text-center text-foreground/90 leading-relaxed">
                In the presence of family and cherished friends, we celebrate the new begining of a lifetime of beautiful memories together.
                <br/>Join us as we honor love, tradition, and the promise of tomorrow.
              </p>
            </div>

            {/* Closing remarks */}
              <div className="pt-2 sm:pt-4">
                <p className="text-sm sm:text-base text-foreground/80">
                  We request the honor of your presence and blessings!
                </p>
              </div>
            </div>

            {/* Decorative footer */}
            <div className="flex justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-primary/30 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-l from-primary/30 to-transparent" />
            </div>
          </div>

        {/* Decorative elements below card */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          <LotusPattern size="sm" color="accent" />
          <LotusPattern size="sm" color="secondary" />
          <LotusPattern size="sm" color="accent" />
        </div>
      </div>
    </section>
  )
}
