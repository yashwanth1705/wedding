'use client'

import React, { useState } from 'react'
import { supabase } from '@/utils/supabase/client'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
}

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attending: 'yes',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.email.trim()) newErrors.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }



  // ...

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)

    try {
      const { error } = await supabase
        .from('rsvps')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            guests: parseInt(formData.guests),
            attending: formData.attending,
            message: formData.message,
          },
        ])

      if (error) {
        throw error
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      alert('There was an error submitting your RSVP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 sm:py-20 px-4 animate-fade-in">
        <h3 className="text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 text-white">Thank You</h3>
        <p className="text-white/60 text-base sm:text-lg mb-6 sm:mb-8">
          We have received your response and look forward to celebrating with you.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs sm:text-sm uppercase tracking-widest border-b border-white/50 pb-1 hover:border-white transition-colors text-white"
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/50 mb-3 sm:mb-4">
          We await your presence
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 text-white">RSVP</h2>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-white/40">
          Kindly respond by June 1st, 2026
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12 max-w-2xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full py-3 sm:py-4 bg-transparent border-b border-white/30 focus:border-white outline-none transition-colors text-base sm:text-lg placeholder:text-white/40 group-hover:border-white/50 text-white"
            />
            {errors.name && <p className="text-red-400 text-xs mt-2 absolute">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full py-3 sm:py-4 bg-transparent border-b border-white/30 focus:border-white outline-none transition-colors text-base sm:text-lg placeholder:text-white/40 group-hover:border-white/50 text-white"
            />
            {errors.email && <p className="text-red-400 text-xs mt-2 absolute">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="relative group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              className="w-full py-3 sm:py-4 bg-transparent border-b border-white/30 focus:border-white outline-none transition-colors text-base sm:text-lg placeholder:text-white/40 group-hover:border-white/50 text-white"
            />
          </div>

          {/* Number of Guests */}
          <div className="relative group">
            <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-2 sm:mb-3">
              Number of Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full py-3 sm:py-4 bg-transparent border-b border-white/30 focus:border-white outline-none transition-colors text-base sm:text-lg text-white cursor-pointer appearance-none"
              style={{ backgroundImage: 'none' }}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num} className="bg-neutral-900 text-white">
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          {/* Attending */}
          <div className="relative">
            <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mb-3 sm:mb-4">
              Will you be attending?
            </label>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {['yes', 'no'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 border rounded-full flex items-center justify-center transition-colors ${formData.attending === option ? 'border-white bg-white' : 'border-white/30 group-hover:border-white/60'
                    }`}>
                    {formData.attending === option && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full" />}
                  </div>
                  <input
                    type="radio"
                    name="attending"
                    value={option}
                    checked={formData.attending === option}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-sm sm:text-base text-white capitalize">{option === 'yes' ? 'Joyfully Accept' : 'Regretfully Decline'}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message for the couple (Optional)"
              rows={3}
              className="w-full py-3 sm:py-4 bg-transparent border-b border-white/30 focus:border-white outline-none transition-colors text-base sm:text-lg placeholder:text-white/40 group-hover:border-white/50 resize-none text-white"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4 sm:pt-8">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Send Response'}
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10 text-center">
        <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">For any questions, please contact</p>
        <div className="space-y-1 sm:space-y-2">
          <p className="text-sm sm:text-base text-white">
            <a href="mailto:yashwanthrathnam@gmail.com" className="hover:underline break-all">
              yashwanthrathnam@gmail.com
            </a>
          </p>
          <p className="text-sm sm:text-base text-white">
            <a href="tel:+919074563362" className="hover:underline">
              +91 90745 63362
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
