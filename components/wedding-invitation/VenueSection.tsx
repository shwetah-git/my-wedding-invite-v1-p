'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { FloralDivider } from './LotusPattern'

interface VenueSectionProps {
  venueName?: string
  address?: string
  city?: string
  mapUrl?: string
}

export function VenueSection({
  venueName = 'Muktais Imperial Banquets and Lawns',
  address = '5JC2+3G7, ISKON Temple Rd, Baramati, Maharashtra 413133',
  city = 'Baramati',
  mapUrl = 'https://maps.app.goo.gl/ec3w92J1SwAgeLPAA'
}: VenueSectionProps) {
  const [showMap, setShowMap] = useState(false)

  return (
    <section className="w-full px-4 py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Our Venue
          </h2>
          <FloralDivider />
        </div>

        {/* Venue Card */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-primary/10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-0">
            {/* Venue Image */}
            <div className="relative h-64 md:h-auto md:min-h-[320px] rounded-t-2xl md:rounded-t-none md:rounded-l-2xl overflow-hidden">
              <Image
                src="/Imperial-photo.jpeg"
                alt={venueName}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Venue Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                {/* Venue Name */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl break-words">
                    {venueName}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>

                {/* Address */}
                <div className="flex gap-3 sm:gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground/70 break-words">{address}</p>
                    <p className="text-foreground/70 break-words">{city}</p>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <button
                onClick={() => setShowMap(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-serif rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50 w-full sm:w-auto"
              >
                <MapPin size={20} />
                View on Map
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Map Modal */}
        {showMap && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4 rounded-2xl">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="p-6 border-b border-primary/20 flex justify-between items-center">
                <h3 className="font-serif text-2xl text-primary">
                  {venueName}
                </h3>
                <button
                  onClick={() => setShowMap(false)}
                  className="text-foreground/60 hover:text-foreground transition-colors text-2xl"
                  aria-label="Close map"
                >
                  ×
                </button>
              </div>

              {/* Map Container */}
              <div className="w-full h-64 sm:h-80 md:h-96 flex-shrink-0">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15163.475968834431!2d74.58313568715819!3d18.169948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc39f3d67eb2f13%3A0xe1393ec905ba5b82!2sMuktai&#39;s%20Imperial%20Banquets%20and%20Lawns!5e0!3m2!1sen!2sin!4v1773292752588!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  title="Venue location map"
                />
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-primary/20 space-y-2">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Open in Google Maps
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => setShowMap(false)}
                  className="w-full px-3 py-1 bg-secondary/50 text-foreground rounded-lg hover:bg-secondary transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Decorative footer */}
        <FloralDivider className="mt-12" />
      </div>
    </section>
  )
}
