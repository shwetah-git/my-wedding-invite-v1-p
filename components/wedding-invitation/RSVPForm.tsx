'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { FloralDivider } from './LotusPattern'

interface RSVPFormState {
  name: string
  attendance: 'yes' | 'no' | 'maybe'
  guests: string
  message: string
}

export function RSVPForm() {
  const [formData, setFormData] = useState<RSVPFormState>({
    name: '',
    attendance: 'yes',
    guests: '1',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoading) return //prevent double submit immediately 

    if (!validateForm()) return
    
    setIsLoading(true)

    try {
      // Simulate API call
      const response = await fetch('https://script.google.com/macros/s/AKfycbyIZtO2yx3GtbISZYScFczMsuEHF-qtAAxc04jKjV7X3VATOKu1Gl2mr--llF8VCKNi/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'no-cors',
      })

      setSubmitted(true)
      setFormData({
        name: '',
        attendance: 'yes',
        guests: '1',
        message: ''
      })

    } catch (err) {
      setError('Failed to submit RSVP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="w-full px-4 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-primary/10 text-center space-y-6 animate-fade-in-up">
            <CheckCircle className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-primary mx-auto" />
            <h2 className="font-serif text-2xl md:text-3xl text-primary">
              Thank You!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70">
              We've received your RSVP and can't wait to celebrate with you!
            </p>
            <div className="pt-4">
              <p className="font-serif text-lg text-primary/80">
                💕 See you at the ceremony! 💕
              </p>
            </div>
          </div>
          <FloralDivider className="mt-12" />
        </div>
      </section>
    )
  }

  return (
    <section className="w-full px-4 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary mb-4">
            RSVP
          </h2>
          <p className="text-foreground/70">
            Kindly confirm
          </p>
          <FloralDivider />
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10 space-y-6"
        >
          {/* Error Message */}
          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 animate-fade-in">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 text-sm rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
              required
            />
          </div>

          {/* Attendance Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Will you be attending? *
            </label>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              {['yes', 'no', 'maybe'].map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    checked={formData.attendance === option}
                    onChange={handleInputChange}
                    className="w-4 h-4 cursor-pointer accent-primary"
                  />
                  <span className="capitalize text-sm text-foreground/70">
                    {option === 'yes' ? '✓ Yes, I\'ll be there' : option === 'no' ? '✗ Unable to attend' : '? Still deciding'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Number of Guests */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Number of Guests *
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="w-full px-4 py-3 text-sm rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Special Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Share your thoughts, wishes, or any special requests..."
              rows={3}
              className="w-full px-4 py-3 text-sm rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-serif text-sm sm:text-base md:text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-default disabled:pointer-events-none flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit RSVP
              </>
            )}
          </button>
        </form>

        {/* Decorative footer */}
        <FloralDivider className="mt-12" />
      </div>
    </section>
  )
}
