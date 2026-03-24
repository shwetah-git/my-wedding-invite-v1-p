'use client'

import { Clock, Wine, Music, Utensils } from 'lucide-react'
import { FloralDivider } from './LotusPattern'

interface TimelineEvent {
  time: string
  title: string
  description: string
  icon: React.ReactNode
}

interface TimelineSectionProps {
  events?: TimelineEvent[]
}

const defaultEvents: TimelineEvent[] = [
  {
    time: '9:00 AM',
    title: 'साखरपुडा : The Sacred Betrothal',
    description: 'A union blessed by both families',
    icon: <img src="/Sakharpuda-icon-2.jpg" alt="Sakharpuda ceremony icon" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"/>
  },
  {
    time: '11:00 AM',
    title: 'हळद : The Golden Benediction',
    description: 'Let us crown the couple in radiance and grace',
    icon: <img src="/Halad-icon.jpeg" alt="Halad ceremony icon" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"/>
  },
  {
    time: '4:30 PM',
    title: 'मंगलाष्टके : The Divine Ode',
    description: 'to the holy matrimonial bond',
    icon: <img src="/Varmala-icon.jpeg" alt="Mangalshtake ceremony icon" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"/>
  },
  {
    time: '4:30 PM onwards',
    title: 'Wedding Feast',
    description: 'Delicious Maharashtrian cuisine and celebration',
    icon: <img src="/Wedding-feast.jpeg" alt="Food icon" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"/>
  }
]

export function TimelineSection({ events = defaultEvents }: TimelineSectionProps) {
  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="relative max-w-3xl mx-auto overflow-hidden rounded-2xl bg-fixed md:bg-fixed bg-scroll will-change-transform"
      style={{
        backgroundImage: 'url(/733.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-white/10 z-0"></div>
      <div className="relative z-10">
        <div className="text-center mt-8 sm:mt-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-2 text-primary">
            Tapestry of Ceremonies
          </h2>
          <FloralDivider />
        </div>

        {/* Timeline Container */}
        <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-12 shadow-lg border border-primary/10">
        <p className="text-xs sm:text-sm md:text-base text-center text-purple-900/70">
          "All our wedding rituals will take place within a single day!"
        </p>
          <div className="space-y-8 sm:space-y-10">
            {events.map((event, index) => (
              <div key={index} className="pb-8 border-b border-primary/10 last:border-none">
                {/* Timeline marker and line */}
                <div className="flex sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  
                  <div className="flex flex-col items-center relative">
                    {/* Icon circle */}
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center shadow-lg 
                      border border-yellow-200 mt-8 sm:mt-12"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {event.icon}
                    </div>

                    {/* Connecting line */}
                    {index !== events.length - 1 && (
                      <div className="sm:block w-1 h-full bg-primary/70" />
                    )}
                  </div>

                  {/* Event content */}
                  <div
                    className="sm:text-left pt-2 animate-slide-in-right"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-2 sm:space-y-4 mt-4 sm:mt-8">
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-white">
                        {event.time}
                      </p>
                      <h3 className="font-serif text-base sm:text-lg md:text-xl text-foreground break-words">
                        <span style={{ fontFamily: 'Noto Serif Devanagari, serif' }}>
                          {/*{event.title.split(':')[0]} : {event.title.split(':')[1]}*/}
                          {event.title}
                        </span>
                      </h3>
                      <p className="text-sm sm:text-base text-purple-900">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/5 rounded-xl text-center">
            <p className="text-xs sm:text-sm text-color-dark-purple/90">
              ✨ Bless us with your presence. Shower us with your grace. ✨
            </p>
          </div>
        </div>

        {/* Decorative footer */}
        <FloralDivider className="mt-8 sm:mt-12" />
        </div>
      </div>
    </section>
  )
}
