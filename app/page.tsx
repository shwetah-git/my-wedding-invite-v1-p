'use client'

import { useState } from 'react'
import { WeddingIntroduction } from '@/components/wedding-invitation/WeddingIntroduction'
import { HeroSection } from '@/components/wedding-invitation/HeroSection'
import { InvitationMessage } from '@/components/wedding-invitation/InvitationMessage'
import { ScratchOffDate } from '@/components/wedding-invitation/ScratchOffDate'
import { VenueSection } from '@/components/wedding-invitation/VenueSection'
import { TimelineSection } from '@/components/wedding-invitation/TimelineSection'
import { RSVPForm } from '@/components/wedding-invitation/RSVPForm'

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true)
    // Show Hero after intro fades
    setTimeout(() => {
      setShowHero(true)
    }, 400)

    // Show rest of content later (cinematic delay)
    setTimeout(() => {
      setShowContent(true)
    }, 500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      {/*}
      {!isInvitationOpen ? (
        <WeddingIntroduction onOpen={handleOpenInvitation} />
      ) : (
        <div className="space-y-0">
          <HeroSection isVisible={isInvitationOpen} />
          <InvitationMessage />
          <ScratchOffDate day="4" month="May" year="2026" />
          <VenueSection
            venueName="Muktai's Imperial Banquet and Lawns"
            address="5JC2+3G7, ISKON Temple Rd, Baramati, Maharashtra 413133"
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
      )}*/}
      {/* Intro */}
      {!isInvitationOpen && (
        <WeddingIntroduction onOpen={handleOpenInvitation} />
      )}

      {/* Hero Section */}
      {showHero && (
        <HeroSection isVisible={showHero} />
      )}

      {/* Rest of content */}
      {showContent && (
        <div className="space-y-0">
          <InvitationMessage />
          <ScratchOffDate day="4" month="May" year="2026" />
          <VenueSection
            venueName="Muktai's Imperial Banquet and Lawns"
            address="5JC2+3G7, ISKON Temple Rd, Baramati, Maharashtra 413133"
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
