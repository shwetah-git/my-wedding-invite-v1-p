'use client'

import { useState, useEffect } from 'react'
import { WeddingIntroduction } from '@/components/wedding-invitation/WeddingIntroduction'
import { HeroSection } from '@/components/wedding-invitation/HeroSection'
import { InvitationMessage } from '@/components/wedding-invitation/InvitationMessage'
import { ScratchOffDate } from '@/components/wedding-invitation/ScratchOffDate'
import { VenueSection } from '@/components/wedding-invitation/VenueSection'
import { TimelineSection } from '@/components/wedding-invitation/TimelineSection'
import { RSVPForm } from '@/components/wedding-invitation/RSVPForm'

export default function Home() {

  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [showHero, setShowHero] = useState(false)

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true)
    setIsOpening(true)

  //   setTimeout(() => {
  //   setIsInvitationOpen(true)
  // }, 1000)

  }
  const handleStart = () => {
  setShowHero(true)
  }
  useEffect(() => {
    // If user directly lands on homepage, clear old value
    localStorage.removeItem('guestSide')
  }, [])


  return (
    <main className="relative min-h-screen overflow-hidden">

  {/* HERO (background layer) */}
  <div
    className={`absolute inset-0 transition-opacity ${
      showHero  ? "opacity-100" : "opacity-0"
    }`}
  >
    <HeroSection isVisible={showHero} /> 
  </div>

  {/* INTRO (top layer) */}
  <div
    className={`absolute inset-0 transition-all ${
      isInvitationOpen
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }`}
  >
    {/*<WeddingIntroduction onOpen={handleOpenInvitation} />*/}
    <WeddingIntroduction onOpen={handleOpenInvitation} onStart={handleStart}/>
  </div>

  {/* REST OF CONTENT */}
  {isInvitationOpen && (
    <div className="relative z-10 mt-[100vh]">
      <InvitationMessage />
      <ScratchOffDate day="4" month="May" year="2026" />
      <VenueSection
        venueName="Muktai's Imperial Banquet and Lawns"
        address="5JC2+3G7, ISKON Temple Rd, Baramati, Maharashtra, 413133"
        city="Baramati"
      />
      <TimelineSection />
      <RSVPForm />

      <footer className="w-full px-4 py-12 md:py-16 bg-primary/5 text-center border-t border-primary/10">
        <p className="text-foreground/60 text-sm md:text-base">
          Thank you for being a part of our story
        </p>
        <p className="text-primary font-serif text-lg mt-2">
          Shweta & Tejas
        </p>
        <p className="text-foreground/50 text-xs mt-4">
          © 2026 Our Wedding. All love reserved. 💕
        </p>
      </footer>
    </div>
  )}

</main>
    
  )
}
