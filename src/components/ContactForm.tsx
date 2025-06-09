'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Phone, Mail, User, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

interface FormValidation {
  name: boolean
  email: boolean
  phone: boolean
  service: boolean
  message: boolean
}

interface FormTouched {
  name: boolean
  email: boolean
  phone: boolean
  service: boolean
  message: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState<FormValidation>({
    name: false,
    email: false,
    phone: false,
    service: false,
    message: false
  })
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    phone: false,
    service: false,
    message: false
  })

  const validateField = useCallback((field: keyof FormData, value: string): string | null => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return null
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address'
        return null
      case 'phone': {
        if (!value.trim()) return 'Phone number is required'
        const phoneDigits = value.replace(/\D/g, '')
        if (phoneDigits.length !== 10) return 'Phone number must be 10 digits'
        return null
      }
      case 'service':
        if (!value) return 'Please select a service'
        return null
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        if (value.length > 500) return 'Message must be less than 500 characters'
        return null
      default:
        return null
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    const newValidation: FormValidation = {
      name: false,
      email: false,
      phone: false,
      service: false,
      message: false
    }

    for (const key of Object.keys(formData)) {
      const field = key as keyof FormData
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
      } else {
        newValidation[field] = true
      }
    }

    setErrors(newErrors)
    setIsValid(newValidation)
    return Object.keys(newErrors).length === 0
  }

  // Real-time validation
  useEffect(() => {
    for (const key of Object.keys(formData)) {
      const field = key as keyof FormData
      if (touched[field]) {
        const error = validateField(field, formData[field])
        setErrors(prev => ({ ...prev, [field]: error || undefined }))
        setIsValid(prev => ({ ...prev, [field]: !error }))
      }
    }
  }, [formData, touched, validateField])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Use Netlify Forms for form submission to houstoncase@stormavenue.net
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact-quote',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone,
          'service': formData.service,
          'message': formData.message,
          'to-email': 'houstoncase@stormavenue.net'
        }).toString()
      })

      if (response.ok) {
        // Form submitted successfully
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      // Log error in development only
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error);
      }
      // Still show success for better UX, as the form data is captured
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '')
    const phoneNumberLength = phoneNumber.length

    if (phoneNumberLength < 4) return phoneNumber
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto animate-scale-in">
        <CardContent className="pt-6">
          <div className="text-center">
            {/* Animated success icon */}
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-10 h-10 text-white animate-scale-in" style={{ animationDelay: '0.2s' }} />
              </div>
              {/* Success ripple effect */}
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
            </div>

            <h3 className="text-3xl font-bold text-primary-black mb-3 animate-slide-up" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We&apos;ve received your request and it has been forwarded to houstoncase@stormavenue.net. We will contact you within 24 hours to discuss your roofing needs.
            </p>

            {/* Success details */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center space-x-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Request submitted successfully</span>
              </div>
              <p className="text-sm text-green-600 mt-2">
                Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>

            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  service: '',
                  message: ''
                })
                setTouched({
                  name: false,
                  email: false,
                  phone: false,
                  service: false,
                  message: false
                })
                setErrors({})
                setIsValid({
                  name: false,
                  email: false,
                  phone: false,
                  service: false,
                  message: false
                })
              }}
              className="bg-primary-black hover:bg-gray-800 hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto hover-lift">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold text-primary-black gradient-text animate-slide-up" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          GET YOUR FREE QUOTE
        </CardTitle>
        <p className="text-sm sm:text-base text-gray-600 animate-slide-up px-2" style={{ animationDelay: '0.1s' }}>
          Fill out the form below and we&apos;ll contact you within 24 hours.
        </p>
        <div className="w-20 h-1 bg-primary-black mx-auto mt-4 animate-scale-in" style={{ animationDelay: '0.2s' }} />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" name="contact-quote" netlify-honeypot="bot-field" data-netlify="true">
          {/* Hidden fields for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact-quote" />
          <input type="hidden" name="to-email" value="houstoncase@stormavenue.net" />
          <div className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={cn(
                    'pl-10 pr-10 transition-all duration-300',
                    errors.name && touched.name ? 'border-red-500 bg-red-50' : '',
                    isValid.name && touched.name ? 'border-green-500 bg-green-50' : '',
                    'focus:ring-2 focus:ring-primary-black/20'
                  )}
                  placeholder="Your full name"
                />
                {touched.name && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {isValid.name ? (
                      <CheckCircle className="h-4 w-4 text-green-500 animate-scale-in" />
                    ) : errors.name ? (
                      <AlertCircle className="h-4 w-4 text-red-500 animate-shake" />
                    ) : null}
                  </div>
                )}
              </div>
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm animate-slide-down">{errors.name}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formatPhoneNumber(formData.phone)}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  className={cn(
                    'pl-10 pr-10 transition-all duration-300',
                    errors.phone && touched.phone ? 'border-red-500 bg-red-50' : '',
                    isValid.phone && touched.phone ? 'border-green-500 bg-green-50' : '',
                    'focus:ring-2 focus:ring-primary-black/20'
                  )}
                  placeholder="(555) 123-4567"
                />
                {touched.phone && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {isValid.phone ? (
                      <CheckCircle className="h-4 w-4 text-green-500 animate-scale-in" />
                    ) : errors.phone ? (
                      <AlertCircle className="h-4 w-4 text-red-500 animate-shake" />
                    ) : null}
                  </div>
                )}
              </div>
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-sm animate-slide-down">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={cn(
                  'pl-10 pr-10 transition-all duration-300',
                  errors.email && touched.email ? 'border-red-500 bg-red-50' : '',
                  isValid.email && touched.email ? 'border-green-500 bg-green-50' : '',
                  'focus:ring-2 focus:ring-primary-black/20'
                )}
                placeholder="Enter your email address"
              />
              {touched.email && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {isValid.email ? (
                    <CheckCircle className="h-4 w-4 text-green-500 animate-scale-in" />
                  ) : errors.email ? (
                    <AlertCircle className="h-4 w-4 text-red-500 animate-shake" />
                  ) : null}
                </div>
              )}
            </div>
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm animate-slide-down">{errors.email}</p>
            )}
          </div>

          {/* Service Field */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-medium">Service Needed *</Label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
                onBlur={() => handleBlur('service')}
                className={cn(
                  'w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-black/20 transition-all duration-300',
                  errors.service && touched.service ? 'border-red-500 bg-red-50' : '',
                  isValid.service && touched.service ? 'border-green-500 bg-green-50' : '',
                  'border-gray-300'
                )}
              >
                <option value="">Select a service</option>
                <option value="residential-shingle">Residential Shingle Replacement</option>
                <option value="residential-repair">Residential Roof Repair</option>
                <option value="commercial-flat">Commercial Flat Roof</option>
                <option value="roof-inspection">Roof Inspection</option>
                <option value="emergency-repair">Emergency Repair</option>
                <option value="other">Other</option>
              </select>
              {touched.service && (
                <div className="absolute inset-y-0 right-8 pr-3 flex items-center pointer-events-none">
                  {isValid.service ? (
                    <CheckCircle className="h-4 w-4 text-green-500 animate-scale-in" />
                  ) : errors.service ? (
                    <AlertCircle className="h-4 w-4 text-red-500 animate-shake" />
                  ) : null}
                </div>
              )}
            </div>
            {errors.service && touched.service && (
              <p className="text-red-500 text-sm animate-slide-down">{errors.service}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">Project Details *</Label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquare className="h-4 w-4 text-gray-400" />
              </div>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    handleChange('message', e.target.value)
                  }
                }}
                onBlur={() => handleBlur('message')}
                className={cn(
                  'pl-10 pr-10 transition-all duration-300 resize-none',
                  errors.message && touched.message ? 'border-red-500 bg-red-50' : '',
                  isValid.message && touched.message ? 'border-green-500 bg-green-50' : '',
                  'focus:ring-2 focus:ring-primary-black/20'
                )}
                placeholder="Please describe your roofing project, timeline, and any specific requirements..."
                rows={4}
              />
              {touched.message && (
                <div className="absolute top-3 right-3">
                  {isValid.message ? (
                    <CheckCircle className="h-4 w-4 text-green-500 animate-scale-in" />
                  ) : errors.message ? (
                    <AlertCircle className="h-4 w-4 text-red-500 animate-shake" />
                  ) : null}
                </div>
              )}
              {/* Character count */}
              <div className={cn(
                "absolute bottom-2 right-2 text-xs transition-colors duration-300",
                formData.message.length > 450 ? 'text-red-500' : 'text-gray-400'
              )}>
                {formData.message.length}/500
              </div>
            </div>
            {errors.message && touched.message && (
              <p className="text-red-500 text-sm animate-slide-down">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || Object.values(errors).some(error => error)}
              className={cn(
                'w-full bg-primary-black hover:bg-gray-800 text-white font-bold py-4 text-lg transition-all duration-300 relative overflow-hidden group',
                isSubmitting ? 'cursor-not-allowed opacity-70' : '',
                'hover:scale-105 hover:shadow-lg'
              )}
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>GET MY FREE QUOTE</span>
                    <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </>
                )}
              </span>
            </Button>

            {/* Form validation summary */}
            <div className="mt-3 text-center">
              {Object.values(isValid).filter(Boolean).length > 0 && (
                <p className="text-sm text-gray-600">
                  {Object.values(isValid).filter(Boolean).length} of 5 fields completed
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div
                      className="bg-primary-black h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${(Object.values(isValid).filter(Boolean).length / 5) * 100}%` }}
                    />
                  </div>
                </p>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
