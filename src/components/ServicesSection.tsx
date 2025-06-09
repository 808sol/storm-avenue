import Image from 'next/image'

export function ServicesSection() {
  const services = [
    {
      title: 'RESIDENTIAL SERVICES',
      description: 'Roof Replacement & Repair',
      image: '/residential.jpg',
      buttonText: 'REQUEST QUOTE',
    },
    {
      title: 'COMMERCIAL SERVICES',
      description: 'Roof Replacement & Repair',
      image: '/commercial.jpg',
      buttonText: 'REQUEST QUOTE',
    },
    {
      title: 'ROOF INSPECTION',
      description: 'Professional Roof Assessment',
      image: '/roof-inspection-custom.jpg',
      buttonText: 'BOOK ROOF INSPECTION',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fdfcf3' }}>
      <div className="mx-auto max-w-7xl">
        {/* Main heading - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-black leading-tight tracking-wide px-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            YOUR AVENUE TO STORM PROTECTION AND RECOVERY
          </h2>
        </div>

        {/* Services Grid - Mobile and Tablet optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 services-tablet-grid">
          {services.map((service, index) => (
            <div key={service.title} className="text-center hover-lift group" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-silver uppercase tracking-wide group-hover:text-primary-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="pt-4">
                  <a
                    href="/contact-us"
                    className="inline-block rounded-full bg-primary-black px-3 py-2 sm:px-4 sm:py-3 text-sm font-bold text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg uppercase tracking-wide relative overflow-hidden group/btn flex items-center justify-center"
                  >
                    <span className="relative z-10">{service.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>

              {/* Logos for Residential Services */}
              {service.title === 'RESIDENTIAL SERVICES' && (
                <div className="flex justify-center items-center space-x-8 mt-8 w-full">
                  <div className="text-center badge-container">
                    <Image
                      src="/gaf-master-elite.png"
                      alt="GAF Master Elite Residential Roofing Contractor"
                      width={200}
                      height={200}
                      className="w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                      unoptimized
                    />
                  </div>
                  <div className="text-center badge-container">
                    <Image
                      src="/atlas-protects.png"
                      alt="Atlas Protects Certified Contractor"
                      width={200}
                      height={200}
                      className="w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                      unoptimized
                    />
                  </div>
                </div>
              )}

              {/* Certification Badge - Only for Roof Inspection */}
              {service.title === 'ROOF INSPECTION' && (
                <div className="flex justify-center items-center mt-8 w-full">
                  <div className="text-center badge-container">
                    <Image
                      src="/inspection_badge.PNG"
                      alt="HAAG Certified Inspector - Residential Roofs"
                      width={200}
                      height={200}
                      className="w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                      unoptimized
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
