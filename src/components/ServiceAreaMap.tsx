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
      coordinates: { x: '50%', y: '35%' },
      highlight: true
    },
    {
      name: 'Hattiesburg',
      zip: '39401-39407',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '65%', y: '70%' }
    },
    {
      name: 'McComb',
      zip: '39648-39649',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '35%', y: '70%' }
    },
    {
      name: 'Vicksburg',
      zip: '39180-39183',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '20%', y: '30%' }
    },
    {
      name: 'Madison',
      zip: '39110',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '50%', y: '25%' }
    },
    {
      name: 'Gluckstadt',
      zip: '39110',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '48%', y: '20%' }
    },
    {
      name: 'Ridgeland',
      zip: '39157-39158',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '55%', y: '30%' }
    },
    {
      name: 'Pearl',
      zip: '39208',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '60%', y: '40%' }
    },
    {
      name: 'Brandon',
      zip: '39042-39047',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '65%', y: '35%' }
    },
    {
      name: 'Florence',
      zip: '39073',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '70%', y: '40%' }
    },
    {
      name: 'Flowood',
      zip: '39232',
      response: '24/7 Emergency',
      active: true,
      coordinates: { x: '60%', y: '35%' }
    },
    {
      name: 'Clinton',
      zip: '39056',
      response: '24/7 Emergency',
      coordinates: { x: '40%', y: '35%' }
    },
    {
      name: 'Byram',
      zip: '39272',
      response: '24/7 Emergency',
      coordinates: { x: '45%', y: '45%' }
    },
    {
      name: 'Brookhaven',
      zip: '39601-39603',
      response: '24/7 Emergency',
      coordinates: { x: '40%', y: '55%' }
    },
    {
      name: 'Laurel',
      zip: '39440-39443',
      response: '24/7 Emergency',
      coordinates: { x: '75%', y: '60%' }
    }
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
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">24/7 emergency roofing services across Mississippi</p>
        </div>

        {/* Main Map Container */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive Map */}
            <div className="lg:col-span-2">
              <div className="relative h-[500px] bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 rounded-2xl overflow-hidden shadow-inner">
                {/* Topographic Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="50" cy="50" r="10" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.3" />
                      </pattern>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1f2937" />
                        <stop offset="50%" stopColor="#111827" />
                        <stop offset="100%" stopColor="#030712" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGradient)" />
                    <rect width="100%" height="100%" fill="url(#topo)" />
                  </svg>
                </div>

                {/* Weather Radar Overlay */}
                {/* Rivers and Water Features */}
                <svg className="absolute inset-0 w-full h-full opacity-40">
                  <defs>
                    <linearGradient id="riverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  {/* Pearl River */}
                  <path
                    d="M 25,10 Q 30,25 35,35 T 40,50 Q 42,65 38,75 T 30,95"
                    fill="none"
                    stroke="url(#riverGradient)"
                    strokeWidth="3"
                    className="animate-pulse"
                    style={{ animationDuration: '8s' }}
                  />
                  {/* Big Black River */}
                  <path
                    d="M 60,5 Q 55,20 50,30 T 45,45 Q 43,55 40,65"
                    fill="none"
                    stroke="url(#riverGradient)"
                    strokeWidth="2"
                    opacity="0.7"
                  />
                  {/* Ross Barnett Reservoir */}
                  <ellipse
                    cx="52%"
                    cy="25%"
                    rx="15"
                    ry="8"
                    fill="#3b82f6"
                    opacity="0.2"
                  />
                </svg>

                {/* County Boundaries */}
                <svg className="absolute inset-0 w-full h-full opacity-50">
                  <defs>
                    <linearGradient id="countyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#888" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#aaa" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  {/* Hinds County (Jackson area) - Irregular shape */}
                  <path
                    d="M 35,28 Q 40,25 48,26 L 55,28 Q 58,32 57,38 L 55,45 Q 50,48 44,47 L 38,44 Q 35,40 35,35 Z"
                    fill="none"
                    stroke="url(#countyGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="0"
                  />

                  {/* Madison County - Northern area */}
                  <path
                    d="M 42,15 L 58,16 Q 62,18 61,22 L 58,26 Q 52,28 46,27 L 40,24 Q 38,20 40,17 Z"
                    fill="none"
                    stroke="url(#countyGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="0"
                  />

                  {/* Rankin County - Eastern area */}
                  <path
                    d="M 57,26 Q 65,25 70,28 L 72,35 Q 73,40 70,44 L 65,46 Q 60,45 58,42 L 56,36 Q 55,30 57,26 Z"
                    fill="none"
                    stroke="url(#countyGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="0"
                  />

                  {/* Warren County (Vicksburg) - Western area */}
                  <path
                    d="M 12,22 Q 18,20 24,22 L 30,26 Q 32,32 30,38 L 25,40 Q 20,39 16,36 L 12,30 Q 10,25 12,22 Z"
                    fill="none"
                    stroke="url(#countyGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="0"
                  />

                  {/* Forrest County (Hattiesburg) - Southern area */}
                  <path
                    d="M 58,62 Q 64,60 70,63 L 73,68 Q 74,73 71,76 L 66,78 Q 60,77 58,74 L 56,69 Q 55,65 58,62 Z"
                    fill="none"
                    stroke="url(#countyGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="0"
                  />

                  {/* Pike County (McComb) - Southwestern area */}
                  <path
                    d="M 28,62 Q 34,60 40,62 L 43,67 Q 44,72 41,75 L 36,77 Q 30,76 28,73 L 26,68 Q 25,64 28,62 Z"
                    fill="none"
                    stroke="url(#countyGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="0"
                  />

                  {/* County Labels - More subtle styling */}
                  <g className="opacity-90">
                    <text x="46%" y="37%" textAnchor="middle" className="fill-gray-300 text-[11px] font-medium uppercase tracking-wider">Hinds</text>
                    <text x="50%" y="21%" textAnchor="middle" className="fill-gray-300 text-[11px] font-medium uppercase tracking-wider">Madison</text>
                    <text x="64%" y="36%" textAnchor="middle" className="fill-gray-300 text-[11px] font-medium uppercase tracking-wider">Rankin</text>
                    <text x="21%" y="31%" textAnchor="middle" className="fill-gray-300 text-[11px] font-medium uppercase tracking-wider">Warren</text>
                    <text x="64%" y="70%" textAnchor="middle" className="fill-gray-300 text-[11px] font-medium uppercase tracking-wider">Forrest</text>
                    <text x="34%" y="70%" textAnchor="middle" className="fill-gray-300 text-[11px] font-medium uppercase tracking-wider">Pike</text>
                  </g>
                </svg>

                {/* Highway Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                    <pattern id="roadDash" patternUnits="userSpaceOnUse" width="10" height="2">
                      <rect width="5" height="2" fill="#666" />
                    </pattern>
                  </defs>
                  {/* I-55 North-South */}
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#666" strokeWidth="2" />
                  {/* I-20 East-West */}
                  <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#666" strokeWidth="2" />
                  {/* US-49 */}
                  <line x1="35%" y1="0" x2="65%" y2="100%" stroke="url(#roadDash)" strokeWidth="1.5" />
                  {/* US-98 */}
                  <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#roadDash)" strokeWidth="1.5" />
                </svg>

                {/* Service Area - Mississippi */}
                <div className="absolute inset-0">
                  {/* Triangle connecting Jackson, Hattiesburg, and McComb */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0.15" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon
                      points="50,35 65,70 35,70"
                      fill="url(#triangleGradient)"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      filter="url(#glow)"
                      style={{
                        transform: 'scale(4)',
                        transformOrigin: 'center'
                      }}
                    />
                  </svg>

                  {/* Coverage Area Ripple Effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-[450px] h-[450px] rounded-full bg-red-500/5 border border-red-500/20 animate-ping" style={{ animationDuration: '4s' }} />
                    <div className="absolute w-[450px] h-[450px] rounded-full bg-red-500/5 border border-red-500/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }} />
                    <div className="w-[450px] h-[450px] rounded-full bg-red-500/5 border-2 border-red-500/20" />
                  </div>
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
                    <div className={`relative ${selectedArea === area.name ? 'scale-125' : ''} transition-transform`}>
                      {/* Pulse Effect for Active Areas */}
                      {area.active && (
                        <div className="absolute inset-0 animate-ping">
                          <div className={`w-full h-full rounded-full ${
                            area.highlight ? 'bg-red-500' : 'bg-blue-500'
                          } opacity-20`}></div>
                        </div>
                      )}

                      {/* Main Marker */}
                      <div className={`relative flex items-center justify-center transition-all ${
                        area.highlight
                          ? 'w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 ring-4 ring-red-500/30 shadow-lg shadow-red-500/50'
                          : selectedArea === area.name
                          ? 'w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/50'
                          : hoveredArea === area.name
                          ? 'w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-700 ring-2 ring-gray-500/30'
                          : 'w-5 h-5 bg-gradient-to-br from-gray-700 to-gray-800 ring-2 ring-gray-600/30'
                      } rounded-full`}>
                        {area.highlight && (
                          <MapPin className="w-4 h-4 text-white drop-shadow-sm" />
                        )}
                      </div>

                      {/* Label with enhanced visibility */}
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all ${
                        selectedArea === area.name || hoveredArea === area.name ? 'opacity-100 scale-110' : 'opacity-70'
                      }`}>
                        <span className={`text-xs font-medium px-2 py-1 rounded backdrop-blur-sm ${
                          area.highlight
                            ? 'bg-red-900/90 text-red-100 shadow-lg'
                            : selectedArea === area.name
                            ? 'bg-blue-900/90 text-blue-100 shadow-lg'
                            : 'bg-gray-900/90 text-gray-100'
                        }`}>
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



                {/* Compass */}
                <div className="absolute top-4 right-4 w-12 h-12 opacity-50">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-gray-400">
                    <path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" opacity="0.5" />
                    <path fill="currentColor" d="M12 2v16" strokeWidth="1" />
                    <text x="12" y="8" textAnchor="middle" className="text-xs font-bold fill-current">N</text>
                  </svg>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-sm"></div>
                      <span className="text-gray-300">Major Service Hub</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
                      <span className="text-gray-300">Service Location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-14 h-3">
                        <line x1="0" y1="6" x2="56" y2="6" stroke="#666" strokeWidth="2" />
                      </svg>
                      <span className="text-gray-300">Interstate</span>
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
                      <span className="text-sm font-medium text-red-400">
                        24/7 Emergency Service
                      </span>
                    </div>

                    <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                      <p className="text-xs text-red-400">
                        Emergency crews on standby for immediate response
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Service Information */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  Our Service Promise
                </h4>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-sm font-medium text-white">24/7 Emergency Response</p>
                      <p className="text-xs text-gray-400">Immediate response for storm damage & leaks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-sm font-medium text-white">Full Roof Replacement</p>
                      <p className="text-xs text-gray-400">Comprehensive Craftsmanship Warranties</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                    <div>
                      <p className="text-sm font-medium text-white">Coverage</p>
                      <p className="text-xs text-gray-400">Jackson to Hattiesburg to McComb & beyond</p>
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
                    href="tel:6017484769"
                    className="w-full bg-white text-red-600 py-3 px-6 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    (601) 748-4769
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
              <div className="text-2xl font-bold text-red-400">24/7</div>
              <div className="text-xs text-gray-400 mt-1">Emergency Service</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">5/5</div>
              <div className="text-xs text-gray-400 mt-1">Google Rating</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">100+</div>
              <div className="text-xs text-gray-400 mt-1">Miles Coverage</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">Lifetime</div>
              <div className="text-xs text-gray-400 mt-1">Craftsmanship Warranty</div>
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
