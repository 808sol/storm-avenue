import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

export function SocialSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/storm_avenue',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/storm_avenue',
      icon: Instagram,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/storm_avenue',
      icon: Twitter,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fdfcf3' }}>
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-12 leading-tight tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          SOCIALS
        </h2>

        {/* Logo and Social Icons */}
        <div className="flex justify-center items-center space-x-8">
          {/* Storm Avenue Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/social-section-logo.png"
              alt="Storm Avenue"
              width={200}
              height={200}
              className="w-32 h-32 md:w-36 md:h-36 object-contain"
              unoptimized
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={`${social.name}-${index}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-black hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  <social.icon className="h-8 w-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
