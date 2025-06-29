'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock, Shield } from 'lucide-react'

interface ServiceArea {
  name: string
  zip: string
  response: string
  active?: boolean
  coordinates?: { x: string; y: string }
  highlight?: boolean
}

export function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState<string | null>('Jackson')
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  const serviceAreas: ServiceArea[] = [
    {
      name: 'Jackson',
      zip: '39201-39296',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '50%', y: '50%' },
      highlight: true
    },
    {
      name: 'Madison',
      zip: '39110',
      response: 'Same Day Service',
      active: true,
      coordinates: { x: '50%', y: '25%' }
    },
    {
      name: 'Ridgeland',
      zip: '39157-39158',
      response: 'Same Day Service',
      active: true,
      coordinates: { x: '55%', y: '35%' }
    },
    {
      name: 'Pearl',
      zip: '39208',
      response: 'Next Day Service',
      active: true,
      coordinates: { x: '65%', y: '55%' }
    },
    {
      name: 'Brandon',
      zip: '39042-39047',
      response: 'Next Day Service',
      active: true,
      coordinates: { x: '75%', y: '50%' }
    },
    {
      name: 'Flowood',
      zip: '39232',
      response: 'Same Day Service',
      active: true,
      coordinates: { x: '65%', y: '45%' }
    },
    {
      name: 'Clinton',
      zip: '39056',
      response: 'Next Day Service',
      coordinates: { x: '30%', y: '45%' }
    },
    {
      name: 'Byram',
      zip: '39272',
      response: 'Next Day Service',
      coordinates: { x: '45%', y: '70%' }
    },
  ]

  const getAreaDetails = (areaName: string) => {
    return serviceAreas.find(area => area.name === areaName)
  }

  const selectedAreaDetails = selectedArea ? getAreaDetails(selectedArea) : null

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-wide"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            SERVICE COVERAGE MAP
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional roofing services across the Greater Jackson Metro Area with guaranteed response times
          </p>
        </div>

        {/* Main Map Container */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive Map */}
            <div className="lg:col-span-2">
              <div className="relative h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-inner">
                {/* Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Service Area Zones */}
                <div className="absolute inset-0">
                  {/* Emergency Zone */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-red-500/10 border-2 border-red-500/30 animate-pulse" />

                  {/* Same Day Zone */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/10 border-2 border-blue-500/30 border-dashed" />

                  {/* Extended Zone */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gray-500/10 border-2 border-gray-500/30 border-dotted" />
                </div>

                {/* City Markers */}
                {serviceAreas.map((area) => (
                  <div
                    key={area.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${
                      selectedArea === area.name ? 'z-30' : 'z-20'
                    }`}
                    style={{
                      left: area.coordinates?.x || '50%',
                      top: area.coordinates?.y || '50%'
                    }}
                    onClick={() => setSelectedArea(area.name)}
                    onMouseEnter={() => setHoveredArea(area.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                  >
                    {/* Marker */}
                    <div className={`relative ${selectedArea === area.name || hoveredArea === area.name ? 'scale-125' : ''} transition-transform`}>
                      {/* Pulse Effect for Active Areas */}
                      {area.active && (
                        <div className="absolute inset-0 animate-ping">
                          <div className={`w-full h-full rounded-full ${
                            area.highlight ? 'bg-red-500' : 'bg-blue-500'
                          } opacity-20`}></div>
                        </div>
                      )}

                      {/* Main Marker */}
                      <div className={`relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        area.highlight
                          ? 'bg-red-600 ring-4 ring-red-500/30'
                          : selectedArea === area.name
                          ? 'bg-blue-600 ring-4 ring-blue-500/30'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}>
                        {area.highlight && (
                          <MapPin className="w-3 h-3 text-white" />
                        )}
                      </div>

                      {/* Label */}
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity ${
                        selectedArea === area.name || hoveredArea === area.name ? 'opacity-100' : 'opacity-60'
                      }`}>
                        <span className="text-xs font-medium text-white bg-gray-900/80 px-2 py-1 rounded">
                          {area.name}
                        </span>
                      </div>
                    </div>

                    {/* Hover Tooltip */}
                    {hoveredArea === area.name && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 animate-fadeIn">
                        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl text-xs whitespace-nowrap">
                          <div className="font-semibold">{area.name}</div>
                          <div className="text-gray-400">{area.response}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">24/7 Emergency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">Same Day Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-gray-300">Standard Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Details Panel */}
            <div className="space-y-4">
              {/* Selected Area Details */}
              {selectedAreaDetails && (
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{selectedAreaDetails.name}</h3>
                    {selectedAreaDetails.active && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">ZIP: {selectedAreaDetails.zip}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className={`text-sm font-medium ${
                        selectedAreaDetails.response === '24/7 Emergency'
                          ? 'text-red-400'
                          : selectedAreaDetails.response === 'Same Day Service'
                          ? 'text-blue-400'
                          : 'text-gray-300'
                      }`}>
                        {selectedAreaDetails.response}
                      </span>
                    </div>

                    {selectedAreaDetails.response === '24/7 Emergency' && (
                      <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <p className="text-xs text-red-400">
                          Emergency crews on standby for immediate response
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Response Time Guide */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  Response Time Guide
                </h4>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-sm font-medium text-white">24/7 Emergency</p>
                      <p className="text-xs text-gray-400">Immediate response for storm damage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-sm font-medium text-white">Same Day Service</p>
                      <p className="text-xs text-gray-400">Service within 8 business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-sm font-medium text-white">Next Day Service</p>
                      <p className="text-xs text-gray-400">Service within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-red-500/20" />
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-white mb-3">Need Service?</h4>
                  <p className="text-red-100 text-sm mb-4">
                    Get in touch for a free estimate
                  </p>

                  <a
                    href="tel:6017570740"
                    className="w-full bg-white text-red-600 py-3 px-6 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    601-757-0740
                  </a>

                  <p className="text-xs text-red-200 mt-3 text-center">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-xs text-gray-400 mt-1">Active Areas</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400">24/7</div>
              <div className="text-xs text-gray-400 mt-1">Emergency Service</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">50+</div>
              <div className="text-xs text-gray-400 mt-1">Miles Coverage</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">98%</div>
              <div className="text-xs text-gray-400 mt-1">On-Time Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
