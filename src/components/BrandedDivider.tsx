import Image from 'next/image'

export function BrandedDivider() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-600"></div>

        {/* Center logo */}
        <div className="mx-4">
          <Image
            src="/storm-avenue-hero-logo.PNG"
            alt="Storm Avenue"
            width={40}
            height={40}
            className="opacity-60"
            unoptimized
          />
        </div>

        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
      </div>
    </div>
  )
}
